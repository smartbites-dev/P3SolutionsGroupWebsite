### Story / spec

Linked Jira story: <!-- e.g. KAN-1 -->

### Scope

**In scope:**
-

**Explicitly out of scope:**
-

### Evidence

<!-- How was this actually verified? Commands run, screenshots, a URL checked locally or on
a deploy preview — re-runnable evidence, not "should work." -->

### Testing performed

- [ ] `npm run lint` passes
- [ ] `npm run typecheck` passes
- [ ] `npm run build` passes
- [ ] Manually exercised the changed behavior locally (describe above)

### Risk / rollback

<!-- What's the blast radius if this is wrong? How would it be reverted? -->

### Review checklist

- [ ] No secret, key, token, or credential anywhere in this diff
- [ ] No test deleted, skipped, or weakened to make this pass
- [ ] PR description matches the diff — nothing claimed that isn't here
- [ ] A human read this diff directly, not only an agent-generated summary of it
- [ ] If this touches `netlify.toml` or any other production infrastructure/config: called out
      explicitly below and given its own explicit sign-off, not waved through with the rest of
      the diff

### Agent-generated work

- [ ] Does this PR contain agent-generated work? If no, skip the rest of this section.

Agent and model: `___`

- [ ] Every comment and docstring matches what the code actually does
- [ ] No change to `AGENTS.md`, `CLAUDE.md`, or CI/workflow config unless that's this PR's
      stated purpose
