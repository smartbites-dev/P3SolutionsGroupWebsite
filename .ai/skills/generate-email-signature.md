# Skill: Generate Email Signature

## Purpose
Produce or update email signatures for a person or brand, and get them installed correctly.

## When to use
A new user, a new brand, or a change to signature content or styling.

## Inputs / context required
- Name, title, email; optionally phone, address, social links, headshot
- Which brand: P3, SmartBites, or personal (no company branding)
- [`features/email-signatures/design.md`](../features/email-signatures/design.md)

## Procedure

### 1. Add or edit the identity
`brand/google-workspace/build-signatures.py` → `IDENTITIES`:
```python
{"key": "...", "layout": "corporate", "brand": P3,
 "name": "...", "title": "...", "email": "..."},
```
Empty `title` drops the row. `avatar` + `avatar_size` swap the logo for a photo.

**A new company is a brand dict, not a new layout.**

### 2. Prepare any image
- 2× the display slot (128px for 64px)
- Circular crops **baked into the PNG** with an alpha mask — Outlook ignores `border-radius`
- Save to `public/` so it deploys; mail clients cannot read local files
- Never base64 — it blows Gmail's 10,000-character limit alone

### 3. Generate
```bash
python3 brand/google-workspace/build-signatures.py
```
The script warns if any signature exceeds the character limit.

### 4. Deploy any new image first
The signature hot-links it. Follow [`deploy-and-verify`](./deploy-and-verify.md) and confirm
the asset returns 200 before asking anyone to install the signature.

### 5. Hand it over
```bash
open -a "Google Chrome" brand/google-workspace/preview.html
```
**Copy from the rendered page, never from the file source.** Gmail's signature editor is
WYSIWYG with no HTML mode; pasting source yields literal markup. Never paste via Word or
Google Docs.

Gmail: Settings → General → Signature → create `New` and `Reply` → set both **Signature
defaults** → **Save Changes** at the bottom.

## Validation / checks
- Every signature under 10,000 characters
- Zero base64 images
- Hot-linked images return 200 on the live domain
- Reply variant carries no logo
- Brand colours match that project's own config

## Expected outputs
Regenerated signature files, an updated `preview.html`, deployed assets, and install
instructions.

## Escalation / stop conditions
- Brand colours conflict with the owning project's config → that project wins; confirm before
  diverging
- Personal data beyond name/title/work contact → confirm the user intends it to reach every
  recipient
