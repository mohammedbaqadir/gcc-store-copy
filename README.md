# Saudi Store Copy

One-file agent skill for selling product copy in contemporary Saudi Arabic. It uses only the facts you supply, makes a real sales effort, runs a blocking QA gate, and keeps customer copy separate from an operator-facing Gaps note.

Everything the agent needs is in `SKILL.md`. The `benchmark/` folder is comparison evidence, not part of the runtime skill, so it is never loaded during a task.

## Install

Copy `SKILL.md` into your agent's skills directory:

- **Claude Code**: `~/.claude/skills/saudi-store-copy/SKILL.md` (global) or `.claude/skills/saudi-store-copy/SKILL.md` (project)
- **OpenCode**: `~/.config/opencode/skills/saudi-store-copy/SKILL.md`
- **Other agents**: place it wherever the agent discovers skills.

## Use

Provide one product record (JSON) per product and ask for copy. The record format is documented in `SKILL.md`.

## Operations

- **Create** — new copy from the record.
- **Revise** — fix or improve while preserving valid facts.
- **Shorten / Expand / Adapt** — change length or format without changing factual meaning.
- **Review** — evaluate existing copy against the rules and QA gate.

## Benchmark

`benchmark/` holds a 20-product comparison: one skill-driven session against 20 cold one-shot runs of the same rules. See `benchmark/README.md`.

## License

MIT — see `LICENSE`.
