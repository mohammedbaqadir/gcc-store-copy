BLOCKED — لم تُكتب نسخة للعميل.

## Block report
- Severity: Blocked
- Category: Completeness — necessary fact missing
- Problem: السجل لا يحدد شكل المنتج (`form: null`) مع أن قرار العميل الأساسي المعلن هو «ما هو المنتج»، كما أن حالة التوفر وقت التوثيق `out_of_stock`، ما يمنع نشر نسخة بيع صادقة.
- Evidence: `"form": null` و`"availability_at_verification": "out_of_stock"` في سجل المنتج.
- Location: `benchmark/products/food-afia-tamarind-500g.json`
- Required action: تأكيد شكل التمر هندي (معجون، قرون، أو غير ذلك) وتحديد ما إذا كان المطلوب نشر النسخة، وإعادة التحقق من التوفر.

## Gaps note
- شكل المنتج (form) غير مذكور في المصدر.
- حالة التوفر وقت التوثيق: غير متوفر (out_of_stock).
