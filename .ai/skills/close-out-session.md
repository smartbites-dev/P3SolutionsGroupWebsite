# Skill: Close Out Session

## Purpose
End a work session cleanly: preserve what is durable, discard what is not, and leave the
project resumable in one read.

## When to use
Triggered by `/closeout`, or whenever the user asks to wrap up or end a session.

## Inputs / context required
- The current conversation
- `.ai/memory/session.md` (previous resume point)
- `.ai/tasks/in-progress.md`
- The active `.ai/features/{name}/` folder, if the session touched one
- Repo state: `git status`, branch, touched files

## Procedure

### 1. Read current state first
Read the files above before writing anything. Then determine from the conversation: what was
the objective, what actually completed, what remains, what was decided, what is blocked.

### 2. Rewrite `memory/session.md`
It is a **single always-current resume point, not an append-only log.** Overwrite it. Anything
durable should have been promoted in step 3 rather than carried forward.

Include: objective, completed, still in progress, decisions, blockers, numbered next steps, and
a short resume paragraph naming which memory files to read.

Exclude: brainstorming, dead ends (unless they prevent repeating a mistake), raw logs, and
assumptions superseded later in the session.

### 3. Promote durable memory
Persist only if it passes at least one test:
1. Will it matter again in a week?
2. Is it now the project's standard way of doing things?
3. Would a future session be worse without it?
4. Is it a rule, constraint, or decision — not an event?
5. Was it learned the hard way, and would the mistake repeat?

Fails all five → do not store it. Update the fitting file; do not create a new one unless none
fits. Cross-cutting decisions go in `memory/decisions.md` as dated one-liners.

### 4. Update task state
- Move finished work to `tasks/completed/{date}-{slug}.md`
- Update `tasks/in-progress.md` and `tasks/backlog.md`
- Do not invent tasks — record only what was discussed or discovered

### 5. Update feature context
If the session advanced a capability, update `features/{name}/implementation-notes.md`.
Feature docs describe the capability; they do not track work.

### 6. Commit
`git add .ai/ && git commit -m "docs: close out {topic} session"`

### 7. Present the summary
```
### Session Summary
- Objective / Completed / Remaining / Files touched
### Updates Made
- Memory / Tasks / Features
### Next Session
- Start by reading: [files]
- First action: [the single best next step]
```

## Validation / checks
- `memory/session.md` names exactly **one** first action
- Nothing durable is left only in the conversation
- No fact is duplicated across `memory/`, `features/`, `tasks/`, and `session.md`

## Expected outputs
Rewritten `memory/session.md`; updated `tasks/`; promoted `memory/` entries; updated feature
notes; a committed `.ai/` tree; the summary above.

## Escalation / stop conditions
- Uncommitted **application** code the user has not reviewed → summarise, do not commit it
- An unresolved decision → record it as an open question; do not invent the answer
