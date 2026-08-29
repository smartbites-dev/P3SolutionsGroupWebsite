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
- **`Ventures.tsx`'s "More To Come" wording** — reads slightly off now that the section frames
  SmartBites as proof of practice, not just "the first of more companies." Noted during
  `ai-dlc-repositioning` review; explicitly non-blocking, left untouched for that feature.
- **Logo wordmark revision** — the mark still carries the old
  "Integrating People, Practices, and Principles" tagline. See
  [`memory/brand.md`](../memory/brand.md).
- **Custom email sender** for form notifications — outgoing webhook → Netlify Function → own
  provider. Deferred deliberately; see
  [`features/contact-form/decisions.md`](../features/contact-form/decisions.md).
- **Possibly split the provider adapters.** `AGENTS.md` is currently a symlink to `CLAUDE.md`,
  so the two cannot drift. If Claude-specific and generic-agent instructions ever genuinely
  diverge, replace the symlink with two independent thin pointers into
  [`.ai/README.md`](../README.md). Non-blocking — do not introduce the complexity before the
  divergence is real.
- **Proper 1200×630 OG card.** Currently the logo at 1200×859, which letterboxes in previews.
- **Retire `.bolt/`** — `config.json` and `prompt` are Bolt.new scaffolding. The only durable
  content (Tailwind, lucide-react, minimal dependencies) is now in
  [`memory/conventions.md`](../memory/conventions.md).

## Explicitly not planned
Analytics, tag manager, CMS, blog engine, gated content, marketing automation.
