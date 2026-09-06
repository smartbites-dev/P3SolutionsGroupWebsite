#!/usr/bin/env node
// Runs after `vite build` and `vite build --config vite.ssr.config.ts`.
// Writes real static files for /insights and each published /insights/{slug} —
// prerendered via the same <App/> route table used by local dev and the
// production client bundle (see src/entry-static.tsx). '/' is not touched;
// it keeps the hand-authored root index.html, unprerendered, as before.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const dist = join(root, 'dist');

const { publishedInsights, renderRoute } = await import(join(root, 'dist-ssr/entry-static.mjs'));

const manifest = JSON.parse(readFileSync(join(dist, '.vite/manifest.json'), 'utf-8'));
const mainEntry = manifest['index.html'];

if (!mainEntry?.file || !mainEntry?.css?.length) {
  throw new Error('Expected the main build entry to emit a JS file and a CSS file — check vite.config.ts.');
}

const jsSrc = `/${mainEntry.file}`;
const cssHref = `/${mainEntry.css[0]}`;
const SITE_URL = 'https://p3solutionsgroup.com';

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// JSON.stringify is correct JSON-escaping, but doesn't stop a value
// containing a literal "</script>" from closing the surrounding tag early —
// escape "<" as its unicode form, the standard fix for JSON embedded in HTML.
function jsonLdString(value) {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}

function writePage({ routePath, title, description, ogType, jsonLd, bodyHtml }) {
  const url = `${SITE_URL}${routePath}`;
  const ogImage = `${SITE_URL}/logo-full.png`;
  const safeTitle = escapeHtml(title);
  const safeDescription = escapeHtml(description);

  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>${safeTitle} | P3 Solutions Group</title>
    <meta name="description" content="${safeDescription}" />
    <link rel="canonical" href="${url}" />
    <meta name="theme-color" content="#dd0000" />
    <meta name="robots" content="index, follow, max-image-preview:large" />

    <link rel="icon" type="image/png" href="/favicon.png" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

    <!-- Open Graph -->
    <meta property="og:type" content="${ogType}" />
    <meta property="og:site_name" content="P3 Solutions Group" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:url" content="${url}" />
    <meta property="og:title" content="${safeTitle}" />
    <meta property="og:description" content="${safeDescription}" />
    <meta property="og:image" content="${ogImage}" />
    <meta property="og:image:alt" content="P3 Solutions Group" />

    <!-- Twitter / X -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${safeTitle}" />
    <meta name="twitter:description" content="${safeDescription}" />
    <meta name="twitter:image" content="${ogImage}" />
    <meta name="twitter:image:alt" content="P3 Solutions Group" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="${cssHref}" />

    <script type="application/ld+json">
      ${jsonLd}
    </script>
  </head>
  <body>
    <div id="root">${bodyHtml}</div>
    <script type="module" src="${jsSrc}"></script>
  </body>
</html>
`;

  const outDir = join(dist, routePath.replace(/^\//, '').replace(/\/?$/, ''));
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'index.html'), html);
  console.log(`Wrote dist${routePath}index.html`);
}

// /insights — landing page
writePage({
  routePath: '/insights/',
  title: 'Insights',
  description:
    'Notes on AI-driven software delivery — spec-driven development, the AI-DLC to ADLC maturity model, and where human judgment stays load-bearing.',
  ogType: 'website',
  jsonLd: jsonLdString({
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Insights | P3 Solutions Group',
    url: `${SITE_URL}/insights/`,
  }),
  bodyHtml: renderRoute('/insights'),
});

// /insights/{slug} — one per published article
for (const article of publishedInsights) {
  writePage({
    routePath: `/insights/${article.slug}/`,
    title: article.title,
    description: article.description,
    ogType: 'article',
    jsonLd: jsonLdString({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.title,
      description: article.description,
      datePublished: article.date,
      url: `${SITE_URL}/insights/${article.slug}/`,
      image: `${SITE_URL}/logo-full.png`,
      publisher: {
        '@type': 'Organization',
        name: 'P3 Solutions Group',
        url: `${SITE_URL}/`,
        logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo-full.png` },
      },
    }),
    bodyHtml: renderRoute(`/insights/${article.slug}`),
  });
}
