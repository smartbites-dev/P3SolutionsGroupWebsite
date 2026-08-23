# Contact Form — Design

## The core constraint
Netlify registers forms by **parsing deployed HTML at build time**. It never executes
JavaScript, so a client-rendered React form does not exist as far as Netlify is concerned.

## Solution — two halves that must stay in sync

**1. Detection stub** — a hidden form in `index.html` carrying `data-netlify="true"`,
`data-netlify-honeypot="bot-field"`, and every field name. This is what Netlify registers.

**2. React form** — `src/components/ui/ContactForm.tsx` POSTs
`application/x-www-form-urlencoded` to `/` with `form-name=p3-contact` plus the field values.

**Field names in the two must match exactly.** Both files carry a comment saying so. Verify with:

```bash
diff <(grep -oE 'name="[a-z-]+"' dist/index.html | sort -u) \
     <(grep -oE 'name="[a-z-]+"' src/components/ui/ContactForm.tsx | sort -u)
```

## How to confirm registration
Netlify **strips** the `data-netlify` attributes from the served HTML once it has registered
the form, and rewrites the tag with single quotes:

```html
<!-- authored -->  <form name="p3-contact" method="POST" data-netlify="true" ... hidden>
<!-- served   -->  <form hidden method='POST' name='p3-contact'>
```

Their absence is the success signal, not a failure.

## Spam
Honeypot field `bot-field`, hidden via a `display:none` wrapper — still submitted, so Netlify
can evaluate it. Netlify additionally runs Akismet; **spam-flagged submissions are suppressed
silently and do not trigger notifications.** Check the Spam tab before concluding the form is
broken.

## Notification path
```
submission → Netlify Forms → notification hook → support@p3solutionsgroup.com
```
The hook is dashboard configuration, not code. Reply-To is set automatically from the field
named `email`. Subject is `New P3 inquiry — %{submissionId}`; the unique ID stops Gmail
threading separate enquiries into one conversation.

Only `%{formName}`, `%{siteName}`, and `%{submissionId}` interpolate. Arbitrary field names
do not.
