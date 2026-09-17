# QA Gate

QA tries to find reasons the copy should not be finalized. It is a blocking gate, not a review.

## Independent pass

Run QA as a separate evaluation pass, after drafting stops.

- If the environment supports a subagent or fresh context, run QA there with only: the copy, the product record, the task requirements, and this file.
- Otherwise, re-read the exact output with fresh attention before evaluating.
- Do not edit while evaluating. Evaluate the exact text that would ship.

## Checklist

Run every section. Record findings with evidence. Do not fix while checking.

**1. Claim support** — inventory every claim (explicit, implied, comparative, outcome). Each must trace to the record. Plausibility is not evidence. Nothing broadened, strengthened, merged across variants, or imported from another product, a golden example, or model memory.

**2. Numbers and variants** — every price, quantity, dimension, duration, date, model, SKU, and compatibility list matches the record exactly. No rounding, conversion, or reinterpretation. Variants stay distinct.

**3. Never-ship patterns** — scan against the Never ship list in `SKILL.md`. The absence of an exact example phrase does not make an equivalent behavior acceptable; synonyms count.

**4. Language quality** — could this appear on a competent Saudi store without sounding translated, artificially formal, slang-forced, or performative? Compare with golden examples when uncertain.

**5. Genericity** — could a paragraph be pasted onto an unrelated product with only the name changed? Remove the product-specific facts; if the prose still stands, it is filler.

**6. Completeness** — the customer can tell what the product is, what it provides, what matters, and how it is delivered or used, within the facts supplied. Withheld relevant facts appear in the Gaps note.

**7. Output contract** — copy is free of QA language and operator notes; the Gaps note covers exactly the withheld facts.

## Severity

- **Blocker** — fabricated fact, high-risk claim, fake scarcity, cross-product contamination, or an information defect that makes accurate completion impossible. Always fails.
- **Major** — substantial unsupported benefit, misleading claim, repeated forbidden pattern, serious language failure. Fails.
- **Minor** — awkward phrasing, small repetition, minor inconsistency. Recorded; required corrections still block finalization.
- **Blocked** — a necessary fact is missing or contradictory, so acceptability cannot be established. Not a writing defect. Stop and ask.

Hard failures cannot be averaged away. There is no score.

## Decision and report

PASS → finalize. FAIL → revise the smallest failed portion, then re-run affected sections. BLOCKED → surface the missing or conflicting information.

A failure report states: severity, category, problem, evidence, location, required action.

```text
Severity: Major
Category: Unsupported benefit
Problem: Copy claims complete noise isolation; the record supports passive isolation only.
Evidence: facts.noise_isolation = "passive isolation of ambient noise"; SKILL Never ship.
Location: benefit bullet 1
Required action: State the supported isolation only, or remove the claim.
```

## Re-test

After any revision: re-evaluate the changed content, re-check claims that depend on it, re-run every affected section, and confirm no new violation was introduced. A new version is a new QA subject.
