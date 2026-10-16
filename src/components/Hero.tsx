import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { HERO_IMAGE } from '../data/mockData';
import { MessageCircle, Sparkles, ShieldCheck, ArrowRight, ArrowLeft } from 'lucide-react';

interface HeroProps {
  lang: Language;
  onExploreClick: () => void;
  onOrderClick: () => void;
  onWholesaleClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  lang,
  onExploreClick,
  onOrderClick,
  onWholesaleClick,
}) => {
  const t = translations[lang];
  const ArrowIcon = lang === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            {/* Clean unboxed kicker with dot separator */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-900">
              <span>{t.heroKicker}</span>
              <span aria-hidden="true">·</span>
              <span className="text-stone-500 font-normal">{lang === 'ar' ? 'صناعة يدوية في الإسكندرية' : 'Handcrafted in Alexandria'}</span>
            </div>

            {/* Headline with max width and balance */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight leading-[1.2] text-balance">
              {t.heroTitle}
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl">
              {t.heroDescription}
            </p>

            {/* Call to Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onOrderClick}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-amber-900 hover:bg-amber-950 rounded-lg shadow-sm hover:shadow transition-all cursor-pointer whitespace-nowrap active:scale-95"
              >
                <MessageCircle className="w-4 h-4 text-amber-200" />
                <span>{t.heroCtaOrder}</span>
              </button>

              <button
                onClick={onExploreClick}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 border border-stone-300 rounded-lg transition-all cursor-pointer whitespace-nowrap active:scale-95"
              >
                <span>{t.heroCtaExplore}</span>
                <ArrowIcon className="w-4 h-4 text-stone-600" />
              </button>

              <button
                onClick={onWholesaleClick}
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-amber-900 hover:text-amber-950 hover:underline underline-offset-4 cursor-pointer whitespace-nowrap"
              >
                <span>{t.heroCtaWholesale}</span>
              </button>
            </div>

            {/* Proof & Attributes: Clean unboxed metadata with separators */}
            <div className="pt-6 border-t border-stone-200 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-stone-600 font-medium">
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-800" />
                <span>{t.pillCraft}</span>
              </div>
              <span className="text-stone-300" aria-hidden="true">|</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-800" />
                <span>{t.pillWash}</span>
              </div>
              <span className="text-stone-300" aria-hidden="true">|</span>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-700" />
                <span>{t.pillOrigin}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Anchor */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden bg-stone-200 border border-stone-200/90 shadow-sm group">
              <img
                src={HERO_IMAGE}
                alt="Mak Toys Handcrafted Egyptian Fabric Toy Collection"
                referrerPolicy="no-referrer"
                className="w-full h-[360px] sm:h-[420px] object-cover group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent flex items-end p-5">
                <div className="text-white">
                  <p className="text-xs font-semibold tracking-wider uppercase text-amber-200">
                    {lang === 'ar' ? 'تشكيلة الإطلاق الحصري' : 'Limited Debut Batch'}
                  </p>
                  <p className="text-sm font-medium text-stone-100">
                    {lang === 'ar' ? 'فرح ومشمش وأصدقاء التراث المصري' : 'Farah, Mishmish & Egyptian Heritage Companions'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
