# Contact Form — Implementation Notes

**Status:** Shipped and verified end to end (capture + email delivery).

## Files
| File | Role |
|---|---|
| `index.html` | Hidden detection stub — what Netlify registers |
| `src/components/ui/ContactForm.tsx` | The real form, `fetch` submission, state machine |
| `src/components/sections/Contact.tsx` | Section layout, direct-contact fallback |
| `src/data/site.ts` | Phone, email, and phone href |

## Gotchas
- **Cannot be tested locally.** POST to `/` 404s against Vite dev *and* `netlify dev`.
- **Notifications are not automatic.** Netlify captures with zero config but emails nobody
  until a notification is created in the dashboard. Several test submissions sat unseen before
  this was diagnosed.
- **Notifications only fire on new submissions.** Anything captured before the hook existed
  will never be emailed and will look like proof the form is broken.
- **Netlify's first emails may be spam-filtered.** Allowlist `formresponses@netlify.com`.
- The `www` host 301-redirects; `curl` without `-L` returns a 68-byte redirect stub. This
  produced a false "form is missing" diagnosis during verification.

## Verification
```bash
curl -sL https://p3solutionsgroup.com/ | grep -c "name='p3-contact'"   # 1 = registered
```
The single quotes are Netlify's rewrite. Grepping for double quotes returns 0 and looks like
failure.

## If it stops working
1. Netlify dashboard → Forms → is `p3-contact` listed?
2. Is the submission in the list, or in **Spam**?
3. Does a notification hook exist, and was the submission *after* it was created?
4. Do field names still match between the stub and the component?
