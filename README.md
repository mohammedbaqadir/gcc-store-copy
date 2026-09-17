# Saudi Store Copy

Agent skill that writes and QA-checks product copy in contemporary Saudi Arabic for e-commerce. It uses only the facts you supply, runs a blocking QA gate before anything is final, and improves as you approve corrections.

## How it works

1. You provide a product record (facts + source).
2. The agent classifies the product, reads its type card under `products/types/`, and separates confirmed facts from missing or conflicting ones.
3. It drafts using only confirmed facts, following `STYLE.md` and `VOCABULARY.md`.
4. QA runs as an isolated pass per `QA.md`.
5. You receive the copy, a short operator-facing Gaps note when facts were withheld, and a failure report if the gate blocks.

Unsupported claims are never invented; missing or conflicting facts are surfaced, not guessed.

## Install

Copy this folder into your agent's skills directory:

- **Claude Code**: `~/.claude/skills/saudi-store-copy/` (global) or `.claude/skills/saudi-store-copy/` (project)
- **OpenCode**: `~/.config/opencode/skills/saudi-store-copy/`
- **Other agents**: place the folder wherever the agent discovers skills and point it at `SKILL.md`

The skill auto-triggers on Saudi Arabic product-copy requests. If it does not, name it explicitly: "Use the `saudi-store-copy` skill..."

## Quickstart

Fill one record per product. Start from the closest example in `products/examples/`.

```json
{
  "id": "ready-example-001",
  "product_type": "ready_product",
  "name": "اسم المنتج كما يظهر للعميل",
  "source": { "name": "Source name", "url": "https://example.com", "verified": "YYYY-MM-DD" },
  "facts": { "brand": "Example", "color": "أسود", "price_sar": 199 },
  "copy_relevant_context": {
    "customer_decisions": ["what the product is", "price"],
    "supported_benefits": ["benefit directly supported by the facts"],
    "do_not_infer": ["unsupported inference the copy must not make"],
    "missing_specs": ["fact genuinely absent from the source"]
  }
}
```

`product_type` is one of `ready_product`, `made_to_order`, `food`, `digital_product`, `digital_card`, `booking`. Fact field names are free-form; the matching type card lists what matters.

Then ask:

> Use the `saudi-store-copy` skill to write copy for this product: `<paste JSON>`

For a batch, pass a JSON array; each record is processed independently.

## Operations

- **Create** — new copy from the record.
- **Revise** — fix or improve while preserving valid facts.
- **Shorten / Expand / Adapt** — change length or format without changing factual meaning.
- **Review** — evaluate existing copy against the rules and QA gate.

## Make it your store

- **Voice** — replace the Arabic examples in `STYLE.md` with your store's actual voice.
- **Vocabulary** — add your terms to `VOCABULARY.md`; use Candidate status until they prove themselves.
- **Golden set** — replace `golden-set/` with your approved listings (copy verbatim; the README is the index). Keep structures varied.
- **Learning** — corrections get proposed in `feedback/FEEDBACK.md`; promote them into the owning file only when you approve.

## Verification

- `bun run check` — every file reference resolves and reading budgets hold.
- `evals/scenarios.md` — eight behavioral tests covering fact fidelity, inference traps, conflicts, regions, revision, hype sources, batch isolation, and golden regression.

## Evidence

The benchmark compares this skill against a detailed one-shot prompt on the same 7 products with the same model: see [`./benchmark/`](./benchmark/).

## License

MIT — see the `LICENSE` file.
