# Site Repositioning — Completed 2026-08-22

**Commits:** `09bbf88`, `f283b90`

## What shipped
Replaced the "Technology Investment Partners" positioning with the AI venture studio framing,
and rebuilt the implementation to support it.

- New IA: Hero → What We Do → How We Think → AI Operating Systems → Companies → Products →
  Built Inside P3 → AI Services → About → Contact
- 308-line `App.tsx` monolith → data-driven component tree
- Removed all investment/VC framing, including the "What We Look For" deal criteria
- Hero type scale bumped afterwards (`f283b90`) — eyebrow and pillar labels read undersized
  against a 60px headline

## Defects fixed along the way
- 22 TypeScript errors (`Property 'style' does not exist on type 'EventTarget'`), and
  `npm run build` now gates on `tsc -b` so they cannot return
- **No mobile navigation existed** below 768px
- No skip link, no `:focus-visible` states
- Body copy at `#a7a9ac` failed WCAG AA on white
- `/vite.svg` favicon 404'd on every page load
- Logo assets: 2.4 MB → ~100 KB

## Durable outcomes
Conventions in [`memory/conventions.md`](../../memory/conventions.md); architecture in
[`memory/architecture.md`](../../memory/architecture.md).
