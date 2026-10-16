import React, { useState } from 'react';
import { CustomOrder, Language } from '../types';
import { translations } from '../translations';
import { PRODUCTS } from '../data/mockData';
import { Sparkles, Eye, ShieldCheck, CheckCircle2, Award, Briefcase } from 'lucide-react';

interface CorporateCustomStudioProps {
  lang: Language;
  onCustomOrderSubmitted: (newCustomOrder: CustomOrder) => void;
}

export const CorporateCustomStudio: React.FC<CorporateCustomStudioProps> = ({
  lang,
  onCustomOrderSubmitted,
}) => {
  const t = translations[lang];

  const [companyName, setCompanyName] = useState('Vodafone Egypt');
  const [contactName, setContactName] = useState('Nadine Farouk');
  const [phone, setPhone] = useState('+20 100 900 1122');
  const [toyChoice, setToyChoice] = useState<'farah' | 'mishmish'>('mishmish');
  const [customText, setCustomText] = useState('Vodafone 2026');
  const [placement, setPlacement] = useState<'vest' | 'tag' | 'bag'>('vest');
  const [quantity, setQuantity] = useState(100);
  const [submitted, setSubmitted] = useState<CustomOrder | null>(null);

  const selectedToy = PRODUCTS.find((p) => p.id.includes(toyChoice)) || PRODUCTS[1];
  const unitCost = 260; // 215 wholesale + 45 custom embroidery
  const estimatedCost = quantity * unitCost;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newOrder: CustomOrder = {
      id: `CORP-${Math.floor(100 + Math.random() * 900)}`,
      companyName,
      contactName,
      phone,
      toyChoice,
      quantity,
      customText,
      placement,
      estimatedCost,
      status: 'mockup_pending',
      createdAt: new Date().toISOString().replace('T', ' ').substring(0, 16)
    };

    onCustomOrderSubmitted(newOrder);
    setSubmitted(newOrder);
  };

  return (
    <section id="corporate" className="py-16 border-b border-stone-200 scroll-mt-20 bg-stone-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800">
            <Briefcase className="w-4 h-4" />
            <span>{lang === 'ar' ? 'خدمات الشركات والهدايا' : 'Corporate Gifts & Promotion'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
            {t.corporateTitle}
          </h2>
          <p className="text-sm text-stone-600 mt-1">
            {t.corporateSubtitle}
          </p>
        </div>

        {submitted ? (
          <div className="bg-white rounded-2xl border border-stone-200 p-8 text-center max-w-xl mx-auto shadow-sm space-y-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-800 rounded-full mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-stone-900">
              {lang === 'ar' ? 'تم استلام طلب النموذج المخصص لشركتكم!' : 'Custom Mock-up Request Received!'}
            </h3>
            <p className="text-xs text-stone-600">
              {t.customOrderSuccessMsg}{' '}
              <span className="font-mono font-bold text-amber-900">{submitted.id}</span>
            </p>
            <p className="text-xs text-stone-500">
              {t.mockupTurnaroundNotice}
            </p>
            <button
              onClick={() => setSubmitted(null)}
              className="mt-4 px-5 py-2 text-xs font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 rounded-lg cursor-pointer transition-colors"
            >
              {lang === 'ar' ? 'تعديل المعاينة أو إرسال طلب آخر' : 'Edit Mock-up or Submit Another'}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Visualizer Interactive Card (Left 6 Cols) */}
            <div className="lg:col-span-6 bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-800 flex items-center gap-1.5">
                  <Eye className="w-4 h-4 text-amber-800" />
                  {lang === 'ar' ? 'محاكي التطريز الرقمي المباشر' : 'Live Digital Embroidery Mock-up'}
                </span>
                <span className="text-[11px] text-stone-500 font-medium">
                  {lang === 'ar' ? 'معاينة تقريبية' : 'Interactive Preview'}
                </span>
              </div>

              {/* Toy Display with Simulated Custom Brand Placement */}
              <div className="relative aspect-4/3 rounded-xl overflow-hidden bg-stone-100 border border-stone-200 flex items-center justify-center">
                <img
                  src={selectedToy.image}
                  alt={selectedToy.name_en}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />

                {/* Simulated Custom Embroidery Marker */}
                {placement === 'vest' && (
                  <div className="absolute top-[52%] left-[48%] -translate-x-1/2 -translate-y-1/2 bg-amber-950/90 text-amber-200 border border-amber-400/80 px-3 py-1 rounded shadow-lg backdrop-blur-xs text-center transition-all animate-fade-in">
                    <div className="text-[9px] uppercase tracking-wider text-amber-300 font-mono font-bold">
                      {lang === 'ar' ? 'تطريز مخصص' : 'Embroidered'}
                    </div>
                    <div className="text-xs font-bold tracking-tight whitespace-nowrap">
                      {customText || 'YOUR LOGO'}
                    </div>
                  </div>
                )}

                {placement === 'tag' && (
                  <div className="absolute bottom-6 end-6 bg-stone-900 text-stone-100 border border-stone-700 px-2.5 py-1 rounded shadow-md text-center transition-all">
                    <div className="text-[8px] text-stone-400 font-mono">TAG</div>
                    <div className="text-[11px] font-bold">{customText || 'YOUR LOGO'}</div>
                  </div>
                )}

                {placement === 'bag' && (
                  <div className="absolute bottom-4 inset-x-8 bg-[#f5ede0]/95 border-2 border-dashed border-amber-800/60 p-2.5 rounded-lg text-center shadow-lg transition-all">
                    <span className="text-[10px] text-amber-900 font-semibold block">
                      {lang === 'ar' ? 'كيس الهدايا القطني المطبوع:' : 'Cotton Gift Drawstring Bag:'}
                    </span>
                    <span className="text-xs font-bold text-stone-900">{customText || 'YOUR LOGO'}</span>
                  </div>
                )}
              </div>

              {/* Attributes & Quality Guarantee */}
              <div className="grid grid-cols-2 gap-3 text-xs text-stone-600 pt-2">
                <div className="p-3 rounded-lg bg-stone-50 border border-stone-200">
                  <div className="font-semibold text-stone-800 flex items-center gap-1 mb-1">
                    <Award className="w-3.5 h-3.5 text-amber-800" />
                    {lang === 'ar' ? 'جودة الخيوط:' : 'Thread Quality:'}
                  </div>
                  <div>{lang === 'ar' ? 'خيوط قطنية حريرية لا تبهت مع الغسيل' : 'Silky colorfast Egyptian embroidery threads'}</div>
                </div>
                <div className="p-3 rounded-lg bg-stone-50 border border-stone-200">
                  <div className="font-semibold text-stone-800 flex items-center gap-1 mb-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-800" />
                    {lang === 'ar' ? 'ضمان العينة:' : 'Sample Proof:'}
                  </div>
                  <div>{lang === 'ar' ? 'اعتماد كتابي للعينة قبل الإنتاج' : 'Written sample sign-off before production'}</div>
                </div>
              </div>
            </div>

            {/* Customization Controls Form (Right 6 Cols) */}
            <form onSubmit={handleSubmit} className="lg:col-span-6 bg-white p-6 sm:p-7 rounded-2xl border border-stone-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-stone-100">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-800">
                  {lang === 'ar' ? 'تخصيص الهدايا والكميات' : 'Customization Options'}
                </span>
                <span className="text-[11px] text-amber-800 font-medium">
                  {lang === 'ar' ? 'الحد الأدنى: 50 قطعة' : 'Min. Order: 50 pcs'}
                </span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  {lang === 'ar' ? 'اختر اللعبة الأساسية' : 'Select Base Toy'}
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setToyChoice('mishmish')}
                    className={`p-3 rounded-lg border text-xs font-semibold text-center transition-all cursor-pointer ${
                      toyChoice === 'mishmish'
                        ? 'border-amber-800 bg-amber-50/50 text-amber-950 font-bold'
                        : 'border-stone-200 text-stone-700 hover:bg-stone-50'
                    }`}
                  >
                    {lang === 'ar' ? 'مشمش (ثعلب الفنك)' : 'Mishmish (Fennec Fox)'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setToyChoice('farah')}
                    className={`p-3 rounded-lg border text-xs font-semibold text-center transition-all cursor-pointer ${
                      toyChoice === 'farah'
                        ? 'border-amber-800 bg-amber-50/50 text-amber-950 font-bold'
                        : 'border-stone-200 text-stone-700 hover:bg-stone-50'
                    }`}
                  >
                    {lang === 'ar' ? 'فرح (مساعدة السوق)' : 'Farah (Market Helper)'}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  {t.customLogoTextField} <span className="text-amber-800">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={customText}
                  onChange={(e) => setCustomText(e.target.value)}
                  placeholder="e.g. Vodafone Families 2026"
                  className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-800 bg-stone-50/50 font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  {t.placementField}
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setPlacement('vest')}
                    className={`p-2 rounded-lg border text-center transition-all cursor-pointer text-[11px] ${
                      placement === 'vest'
                        ? 'border-amber-800 bg-amber-50/80 font-bold text-amber-950'
                        : 'border-stone-200 text-stone-600 hover:bg-stone-50'
                    }`}
                  >
                    {lang === 'ar' ? 'صدر الصديرية' : 'Vest Chest'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setPlacement('tag')}
                    className={`p-2 rounded-lg border text-center transition-all cursor-pointer text-[11px] ${
                      placement === 'tag'
                        ? 'border-amber-800 bg-amber-50/80 font-bold text-amber-950'
                        : 'border-stone-200 text-stone-600 hover:bg-stone-50'
                    }`}
                  >
                    {lang === 'ar' ? 'شريط جانبي' : 'Woven Tag'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setPlacement('bag')}
                    className={`p-2 rounded-lg border text-center transition-all cursor-pointer text-[11px] ${
                      placement === 'bag'
                        ? 'border-amber-800 bg-amber-50/80 font-bold text-amber-950'
                        : 'border-stone-200 text-stone-600 hover:bg-stone-50'
                    }`}
                  >
                    {lang === 'ar' ? 'كيس الهدايا' : 'Cotton Bag'}
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    {t.companyNameField} <span className="text-amber-800">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Company name"
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-800 bg-stone-50/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    {t.corporateQtyField}
                  </label>
                  <input
                    type="number"
                    min="50"
                    step="10"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(50, parseInt(e.target.value) || 50))}
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-800 bg-stone-50/50 tabular-nums font-bold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    {lang === 'ar' ? 'اسم مسؤول الحملة' : 'Contact Person'}
                  </label>
                  <input
                    type="text"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="Full name"
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
              </div>

              {/* Estimate Pill */}
              <div className="p-3 bg-stone-100 rounded-xl text-xs flex justify-between items-center text-stone-700">
                <span>{lang === 'ar' ? 'التكلفة الإجمالية التقديرية:' : 'Estimated Total Investment:'}</span>
                <span className="font-extrabold text-amber-900 text-sm tabular-nums">
                  {estimatedCost.toLocaleString()} {t.currency}
                </span>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 text-xs font-bold text-white bg-amber-900 hover:bg-amber-950 rounded-lg shadow-sm hover:shadow transition-all cursor-pointer"
              >
                {t.requestCustomMockupBtn}
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};
