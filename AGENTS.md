# Agent Notes

This repository is a Markdown agent skill plus one development script.

## Verify before claiming done

```text
bun run check
```

This resolves every Markdown file reference and enforces the reading budgets: `SKILL.md`, `STYLE.md`, `QA.md`, the six type cards, and the combined per-task path. Never raise a budget to make the check pass; compress or remove content instead.

## Contributor rules

- Keep each kind of knowledge in its owning file (see the pointer map in `SKILL.md`).
- Do not add a file unless it carries unique content no existing file can own.
- Golden-set copies are approved by a human; never edit them.
- Update `CHANGELOG.md` when behavior or structure changes.
- `benchmark/` is sales evidence, not skill content; never reference it from skill files.
- `scripts/` and `evals/` are development tooling; the skill must work without them.
