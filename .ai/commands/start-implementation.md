# /start-implementation

Begin implementation of an approved feature/story.

Prerequisites:
- The story/spec has passed readiness review.
- Required architecture decisions have been explicitly approved.
- A feature branch exists or may be created from `develop`.
- Any known authority boundaries are documented.

## Prepare the branch

1. Fetch the latest remote state.
2. Ensure local `develop` is current with `origin/develop`.
3. Create the feature branch from current `develop`, or update/rebase the existing feature branch onto current `develop`.
4. Resolve any branch divergence before implementation.
5. Push the feature branch.

Do not silently discard existing feature-branch work while updating it.

## Create the execution PR

Create a **Draft Pull Request**:

- Base: `develop`
- Head: current `feature/*` branch
- Use a Conventional Commit-style PR title appropriate to the change.

The draft PR is the execution and evidence container for the story.

The PR description must include:

- Jira story / spec reference
- Problem / intent
- Approved architecture or implementation direction
- In scope
- Out of scope
- Acceptance criteria
- Expected files/components affected
- Testing and evidence plan
- Known risks
- Explicit human-approval / authority boundaries

## Implement

Implement only within the approved scope and architecture.

Follow applicable repository:
- governance
- architecture decisions
- agent instructions
- skills
- Definition of Done
- CI requirements

If implementation discovers a new decision that crosses an authority boundary, stop and request approval rather than silently expanding scope.

## Verification

Before marking the Draft PR Ready for Review:

- implementation is complete
- acceptance criteria have supporting evidence
- lint passes
- typecheck passes
- build passes
- applicable tests/checks pass
- no approval-required changes were made without approval

Update the PR with relevant implementation and verification evidence.

Do not merge the PR.

## Authority gates

Human approval is required for any boundary defined by repository governance, including applicable:

- production infrastructure/configuration changes
- new runtime dependencies
- material architecture changes
- security/IAM changes
- scope expansion
- production promotion

Capability does not imply authority.
