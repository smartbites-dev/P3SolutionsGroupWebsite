# Backlog

Deferred work, roughly by readiness. Direction lives in
[`memory/roadmap.md`](../memory/roadmap.md).

## Ready when content exists
- **Insights section + routing.** Needs a router, build-time prerendering, per-article
  metadata and `Article` JSON-LD, a generated sitemap, and the `netlify.toml` SPA fallback
  uncommented. Blocked on having a first article, not on engineering.
- **Generate `sitemap.xml` at build time** from `src/data/site.ts` instead of hand-maintaining
  it. Not worth the machinery at one URL; do it at the second or third.

## Ready when the business is
- **Additional ventures.** Append to `src/data/ventures.ts`; the grid adapts on its own.
- **Real products.** `src/data/products.ts` describes capability areas rather than named
  products on purpose. Replace entries as things are genuinely productized.

## Nice to have
- **Logo wordmark revision** — the mark still carries the old
  "Integrating People, Practices, and Principles" tagline. See
  [`memory/brand.md`](../memory/brand.md).
- **Custom email sender** for form notifications — outgoing webhook → Netlify Function → own
  provider. Deferred deliberately; see
  [`features/contact-form/decisions.md`](../features/contact-form/decisions.md).
- **Proper 1200×630 OG card.** Currently the logo at 1200×859, which letterboxes in previews.
- **Retire `.bolt/`** — `config.json` and `prompt` are Bolt.new scaffolding. The only durable
  content (Tailwind, lucide-react, minimal dependencies) is now in
  [`memory/conventions.md`](../memory/conventions.md).

## Explicitly not planned
Analytics, tag manager, CMS, blog engine, gated content, marketing automation.
