import React, { useState, useEffect } from 'react';
import { Language, Product, Order, QuoteRequest, CustomOrder, CartItem, ProductBundleOption } from './types';
import { PRODUCTS, INITIAL_ORDERS, INITIAL_QUOTES, INITIAL_CUSTOM_ORDERS } from './data/mockData';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductCatalog } from './components/ProductCatalog';
import { SkillBasedJourney } from './components/SkillBasedJourney';
import { EcoPackagingTiers } from './components/EcoPackagingTiers';
import { CommunityQuests } from './components/CommunityQuests';
import { TeamSection } from './components/TeamSection';
import { FutureRoadmapSection } from './components/FutureRoadmapSection';
import { ActivityGuideAndVideo } from './components/ActivityGuideAndVideo';
import { WholesaleStudio } from './components/WholesaleStudio';
import { CorporateCustomStudio } from './components/CorporateCustomStudio';
import { CartCheckoutDrawer } from './components/CartCheckoutDrawer';
import { CustomerSupportWidget } from './components/CustomerSupportWidget';
import { PRDManagementDashboard } from './components/PRDManagementDashboard';
import { Footer } from './components/Footer';

export default function App() {
  const [lang, setLang] = useState<Language>('ar');
  const [activeTab, setActiveTab] = useState<'storefront' | 'prd_dashboard'>('storefront');

  // E-Commerce Cart State
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { product: PRODUCTS[0], bundle: PRODUCTS[0].bundles[0], quantity: 1 } // Start with Farah ready in bag for friendly demo
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Live Orders & Quotes Data State
  const [orders, setOrders] = useState<Order[]>(INITIAL_ORDERS);
  const [quotes, setQuotes] = useState<QuoteRequest[]>(INITIAL_QUOTES);
  const [customOrders, setCustomOrders] = useState<CustomOrder[]>(INITIAL_CUSTOM_ORDERS);

  // Sync HTML dir and lang attributes on change
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const handleToggleLang = () => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const handleAddToCart = (product: Product, bundle?: ProductBundleOption) => {
    const selectedBundle = bundle || product.bundles?.[0];
    setCartItems((prev) => {
      const existing = prev.find(
        (item) => item.product.id === product.id && (!selectedBundle || item.bundle?.id === selectedBundle?.id)
      );
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id && (!selectedBundle || item.bundle?.id === selectedBundle?.id)
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, bundle: selectedBundle, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleBuyNow = (product: Product, bundle?: ProductBundleOption) => {
    const selectedBundle = bundle || product.bundles?.[0];
    setCartItems((prev) => {
      const existing = prev.find(
        (item) => item.product.id === product.id && (!selectedBundle || item.bundle?.id === selectedBundle?.id)
      );
      if (existing) {
        return prev;
      }
      return [...prev, { product, bundle: selectedBundle, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQty = (productId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleOrderPlaced = (newOrder: Order) => {
    setOrders((prev) => [newOrder, ...prev]);
  };

  const handleQuoteSubmitted = (newQuote: QuoteRequest) => {
    setQuotes((prev) => [newQuote, ...prev]);
  };

  const handleCustomOrderSubmitted = (newCustomOrder: CustomOrder) => {
    setCustomOrders((prev) => [newCustomOrder, ...prev]);
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-200 ${lang === 'ar' ? 'font-arabic' : ''}`}>
      {/* Top Header Contract */}
      <Header
        lang={lang}
        onToggleLang={handleToggleLang}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main className="flex-1">
        {activeTab === 'storefront' ? (
          <>
            {/* 1. Hero Section */}
            <Hero
              lang={lang}
              onExploreClick={() => {
                const el = document.getElementById('skill-journey');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              onOrderClick={() => {
                const el = document.getElementById('catalog');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              onWholesaleClick={() => {
                const el = document.getElementById('wholesale');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            {/* 2. Product Catalog (E-Commerce Add to Bag & Buy Now) */}
            <ProductCatalog
              lang={lang}
              onAddToCart={handleAddToCart}
              onBuyNow={handleBuyNow}
            />

            {/* 3. Progressive Skill-Based Journey (Curriculum & Levels 1, 2, 3) */}
            <SkillBasedJourney
              lang={lang}
            />

            {/* 4. Eco Packaging & Purchasing Power Tiers (Box as Part of the Toy & Decor) */}
            <EcoPackagingTiers
              lang={lang}
              onExploreCatalog={() => {
                const el = document.getElementById('catalog');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            {/* 5. Real-World & Community Quests (Off-Screen Tasks) */}
            <CommunityQuests
              lang={lang}
            />

            {/* 6. Spoken Story & Auditory Guide */}
            <ActivityGuideAndVideo
              lang={lang}
            />

            {/* 7. Team & Direct Founders Leadership (Alexandria, Egypt) */}
            <TeamSection
              lang={lang}
            />

            {/* 8. Future Roadmap & Global Export (Pitch Highlight) */}
            <FutureRoadmapSection
              lang={lang}
              onOpenPRD={() => setActiveTab('prd_dashboard')}
            />

            {/* 9. Wholesale Studio */}
            <WholesaleStudio
              lang={lang}
              onQuoteSubmitted={handleQuoteSubmitted}
            />

            {/* 10. Corporate Custom Branded Studio */}
            <CorporateCustomStudio
              lang={lang}
              onCustomOrderSubmitted={handleCustomOrderSubmitted}
            />
          </>
        ) : (
          /* PRD Document & Operations Console */
          <PRDManagementDashboard
            lang={lang}
            orders={orders}
            quotes={quotes}
            customOrders={customOrders}
            onBackToStorefront={() => setActiveTab('storefront')}
          />
        )}
      </main>

      {/* E-Commerce Shopping Bag & Checkout Drawer (Visa Card & Cash on Delivery) */}
      <CartCheckoutDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onOrderPlaced={handleOrderPlaced}
        lang={lang}
      />

      {/* Unified Floating Customer Support Widget (Single Number: 01001224375 - Eslam Arafa) */}
      <CustomerSupportWidget
        lang={lang}
      />

      {/* Footer */}
      <Footer
        lang={lang}
        onOpenPRD={() => setActiveTab('prd_dashboard')}
        onQuickOrder={() => setIsCartOpen(true)}
      />
    </div>
  );
}
