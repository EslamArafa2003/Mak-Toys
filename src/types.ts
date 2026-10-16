export type Language = 'ar' | 'en';

export type ProductLine = 'children' | 'juniors' | 'adults';

export type UniverseId = 'bazaar_heritage' | 'desert_expedition' | 'historical_civilization';

export type SkillLevel = 'level_1_starter' | 'level_2_creator' | 'level_3_master';

export interface ProductBundleOption {
  id: 'single' | 'trio' | 'full_universe';
  name_ar: string;
  name_en: string;
  adventureScope_ar?: string; // 'جزء من المغامرة' | 'جزء أكبر من المغامرة' | 'إنهاء المغامرة كاملة (جزء من العالم)'
  adventureScope_en?: string;
  description_ar: string;
  description_en: string;
  price: number;
  itemCount: number;
}

export interface AdventurePackageInfo {
  id: 'single' | 'trio' | 'full_universe';
  scope_ar: string; // 'جزء من المغامرة' | 'جزء أكبر من المغامرة' | 'إنهاء المغامرة بالكامل'
  scope_en: string;
  title_ar: string;
  title_en: string;
  description_ar: string;
  description_en: string;
  price: number;
  charactersCount: number;
  boxTransformation_ar: string;
  boxTransformation_en: string;
  screenFreeBadge_ar: string;
  screenFreeBadge_en: string;
}

export interface Adventure {
  id: string;
  universeId: UniverseId;
  title_ar: string;
  title_en: string;
  subtitle_ar: string;
  subtitle_en: string;
  summary_ar: string;
  summary_en: string;
  charactersIncluded_ar: string[];
  charactersIncluded_en: string[];
  packages: {
    single: AdventurePackageInfo;
    trio: AdventurePackageInfo;
    full: AdventurePackageInfo;
  };
}

export interface PlayUniverse {
  id: UniverseId;
  name_ar: string;
  name_en: string;
  badge_ar: string;
  badge_en: string;
  theme_ar: string;
  theme_en: string;
  description_ar: string;
  description_en: string;
  primaryAdventure: Adventure;
}

export interface Product {
  id: string;
  name_ar: string;
  name_en: string;
  line: ProductLine;
  universe: UniverseId;
  skillLevel: SkillLevel;
  age_range: string;
  tagline_ar: string;
  tagline_en: string;
  description_ar: string;
  description_en: string;
  assemblyExperience_ar: string;
  assemblyExperience_en: string;
  boxFeature_ar: string;
  boxFeature_en: string;
  price_retail: number;
  price_wholesale: number;
  status: 'available' | 'sold_out' | 'coming_soon';
  image: string;
  bundles: ProductBundleOption[];
  cultural_elements_ar: string[];
  cultural_elements_en: string[];
  materials_ar: string[];
  materials_en: string[];
  care_instructions_ar: string;
  care_instructions_en: string;
  stock_batch_count: number;
  screenFreeBenefits_ar: string[];
  screenFreeBenefits_en: string[];
}

export interface CartItem {
  product: Product;
  bundle?: ProductBundleOption;
  quantity: number;
}

export type PaymentMethod = 'cash_on_delivery' | 'card' | 'instapay';

export interface OrderItem {
  productId: string;
  productName: string;
  bundleName?: string;
  quantity: number;
  unitPrice: number;
}

export type OrderChannel = 'online_store' | 'wholesale' | 'corporate';
export type OrderStatus = 'confirmed' | 'delivered' | 'cancelled';

export interface Order {
  id: string;
  customerName: string;
  customerPhone: string;
  deliveryAddress: string;
  shippingCity: string;
  shippingCost: number;
  paymentMethod: PaymentMethod;
  paymentStatus: 'paid' | 'pending_cod';
  items: OrderItem[];
  total: number;
  channel: OrderChannel;
  status: OrderStatus;
  createdAt: string;
  language: Language;
  notes?: string;
}

export interface TeamMember {
  id: string;
  name_ar: string;
  name_en: string;
  role_ar: string;
  role_en: string;
  bio_ar: string;
  bio_en: string;
}

export interface QuoteRequest {
  id: string;
  businessName: string;
  businessType: 'shop' | 'school' | 'library' | 'company' | 'other';
  contactName: string;
  phone: string;
  email: string;
  farahQty: number;
  mishmishQty: number;
  totalUnits: number;
  estimatedTotal: number;
  notes?: string;
  status: 'pending' | 'quoted' | 'accepted' | 'rejected';
  createdAt: string;
  validUntil: string;
}

export interface CustomOrder {
  id: string;
  companyName: string;
  contactName: string;
  phone: string;
  toyChoice: 'farah' | 'mishmish' | 'both';
  quantity: number;
  customText: string;
  logoPreviewUrl?: string;
  placement: 'vest' | 'tag' | 'bag';
  estimatedCost: number;
  status: 'mockup_pending' | 'mockup_approved' | 'in_production';
  createdAt: string;
}

export interface ActivityGuideItem {
  id: string;
  title_ar: string;
  title_en: string;
  age: string;
  duration: string;
  objective_ar: string;
  objective_en: string;
  steps_ar: string[];
  steps_en: string[];
}

export interface SkillCourseLevel {
  id: SkillLevel;
  levelNumber: number;
  title_ar: string;
  title_en: string;
  subtitle_ar: string;
  subtitle_en: string;
  targetAge: string;
  curriculumScope_ar: string;
  curriculumScope_en: string;
  skillsAcquired_ar: string[];
  skillsAcquired_en: string[];
  toolsProvided_ar: string[];
  toolsProvided_en: string[];
  projectOutcome_ar: string;
  projectOutcome_en: string;
  badge_ar: string;
  badge_en: string;
}

export interface CommunityQuest {
  id: string;
  title_ar: string;
  title_en: string;
  level: string;
  category_ar: string;
  category_en: string;
  missionDescription_ar: string;
  missionDescription_en: string;
  realWorldAction_ar: string;
  realWorldAction_en: string;
  brandCommunityReward_ar: string;
  brandCommunityReward_en: string;
  estimatedTime: string;
  iconType: 'heart' | 'compass' | 'box' | 'award';
}

export interface PackagingTier {
  id: 'single' | 'trio' | 'full_universe';
  title_ar: string;
  title_en: string;
  subtitle_ar: string;
  subtitle_en: string;
  targetBuyer_ar: string;
  targetBuyer_en: string;
  boxTransformation_ar: string;
  boxTransformation_en: string;
  contentsCount: number;
  perks_ar: string[];
  perks_en: string[];
  startingPrice: number;
  highlightBadge_ar?: string;
  highlightBadge_en?: string;
}
