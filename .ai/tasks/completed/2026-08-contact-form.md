# Contact Form — Completed 2026-08-22

**Commit:** `14f3e43`

## What shipped
Netlify Forms contact form replacing `mailto:` CTAs. Header (desktop + mobile), hero secondary,
and Services CTAs now scroll to `#contact`.

Fields: name, email, company, phone, interest, message. States: idle → submitting → success →
error, with an `aria-live` region.

## The problem worth remembering
Netlify registers forms by parsing **deployed HTML at build time**. It never executes JS, so a
client-rendered React form is invisible to it. Solution: a hidden detection stub in
`index.html` that Netlify registers, plus a `fetch` POST of `form-name=p3-contact`.

Confirmation that detection worked: Netlify **strips** the `data-netlify` attributes from the
served HTML after registering the form.

## Second gotcha
Notifications are **not** automatic. Netlify captures submissions with zero configuration but
emails nobody until a notification is created in the dashboard, and it only fires on *new*
submissions. Several test submissions sat unseen before this was found.

Durable context: [`features/contact-form/`](../../features/contact-form/).
