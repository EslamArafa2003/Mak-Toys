import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { PACKAGING_IMAGE } from '../data/mockData';
import { ShieldCheck, Heart, Sparkles, Check, Package, RotateCcw, Droplets } from 'lucide-react';

interface SafetyAndEcoLabProps {
  lang: Language;
}

export const SafetyAndEcoLab: React.FC<SafetyAndEcoLabProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <section id="safety-eco" className="py-16 border-b border-stone-200 scroll-mt-20 bg-stone-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800">
            <ShieldCheck className="w-4 h-4" />
            <span>{lang === 'ar' ? 'الأمان وراحة بال الأسرة' : 'Child Safety & Care'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
            {t.safetyTitle}
          </h2>
          <p className="text-sm text-stone-600 mt-1">
            {t.safetySubtitle}
          </p>
        </div>

        {/* 3 Clear Customer-Friendly Benefit Cards (No confusing factory technical jargon) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1: 100% Child-Safe Embroidery */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center">
              <Heart className="w-5 h-5 text-amber-800" />
            </div>
            <h3 className="text-base font-bold text-stone-900">
              {t.safeFeature1Title}
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {t.safeFeature1Desc}
            </p>
          </div>

          {/* Card 2: Simple Home Machine Washing */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center">
              <Droplets className="w-5 h-5 text-blue-700" />
            </div>
            <h3 className="text-base font-bold text-stone-900">
              {t.safeFeature2Title}
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {t.safeFeature2Desc}
            </p>
          </div>

          {/* Card 3: Hypoallergenic Natural Cotton & Linen */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-emerald-700" />
            </div>
            <h3 className="text-base font-bold text-stone-900">
              {t.safeFeature3Title}
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {t.safeFeature3Desc}
            </p>
          </div>
        </div>

        {/* Elegant Ready-to-Gift Packaging Presentation */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <img
                src={PACKAGING_IMAGE}
                alt="Mak Toys Craft Packaging Box"
                referrerPolicy="no-referrer"
                className="w-full h-64 object-cover rounded-xl border border-stone-200"
              />
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-900">
                <Package className="w-4 h-4" />
                <span>{t.ecoPackagingTitle}</span>
              </div>
              <h3 className="text-xl font-bold text-stone-900">
                {lang === 'ar' ? 'علبة شيك تصلح كهدية مباشرة بدون أي تغليف إضافي' : 'A Beautiful Gift-Ready Box with Zero Plastic'}
              </h3>

              <div className="space-y-2.5 text-xs text-stone-700">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span>{t.ecoCardboardPoint}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span>{t.ecoInksPoint}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span>{t.ecoTiePoint}</span>
                </div>
              </div>

              {/* Quiet Craft Origins */}
              <div className="pt-2 flex items-center gap-3 text-xs text-stone-500 font-medium">
                <span>{lang === 'ar' ? 'صناعة يدوية في الإسكندرية' : 'Handcrafted in Alexandria'}</span>
                <span>·</span>
                <span>{lang === 'ar' ? 'خامات قطنية مصرية 100%' : '100% Egyptian Cotton'}</span>
                <span>·</span>
                <span>{lang === 'ar' ? 'خالٍ من البلاستيك' : 'Plastic Free'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
