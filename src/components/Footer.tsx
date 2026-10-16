import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { TEAM_MEMBERS } from '../data/mockData';
import { MessageCircle, MapPin, Heart, Phone } from 'lucide-react';

interface FooterProps {
  lang: Language;
  onOpenPRD: () => void;
  onQuickOrder: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  onOpenPRD,
  onQuickOrder,
}) => {
  const t = translations[lang];

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="text-xl font-bold text-white tracking-tight">
              {lang === 'ar' ? 'ألعاب ماك (Mak Toys)' : 'Mak Toys Egypt'}
            </div>
            <p className="text-xs text-stone-400 leading-relaxed max-w-md">
              {t.tagline}
            </p>
            <div className="flex items-center gap-2 text-xs text-stone-400 pt-1">
              <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>{lang === 'ar' ? 'الإسكندرية، جمهورية مصر العربية' : 'Alexandria, Egypt'}</span>
            </div>

            {/* Customer Support Strip */}
            <div className="pt-3 border-t border-stone-800 space-y-2">
              <div className="text-xs font-semibold text-stone-300">
                {lang === 'ar' ? 'خدمة العملاء والدعم الرسمي:' : 'Official Customer Support & Care:'}
              </div>
              <div className="flex flex-wrap items-center gap-4 text-xs text-stone-400">
                <a
                  href={`https://wa.me/201001224375`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{lang === 'ar' ? 'إسلام عرفة (خدمة العملاء):' : 'Eslam Arafa (Support):'}</span>
                  <span className="font-mono text-white font-bold">01001224375</span>
                </a>
                <a
                  href="tel:+201001224375"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>{lang === 'ar' ? 'اتصال مباشر' : 'Direct Call'}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              {lang === 'ar' ? 'أقسام المنصة' : 'Directory'}
            </div>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <a href="#catalog" className="hover:text-white transition-colors">{t.navCatalog}</a>
              </li>
              <li>
                <a href="#skill-journey" className="hover:text-white transition-colors">{t.navSkills}</a>
              </li>
              <li>
                <a href="#packaging-tiers" className="hover:text-white transition-colors">{t.navPackaging}</a>
              </li>
              <li>
                <a href="#community-quests" className="hover:text-white transition-colors">{t.navMissions}</a>
              </li>
              <li>
                <a href="#team" className="hover:text-white transition-colors">{t.navTeam}</a>
              </li>
              <li>
                <a href="#roadmap" className="hover:text-white transition-colors">{t.navRoadmap}</a>
              </li>
            </ul>
          </div>

          {/* Governance & PRD link */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              {lang === 'ar' ? 'إدارة المشروع' : 'Project Management'}
            </div>
            <p className="text-xs text-stone-400">
              {lang === 'ar'
                ? 'وثيقة متطلبات المنتج (PRD v1.0) — إدارة: إسلام عرفة، مروة قنديل، علي كحلة.'
                : 'Product Requirements Document (PRD v1.0) — Team: Eslam Arafa, Marwa Kandil, Ali Kohla.'}
            </p>
            <div className="pt-1">
              <button
                onClick={onOpenPRD}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-amber-300 bg-amber-950/80 hover:bg-amber-900 border border-amber-800 rounded transition-colors cursor-pointer"
              >
                <span>{t.navPRD}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Quiet Bottom Copyright */}
        <div className="pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            {t.allRightsReserved}
          </div>
          <div className="flex items-center gap-2">
            <span>Handcrafted in Alexandria with</span>
            <Heart className="w-3.5 h-3.5 text-amber-600 fill-amber-600" />
            <span>for Egyptian & Arab children</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
