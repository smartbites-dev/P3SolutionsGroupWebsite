# Email Signatures — Requirements

**Status:** Shipped (2026-08-23)

## Purpose
Consistent, brand-correct email signatures across multiple identities and companies, generated
rather than hand-maintained.

## Must
- Render correctly in Gmail, Outlook, and Apple Mail
- Support multiple brands (P3, SmartBites) and a non-branded personal identity
- Provide a **new-message** and a **reply** variant per identity
- Stay under Gmail's 10,000-character signature limit
- Be regenerable — adding a person is a data edit, not HTML surgery

## Must not
- Embed images as base64 (blows the character limit on its own)
- Rely on CSS unsupported in mail clients — `<style>` blocks, flexbox, `border-radius` on
  anything that must be round in Outlook
- Put a logo on the reply variant (replies stack into a column of logos)
- Duplicate brand colours that a project's own config already owns

## Acceptance criteria
- [x] Eight signatures generated from one script
- [x] Longest is 1,565 characters against a 10,000 limit
- [x] Zero base64 images
- [x] Renders in Gmail with logo, rule, and links intact
- [x] Adding an identity is one `IDENTITIES` entry
