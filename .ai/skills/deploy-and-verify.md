# Skill: Deploy and Verify

## Purpose
Ship a change to production and prove it actually landed — not merely that a build succeeded.

## When to use
Any change to `main`. **`main` is production**; there is no staging.

## Inputs / context required
- A clean working tree with the intended change
- [`memory/environments.md`](../memory/environments.md)

## Procedure

### 1. Verify before pushing
```bash
npm run build     # tsc -b && vite build — typecheck gates the build
npm run lint
```
Both must pass. Do not push past a type error.

### 2. Check what actually changed
```bash
git status --porcelain
git diff --stat HEAD
```
If bundle hashes are unchanged and only `index.html` differs, the rendered page is provably
unaltered — useful evidence for metadata-only changes.

### 3. Commit and push
Subject says what; body says **why**. Push to `main`.

### 4. Wait for the deploy and verify against the live site
Typical deploy is 30–45s. Poll for the change rather than assuming:

```bash
curl -sL --max-time 20 https://p3solutionsgroup.com/ | grep -o '<title>[^<]*</title>'
```

Then verify the specific thing that changed:

| Change | Check |
|---|---|
| Asset | `curl -sL .../asset.png` — status **and** byte size |
| Metadata | grep the live HTML for the new tag |
| Code | compare the live bundle hash to the local `dist/` hash |
| Form | confirm `name='p3-contact'` in the served HTML |

Byte-identical bundle hashes between local and live is the strongest proof the deploy is the
build you tested.

## Validation / checks
- **Always `curl -L`.** `www.` 301-redirects to the apex; without `-L` you get a 68-byte
  redirect stub and will misdiagnose the result.
- Verify against the **apex** domain.
- A 200 on the page is not proof the change shipped — check the changed thing specifically.

## Expected outputs
A pushed commit, a completed deploy, and a concrete verification result quoted back to the user.

## Escalation / stop conditions
- Build or lint fails → stop, report, do not push
- Deploy does not appear after ~5 minutes → check the Netlify dashboard; do not re-push blindly
- Change is destructive or outward-facing beyond the ask → confirm with the user first
