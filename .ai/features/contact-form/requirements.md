# Contact Form — Requirements

**Status:** Shipped (2026-08-22)

## Purpose
Let someone reach P3 without opening a mail client, and land the enquiry somewhere it will
actually be seen.

## Must
- Capture name, email, company, phone, interest, and message; name/email/message required
- Work on the deployed site with no server-side code of our own
- Notify a monitored inbox on every submission
- Let the recipient reply directly to the sender
- Be usable by keyboard and screen reader — real labels, announced status
- Resist basic bot spam without a visible challenge

## Must not
- Use aggressive lead-capture language, gated content, or marketing sequences
  ([`memory/decisions.md`](../../memory/decisions.md))
- Introduce a backend, database, or third-party form service
- Silently drop a submission

## Acceptance criteria
- [x] Form registered by Netlify (`data-netlify` attributes consumed and stripped from served HTML)
- [x] Submission appears in the Netlify Forms dashboard
- [x] Notification email delivered to a Workspace inbox
- [x] Reply-To resolves to the submitter, not to Netlify
- [x] Success and error states announced via `aria-live`
- [x] Failure path surfaces phone and email as a fallback

## Known limitation
Cannot be tested locally. Netlify Forms only accept submissions on a deployed site — see
[`memory/environments.md`](../../memory/environments.md).
