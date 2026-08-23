# Email Signatures — Implementation Notes

**Status:** Shipped. Founder, SmartBites, support, and personal all in use.

## Regenerate
```bash
python3 brand/google-workspace/build-signatures.py
open -a "Google Chrome" brand/google-workspace/preview.html
```
Then copy each block from the **rendered** page into Gmail.

## Add a person
One entry in `IDENTITIES`:
```python
{"key": "joed", "layout": "corporate", "brand": P3,
 "name": "...", "title": "...", "email": "joed@p3solutionsgroup.com"},
```
`avatar` + `avatar_size` swap the logo for a photo. Empty `title` drops the row cleanly.

## Gmail setup, per identity
Settings → General → Signature → create `New` and `Reply` → set **FOR NEW EMAILS USE** and
**ON REPLY/FORWARD USE** → **Save Changes** at the bottom (easy to miss; nothing saves without it).

## Hard-won lessons
- **Pasting source instead of rendered output happened twice.** An `.html` file in an editor
  shows markup; in a browser it shows the result. Gmail needs the second.
- **Safari cannot upload the Workspace logo.** Silent failure. Chrome only.
- **`logo-mark.png` shipped opaque** and rendered as a grey box in Gmail dark mode. Fixed with
  a border-seeded flood fill so white *inside* the artwork survives — a naive near-white key
  would have erased the tagline text.
- **Workspace logo spec is exact**: 320×132, PNG, ≤30 KB. A 720×720 square is 67 KB and the
  wrong aspect ratio for a 2.42:1 banner slot.
- Gmail caches signature images aggressively; a replaced asset can take a day to refresh.

## Known debt
- SmartBites assets are hosted on `p3solutionsgroup.com` because that is the domain this repo
  deploys to. `smartbites.food` is live and would be the better home — one-line change to
  `SMARTBITES["logo"]`.
- The SmartBites signature reuses P3's phone number.
- The tagline *"AI-Powered Food Intelligence"* was written here, not supplied.
- The personal signature contains a home address by explicit request. See
  [`memory/security.md`](../../memory/security.md).
