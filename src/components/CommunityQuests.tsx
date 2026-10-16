import React, { useState } from 'react';
import { Language, CommunityQuest } from '../types';
import { COMMUNITY_QUESTS } from '../data/mockData';
import {
  Compass,
  Heart,
  Box,
  Award,
  Sparkles,
  CheckCircle2,
  Users,
  EyeOff,
  Flame,
  Clock,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';

interface CommunityQuestsProps {
  lang: Language;
}

export const CommunityQuests: React.FC<CommunityQuestsProps> = ({ lang }) => {
  const [selectedQuest, setSelectedQuest] = useState<CommunityQuest>(COMMUNITY_QUESTS[0]);

  const getIcon = (type: string) => {
    switch (type) {
      case 'heart':
        return <Heart className="w-5 h-5 text-rose-600" />;
      case 'compass':
        return <Compass className="w-5 h-5 text-blue-600" />;
      case 'box':
        return <Box className="w-5 h-5 text-emerald-600" />;
      case 'award':
        return <Award className="w-5 h-5 text-amber-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-amber-600" />;
    }
  };

  return (
    <section id="community-quests" className="py-16 border-b border-stone-200 scroll-mt-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800">
              <Users className="w-4 h-4" />
              <span>
                {lang === 'ar' ? 'مهام خارج الشاشة (Real-World Quests)' : 'Off-Screen Quests & Challenges'}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mt-1">
              {lang === 'ar'
                ? 'مهام خاصة بالتفاعل مع اللعبة والعالم من حوله ومجتمع البراند'
                : 'Interactive Missions Connecting Child, Nature & Mak Community'}
            </h2>
            <p className="text-sm text-stone-600 mt-2 leading-relaxed">
              {lang === 'ar'
                ? 'الطفل لا يلعب بمعزل عن الواقع! كل باكدج يضم دفتر كروت مهام حقيقية تشجع الطفل على التواصل الأسري، استكشاف عناصر الطبيعة، والمشاركة في مجتمع صناع ألعاب ماك.'
                : 'Play does not happen in isolation! Every kit includes real-world quest cards empowering kids to connect with family, explore natural textures, and engage in the Mak Makers Community.'}
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-900 shrink-0 self-start md:self-auto">
            <EyeOff className="w-4 h-4 text-emerald-700" />
            <span>{lang === 'ar' ? 'مهام واقعية 100% بدون أي شاشات' : '100% Tangible Off-Screen Missions'}</span>
          </div>
        </div>

        {/* Quests Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {COMMUNITY_QUESTS.map((quest) => {
            const isSelected = selectedQuest.id === quest.id;
            return (
              <div
                key={quest.id}
                onClick={() => setSelectedQuest(quest)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'border-amber-900 bg-amber-50/40 ring-1 ring-amber-900 shadow-sm'
                    : 'border-stone-200 bg-stone-50/60 hover:bg-white hover:shadow-xs'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-white border border-stone-200 flex items-center justify-center shadow-2xs">
                      {getIcon(quest.iconType)}
                    </div>
                    <span className="text-[11px] font-mono font-bold text-amber-800 bg-white px-2 py-0.5 rounded border border-stone-200">
                      {quest.level}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-stone-500 block">
                      {lang === 'ar' ? quest.category_ar : quest.category_en}
                    </span>
                    <h3 className="text-sm font-bold text-stone-900 mt-0.5">
                      {lang === 'ar' ? quest.title_ar : quest.title_en}
                    </h3>
                  </div>

                  <p className="text-xs text-stone-600 line-clamp-3">
                    {lang === 'ar' ? quest.missionDescription_ar : quest.missionDescription_en}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-200/60 flex items-center justify-between text-[11px]">
                  <span className="text-stone-500 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-stone-400" />
                    <span>{quest.estimatedTime}</span>
                  </span>
                  <span className={`font-semibold ${isSelected ? 'text-amber-900 font-bold' : 'text-stone-400'}`}>
                    {lang === 'ar' ? 'تفاصيل المهمة ←' : 'Details →'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Quest Spotlight Box */}
        <div className="bg-stone-50 rounded-3xl border border-stone-200 p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white border border-amber-200 flex items-center justify-center text-amber-800 shadow-xs">
              {getIcon(selectedQuest.iconType)}
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                {lang === 'ar' ? 'المهمة المختارة في كروت اللعبة:' : 'Featured Mission Card:'}
              </span>
              <h4 className="text-lg font-bold text-stone-900">
                {lang === 'ar' ? selectedQuest.title_ar : selectedQuest.title_en}
              </h4>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 bg-white rounded-xl border border-stone-200 space-y-1.5">
              <span className="text-xs font-bold text-stone-900 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-800" />
                <span>{lang === 'ar' ? 'التنفيذ الواقعي في بيئة الطفل:' : 'Real-World Action:'}</span>
              </span>
              <p className="text-xs text-stone-600 leading-relaxed">
                {lang === 'ar' ? selectedQuest.realWorldAction_ar : selectedQuest.realWorldAction_en}
              </p>
            </div>

            <div className="p-4 bg-white rounded-xl border border-amber-200 space-y-1.5">
              <span className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-amber-600" />
                <span>{lang === 'ar' ? 'مكافأة مجتمع ألعاب ماك وتفاعل البراند:' : 'Community Reward & Seal:'}</span>
              </span>
              <p className="text-xs text-stone-700 leading-relaxed">
                {lang === 'ar' ? selectedQuest.brandCommunityReward_ar : selectedQuest.brandCommunityReward_en}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
