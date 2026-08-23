# Decisions

Cross-cutting, dated, one-liners. Newest first. A decision belongs here when it constrains
future work; feature-local decisions belong in `features/{name}/`.

## 2026-08

- **2026-08-23** — `.ai/` workspace adopted, modelled on the SmartBites repos. Six folders,
  provider-neutral, `CLAUDE.md` at root is a thin adapter, not a second source of truth.
- **2026-08-22** — Canonical URL is the **apex** `https://p3solutionsgroup.com/`. `www.`
  301-redirects to it; canonical previously pointed at the `www` variant, which splits
  indexing signals. All absolute URLs in `index.html` use the apex.
- **2026-08-22** — Contact form uses **Netlify Forms** with a hidden detection stub in
  `index.html` plus a `fetch` POST from React. Netlify parses deployed HTML at build time and
  never sees a client-rendered form, so the stub is what gets registered.
- **2026-08-22** — Form spam protection is the **honeypot**, not `data-netlify-recaptcha`. The
  reCAPTCHA widget is injected into static HTML at build time and cannot reach a
  client-rendered form.
- **2026-08-22** — Form notification emails go to a Workspace inbox and come from
  `formresponses@netlify.com`. Sending from the P3 domain was **deliberately deferred** — see
  [`features/contact-form/decisions.md`](../features/contact-form/decisions.md).
- **2026-08-22** — **Insights dropped from v1 nav.** A nav item leading to an empty page reads
  worse than no nav item. The route is architected for later; the TODO sits in `src/data/site.ts`.
- **2026-08-22** — Hero direction A (`Build Smarter Businesses. Operate Them With AI.`) chosen
  over direction B. B's line survives as the header sub-tagline.
- **2026-08-22** — Contact is **form + phone + email only**. No aggressive lead capture, no
  gated content, no marketing sequences.
- **2026-08-22** — Body copy moved off `#a7a9ac` for WCAG AA. This is a deliberate, visible
  departure from the original design in favour of contrast.
- **2026-08-22** — `npm run build` gates on `tsc -b`. Types had rotted to 22 errors because the
  build never typechecked.
