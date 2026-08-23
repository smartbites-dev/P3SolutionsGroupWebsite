# Skill: Update SEO Metadata

## Purpose
Change how the site is represented to search engines and social platforms, without touching
the rendered design.

## When to use
Positioning changes, a new page, a domain change, or a metadata audit.

## Inputs / context required
- `index.html` — all metadata lives here; there is no head-management library
- [`memory/environments.md`](../memory/environments.md) for the canonical domain

## Procedure

### 1. Audit before editing
```bash
git grep -niE "investment partner|holding company|venture capital" -- .
```
Search the whole tree, including `public/` and any built output.

### 2. Update in one pass
`<title>` · `meta description` · `canonical` · `robots` · Open Graph · Twitter · JSON-LD.
Keep OG and Twitter consistent with each other.

**Canonical must not point at a redirect.** `www.` 301s to the apex — always use
`https://p3solutionsgroup.com/`.

### 3. Structured data
One `@graph` with `Organization`, `WebSite`, `WebPage`, cross-referenced by `@id`.
Never invent employees, locations, ratings, awards, or customer relationships.

### 4. Crawl files
`public/robots.txt` and `public/sitemap.xml`. Anchors are **not** separate URLs — do not list
`/#companies`.

### 5. Verify
```bash
npm run build
python3 -c "import json,re,pathlib; \
  [json.loads(b) for b in re.findall(r'<script type=\"application/ld\+json\">(.*?)</script>', \
  pathlib.Path('dist/index.html').read_text(), re.S)]; print('JSON-LD valid')"
grep -c "www.p3solutionsgroup" dist/index.html      # expect 0
```

Then follow [`deploy-and-verify`](./deploy-and-verify.md).

## Validation / checks
- Title ≤ ~60 **rendered** characters (`&amp;` is 5 chars but renders as 1)
- Description ≤ ~160
- JSON-LD parses
- Zero `www` references
- **CSS and JS bundle hashes unchanged** — proof the design did not move

## Expected outputs
Updated `index.html`, crawl files if needed, and quoted verification output.

## Escalation / stop conditions
- A claim cannot be supported by what is on the page → do not add it to structured data
- The production domain is unclear → confirm before writing canonical URLs
