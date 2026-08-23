# Features

One folder per durable capability. A feature outlives the tasks that built it.

| Feature | Status | What it covers |
|---|---|---|
| [`contact-form/`](./contact-form/) | Shipped | Netlify Forms contact form and its notification path |
| [`email-signatures/`](./email-signatures/) | Shipped | Generated email signatures across P3, SmartBites, and personal identities |

The homepage sections themselves are not features — they are content driven by `src/data/*.ts`
and described in [`memory/architecture.md`](../memory/architecture.md). A section earns a
feature folder when it grows real behaviour.
