# AI-DLC Repositioning — Design

## The core constraint
Everything here has to land inside the existing single-page, content-as-data, no-router
architecture ([`memory/architecture.md`](../../memory/architecture.md)). No new components
where an existing pattern already fits — the site's own convention is to generalize a
data-driven component rather than fork a near-duplicate.

## Section order
Nav order and DOM order must agree on a single-page anchor-nav site — a nav that scrolls past
sections out of order is a defect. The five anchored sections appear in the page in exactly
the order they appear in `nav`:

```
Hero (rewritten)
  ↓
AI-Driven Software Delivery   ← #ai-dlc · dark tone, moved from OperatingSystem;
  ↓                             absorbs WhatWeDo's job — WhatWeDo retired, not kept alongside it
Maturity Model                ← no nav entry; reuses LadderDiagram
  ↓
Measurement                   ← no nav entry; new, small
  ↓
Capabilities                  ← #capabilities · consolidates OperatingSystem + Products + Services
  ↓
Built Inside P3               ← no nav entry; copy tweak only, names SmartBites directly
  ↓
Ventures                      ← #companies · SmartBites reframed as product + proving ground
  ↓
About                         ← #about · founder named once
  ↓
Contact                       ← #contact · CTA + fit-list + interest options updated
```

`WhatWeDo.tsx` is retired as a section, not carried forward. Its current copy is the
"Build / Productize / Transform" venture-studio framing this repositioning replaces — keeping
it alive anywhere, even relabeled "secondary," would leave stale positioning on the page. Its
job (explaining what P3 does) is absorbed into the new AI-Driven Software Delivery section.

Net section count: 10 → 9 (`WhatWeDo`, `OperatingSystem`, `Products`, `Services` — four
sections — collapse into two: AI-Driven Software Delivery and Capabilities; Measurement is
added).

## Why the dark tone moves
`OperatingSystem` currently owns the page's one dark section — its strongest visual signal.
Alternating light/mist/dark tone is how this page marks "this is the important idea," so
leaving the dark tone on the now-secondary Capabilities content while the new primary section
sits in plain white would point the page's strongest visual weight at the wrong story. Moving
it onto AI-Driven Software Delivery is required by the approved decision, not optional polish.
`OperatingSystem`'s content, once folded into Capabilities, runs at `mist` tone like the rest
of that consolidated section.

## AI-Driven Software Delivery (`OperatingSystem.tsx` renamed → `AiDlc.tsx`)
- Eyebrow: **"AI-Driven Software Delivery."** The intro paragraph is where "P3 AI-DLC" (the
  methodology name) is introduced once, in body copy — not used as the section's own headline,
  per the requirement that the methodology name isn't the offering's product name.
- `StackDiagram` is repointed from `osLayers.ts` (a generic business-ops stack) to a new
  `sdlcStack.ts`: the lifecycle chain named in the brief — Business Intent → Requirements &
  Design → Architecture → Development → Testing & Review → Security → CI/CD & Release →
  Production & Observability → Business Outcome. 2–3 nodes keep the existing `accent` flag to
  mark where AI participation and human accountability both live (e.g. Architecture, Testing &
  Review, Security) — same accent mechanism `osLayers.ts` already has; `StackDiagram` itself
  needs no code change, only new data.
- The closing pull-quote retargets from "agents handle information movement... strategy,
  relationships, risk stay with people" to: AI handles drafting, retrieval, and repetitive
  execution; architecture, risk, and accountability stay with people.
- The dark `Tag` cloud repoints from generic technologies (MCP, RAG, agents) to the three
  delivery layers the offering promises today — **Assess**, **Design & Standardize**, **Prove
  & Progress** — which is also where `WhatWeDo`'s absorbed content lives, as tags and intro
  prose rather than a second card grid.
- Bottom CTA button: "Assess Your AI Engineering Maturity" → `#contact`.

**Why prose + diagram + tags instead of a card grid (what `WhatWeDo` used)?** The page already
has a card grid in Capabilities and a distinct ladder rhythm immediately below this section.
Stacking a third grid here (cards → cards → ladder) reads as repetitive; three different visual
forms in a row reads as a page that was designed, not templated.

## Maturity Model (`HowWeThink.tsx` renamed → `MaturityModel.tsx`)
`ladder.ts` → `maturity.ts`, single consumer, so no back-compat prop shape is needed — the old
`LadderStep` (`Work → Checklist → System → Automation → Agent`) is fully retired along with
`HowWeThink`, not kept running anywhere else on the page. New type:

```ts
export type MaturityLevel = {
  level: number;           // 0–5
  stage: string;
  trigger: string;
  action: string;
  emphasis?: 'primary' | 'muted';   // Level 3 = 'primary'; Levels 4–5 = 'muted'; else default
};
```

`LadderDiagram` (kept, renamed `MaturityLadder`) gets a small conditional-styling addition —
still hand-built SVG/CSS, no new dependency:
- `'primary'` (Level 3) → filled/accent number circle, bolder stage text — same visual weight
  `osLayers.ts`'s `accent` flag already gives a layer.
- `'muted'` (Levels 4–5) → the dashed-border, lighter-text treatment `Ventures.tsx`'s "More To
  Come" block already establishes for "this is real but not what we're pointing you at yet" —
  reusing that precedent instead of inventing a new visual idea for the same meaning.
- Everything else renders at the diagram's current default styling.

Directly below the diagram, in the position `HowWeThink` currently uses for its pull-quote:
**"P3 does not advocate maximum autonomy. The goal is the level of AI participation that
improves your outcomes without losing control."** This is the sentence the acceptance
criteria check for — it must survive copy edits verbatim in spirit even if wording is tuned.

## Measurement (new, small)
No diagram — there is nothing to visualize yet, and inventing one would contradict "must not
imply a mature analytics product." Structure:
1. A centered statement carrying the locked language verbatim: *"AI activity is not the
   outcome. Software-delivery outcomes are."*
2. A light-mode `Tag` cloud (the same component `AiDlc.tsx` uses in dark mode) listing outcome
   **categories** only: cycle time, lead time for changes, PR review time & iterations,
   deployment frequency, change failure rate, rework & defects, escaped defects, architecture
   violations, security findings, MTTR.

Rejected: a chart/graph mockup implying live analytics — would violate the requirement on its
face.

## Capabilities (`Services.tsx` renamed → `Capabilities.tsx`; `Products.tsx` and
`OperatingSystem.tsx`'s old content retired)
New `src/data/capabilities.ts` merges `products.ts` + `services.ts` + a plain-text summary of
what `osLayers.ts` used to describe visually, down to exactly the four approved areas:
AI-Enabled Business Operations, AI Operating Systems, AI-Driven Product Development,
Architecture & AI Transformation. Card layout reused from `Services.tsx` (icon, title, body);
the `outcomes` bullet list is dropped — these read as capability areas, not service line items
promising outcomes, which fits "secondary, demand-driven" better than the current
outcome-heavy framing.

`osLayers.ts` is deleted once `sdlcStack.ts` (used by `AiDlc.tsx`) replaces its job; `Products.ts`
is deleted; `services.ts` is replaced by `capabilities.ts`.

Rejected alternative: keep `OperatingSystem` / `Products` / `Services` as three separate,
relabeled sections. Rejected because three sections making adjacent-but-not-identical claims
about "AI + business" is exactly the technology-catalog feel this repositioning moves away
from, and the approved decision explicitly asks for one consolidated area.

## Built Inside P3, Ventures
Structure unchanged in both. `BuiltInsideP3.tsx` gets one added sentence naming SmartBites
directly as where the practice runs today, so the proof philosophy stops being a template with
no concrete example attached. `Ventures.tsx`'s intro is reframed as proof, not headline — its
card markup, highlights, and status treatment are untouched; `body`/`highlights` copy shifts to
name SmartBites explicitly as a proving ground for the AI-driven delivery practice, alongside
its existing food-intelligence description. No case-study-style results are added.

## Founder mention
Handled as a copy edit inside the existing `About.tsx` two-paragraph body — not a new section
or component. The existing 4-principle grid (`Systems thinking / Builder mentality / Pragmatic
about AI / Measurable outcomes`) already carries the "why trust P3" weight structurally and
already speaks in "we"; the edit only needs to name the person and the specific edge once,
without adding a second bio moment anywhere else on the page.

## Naming: why not "AI Engineering Accelerator"
The site's four existing service names are plain noun phrases (`AI Operating System Design`,
`Workflow & Agent Automation`, `AI Application Development`, `Architecture & AI
Transformation`) — no program branding, no "Accelerator"/"Bootcamp"/"Program" suffix, and "AI
engineering" itself is ambiguous with the MLOps sense of the term. "AI-Driven Software
Delivery" matches the site's existing naming pattern; "P3 AI-DLC" is kept as the internal/
methodology name, introduced and defined once in the offering section, then reused — the way a
firm names a proprietary framework without branding the sales offering around it.

## CTA
`"Assess Your AI Engineering Maturity"` stays as the button label (approved), but the section
copy immediately around it must describe a conversation, not a tool, score, or report. This is
a copy constraint on the sections housing the CTA (`AiDlc.tsx`, `Contact.tsx`), not a change to
the `Button` component or the contact form's mechanism.

## Metadata and Contact form data
`index.html`: title, meta description, OG/Twitter copy, and the `@graph`'s `knowsAbout` /
`hasOfferCatalog` are rewritten to lead with AI-Driven Software Delivery, with Capabilities as
secondary `Offer` entries. Worth adding while touching this file: a `Person` node for Joe
Davault (`jobTitle`, `sameAs` → the LinkedIn URL already used in
`brand/google-workspace/build-signatures.py`) linked as founder — real, already-published data,
not a new claim.

`ContactForm.tsx`'s `interests` array and the `index.html` Netlify detection stub's matching
`<option>` values move from the retired Consulting/Products/Ventures framing to AI-DLC buyer
intent — a values-only edit in both files, kept in sync per the existing documented constraint
in [`features/contact-form/design.md`](../contact-form/design.md). The form's submission
mechanism, honeypot, and Netlify configuration are untouched.

## Constraints carried over unchanged
No new dependency. Diagrams stay hand-built SVG/CSS. `tsc -b` gates the build. Tailwind
utilities only, no inline styles, no JS hover handlers. Accessibility floor (skip link,
focus-visible, mobile nav, real labels, landmark/heading order) applies to every new and
renamed section. Content stays in `src/data/*.ts`; components stay presentation-only.
