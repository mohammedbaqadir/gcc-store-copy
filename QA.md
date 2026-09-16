# QA

## Purpose and Independence

This file defines the quality-assurance process for customer-facing product copy.

QA is an independent evaluation stage.

Its job is to **try to find reasons the copy should not be finalized**.

QA does not improve, rewrite, or rationalize the copy while evaluating it.

Evaluate the exact output that would be delivered to the customer.

Evaluate it against:

- supplied product facts;
- task requirements;
- applicable product type;
- `STYLE.md`;
- `RULES.md`;
- `VOCABULARY.md`;
- `FORBIDDEN.md`;
- relevant approved examples when useful for calibration.

Detailed writing guidance remains in those resources. This file defines how compliance and quality are evaluated.

A description that sounds good is not automatically acceptable.

---

## Evaluation Inputs

### Product Facts

Use the actual product information supplied for the current product.

Do not substitute general knowledge or assumptions.

### Task Requirements

Use the requested output format, length, structure, and constraints.

### Applicable Project Resources

Use only the resources relevant to the current product and task.

### Generated Copy

Evaluate the exact customer-facing text.

Do not silently correct it before evaluation.

---

## Severity Model

### Blocker

A defect that makes the copy unsafe, materially misleading, or invalid to finalize.

Examples:

- fabricated product fact;
- contradiction of confirmed product information;
- unsupported medical or other high-risk claim;
- fabricated scarcity;
- serious cross-product contamination;
- essential missing information that makes accurate completion impossible.

A blocker always fails QA.

### Major

A significant defect that must be corrected before production.

Examples:

- substantial unsupported benefit;
- misleading claim;
- major style or language failure;
- repeated forbidden pattern;
- serious category mismatch.

A major issue fails QA.

### Minor

A limited quality defect that does not materially undermine factual or commercial integrity.

Examples:

- awkward phrasing;
- minor repetition;
- small formatting issue;
- minor terminology inconsistency.

Minor issues may be recorded separately, but unresolved required corrections prevent production finalization.

### Informational

An observation with no required correction.

It is not a failure.

---

## 1. Claim and Factual Accuracy

### Build a Claim Inventory

Identify the meaningful claims made by the copy before judging whether it is accurate.

Consider at least:

**Explicit claims**

Direct statements:

> "البطارية بسعة 5000mAh."

**Implied claims**

Statements whose wording strongly implies a product property:

> "تستخدمه طوال اليوم بدون قلق."

**Comparative claims**

Claims that place the product above alternatives:

> "أفضل خيار."

**Outcome claims**

Claims about what will happen because of using the product:

> "يساعدك على..."

> "يضمن لك..."

Do not evaluate only explicit specifications.

### Source Support

For each meaningful product claim, ask:

> What supplied product information supports this claim?

If support cannot be identified, treat the claim as unsupported unless an explicitly authoritative source establishes it.

Plausibility is not evidence.

### Meaning Preservation

Check that the copy has not:

- broadened a limitation;
- strengthened a possibility into a guarantee;
- turned a specific use into universal use;
- converted one variant into every variant;
- added certainty that the source does not contain.

### Numbers and Specifications

Verify every relevant:

- quantity;
- dimension;
- capacity;
- model number;
- date;
- duration;
- price, when included;
- percentage;
- other exact numerical detail.

Do not accept a plausible value merely because it looks reasonable.

### Variants

Verify that information belonging to one size, color, capacity, model, configuration, or service level has not been applied to another.

### Cross-Product Contamination

Check for facts originating from:

- another product;
- another product template;
- a golden-set example;
- a previous batch item;
- model memory.

---

## 2. Unsupported and Misleading Claims

Check whether any claim is stronger than the evidence.

### Benefits

For every stated benefit, ask:

> Is this benefit directly supported or objectively derivable from the supplied product information?

A plausible marketing inference is not enough.

### Guarantees

Reject unsupported:

- guarantees;
- absolute certainty;
- guaranteed results;
- guaranteed satisfaction.

### Superlatives

Inspect claims such as:

> الأفضل
> الأقوى
> الأجود
> الأحدث
> رقم 1
> لا مثيل له

These are **signals for investigation, not automatic failures**.

They fail when unsupported or otherwise inappropriate.

### Universal Claims

Inspect claims suggesting:

- everyone;
- all users;
- every device;
- every situation;
- guaranteed suitability.

### Safety and Health

Inspect carefully for claims about:

- treatment;
- prevention;
- diagnosis;
- therapeutic effects;
- medical outcomes;
- side effects;
- absolute safety.

Legitimate medical terminology describing a product or booking is not itself a failure.

Unsupported medical outcomes are.

### Financial and Legal

Inspect claims concerning:

- guaranteed savings;
- profit;
- financial results;
- official approvals;
- certifications;
- licenses;
- regulatory status;
- legal compliance.

### Availability and Scarcity

Verify claims involving:

- stock levels;
- remaining quantities;
- urgency;
- expiry;
- delivery timing;
- availability.

Such claims require appropriate source support.

---

## 3. Saudi Language Quality

### Naturalness

Evaluate the exact Arabic as contemporary Saudi-facing written commerce.

Ask:

> Could this plausibly appear on a competent Saudi e-commerce store without sounding translated, artificial, or performative?

When uncertain, compare against relevant approved golden-set examples instead of relying solely on model intuition.

### Saudi Commercial Fit

The copy should feel appropriate to Saudi customers without requiring heavy dialect or stereotypical local expressions.

### Formality

Check for both extremes:

- inflated formal/corporate Arabic;
- chat-like or excessively casual language.

### Translation Artifacts

Look for:

- English sentence structure;
- literal translations;
- unnatural Arabic collocations;
- mechanically translated terminology.

### Forced Localization

Check whether colloquial Saudi expressions were inserted primarily to signal "Saudi" rather than because they are natural in context.

A colloquial expression is not a failure merely because it is colloquial.

---

## 4. Style Conformance

Evaluate against `STYLE.md`.

### Voice

The copy should reflect the intended character:

> واضح، ذكي، قريب، واثق، وعملي.

It should not be:

> متكلف، متفلسف، متصنع، أو متحمس زيادة.

### Tone

Check whether emotional intensity fits the product and customer context.

Do not require every category to use the same emotional temperature.

### Readability

The customer should understand the copy easily when reading it on a screen.

### Customer Orientation

The copy should make it reasonably clear:

- what the product is;
- what matters about it;
- how it relates to the intended use.

---

## 5. Rule Conformance

Evaluate against `RULES.md`.

Check relevant requirements concerning:

- prioritization of information;
- feature-to-use explanation;
- unsupported benefits;
- structure;
- repetition;
- filler;
- specifications;
- variants;
- formatting;
- pre-QA editing expectations.

Do not reproduce the rule set here.

`RULES.md` remains the authority.

---

## 6. Forbidden-Pattern Check

Evaluate against `FORBIDDEN.md`.

Check underlying behaviors, not merely exact example phrases.

At minimum, inspect for:

- fabricated facts;
- unsupported benefits;
- misleading certainty;
- unsupported superlatives;
- fake authority;
- fabricated social proof;
- fake urgency;
- fake scarcity;
- pressure;
- fear-based selling;
- generic AI marketing slop;
- forced localization;
- translation artifacts;
- cross-product leakage;
- source-boundary violations.

The absence of an exact forbidden phrase does not make an equivalent underlying pattern acceptable.

---

## 7. Product-Context Fit

### Correct Product Type

Confirm that the copy is appropriate to the selected product type.

### Relevant Information

Check whether included information helps the customer's decision.

### Irrelevant Information

Flag information that adds noise without meaningful customer value.

### Category Expectations

Determine whether the description addresses the important customer questions for this kind of product.

Do not require information that is irrelevant to the category.

The product template establishes available structured information; customer usefulness determines what belongs in the final copy.

---

## 8. Completeness and Usability

### Product Identity

The customer should be able to understand what the product is.

### Key Customer Questions

Where relevant, the copy should make it possible to understand:

- what it is;
- what it provides;
- what matters about it;
- who or what it suits;
- how it is delivered or used.

Not all questions apply to every product.

### Required Information

Verify any information explicitly required by the task or applicable product requirements.

### Missing Critical Information

If necessary information is absent from the source, do not reward invented completion.

Determine whether:

- the missing detail can simply be omitted;
- neutral wording can safely be used;
- the task must be blocked pending information.

---

## 9. Genericity and Slop Test

Ask:

> Could most of this description be pasted onto an unrelated product with only the product name changed?

If yes, the copy contains a serious genericity problem.

Look especially for:

- generic openings;
- generic praise;
- generic benefit stacks;
- repeated adjectives;
- generic endings;
- claims that contain no product-specific information.

The more product-specific information can be removed without damaging the paragraph, the stronger the warning that the paragraph is generic filler.

---

## 10. Final Adversarial Review

After structured checks, perform a final independent pass.

### Customer Pass

Read once as the target customer.

Ask:

> Do I understand this product and its relevant value?

### Skeptical Editor Pass

Read again assuming the copy is trying to get away with something.

Ask:

> What is this copy claiming that the source does not actually prove?

### Contradiction Pass

Ask:

> Does any wording contradict, broaden, or strengthen the source facts?

### Hype Pass

Look for unjustified:

- best;
- ideal;
- guaranteed;
- safe;
- always;
- never;
- all;
- number one;
- urgency;
- scarcity.

These are inspection triggers, not automatic failures.

### Genericity Pass

Ask:

> What part of this copy could be removed or reused unchanged without losing product-specific meaning?

Flag unnecessary generic material.

---

## QA Decision

### PASS

All required checks pass and there are no unresolved blocker or major defects.

The copy may proceed to finalization.

### FAIL

One or more blocker or major defects remain, or a required correction remains unresolved.

The copy must return to revision.

### BLOCKED

QA cannot establish acceptability because a necessary product fact, requirement, or source authority is missing or contradictory.

A blocked result is an information problem, not merely a writing defect.

Do not "solve" a blocked result by guessing.

### Minor Issues

Minor issues may be recorded alongside PASS or FAIL.

Minor issues do not authorize production finalization when the project or task requires a clean result.

There is no numerical score that can compensate for a blocker or major defect.

---

## Failure Report

A failed or blocked QA result should identify:

**Severity**

Blocker / Major / Minor

**Category**

The area in which the defect occurred.

**Problem**

What is wrong with the copy.

**Evidence**

The product fact, task requirement, or project resource that establishes the issue.

**Location**

The affected sentence or passage.

**Required action**

What must change, or what information is required.

QA should identify the defect rather than silently rewrite the entire description.

---

## Re-Test Rules

After revision:

1. evaluate the changed content again;
2. re-check claims that depend on the changed content;
3. rerun every affected QA category;
4. confirm that the correction did not introduce a new violation;
5. do not reuse the previous verdict automatically.

If product facts, variants, or source information change, rerun the affected factual checks from the beginning.

A new version is a new QA subject.

---

## QA Invariants

These principles always apply:

1. **Evaluate the actual output, not the intended output.**
2. **Every meaningful factual claim requires support.**
3. **Plausibility is not evidence.**
4. **A good-sounding description can still fail.**
5. **Model confidence is not product evidence.**
6. **A word is not a factual source.**
7. **Golden-set examples provide writing reference, not product facts.**
8. **The absence of an exact forbidden phrase does not make an equivalent pattern acceptable.**
9. **QA does not modify source product data.**
10. **QA does not silently rewrite failing copy and then declare the rewritten version a pass.**
11. **Hard failures cannot be averaged away by strengths elsewhere.**
12. **QA must remain meaningful when the underlying model is replaced.**
