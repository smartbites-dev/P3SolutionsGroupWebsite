# /closeout

End the current session cleanly.

Run the **[`skills/close-out-session`](../skills/close-out-session.md)** skill against this
conversation, the current `.ai/` files, and repo state.

Approval gates:
- Commit `.ai/` changes freely; ask before committing application code the user has not reviewed.
- Never push as part of close-out — pushing to `main` deploys to production.
