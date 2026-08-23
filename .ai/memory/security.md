# Security

## Posture
This is a **static marketing site**. No authentication, no database, no server-side code, no
user accounts. The attack surface is small on purpose — keep it that way.

## Invariants
- **No secrets in the repo.** There is no `.env` and no API key. If one becomes necessary, it
  goes in Netlify environment variables, never in `src/` or `public/`.
- **Everything in `public/` is world-readable.** It deploys to a guessable URL. That is why the
  headshot and brand marks are there — it is required for email rendering — but nothing
  sensitive may join them.
- **Form submissions are not authenticated.** The contact form is public. Treat every field as
  untrusted input; it is displayed only in Netlify's dashboard and in notification email.
- **Honeypot, not reCAPTCHA.** See [`features/contact-form/`](../features/contact-form/).
  Netlify additionally runs Akismet; spam-flagged submissions are suppressed silently and do
  **not** trigger notifications.

## Third-party surface
| Dependency | Risk |
|---|---|
| Google Fonts | External stylesheet + font files. Only external runtime dependency. |
| Netlify Forms | Handles and stores submissions. |
| Hot-linked images in email signatures | Public URLs on this domain. |

No analytics, no tag manager, no third-party scripts. Adding any is a decision worth recording
in [`decisions.md`](./decisions.md).

## Personal data
The personal email signature contains a home mailing address by explicit request. It ships in
`brand/google-workspace/signature-personal-*.html` and is committed to the repo. Flagged, not
a defect.

## Not applicable (yet)
No RLS, no auth flows, no payment handling, no PII storage. If any of that arrives, this file
needs real content before it ships.
