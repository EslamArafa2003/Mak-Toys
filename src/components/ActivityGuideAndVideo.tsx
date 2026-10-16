import React, { useState, useEffect, useRef } from 'react';
import { ActivityGuideItem, Language } from '../types';
import { translations } from '../translations';
import { ACTIVITY_GUIDE_ITEMS, ACTIVITY_GUIDE_IMAGE } from '../data/mockData';
import { BookOpen, Play, Pause, Volume2, VolumeX, Subtitles, Download, Clock, Users, CheckCircle, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

interface ActivityGuideAndVideoProps {
  lang: Language;
}

export const ActivityGuideAndVideo: React.FC<ActivityGuideAndVideoProps> = ({ lang }) => {
  const t = translations[lang];

  // Video & Audio state
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);
  const [showSubtitles, setShowSubtitles] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [selectedActivityId, setSelectedActivityId] = useState<string>(ACTIVITY_GUIDE_ITEMS[0].id);
  const [audioSupported, setAudioSupported] = useState(true);

  const audioCtxRef = useRef<AudioContext | null>(null);

  // Play a soft pleasant introductory chime with Web Audio API
  const playChime = () => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // Warm Egyptian lute/oud-style soft harmonic tones
      const notes = [261.63, 329.63, 392.00, 523.25]; // C, E, G, C
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.15);
        gain.gain.setValueAtTime(0.08, ctx.currentTime + idx * 0.15);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.15 + 0.6);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + idx * 0.15);
        osc.stop(ctx.currentTime + idx * 0.15 + 0.6);
      });
    } catch (e) {
      console.warn('AudioContext error:', e);
    }
  };

  // Speak the real narration aloud using browser speech synthesis
  const speakNarration = () => {
    if (!('speechSynthesis' in window)) {
      setAudioSupported(false);
      return;
    }

    window.speechSynthesis.cancel(); // Reset any previous speech

    if (isMuted) return;

    playChime();

    const arabicText =
      'أهلاً بكم مع ألعاب ماك، صُنعت في الإسكندرية بحب! أنا فرح، مساعدة السوق الشعبية.. سلتنا مليئة بالخير والمشاركة. ومعي صديقي مشمش ثعلب الفنك الشجاع.. تعالوا نلعب ونتعلم معاً مهارات الحياة والكرم والفضول!';
    const englishText =
      'Welcome to Mak Toys, handcrafted in Alexandria, Egypt! I am Farah, the Market Helper. With me is Mishmish, the Desert Fennec Fox. Let us play, share kindness, and learn together!';

    const utterance = new SpeechSynthesisUtterance(lang === 'ar' ? arabicText : englishText);
    utterance.lang = lang === 'ar' ? 'ar-EG' : 'en-US';
    utterance.rate = 0.95;
    utterance.pitch = 1.05;

    // Pick an Arabic voice if available
    const voices = window.speechSynthesis.getVoices();
    if (lang === 'ar') {
      const arVoice = voices.find((v) => v.lang.startsWith('ar'));
      if (arVoice) utterance.voice = arVoice;
    } else {
      const enVoice = voices.find((v) => v.lang.startsWith('en'));
      if (enVoice) utterance.voice = enVoice;
    }

    utterance.onend = () => {
      // Keep playing visually or cycle
    };

    window.speechSynthesis.speak(utterance);
  };

  const handleTogglePlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    } else {
      setIsPlaying(true);
      speakNarration();
    }
  };

  // Stop audio if unmounted
  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  // Update progress timer
  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setVideoProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            if ('speechSynthesis' in window) {
              window.speechSynthesis.cancel();
            }
            return 0;
          }
          return prev + 1;
        });
      }, 350);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const selectedActivity = ACTIVITY_GUIDE_ITEMS.find((a) => a.id === selectedActivityId) || ACTIVITY_GUIDE_ITEMS[0];

  return (
    <section id="activities" className="py-16 border-b border-stone-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800">
            <BookOpen className="w-4 h-4" />
            <span>{lang === 'ar' ? 'المحتوى الإثرائي والتطبيقي' : 'Parent-Child Enrichment'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
            {t.activitiesTitle}
          </h2>
          <p className="text-sm text-stone-600 mt-1">
            {t.activitiesSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Video & Spoken Audio Player (6 Cols) */}
          <div className="lg:col-span-6 space-y-5">
            <div className="bg-stone-900 rounded-2xl overflow-hidden border border-stone-800 shadow-lg text-stone-100">
              {/* Screen Area */}
              <div className="relative aspect-16/9 bg-stone-950 flex items-center justify-center overflow-hidden group">
                <img
                  src={ACTIVITY_GUIDE_IMAGE}
                  alt="Mak Toys Educational Story Play"
                  referrerPolicy="no-referrer"
                  className={`w-full h-full object-cover transition-opacity duration-300 ${isPlaying ? 'opacity-90' : 'opacity-70'}`}
                />

                {/* Subtitle Scrim & Real Text */}
                {showSubtitles && (
                  <div className="absolute bottom-12 inset-x-4 text-center z-10 pointer-events-none">
                    <div className="inline-block bg-stone-950/85 text-amber-100 px-3.5 py-1.5 rounded text-xs font-medium backdrop-blur-xs max-w-lg shadow leading-relaxed">
                      {lang === 'ar'
                        ? (videoProgress < 50
                            ? '«فرح»: أهلاً بكم في ألعاب ماك بالإسكندرية! اتفضلوا تفاحة من سلة السوق.. المشاركة بتزيد البركة.'
                            : '«مشمش»: في صحراء مصر وسيوة، بنتعلم نسمع بعض ونمشي خطوة بخطوة بالصبر والشجاعة.')
                        : (videoProgress < 50
                            ? 'Farah: "Welcome to Mak Toys from Alexandria! Have an apple from my market basket—sharing brings joy."'
                            : 'Mishmish: "Across Egypt’s dunes, we listen to one another and explore with courage."')}
                    </div>
                  </div>
                )}

                {/* Sound wave animated bars when playing */}
                {isPlaying && (
                  <div className="absolute top-4 end-4 z-20 flex items-end gap-1 h-6 bg-black/60 px-2 py-1 rounded backdrop-blur-xs">
                    <span className="w-1 bg-amber-400 rounded-full animate-bounce h-4" />
                    <span className="w-1 bg-amber-400 rounded-full animate-bounce h-6 delay-75" />
                    <span className="w-1 bg-amber-400 rounded-full animate-bounce h-3 delay-150" />
                    <span className="w-1 bg-amber-400 rounded-full animate-bounce h-5 delay-200" />
                    <span className="text-[10px] text-amber-200 font-mono ms-1">{lang === 'ar' ? 'صوت حقيقي شغال' : 'Audio Live'}</span>
                  </div>
                )}

                {/* Center Big Play/Pause Button */}
                <button
                  onClick={handleTogglePlay}
                  className="absolute z-20 w-16 h-16 rounded-full bg-amber-900/90 text-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform cursor-pointer border border-amber-400/50 backdrop-blur-xs"
                  title={isPlaying ? t.audioStoryPause : t.audioStoryPlay}
                >
                  {isPlaying ? <Pause className="w-7 h-7" /> : <Play className="w-7 h-7 ms-1 text-amber-200" />}
                </button>

                {/* Top Badge */}
                <div className="absolute top-3 start-3 z-10">
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-black/60 text-stone-200 backdrop-blur-xs flex items-center gap-1.5">
                    <Volume2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>{lang === 'ar' ? 'قصة صوتية مصرية مسموعة' : 'Spoken Audio Story'}</span>
                  </span>
                </div>
              </div>

              {/* Player Controls Bar */}
              <div className="p-4 bg-stone-900 border-t border-stone-800 space-y-2">
                {/* Scrub Bar */}
                <div
                  className="w-full bg-stone-800 h-1.5 rounded-full cursor-pointer relative overflow-hidden"
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const clickX = e.clientX - rect.left;
                    setVideoProgress(Math.floor((clickX / rect.width) * 100));
                  }}
                >
                  <div
                    className="bg-amber-500 h-full transition-all duration-200"
                    style={{ width: `${videoProgress}%` }}
                  />
                </div>

                {/* Control Actions */}
                <div className="flex items-center justify-between text-xs pt-1">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={handleTogglePlay}
                      className="text-stone-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 font-medium"
                    >
                      {isPlaying ? <Pause className="w-4 h-4 text-amber-400" /> : <Play className="w-4 h-4 text-amber-400" />}
                      <span>{isPlaying ? t.audioStoryPause : t.audioStoryPlay}</span>
                    </button>
                    <span className="font-mono text-stone-400 tabular-nums">
                      {Math.floor((videoProgress / 100) * 2)}:{String(Math.floor(((videoProgress / 100) * 45) % 60)).padStart(2, '0')} / 2:45
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        const newMute = !isMuted;
                        setIsMuted(newMute);
                        if (newMute && 'speechSynthesis' in window) {
                          window.speechSynthesis.cancel();
                        } else if (!newMute && isPlaying) {
                          speakNarration();
                        }
                      }}
                      className="p-1.5 text-stone-400 hover:text-stone-200 transition-colors cursor-pointer"
                      title={isMuted ? 'Unmute' : 'Mute'}
                    >
                      {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-amber-300" />}
                    </button>

                    <button
                      onClick={() => setShowSubtitles(!showSubtitles)}
                      className={`flex items-center gap-1 px-2.5 py-1 rounded text-[11px] transition-colors cursor-pointer border ${
                        showSubtitles
                          ? 'bg-amber-950 border-amber-600 text-amber-300 font-bold'
                          : 'bg-stone-800 border-stone-700 text-stone-400'
                      }`}
                    >
                      <Subtitles className="w-3.5 h-3.5" />
                      <span>{t.videoSubtitlesToggle}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Audio State Notice */}
            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-stone-700">
                <Sparkles className="w-4 h-4 text-amber-800 shrink-0" />
                <span>{t.videoAudioActiveNotice}</span>
              </div>
              <button
                onClick={() => {
                  alert(lang === 'ar' ? 'جاري تجهيز وطباعة دليل الأنشطة التفاعلي للألعاب ماك (PDF)...' : 'Preparing printable Activity Guide booklet PDF...');
                }}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-amber-950 bg-white hover:bg-amber-100 border border-amber-300 rounded-lg transition-colors cursor-pointer shrink-0"
              >
                <Download className="w-3.5 h-3.5 text-amber-800" />
                <span>{t.printGuideBtn}</span>
              </button>
            </div>
          </div>

          {/* Right Column: 5 Interactive Activity Cards (6 Cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-stone-800 pb-1 border-b border-stone-200">
              {lang === 'ar' ? 'اختر نشاطاً لعرض الخطوات التفصيلية (5 أنشطة):' : 'Select an Activity to View Steps (5 Activities):'}
            </div>

            {ACTIVITY_GUIDE_ITEMS.map((act, index) => {
              const isSelected = act.id === selectedActivityId;
              const title = lang === 'ar' ? act.title_ar : act.title_en;
              const obj = lang === 'ar' ? act.objective_ar : act.objective_en;
              const steps = lang === 'ar' ? act.steps_ar : act.steps_en;

              return (
                <div
                  key={act.id}
                  className={`rounded-xl border transition-all overflow-hidden ${
                    isSelected
                      ? 'bg-white border-amber-800 shadow-sm'
                      : 'bg-stone-50/80 border-stone-200 hover:bg-stone-100/60'
                  }`}
                >
                  <button
                    onClick={() => setSelectedActivityId(act.id)}
                    className="w-full p-4 flex items-center justify-between text-start rtl:text-right gap-3 cursor-pointer"
                  >
                    <div>
                      <div className="flex items-center gap-2 text-[11px] text-stone-500 font-medium mb-1">
                        <span className="font-mono text-amber-900 font-bold">0{index + 1}</span>
                        <span>·</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {act.duration}
                        </span>
                        <span>·</span>
                        <span className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {act.age}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-stone-900">
                        {title}
                      </h4>
                    </div>
                    <div className="text-stone-400 shrink-0">
                      {isSelected ? <ChevronUp className="w-4 h-4 text-amber-800" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {/* Expanded Content */}
                  {isSelected && (
                    <div className="px-4 pb-5 pt-1 border-t border-stone-100 space-y-3 bg-amber-50/20">
                      <div>
                        <span className="text-xs font-bold text-amber-950 block mb-0.5">
                          {t.activityGoal}
                        </span>
                        <p className="text-xs text-stone-700 leading-relaxed">
                          {obj}
                        </p>
                      </div>

                      <div>
                        <span className="text-xs font-bold text-amber-950 block mb-1">
                          {t.activitySteps}
                        </span>
                        <ul className="space-y-1.5 text-xs text-stone-700">
                          {steps.map((step, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                              <span>{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
