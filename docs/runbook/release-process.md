# Release Process

## Branch Flow

```text
feature/* → develop → release/* → main → sync/main-to-develop → develop
```

## Merge Policy

- `feature/* → develop` — **Squash and merge**
- `release/* → main` — **Create a merge commit**
- `sync/main-to-develop → develop` — **Create a merge commit**

## Cut a Release

```bash
git checkout develop
git pull --ff-only origin develop

npx standard-version --dry-run --release-as minor

git checkout -b release/001-2026_p3sg
npx standard-version --release-as minor

git push --atomic -u origin release/001-2026_p3sg v0.1.0
```

Create PR:

```text
base: main
compare: release/001-2026_p3sg
```

PR title:

```text
chore(release): <release summary>
```

Wait for required checks, then Joe performs **Create a merge commit** (see "PR Merge
Authority" below — the agent prepares and verifies this PR, the physical merge is never
the agent's).

`main` triggers the Netlify production deployment.

## Sync Main Back to Develop

After production verification:

```bash
git checkout main
git pull --ff-only origin main

git checkout -b sync/main-to-develop
git push -u origin sync/main-to-develop
```

Create PR:

```text
base: develop
compare: sync/main-to-develop
```

PR title:

```text
chore(release): main-to-develop sync
```

Wait for required checks, then Joe performs **Create a merge commit** (see "PR Merge
Authority" below — same boundary as every other protected-branch PR).

Update local `develop`:

```bash
git checkout develop
git pull --ff-only origin develop
```

## PR Merge Authority

Every PR into a protected/shared branch — `develop`, `main`, or any sync branch — follows the
same split, no matter how much of the surrounding work ran through the agent:

```text
P3E / Agent
Prepare → Verify → Evidence → Request Approval → Ready for Merge
                                                        ↓
Joe / Human                                          MERGE
                                                        ↓
P3E / Agent
Verify → Continue lifecycle → Reconcile → Cleanup → Closeout
```

**Agent responsibility, for every PR into a protected/shared branch:**

- create and maintain the PR
- provide required evidence (lint/typecheck/build, and whatever else the story requires)
- monitor and satisfy CI/quality gates
- resolve review feedback within approved scope
- request required reviewers
- obtain required approvals
- confirm the PR is mergeable and current against its base
- report the PR as **READY FOR MERGE**, then stop

**Human responsibility: perform the physical merge.** The agent never clicks Merge — on any
PR into a protected/shared branch, regardless of CI status or approval count. Capability to
merge is not authority to merge, the same principle `agent-goverance-guardrails.md` already
states for landing changes generally, applied here specifically to the merge action itself.

**After the human merges, agent responsibility resumes automatically** — verify the resulting
branch state, reconcile (update Jira, run production verification where applicable), clean up
the merged branch, and record closeout — without being asked again.

### Merge boundaries by PR type

| PR | Agent | Human |
|---|---|---|
| `feature/* → develop` | Prepare, verify, obtain approval | Merge |
| `release/* → main` | Prepare, verify, obtain approval | Merge |
| `sync/main-to-develop → develop` | Prepare, verify, obtain approval | Merge |

Applies to every protected/shared branch, not only the three named above. For a sync PR
specifically: the agent may prepare, verify, and obtain approval exactly as for any other PR —
the physical merge still belongs to the human, with no exception for sync PRs being
"low-risk" or mechanical.

This is additive, not a substitute for anything else already required. CI, independent
review, Product acceptance, and production-promotion approval all still apply exactly as
documented elsewhere in this file and in `agent-goverance-guardrails.md`. This rule removes
exactly one thing from the agent's hands — the physical merge action — and nothing else.

## Responsibility

### GitHub Actions

- lint
- typecheck
- tests
- coverage
- Sonar
- build

### Agents

- inspect repository state
- create release branch
- version and tag
- push release branch and tag
- create PRs
- monitor required checks
- create main-to-develop sync PR
- everything under "PR Merge Authority" above, up to and including reporting **Ready for Merge**

### Human

- perform the physical merge on every PR into a protected/shared branch (see "PR Merge
  Authority" above) — not only production merges
- approve exceptions or bypasses
