# CLAUDE.md

**This file is an adapter, not a source of truth.** All project knowledge lives in
[`.ai/`](./.ai/), which is provider-neutral and shared with Codex CLI, Gemini CLI, Copilot, and
anything that comes next. Do not duplicate `.ai/` content here.

## Start here
1. [`.ai/memory/session.md`](./.ai/memory/session.md) — active work and the first action
2. [`.ai/tasks/in-progress.md`](./.ai/tasks/in-progress.md)
3. [`.ai/memory/project-overview.md`](./.ai/memory/project-overview.md) +
   [`.ai/memory/conventions.md`](./.ai/memory/conventions.md)

Load other `.ai/memory/` files only when the task needs them.
[`.ai/README.md`](./.ai/README.md) explains the structure.

## Commands
`/closeout` · `/new-feature` · `/deploy` · `/review-front` →
[`.ai/commands/`](./.ai/commands/)

## Non-negotiables
- **`main` is production.** Every push deploys. There is no staging.
- `npm run build` runs `tsc -b` first — do not remove it to make a build pass.
- Marketing copy belongs in `src/data/*.ts`, never hardcoded in a component.
- Never claim customers, employees, revenue, awards, locations, or ratings the company does
  not have.
- Accessibility floor: skip link, `:focus-visible` rings, working mobile nav, real form labels.
