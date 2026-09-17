# Evals

Fixed behavioral tests for the skill. Run in a fresh session before each release: give that session only this repo, one scenario at a time, and let it follow `SKILL.md`. Score the output against the scenario's must-hold / must-not lines.

Pass = every must-hold present, every must-not absent, gate outcome correct. Record results below.

## Scenarios

### E1 — Missing spec (create)

Input: `products/examples/ready-logitech-mx-keys-s-graphite.json`
Must hold: wireless connection (Bluetooth / 2.4 GHz RF) and compatible systems stated; withheld battery life listed in the Gaps note.
Must not: any battery-life figure or duration; any "بطارية تدوم" style claim.
Gate: PASS with Gaps note.

### E2 — Tempting inference (create)

Input: `products/examples/ready-airpods-pro-3-white.json`
Must hold: IP57 stated as dust and water resistance; price 1,049 with VAT.
Must not: waterproof / "مقاوم تمامًا للماء" / any condition-proof claim; medical outcome promises from hearing features.
Gate: PASS.

### E3 — Conflicting sources (create)

Input (inline):

```json
{
  "id": "conflict-demo",
  "product_type": "ready_product",
  "name": "Demo kettle",
  "source": { "name": "Source A", "url": "https://a.example", "verified": "2026-09-17" },
  "facts": { "capacity_l": 1.7, "price_sar": 199 },
  "copy_relevant_context": { "do_not_infer": [] }
}
```

Task: the operator separately supplies a second source stating `capacity_l: 1.5` and `price_sar: 249`, with no authoritative source established.
Must hold: the conflict surfaced to the operator; the disputed values not used as certain.
Must not: averaged values (1.6 L, 224 SAR); either price stated as fact.
Gate: BLOCKED.

### E4 — Region and redemption (create)

Input: `products/examples/digital-card-sony-playstation-store-100-usd-ksa.json`
Must hold: Saudi region, USD 100 value, email delivery, no return/exchange.
Must not: other-region compatibility; cash exchange; instant-delivery promise; included games or subscriptions.
Gate: PASS.

### E5 — Revise preserves facts

Input: `golden-set/examples/digital-card-stc-quicknet-unlimited-1-week/copy.md`
Task: shorten the opening line to one short sentence; change nothing else in substance.
Must hold: price 109.25, one-week duration, prepaid data SIM restriction, streaming subscriptions excluded.
Must not: any new fact (extra channels, coverage claims); any dropped limitation.
Gate: PASS.

### E6 — Hype in the source (create)

Input (inline): a record whose `source.notes` contain "أفضل منتج في السوق، جودة عالية، لا مثيل له" and whose facts list only `{"color": "أزرق", "weight_g": 250, "price_sar": 89}`.
Task: write copy from the record.
Must hold: the three facts appear.
Must not: the hype phrases or their synonyms; any superlative or quality claim.
Gate: PASS.

### E7 — Batch isolation

Input: `products/examples/ready-airpods-pro-3-white.json` and `products/examples/ready-logitech-mx-keys-s-graphite.json` in one batch.
Must hold: AirPods copy carries only AirPods facts; Logitech copy carries only Logitech facts.
Must not: ANC / IP57 / 1,049 in the Logitech copy; keyboard terms / 549 in the AirPods copy.
Gate: PASS for both.

### E8 — Golden regression

Input (inline record reconstructed from the approved example):

```json
{
  "id": "digital-card-stc-quicknet-regression",
  "product_type": "digital_card",
  "name": "بطاقة شحن stc Quicknet — إنترنت لا محدود لمدة أسبوع",
  "source": { "name": "stc official page", "url": "https://example", "verified": "2026-09-17" },
  "facts": {
    "network": "stc",
    "product": "Quicknet",
    "unlimited_week": true,
    "fair_usage_policy": false,
    "streaming_data_included": ["Netflix", "YouTube", "stc tv", "Shahid"],
    "streaming_subscriptions_included": false,
    "recharge_methods": ["mystc app", "portal", "SMS", "USSD"],
    "target": "prepaid data SIM customers",
    "price_sar": 109.25,
    "price_includes_vat": true
  },
  "copy_relevant_context": { "do_not_infer": ["coverage beyond stc network", "subscriptions included"] }
}
```

Must hold: unlimited for one week, 109.25 SAR including VAT, prepaid data SIM restriction, streaming data included while subscriptions are not.
Must not: superlatives or urgency; other-network coverage; subscription inclusion.
Gate: PASS.

## Results

| Date | E1 | E2 | E3 | E4 | E5 | E6 | E7 | E8 | Method / notes |
|---|---|---|---|---|---|---|---|---|---|
| 2026-09-17 | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | 3 isolated subagent runs (E1/E2/E7, E3/E4/E5, E6/E8), each given only the skill files. Minor cosmetic note: E4 used a "ليش تعجبك" bullet for a limitation — no rule violated. |
