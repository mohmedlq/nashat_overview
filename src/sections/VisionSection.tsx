import React from 'react';
import { useLanguage } from '../app/providers/LanguageContext';
import { SectionWrapper } from '../components/layout/SectionWrapper';
import { FUTURE_VISION_PILLARS } from '../data/journey';
import { Badge } from '../components/presentation/Badge';
import { Compass, CheckCircle2, ArrowUpRight } from 'lucide-react';

export const VisionSection: React.FC = () => {
  const { isArabic, t } = useLanguage();

  return (
    <SectionWrapper
      id="vision"
      sectionNumber="10"
      badgeText={t.vision.badge}
      title={t.vision.title}
      subtitle={t.vision.subtitle}
    >
      <div className="space-y-12">
        
        {/* Distinction Matrix: Available Today vs Long-Term Strategic Vision */}
        <div className="rounded-2xl bg-[#141D18] border border-[#B39A63]/25 p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between border-b border-white/5 pb-4">
            <h3 className="text-lg sm:text-xl font-bold text-white">
              {t.vision.currentVsFutureTitle}
            </h3>
            <Badge variant="gold" size="sm">
              {isArabic ? 'مصفوفة التمييز الدقيق' : 'Clear Separation Matrix'}
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Column 1: What is available today (Phase 2) */}
            <div className="p-5 sm:p-6 rounded-xl bg-[#111714] border border-white/10 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <h4 className="font-bold text-white text-base">
                  {t.vision.currentColTitle}
                </h4>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>
                    {isArabic 
                      ? 'توليد فوري لتقارير النشاط المدرسي بالذكاء الاصطناعي خلال 5 ثوانٍ.'
                      : 'AI-powered generation of formal school activity reports in 5 seconds.'}
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>
                    {isArabic 
                      ? 'توليد فقرات الإذاعة الصباحية المنظمة وإتاحة التعديل عليها.'
                      : 'Structured school morning broadcast generator with full editorial review.'}
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>
                    {isArabic 
                      ? 'قسم خطط النشاط المدرسي وتنظيم الجداول.'
                      : 'Dedicated activity plan organization section.'}
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>
                    {isArabic 
                      ? 'تصدير مباشر لمستندات PDF منسقة مع إرفاق الشواهد وروابط عين.'
                      : 'Direct PDF export with field photos and Ain educational portal links.'}
                  </span>
                </li>
              </ul>
            </div>

            {/* Column 2: The Future Vision Ambition */}
            <div className="p-5 sm:p-6 rounded-xl bg-[#17221C] border border-[#B39A63]/30 space-y-4">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#D4C198]" />
                <h4 className="font-bold text-[#D4C198] text-base">
                  {t.vision.futureColTitle}
                </h4>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#B39A63] font-bold text-sm mt-0.5">→</span>
                  <span>
                    {isArabic 
                      ? 'التوسع من أدوات توليد فردية إلى منصة شاملة لإدارة دورة حياة النشاط كاملاً.'
                      : 'Evolving from individual generation tools into an end-to-end activity management hub.'}
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#B39A63] font-bold text-sm mt-0.5">→</span>
                  <span>
                    {isArabic 
                      ? 'ربط الخطط الفصلية بالتقارير الدورية وأتمتة التوثيق التراكمي.'
                      : 'Interconnecting semester plans with recurring reports for cumulative automation.'}
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#B39A63] font-bold text-sm mt-0.5">→</span>
                  <span>
                    {isArabic 
                      ? 'تمكين رواد النشاط من توفير أكثر من 80% من الجهد الإداري لصالح التوجيه الميداني.'
                      : 'Empowering coordinators to reclaim 80%+ of administrative time for student impact.'}
                  </span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* 3 Strategic Pillars of the Future Vision */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FUTURE_VISION_PILLARS.map(pillar => (
            <div
              key={pillar.num}
              className="p-6 rounded-2xl bg-[#141D18] border border-white/5 hover:border-[#B39A63]/40 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="font-mono text-xs font-bold text-[#B39A63]">
                  Pillar {pillar.num}
                </span>

                <h4 className="text-lg font-bold text-white">
                  {isArabic ? pillar.titleAr : pillar.titleEn}
                </h4>

                <p className="text-xs sm:text-sm text-[#9CA8A2] leading-relaxed">
                  {isArabic ? pillar.descAr : pillar.descEn}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#D4C198]">
                <span>{isArabic ? 'رؤية طموحة قيد التطوير' : 'Strategic Roadmap'}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </SectionWrapper>
  );
};
