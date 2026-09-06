#!/usr/bin/env node
// Runs after `vite build` and `vite build --config vite.ssr.config.ts`.
// Writes one real static file per Insights article to dist/insights/{slug}/index.html —
// there is no client-side route for these; Netlify serves them directly.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const dist = join(root, 'dist');

const { insights, renderInsightArticle } = await import(join(root, 'dist-ssr/entry-ssr.mjs'));

const manifest = JSON.parse(readFileSync(join(dist, '.vite/manifest.json'), 'utf-8'));
const mainEntry = manifest['index.html'];
const hydrateEntry = manifest['src/insights-hydrate.tsx'];

if (!mainEntry?.css?.length) {
  throw new Error('Expected the main build entry to emit a CSS file — check vite.config.ts.');
}
if (!hydrateEntry?.file) {
  throw new Error('Expected an insights-hydrate build entry — check vite.config.ts rollupOptions.input.');
}

const cssHref = `/${mainEntry.css[0]}`;
const hydrateSrc = `/${hydrateEntry.file}`;

const SITE_URL = 'https://p3solutionsgroup.com';

// Article content lives in a repo-committed, PR-reviewed data file — not
// user-submitted input — but escaping here is cheap insurance against a
// future title/description containing a quote or angle bracket.
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

for (const rawArticle of insights) {
  const article = { ...rawArticle, title: escapeHtml(rawArticle.title), description: escapeHtml(rawArticle.description) };
  const bodyHtml = renderInsightArticle(rawArticle);
  const url = `${SITE_URL}/insights/${article.slug}/`;
  const ogImage = `${SITE_URL}/logo-full.png`;

  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>${article.title} | P3 Solutions Group</title>
    <meta name="description" content="${article.description}" />
    <link rel="canonical" href="${url}" />
    <meta name="theme-color" content="#dd0000" />
    <meta name="robots" content="index, follow, max-image-preview:large" />

    <link rel="icon" type="image/png" href="/favicon.png" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

    <!-- Open Graph -->
    <meta property="og:type" content="article" />
    <meta property="og:site_name" content="P3 Solutions Group" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:url" content="${url}" />
    <meta property="og:title" content="${article.title}" />
    <meta property="og:description" content="${article.description}" />
    <meta property="og:image" content="${ogImage}" />
    <meta property="og:image:alt" content="P3 Solutions Group" />
    <meta property="article:published_time" content="${article.date}" />

    <!-- Twitter / X -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${article.title}" />
    <meta name="twitter:description" content="${article.description}" />
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
      {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": ${jsonLdString(rawArticle.title)},
        "description": ${jsonLdString(rawArticle.description)},
        "datePublished": "${article.date}",
        "url": "${url}",
        "image": "${ogImage}",
        "publisher": {
          "@type": "Organization",
          "name": "P3 Solutions Group",
          "url": "${SITE_URL}/",
          "logo": { "@type": "ImageObject", "url": "${SITE_URL}/logo-full.png" }
        }
      }
    </script>
  </head>
  <body>
${bodyHtml}
    <script type="module" src="${hydrateSrc}"></script>
  </body>
</html>
`;

  const outDir = join(dist, 'insights', article.slug);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'index.html'), html);
  console.log(`Wrote dist/insights/${article.slug}/index.html`);
}
