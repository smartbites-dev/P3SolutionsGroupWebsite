# Project Overview

## What this is
The corporate website for **P3 Solutions Group** — a single-page marketing site at
[p3solutionsgroup.com](https://p3solutionsgroup.com).

## Positioning
P3 is an **AI-native venture studio, product company, and consulting organization**. It is the
parent company and operating platform behind AI-driven businesses. It is *not* an investment
firm — the site was repositioned away from "Technology Investment Partners" in Aug 2026.

Three connected areas, in the site's own language:

| Pillar | Means |
|---|---|
| **BUILD** | AI-driven companies P3 owns and operates |
| **PRODUCTIZE** | Internal systems proven in operation, turned into products |
| **TRANSFORM** | Consulting and implementation for other organizations |

The core claim: *We build businesses that operate differently because AI exists.*

The operating philosophy, shown on the site as a progression:
`Work → Checklist → System → Automation → Agent`. The stated goal is **maximum leverage with
appropriate human control**, not maximum automation.

## Ventures
**SmartBites** — P3's first operating venture. AI-powered food intelligence for people with
allergies and dietary restrictions. Lives at [smartbites.food](https://smartbites.food); the
app is on the App Store (`id6745743999`). Separate repos under
`~/code/smartbites-solutions/`, each with its own `.ai/` workspace.

SmartBites is presented as a **venture**, never as a client engagement or a consulting service.

## Stack
Vite 5 · React 18 · TypeScript · Tailwind 3 · lucide-react · deployed on Netlify.

No router — the site is one page with anchor navigation. Every section is already a
self-contained component, so promoting one to a route is a routing change, not a rewrite.

## Repo
`~/code/p3-solutions-group/website` — remote `github.com/smartbites-dev/P3SolutionsGroupWebsite`.
Pushing to `main` triggers a Netlify production deploy. See [`environments.md`](./environments.md).

## Content is data
Page copy lives in `src/data/*.ts`, not inside components. Adding a venture, product, service,
or nav item is a data edit. See [`architecture.md`](./architecture.md).
