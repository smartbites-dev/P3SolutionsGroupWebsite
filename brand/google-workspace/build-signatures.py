#!/usr/bin/env python3
"""
Generate P3 email signatures.

One template, two variants per identity:
  - "new"   : full signature with logo, for new messages
  - "reply" : compact text-only, for replies (a logo per reply stacks badly)

Add someone by appending to IDENTITIES, then run:  python3 build-signatures.py

Markup is table-based with inline styles on purpose. Gmail, Outlook, and
Apple Mail strip <style> blocks and don't support flexbox.
"""
import pathlib

RED = "#dd0000"
INK = "#000000"
MUTED = "#5b5b5b"
FAINT = "#8a8a8a"
RULE = "#cccccc"
FONT = "Arial,Helvetica,sans-serif"

PHONE_DISPLAY = "602-220-9724"
PHONE_HREF = "tel:+16022209724"
SITE = "p3solutionsgroup.com"
TAGLINE = "AI Ventures &middot; Products &middot; Systems"
LOGO = "https://p3solutionsgroup.com/logo-mark.png"

# Images must be hot-linked from a public URL — mail clients cannot read local
# files, and base64 blows Gmail's 10,000 character signature limit.
BASE = "https://p3solutionsgroup.com"

IDENTITIES = [
    {"key": "founder", "name": "Joe Davault", "title": "Founder",
     "email": "joe.davault@p3solutionsgroup.com"},
    # Shared mailbox: the name line carries the role, so no separate title.
    {"key": "support", "name": "Customer Service / Support", "title": "",
     "email": "support@p3solutionsgroup.com"},
    # Personal account. "avatar" swaps the logo for a headshot; the circle is
    # baked into the PNG because Outlook desktop ignores border-radius.
    {"key": "personal", "name": "Joe Davault", "title": "Founder",
     "email": "joe.davault@p3solutionsgroup.com",
     "avatar": f"{BASE}/joe-davault.png", "avatar_size": 64},
]


def new_signature(i):
    title_row = (
        f'\n      <div style="font-size:11px;color:{MUTED};line-height:1.5;'
        f'padding-top:1px;">{i["title"]}</div>' if i["title"] else ""
    )
    img = i.get("avatar", LOGO)
    px = i.get("avatar_size", 56)
    alt = i["name"] if i.get("avatar") else "P3 Solutions Group"
    return f'''<table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;font-family:{FONT};">
  <tr>
    <td style="padding:0 14px 0 0;vertical-align:middle;">
      <img src="{img}" width="{px}" height="{px}" alt="{alt}"
           style="display:block;border:0;width:{px}px;height:{px}px;" />
    </td>
    <td style="padding:0 0 0 14px;vertical-align:middle;border-left:2px solid {RED};">
      <div style="font-size:14px;font-weight:bold;color:{INK};line-height:1.3;">{i["name"]}</div>{title_row}
      <div style="font-size:12px;font-weight:bold;color:{RED};line-height:1.5;padding-top:5px;">P3 Solutions Group</div>
      <div style="font-size:10px;color:{FAINT};line-height:1.5;letter-spacing:0.5px;">{TAGLINE}</div>
      <div style="font-size:11px;line-height:1.7;padding-top:6px;">
        <a href="{PHONE_HREF}" style="color:{MUTED};text-decoration:none;">{PHONE_DISPLAY}</a>
        <span style="color:{RULE};">&nbsp;|&nbsp;</span>
        <a href="mailto:{i["email"]}" style="color:{MUTED};text-decoration:none;">{i["email"]}</a>
        <span style="color:{RULE};">&nbsp;|&nbsp;</span>
        <a href="https://{SITE}" style="color:{RED};text-decoration:none;font-weight:bold;">{SITE}</a>
      </div>
    </td>
  </tr>
</table>'''


def reply_signature(i):
    title_frag = (
        f'<span style="color:{FAINT};">&nbsp;&middot;&nbsp;</span>'
        f'<span style="color:{MUTED};">{i["title"]}</span>' if i["title"] else ""
    )
    return f'''<table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;font-family:{FONT};">
  <tr>
    <td style="padding:0 0 0 11px;vertical-align:middle;border-left:2px solid {RED};">
      <div style="font-size:12px;line-height:1.5;color:{INK};">
        <strong>{i["name"]}</strong>{title_frag}
      </div>
      <div style="font-size:11px;line-height:1.6;padding-top:2px;">
        <span style="color:{RED};font-weight:bold;">P3 Solutions Group</span>
        <span style="color:{RULE};">&nbsp;|&nbsp;</span>
        <a href="{PHONE_HREF}" style="color:{MUTED};text-decoration:none;">{PHONE_DISPLAY}</a>
        <span style="color:{RULE};">&nbsp;|&nbsp;</span>
        <a href="https://{SITE}" style="color:{RED};text-decoration:none;">{SITE}</a>
      </div>
    </td>
  </tr>
</table>'''


here = pathlib.Path(__file__).parent
blocks = []
for i in IDENTITIES:
    for variant, fn in (("new", new_signature), ("reply", reply_signature)):
        html = fn(i)
        out = here / f'signature-{i["key"]}-{variant}.html'
        out.write_text(html + "\n")
        print(f'  {out.name}  ({len(html)} chars, limit 10000)')
        blocks.append((f'{i["key"].title()} — {variant} message', html))

preview = ['<!doctype html><meta charset="utf-8"><title>P3 signatures</title>',
           '<body style="font-family:Arial,Helvetica,sans-serif;background:#fff;color:#111;'
           'padding:40px;max-width:820px;margin:0 auto;">',
           '<p style="font-size:12px;color:#888;">Select one block at a time, copy, '
           'and paste into Gmail. Do not copy from a text editor.</p>']
for label, html in blocks:
    preview.append(f'<h2 style="font-size:12px;text-transform:uppercase;letter-spacing:1.5px;'
                   f'color:#888;margin-top:36px;">{label}</h2>')
    preview.append('<div style="border:1px solid #eee;padding:22px;">')
    preview.append(html)
    preview.append('</div>')
preview.append('</body>')
(here / 'preview.html').write_text('\n'.join(preview) + '\n')
print('  preview.html')
