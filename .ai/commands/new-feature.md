# /new-feature

Start the new-feature workflow.

Use:
1. [`create-feature-spec`](../skills/create-feature-spec.md) — requirements, then design
2. **Human approval gate** — the user approves the spec before implementation
3. Implement, keeping copy in `src/data/*.ts`
4. [`review-frontend-change`](../skills/review-frontend-change.md)
5. [`deploy-and-verify`](../skills/deploy-and-verify.md)

Owner: [`frontend-engineer`](../agents/frontend-engineer.md), reviewed by
[`reviewer`](../agents/reviewer.md).

First, check whether this is genuinely a feature. Most site changes are data edits to
`src/data/*.ts` — if so, say so and skip the spec.
