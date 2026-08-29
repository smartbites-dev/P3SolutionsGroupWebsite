# AI-DLC Repositioning — Requirements

**Status:** Shipped (2026-08-29)

## Purpose
Reposition the homepage around P3's primary commercial wedge — helping engineering
organizations turn individual AI coding adoption into a repeatable, governed, measurable
software-delivery capability — while keeping P3's broader AI-enabled-organization vision
present as a clearly secondary, "just in time, not just in case" set of capabilities. This is a
positioning and content-architecture change, not a rebuild: the existing content-as-data
architecture, visual identity, and accessibility floor are preserved throughout.

## Must

**Positioning**
- Lock the hero headline: *"Your Developers Adopted AI. Your Engineering System Didn't."*
- Use the supporting line: *"P3 helps engineering organizations turn individual AI coding
  experiments into a repeatable, governed, measurable software-delivery capability."*
- Name the primary offering **"AI-Driven Software Delivery"** (customer-facing). Treat
  **"P3 AI-DLC"** as the methodology name used underneath it, introduced once and defined
  before reuse — not the offering's product name.

**Structure**
- Give the AI-Driven Software Delivery section the site's strongest ("dark") visual
  treatment, moved off `OperatingSystem`. It replaces `OperatingSystem` as the section that
  owns that tone — the page has one dark section, and it now marks the primary wedge.
- Primary nav is exactly five items, **in this order**: `AI-DLC · Capabilities · Ventures ·
  About · Contact`. The maturity model does **not** get its own nav entry. Because this is a
  single-page anchor-nav site, the five anchored sections must appear in the page in the same
  left-to-right order as the nav — a nav that disagrees with scroll order is a defect, not a
  stylistic choice.
- Consolidate the existing `OperatingSystem` / `Products` / `Services` story, **and the
  existing `WhatWeDo` three-pillar section**, into one secondary "Capabilities" area,
  preserving exactly these four capability areas: AI-Enabled Business Operations, AI
  Operating Systems, AI-Driven Product Development, Architecture & AI Transformation.
  `WhatWeDo`'s current copy (the "Build / Productize / Transform" venture-studio pillars) is
  retired, not carried forward unrevised — it is the framing this repositioning replaces, and
  leaving it live anywhere on the page would contradict the rest of the change.

**Maturity model**
- Visualize the 6-level AI-DLC → ADLC maturity model (Level 0–5).
- Level 3 (AI-DLC) receives the primary visual emphasis.
- Levels 4–5 (Agentic AI-DLC, ADLC) are visually de-emphasized as later, not-yet-advocated
  stages — shown, not hidden, so the curve is honest about where "further" leads.
- The page must clearly, explicitly state that maximum autonomy is not the objective.

**Measurement**
- Include a Measurement section preserving this language exactly:
  *"AI activity is not the outcome. Software-delivery outcomes are."*
- Must not imply P3 currently has a measurement dashboard or a mature analytics product —
  name outcome *categories*, not a tool.

**SmartBites**
- Reframe SmartBites as both a real P3-built company/product and a live proving ground for
  P3's AI-driven software-delivery practices.
- Must not imply customer case-study results from that reframing.

**Founder**
- Name Joe Davault exactly once, in `About`.
- Establish founder-market fit through the stated intersection (20+ years software
  engineering + architecture + full SDLC experience + current hands-on AI development
  practice) — emphasis stays on P3 as a company, not on the founder individually.

**CTA**
- `"Assess Your AI Engineering Maturity"` may remain the primary CTA copy, but the copy around
  it must read as a scoped diagnostic conversation — not a self-service tool or an established
  proprietary assessment product.

**Metadata and form copy (data-only edits)**
- Update `index.html`'s title, meta description, OG/Twitter tags, and the `@graph` JSON-LD
  (`knowsAbout`, `hasOfferCatalog`) to match the new positioning. Leaving stale metadata after
  a full repositioning misrepresents the page to search engines and social previews, which is
  its own accuracy problem.
- Update the Contact form's `interest` option **labels** (data values only — see
  [`features/contact-form/design.md`](../contact-form/design.md) for the sync constraint
  between `ContactForm.tsx` and the `index.html` Netlify stub) so they reflect AI-DLC buyer
  intent rather than the retired Consulting/Products/Ventures framing. This is a values-only
  edit to an existing array in both files — not a change to the form's submission mechanism,
  spam handling, or Netlify configuration, which stay out of scope (see below).

**Preserve throughout**
- Existing visual identity and brand tokens (`memory/brand.md`)
- Accessibility floor (`memory/conventions.md`): skip link, focus-visible states, working
  mobile nav, real labels
- Content-as-data architecture (`memory/architecture.md`): copy lives in `src/data/*.ts`
- The proof philosophy already expressed in `BuiltInsideP3`
- No-fabricated-claims discipline: no invented customers, results, percentages, ROI, case
  studies, certifications, or enterprise deployments

## Must not
- Use "AI Engineering Accelerator" as the primary offering name
- Present Levels 4–5 of the maturity model with the same visual confidence/weight as Level 3
- Claim or imply a shipped, scored AI Engineering Maturity Assessment product exists
- Claim or imply a shipped measurement/analytics dashboard exists
- Turn `About` into a founder biography, or name the founder more than once
- Add a sixth primary nav item, or let nav order and page order disagree
- Delete or abandon the four broader-capability areas — they remain real, just secondary
- Leave any section (including `WhatWeDo`) carrying the retired venture-studio pillar framing
- Change the contact form's submission mechanism, spam handling, or Netlify configuration
- Add a new npm dependency, an image-based diagram, or a charting library
- Remove the `tsc -b` build gate, or reintroduce inline styles or JS hover handlers
- Push to `main` or deploy without explicit separate approval — no staging environment exists

## Acceptance criteria
- [ ] Hero headline and subheadline match the locked copy exactly
- [ ] Primary nav has exactly 5 items, in order, and that order matches the sections' order
      down the page
- [ ] The dark-toned section is AI-Driven Software Delivery, not `OperatingSystem`
- [ ] A single Capabilities section presents all 4 preserved capability areas; `WhatWeDo` no
      longer exists as a separate section
- [ ] Maturity model shows 6 levels; Level 3 is visually primary; Levels 4–5 are visually
      de-emphasized; a visible statement says maximum autonomy is not the goal
- [ ] Measurement section shows the exact preserved language and lists measurement
      *categories*, not a claimed tool
- [ ] SmartBites copy reads as company + proving ground, with no case-study-style results
- [ ] Founder named exactly once in `About`, with no other section referencing an individual
- [ ] CTA copy reads as a conversation/diagnostic, not a self-service product
- [ ] `index.html` metadata and JSON-LD reflect the new positioning
- [ ] `ContactForm.tsx`'s `interests` and the `index.html` stub's field values match exactly
- [ ] `npm run typecheck`, `npm run lint`, and `npm run build` all pass
- [ ] Standing regression checklist re-verified (mobile nav, focus states, contrast, canonical
      URL, dark-mode logo — see [`agents/reviewer.md`](../../agents/reviewer.md))
- [ ] No claim on the page is unsupported by what P3 has actually done

## Explicitly out of scope for this feature
- Building a self-service or scored maturity-assessment tool
- Building any measurement/analytics dashboard
- Adding routing, a blog/Insights section, or any new page
- Changing the contact form's mechanism, Netlify configuration, or Google Workspace assets
  (only the `interest` option *labels* are in scope, per above)
