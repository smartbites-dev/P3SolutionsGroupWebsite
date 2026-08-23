# Conventions

## Styling
- **Tailwind utilities only.** No inline `style={{}}` objects for anything a token can express.
  The site previously used ~40 inline style objects; they were removed in Aug 2026 and should
  not come back.
- **No JS hover handlers.** Hover was once done with `onMouseEnter`/`onMouseLeave` setting
  `e.target.style`. That produced 21 TypeScript errors and left the site with **zero keyboard
  focus states**. Use `hover:` and `focus-visible:` utilities.
- Brand colours are tokens: `p3.red`, `p3.red-deep`, `p3.red-dark`, `p3.gray`, `p3.mist`,
  `p3.ink`, `p3.deep`. See [`brand.md`](./brand.md).
- **`#a7a9ac` is decorative only.** It is ~2.5:1 on white and fails WCAG AA for body text.
  Body copy uses `text-zinc-600`/`700`.

## Dependencies
Keep the surface small: React, Tailwind, lucide-react. Do not add UI kits, icon packs, or
animation libraries without a clear reason. Icons come from `lucide-react`.
*(Inherited from `.bolt/prompt`, which predates this workspace and is otherwise obsolete.)*

## TypeScript
`npm run build` is `tsc -b && vite build` — **the typecheck gates the build on purpose.** It
was previously `vite build` alone, and the repo shipped with 22 type errors. Do not remove the
`tsc -b` step to make a build pass.

## Accessibility
Non-negotiable, because these were all missing once and had to be added back:
- Skip link to `#main`
- `:focus-visible` rings on every interactive element
- A working mobile nav (the nav previously vanished entirely below 768px)
- Real `<label>` elements on form fields; `aria-live` for async status
- Semantic landmarks and correct heading order

## Copy
- No AI-agency clichés: "unlock the power of AI", "revolutionize", "cutting-edge",
  "transform your future".
- Never claim customers, employees, revenue, awards, locations, or ratings the company does
  not have. Placeholder ventures are not invented to fill a layout.
- Tone: practical, technical, credible, builder-oriented. Restrained over enthusiastic.

## Email HTML
Signatures under `brand/google-workspace/` are **table-based with inline styles on purpose**.
Gmail, Outlook, and Apple Mail strip `<style>` blocks and do not support flexbox. Do not
"modernise" that markup. See [`features/email-signatures/`](../features/email-signatures/).

## Assets
Web-optimised assets live in `public/`. Full-resolution sources live in `brand/` and do not
ship. Logos are downscaled before use — the originals were 2.4 MB for a 44px render.

## Git
- Conventional-ish commit subjects; body explains *why*, not *what*.
- Push to `main` deploys to production. There is no staging environment.
- Never commit `node_modules/`, `dist/`, or `*.tsbuildinfo`.
