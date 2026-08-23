# /deploy

Ship the current change to production.

Run **[`skills/deploy-and-verify`](../skills/deploy-and-verify.md)**.

Approval gates:
- **`main` is production.** There is no staging. Confirm the user wants this live now.
- Never push past a failing `npm run build` — the typecheck gates it deliberately.
- Report the live verification result, not just that the build passed.
