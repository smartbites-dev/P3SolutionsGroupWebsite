# P3 Solutions Group Corporate Website

<div align="center">
  <img src="./public/PX3-Solutions-Final-01.png" alt="P3 Solutions Group Logo" width="350"/>
</div>

## Overview

This repository contains the source code for the official **P3 Solutions Group** corporate website.  
Built using **Vite 5** and **React 18**, the site is optimized for performance, scalability, and maintainability.

P3 Solutions Group is an AI-native venture studio, product company, and consulting organization. We build and
operate AI-driven companies, develop AI products and agentic systems, and help organizations turn repeatable
work into automated and agent-assisted workflows.

**P3 Solutions Group** — _We build businesses that operate differently because AI exists._

---

## Features

- ⚡ **Fast Development**: Powered by Vite for lightning-fast hot module replacement (HMR) and build times.
- 🎨 **Modern UI**: Built with React 18.3.1 and styled for a professional corporate look.
- 📱 **Responsive Design**: Fully responsive layout for desktop, tablet, and mobile.
- ♿ **Accessibility First**: Designed with WCAG 2.1 AA compliance in mind.
- 🔍 **SEO Optimized**: Meta tags, Open Graph, and structured data included for search visibility.
- 📂 **Modular Codebase**: Reusable components for easier maintenance.

---

## Tech Stack

- **Frontend Framework**: [React 18.3.1](https://react.dev/)
- **Build Tool**: [Vite 5.4.2](https://vitejs.dev/)
- **Styling**: Tailwind CSS 3
- **Icons**: lucide-react
- **Deployment**: Netlify (continuous deployment from `main`)
- **Version Control**: Git + GitHub

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18+ recommended)
- npm or yarn (latest stable)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/p3-solutions-group.git
cd p3-solutions-group

# Install dependencies
npm install
# or
yarn install
```

---

## Content Architecture

Page copy and structure are data-driven. Editing content rarely means editing components.

```
src/data/        site.ts       nav, contact details, brand strings
                 pillars.ts    Build / Productize / Transform
                 ladder.ts     Work → Checklist → System → Automation → Agent
                 osLayers.ts   AI operating system stack
                 ventures.ts   operating companies (SmartBites)
                 products.ts   product & platform capability areas
                 services.ts   consulting engagements

src/components/  layout/       Header, Footer, Section, Container
                 ui/           Button, Eyebrow, Tag
                 sections/     one component per homepage section
                 diagrams/     inline SVG/CSS system diagrams
```

**Adding a venture:** append an entry to `src/data/ventures.ts`. The grid switches from a
single feature card to a two-up layout automatically.

**Promoting a section to its own page:** each homepage section is already a self-contained
component. Add a router, move the component behind a route, and set `page` on its entry in
`nav` (`src/data/site.ts`).

## Scripts

```bash
npm run dev        # local dev server
npm run typecheck  # tsc -b
npm run lint       # eslint
npm run build      # tsc -b && vite build  (typecheck gates the build)
npm run preview    # serve the production build
```

## Brand Assets

Optimized web assets live in `public/`. Full-resolution source files are kept in `brand/`
and are not shipped with the site.
