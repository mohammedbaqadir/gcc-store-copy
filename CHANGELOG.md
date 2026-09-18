# Changelog

Notable changes to behavior, structure, and shipped resources.

## 0.5.3 — 2026-09-18

- Playful categories now default to 1–3 emojis on scannable lists (still none in booking, legal, financial, medical); humor prompt now looks for one light beat instead of only permitting it; desired example demonstrates both; QA Minor for playful copy that reads like a notice.

## 0.5.2 — 2026-09-18

- Gaps note is now mandatory whenever the record contains `do_not_infer` or `missing_specs` entries; the note names those items and why they are absent from the copy.

## 0.5.1 — 2026-09-18

- Craft fix after the Logitech case: mapping a supplied fact to customer terms is explicitly allowed and expected, but it must restate the fact and never add capability; the pitch must live in prose while bullets carry specs; light humor and 0–3 emoji policy added; two inline examples added; QA sales-effort test hardened (hook plus feature list is Major).

## 0.5.0 — 2026-09-18

One-file skill.

### Changed

- `SKILL.md` now contains everything the runtime needs: flow, voice and selling craft, facts and never-ship rules, output contract, QA gate, and the product record format.
- Removed `STYLE.md`, `VOCABULARY.md`, `QA.md`, `products/`, `golden-set/`, `evals/`, `feedback/`, `scripts/`, and `package.json`; their content was either merged into `SKILL.md` or measured as cost without output gain.
- Runtime read cost: 6 files / 295 lines before, 1 file / 92 lines after.
- `benchmark/` kept as evidence; the one-shot baseline is unchanged.

## 0.4.0 — 2026-09-18

Voice shift: the skill now sells, not just describes. Facts remain the ceiling.

### Changed

- `STYLE.md` rewritten around a selling mandate: mandatory hook and sales effort, real-life mapping of specs, occasions as persuasion, bonuses framed as good news, technical detail demoted, wholesome not pushy, rhythm, CTA where natural, category temperature (playful for goods and food, calm and direct for booking, legal, financial, medical), and a register policy — Saudi colloquial as the default seasoning with a light Egyptian sprinkle only when it beats the Saudi line.
- `VOCABULARY.md` gains a marketing-flavor group (يلا، بجد، مش، زي، خلّك/خليك); the Saudi conversational moves are promoted from Candidate to Contextual; the starter lexicon is de-duplicated.
- `SKILL.md`: new hard rule — sell within the facts; inviting action is clarified as allowed while urgency claims remain banned.
- `QA.md`: new checklist item 8 (sales effort); flat report-like delivery added to Major failures.
- Golden set replaced with sales-grade copies; facts unchanged.
- New evals E9 (sales effort), E10 (food flavor within facts), E11 (serious category), E12 (selling tech beyond specs); E6 updated so BLOCKED is acceptable when product identity is absent.
- Benchmark restructured for a fair comparison at scale: 20 products under `benchmark/products/`, one `prompt.md`, separate one-shot and skill output folders, and a comparison-table template. The previous 7-product run is archived.

## 0.3.1 — 2026-09-18

Consistency fixes after the rebuild.

### Fixed

- `QA.md`: the isolated pass now receives the resources its checklist needs — the full draft output (copy plus Gaps note), `SKILL.md`, `STYLE.md`, `VOCABULARY.md`, and relevant golden examples.
- `SKILL.md`: the flow schedules golden-set calibration during drafting and states how revise-family and review operations differ.
- `AGENTS.md`: replaced a pointer to a removed knowledge map with the actual file-ownership list, and corrected the description of what the reference check covers.
- `check.ts`: the per-task budget now includes `VOCABULARY.md`, which every task is instructed to consult.
- `benchmark/README.md`: states the skill version the outputs were generated with, and notes that the tables omit operator-facing Gaps notes.

### Changed

- `VOCABULARY.md`: removed the semantic-distinctions summary, which restated pairs already defined in Core terminology and Expressions; clarified the Candidate status note against the `STYLE.md` example.

## 0.3.0 — 2026-09-17

Rebuild around the objective and scope: one product record → one publish-ready Saudi Arabic listing, with no process prose in the reading path.

### Added

- `evals/scenarios.md` — eight behavioral tests covering fact fidelity, inference traps, conflicts, regions, revision, hype sources, batch isolation, and golden regression.
- `scripts/check.ts` — reference checking plus reading budgets.

### Changed

- `SKILL.md` is now the entire operating surface: flow, hard rules, never-ship patterns, output contract, type table, golden policy, and learning capture. It absorbs the former `RULES.md`, `FORBIDDEN.md`, and `WORKFLOW.md`.
- `QA.md` is a single gate file: checklist, severity, decision, report shape, re-test rules, and the isolated-pass instruction. The `qa/` directory is gone.
- `STYLE.md` and `VOCABULARY.md` compressed; all Arabic voice examples, lexicon entries, and semantic distinctions preserved.
- Product guidance moved from templates to six compact cards under `products/types/`.
- Golden copies preserved verbatim; `golden-set/README.md` is now the index; metadata files removed.
- `README.md` merged quickstart, store customization, and verification into one human guide.
- Per-task reading path reduced from roughly 3,700 lines to under 500.

### Removed

- `RULES.md`, `FORBIDDEN.md`, `WORKFLOW.md`, the `qa/` directory, `products/templates/`, `feedback/README.md`, and per-example golden metadata.

### Fixed

- Corrected the benchmark one-shot prompt filename.

## 0.2.0 — 2026-09-16 → 2026-09-17

Structure and packaging pass between the initial skill and the 0.3.0 rebuild.

### Added

- MIT `LICENSE`, root `README.md`, and the benchmark harness under `benchmark/` (comparison README, one-shot prompt, and the 7-product input set).
- `feedback/FEEDBACK.md` template and `feedback/README.md` describing the correction-to-rule loop.

### Changed

- Flattened `skill/` so `STYLE.md`, `RULES.md`, `VOCABULARY.md`, `FORBIDDEN.md`, `QA.md`, and `WORKFLOW.md` sit at the repository root.
- Aligned `SKILL.md` with the flattened structure: `AGENT.md` references became `SKILL.md`, the obsolete `skill/` prefix was removed, and template paths were corrected to `.md` (the `ready-product` path stayed stale until 0.3.0).
- Removed the `compatibility: opencode` frontmatter key so the skill loads across agents.
- `WORKFLOW.md` separates customer-facing copy from the operator-facing Gaps note.

## 0.1.0

- Initial skill: `SKILL.md`, the `skill/` resources (`STYLE.md`, `RULES.md`, `VOCABULARY.md`, `FORBIDDEN.md`, `QA.md`, `WORKFLOW.md`), `qa/README.md`, product templates, a three-example golden set with metadata, and the feedback scaffold.
