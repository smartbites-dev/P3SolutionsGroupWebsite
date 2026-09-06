# Contributing

This repo is the first proving ground for the P3 Engineering Harness — the minimum
mechanism a change (human- or agent-authored) goes through before it reaches production.
Kept intentionally small: no test framework, no staging environment, no orchestration
layer here yet. Add those only when a real story exposes the need.

## Branch model

A lightweight GitHub-based branching model — not GitFlow, not strict GitHub Flow.

```
feature/KAN-x  →  develop  →  release/*  →  main  →  production
```

- **`feature/KAN-x`** — one branch per Jira story (e.g. `feature/KAN-1`). Branch from `develop`.
- **`develop`** — the long-lived integration branch. Nothing deploys from it; it exists purely
  as a deliberate integration point between `feature/*` branches and a release.
- **`release/*`** — cut from `develop` to promote to production. Versioning, tagging, and the
  full cut/promote/sync procedure are canonical in
  [`docs/runbook/release-process.md`](./docs/runbook/release-process.md) — not duplicated here.
- **`main`** — the production branch. Netlify deploys automatically on every merge to `main`,
  unchanged from how this repo has always worked. There is still no staging environment.

**Policy:** production promotion does **not** use a direct `develop` → `main` PR. It goes
through a `release/*` branch — see
[`docs/runbook/release-process.md`](./docs/runbook/release-process.md) for the full flow,
the merge strategy per branch, and the main→develop sync step.

## Before opening a PR

Run locally, from the repo root:

```bash
npm run lint
npm run typecheck
npm run build
```

All three also run in CI (`.github/workflows/verify.yml`) against every PR targeting
`develop` or `main`. CI is the actual gate; running these locally first just means you find
out sooner.

## Opening a PR

Use the PR template (`.github/PULL_REQUEST_TEMPLATE.md`) — it asks for the linked story,
scope (including what's explicitly out of scope), evidence the change works, what was
tested, risk/rollback, and a review checklist. Fill it in for real; an empty template is a
worse signal than no template.

## Review and merge

- A human reads the diff directly before merging — not only an agent-generated summary of it.
- `main` and `develop` require a passing `verify` check and a pull request; direct pushes are
  rejected (branch protection, configured in GitHub repo settings — this is a standing
  repository setting, not something re-verified per PR).
- Promotion to `main` happens through a `release/*` branch, not a direct `develop` → `main`
  PR — that promotion is its own decision, answering "are we ready to release," which is
  different from "did this change integrate cleanly." Full procedure:
  [`docs/runbook/release-process.md`](./docs/runbook/release-process.md).

## What CI does and doesn't check

`verify.yml` runs lint, typecheck, and build. There is no automated test suite in this repo
yet — don't claim test coverage the CI doesn't actually have. If that changes, this file and
the PR template both need updating at the same time, not one now and one later.
