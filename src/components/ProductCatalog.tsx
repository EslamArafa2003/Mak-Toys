import React, { useState } from 'react';
import { Product, ProductLine, ProductBundleOption, Language } from '../types';
import { translations } from '../translations';
import { PRODUCTS, PACKAGING_IMAGE } from '../data/mockData';
import {
  ShoppingBag,
  Info,
  Sparkles,
  Heart,
  Package,
  X,
  Check,
  Shield,
  CreditCard,
  Layers,
  Scissors,
  Trophy,
  Tv,
  CheckCircle2,
  Box,
  EyeOff,
  Compass
} from 'lucide-react';

interface ProductCatalogProps {
  lang: Language;
  onAddToCart: (product: Product, bundle?: ProductBundleOption) => void;
  onBuyNow: (product: Product, bundle?: ProductBundleOption) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  lang,
  onAddToCart,
  onBuyNow,
}) => {
  const t = translations[lang];

  // Department / Line tab filter (Like a department store)
  const [activeDepartment, setActiveDepartment] = useState<'all' | ProductLine>('all');
  const [selectedProductForModal, setSelectedProductForModal] = useState<Product | null>(null);

  // Keep track of selected bundle option for each product (defaults to single kit)
  const [selectedBundles, setSelectedBundles] = useState<Record<string, ProductBundleOption>>(() => {
    const init: Record<string, ProductBundleOption> = {};
    PRODUCTS.forEach((p) => {
      init[p.id] = p.bundles[0];
    });
    return init;
  });

  const handleSelectBundle = (productId: string, bundle: ProductBundleOption) => {
    setSelectedBundles((prev) => ({ ...prev, [productId]: bundle }));
  };

  const filteredProducts = PRODUCTS.filter((p) => {
    if (activeDepartment === 'all') return true;
    return p.line === activeDepartment;
  });

  const getLineTitle = (line: ProductLine) => {
    switch (line) {
      case 'children':
        return lang === 'ar' ? 'قسم الأطفال الصغار (2 - 6 سنوات)' : "Children's Line (2 - 6 Years)";
      case 'juniors':
        return lang === 'ar' ? 'قسم الفتيان والفتيات (7 - 14 سنة)' : "Boys & Girls / Juniors Line (7 - 14 Years)";
      case 'adults':
        return lang === 'ar' ? 'قسم الكبار والمقتنين (15+ سنة)' : "Adults & Collectors Line (15+ Years)";
    }
  };

  const getUniverseTitle = (universeId: string) => {
    switch (universeId) {
      case 'bazaar_heritage':
        return lang === 'ar' ? 'عالم سوق المحبة والتراث الأصيل' : 'Heritage Bazaar Universe';
      case 'desert_expedition':
        return lang === 'ar' ? 'عالم مغامرات الصحراء والواحات' : 'Desert Expedition Universe';
      case 'historical_civilization':
        return lang === 'ar' ? 'عالم وادي النيل وحضارة مصر' : 'Nile Valley & History Universe';
      default:
        return '';
    }
  };

  const getSkillLevelBadge = (level: string) => {
    switch (level) {
      case 'level_1_starter':
        return {
          label: lang === 'ar' ? 'المستوى 1: مبتدئ من الصفر' : 'Level 1: Beginner Starter',
          bg: 'bg-emerald-50 text-emerald-800 border-emerald-200'
        };
      case 'level_2_creator':
        return {
          label: lang === 'ar' ? 'المستوى 2: صانع وتجميع تفاعلي' : 'Level 2: Maker & Assembly',
          bg: 'bg-blue-50 text-blue-800 border-blue-200'
        };
      case 'level_3_master':
        return {
          label: lang === 'ar' ? 'المستوى 3: احتراف واستراتيجية' : 'Level 3: Strategic Master',
          bg: 'bg-amber-50 text-amber-900 border-amber-200'
        };
      default:
        return {
          label: lang === 'ar' ? 'منهاج تدريجي' : 'Progressive Curriculum',
          bg: 'bg-stone-100 text-stone-800 border-stone-200'
        };
    }
  };

  return (
    <section id="catalog" className="py-16 border-b border-stone-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 flex items-center gap-1.5">
              <Layers className="w-4 h-4" />
              <span>{lang === 'ar' ? 'خطوط إنتاج متكاملة حسب الفئة العمرية' : 'Curated Age-Specific Lines'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
              {lang === 'ar' ? 'أقسام متجر ألعاب ماك' : 'Mak Toys Departments'}
            </h2>
            <p className="text-sm text-stone-600 mt-1 max-w-2xl">
              {lang === 'ar'
                ? 'مثل متاجر الملابس العالمية، صممنا لكل فئة عمرية خط إنتاج مخصص (Line) بأهداف تربوية ومناهج تدريجية تفصل تماماً عن الشاشات وتنمي مهارات حقيقية.'
                : 'Tailored production lines for every age group with progressive skill-building curricula that foster real hands-on mastery away from screens.'}
            </p>
          </div>

          {/* Department Tabs (Clothing-Store Style Navigation) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-stone-100 rounded-xl border border-stone-200 shrink-0 self-start md:self-auto">
            <button
              onClick={() => setActiveDepartment('all')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeDepartment === 'all'
                  ? 'bg-white text-stone-950 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/50'
              }`}
            >
              {lang === 'ar' ? 'كافة الأقسام' : 'All Lines'}
            </button>
            <button
              onClick={() => setActiveDepartment('children')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeDepartment === 'children'
                  ? 'bg-white text-stone-950 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/50'
              }`}
            >
              {lang === 'ar' ? '👶 قسم الأطفال (2 - 6)' : "👶 Children (2 - 6)"}
            </button>
            <button
              onClick={() => setActiveDepartment('juniors')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeDepartment === 'juniors'
                  ? 'bg-white text-stone-950 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/50'
              }`}
            >
              {lang === 'ar' ? '🪡 قسم الفتيان والفتيات (7 - 14)' : "🪡 Boys & Girls (7 - 14)"}
            </button>
            <button
              onClick={() => setActiveDepartment('adults')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeDepartment === 'adults'
                  ? 'bg-white text-stone-950 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/50'
              }`}
            >
              {lang === 'ar' ? '♟️ قسم الكبار والمقتنين (15+)' : "♟️ Adults & Collectors (15+)"}
            </button>
          </div>
        </div>

        {/* Department Informative Banner */}
        {activeDepartment !== 'all' && (
          <div className="mt-6 p-4 rounded-xl bg-amber-50/70 border border-amber-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="text-xl">
                {activeDepartment === 'children' && '🧸'}
                {activeDepartment === 'juniors' && '🧵'}
                {activeDepartment === 'adults' && '👑'}
              </span>
              <div>
                <h4 className="text-sm font-bold text-stone-900">
                  {getLineTitle(activeDepartment)}
                </h4>
                <p className="text-xs text-stone-600">
                  {activeDepartment === 'children' &&
                    (lang === 'ar'
                      ? 'ألعاب قماشية ناعمة وآمنة 100% لتنمية الحواس والتعاطف والقيم الاجتماعية المصرية.'
                      : 'Gentle Egyptian fabric companions instilling empathy, sensory touch, and native hospitality.')}
                  {activeDepartment === 'juniors' &&
                    (lang === 'ar'
                      ? 'منظومة تعليمية متكاملة (Skill-based Journey) تعتمد على تجربة "نصف جاهزة" يقوم الطفل بخياطتها وتجميعها بنفسه لإحساس الفخر والملكية.'
                      : 'Skill-based hands-on maker kits. Arrives semi-assembled for kids to stitch, stuff, and own with pride.')}
                  {activeDepartment === 'adults' &&
                    (lang === 'ar'
                      ? 'ألعاب استراتيجية وتاريخية وثقافية فاخرة تمنح الكبار راحة عميقة من ضغوط الشاشات مع تحف كتانية تناسب المنازل والمكاتب.'
                      : 'Strategic historical immersion providing screen fatigue detox and executive decor presence.')}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] font-semibold text-amber-900 bg-white/80 px-2.5 py-1 rounded-md border border-amber-200 shrink-0">
              <EyeOff className="w-3.5 h-3.5 text-amber-800" />
              <span>{lang === 'ar' ? 'فصل تام عن الشاشات 100%' : '100% Screen-Free Play'}</span>
            </div>
          </div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {filteredProducts.map((product) => {
            const name = lang === 'ar' ? product.name_ar : product.name_en;
            const tagline = lang === 'ar' ? product.tagline_ar : product.tagline_en;
            const desc = lang === 'ar' ? product.description_ar : product.description_en;
            const selectedBundle = selectedBundles[product.id] || product.bundles[0];
            const currentPrice = selectedBundle.price;
            const skillBadge = getSkillLevelBadge(product.skillLevel);

            return (
              <div
                key={product.id}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                {/* Product Card Top */}
                <div>
                  {/* Image with overlays */}
                  <div className="relative aspect-16/10 bg-stone-100 overflow-hidden">
                    <img
                      src={product.image}
                      alt={name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                    />

                    {/* Department & Age Badge */}
                    <div className="absolute top-3 start-3 flex flex-wrap items-center gap-1.5">
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-stone-900/85 text-white backdrop-blur-xs">
                        {getLineTitle(product.line)}
                      </span>
                      <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-md border ${skillBadge.bg}`}>
                        {skillBadge.label}
                      </span>
                    </div>

                    {/* Screen Free Indicator */}
                    <div className="absolute bottom-3 end-3">
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-md bg-emerald-900/90 text-white backdrop-blur-xs">
                        <EyeOff className="w-3 h-3 text-emerald-300" />
                        <span>{lang === 'ar' ? 'راحة من الشاشات' : 'Screen-Free'}</span>
                      </span>
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-6 space-y-4">
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-lg font-bold text-stone-900">
                          {name}
                        </h3>
                        <span className="text-xs font-mono text-stone-500 shrink-0">
                          {product.age_range}
                        </span>
                      </div>
                      <p className="text-xs font-medium text-amber-800 mt-0.5">
                        {tagline}
                      </p>
                      <div className="flex items-center gap-1.5 mt-1.5 text-[11px] font-semibold text-stone-600 bg-stone-100/70 px-2 py-0.5 rounded-md w-fit">
                        <Compass className="w-3.5 h-3.5 text-amber-800" />
                        <span>{getUniverseTitle(product.universe)}</span>
                      </div>
                    </div>

                    <p className="text-xs text-stone-600 leading-relaxed line-clamp-3">
                      {desc}
                    </p>

                    {/* Key Value Pillars: Semi-Assembled + Eco Box Feature */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                      <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200 flex items-start gap-2">
                        <Scissors className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                        <div>
                          <div className="text-[11px] font-bold text-stone-900">
                            {lang === 'ar' ? 'تجربة تفاعلية ونصف جاهزة' : 'Interactive Semi-Assembled'}
                          </div>
                          <div className="text-[10px] text-stone-500 line-clamp-2">
                            {lang === 'ar' ? product.assemblyExperience_ar : product.assemblyExperience_en}
                          </div>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200 flex items-start gap-2">
                        <Box className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                        <div>
                          <div className="text-[11px] font-bold text-stone-900">
                            {lang === 'ar' ? 'العلبة جزء من اللعبة وديكور' : 'Eco-Box Transforms into Decor'}
                          </div>
                          <div className="text-[10px] text-stone-500 line-clamp-2">
                            {lang === 'ar' ? product.boxFeature_ar : product.boxFeature_en}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bundle Selector (1 Character: Part of Adventure, 3 Characters: Bigger Part, Full: Complete Adventure) */}
                    <div className="pt-2 border-t border-stone-100">
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-xs font-bold text-stone-800 block">
                          {lang === 'ar' ? 'اختر باكدج المغامرة حسب الرغبة والقدرة الشرائية:' : 'Select Adventure Package Tier:'}
                        </label>
                        {product.line === 'children' && (
                          <span className="text-[10px] font-bold text-amber-900 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                            {lang === 'ar' ? 'المستوى 1 · الأطفال' : 'Level 1 · Kids'}
                          </span>
                        )}
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {product.bundles.map((bundle) => {
                          const isSelected = selectedBundle.id === bundle.id;
                          const bundleTitle = lang === 'ar' ? bundle.name_ar : bundle.name_en;
                          const scopeLabel = bundle.adventureScope_ar
                            ? (lang === 'ar' ? bundle.adventureScope_ar : bundle.adventureScope_en)
                            : (
                                bundle.id === 'single'
                                  ? (lang === 'ar' ? 'جزء من المغامرة' : 'Part of Adventure')
                                  : bundle.id === 'trio'
                                  ? (lang === 'ar' ? 'جزء أكبر من المغامرة' : 'Larger Part')
                                  : (lang === 'ar' ? 'إنهاء المغامرة كاملة' : 'Complete Adventure')
                              );

                          return (
                            <button
                              key={bundle.id}
                              type="button"
                              onClick={() => handleSelectBundle(product.id, bundle)}
                              className={`p-2 rounded-xl border text-start flex flex-col justify-between transition-all cursor-pointer ${
                                isSelected
                                  ? 'border-amber-900 bg-amber-50/50 ring-1 ring-amber-900 shadow-2xs'
                                  : 'border-stone-200 hover:border-stone-300 bg-white'
                              }`}
                            >
                              <div>
                                <span className="text-[9px] uppercase font-bold text-amber-900 block leading-tight">
                                  {scopeLabel}
                                </span>
                                <span className="text-xs font-semibold text-stone-900 line-clamp-1 mt-1">
                                  {bundleTitle}
                                </span>
                              </div>
                              <span className="text-xs font-bold text-amber-900 tabular-nums mt-1.5">
                                {bundle.price} {t.currency}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Bottom: Price, Stock & Buy/Add Actions */}
                <div className="p-6 pt-0 border-t border-stone-100 mt-2 space-y-4">
                  <div className="flex items-center justify-between pt-4">
                    <div>
                      <div className="text-[11px] text-stone-500 font-medium">
                        {lang === 'ar' ? 'سعر الباكدج المحدد:' : 'Selected Bundle Price:'}
                      </div>
                      <div className="text-2xl font-extrabold text-amber-950 tabular-nums">
                        {currentPrice} <span className="text-sm font-semibold">{t.currency}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedProductForModal(product)}
                      className="text-xs font-semibold text-amber-900 hover:text-amber-950 flex items-center gap-1 underline underline-offset-4 cursor-pointer"
                    >
                      <Info className="w-3.5 h-3.5" />
                      <span>{t.viewDetails}</span>
                    </button>
                  </div>

                  {/* Actions Grid */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <button
                      onClick={() => onAddToCart(product, selectedBundle)}
                      className="w-full py-2.5 px-3 text-xs font-bold text-stone-800 bg-stone-100 hover:bg-stone-200 border border-stone-300 rounded-lg shadow-2xs transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-98"
                    >
                      <ShoppingBag className="w-3.5 h-3.5 text-stone-600" />
                      <span>{t.addToBag}</span>
                    </button>

                    <button
                      onClick={() => onBuyNow(product, selectedBundle)}
                      className="w-full py-2.5 px-3 text-xs font-bold text-white bg-amber-900 hover:bg-amber-950 rounded-lg shadow-xs hover:shadow transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-98"
                    >
                      <CreditCard className="w-3.5 h-3.5" />
                      <span>{t.buyNow}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProductForModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setSelectedProductForModal(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-stone-200 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-stone-200 px-6 py-4 flex items-center justify-between z-10">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800">
                  {getLineTitle(selectedProductForModal.line)}
                </span>
                <h3 className="text-lg font-bold text-stone-900">
                  {lang === 'ar' ? selectedProductForModal.name_ar : selectedProductForModal.name_en}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProductForModal(null)}
                className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6">
              {/* Product hero photo */}
              <div className="aspect-16/9 bg-stone-100 rounded-xl overflow-hidden border border-stone-200">
                <img
                  src={selectedProductForModal.image}
                  alt={lang === 'ar' ? selectedProductForModal.name_ar : selectedProductForModal.name_en}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Screen Free & Pedagogy Section */}
              <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-950">
                  <EyeOff className="w-4 h-4 text-emerald-800" />
                  <span>{lang === 'ar' ? 'فوائد الراحة من الشاشات والتنمية الحركية:' : 'Screen-Free Detox & Motor Benefits:'}</span>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                  {(lang === 'ar'
                    ? selectedProductForModal.screenFreeBenefits_ar
                    : selectedProductForModal.screenFreeBenefits_en
                  ).map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Semi-Assembled Interactive Craft Experience */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-stone-900">
                  <Scissors className="w-4 h-4 text-amber-800" />
                  <span>{lang === 'ar' ? 'التجربة التفاعلية وشعور الملكية والفخر:' : 'Hands-on Interactive Assembly & Pride:'}</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed bg-stone-50 p-3 rounded-lg border border-stone-200">
                  {lang === 'ar' ? selectedProductForModal.assemblyExperience_ar : selectedProductForModal.assemblyExperience_en}
                </p>
              </div>

              {/* Eco-Friendly Box as Part of the Toy */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-stone-900">
                  <Box className="w-4 h-4 text-emerald-800" />
                  <span>{lang === 'ar' ? 'العلبة جزء من اللعبة وديكور للغرفة:' : 'Eco Box as Part of the Toy & Decor:'}</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed bg-stone-50 p-3 rounded-lg border border-stone-200">
                  {lang === 'ar' ? selectedProductForModal.boxFeature_ar : selectedProductForModal.boxFeature_en}
                </p>
              </div>

              {/* Cultural Elements */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-stone-900">
                  {lang === 'ar' ? 'عناصر الهوية والثقافة المصرية:' : 'Egyptian Cultural Elements:'}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {(lang === 'ar'
                    ? selectedProductForModal.cultural_elements_ar
                    : selectedProductForModal.cultural_elements_en
                  ).map((elem, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-xs rounded-md bg-stone-100 text-stone-800 border border-stone-200"
                    >
                      {elem}
                    </span>
                  ))}
                </div>
              </div>

              {/* Materials & Care */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-stone-200 text-xs">
                <div>
                  <span className="font-bold text-stone-900 block mb-1">
                    {lang === 'ar' ? 'الخامات والمسؤولية البيئية:' : 'Safe Materials & Eco Responsibility:'}
                  </span>
                  <p className="text-stone-600">
                    {(lang === 'ar' ? selectedProductForModal.materials_ar : selectedProductForModal.materials_en).join(' · ')}
                  </p>
                </div>

                <div>
                  <span className="font-bold text-stone-900 block mb-1">
                    {lang === 'ar' ? 'العناية والغسيل:' : 'Care & Washing:'}
                  </span>
                  <p className="text-stone-600">
                    {lang === 'ar' ? selectedProductForModal.care_instructions_ar : selectedProductForModal.care_instructions_en}
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-stone-50 border-t border-stone-200 px-6 py-4 flex items-center justify-between">
              <div>
                <span className="text-[11px] text-stone-500 font-medium block">
                  {lang === 'ar' ? 'سعر الباقة الفردية:' : 'Single Kit Price:'}
                </span>
                <span className="text-lg font-bold text-amber-950 tabular-nums">
                  {selectedProductForModal.price_retail} {t.currency}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    const bundle = selectedBundles[selectedProductForModal.id] || selectedProductForModal.bundles[0];
                    onAddToCart(selectedProductForModal, bundle);
                    setSelectedProductForModal(null);
                  }}
                  className="px-4 py-2 text-xs font-bold text-white bg-amber-900 hover:bg-amber-950 rounded-lg shadow-xs transition-colors cursor-pointer"
                >
                  {t.addToBag}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
