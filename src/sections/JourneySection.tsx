import React, { useState } from 'react';
import { useLanguage } from '../app/providers/LanguageContext';
import { SectionWrapper } from '../components/layout/SectionWrapper';
import { TIMELINE_MILESTONES } from '../data/journey';
import { Badge } from '../components/presentation/Badge';
import { GraduationCap, CheckCircle2 } from 'lucide-react';

export const JourneySection: React.FC = () => {
  const { isArabic, t } = useLanguage();
  const [selectedMilestoneIndex, setSelectedMilestoneIndex] = useState<number>(4); // Default to current phase

  const currentMilestone = TIMELINE_MILESTONES[selectedMilestoneIndex] || TIMELINE_MILESTONES[4];

  return (
    <SectionWrapper
      id="journey"
      sectionNumber="09"
      badgeText={t.journey.badge}
      title={t.journey.title}
      subtitle={t.journey.subtitle}
      containerWidth="wide"
    >
      <div className="space-y-12">
        
        {/* Founder Context Narrative Element */}
        <div className="rounded-2xl bg-[#141D18] border border-[#B39A63]/30 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="w-12 h-12 rounded-xl bg-[#111714] border border-[#B39A63]/40 flex items-center justify-center flex-shrink-0">
            <GraduationCap className="w-6 h-6 text-[#B39A63]" />
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Badge variant="gold" size="sm">
                {isArabic ? 'المنطلق الواقعي للفكرة' : 'Real-World Origin Context'}
              </Badge>
              <span className="font-mono text-xs text-gray-400">
                {isArabic ? '3 سنوات • 300+ إذاعة ومناسبة ميدانية' : '3 Years • 300+ Supervised Events'}
              </span>
            </div>

            <h4 className="text-lg sm:text-xl font-bold text-white">
              {t.journey.founderBoxTitle}
            </h4>

            <p className="text-xs sm:text-sm text-[#9CA8A2] leading-relaxed max-w-4xl">
              {t.journey.founderBoxText}
            </p>

            <div className="pt-1 text-[11px] font-mono text-emerald-400">
              {isArabic 
                ? '* تنويه توثيقي: رقم 300+ يمثل خبرة المشرف الميدانية في المدارس، وليس عدد الإذاعات المولدة عبر نشاط (التي بلغت 1,500+).'
                : '* Clarification: 300+ reflects supervisor field experience in schools, distinct from Nashat-generated broadcasts (1,500+).'}
            </div>
          </div>
        </div>

        {/* Interactive 5-Phase Horizontal Timeline */}
        <div className="space-y-6">
          <div className="text-xs font-mono text-[#D4C198] uppercase tracking-wider">
            {isArabic ? 'مسار تطور المشروع عبر المراحل (انقر للتفاصيل):' : 'Project Evolution Timeline (Click Stage to Inspect):'}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {TIMELINE_MILESTONES.map((milestone, idx) => {
              const isSelected = idx === selectedMilestoneIndex;
              const isCurrent = milestone.status === 'current';
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedMilestoneIndex(idx)}
                  type="button"
                  className={`p-4 rounded-xl border text-start transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#18261E] border-[#B39A63] shadow-md shadow-[#B39A63]/15'
                      : 'bg-[#141D18] border-white/5 hover:border-[#B39A63]/30 text-gray-400 hover:text-white'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-[11px] font-bold text-[#B39A63]">
                        {milestone.phase}
                      </span>
                      {isCurrent ? (
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      ) : (
                        <CheckCircle2 className="w-3.5 h-3.5 text-gray-600" />
                      )}
                    </div>

                    <h4 className={`text-xs sm:text-sm font-bold mb-1 leading-snug ${isSelected ? 'text-white' : 'text-gray-300'}`}>
                      {isArabic ? milestone.titleAr : milestone.titleEn}
                    </h4>
                  </div>

                  <div className="pt-2 mt-2 border-t border-white/5 font-mono text-[10px] text-gray-400">
                    {isArabic ? milestone.dateOrStageAr : milestone.dateOrStageEn}
                  </div>

                  {isSelected && (
                    <div className="absolute bottom-0 start-0 end-0 h-[2px] bg-[#B39A63]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Selected Milestone Detail Showcase */}
          <div className="rounded-xl bg-[#111714] border border-[#B39A63]/30 p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2">
                <Badge variant={currentMilestone.status === 'current' ? 'live' : 'gold'} size="sm">
                  {currentMilestone.phase}
                </Badge>
                <span className="font-mono text-xs text-[#D4C198]">
                  {isArabic ? currentMilestone.dateOrStageAr : currentMilestone.dateOrStageEn}
                </span>
              </div>

              <h4 className="text-xl sm:text-2xl font-bold text-white">
                {isArabic ? currentMilestone.titleAr : currentMilestone.titleEn}
              </h4>

              <p className="text-sm text-[#9CA8A2] leading-relaxed">
                {isArabic ? currentMilestone.descriptionAr : currentMilestone.descriptionEn}
              </p>
            </div>

            <div className="lg:max-w-md w-full p-4 rounded-lg bg-[#151E19] border border-white/5 space-y-2">
              <div className="text-xs font-mono text-[#D4C198] uppercase">
                {isArabic ? 'أبرز مخرجات هذه المرحلة:' : 'Stage Highlights:'}
              </div>
              <ul className="space-y-1.5 text-xs text-gray-300">
                {(isArabic ? currentMilestone.highlightsAr : currentMilestone.highlightsEn).map((h, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-2">
                    <span className="text-[#B39A63] mt-0.5">•</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
};
