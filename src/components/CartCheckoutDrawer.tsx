import React, { useState } from 'react';
import { CartItem, Order, PaymentMethod, Language } from '../types';
import { translations } from '../translations';
import { ShoppingBag, X, Trash2, CreditCard, Banknote, Smartphone, ShieldCheck, CheckCircle2, MessageCircle, ArrowRight, ArrowLeft } from 'lucide-react';

interface CartCheckoutDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQty: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
  onOrderPlaced: (order: Order) => void;
  lang: Language;
}

export const CartCheckoutDrawer: React.FC<CartCheckoutDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQty,
  onRemoveItem,
  onClearCart,
  onOrderPlaced,
  lang,
}) => {
  const t = translations[lang];

  // Checkout Step: 'cart' | 'checkout' | 'success'
  const [step, setStep] = useState<'cart' | 'checkout' | 'success'>('cart');
  const [placedOrder, setPlacedOrder] = useState<Order | null>(null);

  // Form Fields
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [shippingRegion, setShippingRegion] = useState<'alex' | 'cairo' | 'delta' | 'upper'>('alex');
  const [notes, setNotes] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('cash_on_delivery');

  // Card fields
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  // Pricing Math
  const getItemPrice = (item: CartItem) => (item.bundle ? item.bundle.price : item.product.price_retail);
  const subtotal = cartItems.reduce((sum, item) => sum + getItemPrice(item) * item.quantity, 0);
  const isFreeShipping = subtotal >= 700;
  const shippingFee = isFreeShipping
    ? 0
    : shippingRegion === 'alex'
    ? 30
    : shippingRegion === 'cairo'
    ? 50
    : shippingRegion === 'delta'
    ? 55
    : 65;
  const finalTotal = subtotal + shippingFee;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone || !deliveryAddress) {
      alert(lang === 'ar' ? 'برجاء كتابة الاسم ورقم الهاتف والعنوان بالتفصيل.' : 'Please provide your name, phone, and delivery address.');
      return;
    }

    if (paymentMethod === 'card' && (!cardNumber || !cardExpiry || !cardCvv)) {
      alert(lang === 'ar' ? 'برجاء إدخال بيانات البطاقة البنكية للمتابعة.' : 'Please enter your card details.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const orderId = `MAK-${Math.floor(1000 + Math.random() * 9000)}`;
      const cityName =
        shippingRegion === 'alex'
          ? (lang === 'ar' ? 'الإسكندرية' : 'Alexandria')
          : shippingRegion === 'cairo'
          ? (lang === 'ar' ? 'القاهرة والجيزة' : 'Cairo & Giza')
          : (lang === 'ar' ? 'المحافظات' : 'Other Governorate');

      const newOrder: Order = {
        id: orderId,
        customerName,
        customerPhone,
        deliveryAddress,
        shippingCity: cityName,
        shippingCost: shippingFee,
        paymentMethod,
        paymentStatus: paymentMethod === 'cash_on_delivery' ? 'pending_cod' : 'paid',
        items: cartItems.map((item) => ({
          productId: item.product.id,
          productName: lang === 'ar' ? item.product.name_ar : item.product.name_en,
          bundleName: item.bundle
            ? (lang === 'ar' ? item.bundle.name_ar : item.bundle.name_en)
            : (lang === 'ar' ? 'القطعة الفردية' : 'Single Character'),
          quantity: item.quantity,
          unitPrice: getItemPrice(item),
        })),
        total: finalTotal,
        channel: 'online_store',
        status: 'confirmed',
        createdAt: new Date().toISOString().replace('T', ' ').substring(0, 16),
        language: lang,
        notes,
      };

      onOrderPlaced(newOrder);
      setPlacedOrder(newOrder);
      onClearCart();
      setIsSubmitting(false);
      setStep('success');
    }, 800);
  };

  const supportWhatsAppUrl = `https://wa.me/201001224375?text=${encodeURIComponent(
    placedOrder
      ? lang === 'ar'
        ? `مرحباً خدمة عملاء ألعاب ماك، بخصوص طلبي برقم ${placedOrder.id}. لدي استفسار:`
        : `Hello Mak Toys Support, regarding my order ${placedOrder.id}. I have a question:`
      : lang === 'ar'
      ? `مرحباً خدمة عملاء ألعاب ماك، أحتاج مساعدة بخصوص طلب على الموقع.`
      : `Hello Mak Toys Support, I need help regarding an order.`
  )}`;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-xs flex justify-end transition-opacity duration-300 cursor-pointer"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg bg-white h-full flex flex-col shadow-2xl border-s border-stone-200 cursor-default overflow-hidden animate-slide-left"
      >
        {/* Drawer Header */}
        <div className="px-6 py-4 bg-stone-50 border-b border-stone-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-amber-900" />
            <h3 className="text-base font-bold text-stone-900">
              {step === 'cart'
                ? t.cartTitle
                : step === 'checkout'
                ? t.checkoutTitle
                : t.orderSuccessTitle}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-800 rounded-lg hover:bg-stone-200 transition-colors cursor-pointer"
            title={t.closeDrawer}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* STEP 1: CART VIEW */}
        {step === 'cart' && (
          <div className="flex-1 flex flex-col overflow-hidden">
            {cartItems.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center text-stone-400">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="text-base font-bold text-stone-800">{t.cartEmpty}</h4>
                <p className="text-xs text-stone-500 max-w-xs">{t.cartEmptyDesc}</p>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-amber-900 hover:bg-amber-950 rounded-lg transition-colors cursor-pointer"
                >
                  {t.continueShopping}
                </button>
              </div>
            ) : (
              <>
                {/* Cart Items List */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  {cartItems.map((item) => {
                    const name = lang === 'ar' ? item.product.name_ar : item.product.name_en;
                    return (
                      <div
                        key={item.product.id}
                        className="flex gap-4 p-3 bg-stone-50 rounded-xl border border-stone-200"
                      >
                        <img
                          src={item.product.image}
                          alt={name}
                          className="w-20 h-20 object-cover rounded-lg border border-stone-200 shrink-0"
                        />
                        <div className="flex-1 flex flex-col justify-between">
                          <div className="flex justify-between items-start gap-2">
                            <div>
                              <h4 className="text-xs font-bold text-stone-900 line-clamp-1">{name}</h4>
                              {item.bundle && (
                                <p className="text-[11px] text-amber-800 font-medium">
                                  {lang === 'ar' ? item.bundle.name_ar : item.bundle.name_en}
                                </p>
                              )}
                            </div>
                            <button
                              onClick={() => onRemoveItem(item.product.id)}
                              className="text-stone-400 hover:text-red-600 transition-colors cursor-pointer"
                              title="Remove"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>

                          <div className="flex items-center justify-between mt-2">
                            {/* Quantity Stepper */}
                            <div className="flex items-center border border-stone-300 rounded-lg bg-white overflow-hidden">
                              <button
                                onClick={() => onUpdateQty(item.product.id, -1)}
                                className="px-2.5 py-1 text-xs font-bold text-stone-600 hover:bg-stone-100 cursor-pointer"
                              >
                                -
                              </button>
                              <span className="px-3 text-xs font-bold tabular-nums">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => onUpdateQty(item.product.id, 1)}
                                className="px-2.5 py-1 text-xs font-bold text-stone-600 hover:bg-stone-100 cursor-pointer"
                              >
                                +
                              </button>
                            </div>

                            <div className="text-sm font-extrabold text-amber-900 tabular-nums">
                              {getItemPrice(item) * item.quantity} {t.currency}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Subtotal & Proceed to Checkout */}
                <div className="p-6 bg-stone-50 border-t border-stone-200 space-y-3">
                  <div className="flex justify-between text-xs font-medium text-stone-600">
                    <span>{t.subtotal}</span>
                    <span className="font-bold text-stone-900 tabular-nums text-sm">
                      {subtotal} {t.currency}
                    </span>
                  </div>

                  <p className="text-[11px] text-stone-500">
                    {lang === 'ar'
                      ? 'الشحن يُحسب في الخطوة التالية حسب المحافظة.'
                      : 'Shipping fee calculated in next step.'}
                  </p>

                  <button
                    onClick={() => setStep('checkout')}
                    className="w-full py-3 px-4 text-xs font-bold text-white bg-amber-900 hover:bg-amber-950 rounded-lg shadow-sm hover:shadow transition-all cursor-pointer whitespace-nowrap active:scale-95"
                  >
                    {t.checkout} ({subtotal} {t.currency})
                  </button>
                </div>
              </>
            )}
          </div>
        )}

        {/* STEP 2: CHECKOUT & PAYMENT FORM */}
        {step === 'checkout' && (
          <form onSubmit={handlePlaceOrder} className="flex-1 flex flex-col overflow-hidden">
            <div className="flex-1 overflow-y-auto p-6 space-y-5">
              {/* Back to Cart button */}
              <button
                type="button"
                onClick={() => setStep('cart')}
                className="text-xs font-semibold text-amber-800 hover:text-amber-950 flex items-center gap-1 cursor-pointer"
              >
                {lang === 'ar' ? '← العودة لتعديل الأصناف والسلة' : '← Back to Bag'}
              </button>

              {/* Customer Shipping Details */}
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-800 block">
                  {lang === 'ar' ? '1. بيانات التوصيل والتواصل' : '1. Delivery & Contact'}
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      {t.nameField} <span className="text-amber-800">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder={lang === 'ar' ? 'اسم المستلم' : 'Receiver Name'}
                      className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-800 bg-stone-50/50"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      {t.phoneField} <span className="text-amber-800">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="010xxxxxxxx"
                      className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-800 bg-stone-50/50 tabular-nums"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    {t.shippingCityLabel}
                  </label>
                  <select
                    value={shippingRegion}
                    onChange={(e) => setShippingRegion(e.target.value as any)}
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-800 bg-stone-50/50"
                  >
                    <option value="alex">{t.shippingAlex}</option>
                    <option value="cairo">{t.shippingCairo}</option>
                    <option value="delta">{t.shippingDelta}</option>
                    <option value="upper">{t.shippingUpper}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    {t.addressField} <span className="text-amber-800">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={deliveryAddress}
                    onChange={(e) => setDeliveryAddress(e.target.value)}
                    placeholder={lang === 'ar' ? 'الشارع، رقم العمارة، الشقة...' : 'Street name, building, apartment...'}
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-800 bg-stone-50/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    {t.notesField}
                  </label>
                  <input
                    type="text"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder={lang === 'ar' ? 'كتابة إهداء، موعد التوصيل المفضل...' : 'Gift message, preferred delivery time...'}
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-800 bg-stone-50/50"
                  />
                </div>
              </div>

              {/* Payment Method Selector */}
              <div className="pt-2 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-800 block">
                  {lang === 'ar' ? '2. اختيار وسيلة الدفع' : '2. Payment Method'}
                </span>

                <div className="space-y-2">
                  {/* COD Option */}
                  <label
                    onClick={() => setPaymentMethod('cash_on_delivery')}
                    className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                      paymentMethod === 'cash_on_delivery'
                        ? 'border-amber-800 bg-amber-50/80 shadow-xs'
                        : 'border-stone-200 hover:bg-stone-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Banknote className="w-5 h-5 text-amber-900" />
                      <div>
                        <div className="text-xs font-bold text-stone-900">{t.payCod}</div>
                        <div className="text-[11px] text-stone-500">{t.payCodDesc}</div>
                      </div>
                    </div>
                    <input
                      type="radio"
                      name="paymentMethod"
                      checked={paymentMethod === 'cash_on_delivery'}
                      onChange={() => setPaymentMethod('cash_on_delivery')}
                      className="accent-amber-900"
                    />
                  </label>

                  {/* Visa / Card Option */}
                  <label
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                      paymentMethod === 'card'
                        ? 'border-amber-800 bg-amber-50/80 shadow-xs'
                        : 'border-stone-200 hover:bg-stone-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <CreditCard className="w-5 h-5 text-amber-900" />
                      <div>
                        <div className="text-xs font-bold text-stone-900">{t.payCard}</div>
                        <div className="text-[11px] text-stone-500">{t.payCardDesc}</div>
                      </div>
                    </div>
                    <input
                      type="radio"
                      name="paymentMethod"
                      checked={paymentMethod === 'card'}
                      onChange={() => setPaymentMethod('card')}
                      className="accent-amber-900"
                    />
                  </label>

                  {/* Card Form when Card is selected */}
                  {paymentMethod === 'card' && (
                    <div className="p-4 bg-stone-100/80 rounded-xl border border-stone-200 space-y-3 animate-fade-in">
                      <div>
                        <label className="block text-[11px] font-semibold text-stone-700 mb-1">
                          {t.cardNumberField}
                        </label>
                        <input
                          type="text"
                          required
                          maxLength={19}
                          value={cardNumber}
                          onChange={(e) => setCardNumber(e.target.value)}
                          placeholder="4111 2222 3333 4444"
                          className="w-full px-3 py-1.5 text-xs border border-stone-300 rounded-lg bg-white font-mono"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-[11px] font-semibold text-stone-700 mb-1">
                            {t.cardExpiryField}
                          </label>
                          <input
                            type="text"
                            required
                            maxLength={5}
                            value={cardExpiry}
                            onChange={(e) => setCardExpiry(e.target.value)}
                            placeholder="12/28"
                            className="w-full px-3 py-1.5 text-xs border border-stone-300 rounded-lg bg-white font-mono"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-semibold text-stone-700 mb-1">
                            {t.cardCvvField}
                          </label>
                          <input
                            type="text"
                            required
                            maxLength={4}
                            value={cardCvv}
                            onChange={(e) => setCardCvv(e.target.value)}
                            placeholder="123"
                            className="w-full px-3 py-1.5 text-xs border border-stone-300 rounded-lg bg-white font-mono"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold text-stone-700 mb-1">
                          {t.cardHolderField}
                        </label>
                        <input
                          type="text"
                          required
                          value={cardHolder}
                          onChange={(e) => setCardHolder(e.target.value)}
                          placeholder="Mona Abdelrahman"
                          className="w-full px-3 py-1.5 text-xs border border-stone-300 rounded-lg bg-white"
                        />
                      </div>
                    </div>
                  )}

                  {/* InstaPay Option */}
                  <label
                    onClick={() => setPaymentMethod('instapay')}
                    className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                      paymentMethod === 'instapay'
                        ? 'border-amber-800 bg-amber-50/80 shadow-xs'
                        : 'border-stone-200 hover:bg-stone-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Smartphone className="w-5 h-5 text-amber-900" />
                      <div>
                        <div className="text-xs font-bold text-stone-900">{t.payInstapay}</div>
                        <div className="text-[11px] text-stone-500">{t.payInstapayDesc}</div>
                      </div>
                    </div>
                    <input
                      type="radio"
                      name="paymentMethod"
                      checked={paymentMethod === 'instapay'}
                      onChange={() => setPaymentMethod('instapay')}
                      className="accent-amber-900"
                    />
                  </label>

                  {paymentMethod === 'instapay' && (
                    <div className="p-3 bg-stone-100 rounded-xl text-xs space-y-1 text-stone-700 border border-stone-200">
                      <div>
                        <span className="font-semibold">عنوان إنستاباي: </span>
                        <span className="font-mono font-bold text-amber-900">maktoys@instapay</span>
                      </div>
                      <div>
                        <span className="font-semibold">رقم المحفظة / التحويل: </span>
                        <span className="font-mono font-bold text-amber-900">01001224375</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Price Breakdown & Place Order Button */}
            <div className="p-6 bg-stone-50 border-t border-stone-200 space-y-3">
              <div className="space-y-1 text-xs">
                <div className="flex justify-between text-stone-600">
                  <span>{t.subtotal}</span>
                  <span className="tabular-nums font-semibold">{subtotal} {t.currency}</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>{t.shippingFee}</span>
                  <span className="tabular-nums font-semibold">
                    {shippingFee === 0 ? (lang === 'ar' ? 'مجاني' : 'Free') : `${shippingFee} ${t.currency}`}
                  </span>
                </div>
                <div className="flex justify-between text-stone-900 font-bold text-sm pt-2 border-t border-stone-200">
                  <span>{t.orderTotal}</span>
                  <span className="text-amber-900 tabular-nums text-base">{finalTotal} {t.currency}</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-4 text-xs font-bold text-white bg-amber-900 hover:bg-amber-950 rounded-lg shadow-sm hover:shadow transition-all cursor-pointer whitespace-nowrap active:scale-95 disabled:opacity-50"
              >
                {isSubmitting ? t.processingOrder : `${t.placeOrderBtn} (${finalTotal} ${t.currency})`}
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: ORDER SUCCESS RECEIPT */}
        {step === 'success' && placedOrder && (
          <div className="flex-1 overflow-y-auto p-6 space-y-5 text-center">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <h3 className="text-xl font-bold text-stone-900">{t.orderSuccessTitle}</h3>
              <p className="text-xs text-stone-500 mt-1">{t.orderSuccessSubtitle}</p>
            </div>

            {/* Receipt Box */}
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 text-xs text-start space-y-2">
              <div className="flex justify-between pb-2 border-b border-stone-200">
                <span className="text-stone-500">{t.orderRef}</span>
                <span className="font-mono font-bold text-amber-900">{placedOrder.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">{lang === 'ar' ? 'المستلم:' : 'Customer:'}</span>
                <span className="font-semibold text-stone-800">{placedOrder.customerName} ({placedOrder.customerPhone})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">{lang === 'ar' ? 'العنوان:' : 'Address:'}</span>
                <span className="text-stone-800">{placedOrder.deliveryAddress} ({placedOrder.shippingCity})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">{lang === 'ar' ? 'طريقة الدفع:' : 'Payment:'}</span>
                <span className="font-semibold text-stone-800">
                  {placedOrder.paymentMethod === 'cash_on_delivery'
                    ? (lang === 'ar' ? 'كاش عند الاستلام' : 'Cash on Delivery')
                    : placedOrder.paymentMethod === 'card'
                    ? (lang === 'ar' ? 'بطاقة بنكية (مدفوع)' : 'Credit Card (Paid)')
                    : 'InstaPay'}
                </span>
              </div>

              <div className="pt-2 border-t border-stone-200">
                <span className="text-[11px] text-stone-500 font-semibold block mb-1">{t.orderSummaryItems}</span>
                {placedOrder.items.map((it, idx) => (
                  <div key={idx} className="flex justify-between text-stone-700">
                    <span>{it.productName} × {it.quantity}</span>
                    <span className="font-mono tabular-nums">{it.unitPrice * it.quantity} {t.currency}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-between pt-2 border-t border-stone-200 text-sm font-bold text-stone-900">
                <span>{t.orderTotal}</span>
                <span className="text-amber-900 tabular-nums">{placedOrder.total} {t.currency}</span>
              </div>
            </div>

            {/* Need Support Help Option (Unified Support Number) */}
            <div className="p-3.5 bg-amber-50/80 rounded-xl border border-amber-200/80 text-xs text-stone-700 space-y-2">
              <p>{t.needSupportAfterOrder}</p>
              <a
                href={supportWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg font-semibold transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.supportChatWhatsApp} (01001224375)</span>
              </a>
            </div>

            <button
              onClick={onClose}
              className="w-full py-2.5 text-xs font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer"
            >
              {t.continueShopping}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
