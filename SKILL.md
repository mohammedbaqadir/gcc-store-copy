---
name: saudi-store-copy
description: Produce and evaluate product copy for a Saudi-facing web store using project rules, product-type guidance, QA, golden examples, and a human-approved feedback-to-expertise loop.
compatibility: opencode
metadata:
    domain: ecommerce
    audience: saudi-arabic
    learning: human-approved
    model: replaceable
---

# Saudi Store Copy — Agent Instructions

## Purpose and Scope

This project is a reusable system for producing, reviewing, and maintaining product copy for a Saudi e-commerce store.

`SKILL.md` defines how an agent operates this system.

It defines:

- project boundaries;
- resource ownership;
- the required operating workflow;
- product-type selection;
- source-of-truth behavior;
- golden-set usage;
- QA requirements;
- handling of uncertainty and conflicts;
- completion criteria.

It does **not** define the actual Saudi Arabic writing style, vocabulary, detailed product schemas, or detailed QA tests. Those belong in their designated project resources.

The underlying language model is replaceable. Nothing in this file should depend on a specific model.

---

## Core Principles

### Facts before copy

Copy must be based on available product information.

The agent must not invent product specifications, features, ingredients, compatibility, guarantees, outcomes, certifications, availability, or other factual claims.

Persuasive wording may improve presentation but must not create new product facts.

### Project knowledge has defined ownership

Use each resource for the kind of knowledge it owns:

| Resource              | Authority                                   |
| --------------------- | ------------------------------------------- |
| `SKILL.md`            | Project operation and boundaries            |
| `STYLE.md`            | Writing behavior and style                  |
| `products/templates/` | Product-data structure                      |
| `golden-set/`         | Approved examples and evaluation references |
| `qa/`                 | Validation procedures                       |

Do not duplicate detailed rules between these areas.

### Model output is not project knowledge

Do not treat generated text, model memory, or assumptions about a product category as authoritative product information.

### Use relevant context

Identify the task and product type before selecting project resources.

Do not indiscriminately load unrelated product schemas or examples.

### Generation is not completion

Generated copy is a draft until the applicable QA gate has passed.

---

## Required Working Sequence

Follow this sequence for product-copy work:

1. **Understand the task**
   Determine what is being requested.

2. **Identify the product type**
   Select the applicable product template.

3. **Load relevant project resources**
   Consult the required writing guidance, product template, relevant golden-set material, and applicable QA instructions.

4. **Inspect product facts**
   Separate confirmed facts from missing, ambiguous, or conflicting information.

5. **Generate or revise copy**
   Follow the project's writing instructions and use only supported product facts.

6. **Run QA**
   Apply the applicable QA process.

7. **Revise failures**
   Correct issues without weakening the rules that detected them.

8. **Finalize**
   Only mark the copy as final after the applicable QA gate is satisfied.

Do not generate final copy using model knowledge alone when the relevant project resources are available but have not been consulted.

---

## Product Types

The project currently supports six operational product types:

### 1. Ready-Made Products

Physical products that can be shipped as sold.

Template: `products/templates/ready-made.md`

### 2. Custom Services

Made-to-order work such as design, printing, research, writing, and similar services.

Template: `products/templates/made-to-order.md`

### 3. Food

Food and beverages requiring specialized shipping, handling, storage, or delivery.

Template: `products/templates/food.md`

### 4. Digital Products

Digitally delivered products such as ebooks, courses, and downloadable files.

Template: `products/templates/digital-product.md`

### 5. Digital Cards

Recharge cards, account credits, codes, and similar digitally delivered products.

Template: `products/templates/digital-card.md`

### 6. Bookings

Bookable services or appointments such as courses, consultations, medical services, and similar offerings.

Template: `products/templates/booking.md`

These are **data and workflow categories**, not writing-style categories.

If a product does not fit an existing category, do not force it into an unsuitable template. Surface the mismatch and determine whether the taxonomy or template needs to change.

---

## Source-of-Truth Rules

Product source data must be treated as source data, not as draft prose.

The agent must not silently rewrite, "correct," normalize, or invent product facts in source files merely to make copy generation easier.

When information is missing:

- omit unsupported claims;
- use neutral wording when possible;
- surface the missing information when it is necessary for a valid result.

When sources conflict:

- do not guess;
- do not average conflicting values;
- do not choose the more persuasive value;
- use an explicitly established authoritative source when one exists;
- otherwise surface the conflict and avoid relying on the disputed claim.

Generated copy never becomes a source of truth merely because it was previously approved.

---

## Golden Set

The golden set contains intentionally approved examples used to teach, compare, and evaluate output.

Use it as reference evidence for qualities such as:

- naturalness;
- structure;
- promotional level;
- category-appropriate presentation.

Golden-set examples do not override explicit project rules.

Do not copy distinctive wording unnecessarily.

Do not treat an example's product-specific facts as facts about another product.

Do not modify an approved example merely to make generated output appear to pass.

Changes to the golden set are deliberate project changes and should be treated as such.

---

## QA Gate

QA is mandatory and blocking.

A description is not final merely because it has been generated or reviewed informally.

The detailed checks live in `qa/`. Follow those checks rather than recreating them in this file.

When a required QA check fails:

1. revise the output;
2. run the applicable check again;
3. do not bypass or weaken the check simply to obtain a passing result.

When a failure cannot be resolved because required information is missing or contradictory, surface the issue instead of fabricating a solution.

---

## Change Discipline

Keep project knowledge in the resource that owns it.

- Change `SKILL.md` for project operation, boundaries, workflow, or authority.
- Change `STYLE.md` for writing behavior and style.
- Change a product template for product-data structure.
- Change `qa/` for validation rules and checks.
- Change the golden set when an example has been intentionally approved as reference material.

Do not solve ambiguity by duplicating the same rule across multiple files.

Do not alter source product information merely to satisfy a writing or QA requirement.

When changing project structure, preserve compatibility with existing product data and approved examples unless the change intentionally requires migration.

---

## Completion Criteria

A product-copy task is complete only when:

1. the task and applicable product type were identified;
2. the relevant project resources were consulted;
3. available product facts were inspected;
4. unsupported factual claims were not introduced;
5. the applicable QA gate passed;
6. unresolved information gaps or conflicts were explicitly surfaced;
7. the resulting work follows the current project boundaries.

When these conditions cannot be satisfied, the correct behavior is to surface the limitation rather than manufacture missing information.
