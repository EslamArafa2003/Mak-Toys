import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { MessageCircle, HelpCircle, X, PhoneCall } from 'lucide-react';

interface CustomerSupportWidgetProps {
  lang: Language;
}

export const CustomerSupportWidget: React.FC<CustomerSupportWidgetProps> = ({ lang }) => {
  const t = translations[lang];
  const [isOpen, setIsOpen] = useState(false);

  const supportWaUrl = `https://wa.me/201001224375?text=${encodeURIComponent(
    lang === 'ar'
      ? 'مرحباً خدمة عملاء ألعاب ماك (Mak Toys)، لدي استفسار أو أحتاج مساعدة:'
      : 'Hello Mak Toys Customer Support, I have a question or need assistance:'
  )}`;

  return (
    <div className="fixed bottom-5 start-5 z-40">
      {isOpen ? (
        <div className="bg-white rounded-2xl shadow-xl border border-stone-200 p-4 w-72 space-y-3 animate-scale-up">
          <div className="flex items-center justify-between pb-2 border-b border-stone-100">
            <div className="flex items-center gap-1.5 text-xs font-bold text-stone-900">
              <HelpCircle className="w-4 h-4 text-amber-800" />
              <span>{t.supportLabel}</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-stone-400 hover:text-stone-700 p-1 rounded-md"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-stone-600 leading-relaxed">
            {t.supportHelpText}
          </p>

          <div className="space-y-2">
            <a
              href={supportWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 px-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-bold transition-colors shadow-xs cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{lang === 'ar' ? 'محادثة واتساب مباشرة' : 'Chat on WhatsApp'}</span>
            </a>

            <a
              href="tel:+201001224375"
              className="flex items-center justify-center gap-2 w-full py-2 px-3 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-lg text-xs font-medium border border-stone-200 transition-colors cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5 text-stone-600" />
              <span>01001224375</span>
            </a>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-3.5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer border border-stone-700 group active:scale-95"
          title={t.supportLabel}
        >
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
          <span className="text-xs font-semibold whitespace-nowrap">
            {lang === 'ar' ? 'خدمة العملاء' : 'Support'}
          </span>
          <span className="text-[11px] font-mono text-stone-400 hidden sm:inline">01001224375</span>
        </button>
      )}
    </div>
  );
};
