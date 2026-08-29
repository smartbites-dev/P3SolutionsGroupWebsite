# Features

One folder per durable capability. A feature outlives the tasks that built it.

| Feature | Status | What it covers |
|---|---|---|
| [`contact-form/`](./contact-form/) | Shipped | Netlify Forms contact form and its notification path |
| [`email-signatures/`](./email-signatures/) | Shipped | Generated email signatures across P3, SmartBites, and personal identities |
| [`ai-dlc-repositioning/`](./ai-dlc-repositioning/) | Shipped | Homepage repositioning around the AI-Driven Software Delivery wedge; broader offerings consolidated to secondary |
| [`dark-tone-rhythm/`](./dark-tone-rhythm/) | Shipped | Deliberate dark/light section rhythm — Hero + AI-DLC, then a Maturity Model charcoal step, then a dark closing sequence from Built Inside P3 through the Footer |

The homepage sections themselves are not features — they are content driven by `src/data/*.ts`
and described in [`memory/architecture.md`](../memory/architecture.md). A section earns a
feature folder when it grows real behaviour.
