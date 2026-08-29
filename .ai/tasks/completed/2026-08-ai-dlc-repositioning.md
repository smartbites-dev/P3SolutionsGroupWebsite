# AI-DLC Repositioning — Completed 2026-08-29

**Spec:** [`features/ai-dlc-repositioning/`](../../features/ai-dlc-repositioning/)

## What shipped
Repositioned the site from "AI-native venture studio" to **AI-Driven Software Delivery** — the
primary commercial wedge is now helping engineering organizations turn individual AI coding
adoption into a repeatable, governed, measurable software-delivery capability. Broader P3
capabilities (business operations, AI operating systems, product development, architecture)
remain on the site, consolidated into one secondary section.

- Locked hero headline/subhead; new primary nav (`AI-DLC · Capabilities · Ventures · About ·
  Contact`), matching page scroll order
- New AI-Driven Software Delivery section (dark tone, moved from `OperatingSystem`), replacing
  `WhatWeDo` and `OperatingSystem`
- New 6-level AI-DLC maturity model visualization (Level 3 emphasized, Levels 4–5 muted, not
  hidden), reusing the existing ladder-diagram pattern
- New Measurement section — locked "AI activity is not the outcome" language, categories only,
  no dashboard implied
- `OperatingSystem` / `Products` / `Services` consolidated into one `Capabilities` section
- SmartBites/Ventures reframed as product + proving ground; `BuiltInsideP3` names it directly
- Founder (Joe Davault) named once in `About`, tied to the real title/background already on
  record in `brand/google-workspace/build-signatures.py`
- `index.html` metadata/JSON-LD rewritten; Contact form `interest` options updated in both
  `ContactForm.tsx` and the Netlify stub, kept in sync

## Files
Added: `src/data/{maturity,sdlcStack,capabilities,measurement}.ts`,
`src/components/diagrams/MaturityLadder.tsx`,
`src/components/sections/{AiDlc,MaturityModel,Measurement,Capabilities}.tsx`.
Deleted: `src/data/{pillars,ladder,osLayers,products,services}.ts`,
`src/components/sections/{WhatWeDo,HowWeThink,OperatingSystem,Products,Services}.tsx`,
`src/components/diagrams/LadderDiagram.tsx`.
Edited: `src/App.tsx`, `index.html`, `src/data/{site,ventures}.ts`,
`src/components/diagrams/StackDiagram.tsx`,
`src/components/sections/{Hero,Ventures,BuiltInsideP3,About,Contact}.tsx`,
`src/components/ui/ContactForm.tsx`.

## Verified
`npm run typecheck`, `npm run lint`, `npm run build` all pass. Visual pass at desktop width via
a static preview server confirmed section order/spacing, the dark/light tone hierarchy, the
maturity ladder's primary/muted emphasis, the SmartBites card, and nav anchors. Contact section
specifically was verified via DOM state and the accessibility tree (all labels/options correct)
after screenshot capture became unreliable partway through the session — see
[`decisions.md`](../../memory/decisions.md) if that recurs.

## Known limitation
True mobile/tablet breakpoint screenshots were not achievable this session —
`resize_window` did not change the actual browser viewport (`window.innerWidth` stayed fixed
regardless of the requested size). Responsive correctness for the one new/changed diagram
(`MaturityLadder`, 6-column grid) rests on it being a mechanical extension of the same
`md:grid-cols-N` pattern already shipped and proven at 5 columns — not a fresh pattern. Worth a
manual phone/tablet check on the live site.

## Backlog spun out
`Ventures.tsx`'s "More To Come" wording reads slightly stale against the new framing — captured
in [`tasks/backlog.md`](../backlog.md), explicitly non-blocking, untouched by this feature.
