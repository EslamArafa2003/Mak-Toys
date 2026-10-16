import React, { useState } from 'react';
import { QuoteRequest, Language } from '../types';
import { translations } from '../translations';
import { Building2, Calculator, CheckCircle2, AlertCircle, FileSpreadsheet, ArrowRight, ArrowLeft } from 'lucide-react';

interface WholesaleStudioProps {
  lang: Language;
  onQuoteSubmitted: (newQuote: QuoteRequest) => void;
}

export const WholesaleStudio: React.FC<WholesaleStudioProps> = ({
  lang,
  onQuoteSubmitted,
}) => {
  const t = translations[lang];

  const [businessName, setBusinessName] = useState('');
  const [businessType, setBusinessType] = useState<'shop' | 'school' | 'library' | 'company' | 'other'>('shop');
  const [contactName, setContactName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [farahQty, setFarahQty] = useState(15);
  const [mishmishQty, setMishmishQty] = useState(15);
  const [notes, setNotes] = useState('');
  const [submittedQuote, setSubmittedQuote] = useState<QuoteRequest | null>(null);

  const totalUnits = farahQty + mishmishQty;
  const isBelowMoq = totalUnits < 20;

  // Base wholesale prices
  const baseFarahWholesale = 240;
  const baseMishmishWholesale = 215;

  // Retail fallback if below MOQ
  const farahUnitPrice = isBelowMoq ? 380 : (totalUnits >= 100 ? 216 : totalUnits >= 50 ? 228 : baseFarahWholesale);
  const mishmishUnitPrice = isBelowMoq ? 340 : (totalUnits >= 100 ? 193 : totalUnits >= 50 ? 204 : baseMishmishWholesale);

  const estimatedTotal = (farahQty * farahUnitPrice) + (mishmishQty * mishmishUnitPrice);

  const handleSubmitQuote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName || !phone) return;

    const newQuote: QuoteRequest = {
      id: `Q-${Math.floor(100 + Math.random() * 900)}`,
      businessName,
      businessType,
      contactName: contactName || (lang === 'ar' ? 'مسؤول المشتريات' : 'Purchasing Lead'),
      phone,
      email: email || 'contact@org.eg',
      farahQty,
      mishmishQty,
      totalUnits,
      estimatedTotal,
      notes,
      status: 'pending',
      createdAt: new Date().toISOString().replace('T', ' ').substring(0, 16),
      validUntil: new Date(Date.now() + 10 * 86400000).toISOString().split('T')[0]
    };

    onQuoteSubmitted(newQuote);
    setSubmittedQuote(newQuote);
  };

  const handlePresetHassan = () => {
    setBusinessName(lang === 'ar' ? 'مكتبة الشروق — المعادي' : 'Shorouk Bookstore — Maadi');
    setBusinessType('shop');
    setContactName(lang === 'ar' ? 'حسن الشريف' : 'Hassan El-Sherif');
    setPhone('+20 102 998 7766');
    setEmail('hassan@shorouk.eg');
    setFarahQty(25);
    setMishmishQty(25);
    setNotes(lang === 'ar' ? 'عرض على أرفف ألعاب الأطفال التراثية' : 'Featured display on heritage kids toy shelves');
  };

  return (
    <section id="wholesale" className="py-16 border-b border-stone-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800">
            <Building2 className="w-4 h-4" />
            <span>{lang === 'ar' ? 'قناة المبيعات للمؤسسات' : 'B2B & Institutional Sales'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
            {t.wholesaleTitle}
          </h2>
          <p className="text-sm text-stone-600 mt-1">
            {t.wholesaleSubtitle}
          </p>
        </div>

        {submittedQuote ? (
          <div className="bg-white rounded-2xl border border-stone-200 p-8 text-center max-w-xl mx-auto shadow-sm space-y-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-800 rounded-full mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-stone-900">
              {lang === 'ar' ? 'تم استلام طلب عرض السعر بنجاح!' : 'Quote Request Received!'}
            </h3>
            <p className="text-xs text-stone-600">
              {t.quoteSuccessMsg}{' '}
              <span className="font-mono font-bold text-amber-900">{submittedQuote.id}</span>
            </p>
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-700 text-start space-y-2">
              <div className="flex justify-between">
                <span>{lang === 'ar' ? 'المؤسسة:' : 'Organization:'}</span>
                <span className="font-semibold">{submittedQuote.businessName}</span>
              </div>
              <div className="flex justify-between">
                <span>{lang === 'ar' ? 'إجمالي القطع:' : 'Total Units:'}</span>
                <span className="font-bold tabular-nums">{submittedQuote.totalUnits} {t.units}</span>
              </div>
              <div className="flex justify-between">
                <span>{lang === 'ar' ? 'القيمة التقديرية:' : 'Estimated Value:'}</span>
                <span className="font-extrabold text-amber-900 tabular-nums">{submittedQuote.estimatedTotal} {t.currency}</span>
              </div>
              <div className="flex justify-between text-stone-500">
                <span>{lang === 'ar' ? 'فترة الصلاحية:' : 'Validity:'}</span>
                <span>{submittedQuote.validUntil} (10 {lang === 'ar' ? 'أيام' : 'days'})</span>
              </div>
            </div>
            <button
              onClick={() => setSubmittedQuote(null)}
              className="mt-4 px-5 py-2.5 text-xs font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 rounded-lg cursor-pointer transition-colors"
            >
              {lang === 'ar' ? 'حساب عرض سعر جديد' : 'Calculate Another Quote'}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 7 Cols: Form & Configuration */}
            <form onSubmit={handleSubmitQuote} className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-800">
                  {lang === 'ar' ? 'بيانات المؤسسة والكميات' : 'Organization & Quantities'}
                </span>
                <button
                  type="button"
                  onClick={handlePresetHassan}
                  className="text-[11px] font-medium text-amber-800 hover:text-amber-950 underline cursor-pointer"
                >
                  {lang === 'ar' ? 'تجربة سريعة كـ "حسن (صاحب مكتبة)"' : 'Test as "Hassan (Bookstore Owner)"'}
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    {t.businessNameField} <span className="text-amber-800">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder={lang === 'ar' ? 'مكتبة، مدرسة، متجر...' : 'Store, school, library name...'}
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-800 bg-stone-50/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    {t.businessTypeField}
                  </label>
                  <select
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value as any)}
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-800 bg-stone-50/50"
                  >
                    <option value="shop">{lang === 'ar' ? 'متجر تجزئة / لعب أطفال' : 'Retail Toy Shop'}</option>
                    <option value="school">{lang === 'ar' ? 'مدرسة أو حضانة دولية' : 'School / Nursery'}</option>
                    <option value="library">{lang === 'ar' ? 'مكتبة عامة أو خاصة' : 'Library / Cultural Space'}</option>
                    <option value="company">{lang === 'ar' ? 'شركة خاصة' : 'Private Enterprise'}</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    {t.contactPersonField}
                  </label>
                  <input
                    type="text"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder={lang === 'ar' ? 'الاسم' : 'Name'}
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-800 bg-stone-50/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    {t.phoneField} <span className="text-amber-800">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+20 100 000 0000"
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-800 bg-stone-50/50 tabular-nums"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    {t.emailField}
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="info@business.eg"
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-800 bg-stone-50/50"
                  />
                </div>
              </div>

              {/* Quantity Sliders */}
              <div className="pt-2 space-y-4">
                <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200">
                  <div className="flex items-center justify-between text-xs font-semibold mb-2">
                    <span className="text-stone-800">{t.farahQtyLabel}</span>
                    <span className="text-amber-900 font-bold tabular-nums">{farahQty} {t.units}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="150"
                    value={farahQty}
                    onChange={(e) => setFarahQty(parseInt(e.target.value) || 0)}
                    className="w-full accent-amber-900 cursor-pointer"
                  />
                </div>

                <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200">
                  <div className="flex items-center justify-between text-xs font-semibold mb-2">
                    <span className="text-stone-800">{t.mishmishQtyLabel}</span>
                    <span className="text-amber-900 font-bold tabular-nums">{mishmishQty} {t.units}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="150"
                    value={mishmishQty}
                    onChange={(e) => setMishmishQty(parseInt(e.target.value) || 0)}
                    className="w-full accent-amber-900 cursor-pointer"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  {lang === 'ar' ? 'ملاحظات أو مواعيد التسليم المطلوبة' : 'Delivery Requirements & Notes'}
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={lang === 'ar' ? 'أي تفاصيل خاصة بتسليم الشحنة...' : 'Any specific delivery requests...'}
                  className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-800 bg-stone-50/50"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 text-xs font-bold text-white bg-amber-900 hover:bg-amber-950 rounded-lg shadow-sm hover:shadow transition-all cursor-pointer"
              >
                {t.requestOfficialQuoteBtn}
              </button>
            </form>

            {/* Right 5 Cols: Live Calculator Summary */}
            <div className="lg:col-span-5 bg-stone-900 text-stone-100 p-6 sm:p-7 rounded-2xl border border-stone-800 shadow-md space-y-5">
              <div className="flex items-center gap-2 pb-3 border-b border-stone-800">
                <Calculator className="w-5 h-5 text-amber-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-stone-300">
                  {lang === 'ar' ? 'معاينة التسعير الفوري' : 'Live Quote Estimate'}
                </span>
              </div>

              {/* Edge Case Warning if Below MOQ (PRD Section 8) */}
              {isBelowMoq && (
                <div className="p-3 bg-amber-950/80 border border-amber-800/80 rounded-xl text-xs text-amber-200 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">{lang === 'ar' ? 'تنبيه الحد الأدنى: ' : 'MOQ Notice: '}</span>
                    <span>{t.minOrderWarning}</span>
                  </div>
                </div>
              )}

              {/* Breakdown */}
              <div className="space-y-3 text-xs">
                <div className="flex justify-between items-center text-stone-300">
                  <span>{lang === 'ar' ? 'دمية فرح (سعر الوحدة):' : 'Farah Doll (Unit Rate):'}</span>
                  <span className="font-mono tabular-nums">{farahUnitPrice} {t.currency} × {farahQty}</span>
                </div>
                <div className="flex justify-between items-center text-stone-300">
                  <span>{lang === 'ar' ? 'ثعلب مشمش (سعر الوحدة):' : 'Mishmish Fox (Unit Rate):'}</span>
                  <span className="font-mono tabular-nums">{mishmishUnitPrice} {t.currency} × {mishmishQty}</span>
                </div>
                <div className="flex justify-between items-center text-stone-300 pt-2 border-t border-stone-800">
                  <span>{lang === 'ar' ? 'إجمالي عدد القطع:' : 'Total Volume:'}</span>
                  <span className="font-bold text-amber-300 tabular-nums">{totalUnits} {t.units}</span>
                </div>
                <div className="flex justify-between items-center text-stone-300">
                  <span>{t.volumeTier}:</span>
                  <span className="text-emerald-400 font-semibold">
                    {isBelowMoq ? (lang === 'ar' ? 'سعر تجزئة (أقل من 20)' : 'Retail (Under 20)') : totalUnits >= 100 ? '10% Super Tier' : totalUnits >= 50 ? '5% Tier' : (lang === 'ar' ? 'سعر جملة أساسي' : 'Standard Wholesale')}
                  </span>
                </div>
              </div>

              {/* Grand Total */}
              <div className="pt-4 border-t border-stone-800">
                <div className="text-[11px] text-stone-400 uppercase tracking-wider mb-1">
                  {t.totalEstimatedPrice}
                </div>
                <div className="text-3xl font-extrabold text-white tabular-nums tracking-tight">
                  {estimatedTotal.toLocaleString()}{' '}
                  <span className="text-xs font-semibold text-amber-400 uppercase">{t.currency}</span>
                </div>
                <div className="text-[11px] text-stone-400 mt-1">
                  {lang === 'ar'
                    ? 'يشمل التغليف الكرتوني المطبوع والشحن لجميع أنحاء مصر.'
                    : 'Includes bilingual packaging and delivery within Egypt.'}
                </div>
              </div>

              {/* Guarantee badge */}
              <div className="p-3 bg-stone-800/80 rounded-xl text-stone-300 text-[11px] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  {lang === 'ar'
                    ? 'ضمان الرد بعرض سعر رسمي معتمد خلال 24 ساعة من تاريخ الإرسال.'
                    : '24-hour formal quote delivery guarantee by MOK TOYS Owner.'}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
