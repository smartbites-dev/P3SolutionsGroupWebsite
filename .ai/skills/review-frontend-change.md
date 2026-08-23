# Skill: Review Frontend Change

## Purpose
Catch correctness, accessibility, and regression risk in a UI change before it reaches
production — which, on this repo, is the next push.

## When to use
Before merging or pushing any change to `src/`, `index.html`, or `tailwind.config.js`.
Triggered by `/review-front`.

## Inputs / context required
- The diff
- [`memory/conventions.md`](../memory/conventions.md) — the rules being guarded
- [`memory/brand.md`](../memory/brand.md) for anything visual

## Procedure

### 1. Mechanical checks
```bash
npm run build   # tsc -b && vite build
npm run lint
```

### 2. Convention regressions
These were all fixed once and must not return:
- [ ] No inline `style={{}}` where a Tailwind token exists
- [ ] No JS hover handlers (`onMouseEnter` setting `e.target.style`)
- [ ] No `tsc -b` removed from the build script
- [ ] Brand colours come from `p3.*` tokens, not hex literals
- [ ] `#a7a9ac` not used for body copy — fails WCAG AA on white

### 3. Accessibility
- [ ] Interactive elements reachable by keyboard with a visible `:focus-visible` ring
- [ ] Mobile nav still works below 768px
- [ ] Form fields have real `<label>`s; async status in an `aria-live` region
- [ ] Heading order intact; images have meaningful `alt` or `alt=""` if decorative

### 4. Content architecture
- [ ] Marketing copy lives in `src/data/*.ts`, not hardcoded in a component
- [ ] Adding another venture/product/service is still a data edit
- [ ] No new top-level dependency without a reason

### 5. Copy
- [ ] No AI-agency clichés
- [ ] No claimed customers, employees, revenue, awards, or locations
- [ ] Tone stays restrained and technical

### 6. Metadata and assets
- [ ] Absolute URLs use the apex domain
- [ ] New images optimised, sized, and alpha preserved where needed
- [ ] Full-resolution sources stay in `brand/`, not `public/`

## Validation / checks
Report findings ranked by severity. Distinguish blocker from follow-up from accepted risk.

## Expected outputs
A findings list, each with file, line, and the concrete failure. Empty is a valid result.

## Escalation / stop conditions
- A finding trades user safety or accessibility for speed → escalate, do not silently accept
- The reviewer does not rewrite the change; findings go back to the implementer
