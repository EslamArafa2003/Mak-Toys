import {
  Product,
  Order,
  QuoteRequest,
  CustomOrder,
  ActivityGuideItem,
  TeamMember,
  SkillCourseLevel,
  CommunityQuest,
  PackagingTier,
  PlayUniverse,
  Adventure,
  AdventurePackageInfo
} from '../types';

export const BRAND_LOGO_IMAGE = '/src/assets/images/mak_toys_brand_logo_1792159852388.jpg';
export const HERO_IMAGE = '/src/assets/images/hero_mok_toys_collection_1792117201858.jpg';
export const PACKAGING_IMAGE = '/src/assets/images/mok_packaging_craft_1792117204284.jpg';
export const ACTIVITY_GUIDE_IMAGE = '/src/assets/images/activity_guide_parent_child_1792117204498.jpg';
export const CRAFT_KIT_IMAGE = '/src/assets/images/craft_assembly_kit_1792143071261.jpg';
export const HISTORICAL_CHESS_IMAGE = '/src/assets/images/historical_chess_strategy_1792143072209.jpg';
export const THEMATIC_UNIVERSES_BANNER = '/src/assets/images/thematic_universes_banner_1792143071842.jpg';

// Customer Support Official Contact (Eslam Arafa only)
export const OFFICIAL_SUPPORT_PHONE = '01001224375';
export const OFFICIAL_SUPPORT_WHATSAPP = '201001224375';

// Founders & Leadership: Names and roles only (No personal phones exposed)
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'marwa',
    name_ar: 'مروة قنديل',
    name_en: 'Marwa Kandil',
    role_ar: 'شريك مؤسس ومديرة تصميم وتطوير الألعاب والمنظومة التربوية',
    role_en: 'Co-Founder & Head of Toy Design & Educational Pedagogy',
    bio_ar: 'تقود ابتكار العوالم التفاعلية، وتصميم مناهج التدرج الحركي واليدوي للطفل والناشئين.',
    bio_en: 'Leads the creation of immersive play universes and hands-on motor skill development curves.'
  },
  {
    id: 'eslam',
    name_ar: 'إسلام عرفة',
    name_en: 'Eslam Arafa',
    role_ar: 'شريك مؤسس وإدارة العمليات وسلاسل الإمداد وخدمة العملاء',
    role_en: 'Co-Founder & Head of Operations, Supply Chain & Customer Care',
    bio_ar: 'يدير جودة الخامات المحلية والإنتاج اليدوي بالإسكندرية ومسؤول دعم العملاء الرسمي.',
    bio_en: 'Oversees artisanal manufacturing in Alexandria, sustainable supply chains, and customer relations.'
  },
  {
    id: 'ali',
    name_ar: 'علي كحلة',
    name_en: 'Ali Kohla',
    role_ar: 'شريك مؤسس وتطوير الأعمال والشراكات والنمو التجاري',
    role_en: 'Co-Founder & Head of Business Development & Strategic Growth',
    bio_ar: 'يركز على نشر ألعاب ماك في المدارس والمكتبات المصرية والتوسع في قنوات الشركات.',
    bio_en: 'Focuses on institutional presence across schools, cultural spaces, and corporate gifting.'
  }
];

// IMMERSIVE PLAY UNIVERSES & 3-TIER ADVENTURE PACKAGES (LEVEL 1: CHILDREN)
export const PLAY_UNIVERSES: PlayUniverse[] = [
  {
    id: 'bazaar_heritage',
    name_ar: 'عالم سوق المحبة والتراث الأصيل',
    name_en: 'Heritage Bazaar Play Universe',
    badge_ar: 'عالم الحكايات المصرية الشعبية',
    badge_en: 'Authentic Egyptian Bazaar World',
    theme_ar: 'التواصل الاجتماعي، الكرم والضيافة، والتعرف الحسي على الحياة الشعبية المصرية',
    theme_en: 'Hospitality, Social Empathy & Authentic Egyptian Heritage',
    description_ar: 'عالم تفاعلي غني بالألوان والأنسجة القطنية والخيامية، يغوص فيه الطفل داخل أزقة سوق شعبي دافئ ليتعلم كرم الضيافة ومشاركة الجيران وأدوار البيع والشراء الإيجابية بعيداً عن الشاشات.',
    description_en: 'An immersive cultural universe wrapped in vibrant cotton and khayamiya patterns, taking children on friendly neighborhood trade tales away from screens.',
    primaryAdventure: {
      id: 'adv-bazaar-1',
      universeId: 'bazaar_heritage',
      title_ar: 'مغامرة سر دكان الخان وسلة الخير',
      title_en: 'Adventure: Secret of the Old Khan & Basket of Goodness',
      subtitle_ar: 'مغامرة تفاعلية من 5 شخصيات تحيي حكايات دكاكين خان الخليلي وسوق العطارين بالإسكندرية',
      subtitle_en: 'A 5-character interactive quest breathing life into historic alleyway tales',
      summary_ar: 'تأخذ المغامرة الطفل في رحلة داخل سوق المحبة لجمع الخضار والفاكهة وإعداد مأدبة مشاركة للجيران. كل باكدج يفتح فصلاً أعمق من المغامرة:',
      summary_en: 'Children solve friendly market puzzles, gather produce, and share with peers. Each package tier unlocks deeper adventure lore:',
      charactersIncluded_ar: ['فرح (مساعدة السوق)', 'العم عطية (بائع التوابل)', 'سلوم الحمار الطيب', 'مهران الصائغ الصغير', 'أمينة الخياطة الماهرة'],
      charactersIncluded_en: ['Farah (Market Helper)', 'Uncle Attiya (Spice Merchant)', 'Salloum the Kind Donkey', 'Mehran the Young Goldsmith', 'Amina the Master Seamstress'],
      packages: {
        single: {
          id: 'single',
          scope_ar: 'جزء من المغامرة (شخصية واحدة)',
          scope_en: 'Part of the Adventure (1 Character)',
          title_ar: 'باكدج شخصية فرح الفردية',
          title_en: 'Farah Single Discovery Pack',
          description_ar: 'يحصل الطفل على شخصية فرح مع سلتها القماشية، وكارت مهمة "الفصل الأول من المغامرة" لاكتشاف سر دكان الخضار ومشاركة الجار.',
          description_en: 'Contains Farah with woven basket and Chapter 1 adventure quest card exploring the green stall.',
          price: 380,
          charactersCount: 1,
          boxTransformation_ar: 'العلبة الكرتونية تتحول إلى كشك دكان صغير لحفظ الدمية.',
          boxTransformation_en: 'Transforms into a mini single-stall storage den.',
          screenFreeBadge_ar: 'تفاعل حسي وتقوية المسك الدقيق',
          screenFreeBadge_en: 'Fine tactile motor grasp'
        },
        trio: {
          id: 'trio',
          scope_ar: 'جزء أكبر من المغامرة (3 شخصيات)',
          scope_en: 'Larger Part of the Adventure (3 Characters)',
          title_ar: 'باكدج أصدقاء السوق (3 شخصيات)',
          title_en: 'Bazaar Friends Trio Adventure Pack',
          description_ar: 'تضم 3 شخصيات رئيسية (فرح + الخضري الصغير + سلوم الحمار). تفتح جزءاً أكبر بكثير من مسار المغامرة مع حوارات تمثيلية ومسرح زقاق الخان.',
          description_en: 'Includes 3 core companions unlocking expanded chapters, dramatic dialogue prompts, and a 3D stall theater.',
          price: 960,
          charactersCount: 3,
          boxTransformation_ar: 'العلبة تتحول إلى مسرح ثلاثي الأبعاد لزقاق السوق الشعبي وديكور مميز للغرفة.',
          boxTransformation_en: 'Unfolds into an expanded market alley theater and bedroom decor.',
          screenFreeBadge_ar: 'تنمية الحوار المسرحي والتواصل اللفظي',
          screenFreeBadge_en: 'Dramatic roleplay & rich vocabulary'
        },
        full: {
          id: 'full_universe',
          scope_ar: 'إنهاء المغامرة بالكامل (المجموعة كاملة — جزء من العالم الكبير)',
          scope_en: 'Finish the Entire Adventure (Full Set — Part of the Universe)',
          title_ar: 'باكدج مغامرة سوق المحبة الكاملة (قفل المجموعة)',
          title_en: 'Complete Bazaar Heritage Adventure Box',
          description_ar: 'يجمع كافة شخصيات المغامرة الخمسة! وبتقفيل هذه المجموعة يكون الطفل قد أنهى مغامرة دكان الخان بالكامل التي هي جزء من عالم سوق المحبة، وحصل على وسام الإتمام استعداداً للمغامرة القادمة.',
          description_en: 'Brings together all 5 characters! By completing this set, the child completes the entire adventure diorama, ready for the next level.',
          price: 1350,
          charactersCount: 5,
          boxTransformation_ar: 'صندوق كرتوني فاخر مقوى يتحول لمسرح خان متكامل ووحدة تخزين دائمة لكافة ألعاب الطفل.',
          boxTransformation_en: 'Heirloom heavy-duty trunk transforming into a grand bazaar diorama and storage unit.',
          screenFreeBadge_ar: 'فخر الإنجاز الكامل وتقفيل المستوى الأول',
          screenFreeBadge_en: 'Supreme completion pride & Level 1 mastery'
        }
      }
    }
  },
  {
    id: 'desert_expedition',
    name_ar: 'عالم مغامرات الصحراء والواحات وسيوة',
    name_en: 'Desert & Siwa Oasis Play Universe',
    badge_ar: 'عالم الاستكشاف والطبيعة المصرية',
    badge_en: 'Egyptian Desert & Oasis Wildlife World',
    theme_ar: 'الفضول، الشجاعة، الارتباط بالحياة الفطرية، وحل الألغاز في الطبيعة',
    theme_en: 'Curiosity, Wildlife Conservation & Natural Wonder',
    description_ar: 'عالم تفاعلي ينقل الطفل إلى سحر الصحراء البيضاء وواحة سيوة. يكتشف الكائنات النادرة من خلال أقمشة كتانية ناعمة وتطريزات سيناوية وبدوية أصيلة تشجع روح الاستكشاف العلمي.',
    description_en: 'Transports young explorers to the golden sands of Siwa Oasis with authentic Sinai embroidery and tactile natural linen.',
    primaryAdventure: {
      id: 'adv-desert-1',
      universeId: 'desert_expedition',
      title_ar: 'مغامرة كنز واحة سيوة وثعلب الفنك مشمش',
      title_en: 'Adventure: The Treasure of Siwa Oasis & Fennec Mishmish',
      subtitle_ar: 'مغامرة استكشافية من 5 شخصيات لحل ألغاز بئر كليوباترا وجبال الملح',
      subtitle_en: 'A 5-character expedition uncovering natural wonders and desert navigation',
      summary_ar: 'يرافق الطفل ثعلب الفنك "مشمش" لاكتشاف سر نبع الماء في قلب الصحراء. مع كل باكدج يتسع نطاق الخريطة ومسار المغامرة:',
      summary_en: 'Follow Mishmish the Fennec across sand dunes. Each package tier unlocks expanded expedition terrain:',
      charactersIncluded_ar: ['مشمش (ثعلب الفنك الفضولي)', 'دهب (الجمل الصبور)', 'نور (غزال الواحات الرشيق)', 'صابر (دليل القوافل البدوي)', 'فهد (صقر الصحراء الحارس)'],
      charactersIncluded_en: ['Mishmish (Curious Fennec Fox)', 'Dahab (Patient Camel)', 'Noor (Siwa Gazelle)', 'Saber (Bedouin Caravan Guide)', 'Fahd (Desert Falcon Guardian)'],
      packages: {
        single: {
          id: 'single',
          scope_ar: 'جزء من المغامرة (شخصية واحدة)',
          scope_en: 'Part of the Adventure (1 Character)',
          title_ar: 'باكدج مشمش الفردي',
          title_en: 'Mishmish Single Discovery Pack',
          description_ar: 'يحصل الطفل على مشمش مع صديريته البدوية المطرزة، وبوصلة قماشية تمثل "الفصل الأول: نداء الكثبان".',
          description_en: 'Includes Mishmish with embroidered Sinai vest and Chapter 1 fabric compass challenge.',
          price: 340,
          charactersCount: 1,
          boxTransformation_ar: 'العلبة تتحول إلى خيمة بدوية مصغرة لحفظ اللعبة.',
          boxTransformation_en: 'Transforms into a cozy mini Bedouin shelter.',
          screenFreeBadge_ar: 'استكشاف حسي وبناء الفضول الطبيعي',
          screenFreeBadge_en: 'Sensory nature exploration'
        },
        trio: {
          id: 'trio',
          scope_ar: 'جزء أكبر من المغامرة (3 شخصيات)',
          scope_en: 'Larger Part of the Adventure (3 Characters)',
          title_ar: 'باكدج استكشاف الصحراء (3 شخصيات)',
          title_en: 'Desert Safari Trio Expedition Pack',
          description_ar: 'يضم 3 شخصيات (مشمش + دهب الجمل + غزال الواحات). تفتح للطفل جزءاً أكبر بكثير من المغامرة وخريطة سيوة الملونة والتعاون عبر الرمال.',
          description_en: 'Includes 3 characters opening multi-stop desert routes, Siwa map diorama, and team-solving challenges.',
          price: 880,
          charactersCount: 3,
          boxTransformation_ar: 'العلبة تتحول إلى مشهد واحة متكامل ونخيل كرتوني وديكور ساحر للغرفة.',
          boxTransformation_en: 'Unfolds into an oasis diorama with cardboard date palms for room display.',
          screenFreeBadge_ar: 'تفكير استكشافي وحل مشكلات بدون شاشات',
          screenFreeBadge_en: 'Spatial inquiry away from screens'
        },
        full: {
          id: 'full_universe',
          scope_ar: 'إنهاء المغامرة بالكامل (المجموعة كاملة — جزء من العالم الكبير)',
          scope_en: 'Finish the Entire Adventure (Full Set — Part of the Universe)',
          title_ar: 'باكدج مغامرة الواحة والصحراء الكبرى (قفل المجموعة)',
          title_en: 'Complete Siwa Desert Adventure Universe Box',
          description_ar: 'المجموعة الكاملة (5 شخصيات استكشافية)! بقفل المجموعة يحل الطفل لغز كنز سيوة وينهي المغامرة بالكامل التي هي جزء من عالم الصحراء، وينال وسام المستكشف الكبير.',
          description_en: 'All 5 characters assembled to solve the grand Siwa treasure mystery, completing the full adventure chapter.',
          price: 1250,
          charactersCount: 5,
          boxTransformation_ar: 'صندوق كرتوني فاخر يتحول لمجسم مخيم صحراوي متكامل ووحدة تخزين لألعاب الطفل.',
          boxTransformation_en: 'Permanent heavy-duty camp display trunk and toy storage chest.',
          screenFreeBadge_ar: 'إنجاز استكشافي تام وإتقان المستوى الأول',
          screenFreeBadge_en: 'Full completion accomplishment & Level 1 badge'
        }
      }
    }
  },
  {
    id: 'historical_civilization',
    name_ar: 'عالم وادي النيل وحضارة مصر الخالدة',
    name_en: 'Nile Valley & Ancient Lore Universe',
    badge_ar: 'عالم الحكمة والتاريخ والهوية',
    badge_en: 'Eternal Egyptian Civilization World',
    theme_ar: 'الاعتزاز بالهوية، الحكمة والوفاء، والتآزر الحركي في صياغة الحكايات',
    theme_en: 'Cultural Pride, Ancient Wisdom & Strategic Insight',
    description_ar: 'عالم ممتد من ضفاف النيل يربط بين حيوانات النيل الأسطورية وحكمة الفراعنة، ممهداً لانتقال الطفل من المستوى الأول الحسي إلى المستويات الحرفية والاستراتيجية اللاحقة.',
    description_en: 'A bridge between Nile wildlife legends and timeless wisdom, connecting early sensory discovery to hands-on craft mastery.',
    primaryAdventure: {
      id: 'adv-nile-1',
      universeId: 'historical_civilization',
      title_ar: 'مغامرة حراس النيل وفيضان الخير السنوي',
      title_en: 'Adventure: Guardians of the Nile & The Golden Inundation',
      subtitle_ar: 'مغامرة تفاعلية من 5 شخصيات تروي سر تدفق الخير من منابع النيل لعروس البحر',
      subtitle_en: 'A 5-character interactive quest along the sacred riverbanks',
      summary_ar: 'يقود فرس النهر الطيب "حابي" ورفاقه رحلة مائية لحماية ضفاف النيل. تمنح الباكدجات المتدرجة مسارات أعمق للمغامرة:',
      summary_en: 'Hapi the Hippo and fellow river friends protect the Nile banks. Progressive package tiers unveil deeper water lore:',
      charactersIncluded_ar: ['حابي (فرس النهر الطيب)', 'كروان النيل المغرد', 'تمساح الضفاف الحكيم', 'لوتس زهرة النيل الحارسة', 'نورس الإسكندرية الجوال'],
      charactersIncluded_en: ['Hapi (Kind Nile Hippo)', 'Nile Curlew Singer', 'Wise River Crocodile', 'Lotus Flower Guardian', 'Alexandria Coastal Gull'],
      packages: {
        single: {
          id: 'single',
          scope_ar: 'جزء من المغامرة (شخصية واحدة)',
          scope_en: 'Part of the Adventure (1 Character)',
          title_ar: 'طقم شخصية حابي الفردي',
          title_en: 'Hapi Single Guardian Discovery Pack',
          description_ar: 'شخصية حابي القماشية مع كارت "الفصل الأول: لغز برديات النيل".',
          description_en: 'Hapi plush companion with Chapter 1 papyrus riddle card.',
          price: 420,
          charactersCount: 1,
          boxTransformation_ar: 'العلبة تتحول لمرسى نهري صغير لحفظ اللعبة.',
          boxTransformation_en: 'Transforms into a mini river dock shelf.',
          screenFreeBadge_ar: 'تنمية الخيال التاريخي واللمس الهادئ',
          screenFreeBadge_en: 'Calm tactile historical immersion'
        },
        trio: {
          id: 'trio',
          scope_ar: 'جزء أكبر من المغامرة (3 شخصيات)',
          scope_en: 'Larger Part of the Adventure (3 Characters)',
          title_ar: 'باكدج حراس النهر الثلاثي (3 شخصيات)',
          title_en: 'Nile Guardians Trio Pack',
          description_ar: 'يضم 3 شخصيات تفتح جزءاً أكبر بكثير من مغامرة النيل ومسرح مجرى النهر المتدفق.',
          description_en: '3 river companions unlocking expanded chapters, river map puzzles, and flowing water diorama.',
          price: 1080,
          charactersCount: 3,
          boxTransformation_ar: 'العلبة تتحول إلى مجسم ضفاف نهر النيل وبرديات ديكورية للغرفة.',
          boxTransformation_en: 'Unfolds into a lush Nile riverbank diorama and bedroom decor.',
          screenFreeBadge_ar: 'تآزر حركي وتفكير بيئي هادف',
          screenFreeBadge_en: 'Eco-conscious hands-on play'
        },
        full: {
          id: 'full_universe',
          scope_ar: 'إنهاء المغامرة بالكامل (المجموعة كاملة — جزء من العالم الكبير)',
          scope_en: 'Finish the Entire Adventure (Full Set — Part of the Universe)',
          title_ar: 'باكدج مغامرة حراس النيل الكبرى (قفل المجموعة)',
          title_en: 'Complete Nile Guardians Adventure Universe Box',
          description_ar: 'كافة شخصيات المغامرة الخمسة! تقفيل المجموعة يكمل المغامرة بالكامل التي هي جزء من عالم وادي النيل، ويفتح بوابة المستوى الثاني (صناعة وخياطة الأطقم اليدوية).',
          description_en: 'All 5 characters uniting to finish the Nile adventure saga, unlocking progression into Level 2 craft kits.',
          price: 1650,
          charactersCount: 5,
          boxTransformation_ar: 'صندوق مقوى فاخر يتحول لمسرح نيلي عظيم ووحدة تخزين راقية.',
          boxTransformation_en: 'Grand river diorama trunk and decorative toy storage.',
          screenFreeBadge_ar: 'إنهاء المغامرة كاملة وبوابة الانتقال لليفل 2',
          screenFreeBadge_en: 'Complete adventure closure & Level 2 gateway'
        }
      }
    }
  }
];

export const PRODUCTS: Product[] = [
  // LINE 1: CHILDREN (2 - 6 Years)
  {
    id: 'farah-market-helper',
    name_ar: 'فرح — مساعدة السوق الشعبية',
    name_en: 'Farah — The Market Helper',
    line: 'children',
    universe: 'bazaar_heritage',
    skillLevel: 'level_1_starter',
    age_range: '2 - 6 سنوات / 2 - 6 Years',
    tagline_ar: 'المشاركة، الكرم، والتفاعل الحسي اللطيف',
    tagline_en: 'Sharing, Egyptian Hospitality & Sensory Tactile Play',
    description_ar: 'دمية قماشية تفاعلية تعلّم الطفل قيم المشاركة وكرم الضيافة المصري. تأتي مع سلة تسوق قماشية ملونة بقطع خضار وفاكهة قابلة للفك وإعادة التركيب بأصابع الطفل الصغيرة.',
    description_en: 'A sensory fabric companion teaching children sharing and cordial generosity. Features a removable soft woven market basket with tactile fruit pieces.',
    assemblyExperience_ar: 'تجربة تفاعلية لطيفة حيث يقوم الطفل بملء السلة وترتيب الخضار وتسمية الأطعمة، مع بطاقة مهام يومية للمشاركة الأسرية.',
    assemblyExperience_en: 'Hands-on interactive sorting where children name fruits, pack the basket, and practice friendly social sharing.',
    boxFeature_ar: 'الصندوق الكرتوني مصمم ليتحول إلى "دكان خضار وديكور للغرفة" بدون أي أكياس بلاستيكية.',
    boxFeature_en: 'The packaging box transforms into a fold-out market stall and cute bedroom decor.',
    price_retail: 380,
    price_wholesale: 240,
    status: 'available',
    image: '/src/assets/images/educational_toy_farah_1792117202731.jpg',
    bundles: [
      { id: 'single', name_ar: 'باكدج شخصية فرح الفردية', name_en: 'Farah Single Character Kit', adventureScope_ar: 'جزء من المغامرة (شخصية واحدة)', adventureScope_en: 'Part of the Adventure (1 Character)', description_ar: 'تشمل الدمية وسلة الخضار ودليل مهام الفصل الأول من المغامرة', description_en: 'Includes doll, fabric basket & Chapter 1 adventure quest', price: 380, itemCount: 1 },
      { id: 'trio', name_ar: 'باكدج أصدقاء السوق (3 شخصيات)', name_en: 'Bazaar Friends Trio Bundle', adventureScope_ar: 'جزء أكبر من المغامرة (3 شخصيات)', adventureScope_en: 'Larger Part of the Adventure (3 Characters)', description_ar: 'فرح + الخضري الصغير + سلوم الحمار مع مسرح زقاق الخان لفتح مسارات أوسع', description_en: 'Farah + Mini Greengrocer + Salloum Donkey with expanded alley stage', price: 960, itemCount: 3 },
      { id: 'full_universe', name_ar: 'باكدج مغامرة سوق المحبة الكبرى (قفل المجموعة)', name_en: 'Full Bazaar Heritage Adventure Box', adventureScope_ar: 'إنهاء المغامرة كاملة (المجموعة كاملة — جزء من العالم الكبير)', adventureScope_en: 'Finish the Entire Adventure (Full Set — Part of the Universe)', description_ar: 'الكوليكشن كاملاً (5 شخصيات) لإنهاء المغامرة بالكامل مع مسرح الدكان ووحدة التخزين الدائمة', description_en: 'Full 5-character set to finish the complete adventure with diorama trunk', price: 1350, itemCount: 5 }
    ],
    cultural_elements_ar: ['ثوب بنقوش خيامية مصرية', 'سلة سوق شعبية مضفرة', 'ملامح مطرزة يدوياً بالخيوط بدون أزرار'],
    cultural_elements_en: ['Egyptian Khayamiya-inspired woven dress', 'Braided market basket', '100% embroidered safe facial details'],
    materials_ar: ['قطن مصري ناعم 100%', 'كتان محلي معاد تدويره', 'حشوة مضادة للحساسية'],
    materials_en: ['100% combed Egyptian cotton', 'Sustainable blended linen', 'Hypoallergenic washable stuffing'],
    care_instructions_ar: 'غسيل آلي بماء بارد داخل كيس شبكي. تجفف على سطح مستوٍ.',
    care_instructions_en: 'Machine wash on cold gentle cycle. Lay flat to dry.',
    stock_batch_count: 120,
    screenFreeBenefits_ar: ['فصل الطفل التام عن الهاتف والتابلت', 'تقوية عضلات الأصابع والمسك الدقيق', 'تنمية الخيال الاجتماعي والمفردات'],
    screenFreeBenefits_en: ['Complete digital detox from screens', 'Fine motor pincer grasp strengthening', 'Empathetic social imaginative vocabulary']
  },
  {
    id: 'mishmish-fennec-fox',
    name_ar: 'مشمش — ثعلب الفنك الصحراوي',
    name_en: 'Mishmish — The Desert Fennec Fox',
    line: 'children',
    universe: 'desert_expedition',
    skillLevel: 'level_1_starter',
    age_range: '2 - 6 سنوات / 2 - 6 Years',
    tagline_ar: 'الفضول والاستكشاف والشجاعة في الطبيعة',
    tagline_en: 'Curiosity, Desert Exploration & Nature Love',
    description_ar: 'شخصية قماشية تمثل ثعلب الفنك المصري المميز بآذانه الواسعة وصديريته البدوية. يرافق الأطفال في رحلات التخيل حول طبيعة مصر الساحرة وصحرائها البيضاء.',
    description_en: 'An authentic Egyptian desert fennec plush wearing an embroidered Sinai vest. Inspires natural curiosity and brave exploration.',
    assemblyExperience_ar: 'الطفل يلبس مشمش الصديرية المطرزة ويركب بوصلة قماشية صغيرة، مع بطاقة استكشاف وكنز مخفي داخل الغرفة.',
    assemblyExperience_en: 'Children dress Mishmish in his vest and attach his fabric compass, following indoor clue cards.',
    boxFeature_ar: 'العلبة الكرتونية تفتح لتشكل "خيمة صحراوية بدوية" تحتضن اللعبة وتعمل كوحدة حفظ أنيقة.',
    boxFeature_en: 'Unfolds into a cozy Bedouin tent that doubles as an organized toy storage den.',
    price_retail: 340,
    price_wholesale: 215,
    status: 'available',
    image: '/src/assets/images/character_toy_mishmish_1792117203417.jpg',
    bundles: [
      { id: 'single', name_ar: 'باكدج مشمش الفردي', name_en: 'Mishmish Single Kit', adventureScope_ar: 'جزء من المغامرة (شخصية واحدة)', adventureScope_en: 'Part of the Adventure (1 Character)', description_ar: 'دمية مشمش مع الصديرية التراثية وبوصلة الفصل الأول', description_en: 'Mishmish doll with embroidered vest and compass quest', price: 340, itemCount: 1 },
      { id: 'trio', name_ar: 'باكدج استكشاف الصحراء (3 شخصيات)', name_en: 'Desert Expedition Trio Bundle', adventureScope_ar: 'جزء أكبر من المغامرة (3 شخصيات)', adventureScope_en: 'Larger Part of the Adventure (3 Characters)', description_ar: 'مشمش + دهب الجمل + غزال الواحات مع خريطة سيوة ومسرح الخيمة', description_en: 'Mishmish + Camel + Gazelle with Siwa map & tent stage', price: 880, itemCount: 3 },
      { id: 'full_universe', name_ar: 'باكدج مغامرة الواحة والصحراء الكبرى (قفل المجموعة)', name_en: 'Full Desert & Oasis Universe Box', adventureScope_ar: 'إنهاء المغامرة كاملة (المجموعة كاملة — جزء من العالم الكبير)', adventureScope_en: 'Finish the Entire Adventure (Full Set — Part of the Universe)', description_ar: 'المجموعة الكاملة (5 شخصيات) لإنهاء مغامرة سيوة بالكامل مع مجسم الواحة والخيمة الكرتونية', description_en: 'Complete 5-character set to finish the full adventure with oasis backdrop', price: 1250, itemCount: 5 }
    ],
    cultural_elements_ar: ['صديرية بتطريز سيناوي بدوي أصيل', 'آذان كبيرة تعبر عن ثعلب صحراء مصر', 'قصة مصورة عن واحة سيوة'],
    cultural_elements_en: ['Sinai & Bedouin geometric embroidery', 'Iconic Egyptian desert fennec ears', 'Bilingual Siwa adventure tale'],
    materials_ar: ['كتان ناعم معالج', 'خيوط قطن طبيعية', 'حشوة صديقة للبيئة'],
    materials_en: ['Treated soft natural linen', 'Organic cotton threads', 'Eco certified fiberfill'],
    care_instructions_ar: 'غسيل لطيف بماء بارد وتجفيف هوائي.',
    care_instructions_en: 'Gentle cold wash and natural air dry.',
    stock_batch_count: 145,
    screenFreeBenefits_ar: ['بديل صحي يبعد الطفل عن الألعاب الإلكترونية', 'تنمية حاسة اللمس والتكوين المجسم', 'بناء ارتباط إيجابي بالهوية والطبيعة'],
    screenFreeBenefits_en: ['Screen-free sensory calm', 'Tactile spatial development', 'Pride in native wildlife and heritage']
  },

  // LINE 2: JUNIORS / BOYS & GIRLS (7 - 14 Years) — Interactive Assembly & Skill Journey
  {
    id: 'hapi-hippo-craft-kit',
    name_ar: 'طقم حابي فرس النهر — التجميع والخياطة اليدوية',
    name_en: 'Hapi the Nile Hippo — Semi-Assembled Craft & Stitch Kit',
    line: 'juniors',
    universe: 'bazaar_heritage',
    skillLevel: 'level_2_creator',
    age_range: '7 - 14 سنة / 7 - 14 Years',
    tagline_ar: 'الطفل يصنع لعبته بنفسه: مهارة، فخر، وتآزر حركي',
    tagline_en: 'Build Your Own Toy: Craft Mastery, Motor Precision & Pride',
    description_ar: 'تجربة تفاعلية متكاملة! اللعبة تصل "نصف جاهزة" ومجهزة بفتحات خياطة مسبقة، وإبرة خشبية غير حادة آمنة تماماً، وخيوط قطنية ملونة. يقوم الفتى أو الفتاة بتجميع القطع، حشوها، وتطريز الرقع بنفسه مما يمنحه إحساساً استثنائياً بالإنجاز والملكية.',
    description_en: 'An empowering hands-on maker kit! Arrives semi-assembled with pre-punched holes, a child-safe blunt wooden needle, and vibrant cotton cords. Kids stitch, stuff, and personalize their own companion, instilling supreme pride of ownership.',
    assemblyExperience_ar: 'كتيب إرشادي مصور خطوة بخطوة باللغتين مع فيديو تفاعلي، يسمح للطفل بقضاء 45 إلى 60 دقيقة من التركيز الذهني الكامل بعيداً عن الشاشات.',
    assemblyExperience_en: 'Bilingual illustrated step-by-step card guide and video tutorial, offering 45-60 minutes of deep creative focus.',
    boxFeature_ar: 'الصندوق الكرتوني يتحول إلى منصة فنية دائمة للعرض تحمل اسم صانع اللعبة وتاريخ إنجازها.',
    boxFeature_en: 'The packaging doubles as an engraved trophy display stand showcasing the young maker’s name.',
    price_retail: 420,
    price_wholesale: 270,
    status: 'available',
    image: '/src/assets/images/craft_assembly_kit_1792143071261.jpg',
    bundles: [
      { id: 'single', name_ar: 'طقم صناعة حابي الفردي', name_en: 'Hapi Single Maker Kit', adventureScope_ar: 'طقم صناعة فردي (المستوى 2)', adventureScope_en: 'Single Maker Kit (Level 2)', description_ar: 'يشمل كافة الخامات والإبرة الخشبية الآمنة والدليل', description_en: 'Includes pre-punched fabric, blunt wooden needle & stuffing', price: 420, itemCount: 1 },
      { id: 'trio', name_ar: 'باكدج ورشة الإبداع اليدوي (3 أطقم صناعة)', name_en: 'Hands-on Makers Trio Bundle', adventureScope_ar: 'ورشة الأشقاء (3 أطقم صناعة)', adventureScope_en: 'Makers Trio Pack (3 Kits)', description_ar: 'طقم حابي + طقم الجمل + طقم الفيل مع بطاقات المستوى الثاني', description_en: 'Hapi Hippo + Camel + Elephant assembly kits with level 2 badge', price: 1080, itemCount: 3 },
      { id: 'full_universe', name_ar: 'حقيبة الحِرفي الصغير الشاملة (المجموعة الكاملة)', name_en: 'Young Artisan Master Craft Universe', adventureScope_ar: 'حقيبة الحِرفي الشاملة (5 أطقم)', adventureScope_en: 'Master Craft Trunk (5 Kits)', description_ar: '5 شخصيات للتجميع + صندوق أدوات خشبية كامل + شهادة صانع معتمدة', description_en: '5 assembly kits + wooden maker tools + signed Certificate of Craft', price: 1650, itemCount: 5 }
    ],
    cultural_elements_ar: ['مستوحى من فرس النهر "حابي" رمز الخير في نهر النيل', 'أقمشة كتان مصرية متينة', 'إبرة خشبية مستدامة وآمنة'],
    cultural_elements_en: ['Inspired by Ancient Nile guardian Hapi', 'Durable Egyptian woven canvas', 'Eco polished wooden safety needle'],
    materials_ar: ['أقمشة كتان مقصوصة بدقة ليزر آمنة', 'خيوط قطن غزل مصري', 'ألياف حشو طبيعية'],
    materials_en: ['Laser pre-punched cotton linen pieces', 'Natural Egyptian embroidery floss', 'Soft hypoallergenic polyfill'],
    care_instructions_ar: 'قابلة للغسيل بعد الانتهاء من التجميع. متينة وتدوم طويلاً.',
    care_instructions_en: 'Fully washable after assembly completion. Heavy-duty seams.',
    stock_batch_count: 95,
    screenFreeBenefits_ar: ['تطوير التآزر البصري الحركي والتوافق العصبي العضلي', 'تعلم مهارة يدوية عملية تدوم مدى الحياة (الخياطة والتجميع)', 'إحساس الفخر بالملكية: "أنا صنعت هذه اللعبة بيدي!"'],
    screenFreeBenefits_en: ['Hand-eye spatial coordination mastery', 'Lifelong practical textile craft skill', 'Immense sense of accomplishment: "I built this myself!"']
  },

  // LINE 3: ADULTS / MEN & WOMEN / COLLECTORS (15+ Years) — Historical Strategy & Collectors
  {
    id: 'historical-egyptian-chess',
    name_ar: 'الشطرنج التاريخي والحضاري المصري — طبعة الهوية',
    name_en: 'The Egyptian Historical & Civilization Chess — Heritage Collector Edition',
    line: 'adults',
    universe: 'historical_civilization',
    skillLevel: 'level_3_master',
    age_range: '15+ سنة / 15+ Years & Adults',
    tagline_ar: 'استراتيجية، هيبة التاريخ، وتأمل ذهني خالص بعيداً عن الشاشات',
    tagline_en: 'Tactical Mastery, Civilizational Depth & Pure Mental Immersion',
    description_ar: 'تحفة فنية ولعبة استراتيجية تجمع الكبار والمحترفين وعشاق التاريخ! لوحة شطرنج فاخرة من الكتان المصري المنقوش بالرموز التاريخية مع 32 قطعة منحوتة ومطعمة تعبر عن قادة التاريخ المصري وأبطال ملحمة قادش وحماة الإسكندرية والقاهرة.',
    description_en: 'A strategic masterpiece and collector universe for teens, adults, and thinkers! Features a premium textured linen board printed with historic cartouches and 32 hand-sculpted pieces representing Egyptian civilizations.',
    assemblyExperience_ar: 'يأتي مع كتاب تاريخي ثنائي اللغة يروي السير الذاتية لكل قطعة، مع بطاقات تكتيك استراتيجي مستوحاة من معارك الشرق التاريخية.',
    assemblyExperience_en: 'Accompanied by an illustrated historical companion book detailing each commander, piece origins, and tactical battle puzzles.',
    boxFeature_ar: 'صندوق خشبي مبطن بالكتان الفاخر يصلح كقطعة ديكور راقية للمكاتب والمنازل ووحدة حفظ فاخرة.',
    boxFeature_en: 'Heirloom display storage case lined in Egyptian linen, designed as an executive living room showcase piece.',
    price_retail: 890,
    price_wholesale: 590,
    status: 'available',
    image: '/src/assets/images/historical_chess_strategy_1792143072209.jpg',
    bundles: [
      { id: 'single', name_ar: 'طبعة المقتني الكلاسيكية (لوحة و32 قطعة)', name_en: 'Heritage Collector Chess Set', adventureScope_ar: 'طبعة المقتني الفردية (المستوى 3)', adventureScope_en: 'Heritage Collector Edition', description_ar: 'لوحة كتانية فاخرة + 32 قطعة منحوتة + كتاب التاريخ', description_en: 'Linen battle board + 32 sculpted pieces + history book', price: 890, itemCount: 1 },
      { id: 'trio', name_ar: 'طبعة الشطرنج + كتاب الألغاز الاستراتيجية', name_en: 'Grandmaster Tactics & Board Bundle', adventureScope_ar: 'باقة الماستر والتكتيك', adventureScope_en: 'Grandmaster Tactics Bundle', description_ar: 'الشطرنج + رقعة سفر إضافية من الكتان + بطاقات 50 لغزاً تاريخياً', description_en: 'Chess set + extra linen travel board + 50 historical puzzle cards', price: 1190, itemCount: 2 },
      { id: 'full_universe', name_ar: 'مجموعة الحضارات الكبرى الشاملة (Executive Edition)', name_en: 'Civilizations Executive Universe Box', adventureScope_ar: 'طبعة المقتني الرئاسية الشاملة', adventureScope_en: 'Executive Civilizations Box', description_ar: 'صندوق خشبي مذهب + قطعتين ملكيتين إضافيتين + شهادة ترقيم مقتني', description_en: 'Heirloom collector wood case with brass inlays & numbered plaque', price: 1750, itemCount: 3 }
    ],
    cultural_elements_ar: ['شخصيات تاريخية تمثل الحضارة المصرية عبر العصور', 'لوحة كتان منقوشة بزخارف الإسكندرية والفرعونية', 'سرد تاريخي موثق ومصاغ بأسلوب راقٍ'],
    cultural_elements_en: ['Historical figures spanning Egyptian golden eras', 'Textured linen board with antique cartouche inlays', 'Archival historical storytelling and game mechanics'],
    materials_ar: ['خشب طبيعي صلب مصقول', 'كتان مصري ثقيل عالي الكثافة', 'طلاءات نباتية عتيقة'],
    materials_en: ['Hand-finished solid wood', 'Heavy-weight Egyptian woven linen', 'Antique patina vegetable finishes'],
    care_instructions_ar: 'تنظف اللوحة بفرشاة ناعمة جافة. تحفظ القطع داخل الصندوق الخشبي.',
    care_instructions_en: 'Dust board with soft dry brush. Store in dedicated lined wooden case.',
    stock_batch_count: 50,
    screenFreeBenefits_ar: ['جلسات تفكير هادئة وتخطيط استراتيجي لتقليل التوتر الرقمي', 'تواصل اجتماعي مباشر بين الأصدقاء والآباء والأبناء', 'تنشيط المنطق وسرعة البديهة والتركيز العميق'],
    screenFreeBenefits_en: ['Deep mental immersion and cognitive stress relief from devices', 'Direct face-to-face intellectual bonding between generations', 'Sharpened strategic foresight and spatial geometry intuition']
  }
];

export const INITIAL_ORDERS: Order[] = [
  {
    id: 'MAK-2601',
    customerName: 'منى عبد الرحمن (Mona)',
    customerPhone: '+20 100 234 5678',
    deliveryAddress: 'حي لوران، الإسكندرية',
    shippingCity: 'الإسكندرية',
    shippingCost: 30,
    paymentMethod: 'cash_on_delivery',
    paymentStatus: 'pending_cod',
    items: [
      { productId: 'farah-market-helper', productName: 'فرح — مساعدة السوق', bundleName: 'باكدج شخصية فردية', quantity: 1, unitPrice: 380 }
    ],
    total: 410,
    channel: 'online_store',
    status: 'confirmed',
    createdAt: '2026-10-15 14:20',
    language: 'ar',
    notes: 'تغليف هدية للأطفال مع بطاقة إهداء'
  },
  {
    id: 'MAK-2602',
    customerName: 'Karim Mostafa (كريم)',
    customerPhone: '+20 111 876 5432',
    deliveryAddress: 'سموحة، الإسكندرية',
    shippingCity: 'Alexandria',
    shippingCost: 30,
    paymentMethod: 'card',
    paymentStatus: 'paid',
    items: [
      { productId: 'hapi-hippo-craft-kit', productName: 'طقم حابي فرس النهر التجميعي', bundleName: 'Hapi Maker Kit', quantity: 1, unitPrice: 420 }
    ],
    total: 450,
    channel: 'online_store',
    status: 'confirmed',
    createdAt: '2026-10-15 16:45',
    language: 'en',
    notes: 'Paid online via Visa card'
  },
  {
    id: 'MAK-2603',
    customerName: 'د. طارق المنشاوي (Tarek)',
    customerPhone: '+20 102 334 5566',
    deliveryAddress: 'كفر عبده، الإسكندرية',
    shippingCity: 'الإسكندرية',
    shippingCost: 0,
    paymentMethod: 'card',
    paymentStatus: 'paid',
    items: [
      { productId: 'historical-egyptian-chess', productName: 'الشطرنج التاريخي والحضاري المصري', bundleName: 'طبعة المقتني الكلاسيكية', quantity: 1, unitPrice: 890 }
    ],
    total: 890,
    channel: 'online_store',
    status: 'delivered',
    createdAt: '2026-10-14 11:00',
    language: 'ar',
    notes: 'هدية مكتبية فاخرة'
  }
];

export const INITIAL_QUOTES: QuoteRequest[] = [
  {
    id: 'Q-901',
    businessName: 'مكتبة ديوان — الزمالك والإسكندرية',
    businessType: 'shop',
    contactName: 'أحمد الشريف',
    phone: '+20 102 998 7766',
    email: 'hassan@diwanstores.eg',
    farahQty: 30,
    mishmishQty: 30,
    totalUnits: 60,
    estimatedTotal: 13650,
    notes: 'عرض في ركن المجموعات التفاعلية التعليمية',
    status: 'quoted',
    createdAt: '2026-10-15 09:30',
    validUntil: '2026-10-25'
  }
];

export const INITIAL_CUSTOM_ORDERS: CustomOrder[] = [
  {
    id: 'CORP-401',
    companyName: 'Vodafone Egypt',
    contactName: 'Nadine Farouk',
    phone: '+20 100 900 1122',
    toyChoice: 'mishmish',
    quantity: 120,
    customText: 'Vodafone Screen-Free Challenge 2026',
    placement: 'vest',
    estimatedCost: 31200,
    status: 'mockup_approved',
    createdAt: '2026-10-14 17:00'
  }
];

export const ACTIVITY_GUIDE_ITEMS: ActivityGuideItem[] = [
  {
    id: 'act-1',
    title_ar: 'النشاط الأول: محاكاة سوق المحبة والعطاء',
    title_en: 'Activity 1: The Giving Market Roleplay',
    age: '3 - 6 سنوات / 3 - 6 Years',
    duration: '15 دقيقة / 15 mins',
    objective_ar: 'تعليم الطفل فكرة تبادل الأشياء بلطف ومراعاة احتياجات الآخرين قبل الأخذ.',
    objective_en: 'Teach children friendly reciprocity, listening to peers, and considerate sharing.',
    steps_ar: [
      'ضع سلة "فرح" القماشية في المنتصف مع حبات الخضار والفاكهة.',
      'يقوم الطفل بدور البائع الصغير ويقوم الوالد بدور الجار أو الصديق.',
      'يتعلم الطفل عبارات التحية المصرية الأصيلة: "صباح الفل"، "تفضل بالهنا".',
      'طرح سؤال على الطفل: "ماذا لو جاء صديقك ولم يكن معه نقود؟ كيف ستشاركه طعامك؟"'
    ],
    steps_en: [
      'Place Farah’s fabric basket in the center with the soft fruit pieces.',
      'The child takes the role of the warm market shopkeeper while the parent acts as a neighbor.',
      'Practice authentic warm greetings like "Sabah el-khair" (Good morning) and offering items gently.',
      'Prompt: "What if a friend comes by without coins? How can we share with love?"'
    ]
  },
  {
    id: 'act-2',
    title_ar: 'النشاط الثاني: ورشة الخياطة الآمنة والتجميع اليدوي',
    title_en: 'Activity 2: Safe Stitching & Motor Assembly Workshop',
    age: '7 - 14 سنة / 7 - 14 Years',
    duration: '45 دقيقة / 45 mins',
    objective_ar: 'تدريب اليدين على التآزر البصري الحركي، التركيز، وتجربة فخر إتمام اللعبة بنفسه.',
    objective_en: 'Fostering fine motor precision, patience, and supreme pride in building one’s own companion.',
    steps_ar: [
      'فرد قطع القماش المقصوصة مسبقاً وتجهيز الإبرة الخشبية الآمنة غير الحادة.',
      'تمرير الخيط الملون خطوة بخطوة باتباع الأرقام على الكارت الإرشادي.',
      'حشو الدمية بالألياف الطبيعية وإغلاق الغرزة الأخيرة بعقدة محكمة.',
      'كتابة اسم الطفل وتاريخ الصنع على شريط الفخر المرفق.'
    ],
    steps_en: [
      'Lay out the pre-punched fabric patterns and thread the safe wooden needle.',
      'Follow numbered stitch points on the illustrated guide cards.',
      'Fill with cloud-soft hypoallergenic stuffing and secure the final knot.',
      'Sign the maker tag and attach it proudly to the display box.'
    ]
  },
  {
    id: 'act-3',
    title_ar: 'النشاط الثالث: معركة الشطرنج والتكتيك الحضاري',
    title_en: 'Activity 3: The Historical Strategy Duel',
    age: '15+ سنة والكبار / 15+ Years & Adults',
    duration: '30 - 60 دقيقة / 30 - 60 mins',
    objective_ar: 'التفكير التكتيكي العميق، تنشيط الذهن، والابتعاد عن التوتر والشاشات.',
    objective_en: 'Strategic deep thinking, mental agility, and peaceful digital detox.',
    steps_ar: [
      'فرد اللوحة الكتانية المنقوشة وترتيب القطع التاريخية حسب الرتب والأدوار.',
      'اختيار لغز استراتيجي من بطاقات معركة قادش التاريخية لمحاولة حله في 10 نقلات.',
      'لعب جولة شطرنج تقليدية هادئة مع صديق أو أحد أفراد الأسرة مع فنجان قهوة أو شاي.'
    ],
    steps_en: [
      'Unfurl the textured linen board and position commanders in classical rank order.',
      'Select a historical battle puzzle card to solve in 10 moves or fewer.',
      'Enjoy an unhurried face-to-face game over a warm cup of mint tea.'
    ]
  }
];

export const SKILL_COURSE_LEVELS: SkillCourseLevel[] = [
  {
    id: 'level_1_starter',
    levelNumber: 1,
    title_ar: 'المستوى 1: مبتدئ من الصفر (أصابع، حواس، ومفردات)',
    title_en: 'Level 1: Absolute Starter (Sensory, Touch & Basics)',
    subtitle_ar: 'تأسيس التآزر الحركي، استكشاف الأنسجة الطبيعية، وقيم المشاركة',
    subtitle_en: 'Fine motor grasp, natural textures & social sharing empathy',
    targetAge: '2 - 6 سنوات / 2 - 6 Years',
    curriculumScope_ar: 'منهاج تفاعلي يعتمد على ملامسة الأنسجة القطنية والكتانية، فك وتثبيت الملحقات القماشية، ترتيب السلال، وتمثيل الأدوار الاجتماعية الدافئة.',
    curriculumScope_en: 'Foundational tactile play with 100% natural Egyptian cotton, friendly fruit classification, and warm social roleplay.',
    skillsAcquired_ar: [
      'التحكم الدقيق في عضلات الأصابع ومسك الأشياء',
      'التعرف الحسي على الأنسجة الطبيعية (كتان، قطن مصري)',
      'التعبير اللغوي والمفردات التراثية بدون شاشات',
      'قيم الكرم والمشاركة في العالم الحقيقي'
    ],
    skillsAcquired_en: [
      'Pincer grasp & fine motor coordination',
      'Tactile discernment of combed cotton & linen',
      'Rich conversational vocabulary away from screens',
      'Empathy and real-world hospitable sharing'
    ],
    toolsProvided_ar: ['سلة قماشية منسوجة', 'قطع فواكه وخضار قابلة للترتيب', 'كروت مهام المشاركة اليومية', 'علبة كرتونية تتحول إلى مسرح دكان وديكور'],
    toolsProvided_en: ['Braided soft fabric basket', 'Tactile sortable produce pieces', 'Illustrated empathy task cards', 'Eco-box transforming into bedroom decor'],
    projectOutcome_ar: 'إتقان مسك وترتيب الأشياء، بناء ثقة اجتماعية، وعرض دكان السوق كديكور دائم لغرفة الطفل.',
    projectOutcome_en: 'Mastery of object sorting, social confidence, and a cheerful bedroom market display.',
    badge_ar: 'شارة المستكشف الصغير',
    badge_en: 'Young Explorer Badge'
  },
  {
    id: 'level_2_creator',
    levelNumber: 2,
    title_ar: 'المستوى 2: صانع ومستكشف (خياطة وتجميع مجسم يدوي)',
    title_en: 'Level 2: Maker & Creator (Hands-on Stitching & 3D Assembly)',
    subtitle_ar: 'اللعبة نصف جاهزة يصنعها الفتى أو الفتاة بنفسه لإحساس الفخر والملكية',
    subtitle_en: 'Semi-assembled craft kit built by the child, instilling supreme pride',
    targetAge: '7 - 14 سنة / 7 - 14 Years',
    curriculumScope_ar: 'كورس تدريبي مدمج داخل اللعبة: قطع قماشية كتانية مثقوبة مسبقاً بدقة، إبرة خشبية آمنة ومصقولة غير حادة، خيوط غزل، وألياف حشو طبيعية. يتبع الصانع خطوات مصورة لإنشاء رفيقه القماشي بنفسه.',
    curriculumScope_en: 'In-toy hands-on curriculum: laser pre-punched fabric, 100% child-safe blunt wooden needle, natural cords, and fluffy fiberfill. Kids stitch their companion from scratch.',
    skillsAcquired_ar: [
      'مهارة الخياطة اليدوية الأساسية والغرز المنتظمة',
      'التآزر البصري الحركي والتوافق العصبي العضلي',
      'الصبر والتركيز المتواصل لمدة 45-60 دقيقة بلا تشتيت إلكتروني',
      'إحساس عميق بالفخر والملكية: "أنا صنعت هذه اللعبة بيدي!"'
    ],
    skillsAcquired_en: [
      'Essential hand-stitching & running stitches',
      'Neuromuscular hand-eye spatial alignment',
      'Sustained 45-60 min deep focus with zero digital distraction',
      'Unmatched pride of accomplishment: "I built this toy myself!"'
    ],
    toolsProvided_ar: ['إبرة خشبية آمنة مستدامة', 'خيوط قطنية ملونة مقاومة للقطع', 'قطع قماش مثقوبة ليزرياً', 'كروت خطوات الكورس المرقمة', 'شريط توقيع الصانع وشهادة الإنجاز'],
    toolsProvided_en: ['Polished wooden safety needle', 'Strong colorful Egyptian cotton floss', 'Pre-punched fabric templates', 'Numbered instructional step cards', 'Maker signature ribbon & certificate'],
    projectOutcome_ar: 'إتمام مجسم حيوان قماشي متين قابل للغسيل واللعب به لسنوات، مع منصة عرض خشبية/كرتونية.',
    projectOutcome_en: 'A fully finished, washable heirloom fabric companion that endures for years.',
    badge_ar: 'شارة الحِرفي الماهر',
    badge_en: 'Master Artisan Badge'
  },
  {
    id: 'level_3_master',
    levelNumber: 3,
    title_ar: 'المستوى 3: احتراف واستراتيجية (تخطيط وتفكير حضاري)',
    title_en: 'Level 3: Strategic Master (Civilizational Tactics & Logic)',
    subtitle_ar: 'ألعاب استراتيجية وثقافية تجمع الكبار والمقتنين وراحة ذهنية تامة من الشاشات',
    subtitle_en: 'Heirloom strategic & cultural duels for teens, adults & thinkers',
    targetAge: '15+ سنة والكبار / 15+ Years & Adults',
    curriculumScope_ar: 'منظومة تفكير استراتيجي متقدم مستوحاة من التاريخ المصري العريق، تعتمد على لوحات كتانية مطرزة ومجسمات خشبية منحوتة، مع بطاقات ألغاز تكتيكية تدرب الذهن على التخطيط الاستراتيجي.',
    curriculumScope_en: 'High-level strategic and civilizational challenges using textured Egyptian linen boards, carved pieces, and battle tactic puzzle cards.',
    skillsAcquired_ar: [
      'التفكير الاستراتيجي والتحليل المنطقي متعدد الخطوات',
      'تخفيف إجهاد العين والمخ الناتج عن التكنولوجيا الرقمية',
      'الارتباط بالهوية والتاريخ المصري بأسلوب معاصر',
      'جلسات لعب تفاعلية تجمع الأجيال حول طاولة واحدة'
    ],
    skillsAcquired_en: [
      'Multi-step strategic analysis and foresight',
      'Deep ocular and cognitive digital detox',
      'Pride in Egyptian golden heritage and historic lore',
      'Face-to-face intergenerational bonding'
    ],
    toolsProvided_ar: ['لوحة كتان مصري محفورة بالرموز', '32 قطعة خشبية مصقولة', 'كتيب الألغاز التكتيكية والمراجع التاريخية', 'صندوق حفظ خشبي مبطن فاخر يصلح كديكور صالون'],
    toolsProvided_en: ['Heavy-weight linen board with heritage cartouches', '32 hand-finished wooden pieces', 'Tactical puzzle companion book', 'Heirloom display storage case for living room decor'],
    projectOutcome_ar: 'اقتناء تحفة فنية استراتيجية تدوم مدى الحياة وتعزز صفاء الذهن والتأمل المنطقي.',
    projectOutcome_en: 'An heirloom intellectual asset fostering serenity, patience, and logic.',
    badge_ar: 'شارة القائد الاستراتيجي',
    badge_en: 'Grandmaster Strategist Badge'
  }
];

export const COMMUNITY_QUESTS: CommunityQuest[] = [
  {
    id: 'quest-1',
    title_ar: 'مهمة كرم الضيافة ومشاركة الجار',
    title_en: 'Hospitality & Neighbor Kindness Quest',
    level: 'Level 1',
    category_ar: 'تفاعل مع المجتمع والأسرة',
    category_en: 'Family & Community Interaction',
    missionDescription_ar: 'يملأ الطفل سلة فرح القماشية بقطع خضار أو فاكهة حقيقية أو كعك مصنوع بالمنزل ويقدمه للجدة أو الجار مع ابتسامة دافئة.',
    missionDescription_en: 'Fill Farah’s basket with real fruit or homemade biscuits and offer it to a neighbor or grandparent with a genuine smile.',
    realWorldAction_ar: 'تنفيذ زيارة حقيقية أو مشاركة طعام مع شخص في المحيط العائلي أو السكني.',
    realWorldAction_en: 'Perform a real-world act of generosity with family or neighbors.',
    brandCommunityReward_ar: 'ختم كارت الكرم في دفتر المهام ونيل شارة "سفير الكرم المصري".',
    brandCommunityReward_en: 'Earn the Egyptian Hospitality Seal in the Maker Passport.',
    estimatedTime: '20 دقيقة / 20 mins',
    iconType: 'heart'
  },
  {
    id: 'quest-2',
    title_ar: 'مهمة بوصلة المستكشف الصغير في الطبيعة',
    title_en: 'Little Desert Compass Nature Quest',
    level: 'Level 1 & 2',
    category_ar: 'استكشاف البيئة واللمس الحقيقي',
    category_en: 'Sensory Natural Exploration',
    missionDescription_ar: 'اصطحاب مشمش ثعلب الفنك وبوصلته القماشية في جولة بالحديقة أو شرفة المنزل لاكتشاف 3 أوراق شجر أو أحجار متباينة الملمس.',
    missionDescription_en: 'Take Mishmish the Fennec Fox outdoors to identify 3 distinct natural textures (leaves, bark, or pebbles) without any digital screens.',
    realWorldAction_ar: 'فصل تام عن التابلت واللمس المباشر لعناصر الطبيعة المصرية وتصنيفها.',
    realWorldAction_en: 'Complete digital detox by touching and categorizing natural elements.',
    brandCommunityReward_ar: 'التقاط صورة للطفل مع مجموعته الطبيعية ومشاركتها في معرض صناع ماك الصغار.',
    brandCommunityReward_en: 'Featured showcase in the Mak Young Explorers Community Board.',
    estimatedTime: '30 دقيقة / 30 mins',
    iconType: 'compass'
  },
  {
    id: 'quest-3',
    title_ar: 'مهمة تحويل العلبة إلى مسرح وديكور فني',
    title_en: 'Eco-Box Stage & Bedroom Decor Quest',
    level: 'All Levels',
    category_ar: 'تدوير ذكي وصداقة البيئة',
    category_en: 'Eco-Friendly Upcycling',
    missionDescription_ar: 'العلبة الكرتونية ليست للرمي! يقوم الطفل بتلوين جدرانها الداخلية وتركيب القواطع لتتحول إلى دكان خضار أو خيمة صحراوية أو وحدة تخزين.',
    missionDescription_en: 'The box is part of the toy! Color and fold the unbleached cardboard box into an interactive play stage or organized toy storage den.',
    realWorldAction_ar: 'تخصيص ركن في غرفة الطفل يحمل مسرح العلبة كقطعة ديكور فنية يعتز بها أمام أصدقائه.',
    realWorldAction_en: 'Install the transformed box as permanent bedroom decor showcasing eco-responsibility.',
    brandCommunityReward_ar: 'دخول سحب شهري على باكدج مجاني لمسابقة "أفضل ديكور علبة ماك".',
    brandCommunityReward_en: 'Automatic entry into the monthly Mak Creative Eco-Box Design Award.',
    estimatedTime: '40 دقيقة / 40 mins',
    iconType: 'box'
  },
  {
    id: 'quest-4',
    title_ar: 'مهمة توقيع الصانع المعتمد ونيل الشهادة',
    title_en: 'Certified Maker Signature & Pride Quest',
    level: 'Level 2 & 3',
    category_ar: 'فخر الإنجاز واستحقاق الملكية',
    category_en: 'Craft Pride & Ownership',
    missionDescription_ar: 'بعد إتمام آخر غرزة بالإبرة الخشبية الآمنة، يكتب الطفل اسمه وتاريخ الإنجاز على شريط الفخر القماشي ويختم شهادة الصانع المرفقة.',
    missionDescription_en: 'Upon completing the final hand-stitch with the safe needle, sign your name and date on the cloth Maker Ribbon and seal the certificate.',
    realWorldAction_ar: 'تقديم اللعبة للأب والأم وشرح كيف صنعها وما هي المهارات التي تعلمها بنفسه.',
    realWorldAction_en: 'Present the finished companion to parents, narrating the steps and manual skills mastered.',
    brandCommunityReward_ar: 'تسجيل اسم الطفل في سجل صناع ألعاب ماك بالإسكندرية ونيل كود ترقية للمستوى التالي.',
    brandCommunityReward_en: 'Official registry in Alexandria Mak Makers Roll & Level-up voucher.',
    estimatedTime: '15 دقيقة / 15 mins',
    iconType: 'award'
  }
];

export const PACKAGING_TIERS: PackagingTier[] = [
  {
    id: 'single',
    title_ar: 'باكدج شخصية واحدة — جزء من المغامرة',
    title_en: 'Single Character Pack — Part of the Adventure',
    subtitle_ar: 'شخصية واحدة تفتح الفصل الأول وكارت المهمة التفاعلية في عالم اللعب (أول ليفل - الأطفال)',
    subtitle_en: '1 character unlocking Chapter 1 and first interactive quest (Level 1: Children)',
    targetBuyer_ar: 'للأسر التي تبدأ خطوة الاستكشاف الأولى لتجربة جودة ألعاب ماك أو تقديم هدية لطيفة ومفيدة.',
    targetBuyer_en: 'Ideal for trial purchases, birthday gifts, and introducing screen-free tactile play.',
    boxTransformation_ar: 'العلبة تتحول إلى كشك لعب صغير أو خيمة فردية لوضع اللعبة بداخلها كوحدة حفظ وديكور.',
    boxTransformation_en: 'Folds into an individual display den and bedroom organizer shelf.',
    contentsCount: 1,
    perks_ar: [
      'شخصية قماشية تفاعلية تمثل جزءاً من قصة المغامرة',
      'كارت مهمة الفصل الأول وخريطة مصغرة للمسار',
      'كتيب الكورس الحسي الإرشادي للمستوى الأول',
      'ملحقات قماشية لطيفة لتنمية التآزر وعضلات الأصابع'
    ],
    perks_en: [
      'Interactive handcrafted companion unlocking an adventure story chapter',
      'Chapter 1 quest card and miniature territory map',
      'Level 1 sensory motor curriculum guide',
      'Tactile accessories fostering fine motor grasp'
    ],
    startingPrice: 340,
    highlightBadge_ar: 'جزء من المغامرة · للمبتدئين',
    highlightBadge_en: 'Part of Adventure · Starter'
  },
  {
    id: 'trio',
    title_ar: 'باكدج 3 شخصيات — جزء أكبر من المغامرة',
    title_en: '3-Characters Pack — Larger Part of the Adventure',
    subtitle_ar: '3 شخصيات تفتح جزءاً أوسع من مسار المغامرة، ومسرحاً للحوارات والتعاون المشترك',
    subtitle_en: '3 characters unlocking expanded story paths, dialogue stages & collaborative quests',
    targetBuyer_ar: 'للأسر التي لديها طفلان أو أكثر، أو لمن يريد خوض فصول أعمق من المغامرة وبناء حوارات متبادلة.',
    targetBuyer_en: 'Best for siblings, playdates, and unlocking rich multi-character dramatic play.',
    boxTransformation_ar: 'العلبة بحجم أكبر تتحول إلى مسرح ثلاثي الأبعاد متكامل يضم زقاق السوق أو واحة سيوة بالكامل.',
    boxTransformation_en: 'Unfolds into a multi-booth marketplace theater or expansive Siwa oasis diorama.',
    contentsCount: 3,
    perks_ar: [
      '3 شخصيات متناغمة من نفس المغامرة تفتح فصولاً أعمق من القصة',
      'خريطة موسعة للمسار ومسرح تفاعلي للحوارات والتمثيل',
      'كروت مهام مشتركة تشرك الإخوة والأصدقاء معاً',
      'توفير مالي يتجاوز 15% مقارنة باقتناء كل شخصية منفردة'
    ],
    perks_en: [
      '3 harmonious characters from the adventure unlocking broader story arcs',
      'Expanded terrain map and 3D diorama stage for dramatic roleplay',
      'Cooperative challenge cards for siblings and playmates',
      'Over 15% price savings compared to individual kits'
    ],
    startingPrice: 880,
    highlightBadge_ar: 'جزء أكبر من المغامرة · الأفضل قيمة',
    highlightBadge_en: 'Bigger Part · Best Family Value'
  },
  {
    id: 'full_universe',
    title_ar: 'باكدج قفل المجموعة — إنهاء المغامرة كاملة (جزء من العالم)',
    title_en: 'Full Collector Set — Complete the Whole Adventure (Part of Universe)',
    subtitle_ar: 'تجميع كافة شخصيات المغامرة بالكامل لإنهاء قصة المغامرة كجزء من العالم الكبير، والترقي لليفل التالي',
    subtitle_en: 'Assemble all adventure characters to finish the full quest line as part of the greater universe',
    targetBuyer_ar: 'لمحبي التميز والمقتنين الذين يريدون إنهاء المغامرة كاملة، وامتلاك العالم بديكوره المتكامل.',
    targetBuyer_en: 'For collector families, educational centers, and gifts that celebrate full completion.',
    boxTransformation_ar: 'صندوق كرتوني فاخر مقوى ومبطن، يعمل كوحدة تخزين متكاملة لجميع الألعاب ومسرح ديكوري دائم لغرفة الطفل.',
    boxTransformation_en: 'Heirloom heavy-duty box lined with linen, serving as a permanent bedroom stage and toy trunk.',
    contentsCount: 5,
    perks_ar: [
      'كافة شخصيات المغامرة كاملة (5 شخصيات) لإنهاء المغامرة التامة',
      'خريطة العالم الكبرى وحل اللغز الختامي ونيل وسام المغامرة',
      'العلبة الفاخرة تتحول لمسرح ديكوري دائم ووحدة تخزين للغرفة',
      'دفتر كروت المهام التفاعلية الكامل لربط الطفل بالعالم الحقيقي',
      'أولوية حجز مغامرات الليفل الثاني والمجموعات المستقبلية بخصم مقتنين'
    ],
    perks_en: [
      'All 5 characters united to complete the entire adventure storyline',
      'Grand universe map, final mystery solved & completion badge',
      'Heirloom presentation box transforming into permanent bedroom furniture',
      'Complete 12-quest real-world community deck away from screens',
      'Guaranteed priority reservation & collector discount for upcoming Level 2 sets'
    ],
    startingPrice: 1250,
    highlightBadge_ar: 'إنهاء المغامرة بالكامل · المقتني الشامل',
    highlightBadge_en: 'Complete Adventure · Collector Edition'
  }
];
