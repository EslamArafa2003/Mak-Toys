import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { TEAM_MEMBERS, OFFICIAL_SUPPORT_PHONE, OFFICIAL_SUPPORT_WHATSAPP } from '../data/mockData';
import { MessageCircle, Phone, MapPin, Users, Headphones, ShieldCheck, HeartHandshake } from 'lucide-react';

interface TeamSectionProps {
  lang: Language;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ lang }) => {
  const t = translations[lang];

  const officialWaLink = `https://wa.me/${OFFICIAL_SUPPORT_WHATSAPP}?text=${encodeURIComponent(
    lang === 'ar'
      ? 'مرحباً، أود التواصل مع خدمة عملاء ماك تويز (Mak Toys).'
      : 'Hello, I would like to contact Mak Toys Customer Support.'
  )}`;
  const officialCallLink = `tel:+${OFFICIAL_SUPPORT_WHATSAPP}`;

  return (
    <section id="team" className="py-16 border-b border-stone-200 scroll-mt-20 bg-stone-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800">
              <Users className="w-4 h-4" />
              <span>{lang === 'ar' ? 'فريق العمل والقيادة' : 'Founders & Leadership'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
              {t.teamTitle}
            </h2>
            <p className="text-sm text-stone-600 mt-1">
              {t.teamSubtitle}
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-900 mt-2">
              <MapPin className="w-3.5 h-3.5" />
              <span>{t.teamLocation}</span>
            </div>
          </div>

          {/* Dedicated Customer Support Contact Card (Eslam Arafa only) */}
          <div className="bg-white rounded-2xl border border-amber-200 p-5 shadow-xs shrink-0 max-w-md w-full">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center shrink-0">
                <Headphones className="w-5 h-5 text-amber-800" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                    {lang === 'ar' ? 'خدمة العملاء الرسمية' : 'Official Customer Care'}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    {lang === 'ar' ? 'متاح الآن' : 'Available'}
                  </span>
                </div>
                <div className="text-sm font-bold text-stone-900 mt-0.5">
                  {lang === 'ar' ? 'إسلام عرفة — مسؤول خدمة العملاء والعمليات' : 'Eslam Arafa — Customer Care & Operations'}
                </div>
                <div className="text-xs font-mono font-bold text-stone-700 mt-0.5 tabular-nums">
                  {OFFICIAL_SUPPORT_PHONE}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-stone-100">
              <a
                href={officialWaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-xs transition-colors cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>{lang === 'ar' ? 'مراسلة واتساب' : 'WhatsApp Us'}</span>
              </a>

              <a
                href={officialCallLink}
                className="flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-bold text-stone-800 bg-stone-100 hover:bg-stone-200 border border-stone-300 rounded-lg transition-colors cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5 text-stone-600" />
                <span>{lang === 'ar' ? 'اتصال هاتفي' : 'Call Support'}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Founders Cards Grid (Names, roles & bios only - no public personal phone numbers) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TEAM_MEMBERS.map((member) => {
            const name = lang === 'ar' ? member.name_ar : member.name_en;
            const role = lang === 'ar' ? member.role_ar : member.role_en;
            const bio = lang === 'ar' ? member.bio_ar : member.bio_en;

            return (
              <div
                key={member.id}
                className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-100 to-amber-200 text-amber-900 flex items-center justify-center font-bold text-lg border border-amber-300 shrink-0">
                      {member.name_en.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-stone-900">
                        {name}
                      </h3>
                      <div className="text-xs text-amber-800 font-medium mt-0.5">
                        {role}
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-stone-600 leading-relaxed mt-4 pt-3 border-t border-stone-100">
                    {bio}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
                  <span className="flex items-center gap-1">
                    <HeartHandshake className="w-3 h-3 text-amber-600" />
                    <span>{lang === 'ar' ? 'فريق ألعاب ماك' : 'Mak Toys Team'}</span>
                  </span>
                  <span className="font-medium text-stone-600">
                    {lang === 'ar' ? 'الإسكندرية، مصر' : 'Alexandria, Egypt'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
