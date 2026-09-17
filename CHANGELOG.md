# Changelog

Notable changes to behavior, structure, and shipped resources.

## 0.3.0 — 2026-09-17

Rebuild around the objective and scope: one product record → one publish-ready Saudi Arabic listing, with no process prose in the reading path.

### Added

- `evals/scenarios.md` — eight behavioral tests covering fact fidelity, inference traps, conflicts, regions, revision, hype sources, batch isolation, and golden regression.
- `scripts/check.ts` — reference checking plus reading budgets (replaces the reference-only checker).

### Changed

- `SKILL.md` is now the entire operating surface: flow, hard rules, never-ship patterns, output contract, type table, golden policy, and learning capture. It absorbs the former `CORE.md`, `RULES.md`, `FORBIDDEN.md`, and `WORKFLOW.md`.
- `QA.md` is a single gate file: checklist, severity, decision, report shape, re-test rules, and the isolated-pass instruction. The `qa/` directory is gone.
- `STYLE.md` and `VOCABULARY.md` compressed; all Arabic voice examples, lexicon entries, and semantic distinctions preserved.
- Product guidance moved from templates to six compact cards under `products/types/`.
- Golden copies preserved verbatim; `golden-set/README.md` is now the index; metadata files removed.
- `README.md` merged quickstart, store customization, and verification into one human guide.
- Per-task reading path reduced from roughly 4,100 lines to under 500.

### Removed

- `CORE.md`, `RULES.md`, `FORBIDDEN.md`, `WORKFLOW.md`, the `qa/` directory, `products/input-schema.md`, `products/templates/`, `SETUP.md`, `QUICKSTART.md`, `feedback/README.md`, and per-example golden metadata.

### Fixed

- Corrected the benchmark one-shot prompt filename.

## 0.2.0 — 2026-09-17

### Added

- `CORE.md` — a one-screen always-load operating contract with the hard rules, output contract, and a map to every owning file.
- `products/input-schema.md` — the canonical product-record format.
- `products/examples/` — filled input records covering all six product types.
- `QUICKSTART.md` — first-run guide with a worked example and the supported operations.
- `SETUP.md` — how to adapt the skill to a different store.
- `qa/checks/` — five concrete checks: output contract, fact support, numbers and variants, forbidden patterns, genericity.
- `qa/example-failure-report.md` — a filled example of the required failure-report shape.
- Three proposed golden examples covering booking, made-to-order, and digital products; each uses a different structure to demonstrate that no single description formula is mandatory.
- `scripts/check-refs.ts` and `bun run check` — verifies every Markdown path reference resolves.
- `AGENTS.md` — contributor verification rules.

### Changed

- The feedback loop is now wired into `SKILL.md` and `WORKFLOW.md`: the agent applies corrections, proposes log entries, and never changes project rules without human approval.
- QA now requires an independent evaluation pass rather than same-pass self-review.
- Canonical product-type identifiers (`ready_product`, `made_to_order`, `food`, `digital_product`, `digital_card`, `booking`) are used consistently across `SKILL.md`, templates, and metadata.
- `benchmark/products.json` is now a valid JSON array.
- Always-load context reduced: `CORE.md` plus the product template come first; detailed resources are consulted as the task requires.
- The skill description in frontmatter now states concrete trigger conditions.
- `golden-set/README.md` documents example statuses and the intentional structural variety.

### Fixed

- Removed dead references to AGENT.md and the obsolete skill/ directory prefix in `WORKFLOW.md` and `qa/README.md`.
- Corrected the ready-made product template filename reference in `SKILL.md`.
- Removed an invalid install claim for Claude.ai and replaced vague install paths with exact ones.

## 0.1.0

- Initial skill: `SKILL.md`, `STYLE.md`, `RULES.md`, `VOCABULARY.md`, `FORBIDDEN.md`, `QA.md`, `WORKFLOW.md`, product templates, golden set, feedback scaffold, and benchmark.
