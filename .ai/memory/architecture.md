# Architecture

## Shape
Single-page React app. `App.tsx` is composition only — it renders section components in order
and owns no logic.

```
src/
├── data/          content: site, pillars, ladder, osLayers,
│                  ventures, products, services
├── components/
│   ├── layout/    Header, Footer, Section, Container
│   ├── ui/        Button, Eyebrow, Tag, ContactForm
│   ├── sections/  one component per homepage section
│   └── diagrams/  inline SVG/CSS system diagrams
└── App.tsx        composition only
```

## The rule that matters
**Content is data; components are presentation.** Copy, nav items, ventures, products, and
services live in `src/data/*.ts`. A component reads a typed array and renders it.

Consequences to preserve:
- Adding a venture is one object appended to `src/data/ventures.ts`. The grid switches from a
  single feature card to a two-up layout on its own.
- Adding a nav item is one entry in `src/data/site.ts`.
- Nothing in `components/sections/` should contain a hardcoded marketing sentence that a
  non-engineer might want to change.

## Section components
Each homepage section is self-contained and rendered by `App.tsx`. None reads global state.
Promoting a section to its own page means adding a router and moving one component behind a
route — no restructuring. `NavItem` in `src/data/site.ts` already carries an optional `page`
field for that day.

## Diagrams
`components/diagrams/` holds hand-built SVG/CSS — `LadderDiagram` (the Work→Agent progression)
and `StackDiagram` (the AI operating system layers). **No image files, no chart library.**
The brand direction explicitly rejects stock AI imagery. See [`brand.md`](./brand.md).

## Styling
Tailwind with brand tokens in `tailwind.config.js` under `colors.p3.*`. See
[`conventions.md`](./conventions.md) for the rules that keep it that way.

## Metadata
All SEO metadata, Open Graph, Twitter cards, and JSON-LD live in `index.html` — there is no
head-management library. JSON-LD is a single `@graph` with `Organization`, `WebSite`, and
`WebPage` nodes cross-referenced by `@id`.

If the site ever gains routes, per-route metadata needs prerendering — client-rendered routes
index slowly and share one OG card. See [`roadmap.md`](./roadmap.md).
