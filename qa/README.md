# QA System

## Purpose

The `qa/` directory contains the concrete implementation used to evaluate product copy.

It is the implementation layer beneath `skill/QA.md`.

The system may eventually contain:

* deterministic checks;
* structured validation;
* evidence checks;
* language-model evaluation;
* golden-set comparisons;
* other mechanisms required to detect quality failures.

The implementation must remain independent from the underlying generation model.

Do not build infrastructure merely because it might be useful later. Add concrete machinery when there is a real evaluation need.

---

## Boundary With `skill/QA.md`

`skill/QA.md` defines:

> **What must be evaluated and what constitutes an acceptable result.**

`qa/` defines:

> **How those evaluations are actually performed.**

Do not move writing policy into `qa/`.

Do not duplicate the complete QA policy inside individual checks.

When a check needs to know what constitutes failure, the project's QA policy remains the authority.

Policy changes belong in the appropriate `skill/` resource.

---

## Directory Structure

```text
qa/
├── README.md
└── checks/
```

### `checks/`

Contains individual concrete QA checks.

A check should have one clear responsibility.

Possible checks may eventually cover:

* required output validation;
* forbidden-pattern detection;
* factual-claim validation;
* product-context validation;
* formatting validation;
* genericity detection;
* language-quality evaluation.

These are examples, not a requirement to create one check for every category.

Do not create checks merely because a category exists in `skill/QA.md`.

Create them when there is a useful concrete way to evaluate the requirement.

### Future QA Artifacts

Additional directories or files may be added when the system genuinely requires them.

Do not create infrastructure in advance without a concrete use case.

---

## What a Check Is

A check is an evaluation mechanism with a defined responsibility.

A check should answer a specific question.

Examples:

> Does the output contain a required structure?

> Does this claim have supporting product evidence?

> Does the output contain a prohibited pattern?

> Does the copy exhibit a known language-quality problem?

A check evaluates. It does not rewrite the product description.

### Input

A check may receive:

* generated copy;
* product facts;
* task requirements;
* product type;
* applicable skill resources;
* relevant golden-set examples;
* other explicitly required evaluation context.

A check must not silently obtain unrelated product information.

### Evaluation

The check evaluates only its defined responsibility.

It should not expand into unrelated quality judgments merely because they are visible.

### Result

A check should produce an explicit result identifying:

* status;
* severity when applicable;
* evidence;
* location when applicable;
* explanation;
* required action when applicable.

---

## Check Categories

### Deterministic Checks

Use deterministic mechanisms where the requirement can be evaluated reliably.

Examples:

* required structure;
* formatting;
* known prohibited patterns;
* machine-readable data validation.

Prefer deterministic checks when they provide reliable coverage.

### Evidence Checks

Use product facts and task information to determine whether generated claims are supported.

The supplied product source is authoritative for product facts.

Plausibility is not evidence.

### Language / LLM Checks

Some properties cannot be reliably reduced to simple deterministic rules.

Examples include:

* natural Saudi commercial Arabic;
* translation artifacts;
* generic marketing language;
* tone;
* contextual appropriateness.

These may be evaluated by an LLM or another language-evaluation mechanism.

The evaluation model is replaceable.

When practical, separate generation from evaluation through a distinct evaluation pass and, preferably, a different evaluation model. This is a desirable safeguard, not a dependency of the QA architecture.

### Golden-Set Checks

Golden examples may be used to calibrate or compare output.

Comparison should focus on underlying characteristics such as:

* naturalness;
* structure;
* information density;
* tone;
* restraint;
* customer orientation.

Do not use simple textual similarity as a substitute for quality evaluation.

Golden examples must not become product-fact sources or copying templates.

---

## Check Result Contract

Every concrete check should communicate a predictable result.

### PASS

The check found no relevant defect within its scope.

### FAIL

The check identified a defect.

The result should explain what was found and why it matters.

### BLOCKED

The check cannot establish a reliable result because required information or evidence is unavailable or contradictory.

A blocked check must not guess.

### Severity

Failures use the severity model defined by `skill/QA.md`:

* Blocker;
* Major;
* Minor;
* Informational.

A check must not invent a competing severity system.

### Evidence

A failure should provide enough evidence for another agent or human to understand the finding.

Where applicable, include:

* affected text;
* supporting product fact;
* relevant rule;
* relevant requirement;
* location.

Distinguish evidence from inference.

---

## Composition

### Independent Checks

Checks should be independently understandable and, where practical, independently executable.

One check should not silently depend on undocumented behavior from another.

### Dependent Checks

Some checks may legitimately require another check or preprocessing step.

Such dependencies must be explicit.

For example, a factual-claim check may require successful parsing of the product facts.

### Hard Gates

A blocker or major failure identified by the QA policy must not be hidden by successful results from other checks.

QA is not an average score.

A large number of passing checks cannot compensate for a hard failure.

---

## Relationship to Golden Set

The golden set is maintained separately under:

```text
golden-set/
```

It provides approved examples that may be used as:

* calibration material;
* comparison material;
* regression material.

It does not define QA policy.

`skill/QA.md` defines how golden examples should be used during evaluation.

`qa/` may consume relevant golden examples when implementing those evaluations.

The golden set must never be modified automatically as a side effect of QA.

Retired golden examples must not be used as ordinary active style references.

---

## Adding a New Check

Before adding a check, ask:

1. What specific failure does it detect?
2. Is that failure already covered?
3. Can the requirement be evaluated reliably?
4. Should the check be deterministic, evidence-based, or model-based?
5. What input does it require?
6. What constitutes PASS?
7. What constitutes FAIL?
8. When should it return BLOCKED?
9. What evidence should it produce?
10. Does it duplicate or contradict an existing project rule?

A new check should have a narrow responsibility.

Do not create a check merely to increase the number of checks.

---

## Maintenance

Keep checks aligned with the current project policy.

When a requirement changes:

1. identify affected checks;
2. update the implementation;
3. verify that the check still reflects the policy;
4. test affected golden examples where relevant.

Do not silently change the project's quality standard through implementation changes.

Policy changes belong in the appropriate `skill/` resource.

---

## Non-Goals

The `qa/` directory is not:

* the writing guide;
* the Saudi-language style guide;
* the vocabulary authority;
* the forbidden-content authority;
* the workflow engine;
* the product database;
* the golden-set repository;
* a model-specific prompt repository;
* a requirement to automate every aspect of quality.

---

## QA System Invariants

1. **`skill/QA.md` defines QA policy; `qa/` implements it.**
2. **Checks have narrow, explicit responsibilities.**
3. **Product facts come from the product source, not from golden examples.**
4. **A check must not invent missing evidence.**
5. **BLOCKED is preferable to guessing.**
6. **Hard failures cannot be averaged away.**
7. **LLM-based checks are allowed, but the underlying model is replaceable.**
8. **Generation and evaluation should be separated when practical.**
9. **Golden examples are evaluation references, not rules or templates.**
10. **Golden-set comparison should evaluate characteristics, not reward textual imitation.**
11. **QA does not rewrite failing copy.**
12. **Do not build QA infrastructure without a concrete evaluation need.**
