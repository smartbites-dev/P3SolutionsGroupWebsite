# In Progress

Nothing is mid-implementation. `ai-dlc-repositioning` shipped (2026-08-29) — see
[`features/ai-dlc-repositioning/`](../features/ai-dlc-repositioning/) and
[`tasks/completed/2026-08-ai-dlc-repositioning.md`](./completed/2026-08-ai-dlc-repositioning.md).
It also resolved blocked item #1 below (founder name + title), via the `About` copy change.

## Blocked — needs content from the user

| # | Item | Where it lands | Notes |
|---|---|---|---|
| 2 | SmartBites logo | `src/data/ventures.ts` → `logo:` | Currently renders an "S" lettermark. Drop a file in `public/`. |
| 3 | SmartBites link | `src/data/ventures.ts` → `link.href` | Currently the App Store listing `id6745743999`. Swap for the marketing site if preferred. |
| 4 | SmartBites `™` | `src/data/ventures.ts` → `nameSuffix` | Included. Remove if not claimed. |
| 5 | SmartBites status | `src/data/ventures.ts` → `status` | Currently `Operating`. |
| 6 | Two remaining Workspace users | `brand/google-workspace/build-signatures.py` | One `IDENTITIES` entry each; needs name, title, email. |

Each is a single-field edit. None requires design or architectural work.

## Open questions
- Should the SmartBites signature use **prawn** or blue? Prawn is the real brand token and is
  what ships today.
- Does SmartBites have its own phone number? The signature currently reuses P3's.
- The SmartBites tagline in that signature, *"AI-Powered Food Intelligence"*, was written here
  rather than supplied.
