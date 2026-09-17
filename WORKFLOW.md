# Workflow

## Purpose and Operating Model

This file defines the operational procedure for producing, reviewing, revising, and finalizing product copy.

The workflow converts:

> product information + task requirements + project knowledge

into:

> customer-facing copy that has passed the applicable QA gate.

`AGENT.md` defines the project's authority and boundaries.

`WORKFLOW.md` defines the execution sequence.

The detailed content of style, writing rules, vocabulary, forbidden patterns, product schemas, and QA checks remains in their respective resources.

---

## Inputs and Preconditions

### Product Input

The agent must have access to the product information required for the task.

Product input may come from:

- a structured JSON product record;
- a supplied product source;
- an approved connected data source.

Source product data must be treated as source information, not editable marketing copy.

### Task Input

The agent must know what operation is required.

Typical operations include:

- create;
- revise;
- shorten;
- expand;
- adapt;
- review.

Task requirements control the requested output and format, but never authorize unsupported factual claims.

### Resource Availability

Before final generation or revision, the agent must have access to the relevant project resources.

Do not load the entire project indiscriminately.

Select resources according to the product type and task.

---

## Stage 1 — Identify the Task

Determine:

- what operation is required;
- what customer-facing output is expected;
- required format;
- required length or structural constraints;
- any task-specific constraints.

The workflow backbone remains the same across task types, but the operation changes:

**Create**

Produce new copy from supported product facts.

**Revise**

Preserve valid existing information while correcting or improving the requested aspects.

**Shorten**

Reduce length while preserving important product meaning.

**Expand**

Add useful supported information without inventing new facts.

**Adapt**

Change wording or format while preserving factual meaning.

**Review**

Evaluate existing copy against the applicable project resources and QA requirements.

Do not begin substantive writing or revision until the task is understood.

---

## Stage 2 — Identify the Product Type

Classify the product as one of the supported types:

1. ready-made;
2. custom service;
3. food;
4. digital product;
5. digital card;
6. booking.

Load the corresponding product template.

If classification is uncertain, do not force the product into the closest category.

Surface the mismatch before proceeding.

---

## Stage 3 — Load Applicable Knowledge

Load only the project resources relevant to the task and product.

### Always Relevant

Use:

- `AGENT.md`;
- `skill/STYLE.md`;
- `skill/RULES.md`;
- the applicable product template.

### Usually Relevant

Use:

- `skill/VOCABULARY.md`;
- `skill/FORBIDDEN.md`;
- applicable QA guidance.

### Conditionally Relevant

Use:

- relevant golden-set examples;
- category-specific vocabulary;
- specific QA checks;
- other project material required by the task.

The objective is **sufficient context, not maximum context**.

### Golden Set

Use examples for comparison and reference when they are relevant.

Do not transfer product-specific facts from an example to another product.

### QA

Consult the applicable QA requirements early enough to understand acceptance constraints.

Run the actual QA checks after the draft or revision exists.

---

## Stage 4 — Establish the Fact Set

Before generating or revising customer-facing copy, inspect the available product information.

Separate it into:

### Confirmed Facts

Explicitly supported product information.

These may be used.

### Missing Facts

Information not supplied.

Do not invent it.

### Conflicting Facts

Information from different sources that does not agree.

Do not silently resolve the conflict unless an authoritative source has been established.

### Fact Boundary

Only confirmed product facts may become product-specific factual claims.

General knowledge about a category is not evidence that a particular product has a particular feature.

When revising an existing description, existing copy is **not automatically evidence** for claims that are absent from the product source.

---

## Stage 5 — Establish an Editorial Plan

Before drafting, identify only the information needed to guide the writing.

The editorial plan should establish:

- what the product is;
- the most important customer-relevant facts;
- useful supporting information;
- information that should be omitted;
- constraints imposed by the task.

Do not build a generic marketing formula and fill it with product facts afterward.

The product and customer context should determine the shape of the description.

The editorial plan is an internal working artifact unless the task explicitly requests it.

---

## Stage 6 — Generate or Revise

Produce the draft using:

- confirmed product facts;
- task requirements;
- `STYLE.md`;
- `RULES.md`;
- relevant `VOCABULARY.md`;
- applicable `FORBIDDEN.md`;
- relevant golden-set references.

For revision tasks, preserve valid factual content unless the task specifically requires its removal or alteration and the change remains factually supported.

Do not:

- invent missing facts;
- transfer claims from other products;
- mechanically reuse another description;
- force vocabulary entries into unrelated sentences;
- use model knowledge as product evidence.

---

## Stage 7 — Pre-QA Editorial Pass

Review the draft before formal QA.

Look for:

- generic filler;
- repeated information;
- formulaic structure;
- unnatural translation;
- weak or vague phrasing;
- irrelevant details;
- unsupported strengthening of claims;
- terminology inconsistent with the relevant vocabulary;
- prohibited expressions that can already be identified.

Correct editorial problems without altering source product facts.

Do not modify the product source simply to make the description pass.

---

## Stage 8 — QA Gate

Run the applicable QA process defined by `QA.md`.

### Pass

Proceed to finalization.

### Fail

Classify the failure before revising.

A failure is generally one of two kinds:

**Copy defect**

The required information exists, but the writing violates a rule.

Return to Stage 6 or Stage 7.

**Information defect**

The failure cannot be resolved without missing, contradictory, or uncertain product information.

Stop the normal writing loop and surface the information problem.

Do not write around an information defect by inventing a fact.

---

## Stage 9 — Revision Loop

For a copy defect:

1. identify the failed requirement;
2. revise the smallest necessary portion;
3. preserve unaffected valid content;
4. rerun the relevant QA checks.

Do not regenerate the whole description merely because one sentence failed.

For an information defect:

1. identify the missing or conflicting information;
2. determine whether the unsupported claim can simply be removed;
3. if not, surface the information problem;
4. do not continue rewriting indefinitely.

The loop ends when:

- all required QA checks pass; or
- the task cannot be completed accurately with the available information.

Do not repeatedly rewrite a passing description without a specific reason.

---

## Stage 10 — Finalization

A product description is final only when:

- the requested task has been completed;
- the product type was correctly identified;
- supported product facts were used;
- unsupported factual claims were not introduced;
- applicable QA checks passed;
- unresolved information problems have been surfaced.

Final output has two separate parts:

The copy itself — clean, customer-facing, no meta-commentary, no missing-info notes, no QA language of any kind.
A "Gaps" note directly below it — a short bullet list, addressed to the operator (not the customer), naming what was omitted and why (missing from source, conflicting, or out of scope). This is not optional when a fact was omitted for one of those reasons.

Do not expose internal process details, editorial plans, or model commentary beyond the Gaps note unless explicitly requested. The Gaps note is the one standing exception — it always accompanies the copy when a relevant fact was withheld.

---

## Exceptions and Stop Conditions

### Missing Information

If the missing information is not necessary, omit the unsupported claim.

If it is necessary, stop and surface the gap.

### Conflicting Information

Do not guess or average the conflicting values.

Use an established authoritative source when available.

Otherwise, surface the conflict and avoid relying on the disputed fact.

### Wrong Product Type

Do not force the product into an unsuitable template.

Stop and resolve classification.

### Resource Conflict

If project resources appear to disagree:

1. follow the authority rules in `AGENT.md`;
2. prefer the resource that owns the relevant kind of knowledge;
3. surface unresolved conflicts rather than silently choosing a convenient interpretation.

### Unsupported Claim

Remove the claim, rewrite it into a supported statement, or surface the missing information.

### QA Failure

Never bypass a required QA failure.

Return to the appropriate stage or stop when the underlying problem is informational.

---

## Batch Processing

Each product is an independent processing unit.

For every product:

1. load its product-specific data;
2. identify its product type;
3. establish its own fact set;
4. select its own relevant contextual resources;
5. generate or revise its own copy;
6. run its own QA gate.

Do not carry factual claims, specifications, variants, or assumptions from one product into another.

Stable project instructions may remain loaded, but product-specific context must be refreshed between items.

A batch-level completion status never replaces product-level QA.

---

## Recording and Learning

### Golden Set

A passing description does not automatically become a golden-set example.

An example should be promoted only when it has deliberate reference value and has been approved as such.

### Vocabulary Candidates

Repeated useful wording may be recorded as a vocabulary candidate.

Do not automatically modify `VOCABULARY.md`.

Promotion from candidate to canonical vocabulary is a deliberate project change.

### Recurring Problems

When the same problem occurs repeatedly, identify whether the appropriate fix belongs in:

- `STYLE.md`;
- `RULES.md`;
- `VOCABULARY.md`;
- `FORBIDDEN.md`;
- `QA.md`;
- a product template;
- or the workflow itself.

Fix the underlying project resource rather than repeatedly compensating inside individual descriptions.

---

## Workflow Invariants

These conditions remain true throughout the workflow:

1. **Facts come before final copy.**
2. **The product type is identified before product-specific context is selected.**
3. **Relevant project resources are consulted before substantive final generation.**
4. **Generated copy is not final until QA passes.**
5. **Missing and conflicting facts are never invented away.**
6. **Each product has an independent fact boundary.**
7. **Source product data is not modified merely to satisfy copy requirements.**
8. **A concise complete description is preferable to a longer description containing filler or unsupported claims.**
9. **Passing QA does not automatically promote wording into the golden set or vocabulary.**
10. **The workflow remains valid if the underlying model is replaced.**
