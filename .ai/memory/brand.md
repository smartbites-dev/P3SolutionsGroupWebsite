# Brand

## P3 Solutions Group

| Token | Hex | Use |
|---|---|---|
| `p3.red` | `#dd0000` | Primary accent, CTAs, rules, eyebrows |
| `p3.red-deep` | `#be0000` | Hover state |
| `p3.red-dark` | `#830000` | Deep accent, error text |
| `p3.gray` | `#a7a9ac` | **Decorative / large text only** — fails AA as body copy |
| `p3.mist` | `#f5f5f5` | Alternating section background |
| `p3.ink` | `#000000` | Headings |
| `p3.deep` | `#0a0a0a` | Dark section background |

Type: **Inter** (400–800) for everything, **JetBrains Mono** (400/500) for eyebrows, labels,
and status pills. Loaded from Google Fonts with `display=swap` and preconnect.

Tagline in use on the site: *AI Ventures · Products · Systems*.

### Visual direction
Modern, technical, architectural, premium, restrained, founder-led.

**Explicitly rejected:** glowing brains, humanoid robots, neon circuit boards, generic stock
photography, technology logo walls. Diagrams are hand-built SVG/CSS showing systems, workflows,
and operating architecture.

### Known debt
The logo artwork still carries the old tagline **"INTEGRATING PEOPLE, PRACTICES, AND
PRINCIPLES"** baked into the triangle. It contradicts the current positioning and is illegible
below ~100px. It cannot be cropped out — the text sits inside the triangle. A wordmark revision
without it would also fill Google's 320×132 logo slot far better than a 1.4:1 triangle does.

## SmartBites

Tokens are owned by the SmartBites repos
(`~/code/smartbites-solutions/apps/smartbites-for-restaurants/tailwind.config.js`).
Copied here only for the email signature, which is generated from this repo:

| Token | Hex |
|---|---|
| `prawn` | `#ff8866` |
| `iron` | `#253031` |
| `rice` (DEFAULT) | `#d9d3c3` |

If those diverge, the SmartBites repo wins.

## Assets

| Path | Use |
|---|---|
| `public/logo-mark.png` | 256px transparent square mark — site header, email signatures |
| `public/logo-mark-gray.png` | Footer mark (dark background) |
| `public/logo-full.png` | 1200px wordmark — OG image |
| `public/favicon.png`, `apple-touch-icon.png` | Browser icons |
| `public/joe-davault.png` | 128px circular headshot for the personal signature |
| `public/smartbites-mark.png` | 128px SmartBites mark for its signature |
| `brand/` | Full-resolution sources — **not deployed** |
| `brand/google-workspace/` | Workspace logo sizes + signature generator |

**Transparency matters.** `logo-mark.png` once shipped as RGB with an opaque `#f9f9f9`
background. Invisible on the white site, it rendered as a grey box in Gmail dark mode. Any
regenerated mark must keep its alpha channel.

**Images in email must be hot-linked from a public URL.** Mail clients cannot read local files,
and base64 blows Gmail's 10,000-character signature limit on its own. That is why signature
assets live in `public/` and deploy with the site.
