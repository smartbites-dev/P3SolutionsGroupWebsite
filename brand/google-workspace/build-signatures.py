#!/usr/bin/env python3
"""
Generate P3 / personal email signatures.

Two layouts:
  corporate : logo or photo, name, title, P3 Solutions Group, tagline, contact
  personal  : photo, name, title, address, contact, social links (no P3 branding)

Two variants per identity:
  new   : full signature, for new messages
  reply : compact text-only (a logo on every reply stacks into a column)

Add someone by appending to IDENTITIES, then run:
    python3 build-signatures.py

Markup is table-based with inline styles on purpose. Gmail, Outlook, and Apple
Mail strip <style> blocks and don't support flexbox. Images are hot-linked from
a public URL — mail clients cannot read local files, and base64 would exceed
Gmail's 10,000 character signature limit on its own.
"""
import pathlib

RED = "#dd0000"
INK = "#000000"
MUTED = "#5b5b5b"
FAINT = "#8a8a8a"
RULE = "#cccccc"

# Platform brand colours — red reads wrong on a platform's own name.
FACEBOOK_BLUE = "#1877f2"
LINKEDIN_BLUE = "#0a66c2"
FONT = "Arial,Helvetica,sans-serif"

BASE = "https://p3solutionsgroup.com"
LOGO = f"{BASE}/logo-mark.png"

# A brand is data, so a second company is an entry rather than a new template.
P3 = {
    "name": "P3 Solutions Group",
    "colour": RED,
    "tagline": "AI Ventures &middot; Products &middot; Systems",
    "site": "p3solutionsgroup.com",
    "phone": ("602-220-9724", "tel:+16022209724"),
    "logo": f"{BASE}/logo-mark.png",
}

# SmartBites brand tokens, taken from that project's tailwind.config.js
# (prawn / iron / rice) rather than sampled off the artwork.
SMARTBITES = {
    "name": "SmartBites",
    "colour": "#ff8866",          # prawn
    "tagline": "AI-Powered Food Intelligence",
    "site": "smartbites.food",
    "phone": ("602-220-9724", "tel:+16022209724"),
    "logo": f"{BASE}/smartbites-mark.png",
    "logo_size": 64,
}

IDENTITIES = [
    {"key": "founder", "layout": "corporate", "brand": P3,
     "name": "Joe Davault", "title": "Founder",
     "email": "joe.davault@p3solutionsgroup.com"},

    {"key": "smartbites", "layout": "corporate", "brand": SMARTBITES,
     "name": "Joe Davault", "title": "Founder",
     "email": "joe.davault@smartbites.food"},

    # Shared mailbox: the name line carries the role, so no separate title.
    {"key": "support", "layout": "corporate", "brand": P3,
     "name": "Customer Service / Support", "title": "",
     "email": "support@p3solutionsgroup.com"},

    # Personal Gmail. No P3 branding — this is Joe, not the company.
    {"key": "personal", "layout": "personal",
     "name": "Joe Davault", "title": "Sr. Principal Software Engineer",
     "address": "2101 E Donald Dr &nbsp;|&nbsp; Phoenix AZ 85024 &nbsp;|&nbsp; USA",
     "email": "joe.davault@gmail.com",
     "phone": ("602-614-1243", "tel:+16026141243"),
     "avatar": f"{BASE}/joe-davault.png", "avatar_size": 64,
     "social": [("Facebook", "https://www.facebook.com/jdavault", FACEBOOK_BLUE),
                ("LinkedIn", "https://www.linkedin.com/in/joe-davault-a5a3451/", LINKEDIN_BLUE)]},
]

sep = f'<span style="color:{RULE};">&nbsp;|&nbsp;</span>'


def avatar_cell(i):
    brand = i.get("brand", P3)
    img = i.get("avatar", brand["logo"])
    px = i.get("avatar_size", brand.get("logo_size", 56))
    alt = i["name"] if i.get("avatar") else brand["name"]
    return (f'    <td style="padding:0 14px 0 0;vertical-align:middle;">\n'
            f'      <img src="{img}" width="{px}" height="{px}" alt="{alt}"\n'
            f'           style="display:block;border:0;width:{px}px;height:{px}px;" />\n'
            f'    </td>')


def wrap(cells):
    return (f'<table cellpadding="0" cellspacing="0" border="0" '
            f'style="border-collapse:collapse;font-family:{FONT};">\n  <tr>\n'
            f'{cells}\n  </tr>\n</table>')


def corporate_new(i):
    b = i.get("brand", P3)
    title = (f'\n      <div style="font-size:11px;color:{MUTED};line-height:1.5;'
             f'padding-top:1px;">{i["title"]}</div>' if i["title"] else "")
    phone, href = b["phone"]
    body = f'''    <td style="padding:0 0 0 14px;vertical-align:middle;border-left:2px solid {b["colour"]};">
      <div style="font-size:14px;font-weight:bold;color:{INK};line-height:1.3;">{i["name"]}</div>{title}
      <div style="font-size:12px;font-weight:bold;color:{b["colour"]};line-height:1.5;padding-top:5px;">{b["name"]}</div>
      <div style="font-size:10px;color:{FAINT};line-height:1.5;letter-spacing:0.5px;">{b["tagline"]}</div>
      <div style="font-size:11px;line-height:1.7;padding-top:6px;">
        <a href="{href}" style="color:{MUTED};text-decoration:none;">{phone}</a>{sep}<a href="mailto:{i["email"]}" style="color:{MUTED};text-decoration:none;">{i["email"]}</a>{sep}<a href="https://{b["site"]}" style="color:{b["colour"]};text-decoration:none;font-weight:bold;">{b["site"]}</a>
      </div>
    </td>'''
    return wrap(avatar_cell(i) + "\n" + body)


def corporate_reply(i):
    b = i.get("brand", P3)
    frag = (f'<span style="color:{FAINT};">&nbsp;&middot;&nbsp;</span>'
            f'<span style="color:{MUTED};">{i["title"]}</span>' if i["title"] else "")
    phone, href = b["phone"]
    return wrap(f'''    <td style="padding:0 0 0 11px;vertical-align:middle;border-left:2px solid {b["colour"]};">
      <div style="font-size:12px;line-height:1.5;color:{INK};">
        <strong>{i["name"]}</strong>{frag}
      </div>
      <div style="font-size:11px;line-height:1.6;padding-top:2px;">
        <span style="color:{b["colour"]};font-weight:bold;">{b["name"]}</span>{sep}<a href="{href}" style="color:{MUTED};text-decoration:none;">{phone}</a>{sep}<a href="https://{b["site"]}" style="color:{b["colour"]};text-decoration:none;">{b["site"]}</a>
      </div>
    </td>''')


def personal_new(i):
    phone, href = i["phone"]
    social = sep.join(
        f'<a href="{url}" style="color:{colour};text-decoration:none;font-weight:bold;">{label}</a>'
        for label, url, colour in i["social"])
    return wrap(avatar_cell(i) + "\n" + f'''    <td style="padding:0 0 0 14px;vertical-align:middle;border-left:2px solid {RED};">
      <div style="font-size:14px;font-weight:bold;color:{INK};line-height:1.3;">{i["name"]}</div>
      <div style="font-size:11px;color:{MUTED};line-height:1.5;padding-top:1px;">{i["title"]}</div>
      <div style="font-size:10px;color:{FAINT};line-height:1.5;padding-top:5px;">{i["address"]}</div>
      <div style="font-size:11px;line-height:1.7;padding-top:6px;">
        <a href="mailto:{i["email"]}" style="color:{MUTED};text-decoration:none;">{i["email"]}</a>{sep}<a href="{href}" style="color:{MUTED};text-decoration:none;">{phone}</a>
      </div>
      <div style="font-size:11px;line-height:1.6;padding-top:3px;">{social}</div>
    </td>''')


def personal_reply(i):
    phone, href = i["phone"]
    social = sep.join(
        f'<a href="{url}" style="color:{colour};text-decoration:none;font-weight:bold;">{label}</a>'
        for label, url, colour in i["social"])
    return wrap(f'''    <td style="padding:0 0 0 11px;vertical-align:middle;border-left:2px solid {RED};">
      <div style="font-size:12px;line-height:1.5;color:{INK};">
        <strong>{i["name"]}</strong><span style="color:{FAINT};">&nbsp;&middot;&nbsp;</span><span style="color:{MUTED};">{i["title"]}</span>
      </div>
      <div style="font-size:11px;line-height:1.6;padding-top:2px;">
        <a href="mailto:{i["email"]}" style="color:{MUTED};text-decoration:none;">{i["email"]}</a>{sep}<a href="{href}" style="color:{MUTED};text-decoration:none;">{phone}</a>{sep}{social}
      </div>
    </td>''')


BUILDERS = {"corporate": (corporate_new, corporate_reply),
            "personal": (personal_new, personal_reply)}

here = pathlib.Path(__file__).parent
blocks = []
for i in IDENTITIES:
    new_fn, reply_fn = BUILDERS[i["layout"]]
    for variant, fn in (("new", new_fn), ("reply", reply_fn)):
        html = fn(i)
        (here / f'signature-{i["key"]}-{variant}.html').write_text(html + "\n")
        flag = "  <-- OVER LIMIT" if len(html) > 10000 else ""
        print(f'  signature-{i["key"]}-{variant}.html  ({len(html)} chars){flag}')
        blocks.append((f'{i["key"].title()} — {variant} message', html))

preview = ['<!doctype html><meta charset="utf-8"><title>P3 signatures</title>',
           '<body style="font-family:Arial,Helvetica,sans-serif;background:#fff;color:#111;'
           'padding:40px;max-width:820px;margin:0 auto;">',
           '<p style="font-size:12px;color:#888;">Select one block at a time, copy, and paste '
           'into Gmail. Copy from this rendered page, never from a text editor.</p>']
for label, html in blocks:
    preview.append(f'<h2 style="font-size:12px;text-transform:uppercase;letter-spacing:1.5px;'
                   f'color:#888;margin-top:36px;">{label}</h2>')
    preview.append(f'<div style="border:1px solid #eee;padding:22px;">\n{html}\n</div>')
preview.append('</body>')
(here / 'preview.html').write_text('\n'.join(preview) + '\n')
print('  preview.html')
