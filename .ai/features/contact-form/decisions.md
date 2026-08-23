# Contact Form — Decisions

## Honeypot, not reCAPTCHA — 2026-08-22
The reference implementation (Joe's portfolio, static HTML) uses `data-netlify-recaptcha`.
That works there because Netlify injects the widget into static HTML at build time. It
**cannot** reach a client-rendered React form.

Chose `data-netlify-honeypot="bot-field"` instead: no widget, works with the `fetch` pattern,
no user-visible challenge.

## Notification recipient is `support@` — 2026-08-22
Initially `joe.davault@`. Changed after confirming all seven domain aliases deliver to one
inbox, so the choice is cosmetic. `support@` is also what the site displays publicly.

## Custom sending domain deferred — 2026-08-22
Notifications come from `formresponses@netlify.com`. Netlify hardcodes that address; changing
it means replacing the email notification with an **outgoing webhook → Netlify Function → own
provider** (Resend/SendGrid/Postmark), plus an API key and DNS verification.

**Deferred deliberately.** Reply-To already routes to the submitter, so the Netlify address
never surfaces to the person making the enquiry. Enquiry volume is low. `netlify.toml` already
declares `functions = "netlify/functions"`, so the wiring exists when wanted.

Revisit on higher volume or a need for branded templates.

## No contact form library or service — 2026-08-22
Netlify Forms was already available on the host and needed no new dependency. Considered and
rejected: Formspree, Basin, a custom function. "Basic but it works" was the explicit brief.

## Success state trusts HTTP status — 2026-08-22
The component shows success on any 2xx. It cannot detect Akismet suppression, which happens
after acceptance. Accepted: the alternative is polling an API that needs authentication.
