#!/usr/bin/env node
// Regenerates public/sitemap.xml from site data before `vite build` runs, so
// the normal static-copy of public/ into dist/ carries the updated file.
// Plain Node, no TS/TSX: reads the raw JSON directly rather than importing
// src/data/insights.ts.
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const insights = JSON.parse(readFileSync(join(root, 'src/data/insights.json'), 'utf-8'));
const published = insights.filter((a) => a.status === 'published');

const urls = [
  { loc: 'https://p3solutionsgroup.com/', lastmod: '2026-08-22', changefreq: 'monthly', priority: '1.0' },
  { loc: 'https://p3solutionsgroup.com/insights/', lastmod: '2026-09-05', changefreq: 'weekly', priority: '0.8' },
  ...published.map((article) => ({
    loc: `https://p3solutionsgroup.com/insights/${article.slug}/`,
    lastmod: article.date,
    changefreq: 'monthly',
    priority: '0.7',
  })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

writeFileSync(join(root, 'public/sitemap.xml'), xml);
console.log(`Wrote public/sitemap.xml with ${urls.length} URL(s) (${published.length} published article(s), ${insights.length - published.length} planned/excluded).`);
