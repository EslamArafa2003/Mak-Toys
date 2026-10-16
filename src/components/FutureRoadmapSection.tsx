import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { HISTORICAL_CHESS_IMAGE } from '../data/mockData';
import {
  Globe,
  Trophy,
  Sparkles,
  TrendingUp,
  Compass,
  ArrowRight,
  ArrowLeft,
  Crown,
  PlaneTakeoff,
  Award
} from 'lucide-react';

interface FutureRoadmapSectionProps {
  lang: Language;
  onOpenPRD: () => void;
}

export const FutureRoadmapSection: React.FC<FutureRoadmapSectionProps> = ({
  lang,
  onOpenPRD,
}) => {
  const t = translations[lang];
  const ArrowIcon = lang === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <section id="roadmap" className="py-16 border-b border-stone-200 scroll-mt-20 bg-stone-900 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute -top-24 -end-24 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -start-24 w-96 h-96 bg-amber-900/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span>
              {lang === 'ar' ? 'المستقبل والتوسعات (Future Roadmap & Global Export)' : 'Future Roadmap & Global Export'}
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            {lang === 'ar' ? 'هذه مجرد البداية — رؤية للتوسع الثقافي والتصدير الدولي' : 'This is Just the Beginning — Cultural Expansion & Global Export'}
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
            {lang === 'ar'
              ? 'انطلاقة قوية بمنتجنا الأول (MVP) تؤسس لبناء أول براند ألعاب مصري بمعايير عالمية يعيد ربط الأجيال بهويتها ويفصلها تماماً عن الشاشات.'
              : 'Our high-traction debut MVP lays the foundation for Egypt’s first globally exported heirloom toy brand.'}
          </p>
        </div>

        {/* Featured Roadmap Pitch Card (The Exact User Quote) */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-amber-950/80 via-stone-800 to-stone-900 border border-amber-600/30 shadow-2xl space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-md bg-amber-400/10 text-amber-300 border border-amber-400/20">
              {lang === 'ar' ? 'خريطة الطريق المستقبلية في الـ Pitch' : 'Official Pitch Expansion Statement'}
            </span>
            <span className="text-xs font-medium text-stone-400 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <span>{lang === 'ar' ? 'خطط التصدير للخليج والأسواق العالمية' : 'MENA & Global Export Ready'}</span>
            </span>
          </div>

          <blockquote className="text-xl sm:text-2xl lg:text-3xl font-bold leading-relaxed text-amber-100 border-s-4 border-amber-400 ps-5 py-1 italic">
            {lang === 'ar'
              ? '«هذا هو المنتج الأول (MVP)، ولدينا خطة توسعية مستقبلية لإطلاق خطوط ألعاب تعليمية تعتمد على التاريخ والهوية الثقافية مثل ألعاب الشطرنج الاستراتيجية ذات الشخصيات التاريخية.»'
              : '“This is our Minimum Viable Product (MVP), and we possess a robust expansion roadmap to launch educational toy lines rooted in history and cultural identity, such as strategic chess games with historic civilizational figures.”'}
          </blockquote>

          {/* Expansion Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/10 text-xs">
            <div className="space-y-2 p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-2 text-amber-400 font-bold">
                <Crown className="w-4 h-4" />
                <span>{lang === 'ar' ? '1. خطوط التاريخ والحضارة' : '1. Heritage & Civilizations'}</span>
              </div>
              <p className="text-stone-300 leading-relaxed">
                {lang === 'ar'
                  ? 'إطلاق ألعاب استراتيجية وشطرنج تاريخي يوثق قادة مصر القديمة والإسكندرية برقع كتانية فاخرة.'
                  : 'Collector strategy games and civilizational chess sets honoring Egyptian iconic eras.'}
              </p>
            </div>

            <div className="space-y-2 p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-2 text-amber-400 font-bold">
                <PlaneTakeoff className="w-4 h-4" />
                <span>{lang === 'ar' ? '2. خطط التصدير الدولي' : '2. Global Export Strategy'}</span>
              </div>
              <p className="text-stone-300 leading-relaxed">
                {lang === 'ar'
                  ? 'تصدير ألعاب ماك للأسر العربية في الخليج وأوروبا الباحثة عن ألعاب تربوية ثنائية اللغة تدعم هويتهم.'
                  : 'Targeting diaspora and regional Arab families seeking screen-free cultural identity.'}
              </p>
            </div>

            <div className="space-y-2 p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-2 text-amber-400 font-bold">
                <Award className="w-4 h-4" />
                <span>{lang === 'ar' ? '3. أكاديمية الحِرف للصغار' : '3. Young Makers Academy'}</span>
              </div>
              <p className="text-stone-300 leading-relaxed">
                {lang === 'ar'
                  ? 'تطوير كورسات متقدمة وشهادات معتمدة بالتعاون مع المدارس والمراكز الثقافية بالإسكندرية والقاهرة.'
                  : 'Certified hands-on maker curricula partnered with leading progressive academies.'}
              </p>
            </div>
          </div>

          <div className="pt-2 flex justify-end">
            <button
              onClick={onOpenPRD}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs transition-colors cursor-pointer active:scale-95"
            >
              <span>{lang === 'ar' ? 'استعراض وثيقة المشروع كاملة (PRD)' : 'View Full Strategic Document (PRD)'}</span>
              <ArrowIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
