---
name: saudi-store-copy
description: Write, review, revise, and QA fact-grounded product copy in contemporary Saudi Arabic for e-commerce. Use when the user asks for product descriptions or listing copy in Arabic for a Saudi store, or supplies product data to turn into customer-facing copy.
metadata:
    version: 0.3.0
    domain: ecommerce
    audience: saudi-arabic
    learning: human-approved
    model: replaceable
---

# Saudi Store Copy

Turn one product record into one publish-ready Saudi Arabic listing that invents nothing, sounds like this store, passes the QA gate, and improves with every correction.

## Flow

1. Identify the operation: create, revise, shorten, expand, adapt, or review.
2. Identify the product type and read its card under `products/types/`.
3. Read the product record. Separate confirmed facts from missing, conflicting, or `do_not_infer` information.
4. Draft using only confirmed facts, following `STYLE.md` and `VOCABULARY.md`.
5. Run the QA gate as an isolated pass, per `QA.md`. Do not evaluate while drafting.
6. Revise failures and re-run QA. Finalize only when the gate passes.

## Hard rules

- Facts before copy. Never invent specifications, benefits, compatibility, guarantees, availability, or outcomes.
- Never strengthen: no limitation broadened, no possibility turned into a guarantee, no specific use turned into universal use.
- Numbers, units, model numbers, and variants stay exactly as supplied. Variants stay distinct.
- No fact may cross between products, records, or golden examples.
- `do_not_infer` and `missing_specs` in the record are hard constraints, not suggestions.
- Missing fact: omit it, or list it in the Gaps note. If the task cannot be completed without it, return BLOCKED and ask.
- Conflicting information: never average or guess. Surface the conflict.
- The product record is read-only. Never edit or "repair" it.
- Corrections change project rules only with explicit human approval.

## Never ship

- Fabricated facts, awards, certifications, reviews, ratings, or customer counts.
- Guarantees or absolutes the record does not support: مضمون 100%، يضمن لك، مستحيل، لن يتعطل.
- Unsupported superlatives: الأفضل، الأقوى، الأجود، الأحدث، رقم 1، لا مثيل له.
- Fake urgency or scarcity: آخر فرصة، الكمية محدودة، لا تفوتها.
- Empty praise with no product-specific subject: جودة عالية، تجربة استثنائية، تصميم مميز.
- Unsupported health, financial, safety, or legal claims.
- Forced Saudi slang, literal translation, or inflated corporate Arabic.
- Internal QA language, "Missing info" lines, or process commentary inside customer copy.

## Product types

| Type | Card | ID |
|---|---|---|
| Ready-made physical products | `products/types/ready-product.md` | `ready_product` |
| Custom / made-to-order services | `products/types/made-to-order.md` | `made_to_order` |
| Food and beverages | `products/types/food.md` | `food` |
| Digital products | `products/types/digital-product.md` | `digital_product` |
| Recharge cards and codes | `products/types/digital-card.md` | `digital_card` |
| Bookable services | `products/types/booking.md` | `booking` |

If a product does not fit a type, surface the mismatch; do not force it.

## Output contract

- **Copy** — customer-facing only. No QA language, no missing-info lines, no process commentary.
- **Gaps note** — operator-facing bullets below the copy naming what was omitted and why (missing from source, conflicting, or out of scope). Required whenever a relevant fact was withheld.
- **QA failure** — a report with severity, category, problem, evidence, location, and required action (`QA.md`). Revise and re-run; never bypass.

Batch: process each record independently; never carry facts, variants, or assumptions between products.

## Golden set

`golden-set/` holds approved copies used for calibration. Use them for qualities (naturalness, structure, restraint), never as fact sources. Do not copy wording mechanically. Changing the set is a human decision.

## Learning capture

When the user corrects copy:

1. apply the correction to that deliverable;
2. propose an entry in `feedback/FEEDBACK.md` with the likely destination;
3. edit `STYLE.md`, `VOCABULARY.md`, a type card, or the golden set only after explicit approval;
4. mark promoted entries as such.

The agent never promotes its own preferences into project rules.

## Completion criteria

Copy is final only when: the task was completed; only supported facts were used; the QA gate passed; withheld facts are listed in the Gaps note; and unresolved information problems were surfaced.
