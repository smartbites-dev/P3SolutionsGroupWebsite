# Dark Tone Rhythm — Completed 2026-08-29

**Spec:** [`features/dark-tone-rhythm/`](../../features/dark-tone-rhythm/)

## What shipped
Turned the site's light/dark alternation into a deliberate structural rhythm: Hero and AI-DLC
now share one continuous dark opening; the Maturity Model sits a shade lighter (new
`p3.charcoal` token) as its own step down; Measurement and Capabilities stay light as the two
breathing-room sections; Built Inside P3, Ventures, About, and Contact form one continuous dark
closing sequence flowing into the already-dark Footer.

- New `p3.charcoal` (`#1e1e1e`) token; `Section.tsx` gained a `charcoal` tone
- `Hero.tsx` converted to dark, seam removed between it and `AiDlc`
- `MaturityModel.tsx` + `MaturityLadder.tsx` restyled for the charcoal background — Level 3
  keeps its red-filled emphasis, Levels 4–5 keep their muted/dashed treatment, both re-tuned for
  a dark background instead of white
- `BuiltInsideP3.tsx`, `Ventures.tsx`, `About.tsx`, `Contact.tsx` converted to dark, all reusing
  the one dark-card language already established by `AiDlc`'s `StackDiagram`/`Tag` (`border-
  white/10 bg-white/[0.03]`, `text-zinc-400` body, `text-white` headings)
- `ContactForm.tsx`: labels and status-message text darkened; the actual input fields
  (`fieldClass`) were deliberately left untouched — light boxes inside the dark card, zero risk
  to already-verified accessible form-control styling
- Fixed a genuine (if minor) pre-existing contrast bug found along the way: the error-message
  text color (`p3-red-dark`) was chosen for AA against a white card and would have been nearly
  invisible against the new dark one — approved as necessary, not scope creep

## Files
Edited only — no additions or deletions: `tailwind.config.js`, `src/components/layout/
Section.tsx`, `src/components/diagrams/MaturityLadder.tsx`,
`src/components/sections/{Hero,MaturityModel,BuiltInsideP3,Ventures,About,Contact}.tsx`,
`src/components/ui/ContactForm.tsx`.

## Verified
`npm run typecheck`, `npm run lint`, `npm run build` all pass. Full visual pass in the running
dev server (a fresh browser tab, after an earlier tab showed a stale-CSS artifact that a new
tab resolved) confirmed the entire tone map end to end, including the Contact form's light
inputs on a dark card.

## Known, accepted limitation
The global `:focus-visible` ring (`index.css`) uses `ring-offset-white`, producing a small white
halo around a focused element on the new dark sections. Doesn't fail contrast — arguably more
visible than on white — but is a visible seam. Explicitly not fixed: theming focus rings
per-section is out of this feature's scope. See `dark-tone-rhythm/design.md`.
