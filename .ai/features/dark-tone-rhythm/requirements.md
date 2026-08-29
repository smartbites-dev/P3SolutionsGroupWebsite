# Dark Tone Rhythm — Requirements

**Status:** Shipped (2026-08-29)

## Purpose
Make the site meaningfully darker, on purpose, by turning the existing light/dark alternation
into a deliberate structural rhythm instead of a single one-off dark section. This is a visual
treatment change only — no IA, content, or component-structure change.

## Must
- **Hero + AI-DLC** render as one continuous dark region — same tone, no border/seam between
  them.
- **Maturity Model** is dark, but a visibly lighter shade than Hero/AI-DLC — a new intermediate
  token, not a new hue.
- **Measurement + Capabilities** stay light — the two "breathing room" sections between the
  opening dark run and the closing one.
- **Built Inside P3 → Ventures → About → Contact → Footer** form one continuous dark closing
  sequence, ending in the already-dark Footer.
- The result reads as **meaningfully darker than today** — most of the page, not two sections
  recolored in isolation.
- Every heading, body copy, card, link, and form element inside a newly-dark section must be
  restyled for that background — a `tone` prop flip alone is not sufficient, because most
  section content (cards, lists, links) is hand-styled for a light background today.
- WCAG AA contrast holds on every recolored text/background pairing (`memory/conventions.md`).
- The Contact form's actual input fields (`fieldClass` in `ContactForm.tsx`) are **not**
  restyled — they stay light/white inside the now-dark card. This is a deliberate choice to
  avoid touching already-verified accessible form-control styling; only the surrounding card,
  labels, headings, and status-message text get dark treatment.

## Must not
- No new sections, no reordering, no IA change.
- No new accent hue (no navy, no teal) — only existing `p3.*` tokens plus one new intermediate
  dark token for the Maturity Model shade.
- No glow effects, gradients-as-decoration, stock AI imagery, or other elements drawn from the
  reference mood-board screenshots — those were rejected explicitly in the prior turn.
- No change to the Contact form's submission mechanism, validation, or field set.
- No new npm dependency.
- Commit or push — this lands locally only, for visual review in the running dev server.

## Acceptance criteria
- [ ] Hero and AI-DLC share one background tone with no visible seam between them
- [ ] Maturity Model's background is visibly lighter than Hero/AI-DLC but still clearly "dark"
- [ ] Measurement and Capabilities are unchanged (still light)
- [ ] Built Inside P3, Ventures, About, and Contact all render dark, flowing into Footer with no
      jarring return to light in between
- [ ] Every piece of text inside a newly-dark section is legible at AA contrast against its
      background
- [ ] Contact form inputs remain the existing light field style; only the card/labels/headings
      around them go dark
- [ ] `npm run typecheck`, `npm run lint`, and `npm run build` all pass
- [ ] No new color hex value outside the existing `p3.*` palette plus the one new intermediate
      dark token
- [ ] `git status` shows only the intended files touched; nothing committed
