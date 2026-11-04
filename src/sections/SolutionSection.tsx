import React, { useState } from 'react';
import { useLanguage } from '../app/providers/LanguageContext';
import { SectionWrapper } from '../components/layout/SectionWrapper';
import { CORE_CAPABILITIES, PRODUCT_ROUTES, PROJECT_INFO } from '../data/project';
import { CheckCircle2, ArrowUpRight, Sparkles, Compass } from 'lucide-react';

export const SolutionSection: React.FC = () => {
  const { isArabic, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'capabilities' | 'routes'>('capabilities');

  return (
    <SectionWrapper
      id="solution"
      sectionNumber="03"
      badgeText={t.solution.badge}
      title={t.solution.title}
      subtitle={t.solution.subtitle}
    >
      <div className="space-y-8">
        
        {/* View Switcher Tabs */}
        <div className="flex items-center gap-2 border-b border-[#B39A63]/20 pb-4">
          <button
            onClick={() => setActiveTab('capabilities')}
            type="button"
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'capabilities'
                ? 'bg-[#B39A63] text-[#111714] shadow-md shadow-[#B39A63]/20'
                : 'bg-[#151E19] text-gray-300 hover:text-white border border-white/5'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>{t.solution.tabCapabilities}</span>
          </button>

          <button
            onClick={() => setActiveTab('routes')}
            type="button"
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'routes'
                ? 'bg-[#B39A63] text-[#111714] shadow-md shadow-[#B39A63]/20'
                : 'bg-[#151E19] text-gray-300 hover:text-white border border-white/5'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>{t.solution.tabRoutes}</span>
          </button>
        </div>

        {/* Tab 1: 8 Core Capabilities */}
        {activeTab === 'capabilities' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {CORE_CAPABILITIES.map(cap => (
              <div
                key={cap.id}
                className="rounded-xl bg-[#151E19] border border-[#B39A63]/20 hover:border-[#B39A63]/50 p-5 sm:p-6 transition-all hover:bg-[#18231D] flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-[#B39A63]">
                      #{cap.num}
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-[#B39A63]/60 group-hover:text-[#B39A63] transition-colors" />
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug group-hover:text-[#D4C198] transition-colors">
                    {isArabic ? cap.titleAr : cap.titleEn}
                  </h4>

                  <p className="text-xs sm:text-sm text-[#9CA8A2] leading-relaxed">
                    {isArabic ? cap.descAr : cap.descEn}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-mono text-emerald-400/90 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>{isArabic ? 'جاهزة ومفعلة بالمنصة' : 'Verified Capability'}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Known Application Routes & Architecture */}
        {activeTab === 'routes' && (
          <div className="rounded-xl bg-[#151E19] border border-[#B39A63]/25 overflow-hidden">
            <div className="p-4 sm:p-6 border-b border-white/10 bg-[#121A15] flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-white">
                  {isArabic ? 'هيكل المسارات والصفحات الحية في منصة نشاط' : 'Live Routes & Application Architecture'}
                </h3>
                <p className="text-xs sm:text-sm text-[#9CA8A2]">
                  {isArabic 
                    ? 'المسارات الفعلية المؤكدة التي يتنقل بينها رواد النشاط لإنجاز أعمالهم.'
                    : 'Verified application routes providing the actual user journey across the product.'}
                </p>
              </div>

              <a
                href={PROJECT_INFO.urls.platform}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-[#D4C198] hover:underline"
              >
                <span>nashat-seven.vercel.app</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="divide-y divide-white/5">
              {PRODUCT_ROUTES.map((route, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-6 hover:bg-[#18231D] transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2.5">
                      <code className="font-mono text-xs sm:text-sm font-bold text-[#D4C198] bg-[#111714] px-2.5 py-1 rounded border border-[#B39A63]/30">
                        {route.path}
                      </code>
                      <span className="text-sm sm:text-base font-semibold text-white">
                        {isArabic ? route.nameAr : route.nameEn}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#9CA8A2] max-w-2xl">
                      {isArabic ? route.purposeAr : route.purposeEn}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono bg-emerald-950/60 text-emerald-400 border border-emerald-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      {isArabic ? route.statusAr : route.statusEn}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </SectionWrapper>
  );
};

