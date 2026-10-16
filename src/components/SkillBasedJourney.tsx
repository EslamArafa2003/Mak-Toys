import React, { useState } from 'react';
import { Language, SkillLevel } from '../types';
import { SKILL_COURSE_LEVELS } from '../data/mockData';
import {
  Scissors,
  Award,
  Sparkles,
  Layers,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Clock,
  BookOpen,
  Wrench,
  ShieldCheck,
  Repeat
} from 'lucide-react';

interface SkillBasedJourneyProps {
  lang: Language;
}

export const SkillBasedJourney: React.FC<SkillBasedJourneyProps> = ({ lang }) => {
  const [selectedLevelId, setSelectedLevelId] = useState<SkillLevel>('level_2_creator');

  const selectedLevel =
    SKILL_COURSE_LEVELS.find((lvl) => lvl.id === selectedLevelId) || SKILL_COURSE_LEVELS[1];
  const ArrowIcon = lang === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <section id="skill-journey" className="py-16 border-b border-stone-200 scroll-mt-20 bg-stone-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800">
            <Scissors className="w-4 h-4" />
            <span>
              {lang === 'ar' ? 'منظومة تعليمية متكاملة (Skill-based Journey)' : 'Progressive Skill-Based Journey'}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mt-1">
            {lang === 'ar'
              ? 'مش مجرد لعبة عادية — نظام مستويات وكورسات داخل اللعبة'
              : 'Not Just an Ordinary Toy — A Complete Curriculum & Level System'}
          </h2>
          <p className="text-sm text-stone-600 mt-2 leading-relaxed">
            {lang === 'ar'
              ? 'المنتجات مصممة بطريقة "منهاج تدريجي (Progressive Skill Levels)" يبدأ ببساطة من الصفر (للمبتدئين) ويتدرج حتى الاحتراف، ويتضمن مهارات يدوية متعددة مش بس الخياطة وحدها. ده بيضمن علاقة مستمرة (Recurring Engagement) لأن الطفل هيكبر ويطلع للفل الأحدث، وهيبقى فيه كورسات ومستويات متقدمة.'
              : 'Engineered as a Progressive Skill Levels curriculum starting from ground zero up to mastery, covering diverse manual crafts beyond sewing alone. Drives recurring engagement across childhood development.'}
          </p>
        </div>

        {/* Level Switcher Selector Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {SKILL_COURSE_LEVELS.map((level) => {
            const isSelected = selectedLevel.id === level.id;
            return (
              <button
                key={level.id}
                onClick={() => setSelectedLevelId(level.id)}
                className={`p-4 rounded-2xl border text-start flex flex-col justify-between transition-all cursor-pointer ${
                  isSelected
                    ? 'border-amber-900 bg-white ring-2 ring-amber-900/20 shadow-md'
                    : 'border-stone-200 bg-white/70 hover:bg-white hover:border-stone-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-amber-800 uppercase">
                      Level 0{level.levelNumber}
                    </span>
                    <span className="text-[11px] font-semibold text-stone-500 bg-stone-100 px-2 py-0.5 rounded">
                      {level.targetAge}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-stone-900 mt-1.5">
                    {lang === 'ar' ? level.title_ar : level.title_en}
                  </h3>
                  <p className="text-xs text-stone-600 mt-1 line-clamp-2">
                    {lang === 'ar' ? level.subtitle_ar : level.subtitle_en}
                  </p>
                </div>

                <div className="mt-4 pt-2 border-t border-stone-100 flex items-center justify-between text-xs font-semibold">
                  <span className="text-amber-900 flex items-center gap-1">
                    <Award className="w-3.5 h-3.5" />
                    <span>{lang === 'ar' ? level.badge_ar : level.badge_en}</span>
                  </span>
                  <span className={`text-[11px] ${isSelected ? 'text-amber-900' : 'text-stone-400'}`}>
                    {lang === 'ar' ? 'عرض الكورس ←' : 'View Course →'}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Level Detailed Card */}
        <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-200">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md bg-amber-900 text-white font-mono text-xs font-bold">
                  LEVEL 0{selectedLevel.levelNumber}
                </span>
                <span className="text-xs font-semibold text-amber-900 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                  {selectedLevel.targetAge}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
                {lang === 'ar' ? selectedLevel.title_ar : selectedLevel.title_en}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                {lang === 'ar' ? selectedLevel.subtitle_ar : selectedLevel.subtitle_en}
              </p>
            </div>

            {/* Recurring Engagement Badge */}
            <div className="p-3 bg-amber-50/80 rounded-xl border border-amber-200 flex items-center gap-2 shrink-0">
              <Repeat className="w-4 h-4 text-amber-800 shrink-0" />
              <div className="text-[11px] leading-tight">
                <span className="font-bold text-amber-950 block">
                  {lang === 'ar' ? 'علاقة مستمرة (Recurring Engagement)' : 'Continuous Engagement'}
                </span>
                <span className="text-stone-600">
                  {lang === 'ar' ? 'الطفل يتدرج وينتظر الليفل الأحدث' : 'Progresses to next level with age'}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Column 1: Curriculum Scope & Methodology */}
            <div className="space-y-3">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase text-stone-900">
                <BookOpen className="w-4 h-4 text-amber-800" />
                <span>{lang === 'ar' ? 'منهج ومحتوى الكورس العملي' : 'Practical Curriculum'}</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed bg-stone-50 p-4 rounded-xl border border-stone-200">
                {lang === 'ar' ? selectedLevel.curriculumScope_ar : selectedLevel.curriculumScope_en}
              </p>
              <div className="p-3 rounded-xl bg-emerald-50/80 border border-emerald-200 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                <div className="text-[11px] text-emerald-950">
                  <span className="font-bold block">
                    {lang === 'ar' ? 'خالٍ تماماً من الشاشات 100%' : '100% Screen-Free Practice'}
                  </span>
                  <span>
                    {lang === 'ar'
                      ? 'جلسات تدريب حركي ولمسي تبعد الطفل عن التابلت والموبايل وتريح العين والمخ.'
                      : 'Hands-on sensory motor focus protecting eyes and cognitive tranquility.'}
                  </span>
                </div>
              </div>
            </div>

            {/* Column 2: Skills Acquired */}
            <div className="space-y-3">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase text-stone-900">
                <Sparkles className="w-4 h-4 text-amber-800" />
                <span>{lang === 'ar' ? 'المهارات اليدوية المكتسبة' : 'Manual Skills Acquired'}</span>
              </div>
              <ul className="space-y-2 text-xs text-stone-700">
                {(lang === 'ar' ? selectedLevel.skillsAcquired_ar : selectedLevel.skillsAcquired_en).map(
                  (skill: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-stone-50 border border-stone-100">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-800 shrink-0 mt-0.5" />
                      <span>{skill}</span>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Column 3: In-Box Tools & Pride Outcome */}
            <div className="space-y-3">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase text-stone-900">
                <Wrench className="w-4 h-4 text-amber-800" />
                <span>{lang === 'ar' ? 'الأدوات المرفقة بالعلبة' : 'In-Box Maker Tools'}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {(lang === 'ar' ? selectedLevel.toolsProvided_ar : selectedLevel.toolsProvided_en).map(
                  (tool: string, idx: number) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-xs rounded-md bg-stone-100 text-stone-800 border border-stone-200"
                    >
                      {tool}
                    </span>
                  )
                )}
              </div>

              {/* Project Outcome */}
              <div className="mt-4 p-4 rounded-xl bg-amber-50/50 border border-amber-200 space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-900 block">
                  {lang === 'ar' ? 'المخرج النهائي وإحساس الملكية:' : 'Tangible Pride & Outcome:'}
                </span>
                <p className="text-xs text-stone-700">
                  {lang === 'ar' ? selectedLevel.projectOutcome_ar : selectedLevel.projectOutcome_en}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
