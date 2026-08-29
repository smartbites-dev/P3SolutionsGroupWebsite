# Dark Tone Rhythm — Design

## New token
One addition to `tailwind.config.js`: `p3.charcoal` (`#1e1e1e`) — sits between `p3.deep`
(`#0a0a0a`) and `p3.mist` (`#f5f5f5`), giving the Maturity Model section a shade that's clearly
"dark family" but visibly lighter than the Hero/AI-DLC/closing-sequence black. `Section.tsx`
gets a `'charcoal'` tone alongside `'white' | 'mist' | 'dark'`, and its `dark` boolean (which
drives the eyebrow/heading/intro text color) becomes `tone === 'dark' || tone === 'charcoal'` —
both render white text, just on different backgrounds.

## Why most of this isn't a `tone` prop flip
`Section.tsx` already gives eyebrow/title/intro correct dark-mode color for free via its `dark`
boolean — that's how `AiDlc` (née `OperatingSystem`) works today. But every section's *content*
(cards, list items, links, icons, borders) is hand-styled with light-background assumptions
(`border-zinc-200`, `bg-white`, `text-p3-ink`, `text-zinc-600`) that a tone flip doesn't touch.
Three sections (`Hero`, `BuiltInsideP3`, `About`) don't use `Section` at all — hand-rolled
`<section>` markup — so they get zero automatic help. Reaching "meaningfully darker" means
restyling content inside six components, not changing four `tone` props.

## One dark-card language, reused everywhere
Rather than invent per-component dark styling, every card/panel inside a newly-dark section
uses the same treatment already established by `StackDiagram`'s non-accent nodes and the
`Tag` component's `dark` tone:

| Element | Light (today) | Dark (new) |
|---|---|---|
| Card border/bg | `border-zinc-200 bg-white` | `border-white/10 bg-white/[0.03]` |
| Heading | inherits `text-p3-ink` (global) | `text-white` |
| Body copy | `text-zinc-600` | `text-zinc-400` |
| Secondary/meta text | `text-zinc-500` | `text-zinc-400`/`text-zinc-500` (kept, still legible on dark) |
| Divider | `border-zinc-100`/`200` | `border-white/10` |
| Link, default → hover | `text-p3-red` → `text-p3-red-deep` | `text-p3-red` → `text-white` (`red-deep` is a *darker* red, chosen for AA on white; on a dark background hovering into it would reduce contrast, not increase it) |
| Dashed "not yet" block | `border-dashed border-zinc-300` | `border-dashed border-white/15` |

This is the same visual system `AiDlc`'s `StackDiagram` and dark `Tag` already shipped — applying
it elsewhere is consistent, not a new idea.

## Section-by-section

**`Hero.tsx`** (hand-rolled, no `Section`) — `bg-white` → `bg-p3-deep`; `p3-grid` → `p3-grid-dark`;
the light-fade gradient overlay (`from-white/40 via-white/85 to-white`) → a dark equivalent
(`from-p3-deep/40 via-p3-deep/85 to-p3-deep`); `<Eyebrow size="lg">` needs `tone="dark"` (Eyebrow
doesn't get Section's automatic handling — it's called directly); heading's `<span>` stays
`text-p3-red` (accent color, unaffected by background), the non-accent line needs `text-white`
explicitly since it currently relies on the global `text-p3-ink` default; body copy → `zinc-400`;
the `border-b border-zinc-100` on the outer `<section>` is **removed** — that border is exactly
the seam this feature is asking not to have between Hero and AI-DLC.

**`AiDlc.tsx`** — already dark; unchanged.

**`MaturityModel.tsx`** — `tone="mist"` → `tone="charcoal"`. Its ladder-wrapper card
(`border-zinc-200 bg-white`) → the dark-card language above. The closing pull-quote
(`text-zinc-600` / `text-p3-ink` strong) → `zinc-400` / `text-white`.

**`MaturityLadder.tsx`** (diagram) — single consumer, going fully dark, so restyled directly
rather than kept dual-mode:
- `primary` (Level 3): unchanged — red-filled circle with white text already works on any
  background.
- `default` (Levels 0–2): circle `bg-white` → `bg-white/5`; heading `text-p3-ink` → `text-white`;
  trigger label `text-p3-red-deep` → `text-p3-red` (same reasoning as the link-hover row above —
  `red-deep` was picked for AA against *white*; plain `p3-red` is the right choice against dark);
  action copy `text-zinc-600` → `text-zinc-400`.
- `muted` (Levels 4–5): circle `bg-white` → `bg-white/5`, border → `border-white/15`; all text
  shifts one step further down (`text-zinc-500`/`600`) so the de-emphasis reads correctly against
  a dark background too, not just against white.

**`Measurement.tsx`, `Capabilities.tsx`** — untouched.

**`BuiltInsideP3.tsx`** (hand-rolled) — `bg-white`/`border-y border-zinc-200` → `bg-p3-deep`, no
border (contiguous with `Ventures` below). `<Eyebrow>` → `tone="dark"`. Heading's non-accent line
→ `text-white`. Body copy → `zinc-400`. Timeline: numbered circle (`border-zinc-200 bg-white
text-p3-red`) → `border-white/15 bg-white/5 text-p3-red`; connecting line `bg-zinc-200` →
`bg-white/15`; step heading → `text-white`; step detail → `zinc-400`.

**`Ventures.tsx`** — `Section` gets `tone="dark"`. Venture card and its header strip, status
pill, summary/body/highlights, and the "More To Come" dashed block all take the dark-card
language above.

**`About.tsx`** (hand-rolled) — `bg-p3-mist` → `bg-p3-deep`. `<Eyebrow>` → `tone="dark"`. Heading
→ `text-white`. Body paragraphs → `zinc-400`; the closing `font-medium text-p3-ink` line →
`text-white`. The four principle cards take the dark-card language above.

**`Contact.tsx`** — `Section` gets `tone="dark"`. All three cards ("Send us a message," "A good
fit looks like," "Prefer to reach out directly") take the dark-card language above. Phone/email
rows: border → `border-white/10`, value text `text-p3-ink` → `text-white` (hover-to-red
unchanged).

**`ContactForm.tsx`** — narrow, deliberate scope: `labelClass` color `zinc-500` → `zinc-400`;
the success block's heading/body → `text-white`/`zinc-400`, its "send another" link hover →
`hover:text-white`; the error block's text color `text-p3-red-dark` (`#830000`) → `text-p3-red`
— `red-dark` was chosen for AA against a *white* error card and is nearly invisible on a dark
background, so this one is a genuine bug fix, not just a preference; the helper text
(`"We'll only use this to reply..."`) → `zinc-400`. **`fieldClass` — the actual input styling —
is not touched.** Inputs stay light/white boxes inside the now-dark card, per the requirement:
this is the one place a "light element on a dark section" is intentional, because it's zero risk
to already-verified accessible form-control styling.

**`Footer.tsx`** — already dark; unchanged.

## Known, accepted limitation
The global `:focus-visible` ring (`index.css`) uses `ring-offset-white`, which will show a small
white gap around a focused element on the new dark sections. It doesn't fail contrast — if
anything the ring is more visible against dark — but it's a visible seam. Not fixed here:
theming focus rings per-section is real additional scope (would need a dark variant threaded
through every interactive element), and the requirement is a visual rhythm change, not a focus-
ring overhaul. Flagged as a follow-up, not silently left unmentioned.
