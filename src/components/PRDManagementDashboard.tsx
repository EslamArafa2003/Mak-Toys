import React, { useState } from 'react';
import { Order, QuoteRequest, CustomOrder, Language } from '../types';
import { translations } from '../translations';
import { OFFICIAL_SUPPORT_PHONE, BRAND_LOGO_IMAGE } from '../data/mockData';
import {
  FileText,
  CheckCircle2,
  Clock,
  Users,
  BarChart3,
  ShieldCheck,
  ChevronRight,
  Search,
  Filter,
  TrendingUp,
  AlertTriangle,
  Layers,
  Sparkles,
  Scissors,
  Box,
  EyeOff,
  Compass,
  Trophy,
  ArrowRight,
  Headphones
} from 'lucide-react';

interface PRDManagementDashboardProps {
  lang: Language;
  orders: Order[];
  quotes: QuoteRequest[];
  customOrders: CustomOrder[];
  onBackToStorefront: () => void;
}

export const PRDManagementDashboard: React.FC<PRDManagementDashboardProps> = ({
  lang,
  orders,
  quotes,
  customOrders,
  onBackToStorefront,
}) => {
  const t = translations[lang];

  const [activeTab, setActiveTab] = useState<'pitch_roadmap' | 'overview' | 'features' | 'orders' | 'phases'>('pitch_roadmap');
  const [searchTerm, setSearchTerm] = useState('');

  // MoSCoW Features list from PRD Section 6
  const MOSCOW_FEATURES = [
    { id: 'P0-F001', name_en: 'Bilingual Arabic/English Switch (Top Priority)', name_ar: 'التحويل الثنائي بين العربية والإنجليزية (أولوية قصوى)', priority: 'P0', status: 'COMPLETED', sprint: 'S3', owner: 'Owner / Sales Lead' },
    { id: 'P0-F002', name_en: 'Educational Life-Skills Fabric Toy (Farah)', name_ar: 'لعبة قماشية لمهارات الحياة (فرح مساعدة السوق)', priority: 'P0', status: 'IN_REVIEW', sprint: 'S1', owner: 'Product Designer' },
    { id: 'P0-F003', name_en: 'Character Fabric Toy (Mishmish)', name_ar: 'شخصية قماشية تراثية (مشمش ثعلب الفنك)', priority: 'P0', status: 'IN_REVIEW', sprint: 'S1', owner: 'Product Designer' },
    { id: 'P0-F004', name_en: 'Safe, Durable, Washable Materials', name_ar: 'خامات آمنة وقابلة للغسيل المتكرر ومقاومة للشد', priority: 'P0', status: 'TESTED', sprint: 'S2', owner: 'Production Lead / QC' },
    { id: 'P0-F005', name_en: 'Distinctive Arabic Packaging with Bilingual Info', name_ar: 'تغليف عربي مميز بمعلومات ثنائية اللغة', priority: 'P0', status: 'APPROVED', sprint: 'S3', owner: 'Product Designer' },
    { id: 'P0-F006', name_en: 'Direct Online Store & Cash/Card Checkout', name_ar: 'متجر إلكتروني متكامل وسلة دفع كاش وفيزا', priority: 'P0', status: 'LIVE', sprint: 'S3', owner: 'Social Media / Sales Lead' },
    { id: 'P0-F007', name_en: 'Wholesale Quotes & Orders', name_ar: 'عروض أسعار وطلبات الجملة للمؤسسات', priority: 'P0', status: 'ACTIVE', sprint: 'S3', owner: 'Owner' },
    { id: 'P0-F008', name_en: 'Environmentally Responsible Product & Packaging', name_ar: 'منتج وتغليف صديق للبيئة خالي من البلاستيك', priority: 'P0', status: 'VERIFIED', sprint: 'S2', owner: 'Production Lead' },
    { id: 'P1-F001', name_en: 'Activity Guide & Educational Audio Story', name_ar: 'دليل الأنشطة التفاعلية للأهل والقصة الصوتية المصاحبة', priority: 'P1', status: 'ACTIVE', sprint: 'S3', owner: 'Designer / Owner' },
    { id: 'P1-F002', name_en: 'Custom Branded Corporate Orders', name_ar: 'طلبات الهدايا والتطريز المخصص للشركات', priority: 'P1', status: 'ACTIVE', sprint: 'S4', owner: 'Owner' },
  ];

  // Implementation Phases from PRD Section 10
  const PHASES = [
    {
      id: 'PH-1',
      title_en: 'Phase 1: Product Design & Identity',
      title_ar: 'المرحلة الأولى: التصميم وتحديد الهوية',
      dates: '2026-10-15 → 2026-10-31',
      status: 'Current (85% Done)',
      tasks: [
        'Select life skills & cultural references for Farah and Mishmish',
        'Finalize Mak Toys branding & packaging proofs',
        'Approve PRD v1.0 and material specification list'
      ]
    },
    {
      id: 'PH-2',
      title_en: 'Phase 2: Prototyping & Safety Validation',
      title_ar: 'المرحلة الثانية: النماذج الأولية واختبارات الأمان',
      dates: '2026-11-01 → 2026-11-14',
      status: 'Upcoming',
      tasks: [
        'Produce physical pattern prototypes in Alexandria workshop',
        'Execute 10-wash cycle, seam pull test, and non-toxicity checks',
        'Review with focus group of Egyptian parents'
      ]
    },
    {
      id: 'PH-3',
      title_en: 'Phase 3: Production & Digital Channels',
      title_ar: 'المرحلة الثالثة: إنتاج الدفعة الأولى وقنوات البيع',
      dates: '2026-11-15 → 2026-12-05',
      status: 'Planned',
      tasks: [
        'Produce first batch of 300 units (Farah, Mishmish, Hapi Kit)',
        'Print recyclable kraft gift boxes that convert into bedroom decor',
        'Launch e-commerce store with COD and Card payment options'
      ]
    },
    {
      id: 'PH-4',
      title_en: 'Phase 4: Beta & Public Launch',
      title_ar: 'المرحلة الرابعة: الإطلاق التجريبي والعام',
      dates: '2026-12-06 → 2026-12-20',
      status: 'Target Dec 20, 2026',
      tasks: [
        'Deliver beta orders to initial network in Alexandria and Cairo',
        'Full public launch on Egyptian social media channels',
        'Monitor target of 80% first batch sold in 30 days'
      ]
    }
  ];

  // Total sales metrics
  const totalOrdersCount = orders.length;
  const totalRevenue = orders.reduce((sum, o) => sum + o.total, 0);

  return (
    <section className="py-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Top Header & Return CTA */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-200">
          <div className="flex items-center gap-4">
            <img
              src={BRAND_LOGO_IMAGE}
              alt="Mak Toys Official Brand Logo"
              referrerPolicy="no-referrer"
              className="w-14 h-14 object-contain rounded-xl bg-white border border-stone-200 shadow-xs shrink-0"
            />
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800">
                <FileText className="w-4 h-4" />
                <span>Mak Toys · Pitch, Strategy & Operations · Alexandria, Egypt</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mt-1">
                {lang === 'ar' ? 'رؤية مشروع ألعاب ماك، خطة التوسع، ولوحة العمليات' : 'Mak Toys Vision, Strategic Pitch & Operations'}
              </h1>
            </div>
          </div>

          <button
            onClick={onBackToStorefront}
            className="self-start sm:self-auto px-4 py-2 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 border border-stone-300 rounded-lg transition-colors cursor-pointer"
          >
            {t.toggleToStorefront}
          </button>
        </div>

        {/* Executive KPI Scoreboard */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
            <span className="text-xs text-stone-500 font-medium">{t.prdStatusTargetBatch}</span>
            <div className="text-2xl font-bold text-stone-900 mt-1 tabular-nums">
              80% <span className="text-xs font-normal text-stone-500">({totalOrdersCount} orders logged)</span>
            </div>
            <span className="text-[11px] text-emerald-700 font-medium">Batch 1: 300 units planned</span>
          </div>

          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
            <span className="text-xs text-stone-500 font-medium">{t.prdStatusMargin}</span>
            <div className="text-2xl font-bold text-stone-900 mt-1 tabular-nums">
              43.8% <span className="text-xs font-normal text-stone-500">(Target &gt; 40%)</span>
            </div>
            <span className="text-[11px] text-stone-500">Retail 380 EGP vs 213 EGP COGS</span>
          </div>

          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
            <span className="text-xs text-stone-500 font-medium">Wholesale Quotes Pipeline</span>
            <div className="text-2xl font-bold text-amber-900 mt-1 tabular-nums">
              {quotes.length} <span className="text-xs font-normal text-stone-500">institutions</span>
            </div>
            <span className="text-[11px] text-stone-500">24-hour SLA response guaranteed</span>
          </div>

          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
            <span className="text-xs text-stone-500 font-medium">Customer Support Channel</span>
            <div className="text-lg font-bold text-stone-900 mt-1 font-mono">
              {OFFICIAL_SUPPORT_PHONE}
            </div>
            <span className="text-[11px] text-emerald-700 font-semibold">Eslam Arafa (Alexandria)</span>
          </div>
        </div>

        {/* Console Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-stone-200 pb-2 overflow-x-auto text-xs font-semibold">
          <button
            onClick={() => setActiveTab('pitch_roadmap')}
            className={`px-3.5 py-2 rounded-lg transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'pitch_roadmap'
                ? 'bg-amber-900 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>{lang === 'ar' ? 'عرض الفكرة الاستراتيجية وخريطة الطريق (Pitch & Roadmap)' : 'Pitch & Future Roadmap'}</span>
          </button>
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3.5 py-2 rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'overview'
                ? 'bg-amber-900 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            {t.prdTabDocs}
          </button>
          <button
            onClick={() => setActiveTab('features')}
            className={`px-3.5 py-2 rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'features'
                ? 'bg-amber-900 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            {t.prdTabFeatures}
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`px-3.5 py-2 rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'orders'
                ? 'bg-amber-900 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            {t.prdTabOrdersLog} ({orders.length})
          </button>
          <button
            onClick={() => setActiveTab('phases')}
            className={`px-3.5 py-2 rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'phases'
                ? 'bg-amber-900 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            {t.prdTabMilestones}
          </button>
        </div>

        {/* TAB 0: STRATEGIC PITCH & FUTURE ROADMAP (USER REQUEST HIGHLIGHT) */}
        {activeTab === 'pitch_roadmap' && (
          <div className="space-y-8">
            {/* 1. Future Roadmap Pitch Slide (Exact User Requirement) */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-amber-950 via-stone-900 to-amber-900 text-white space-y-6 shadow-md border border-amber-800/40">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300">
                <Trophy className="w-4 h-4" />
                <span>{lang === 'ar' ? 'شريحة خريطة الطريق المستقبلية (Future Roadmap in Pitch)' : 'Future Roadmap Pitch Slide'}</span>
              </div>

              <div className="space-y-4">
                <div className="inline-block px-3 py-1 rounded-md bg-amber-500/20 text-amber-300 font-mono text-xs border border-amber-500/30">
                  {lang === 'ar' ? 'رسالة العرض الأساسية للمستثمرين والشركاء' : 'Core Pitch Expansion Statement'}
                </div>
                <blockquote className="text-xl sm:text-2xl font-bold leading-relaxed text-amber-50 border-s-4 border-amber-400 ps-4 py-1 italic">
                  {lang === 'ar'
                    ? '«هذا هو المنتج الأول (MVP)، ولدينا خطة توسعية مستقبلية لإطلاق خطوط ألعاب تعليمية تعتمد على التاريخ والهوية الثقافية مثل ألعاب الشطرنج الاستراتيجية ذات الشخصيات التاريخية.»'
                    : '"This is our Minimum Viable Product (MVP), and we possess a robust expansion roadmap to launch educational toy lines rooted in history and cultural identity, such as strategic chess games with historic civilizational figures."'}
                </blockquote>
                <p className="text-xs text-amber-200/80 leading-relaxed max-w-3xl">
                  {lang === 'ar'
                    ? 'تُظهر هذه الشريحة أن ألعاب ماك تحمل رؤية استثمارية وصناعية ضخمة تمتد لسنوات، دون إغراق المستمع بتفاصيل تشتت التركيز عن إطلاق المنتج الأول بنجاح.'
                    : 'This positions Mak Toys with massive forward momentum and intellectual depth without derailing the launch focus of the primary debut line.'}
                </p>
              </div>

              {/* Roadmap Milestones Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-white/10 text-xs">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                  <span className="text-amber-400 font-bold block">{lang === 'ar' ? 'المرحلة الحالية: MVP الإطلاق' : 'Current: Debut MVP'}</span>
                  <p className="text-stone-300">{lang === 'ar' ? 'ألعاب قماشية للأطفال ودمى المهارات الحياتية التفاعلية نصف الجاهزة.' : 'Fabric sensory companions & semi-assembled maker kits.'}</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                  <span className="text-amber-400 font-bold block">{lang === 'ar' ? 'المرحلة 2: عوالم المهارات والتجميع' : 'Phase 2: Craft Universes'}</span>
                  <p className="text-stone-300">{lang === 'ar' ? 'توسيع ورش التجميع اليدوي التفاعلي وشهادات الصانع الصغير.' : 'Multi-tier assembly universes with progressive badges.'}</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                  <span className="text-amber-400 font-bold block">{lang === 'ar' ? 'المرحلة 3: ألعاب الاستراتيجية التاريخية' : 'Phase 3: Historical Strategy'}</span>
                  <p className="text-stone-300">{lang === 'ar' ? 'الشطرنج الحضاري والملاحم التاريخية المصرية للكبار والمقتنين.' : 'Historical civilization chess & heirloom collector games.'}</p>
                </div>
              </div>
            </div>

            {/* 2. Educational Progressive Skill Journey */}
            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-900">
                <Scissors className="w-4 h-4 text-amber-800" />
                <span>{lang === 'ar' ? 'منظومة التدرج التعليمي لمهارة الخياطة والأشغال اليدوية (Skill-based Journey)' : 'Progressive Skill-Based Journey'}</span>
              </div>
              <h3 className="text-base font-bold text-stone-900">
                {lang === 'ar' ? 'علاقة مستمرة (Recurring Engagement) ونمو مستمر مع الطفل' : 'Building Recurring Lifetime Value & Pedagogy'}
              </h3>
              <p className="text-xs text-stone-700 leading-relaxed">
                {lang === 'ar'
                  ? 'المنتجات مصممة بطريقة "منهاج تدريجي (Progressive Skill Levels)" يبدأ ببساطة من الصفر (للمبتدئين) ويتدرج حتى الاحتراف، وانه بيتضمن مهارات يدوية متعددة مش بس الخياطة وحدها. ده بيضمن إن العميل مش هيشتري لعبة مرة واحدة وخلاص، دي علاقة مستمرة لأن الطفل هيكبر ويطلع للفل الأحدث، وهيبقى فيه كورسات ومستويات متقدمة، وده بيدي انطباع باحترافية شديدة وعمق تربوي للمشروع.'
                  : 'Toys are engineered with a Progressive Skill Levels curriculum starting from ground zero (starter) up to mastery, covering diverse manual crafts beyond sewing alone. This creates recurring engagement across childhood development milestones.'}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-4 bg-white rounded-xl border border-stone-200 space-y-2">
                  <span className="text-xs font-bold text-emerald-800 block">{lang === 'ar' ? 'Level 1: من الصفر (للمبتدئين)' : 'Level 1: Absolute Beginner'}</span>
                  <p className="text-xs text-stone-600">{lang === 'ar' ? 'تآزر حركي دقيق، لمس وتكوين، التعرف على الأنسجة، سلة الخضار وترتيب المجسمات.' : 'Tactile grasping, sensory texture classification, friendly sorting.'}</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-stone-200 space-y-2">
                  <span className="text-xs font-bold text-blue-800 block">{lang === 'ar' ? 'Level 2: صانع ومستكشف (خياطة وتجميع)' : 'Level 2: Maker & Stitching'}</span>
                  <p className="text-xs text-stone-600">{lang === 'ar' ? 'لعبة نصف جاهزة بثقوب ليزر، إبرة خشبية آمنة، حشو وتطريز، وبناء مجسم ثلاثي الأبعاد بنفسه.' : 'Semi-assembled kit with safety wooden needle, stuffing, and 3D pride.'}</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-stone-200 space-y-2">
                  <span className="text-xs font-bold text-amber-900 block">{lang === 'ar' ? 'Level 3: محترف ومصمم استراتيجي' : 'Level 3: Strategic Master'}</span>
                  <p className="text-xs text-stone-600">{lang === 'ar' ? 'تخطيط، تركيبات معقدة، شطرنج تاريخي، وفهم تكتيكي للهوية والحضارة بعيداً عن الشاشات.' : 'Deep spatial logic, civilizational tactics, and screen-free mastery.'}</p>
                </div>
              </div>
            </div>

            {/* 3. Screen-Free Living & Sense of Ownership */}
            <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-950">
                <EyeOff className="w-4 h-4 text-emerald-800" />
                <span>{lang === 'ar' ? 'الانفصال عن الشاشات وإحساس الفخر والملكية' : 'Digital Detox & Sense of Ownership'}</span>
              </div>
              <h3 className="text-base font-bold text-stone-900">
                {lang === 'ar' ? 'منتجنا ليس مجرد لعبة جاهزة — إنه تجربة تفاعلية (Interactive Experience)' : 'Not Just an Off-the-Shelf Toy — An Interactive Rite of Passage'}
              </h3>
              <p className="text-xs text-stone-700 leading-relaxed">
                {lang === 'ar'
                  ? 'من الأهداف المهمة أن بنشجع الناس إنهم يفصلوا ويرتاحوا من الشاشات.. سواء للآباء اللي قلقة على أطفالها من تأثير التكنولوجيا المتسارع والضرر على المخ والعين، وفي نفس الوقت بتتعلم مهارة وبيلعب وبيقضي وقت مفيد سواء معاهم بيتجمعوا يلعبوا اللعبة أو يلعبها لوحده ويقوي الإبداع، التخيل، مهارات التحكم في اليد واللمس والتكوين والتركيب والمنطق. اللعبة بتكون "نصف جاهزة" والطفل بيقوم بتجميعها والتفاعل معها بنفسه، وده بيدي له إحساس بالفخر والملكية (Sense of Ownership & Pride).'
                  : 'We give families a healthy escape from excessive screen exposure and technological burnout. Semi-assembled kits invite children to build and personalize their companion, producing supreme ownership and pride.'}
              </p>
            </div>

            {/* 4. Play Universes & 3-Tier Adventure Packages Philosophy */}
            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-900">
                <Box className="w-4 h-4 text-amber-800" />
                <span>{lang === 'ar' ? 'هندسة عوالم اللعب ونظام باكدجات المغامرة (المستوى 1: الأطفال)' : 'Play Universes & 3-Tier Adventure System (Level 1)'}</span>
              </div>
              <h3 className="text-base font-bold text-stone-900">
                {lang === 'ar' ? 'عوالم مختلفة.. وكل مغامرة لها 3 باكدجات متدرجة تفصل الطفل عن الشاشات' : 'Distinct Play Universes.. 3 Progressive Adventure Packages Per Quest'}
              </h3>
              <p className="text-xs text-stone-700 leading-relaxed">
                {lang === 'ar'
                  ? 'مشروعنا ليس مجرد بيع علبة كرتونية، بل هو بناء عوالم لعب مختلفة (Immersive Play Universes). وفي جزء الأطفال (أول ليفيل)، كل عالم يضم مغامرات تفاعلية، ولكل مغامرة 3 باكدجات مختلفة تعتمد على القدرة الشرائية وتجربة الطفل: باكدج شخصية واحدة يأخذ به جزءاً من المغامرة، باكدج 3 شخصيات يأخذون به جزءاً أكبر من المغامرة، وإذا قفل وجمع كل شخصيات المجموعة يكون قد أنهى المغامرة بالكامل التي هي جزء من العالم الكبير! والعلبة الكرتونية صديقة البيئة تتحول لوحدة تخزين وديكور دائم للغرفة وتشجع على انتظار الليفل الثاني.'
                  : 'We do not sell mere cardboard boxes; we engineer distinct Immersive Play Universes. In Level 1 (Kids), each universe features interactive adventures with 3 tiered packages: 1 character unlocks a part of the adventure, 3 characters unlock a larger part, and completing the full collection finishes the entire adventure diorama as part of the broader universe!'}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs">
                <div className="p-3 bg-white rounded-xl border border-stone-200">
                  <span className="font-bold text-amber-900 block">{lang === 'ar' ? '1. باكدج شخصية واحدة' : 'Tier 1: Single Character'}</span>
                  <span className="text-stone-900 font-semibold block text-[11px] mt-0.5">{lang === 'ar' ? '«جزء من المغامرة»' : '"Part of the Adventure"'}</span>
                  <span className="text-stone-500 block mt-1">{lang === 'ar' ? 'شخصية واحدة + كارت مهمة الفصل الأول وخريطة مصغرة.' : '1 character + Chapter 1 quest card & mini map.'}</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-stone-200">
                  <span className="font-bold text-emerald-900 block">{lang === 'ar' ? '2. باكدج 3 شخصيات' : 'Tier 2: 3 Characters'}</span>
                  <span className="text-stone-900 font-semibold block text-[11px] mt-0.5">{lang === 'ar' ? '«جزء أكبر من المغامرة»' : '"Larger Part of the Adventure"'}</span>
                  <span className="text-stone-500 block mt-1">{lang === 'ar' ? '3 شخصيات تفتح مسارات أوسع، حوارات تمثيلية، ومسرحاً أرحب.' : '3 characters unlocking broader story paths & dialogue theater.'}</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-stone-200">
                  <span className="font-bold text-amber-950 block">{lang === 'ar' ? '3. باكدج قفل المجموعة كاملة' : 'Tier 3: Full Collector Box'}</span>
                  <span className="text-stone-900 font-semibold block text-[11px] mt-0.5">{lang === 'ar' ? '«إنهاء المغامرة كاملة (جزء من العالم)»' : '"Complete Entire Adventure (Part of Universe)"'}</span>
                  <span className="text-stone-500 block mt-1">{lang === 'ar' ? 'تجميع كافة شخصيات المغامرة (5 شخصيات)، إنهاء المغامرة بالكامل، والترشح لليفل 2.' : 'Complete 5-character set finishing the adventure, ready for Level 2.'}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 1: PRD Summary & Project Identity (Section 1 & 2) */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-4">
              <h3 className="text-lg font-bold text-stone-900">
                {lang === 'ar' ? 'ملخص الغرض والقيمة الاقتصادية لمشروع ألعاب ماك (Mak Toys)' : 'Executive Summary & Business Value'}
              </h3>
              <p className="text-xs text-stone-700 leading-relaxed">
                {lang === 'ar'
                  ? 'انطلقت علامة ألعاب ماك (Mak Toys) من الإسكندرية كبراند عالمي قائم على بناء عوالم لعب وتجارب تعليمية وتفاعلية متكاملة (Immersive Play Universes). بنقدم ألعاباً متنوعة من الألعاب التاريخية والترفيهية ومجموعات التجميع اليدوي ثنائية اللغة، واللي بتعتمد على فكرة التجميع لتنمية التآزر البصري والحركي، والتركيز، والابتكار، كل ده في إطار يربط الأطفال والكبار بهويتهم وثقافتهم ويفصلهم تماماً عن الشاشات.'
                  : 'Mak Toys launched from Alexandria, Egypt as a global brand building immersive play universes and progressive skill-based craft journeys.'}
              </p>

              {/* Stakeholders Matrix from PRD Section 15 */}
              <div className="pt-3 border-t border-stone-200">
                <span className="text-xs font-bold text-stone-800 uppercase block mb-2">
                  {lang === 'ar' ? 'الشركاء المؤسسون وفريق العمل (Alexandria, Egypt):' : 'Founding Team & Leadership (Alexandria, Egypt):'}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-stone-600">
                  <div className="p-3.5 bg-white rounded-xl border border-stone-200">
                    <span className="font-bold text-stone-900 block">Marwa Kandil (مروة قنديل)</span>
                    <span className="text-[11px] text-amber-900 font-medium">Co-Founder & Head of Toy Design</span>
                    <p className="text-[11px] text-stone-500 mt-1">تصميم العوالم التفاعلية ومناهج التدرج الحركي.</p>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-stone-200">
                    <span className="font-bold text-stone-900 block">Eslam Arafa (إسلام عرفة)</span>
                    <span className="text-[11px] text-amber-900 font-medium">Co-Founder & Head of Operations</span>
                    <p className="text-[11px] text-stone-500 mt-1">إدارة الإنتاج اليدوي وخدمة العملاء الرسمية.</p>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-stone-200">
                    <span className="font-bold text-stone-900 block">Ali Kohla (علي كحلة)</span>
                    <span className="text-[11px] text-amber-900 font-medium">Co-Founder & Business Development</span>
                    <p className="text-[11px] text-stone-500 mt-1">تطوير الشراكات ونشر الألعاب بالمكتبات والمدارس.</p>
                  </div>
                </div>

                {/* Customer support callout */}
                <div className="mt-3 p-3 bg-amber-50 rounded-xl border border-amber-200 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <Headphones className="w-4 h-4 text-amber-800" />
                    <span className="font-bold text-stone-900">
                      {lang === 'ar' ? 'قناة خدمة العملاء والدعم المعتمدة:' : 'Official Customer Care Channel:'}
                    </span>
                    <span className="font-mono font-bold text-amber-950">إسلام عرفة ({OFFICIAL_SUPPORT_PHONE})</span>
                  </div>
                  <span className="text-[11px] text-amber-800 font-medium">الإسكندرية، مصر</span>
                </div>
              </div>
            </div>

            {/* Target Personas (PRD Section 5) */}
            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200">
              <h3 className="text-base font-bold text-stone-900 mb-4">
                {lang === 'ar' ? 'شخصيات المستخدمين المستهدفة (PRD Section 5 Personas)' : 'Target Personas & User Success'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                <div className="p-3.5 bg-white rounded-xl border border-stone-200 space-y-1.5">
                  <span className="font-bold text-amber-900 block">1. Mona (Parent Buyer)</span>
                  <p className="text-stone-600">Worried about kids screen addiction; seeks durable fabric toys teaching practical values.</p>
                </div>
                <div className="p-3.5 bg-white rounded-xl border border-stone-200 space-y-1.5">
                  <span className="font-bold text-amber-900 block">2. Tamer & Salma (Young Makers)</span>
                  <p className="text-stone-600">Enjoys semi-assembled kits with safe needles; proud of saying "I built this toy!"</p>
                </div>
                <div className="p-3.5 bg-white rounded-xl border border-stone-200 space-y-1.5">
                  <span className="font-bold text-amber-900 block">3. Hassan (Retail & Library)</span>
                  <p className="text-stone-600">School / bookstore buyer needing 24-hr quotes and cultural Egyptian products.</p>
                </div>
                <div className="p-3.5 bg-white rounded-xl border border-stone-200 space-y-1.5">
                  <span className="font-bold text-amber-900 block">4. Tarek (Adult Thinker / Collector)</span>
                  <p className="text-stone-600">Invests in historical civilization chess for mindfulness away from phone screens.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: MoSCoW Prioritization Tracker (Section 6) */}
        {activeTab === 'features' && (
          <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs">
            <div className="p-4 bg-stone-50 border-b border-stone-200 flex justify-between items-center">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-800">
                {lang === 'ar' ? 'مصفوفة أولويات المميزات (MoSCoW Section 6)' : 'MoSCoW Feature Matrix'}
              </span>
              <span className="text-xs font-mono text-stone-500">P0: 8 Features · P1: 2 Features</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-start rtl:text-right">
                <thead className="bg-stone-100 text-stone-700 uppercase font-semibold text-[11px] border-b border-stone-200">
                  <tr>
                    <th className="py-3 px-4">Feature ID</th>
                    <th className="py-3 px-4">Feature Name</th>
                    <th className="py-3 px-4">Priority</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4">Sprint</th>
                    <th className="py-3 px-4">Owner</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 font-medium">
                  {MOSCOW_FEATURES.map((feat) => (
                    <tr key={feat.id} className="hover:bg-stone-50/50">
                      <td className="py-3 px-4 font-mono font-bold text-amber-900">{feat.id}</td>
                      <td className="py-3 px-4 text-stone-900 font-semibold">
                        {lang === 'ar' ? feat.name_ar : feat.name_en}
                      </td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                          feat.priority === 'P0' ? 'bg-amber-100 text-amber-900 border border-amber-300' : 'bg-stone-200 text-stone-700'
                        }`}>
                          {feat.priority}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          <span>{feat.status}</span>
                        </span>
                      </td>
                      <td className="py-3 px-4 font-mono text-stone-500 text-[11px]">{feat.sprint}</td>
                      <td className="py-3 px-4 text-stone-600">{feat.owner}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: Live Orders & Quotes Ledger (Section 8 & 9) */}
        {activeTab === 'orders' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs">
              <div className="p-4 bg-stone-50 border-b border-stone-200 flex justify-between items-center">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-800">
                  {lang === 'ar' ? 'سجل طلبات المتجر المباشرة' : 'Live Store Orders'}
                </span>
                <span className="text-xs font-bold text-stone-900 tabular-nums">
                  Total Revenue: {totalRevenue} EGP
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-xs text-start rtl:text-right">
                  <thead className="bg-stone-100 text-stone-700 uppercase font-semibold text-[11px] border-b border-stone-200">
                    <tr>
                      <th className="py-3 px-4">Order ID</th>
                      <th className="py-3 px-4">Customer</th>
                      <th className="py-3 px-4">City</th>
                      <th className="py-3 px-4">Payment</th>
                      <th className="py-3 px-4">Total</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 font-medium">
                    {orders.map((o) => (
                      <tr key={o.id} className="hover:bg-stone-50/50">
                        <td className="py-3 px-4 font-mono font-bold text-amber-900">{o.id}</td>
                        <td className="py-3 px-4 font-semibold text-stone-900">{o.customerName}</td>
                        <td className="py-3 px-4 text-stone-600">{o.shippingCity}</td>
                        <td className="py-3 px-4 capitalize">
                          <span className={`px-2 py-0.5 rounded text-[11px] font-semibold ${
                            o.paymentMethod === 'card' ? 'bg-blue-50 text-blue-800 border border-blue-200' : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                          }`}>
                            {o.paymentMethod === 'card' ? 'Card / Visa' : 'Cash on Delivery'}
                          </span>
                        </td>
                        <td className="py-3 px-4 font-bold text-stone-900 tabular-nums">{o.total} EGP</td>
                        <td className="py-3 px-4">
                          <span className="text-emerald-800 font-semibold uppercase text-[11px]">{o.status}</span>
                        </td>
                        <td className="py-3 px-4 font-mono text-stone-500 text-[11px]">{o.createdAt}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Wholesale Quotes Ledger */}
            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs">
              <div className="p-4 bg-stone-50 border-b border-stone-200 flex justify-between items-center">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-800">
                  {lang === 'ar' ? 'سجل طلبات عروض أسعار الجملة' : 'Wholesale Quote Requests'}
                </span>
                <span className="text-xs text-stone-500 font-mono">MOQ: 20 units</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-xs text-start rtl:text-right">
                  <thead className="bg-stone-100 text-stone-700 uppercase font-semibold text-[11px] border-b border-stone-200">
                    <tr>
                      <th className="py-3 px-4">Quote ID</th>
                      <th className="py-3 px-4">Organization</th>
                      <th className="py-3 px-4">Type</th>
                      <th className="py-3 px-4">Volume</th>
                      <th className="py-3 px-4">Est. Total</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4">Valid Until</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 font-medium">
                    {quotes.map((q) => (
                      <tr key={q.id} className="hover:bg-stone-50/50">
                        <td className="py-3 px-4 font-mono font-bold text-amber-900">{q.id}</td>
                        <td className="py-3 px-4 font-semibold text-stone-900">{q.businessName}</td>
                        <td className="py-3 px-4 capitalize text-stone-600">{q.businessType}</td>
                        <td className="py-3 px-4 font-bold tabular-nums">{q.totalUnits} pcs</td>
                        <td className="py-3 px-4 font-bold text-stone-900 tabular-nums">{q.estimatedTotal} EGP</td>
                        <td className="py-3 px-4">
                          <span className="text-amber-800 font-semibold uppercase text-[11px]">{q.status}</span>
                        </td>
                        <td className="py-3 px-4 font-mono text-stone-500 text-[11px]">{q.validUntil}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: Implementation Phases (Section 10 & 13) */}
        {activeTab === 'phases' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PHASES.map((ph, idx) => (
              <div key={ph.id} className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-amber-900">{ph.id}</span>
                  <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    {ph.status}
                  </span>
                </div>
                <h4 className="text-base font-bold text-stone-900">
                  {lang === 'ar' ? ph.title_ar : ph.title_en}
                </h4>
                <div className="text-xs font-mono text-stone-500">
                  {ph.dates}
                </div>
                <ul className="pt-2 border-t border-stone-200 space-y-1.5 text-xs text-stone-700">
                  {ph.tasks.map((task, tidx) => (
                    <li key={tidx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-800 shrink-0 mt-0.5" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
