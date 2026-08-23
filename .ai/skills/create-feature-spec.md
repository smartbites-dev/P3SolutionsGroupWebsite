# Skill: Create Feature Spec

## Purpose
Turn a request into durable, reviewable feature context before any code is written.

## When to use
Triggered by `/new-feature`, or whenever work is large enough to outlive a single session.
Not for one-line copy edits.

## Inputs / context required
- The user's request in their own words
- [`memory/project-overview.md`](../memory/project-overview.md) and
  [`memory/conventions.md`](../memory/conventions.md)
- Existing `features/` folders, to avoid duplicating a capability

## Procedure

### 1. Read before proposing
Inspect what exists. Most site changes are **data edits** (`src/data/*.ts`), not new features —
say so and stop if that is the case.

### 2. Create `features/{name}/requirements.md`
- **Purpose** — one paragraph, in the user's terms
- **Must** — behaviour required
- **Must not** — explicit non-goals, including anything the brand or conventions forbid
- **Acceptance criteria** — checkable boxes
- **Status** — Proposed / In Progress / Shipped

### 3. Create `design.md` once the approach is settled
How it works, the constraints that shaped it, and *why* an obvious alternative was rejected.
Record real constraints — platform limits, client quirks — not restated requirements.

### 4. Record decisions as they are made
`decisions.md`, dated, one heading each, with the reasoning. A decision belongs here when it is
feature-local; cross-cutting ones go in
[`memory/decisions.md`](../memory/decisions.md).

### 5. Open a task
Feature docs describe the capability. **Work state goes in `tasks/`.**

## Validation / checks
- Requirements are checkable, not aspirational
- Non-goals are explicit
- Nothing is copied from `memory/` — reference it instead
- No invented capability, customer, or metric

## Expected outputs
`features/{name}/requirements.md`, `design.md` when known, `decisions.md` as they accrue, plus
a row in `features/README.md` and a task entry.

## Escalation / stop conditions
- Two readings of the request would produce materially different work → ask
- The request implies claiming something the company cannot support → flag before writing copy
