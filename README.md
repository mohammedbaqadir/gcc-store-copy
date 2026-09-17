# Saudi Store Copy (`saudi-store-copy`)

Agent skill that writes and QA's Saudi Arabic product copy for e-commerce. It strictly uses facts you provide, checks its own output before finalizing, and improves over time as you apply corrections.

---

## What's an Agent Skill?

A folder of Markdown files that an AI agent reads to specialize how it works. No code, no build—just `.md` files.

---

## How to Install It

Copy this entire folder into your agent's designated skills directory:

- **Claude Code**: `.claude/skills/<skill-name>/` (project) or `~/.claude/skills/` (global)
- **OpenCode**: Your OpenCode skills directory
- **Claude.ai / Desktop**: Upload as a project skill

---

## How to Use It

Just ask, and mention the skill explicitly if it doesn't auto-trigger:

> Use the `saudi-store-copy` skill to write copy for this product: `<paste JSON>`

---

## How It Works

`SKILL.md` serves as the entry point. It doesn't hold the actual rules directly—instead, it points to the file that owns each specific domain:

| File / Directory      | What it controls                                    |
| :-------------------- | :-------------------------------------------------- |
| `SKILL.md`            | Rules, boundaries, and entry point                  |
| `STYLE.md`            | Voice and tone                                      |
| `RULES.md`            | Writing rules (facts, structure, claims)            |
| `VOCABULARY.md`       | Preferred and discouraged words                     |
| `FORBIDDEN.md`        | Banned phrases and patterns                         |
| `products/templates/` | Data requirements for each product type             |
| `golden-set/`         | Approved example copy                               |
| `QA.md`, `qa/`        | Checks performed before copy is finalized           |
| `WORKFLOW.md`         | The step-by-step operational process                |
| `feedback/`           | Storage where corrections turn into permanent rules |

### The Generation Process

When you give the agent a product, it follows this lifecycle:

1. **Classification**: Determines the product type (e.g., food, digital card, booking) and loads the matching template.
2. **Fact Constraint**: Restricts output strictly to facts you provided—**no invented specs or claims**.
3. **Drafting**: Generates copy following the style/rules files, referencing golden examples for tone.
4. **Quality Assurance (QA)**: Scans for made-up facts, unsupported claims, banned phrases, and generic filler.
5. **Resolution**: If QA fails, it fixes and re-checks. If information is missing or conflicting, it halts and asks you instead of guessing.
6. **Completion**: Copy is only marked as finished once QA completely passes.

> **Feedback Loop:** When you correct its output, those corrections can be saved into `VOCABULARY.md`, `RULES.md`, or `golden-set/`, allowing the agent to improve without requiring any retraining.

---

## Evidence

To check whether this skill is actually worth using over a good one-shot prompt, I ran both on the same 7 products, same model (DeepSeek V4 Flash), same underlying rules — once as a single detailed prompt, once through the skill.

One example — same full spec sheet given to both:

| One-shot                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Skill                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| سماعات AirPods Pro 3 من Apple باللون الأبيض، بسعر 1049 ريال شامل الضريبة من جرير.<br>- إلغاء الضوضاء النشط، والصوت التكيفي، ووضع الشفافية، ووعي المحادثة، وعزل الصوت.<br>- صوت مكاني مخصص.<br>- استشعار معدل ضربات القلب أثناء التمرين.<br>- ميزات مرتبطة بالسمع: اختبار السمع، مساعدة السمع، وحماية السمع.<br>- شريحة Apple H2...<br>- مقاومة للماء والغبار بتصنيف IP57.<br>- البطارية: حتى 8 ساعات مع ANC، وحتى 24 ساعة مع العلبة.<br>- شحن سريع: 5 دقائق تعطي حوالي ساعة استماع.<br>...<br><br>_Missing info: قائمة الأجهزة المتوافقة، ومدة الضمان غير مذكورتين._ | سماعات AirPods Pro 3 — أبيض<br>سماعات لاسلكية بعزل ضوضاء نشط وميزات تتكيف مع محيطك.<br>سماعات AirPods Pro 3 من آبل بمعالج H2، تجمع بين إلغاء الضوضاء النشط والصوت المتكيف ووضع الشفافية، فتقدر تتنقل بين العزل والانتباه لمحيطك حسب حاجتك.<br>ليش تستاهل:<br>🎧 إلغاء ضوضاء نشط، صوت متكيف، ووضع شفافية<br>🔋 استماع حتى 8 ساعات مع إلغاء الضوضاء، وحتى 24 ساعة مع العلبة<br>⚡ شحن سريع: 5 دقائق تعطيك حوالي ساعة استماع<br>❤️ قياس معدل ضربات القلب أثناء التمارين<br>👂 ميزات سمعية: فحص سمع، مساعدة سمعية، وحماية للسمع<br>💧 مقاومة للغبار والماء بمعيار IP57<br>السعر: 1,049 ريال شامل الضريبة.<br>ملاحظة: كابل USB-C غير مضمّن في العلبة. |

Same facts, no fabrication either way — but the one-shot lists specs flat, while the skill turns "ANC + transparency mode" into what that actually means for the customer ("تتنقل بين العزل والانتباه لمحيطك حسب حاجتك"). It also keeps the internal "Missing info" note out of the deliverable — a real listing wouldn't ship that line. That structure — hook → bullets → price — held consistently across all 7 products; the one-shot's format varied item to item.

**Full comparison, all 7 products, source data, and the exact prompt used:** [`/benchmark`](./benchmark/)

## Batches

If you provide multiple products, the agent treats each one separately to ensure **no facts leak** from one product to the next.

---

## License

MIT — see the `LICENSE` file for details.
