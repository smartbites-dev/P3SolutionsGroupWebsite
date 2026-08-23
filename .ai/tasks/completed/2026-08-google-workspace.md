# Google Workspace Setup — Completed 2026-08-23

**Commits:** `5360133`, `18b81d8`, `263d8a2`, `0e814d4`, `f4f179d`

## What shipped
- Custom Workspace logo at Google's exact 320×132 spec (13.3 KB against a 30 KB cap)
- Square marks (720/512) for profile slots
- Eight email signatures from `brand/google-workspace/build-signatures.py`

| Identity | Brand | Address |
|---|---|---|
| `founder` | P3 red | `joe.davault@p3solutionsgroup.com` |
| `smartbites` | prawn `#ff8866` | `joe.davault@smartbites.food` |
| `support` | P3 red | `support@p3solutionsgroup.com` |
| `personal` | headshot, no P3 branding | `joe.davault@gmail.com` |

Each has a new-message and a reply variant.

Aliases and three users were configured by the user directly in the Admin console.

## Gotchas worth remembering
- **Safari cannot upload the Workspace logo.** It fails silently. Chrome only.
- **Gmail's signature editor is WYSIWYG, not HTML.** Pasting source yields literal markup —
  this happened twice. Copy from a *rendered* browser page.
- **10,000-character limit** counts the generated HTML. Base64 images blow it instantly; hot-link
  instead.
- `logo-mark.png` shipped opaque and rendered as a grey box in Gmail dark mode. Fixed with a
  border-seeded flood fill that preserves white *inside* the artwork (`f4f179d`).

Durable context: [`features/email-signatures/`](../../features/email-signatures/).
