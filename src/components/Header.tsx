import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { Globe, ShoppingBag, PhoneCall } from 'lucide-react';

interface HeaderProps {
  lang: Language;
  onToggleLang: () => void;
  activeTab: 'storefront' | 'prd_dashboard';
  setActiveTab: (tab: 'storefront' | 'prd_dashboard') => void;
  cartCount: number;
  onOpenCart: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  onToggleLang,
  activeTab,
  setActiveTab,
  cartCount,
  onOpenCart,
}) => {
  const t = translations[lang];

  return (
    <header className="sticky top-0 z-40 bg-[#FBF9F5]/90 backdrop-blur-md border-b border-stone-200/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single element) */}
        <button
          onClick={() => setActiveTab('storefront')}
          className="text-left rtl:text-right group cursor-pointer focus:outline-none"
        >
          <span className="text-xl font-bold tracking-tight text-stone-900 group-hover:text-amber-900 transition-colors whitespace-nowrap shrink-0">
            {lang === 'ar' ? 'ألعاب ماك' : 'Mak Toys'}
            <span className="text-stone-400 font-normal mx-2">·</span>
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-800">
              {lang === 'ar' ? 'Mak Toys' : 'ألعاب ماك'}
            </span>
          </span>
        </button>

        {/* Zone 2: 4-5 single-line clean text nav links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-stone-600">
          <a
            href="#catalog"
            onClick={() => setActiveTab('storefront')}
            className="hover:text-amber-900 transition-colors whitespace-nowrap shrink-0 hover:underline decoration-amber-700/40 underline-offset-4"
          >
            {t.navCatalog}
          </a>
          <a
            href="#skill-journey"
            onClick={() => setActiveTab('storefront')}
            className="hover:text-amber-900 transition-colors whitespace-nowrap shrink-0 hover:underline decoration-amber-700/40 underline-offset-4"
          >
            {t.navSkills}
          </a>
          <a
            href="#packaging-tiers"
            onClick={() => setActiveTab('storefront')}
            className="hover:text-amber-900 transition-colors whitespace-nowrap shrink-0 hover:underline decoration-amber-700/40 underline-offset-4"
          >
            {t.navPackaging}
          </a>
          <a
            href="#community-quests"
            onClick={() => setActiveTab('storefront')}
            className="hover:text-amber-900 transition-colors whitespace-nowrap shrink-0 hover:underline decoration-amber-700/40 underline-offset-4"
          >
            {t.navMissions}
          </a>
          <a
            href="#team"
            onClick={() => setActiveTab('storefront')}
            className="hover:text-amber-900 transition-colors whitespace-nowrap shrink-0 hover:underline decoration-amber-700/40 underline-offset-4"
          >
            {t.navTeam}
          </a>
          <a
            href="#roadmap"
            onClick={() => setActiveTab('storefront')}
            className="hover:text-amber-900 transition-colors whitespace-nowrap shrink-0 hover:underline decoration-amber-700/40 underline-offset-4"
          >
            {t.navRoadmap}
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action + Shopping Bag + Bilingual Switcher */}
        <div className="flex items-center gap-3 shrink-0">
          {/* 1-Click Language Switch */}
          <button
            onClick={onToggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 border border-stone-200 rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 active:scale-95"
            title={lang === 'ar' ? 'Switch to English' : 'التحويل إلى اللغة العربية'}
          >
            <Globe className="w-3.5 h-3.5 text-amber-800" />
            <span>{t.switchLang}</span>
          </button>

          {/* Primary Shopping Bag Button */}
          <button
            onClick={onOpenCart}
            className="relative flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-amber-900 hover:bg-amber-950 rounded-lg shadow-sm hover:shadow transition-all cursor-pointer whitespace-nowrap shrink-0 active:scale-95"
          >
            <ShoppingBag className="w-4 h-4 text-amber-200" />
            <span>{t.navCart}</span>
            {cartCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-amber-400 text-stone-950 text-[11px] font-extrabold flex items-center justify-center font-mono">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
