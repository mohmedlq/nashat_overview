import React from 'react';
import { useLanguage } from '../app/providers/LanguageContext';
import { SectionWrapper } from '../components/layout/SectionWrapper';
import { FileText, Radio, Clock, Layers, AlertCircle, Sparkles } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const { isArabic, t } = useLanguage();

  const problemIcons = [
    <FileText className="w-5 h-5 text-[#B39A63]" key="doc" />,
    <Radio className="w-5 h-5 text-[#B39A63]" key="radio" />,
    <Clock className="w-5 h-5 text-[#B39A63]" key="clock" />,
    <Layers className="w-5 h-5 text-[#B39A63]" key="layers" />
  ];

  return (
    <SectionWrapper
      id="problem"
      sectionNumber="02"
      badgeText={t.problem.badge}
      title={t.problem.title}
      subtitle={t.problem.subtitle}
    >
      <div className="space-y-12">
        
        {/* Core Problem Manifesto Banner */}
        <div className="relative rounded-2xl bg-gradient-to-r from-[#17221C] via-[#141E18] to-[#121A15] border border-[#B39A63]/30 p-6 sm:p-8 overflow-hidden shadow-lg">
          <div className="absolute top-0 end-0 p-8 opacity-10 pointer-events-none">
            <AlertCircle className="w-36 h-36 text-[#B39A63]" />
          </div>

          <div className="relative z-10 max-w-4xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase text-[#D4C198] tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#B39A63]" />
              <span>{t.problem.coreMessageTitle}</span>
            </div>
            <p className="text-lg sm:text-2xl font-medium text-white leading-relaxed">
              "{t.problem.coreMessageText}"
            </p>
            <div className="text-xs text-[#9CA8A2] pt-1">
              {isArabic 
                ? 'تشخيص ميداني دقيق: الوقت الضائع في كتابة الديباجات والتنسيق اليدوي هو وقت مقتطع مباشرة من توجيه الطلاب وإثراء الأنشطة الحية.'
                : 'Field Diagnosis: Every hour consumed by clerical reformatting is an hour subtracted from student engagement and program mentoring.'}
            </div>
          </div>
        </div>

        {/* 4 Problem Categories - Asymmetric Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.problem.cards.map((card, index) => (
            <div
              key={card.id}
              className="group relative rounded-xl bg-[#151E19] border border-[#B39A63]/20 hover:border-[#B39A63]/50 p-6 sm:p-8 transition-all hover:bg-[#18231D]"
            >
              {/* Card Header with Number and Icon */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#111714] border border-[#B39A63]/30 flex items-center justify-center">
                  {problemIcons[index]}
                </div>
                <span className="font-mono text-sm font-bold text-[#B39A63]/60">
                  {card.num}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-[#D4C198] transition-colors">
                {card.title}
              </h3>

              {/* Detailed Real Pain Description */}
              <p className="text-sm sm:text-base text-[#9CA8A2] leading-relaxed">
                {card.desc}
              </p>

              {/* Contextual Friction Breakdown */}
              <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#D4C198]/80 font-mono">
                <span>
                  {index === 0 && (isArabic ? '• إعادة كتابة مستمرة لنفس الهياكل' : '• Continuous re-typing of identical layouts')}
                  {index === 1 && (isArabic ? '• ضغط التحضير الصباحي المتكرر' : '• Recurring morning assembly pressure')}
                  {index === 2 && (isArabic ? '• استنزاف ساعات العمل الميداني' : '• Administrative exhaustion of educator hours')}
                  {index === 3 && (isArabic ? '• تنقل مرهق بين 4+ برامج مختلفة' : '• Friction across 4+ disconnected tools')}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </SectionWrapper>
  );
};

