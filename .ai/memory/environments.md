# Environments

## Production
- **Canonical:** `https://p3solutionsgroup.com` (apex)
- `https://www.p3solutionsgroup.com` **301-redirects** to the apex. Never use the `www` form in
  canonical tags, `og:url`, sitemaps, or asset URLs.
- Host: Netlify. Site name `exquisite-bavarois-5f01fa`, account `jdavault`.
- Site ID is in `.netlify/state.json` (gitignored). Do not duplicate it here.

## Deploy
Push to `main` → Netlify builds `npm run build` → publishes `dist/`. Typical deploy is
30–45 seconds. **There is no staging environment; `main` is production.**

Config is `netlify.toml`. The SPA fallback redirect is present but commented out — not needed
while the site is a single page with anchors. Uncomment it the day routing is added.

## Local
```bash
npm run dev        # vite dev server, :5173
npm run typecheck  # tsc -b
npm run lint       # eslint
npm run build      # tsc -b && vite build
npm run preview    # serve dist/, :4173
```

**Netlify Forms do not work locally.** Submissions are only accepted on the deployed site — a
POST to `/` against the Vite dev server (or `netlify dev`) 404s. The form renders fine locally
and will show its error state on submit. Test forms on production only.

## Known local gotcha
A dev server started *before* a `tailwind.config.js` change keeps the old config cached and
reports `The <class> class does not exist`. Restart the dev server and clear
`node_modules/.vite`.

If `npm run dev` fails with `Cannot find module @rollup/rollup-darwin-arm64`, that is the npm
optional-dependency bug: remove `node_modules` and `package-lock.json`, then `npm install`.

## Google Workspace
Domain `p3solutionsgroup.com`. Aliases (`support@`, `sales@`, `service@`, `techsupport@`,
`customercare@`, `jdavault@`, `joed@`) all deliver to one inbox. Contact-form notifications go
to `support@`. See [`features/email-signatures/`](../features/email-signatures/).
