# Email Signatures — Design

## Generator
`brand/google-workspace/build-signatures.py` — one script, no dependencies. Run it and it
rewrites every signature plus `preview.html`.

```
IDENTITY  →  layout (corporate | personal)  →  {new, reply} variants
```

## Two layouts
| Layout | Shape |
|---|---|
| `corporate` | logo or photo · name · title · company · tagline · contact |
| `personal` | photo · name · title · address · email/phone · social links, no company branding |

## Brand is data, not template
A brand is a dict — `name`, `colour`, `tagline`, `site`, `phone`, `logo`. Adding SmartBites was
an entry, not a third template. SmartBites tokens (`prawn #ff8866`) are copied from that
project's own `tailwind.config.js`; **if they diverge, the SmartBites repo wins.**

## Constraints that shaped the markup
- **Table-based, inline styles.** Gmail, Outlook, and Apple Mail strip `<style>` blocks and do
  not support flexbox. Do not modernise this markup.
- **Circles are baked into the PNG**, not `border-radius` — Outlook desktop ignores it and
  would render a hard square. Masked at 4× and downsampled for a clean edge.
- **Images are hot-linked** from `https://p3solutionsgroup.com/...`. Mail clients cannot read
  local files; base64 exceeds the character limit.
- **Retina**: images are stored at 2× their display slot (128px for 64px).
- **Reply variant carries no image** — a logo on every reply stacks into a column.
- **Social links use platform brand colours** (`#1877f2` Facebook, `#0a66c2` LinkedIn). P3 red
  on a platform's own name reads wrong.

## Delivery
Gmail's signature editor is **WYSIWYG, not HTML**. There is no source mode. Content must be
copied from a *rendered* browser page — `preview.html` exists for exactly this. Pasting the
file source yields literal markup.

Never paste via Word or Google Docs; both inject markup that multiplies the character count.
