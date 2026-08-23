# .ai — Shared AI Workspace

Model- and vendor-neutral project knowledge for the P3 Solutions Group website. Claude Code,
Codex CLI, Gemini CLI, Copilot, and anything that comes next all read from here.
Provider-specific files at the repo root (`CLAUDE.md`, `AGENTS.md`) are thin adapters that
point here — they are never a second source of truth.

## Vocabulary

| Folder | Answers | Contains |
|---|---|---|
| [`memory/`](./memory/) | What does the AI know? | Persistent project knowledge, true across sessions |
| [`tasks/`](./tasks/) | What work exists? | Backlog, in-progress, completed units of work |
| [`features/`](./features/) | What does the product do? | Durable capability specs, design, decisions |
| [`skills/`](./skills/) | How is work performed? | Reusable, task-independent procedures |
| [`commands/`](./commands/) | What did the user ask to start? | Thin entry points that delegate to skills |
| [`agents/`](./agents/) | Who is responsible? | Roles with judgment and decision authority |

The chain runs one way:

```
COMMAND   "what the user asked to start"
   ↓
SKILL     "how the work is performed"
   ↓
AGENT     "who has responsibility and judgment"
```

A reusable prompt is a **skill**, not an agent. An agent is a role that chooses among skills.

**Naming convention.** Commands are named for the invocation as a human thinks of it
(`/review-front` → `commands/review-front.md`); skills are named verb-object for the capability
performed (`skills/review-frontend-change.md`). Same subject, different names on purpose — you
can always tell the entry point from the procedure.

## Layout

```
.ai/
├── memory/     project-overview, architecture, conventions, decisions,
│               brand, environments, security, roadmap, session
├── tasks/      backlog.md, in-progress.md, completed/
├── features/   {name}/requirements.md, design.md, implementation-notes.md
├── skills/     close-out-session, create-feature-spec, deploy-and-verify,
│               update-seo-metadata, generate-email-signature,
│               review-frontend-change
├── commands/   /closeout, /new-feature, /deploy, /review-front
└── agents/     frontend-engineer, reviewer
```

## Session start

1. Read [`memory/session.md`](./memory/session.md) — it names the active work and the first action.
2. Read [`tasks/in-progress.md`](./tasks/in-progress.md), and the `features/{name}/` folder if one applies.
3. Load [`memory/project-overview.md`](./memory/project-overview.md) + [`memory/conventions.md`](./memory/conventions.md).
4. Load other `memory/` files only when the task needs them.

Keep one feature or story in the context window at a time. Finish → close out → load the next.

## Session end

Run `/closeout` (→ [`skills/close-out-session`](./skills/close-out-session.md)).

## Where does this go?

| It is... | Put it in |
|---|---|
| True next month, across many tasks | `memory/` |
| True only for one capability | `features/<name>/` |
| A repeatable procedure | `skills/` |
| A unit of work with a status | `tasks/` |
| A user-facing shortcut | `commands/` |
| A role that makes decisions | `agents/` |

If it is a fact, it is memory. If it is a verb, it is a skill. If it has a status, it is a task.

## Rules

1. **Link, do not copy.** A fact lives in exactly one file. Everything else references it.
2. **Commands stay thin.** No procedure bodies inside a command.
3. **Never add a top-level folder.** Six categories cover it. `prompts/`, `playbooks/`,
   `personas/`, `workflows/`, and `handoffs/` are all one of the six under another name.
4. **No secrets, ever** — not in a runbook, not in an example. Use `<PLACEHOLDER>` and point at
   [`memory/security.md`](./memory/security.md).
5. **Keep it provider-neutral.** No tool-specific frontmatter, syntax, or paths in here.
