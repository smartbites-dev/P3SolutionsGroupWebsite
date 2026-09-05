# Contributing

This repo is the first proving ground for the P3 Engineering Harness — the minimum
mechanism a change (human- or agent-authored) goes through before it reaches production.
Kept intentionally small: no test framework, no staging environment, no orchestration
layer here yet. Add those only when a real story exposes the need.

## Branch model

A lightweight GitHub-based branching model — not GitFlow, not strict GitHub Flow.

```
feature/KAN-x  →  develop  →  main  →  production
```

- **`feature/KAN-x`** — one branch per Jira story (e.g. `feature/KAN-1`). Branch from `develop`.
- **`develop`** — the long-lived integration branch. Nothing deploys from it; it exists purely
  as a deliberate integration point between `feature/*` branches and a release.
- **`main`** — the production branch. Netlify deploys automatically on every merge to `main`,
  unchanged from how this repo has always worked. There is still no staging environment.

**Policy:** a `main` pull request should originate from `develop` — that promotion is the
deliberate release decision. This is stated as policy, not mechanically enforced in v0.1.
Add enforcement later only if real evidence (an accidental non-`develop` merge to `main`)
shows it's needed — don't build the check before the failure it prevents has actually happened.

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
- Promotion from `develop` to `main` is its own PR and its own decision — it answers "are we
  ready to release," which is a different question from "did this change integrate cleanly."

## What CI does and doesn't check

`verify.yml` runs lint, typecheck, and build. There is no automated test suite in this repo
yet — don't claim test coverage the CI doesn't actually have. If that changes, this file and
the PR template both need updating at the same time, not one now and one later.
