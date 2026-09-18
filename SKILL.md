---
name: saudi-store-copy
description: Write, review, revise, and QA fact-grounded product copy in contemporary Saudi Arabic for e-commerce. Use when the user asks for product descriptions or listing copy in Arabic for a Saudi store, or supplies product data to turn into customer-facing copy.
metadata:
    version: 0.5.3
    domain: ecommerce
    audience: saudi-arabic
    learning: human-approved
    model: replaceable
---

# Saudi Store Copy

Turn one product record into one publish-ready Saudi Arabic listing that sells, invents nothing, and passes the QA gate. This file is the whole skill.

## Flow

1. Identify the operation: create, revise, shorten, expand, adapt, or review. Revise-family operations preserve the supported facts and valid content of the existing copy; review returns the QA report and does not rewrite unless asked.
2. Read the product record. Separate confirmed facts from missing, conflicting, or `do_not_infer` information.
3. Draft using only confirmed facts, following the craft rules below.
4. Run the QA gate as a separate pass after drafting stops. Do not evaluate while drafting.
5. Revise failures and re-run QA. Finalize only when the gate passes.

## Voice and selling craft

The store's voice: a confident Saudi salesperson who knows the product and enjoys selling it. Modern commercial Arabic — natural spoken sensibility, polished writing. It informs, but its job is to sell.

- Open with a hook, not a category statement: a question, a moment, a benefit, a small surprise.
- Map a supplied spec to the customer's real life only when the link is direct; otherwise state the fact plainly. Specs alone don't sell.
- Mapping is not invention, but it restates facts and never adds capability: an unlimited week becomes not counting data; a compatibility list does not become switching or pairing between devices unless the record says so.
- A scene or occasion (coffee with guests, a gift, a family recipe) is persuasion, not a product claim — use it when it fits.
- Frame discounts, bonuses, and guarantees as good news, not fine print.
- Lead with the customer's moment; technical details and requirements come later, or drop out if they don't help the sale.
- Rhythm: short and long lines alternate. No padding, no repetition to add length. Every sentence carries information, explanation, or justified persuasion.
- Structure follows the product, not a formula. Lists when scanning helps. A closing CTA is encouraged when natural (اطلبه، جرّبه، خلك جاهز).
- Wholesome, not pushy: a friendly recommendation, not a pitch. Wit is welcome; hype and tackiness are not.
- Humor: light, relatable scenes where they fit — look for one beat in playful categories; never forced, never at the facts' expense.
- The pitch lives in prose; bullets carry the specs. Remove the bullets and read the prose: if nothing sells, rewrite. A hook plus a feature list is a catalog entry, not copy.
- Emojis: goods, food, digital products, cards — 1–3 on scannable lists. Never in booking, legal, financial, or medical copy.
- Register: Saudi-facing neutral Arabic; Saudi colloquial is the default seasoning (إذا تبي، تقدر، خلّك، الحين). A light Egyptian sprinkle only when it beats the Saudi line (يلا، بجد، مش). One or two markers per listing, never a full dialect switch. Arabic first; English only where Saudis genuinely use the term.
- Temperature: goods, food, digital products, cards are warm and playful. Booking, legal, financial, medical are calm and direct — no jokes, no forced energy, no tacky hooks.

## Examples

Prose with a scenario and a CTA — the form to aim for:

> تدور شي يقرقش مع القهوة؟ 🥜 مكسرات مشوية بعبوة 400 جرام، وسعرها 42 ريال. قدّمها للضيوف — وخلّهم يسألونك من وين جبتها.

A catalog entry, not copy:

> لوحة مفاتيح لاسلكية. Bluetooth أو 2.4 GHz RF. متوافقة مع Android وmacOS وiPadOS وWindows وChromeOS. السعر: 549 ريال.

## Facts and never-ship

- Use only the facts in the record. Never invent specs, features, materials, compatibility, certifications, guarantees, availability, reviews, ratings, or outcomes.
- Never strengthen: no limitation broadened, no possibility turned into a guarantee, no specific use made universal.
- Numbers, units, model numbers, and variants stay exactly as supplied. Variants stay distinct.
- Never use an item listed in `do_not_infer`, even if it seems obvious for the category.
- Missing fact: omit it, or list it in the Gaps note. If the copy cannot be completed honestly without it, return BLOCKED and ask.
- Conflicting information: never average or guess. Surface the conflict and use neither value.
- Never ship: fabricated facts; unsupported guarantees or absolutes (مضمون 100%، يضمن لك); unsupported superlatives (الأفضل، الأقوى، رقم 1، لا مثيل له); fake urgency or scarcity (آخر فرصة، الكمية محدودة) — inviting action is selling, claiming urgency is not; empty praise with no product-specific subject (جودة عالية، تجربة استثنائية); unsupported health, financial, safety, or legal claims; forced dialect, literal translation, or inflated corporate Arabic; internal QA language or missing-info lines inside customer copy.

## Output contract

- **Copy** — customer-facing only. No QA language, no missing-info lines, no process commentary.
- **Gaps note** — operator-facing bullets below the copy, naming what was omitted and why (missing from source, conflicting, or out of scope). Required whenever a relevant fact was withheld.
- The Gaps note is mandatory whenever the record contains `do_not_infer` or `missing_specs`; name those items and why they are absent from the copy.
- Batch: process each record independently; never carry facts, variants, or assumptions between products.

## QA gate

Run after drafting stops, as a separate pass. Use a subagent or fresh context when available; otherwise re-read the exact output with fresh attention. Do not edit while evaluating.

1. **Claim support** — every claim (explicit, implied, comparative, outcome) traces to the record. Plausibility is not evidence. Mapping restates a fact; any implied capability (switching, pairing, cross-use) must itself be in the record.
2. **Numbers and variants** — every price, quantity, dimension, duration, date, model, and compatibility list matches exactly. No rounding, conversion, or reinterpretation.
3. **Never-ship** — scan the list above; synonyms count, not just the examples.
4. **Language** — would this appear on a competent Saudi store without sounding translated, artificially formal, slang-forced, performative, or flat like a report?
5. **Genericity** — strip the product facts; if the prose still stands, it is filler.
6. **Completeness** — the customer understands what it is, what matters, how it is delivered or used; withheld relevant facts are in the Gaps note.
7. **Sales effort** — delete the bullets and read the prose alone: does a pitch remain? Hook plus feature list, or a spec sheet with a CTA, is Major. So is energy that outruns the facts. Playful categories with no warmth or emoji at all, reading like a notice: Minor.
8. **Output contract** — no QA or operator language in the copy; the Gaps note covers exactly the withheld facts.

Severity: **Blocker** (fabrication, high-risk claim, fake scarcity, cross-product contamination) always fails. **Major** (unsupported benefit, misleading claim, serious language failure, flat report-like delivery) fails. **Minor** is recorded; required corrections block finalization. **Blocked** — a necessary fact is missing or contradictory; stop and ask.

A failure report states: severity, category, problem, evidence, location, required action. After revision, re-run every affected section and confirm no new violation. Hard failures cannot be averaged away.

## Product record

The record is the only fact source; treat it as read-only.

```json
{
  "id": "ready-example-001",
  "product_type": "ready_product | made_to_order | food | digital_product | digital_card | booking",
  "name": "اسم المنتج كما يظهر للعميل",
  "source": { "name": "Source name", "url": "https://example.com", "verified": "YYYY-MM-DD" },
  "facts": { "confirmed fact": "value" },
  "copy_relevant_context": {
    "customer_decisions": ["what the customer needs to decide"],
    "supported_benefits": ["benefit directly supported by facts"],
    "do_not_infer": ["unsupported inference the copy must not make"],
    "missing_specs": ["fact absent from the source"]
  }
}
```

Corrections change these rules only with explicit human approval.
