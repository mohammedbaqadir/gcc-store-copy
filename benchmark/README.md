# Benchmark: skill batch vs one-shot prompting

Purpose: compare what this skill adds over a strong single prompt at batch scale. Not "can one prompt produce one good listing" — a strong prompt can. The question is whether 20 listings keep the same factual discipline, voice, and selling effort when compared fairly.

## Design

- **Inputs:** `products/` — 20 product records across all six types. Seven are the records used elsewhere in the repo; thirteen are benchmark fixtures.
- **One-shot baseline (operator):** run `prompt.md` once per product, each in a fresh chat, with the single product record appended. Same prompt every time; the only variable is the product. Save each answer as `one-shot-outputs/<product-id>.md`.
- **Skill run (agent):** one session given `SKILL.md` processes the same 20 records sequentially, following the skill's flow and QA gate. Save each deliverable as `skill-outputs/<product-id>.md`.
- **Comparison:** once both sets exist, the results table below is filled in with both outputs side by side per product.

## Fairness rules

- The one-shot prompt contains the same rules as the skill, written out in full once (facts, never-ship list, voice, selling craft, output contract). The comparison isolates process and consistency, not knowledge.
- Same model for both runs. Record it below.
- The one-shot baseline is 20 cold, independent runs; the skill run is one session covering all 20.
- Neither run may invent facts. Quality is judged on craft, fact fidelity, and consistency.

**Model:** DeepSeek V4.1 Flash (same for both runs)
**Date:** 2026-09-18

## Status

- [x] One-shot outputs in `one-shot-outputs/` (20 files) — operator
- [x] Skill outputs in `skill-outputs/` (20 files) — agent
- [x] Comparison table filled below

## Products

| # | ID | Type | Product |
|---|---|---|---|
| 1 | `products/ready-airpods-pro-3-white.json` | `ready_product` | AirPods Pro 3 |
| 2 | `products/ready-logitech-mx-keys-s-graphite.json` | `ready_product` | Logitech MX Keys S |
| 3 | `products/ready-delonghi-dedica-coffee-machine.json` | `ready_product` | De'Longhi Dedica coffee machine |
| 4 | `products/ready-nike-air-zoom-pegasus-41.json` | `ready_product` | Nike Air Zoom Pegasus 41 |
| 5 | `products/food-afia-tamarind-500g.json` | `food` | Afia tamarind 500 g |
| 6 | `products/food-tamara-sukkary-rutab-500g.json` | `food` | Tamara Sukkary rutab 500 g |
| 7 | `products/food-sidr-honey-250g.json` | `food` | Sidr honey 250 g |
| 8 | `products/food-roasted-mixed-nuts-400g.json` | `food` | Roasted mixed nuts 400 g |
| 9 | `products/digital-product-jarir-prince-enchanted-ebook.json` | `digital_product` | Prince Enchanted ebook |
| 10 | `products/digital-product-excel-course.json` | `digital_product` | Excel course |
| 11 | `products/digital-product-wedding-invitation-templates.json` | `digital_product` | Wedding invitation templates |
| 12 | `products/digital-card-sony-playstation-store-100-usd-ksa.json` | `digital_card` | PlayStation Store $100 (KSA) |
| 13 | `products/digital-card-stc-quicknet-unlimited-1-week.json` | `digital_card` | stc Quicknet unlimited week |
| 14 | `products/digital-card-xbox-game-pass-ultimate-3-months.json` | `digital_card` | Xbox Game Pass Ultimate 3 months |
| 15 | `products/booking-shawir-legal-consultation-15-min.json` | `booking` | Shawir legal consultation |
| 16 | `products/booking-dental-cleaning.json` | `booking` | Dental cleaning |
| 17 | `products/booking-driving-lesson-60-min.json` | `booking` | Driving lesson |
| 18 | `products/made-to-order-custom-ceramic-mug-tabuwaprints.json` | `made_to_order` | Custom ceramic mug |
| 19 | `products/made-to-order-custom-neon-sign.json` | `made_to_order` | Custom neon sign |
| 20 | `products/made-to-order-personalized-gold-necklace.json` | `made_to_order` | Custom gold necklace |

## Results

Run 3: skill 0.5.1 (prose-pitch fix). The one-shot baseline is unchanged; the model is the same for both runs.

**Craft:** the fix worked at batch scale. 19 of 20 outputs are prose-first with a hook, benefit framing, and a CTA; bullets appear only where they help. This is a clear step up from 0.5.0's catalog-style lists and removes the one-shot's structural edge.

**Fact fidelity:** clean overall, with two mild sufficiency claims (Tamara rutab and mixed nuts described as enough for a session). The tamarind record was blocked for missing form details plus out-of-stock status.

**Missing-info handling:** regression — only 6 of 20 outputs carry a Gaps note, down from 20/20 in run 2. The prose-first push pulled attention away from the operator-facing note. This is the open trade-off before standardizing.

| # | Product | Edge | Why |
|---|---|---|---|
| 1 | Dental cleaning | Tie | Both clean; skill is tighter, one-shot has more personality |
| 2 | Driving lesson | Tie | One-shot states the pickup exclusion; skill implies flexible scheduling |
| 3 | Shawir consultation | Skill | Cleaner prose; one-shot has a typo |
| 4 | PlayStation card | Skill | Flags the unknown VAT status |
| 5 | stc Quicknet | Tie | Both strong |
| 6 | Xbox Game Pass | Tie | Comparable hooks, both factual |
| 7 | Excel course | Skill | One-shot's "تفهمه من أول مرة" overreach stays out of the skill |
| 8 | Enchanted ebook | Tie | Comparable |
| 9 | Invitation templates | Tie | Comparable |
| 10 | Afia tamarind | Skill | Blocked on missing form and out-of-stock status, per your standing call |
| 11 | Mixed nuts | One-shot | One-shot is more engaging; skill's sufficiency line is unverified and the allergen gap is unnoted |
| 12 | Sidr honey | Tie | Both clean |
| 13 | Tamara rutab | Tie | Skill adds a scene; "enough for a session" is a mild claim |
| 14 | Ceramic mug | Tie | Skill flows better; both keep the print-spec detail |
| 15 | Neon sign | Tie | Comparable |
| 16 | Gold necklace | Tie | Comparable |
| 17 | AirPods Pro 3 | Skill | Drops the SKU; adds the warranty gap |
| 18 | Dedica coffee machine | Skill | Adds the missing milk-frother and weight gap |
| 19 | Logitech MX Keys S | One-shot | Scenario mapping still missing in the batch run; one-shot gives the laptop/tablet use |
| 20 | Nike Pegasus 41 | Skill | Adds the missing-spec gap |

### Side by side

<details>
<summary><strong>1. تنظيف أسنان احترافي — عيادات الياسمين، الرياض</strong> — <code>booking</code></summary>

| One-shot | Skill |
|---|---|
| متى آخر مرة جلست فيها لتنظيف أسنانك؟ إذا الجواب «من زمان»، هذي خطوة بسيطة ترجّعك للروتين.<br><br>في عيادات الياسمين بالرياض، جلسة تنظيف وتلميع الأسنان تاخذ ٤٥ دقيقة، وتشمل ثلاث خطوات:<br><br>    فحص أولي<br><br>    إزالة الجير<br><br>    تلميع<br><br>السعر ٢٩٩ ريال، شامل ضريبة القيمة المضافة.<br><br>وإذا تغيّرت خططك، الإلغاء مجاني قبل الموعد بيوم.<br><br>تحب تحجز؟ اختر الوقت اللي يناسبك، وخلك مرتاح — المكان في الرياض، والمدة واضحة من البداية. | جلسة تنظيف وتلميع أسنان في عيادات الياسمين بالرياض، تشمل فحصًا أوليًا وإزالة الجير والتلميع، وتستغرق 45 دقيقة.<br><br>السعر 299 ريال شامل الضريبة، والإلغاء مجاني قبل الموعد بيوم. احجز موعدك. |

</details>

<details>
<summary><strong>2. درس قيادة عملي — 60 دقيقة، سيارة أوتوماتيك</strong> — <code>booking</code></summary>

| One-shot | Skill |
|---|---|
| تبي تتعلم القيادة على الأوتوماتيك في الرياض؟ درس عملي كامل، 60 دقيقة، على سيارة أوتوماتيك.<br><br>جلسة عملية تركّز على القيادة الفعلية، وأنت خلف المقود.<br><br>التفاصيل:<br><br>    المدة: 60 دقيقة<br><br>    السيارة: أوتوماتيك<br><br>    الموقع: الرياض<br><br>    السعر: 180 ريال، شامل ضريبة القيمة المضافة<br><br>وإذا تغيّر جدولك؟ التأجيل مجاني قبل 12 ساعة من الموعد.<br><br>ملاحظة: الدرس ما يشمل خدمة التوصيل.<br><br>احجز موعدك الحين. | درس قيادة عملي لمدة 60 دقيقة على سيارة أوتوماتيك، في الرياض. تختار الموعد اللي يناسبك، وإذا بغيت تغيّره، التأجيل مجاني قبل 12 ساعة.<br><br>السعر 180 ريال شامل الضريبة. احجز درسك وابدأ. |

</details>

<details>
<summary><strong>3. Shawir Legal Consultation — 15 Minutes</strong> — <code>booking</code></summary>

| One-shot | Skill |
|---|---|
| عندك قضية في الأحوال الشخصية أو قضية عمالية وتحتاج استشارة قانونية؟<br><br>Shawir توفر لك جلسة استشارة قانونية لمدة 15 دقيقة مع محاميين مرخصين.<br><br>    تقدر تختار طريقة التواصل: محادثة نصية، مكالمة صوتية، أو مكالمة فيديو.<br><br>    الاستشارة متاحة في السعودية.<br><br>    السعر: 250 ريال.<br><br>    تمديد الجلسة: كل 15 دقيقة إضافية بـ 50 ريال.<br><br>    استرداد كامل إذا ألغيت قبل يوم من الموعد.<br><br>    فاتورة ضريبية رسمية.<br><br>    طرق الدفع: مدى، فيزا، آبل باي.<br><br>احجز موعدك الحين. | استشارة قانونية واضحة من البداية: جلسة 15 دقيقة مع محامٍ مرخّص عبر Shawir، متخصصة في الأحوال الشخصية وقضايا العمل.<br><br>تختار الطريقة اللي تريحك: محادثة نصية، مكالمة صوتية، أو مكالمة فيديو. السعر 250 ريال، ولو احتجت وقتًا إضافيًا فكل 15 دقيقة بـ50 ريال. الدفع عبر مدى أو Visa أو Apple Pay، وتصلك فاتورة ضريبية.<br><br>وإذا ألغيت قبل الجلسة بيوم، لك استرجاع كامل. احجز جلستك. |

</details>

<details>
<summary><strong>4. Sony Gift Card $100 PlayStation Store — KSA</strong> — <code>digital_card</code></summary>

| One-shot | Skill |
|---|---|
| إذا تبي تشحن رصيدك في متجر PlayStation السعودي، هالبطاقة تسويها لك.<br><br>بطاقة Sony للدفع والشحن من PlayStation Store — منطقة السعودية. قيمتها 100 دولار، وسعرها 375 ريال.<br><br>توصلك على إيميلك. وتقدر تشتري اللي تبي من المتجر.<br><br>ملاحظة: البطاقة مخصصة لمنطقة السعودية، وغير قابلة للإرجاع أو الاستبدال.<br><br>اطلبها الحين وخلّك جاهز. | تبي تشحن رصيدك في PlayStation Store؟ بطاقة Sony بقيمة 100 دولار مخصصة لمنطقة السعودية، ويوصل الكود على بريدك الإلكتروني.<br><br>سعرها 375 ريال عند جرير. ملاحظة: غير قابلة للاسترجاع أو الاستبدال. اطلبها واشحن رصيدك.<br><br>## Gaps note<br>- حالة ضريبة القيمة المضافة على السعر غير مذكورة في المصدر، فلم يُذكر في النسخة. |

</details>

<details>
<summary><strong>5. بطاقة شحن stc Quicknet — إنترنت لا محدود لمدة أسبوع</strong> — <code>digital_card</code></summary>

| One-shot | Skill |
|---|---|
| تبي أسبوعك يعدي وأنت متصل بدون ما تفكر في الباقة؟<br><br>بطاقة شحن stc Quicknet تعطيك إنترنت لا محدود لمدة أسبوع، وهي لعملاء شرائح البيانات مسبقة الدفع على شبكة stc.<br><br>معها بيانات البث مشمولة: Netflix، وYouTube، وstc tv، وShahid. أما الاشتراكات نفسها فغير مشمولة.<br><br>وبما أنها بدون سياسة استخدام عادل، تقدر تعتمد عليها طول الأسبوع.<br><br>والشحن سهل، تقدر تشحنها عن طريق:<br><br>    تطبيق mystc<br><br>    البوابة<br><br>    SMS<br><br>    USSD<br><br>السعر: 109.25 ريال، شامل ضريبة القيمة المضافة.<br><br>اطلبها، وخلّك متصل. | أسبوع كامل إنترنت وأنت ما تحسب كل جيجا؟ بطاقة stc Quicknet تعطيك إنترنت لا محدود لمدة أسبوع، وبدون سياسة استخدام عادل.<br><br>وتشملك بيانات البث على Netflix وYouTube وstc tv وShahid — البيانات فقط، الاشتراكات غير مشمولة. أما الشحن فيصير من تطبيق mystc أو البوابة أو SMS أو USSD، والبطاقة مخصصة لعملاء شرائح البيانات مسبقة الدفع.<br><br>سعرها 109.25 ريال شامل الضريبة. اشحنها وخلّك متصل طول الأسبوع. |

</details>

<details>
<summary><strong>6. Xbox Game Pass Ultimate — 3 أشهر (السعودية)</strong> — <code>digital_card</code></summary>

| One-shot | Skill |
|---|---|
| تبي 3 أشهر من Xbox Game Pass Ultimate بدون ما تشيل همّ خصم يجيك بعدين من بطاقتك؟<br><br>هذي بطاقة رقمية مخصصة للسعودية: تستلم الكود على بريدك الإلكتروني، وتفعّله بنفسك على حساب Microsoft. ولا تجديد تلقائي — بعد الثلاثة أشهر ما يتجدد الاشتراك من نفسه.<br><br>شنو تحصل عليه:<br><br>    Xbox Game Pass Ultimate لمدة 3 أشهر<br><br>    مخصص لمنطقة السعودية<br><br>    الكود يوصل على بريدك الإلكتروني<br><br>    بدون تجديد تلقائي<br><br>    السعر: 179 ريال، شامل ضريبة القيمة المضافة<br><br>كيف تفعّله؟<br>الكود يجيك على بريدك، تدخل على حساب Microsoft وتفعّل الاشتراك من عندك. بسيطة ومباشرة.<br><br>خلك جاهز قبل ما تحتاجه — اطلبه الحين. | تبي تشحن وقت لعبك بدون التزام؟ Xbox Game Pass Ultimate لمدة 3 أشهر، مخصص للسعودية، يوصل الكود على بريدك الإلكتروني وتفعّله بحساب Microsoft — وبدون تجديد تلقائي.<br><br>سعره 179 ريال شامل الضريبة. اطلبه وخلّك جاهز للجلسة الجاية. |

</details>

<details>
<summary><strong>7. دورة Excel من الصفر إلى الاحتراف — فيديو مسجل</strong> — <code>digital_product</code></summary>

| One-shot | Skill |
|---|---|
| كل ما تفتح إكسل تحس إنك قاعد تلف في مكانك؟<br><br>هذي مشكلتك مو مشكلة البرنامج. أغلبنا تعلم إكسل من فيديوهات مبعثرة: يتفرج كثير، ويطبق قليل، ويطلع بدون نتيجة.<br><br>دورة Excel من الصفر إلى الاحتراف ماشية معك بالترتيب: 68 درسًا، بإجمالي 12 ساعة فيديو، وكلها بالعربية. تسمع الشرح وتفهمه من أول مرة، بدون ما تترجم في راسك.<br><br>والشرح مسجّل. يعني ما فيه موعد تلتزم فيه ولا بث تنتظره. تفتح الدرس اللي تبيه، توقف، ترجع، تعيد — على راحتك. ومعك في الدورة سارة العتيبي تشرح لك خطوة خطوة.<br><br>وش تحصل عليه:<br><br>    68 درسًا مرتبة من الصفر إلى الاحتراف<br><br>    12 ساعة فيديو بالعربية<br><br>    وصول لمدة 12 شهرًا من منصة الدورة، يبدأ بعد الشراء<br><br>    199 ريال، شامل الضريبة<br><br>سنة كاملة ترجع فيها للدروس كل ما احتجت، وتدفع مرة واحدة فقط.<br><br>خلّك جاهز: اطلبها الحين، وابدأ من أول درس. | تبي تتعلم Excel من الصفر وأنت في مكانك؟ دورة فيديو مسجلة مع سارة العتيبي: 68 درسًا و12 ساعة شرح بالعربي، تشوفها متى ما يناسبك من منصة الدورة.<br><br>وصولك للمنصة 12 شهرًا. سعرها 199 ريال شامل الضريبة. سجّل وابدأ أول درس. |

</details>

<details>
<summary><strong>8. الأمير المسحور - eBook</strong> — <code>digital_product</code></summary>

| One-shot | Skill |
|---|---|
| تبي حكاية عربية طويلة، فيها سحر وهروب ولعنة، وتقرأها على راحتك؟<br><br>"الأمير المسحور" للكاتب كامل كيلاني، من مكتبة المشرق الإلكترونية. كتاب إلكتروني بالعربية، 656 صفحة، وبسعر 3.99 ريال.<br><br>القصة تبدأ من مجدة، الأميرة الطيبة اللي تهرب من ملك ظالم، وتعيش متنكرة كامرأة من القرية. هناك تلتقي بجنّية شريرة، وتدخل الحكاية في لعنة سحرية تطال ابنها. والطريق الوحيد لفكّ اللعنة؟ أن يُحب رغم شكله.<br><br>إذا تبي قراءة طويلة تقرأها من مكتبتك على راحتك، هذا الكتاب يعطيك 656 صفحة من الحكاية. ويُضاف مباشرة إلى مكتبة Jarir Reader عندك، يعني ما تحتاج تنتظر توصيل.<br><br>بـ 3.99 ريال فقط. وخلّها في بالك: لأنه كتاب إلكتروني، ما يقبل الاسترجاع أو الاستبدال.<br><br>اطلبه الحين، وخلّه جاهز في مكتبة Jarir Reader. | تبي حكاية طويلة تعيشها على راحتك؟ «الأمير المسحور» لكامل كيلاني ياخذك مع أميرة طيبة تدعى مجدة تهرب من ملك ظالم، وتعيش متنكرة في قرية، وتلتقي بجنية شريرة، ثم تتبع الحكاية لعنة سحرية تصيب ابنها، وطريقه الوحيد للفك أن يُحب رغم شكله.<br><br>الكتاب رقمي بصيغة eBook، 656 صفحة، بالعربية، ويُضاف إلى مكتبتك في Jarir Reader بعد الشراء. سعره 3.99 ريال. ملاحظة: غير مؤهل للاسترجاع أو الاستبدال.<br><br>افتح Jarir Reader وابدأ القراءة. |

</details>

<details>
<summary><strong>9. 12 قالب دعوة زفاف قابل للتعديل — عربي وإنجليزي</strong> — <code>digital_product</code></summary>

| One-shot | Skill |
|---|---|
| عرسك قرب، والدعوة لسا ما جهزت؟<br><br>خلّك من الحيرة: عندك ١٢ قالب دعوة زفاف جاهزة على Canva، تقدر تعدل عليها بنفسك — بالعربية والإنجليزية.<br><br>الفكرة بسيطة: تفتح القالب، تغيّر اللي تبي، وتطلع بدعوة تشبهك. ما تحتاج تبدأ من صفحة بيضاء، ولا تنتظر أحد يجهز لك شي.<br><br>وش تحصل عليه:<br><br>    ١٢ قالب دعوة زفاف<br><br>    قوالب Canva قابلة للتعديل<br><br>    نسخ بالعربية والإنجليزية<br><br>    التوصيل: رابط تحميل بعد الشراء<br><br>السعر: ٨٩ ريال، شامل الضريبة.<br><br>ملاحظة صغيرة بس مهمة: الترخيص استخدام شخصي فقط — يعني لعرسك، وغير مسموح بإعادة البيع.<br><br>اطلبها الحين، وخلّ دعوتك تكون أول شي يفرح الناس قبل العرس. | العرس قرب والتصميم واقف؟ خلّها على Canva: 12 قالب دعوة زفاف قابل للتعديل، بالعربية والإنجليزية، تغيّر النص والتفاصيل باللي يناسبك.<br><br>بعد الشراء يوصلك رابط تحميل، والترخيص للاستخدام الشخصي فقط — إعادة البيع غير مسموحة.<br><br>سعرها 89 ريال شامل الضريبة. عدّل قالبك وابدأ توزّع الدعوات. |

</details>

<details>
<summary><strong>10. تمر هندي أفيا 500 جرام</strong> — <code>food</code></summary>

| One-shot | Skill |
|---|---|
| تبي عبوة تمر هندي تكفيك، وبسعر يريح؟<br><br>تمر هندي أفيا، عبوة 500 جرام، من كارفور بـ 15.50 ريال.<br><br>التمر الهندي من الأشياء اللي لها حضورها في العزائم واللمة، وعبوة 500 جرام تعطيك كمية محترمة بدل ما تشتري كل مرة.<br><br>خلّها في البيت، وارجع لها وقت ما تبي.<br><br>نقطة تهمك: آخر مرة تحققنا من صفحة كارفور، كان المنتج ظاهر غير متوفر. التوفر يتغير بين وقت ووقت، فالأفضل تفتح الصفحة وتشوف الحالة الحين قبل ما تعتمد عليه. | BLOCKED — لم تُكتب نسخة للعميل.<br><br>## Block report<br>- Severity: Blocked<br>- Category: Completeness — necessary fact missing<br>- Problem: السجل لا يحدد شكل المنتج (`form: null`) مع أن قرار العميل الأساسي المعلن هو «ما هو المنتج»، كما أن حالة التوفر وقت التوثيق `out_of_stock`، ما يمنع نشر نسخة بيع صادقة.<br>- Evidence: `"form": null` و`"availability_at_verification": "out_of_stock"` في سجل المنتج.<br>- Location: `benchmark/products/food-afia-tamarind-500g.json`<br>- Required action: تأكيد شكل التمر هندي (معجون، قرون، أو غير ذلك) وتحديد ما إذا كان المطلوب نشر النسخة، وإعادة التحقق من التوفر.<br><br>## Gaps note<br>- شكل المنتج (form) غير مذكور في المصدر.<br>- حالة التوفر وقت التوثيق: غير متوفر (out_of_stock). |

</details>

<details>
<summary><strong>11. مكسرات مشكلة مشوية — 400 جرام</strong> — <code>food</code></summary>

| One-shot | Skill |
|---|---|
| تبي شي يفتح النفس مع فنجان القهوة؟ أو صحن تحطه قدام الضيوف وتلقاه مختفي قبل ما تبرد القهوة؟<br><br>مكسرات مشكلة مشوية من بستان الخليج — مشوية، مشكلة، وجاهزة تنقل من الكيس إلى الصحن في ثانية.<br><br>خلّك عارف وش تطلب:<br><br>    النوع: مكسرات مشكلة مشوية<br><br>    الوزن: 400 جرام<br><br>    السعر: 42 ريال، شامل الضريبة<br><br>عبوة 400 جرام، تناسب البيت وتناسب الجلسة اللي فيها ضيوف. والسعر واضح من البداية: 42 ريال شامل الضريبة — بدون أي مبلغ يطلع لك في آخر خطوة.<br><br>اطلبها الحين، وجهّز صحنك مع القهوة. | جلسة الشاي أو القهوة تحتاج شيئًا بجانبها؟ مكسرات مشكلة مشوية من بستان الخليج، عبوة 400 جرام — كافية للجلسة ومعها زيادة.<br><br>سعرها 42 ريال شامل الضريبة. خذها وخلّ الطاولة أحلى. |

</details>

<details>
<summary><strong>12. عسل سدر جبلي — 250 جرام</strong> — <code>food</code></summary>

| One-shot | Skill |
|---|---|
| تبي عسل سدر ببرطمان زجاجي ووزن 250 جرام؟<br>مناحل الجنوب عندها لك: عسل سدر جبلي — 250 جرام.<br>السعر 149 ريال، شامل الضريبة.<br>حطه جنب القهوة، أو خذه هدية خفيفة إذا تبي.<br>اطلبه الحين. | عسل السدر له مكانته على السفرة، و«مناحل الجنوب» تجيبه ببرطمان زجاجي 250 جرام — للفطور، أو للضيوف، أو هدية.<br><br>سعره 149 ريال شامل الضريبة. اطلبه وخلّ السدر حاضر على سفرتك. |

</details>

<details>
<summary><strong>13. تمارا سكري رطب — علبة 500 جرام</strong> — <code>food</code></summary>

| One-shot | Skill |
|---|---|
| تبي تمر يكمّل قهوتك؟<br>تمارا سكري رطب — علبة 500 جرام.<br>بس 13.99 ريال شامل الضريبة.<br>متوفر الحين.<br>إذا تبي تمر سكري رطب، هذا هو. خلّك جاهز للضيوف، أو دلّع نفسك.<br>اطلبه الحين. | الرطب ما يحتاج مناسبة: علبة تمارا سكري رطب 500 جرام تكفي جلسة قهوة كاملة. حطّها وسط الطاولة وخلّ الضيوف يحكمون.<br><br>سعرها 13.99 ريال شامل الضريبة، ومتوفرة. خذ العلبة وخلّها جاهزة للضيوف. |

</details>

<details>
<summary><strong>14. Custom Ceramic Mug — Tabuwa Prints</strong> — <code>made_to_order</code></summary>

| One-shot | Skill |
|---|---|
| تبي كوب قهوة عليه تصميمك أنت؟<br>مع أكواب Tabuwa Prints الخزفية، تقدر تطبع صورتك أو شعارك أو ذكرى تحبها بألوان كاملة، وتختار النوع اللي يناسب جوّك.<br><br>اختر النوع:<br>• أبيض خزفي — كلاسيكي وبسيط.<br>• ماجك (يتغير لونه) — لمسة ممتعة.<br>• بلون داخلي — لون من الداخل.<br><br>أنت تجهز التصميم، وإحنا نطبعه.<br>نستقبل: PDF، AI، EPS، PSD، PNG، JPG، JPEG، TIF، TIFF.<br>أقصى حجم للملف: 200 ميجابايت.<br>والأفضل ترسله Print-ready PDF، 300 DPI، CMYK، مع 3 مم bleed — كذا يطلع الشغل أضبط.<br><br>أقل كمية: 6 أكواب.<br>السعر حسب الخيارات اللي تختارها، ويتحدث مع كل اختيار.<br>وإذا طلبت من 24 إلى 99 كوب، عندك خصم 12%.<br>وإذا طلبت 100 كوب أو أكثر، الخصم 25%.<br><br>الشحن يضاف عند الدفع:<br>• الرياض: 25 ريال.<br>• باقي السعودية: 50 ريال.<br>الضريبة مشمولة.<br>مدة التنفيذ: 3–4 أيام عمل.<br>وإذا صار خطأ من جهة Tabuwa Prints في الطباعة، فيه إعادة طباعة مجانية.<br><br>اطلب أكوابك الحين، جهّز تصميمك، وخلّ قهوتك تحكي عنك. | تبي هدية أو توزيعات مطبوعة بتصميمك؟ أكواب Tabuwa Prints الخزفية تنطبع بألوان كاملة بتصميمك أنت، وتختار: أبيض، أو Magic يتغيّر لونه، أو بلون من الداخل.<br><br>ترسل تصميمك بصيغة PDF أو AI أو EPS أو PSD أو PNG أو JPG أو JPEG أو TIF أو TIFF، بحد أقصى 200 ميجا. والأفضل ملف جاهز للطباعة: PDF بدقة 300 DPI ونظام ألوان CMYK مع 3 مم زيادة للقص (bleed).<br><br>أقل كمية 6 أكواب، وفيه خصم 12% لطلبات 24 إلى 99 كوب، وخصم 25% لطلبات 100 وأكثر. التفصيل يستغرق 3 إلى 4 أيام عمل، والتوصيل داخل الرياض 25 ريال، وباقي مناطق السعودية 50 ريال. الأسعار شاملة الضريبة، ولو صار خطأ من جهتنا في الطباعة، نعيدها لك مجانًا.<br><br>جهّز تصميمك واطلب أكوابك. |

</details>

<details>
<summary><strong>15. لوحة نيون LED مخصصة — نص عربي أو إنجليزي</strong> — <code>made_to_order</code></summary>

| One-shot | Skill |
|---|---|
| لوحة نيون LED مخصصة — نص عربي أو إنجليزي<br><br>تبي كلمة تحبها تشوفها في غرفتك أو مكتبك؟ لوحة نيون LED مخصصة تخلي نصك — عربي أو إنجليزي — جزء من ديكورك الداخلي. تختار المقاس واللون، وتكتب النص، ونجهزها لك.<br><br>اختر اللي يناسبك:<br><br>    المقاسات: 30 سم، 50 سم، 80 سم<br><br>    الألوان: أبيض دافئ، وردي، أزرق<br><br>    النص: عربي أو إنجليزي<br><br>    التشغيل: USB<br><br>    الاستخدام: داخلي<br><br>السعر يبدأ من 249 ريال، ويتحدد حسب المقاس المختار. التوصيل 30 ريال. مدة الإنتاج 5-7 أيام عمل.<br><br>خلّك جاهز: حدد مقاسك، اختر لونك، واكتب النص اللي تبيه. اطلبه الحين. | اكتب كلمتك وخلّها تزيّن المكان. لوحة نيون LED مخصصة بنص عربي أو إنجليزي، تجيك بمقاس 30 أو 50 أو 80 سم، وبألوان: أبيض دافئ، وردي، أزرق.<br><br>تشتغل بـ USB، ومخصصة للاستخدام الداخلي. التفصيل يستغرق 5 إلى 7 أيام عمل، والتوصيل 30 ريال. السعر يبدأ من 249 ريال حسب المقاس اللي تختاره. أرسل نصك واطلب لوحتك. |

</details>

<details>
<summary><strong>16. سلسال ذهب 18 قيراط مخصص بالاسم</strong> — <code>made_to_order</code></summary>

| One-shot | Skill |
|---|---|
| وش الهدية اللي تنلبس كل يوم، وكل ما شافتها تذكرتك؟<br><br>سلسال ذهب عيار 18 مخصص بالاسم — تكتب الاسم اللي تختاره، ويتصنع لك على الطلب.<br><br>التفاصيل:<br><br>    ذهب عيار 18<br><br>    الاسم حتى 8 أحرف<br><br>    طول السلسال 45 سم<br><br>    مختوم<br><br>التصنيع ياخذ 7 إلى 10 أيام عمل.<br><br>السعر يبدأ من 1250 ريال، والسعر النهائي يتحدد حسب سعر الذهب وقت الطلب والوزن.<br><br>خله هدية لنفسك أو لشخص غالي — واكتب الاسم اللي تبي.<br><br>اطلبه الحين، واختر الاسم. | اسمك بذهب عيار 18؟ سلسال مخصص بالاسم، حتى 8 أحرف، بطول 45 سم، ويتفصّل لك خصيصًا خلال 7 إلى 10 أيام عمل.<br><br>يجيك مختوم، لتعرف إنه ذهب عيار 18 فعلاً. السعر يبدأ من 1250 ريال، والنهائي يعتمد على سعر الذهب وقت الطلب والوزن. اكتب اسمك واطلبه. |

</details>

<details>
<summary><strong>17. Apple AirPods Pro 3، أبيض</strong> — <code>ready_product</code></summary>

| One-shot | Skill |
|---|---|
| تبي ضجة حولك تختفي وتسمع اللي يهمك؟<br>AirPods Pro 3 من Apple، باللون الأبيض، مع إلغاء الضوضاء النشط (ANC). تشغّله وتخفّف الضجيج حولك، وإذا تبي تسمع من حولك بدّل لوضع الشفافية. وفيه الصوت التكيفي، إدراك المحادثة، وعزل الصوت.<br><br>وش يهمك أكثر؟<br><br>    البطارية: حتى 8 ساعات استماع مع ANC على شحنة واحدة. ومع علبة الشحن: حتى 24 ساعة مع ANC. وإذا استعجلت، 5 دقائق في العلبة تعطيك حوالي ساعة استماع.<br><br>    العلبة: MagSafe Charging Case (USB-C)، وفيها شريحة Ultra Wideband من الجيل الثاني من Apple. ملاحظة: كيبل USB-C غير مضمّن.<br><br>    التحمّل: مقاومة للماء والغبار بمعيار IP57.<br><br>    الصوت: صوت مكاني مخصص، وشريحة Apple H2.<br><br>    للتمارين: استشعار نبض القلب أثناء التمارين.<br><br>    للسمع: اختبار سمع، مساعدة سمعية، وحماية سمع — راجع تفاصيل Apple لمعرفة طريقة الاستخدام.<br><br>    الاتصال: Bluetooth 5.3.<br><br>    الراحة: أطراف بخمس مقاسات: XXS، XS، S، M، L. ووزن الإيربود 5.55 غرام، ووزن العلبة 43.99 غرام.<br><br>السعر لدى جرير: 1049 ريال سعودي، شامل ضريبة القيمة المضافة.<br>رقم المصنّع: MFHP4ZEA \| SKU جرير: 666611.<br><br>خلك جاهز: اطلبه من جرير، وجرّبه في يومك — من زحمة الطريق إلى جلسة القهوة. | تبي تعزل الضجيج وتسمع اللي تبي؟ AirPods Pro 3 من Apple عند جرير تجيك بإلغاء الضوضاء النشط ووضع الشفافية والصوت التكيفي، وتبدّل بينها على راحتك.<br><br>وش بعد؟<br>- إلغاء الضوضاء النشط ووضع الشفافية والصوت التكيفي<br>- Conversation Awareness وVoice Isolation<br>- صوت مكاني شخصي<br>- استشعار نبض القلب أثناء التمرين<br>- اختبار السمع ومساعدة السمع وحماية السمع<br>- مقاومة الماء والغبار IP57<br>- شريحة Apple H2 وBluetooth 5.3<br>- كيس شحن MagSafe بمنفذ USB-C، مع شريحة Ultra Wideband من الجيل الثاني<br>- أطراف بأحجام من XXS إلى L<br><br>البطارية: حتى 8 ساعات استماع مع ANC، ومع الكيس توصل إلى 24 ساعة. و5 دقائق شحن بالكيس تعطيك حوالي ساعة استماع.<br><br>سعرها 1049 ريال شامل الضريبة. ملاحظة: كابل USB-C غير مضمّن. اطلبها وخلّيها معك وين ما تروح.<br><br>## Gaps note<br>- الضمان غير مذكور في المصدر، فلم يُذكر في النسخة. |

</details>

<details>
<summary><strong>18. ماكينة قهوة De'Longhi Dedica Style — ستانلس ستيل</strong> — <code>ready_product</code></summary>

| One-shot | Skill |
|---|---|
| تبي ماكينة قهوة تلقى لها مكان على الطاولة؟<br>De'Longhi Dedica Style EC685 بعرض 15 سم فقط — تنحط جنب أدواتك أو في زاوية المطبخ بدون ما تاخذ مساحة.<br>تشتغل بالقهوة المطحونة وأكواب ESE، وبضغط 15 بار. خزان الماء 1.1 لتر، واللون ستانلس ستيل.<br>سعرها 549 ريال شامل الضريبة، ومعها ضمان 24 شهر.<br>إذا تبي قهوتك على مزاجك، خلّها قريبة منك. اطلبها الحين. | مكان صغير وقهوة على طريقتك: ماكينة De'Longhi Dedica Style EC685 بعرض 15 سم فقط، تشتغل بالقهوة المطحونة وأكواب ESE.<br><br>تضغط 15 بار، وخزانها 1.1 لتر. سعرها 549 ريال شامل الضريبة، ومعها ضمان 24 شهر. جهّز كوبك وابدأ.<br><br>## Gaps note<br>- وزن الماكينة ووجود منفاخ الحليب غير مذكورين في المصدر، فتم حذفهما من النسخة. |

</details>

<details>
<summary><strong>19. Logitech MX Keys S Keyboard، Graphite</strong> — <code>ready_product</code></summary>

| One-shot | Skill |
|---|---|
| تبي كيبورد يشتغل مع أجهزتك بدون ما تتقيد بنظام واحد؟<br>Logitech MX Keys S بلون Graphite — توصيل Bluetooth أو 2.4 GHz RF، ومتوافق مع Android، macOS، iPadOS، Windows، و ChromeOS. يعني مرن مع أكثر من نظام.<br><br>سواء كنت تشتغل على اللابتوب أو التابلت، تقدر تشبكه بالطريقة اللي تريحك.<br>ومع ضمان 24 شهر من جرير.<br><br>السعر: 549 ريال شامل الضريبة.<br>اطلبه الحين. | تدور لوحة مفاتيح مكتبية بلا أسلاك؟ Logitech MX Keys S بلون Graphite تتصل عبر Bluetooth أو 2.4 GHz RF، وتتوافق مع Android وmacOS وiPadOS وWindows وChromeOS.<br><br>سعرها 549 ريال شامل الضريبة، ومعها ضمان 24 شهر من جرير. اطلبها وخلّي مكتبك جاهز.<br><br>## Gaps note<br>- عمر البطارية غير مذكور في مصدر جرير، فتم حذفه من النسخة. |

</details>

<details>
<summary><strong>20. حذاء Nike Air Zoom Pegasus 41 — أسود/رمادي</strong> — <code>ready_product</code></summary>

| One-shot | Skill |
|---|---|
| مقاسك بين 40 و45؟<br>أهم شيء عند شراء حذاء أونلاين هو المقاس. وهنا المقاسات المتوفرة من 40 إلى 45، فتقدر تختار مقاسك مباشرة.<br>إذا تبي حذاء Nike Air Zoom Pegasus 41 باللون الأسود/الرمادي، هذي المواصفات:<br><br>    الماركة: Nike<br><br>    الموديل: Air Zoom Pegasus 41<br><br>    اللون: أسود/رمادي<br><br>    المقاسات المتوفرة: 40، 41، 42، 43، 44، 45<br><br>    فرق الارتفاع: 10 مم بين الكعب ومقدمة القدم<br><br>    السعر: 479 ريال، شامل ضريبة القيمة المضافة<br><br>    رقم المنتج: NK-P41-BK<br><br>اختر مقاسك من القائمة، واطلبه. خلك جاهز. | مقاسك من 40 إلى 45 — موجود. حذاء Nike Air Zoom Pegasus 41 بلونه الأسود/الرمادي، وفيه فرق 10 مم بين الكعب ومقدمة القدم.<br><br>سعره 479 ريال، شامل ضريبة القيمة المضافة. حدد مقاسك واطلبه، وخلّك جاهز لخطواتك الجاية.<br><br>## Gaps note<br>- وزن الحذاء ومادة الوجه (upper) غير مذكورين في المصدر، فتم حذفهما من النسخة. |

</details>

