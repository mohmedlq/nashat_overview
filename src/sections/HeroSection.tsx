import React from 'react';
import { useLanguage } from '../app/providers/LanguageContext';
import { PROJECT_INFO } from '../data/project';
import { Badge } from '../components/presentation/Badge';
import { ExternalLink, Cpu, Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { isArabic, t } = useLanguage();

  return (
    <section id="overview" className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 border-b border-[#B39A63]/20 tech-grid-pattern overflow-hidden">
      {/* Subtle Ambient Radial Highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#B39A63]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left / Primary Column: Editorial Storytelling */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Metadata Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <Badge variant="live">
                {isArabic ? PROJECT_INFO.status.ar : PROJECT_INFO.status.en}
              </Badge>
              <Badge variant="neutral">
                {isArabic ? PROJECT_INFO.currentPhase.ar : PROJECT_INFO.currentPhase.en}
              </Badge>
              <span className="font-mono text-xs text-[#9CA8A2] tracking-wider px-2 py-0.5 border border-white/5 bg-[#151E19] rounded">
                {isArabic ? `تدشين: ${PROJECT_INFO.launchDate.ar}` : `Launched: ${PROJECT_INFO.launchDate.en}`}
              </span>
            </div>

            {/* Main Brand & Tagline */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-[#D4C198] uppercase">
                <Sparkles className="w-4 h-4 text-[#B39A63]" />
                <span>{isArabic ? PROJECT_INFO.tagline.ar : PROJECT_INFO.tagline.en}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
                {t.hero.titleLine1} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4C198] via-[#B39A63] to-[#CBB688]">
                  {t.hero.titleLine2}
                </span>
              </h1>
            </div>

            {/* Focused Narrative Description */}
            <p className="text-base sm:text-lg text-[#9CA8A2] leading-relaxed max-w-2xl">
              {t.hero.description}
            </p>

            {/* Target Audience Segment Pills */}
            <div className="pt-2">
              <div className="text-xs font-mono text-[#D4C198]/70 uppercase tracking-widest mb-2.5">
                {isArabic ? 'المستفيدون المستهدفون في الميدان:' : 'Target Educational Audience:'}
              </div>
              <div className="flex flex-wrap gap-2">
                {PROJECT_INFO.audience.map((aud, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2.5 py-1 rounded bg-[#16211B] border border-[#B39A63]/20 text-gray-300"
                  >
                    {isArabic ? aud.roleAr : aud.roleEn}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions: Direct External Platform CTA + Internal Architecture Jump */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={PROJECT_INFO.urls.platform}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg bg-[#B39A63] hover:bg-[#C2A870] text-[#111714] font-semibold text-sm sm:text-base transition-all shadow-md hover:shadow-[0_0_20px_rgba(179,154,99,0.35)] cursor-pointer"
              >
                <span>{t.hero.primaryCta}</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href="#architecture"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#16201B] hover:bg-[#1E2B24] border border-[#B39A63]/30 text-gray-200 font-medium text-sm sm:text-base transition-all"
              >
                <Cpu className="w-4 h-4 text-[#B39A63]" />
                <span>{t.hero.secondaryCta}</span>
                {isArabic ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </a>
            </div>

            {/* Key Verified Performance Highlights */}
            <div className="pt-6 border-t border-[#B39A63]/15 grid grid-cols-3 gap-3 sm:gap-6">
              <div>
                <div className="font-mono text-xl sm:text-2xl font-bold text-white">3,500+</div>
                <div className="text-xs text-[#9CA8A2] mt-0.5">
                  {isArabic ? 'مستخدم معتمد' : 'Verified Users'}
                </div>
              </div>
              <div>
                <div className="font-mono text-xl sm:text-2xl font-bold text-[#D4C198]">5,000+</div>
                <div className="text-xs text-[#9CA8A2] mt-0.5">
                  {isArabic ? 'تقرير نشاط رسمي' : 'Formal Reports'}
                </div>
              </div>
              <div>
                <div className="font-mono text-xl sm:text-2xl font-bold text-emerald-400">5s</div>
                <div className="text-xs text-[#9CA8A2] mt-0.5">
                  {isArabic ? 'زمن التوليد بالذكاء' : 'Generation Speed'}
                </div>
              </div>
            </div>

          </div>

          {/* Right / Secondary Column: Authentic Application Showcase Frame */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-[#B39A63]/35 bg-[#151E19] p-3 shadow-2xl">
              
              {/* Window Header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 px-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                  <span className="font-mono text-[11px] text-[#9CA8A2] ms-2">
                    nashat-seven.vercel.app/generator
                  </span>
                </div>
                <Badge variant="live" size="sm">
                  {isArabic ? 'لقطة شاشة حقيقية' : 'Live Screen'}
                </Badge>
              </div>

              {/* Real Product Image Capture */}
              <div className="relative rounded-xl overflow-hidden border border-white/5 bg-[#111714]">
                <img
                  src="/assets/nashat-generator.png"
                  alt="واجهة المساعد الذكي في منصة نشاط - Real Nashat Generator UI"
                  className="w-full h-auto object-cover transform hover:scale-[1.02] transition-transform duration-500"
                  loading="eager"
                />
                
                {/* Floating Architectural Badge */}
                <div className="absolute bottom-3 start-3 end-3 p-3 rounded-lg bg-[#111714]/90 backdrop-blur-md border border-[#B39A63]/30 text-xs">
                  <div className="flex items-center justify-between text-[#D4C198] font-medium mb-1">
                    <span>{isArabic ? 'واجهة التوليد الفوري للمحتوى' : 'Real-time Generation Interface'}</span>
                    <span className="font-mono text-emerald-400">5 seconds</span>
                  </div>
                  <p className="text-[11px] text-gray-400 leading-tight">
                    {isArabic 
                      ? 'يصف رائد النشاط الفعالية بأسلوبه، ويتكفل نموذج التوليد ببناء أهداف ومخرجات التقرير تلقائياً.'
                      : 'Educator inputs brief bullet points; AI synthesizes objectives, indicators, and formal text.'}
                  </p>
                </div>
              </div>

              {/* Verified Domain Caption */}
              <div className="mt-3 flex items-center justify-between px-2 text-[11px] text-[#9CA8A2] font-mono">
                <span>Frontend: Vercel Edge</span>
                <span>API: ASP.NET Core</span>
                <span>AI: Gemini</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

