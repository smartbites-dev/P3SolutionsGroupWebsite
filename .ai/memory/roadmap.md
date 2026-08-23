# Roadmap

Direction, not a task list. Work items live in [`../tasks/`](../tasks/).

## Now — credibility gaps
The site is live and correct, but a few claims are thinner than they need to be.

- **Name the founder.** The About section says "founder-led" and names nobody. It is the
  weakest copy on the page.
- **SmartBites specifics** — real logo (currently an "S" lettermark), confirmed link (currently
  the App Store listing), verified `™`, confirmed operating status.

## Next — Insights
Deliberately not in v1 nav, because an empty section reads worse than none
([`decisions.md`](./decisions.md)). Turning it on means:
1. A router and a real `/insights/{slug}` URL per article
2. **Build-time prerendering** — client-rendered routes index slowly and share one OG card
3. Per-article metadata and `Article` JSON-LD
4. Sitemap generated from data rather than hand-maintained
5. Uncomment the SPA fallback in `netlify.toml`

Candidate material exists: spec-driven development, encoding architecture for agents, the AI
development maturity curve, where human gates belong. All must be anonymised — the source
notes name a specific employer and vendor.

## Later — when the shape demands it
- **Additional ventures.** The section already supports them; adding one is a data edit.
- **Real products.** `src/data/products.ts` currently describes capability areas, not named
  products, on purpose. Replace entries as things are genuinely productized.
- **Custom email sender.** Notifications come from `formresponses@netlify.com`. Deferred with
  reasoning in [`features/contact-form/decisions.md`](../features/contact-form/decisions.md).
- **Logo wordmark revision.** The mark still carries the old tagline
  ([`brand.md`](./brand.md)).

## Explicitly not planned
Analytics, tag managers, a CMS, a blog engine, gated content, marketing automation. The site is
small and should stay cheap to run and fast to load.
