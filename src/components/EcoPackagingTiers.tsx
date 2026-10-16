import React, { useState } from 'react';
import { Language, PlayUniverse, UniverseId } from '../types';
import { PLAY_UNIVERSES, PACKAGING_IMAGE, THEMATIC_UNIVERSES_BANNER } from '../data/mockData';
import {
  Compass,
  Sparkles,
  CheckCircle2,
  Package,
  Layers,
  ArrowRight,
  ArrowLeft,
  ShoppingBag,
  Award,
  ShieldCheck,
  Tv,
  Box,
  MapPin,
  BookOpen,
  Users
} from 'lucide-react';

interface EcoPackagingTiersProps {
  lang: Language;
  onExploreCatalog: () => void;
}

export const EcoPackagingTiers: React.FC<EcoPackagingTiersProps> = ({
  lang,
  onExploreCatalog,
}) => {
  const [selectedUniverseId, setSelectedUniverseId] = useState<UniverseId>('bazaar_heritage');
  const [selectedPackageTierId, setSelectedPackageTierId] = useState<'single' | 'trio' | 'full_universe'>('trio');

  const activeUniverse: PlayUniverse =
    PLAY_UNIVERSES.find((u) => u.id === selectedUniverseId) || PLAY_UNIVERSES[0];
  const activeAdventure = activeUniverse.primaryAdventure;
  const ArrowIcon = lang === 'ar' ? ArrowLeft : ArrowRight;

  const packageTiers = [
    activeAdventure.packages.single,
    activeAdventure.packages.trio,
    activeAdventure.packages.full
  ];

  const selectedPackage =
    packageTiers.find((p) => p.id === selectedPackageTierId) || packageTiers[1];

  return (
    <section id="packaging-tiers" className="py-16 border-b border-stone-200 scroll-mt-20 bg-stone-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header: Clarifying Play Universes & Adventure Packages */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800">
              <Compass className="w-4 h-4 text-amber-700" />
              <span>
                {lang === 'ar'
                  ? 'عوالم اللعب التفاعلية ونظام باكدجات المغامرة (المستوى 1: الأطفال)'
                  : 'Play Universes & 3-Tier Adventure Packages (Level 1: Children)'}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mt-1">
              {lang === 'ar'
                ? 'عوالم مختلفة.. كل مغامرة لها 3 باكدجات متدرجة'
                : 'Distinct Play Universes.. 3 Progressive Adventure Packages'}
            </h2>
            <p className="text-sm text-stone-600 mt-2 leading-relaxed">
              {lang === 'ar'
                ? 'في ألعاب ماك، لا نبيع مجرد علبة عادية! بل نبني عوالم لعب وتجارب تعليمية متكاملة (Immersive Play Universes). في المستوى الأول المخصص للأطفال (2 - 6 سنوات)، يضم كل عالم مغامرات تفاعلية، ولكل مغامرة 3 باكدجات مختلفة تعتمد على تجربة الطفل وقدرة الأسرة الشرائية:'
                : 'Not just a box, but comprehensive Immersive Play Universes. In Level 1 for kids (2 - 6 yrs), every universe has adventures with 3 tiered packages tailored to engagement and family budgets:'}
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-900 bg-emerald-50 px-3.5 py-2 rounded-xl border border-emerald-200 shrink-0 self-start lg:self-auto">
            <Tv className="w-4 h-4 text-emerald-700" />
            <span>
              {lang === 'ar'
                ? 'فصل تام عن الشاشات والتابلت 100%'
                : '100% Screen-Free Sensory Growth'}
            </span>
          </div>
        </div>

        {/* 1. Universe Selector (Switch between the 3 distinct worlds) */}
        <div>
          <label className="text-xs font-bold uppercase tracking-wider text-stone-500 block mb-2">
            {lang === 'ar' ? '1. اختر عالم اللعب التفاعلي لاستكشاف مغامراته:' : '1. Select Play Universe to Explore its Adventure:'}
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {PLAY_UNIVERSES.map((universe) => {
              const isSelected = universe.id === selectedUniverseId;
              return (
                <button
                  key={universe.id}
                  onClick={() => setSelectedUniverseId(universe.id)}
                  className={`p-4 rounded-2xl border text-start transition-all cursor-pointer relative ${
                    isSelected
                      ? 'border-amber-900 bg-white ring-2 ring-amber-900/20 shadow-md'
                      : 'border-stone-200 bg-white/70 hover:bg-white hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-amber-100 text-amber-900">
                      {lang === 'ar' ? universe.badge_ar : universe.badge_en}
                    </span>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-amber-800" />
                    )}
                  </div>
                  <h3 className="text-sm font-bold text-stone-900 mt-2">
                    {lang === 'ar' ? universe.name_ar : universe.name_en}
                  </h3>
                  <p className="text-xs text-stone-500 mt-1 line-clamp-2">
                    {lang === 'ar' ? universe.theme_ar : universe.theme_en}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Active Adventure Banner */}
        <div className="bg-stone-900 text-stone-100 rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-md">
          <div className="relative z-10 max-w-4xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>
                {lang === 'ar'
                  ? 'مغامرة المستوى الأول (2 - 6 سنوات): تدرج حسي ومفاهيم المشاركة'
                  : 'Level 1 Adventure (2 - 6 Years): Sensory Foundation & Empathy'}
              </span>
            </div>
            
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              {lang === 'ar' ? activeAdventure.title_ar : activeAdventure.title_en}
            </h3>
            
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              {lang === 'ar' ? activeAdventure.subtitle_ar : activeAdventure.subtitle_en}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-amber-300">
                {lang === 'ar' ? 'شخصيات هذه المغامرة (5 شخصيات كاملة):' : 'Adventure Characters (5 Full Companions):'}
              </span>
              {(lang === 'ar' ? activeAdventure.charactersIncluded_ar : activeAdventure.charactersIncluded_en).map(
                (charName, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2.5 py-1 rounded-lg bg-stone-800 text-stone-200 border border-stone-700 font-medium"
                  >
                    {charName}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        {/* 3. The 3 Adventure Package Tiers (Exact customer clarification) */}
        <div>
          <div className="mb-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800">
              <Layers className="w-4 h-4" />
              <span>
                {lang === 'ar'
                  ? '2. باكدجات المغامرة الثلاثة — من جزء المغامرة إلى تقفيلها بالكامل:'
                  : '2. The 3 Adventure Packages — From a Part to Full Adventure Completion:'}
              </span>
            </div>
            <p className="text-xs text-stone-600 mt-1">
              {lang === 'ar'
                ? 'شخصية واحدة تأخذ جزءاً من المغامرة • 3 شخصيات تأخذ جزءاً أكبر • تقفيل كافة الشخصيات ينهي المغامرة كاملة (والتي هي جزء من العالم الكبير!)'
                : '1 Character = Part of adventure • 3 Characters = Bigger part of adventure • Full Set = Finishes the entire adventure as part of the world!'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {packageTiers.map((tier) => {
              const isSelected = selectedPackage.id === tier.id;
              return (
                <div
                  key={tier.id}
                  onClick={() => setSelectedPackageTierId(tier.id)}
                  className={`rounded-3xl border p-6 flex flex-col justify-between transition-all cursor-pointer relative ${
                    isSelected
                      ? 'border-amber-900 bg-white shadow-md ring-2 ring-amber-900/20'
                      : 'border-stone-200 bg-white/70 hover:bg-white hover:border-stone-300'
                  }`}
                >
                  {/* Scope Badge */}
                  <div className="mb-4">
                    <span
                      className={`inline-block text-[11px] font-bold px-3 py-1 rounded-full ${
                        tier.id === 'single'
                          ? 'bg-amber-100 text-amber-950 border border-amber-200'
                          : tier.id === 'trio'
                          ? 'bg-emerald-100 text-emerald-950 border border-emerald-200'
                          : 'bg-amber-900 text-white shadow-2xs'
                      }`}
                    >
                      {lang === 'ar' ? tier.scope_ar : tier.scope_en}
                    </span>

                    <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-2">
                      {lang === 'ar' ? tier.title_ar : tier.title_en}
                    </h4>

                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs font-semibold text-stone-500">
                        {tier.charactersCount} {lang === 'ar' ? 'شخصية قماشية' : 'characters'}
                      </span>
                      <span className="text-stone-300">•</span>
                      <span className="text-xs font-semibold text-emerald-700">
                        {lang === 'ar' ? tier.screenFreeBadge_ar : tier.screenFreeBadge_en}
                      </span>
                    </div>
                  </div>

                  {/* Body description */}
                  <div className="space-y-3 flex-1">
                    <p className="text-xs text-stone-600 leading-relaxed bg-stone-50 p-3.5 rounded-xl border border-stone-200">
                      {lang === 'ar' ? tier.description_ar : tier.description_en}
                    </p>

                    {/* Box feature */}
                    <div className="p-3 bg-amber-50/60 rounded-xl border border-amber-200 space-y-1">
                      <span className="text-[11px] font-bold text-amber-950 flex items-center gap-1.5">
                        <Box className="w-3.5 h-3.5 text-amber-800" />
                        <span>{lang === 'ar' ? 'العلبة جزء من اللعبة ومسرح ديكور:' : 'Box transforms into stage & decor:'}</span>
                      </span>
                      <p className="text-[11px] text-stone-700">
                        {lang === 'ar' ? tier.boxTransformation_ar : tier.boxTransformation_en}
                      </p>
                    </div>

                    {tier.id === 'full_universe' && (
                      <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-[11px] text-emerald-900 font-semibold flex items-center gap-1.5">
                        <Award className="w-4 h-4 text-emerald-700 shrink-0" />
                        <span>
                          {lang === 'ar'
                            ? 'بتقفيل المجموعة: إنهاء المغامرة بالكامل والترشح لليفل 2!'
                            : 'Full set finishes the adventure and unlocks Level 2 progression!'}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Footer Price & Action */}
                  <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-stone-500 block">
                        {lang === 'ar' ? 'سعر الباكدج:' : 'Package Price:'}
                      </span>
                      <span className="text-xl font-extrabold text-amber-950 tabular-nums">
                        {tier.price} <span className="text-xs font-semibold">{lang === 'ar' ? 'ج.م' : 'EGP'}</span>
                      </span>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onExploreCatalog();
                      }}
                      className="px-3.5 py-2 text-xs font-bold text-amber-950 bg-amber-100 hover:bg-amber-200 rounded-lg transition-colors cursor-pointer flex items-center gap-1 active:scale-95"
                    >
                      <span>{lang === 'ar' ? 'طلب هذا الباكدج' : 'Order This Pack'}</span>
                      <ArrowIcon className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Feature Banner: The Box is Part of the Toy & Why Packaging is Sustainable */}
        <div className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-xs grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-5 aspect-16/10 lg:aspect-auto h-full bg-stone-100">
            <img
              src={PACKAGING_IMAGE}
              alt="MOK TOYS Play Universes Packaging"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="lg:col-span-7 p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <Box className="w-4 h-4 text-emerald-700" />
              <span>
                {lang === 'ar' ? 'العلبة جزء من اللعبة — تخزين وديكور دائم للغرفة' : 'The Box is Part of the Toy & Room Decor'}
              </span>
            </div>
            <h3 className="text-xl font-bold text-stone-900">
              {lang === 'ar'
                ? 'العلب تصميمها يقدم كهدية مميزة، وتشجع الطفل على تقفيل المجموعة وانتظار المجموعات القادمة'
                : 'Packaging Designed as an Heirloom Gift, Inspiring Complete Collections'}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              {lang === 'ar'
                ? 'تغليف وديزاين مميز بتصميمات خاصة وبأحجام مختلفة تعتمد على قدرة العميل الشرائية (شخصية واحدة، 3 شخصيات، المجموعة كاملة). العلبة كرتونية صديقة للبيئة بدون أي بلاستيك، وتتحول إلى مسرح للعب أو وحدة تخزين لملحقات اللعبة أو ديكور فني في غرفة الطفل. عند تقفيل مجموعة الليفل الأول، يتطلع الطفل بلهفة لليفل الثاني بمجموعات أكثر تفصيلاً وتحدياً يدوياً.'
                : 'Bespoke eco-friendly packaging tailored to purchasing power tiers. Zero single-use plastic. Transforms into a living room diorama, permanent storage, and inspires children to finish the collection and anticipate Level 2.'}
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-stone-700">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-600" />
                {lang === 'ar' ? 'كرتون كرافت مستدام غير مبيض' : '100% Recycled Kraft'}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-600" />
                {lang === 'ar' ? 'مسرح تفاعلي وديكور دائم' : 'Permanent Bedroom Decor Stage'}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-600" />
                {lang === 'ar' ? 'فصل تام عن الشاشات وإجهاد العين' : 'Total Screen-Free Relief'}
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
