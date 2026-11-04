import React from 'react';
import { useLanguage } from '../app/providers/LanguageContext';
import { SectionWrapper } from '../components/layout/SectionWrapper';
import { Badge } from '../components/presentation/Badge';
import { Wallet, DollarSign, HeartHandshake, ShieldCheck } from 'lucide-react';

export const EconomicsSection: React.FC = () => {
  const { isArabic, t } = useLanguage();

  return (
    <SectionWrapper
      id="economics"
      sectionNumber="08"
      badgeText={t.economics.badge}
      title={t.economics.title}
      subtitle={t.economics.subtitle}
    >
      <div className="space-y-8">
        
        {/* Transparency Banner */}
        <div className="p-4 rounded-xl bg-[#151E19] border border-white/5 flex items-center justify-between text-xs text-[#9CA8A2]">
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#B39A63]" />
            <span>
              {isArabic 
                ? 'ملخص مالي وتشغيلي معلن من واقع سجلات المشروع لتحقيق الشفافية الكاملة.'
                : 'Reported operational snapshot reflecting platform economics with full transparency.'}
            </span>
          </span>
          <span className="font-mono text-[#D4C198]">
            {isArabic ? 'بدون اشتراكات تجارية' : 'Non-Commercial Educational Model'}
          </span>
        </div>

        {/* 3 Balanced Economics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Operating Costs */}
          <div className="rounded-2xl bg-[#141D18] border border-white/10 hover:border-[#B39A63]/50 p-6 sm:p-7 flex flex-col justify-between transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-[#111714] border border-[#B39A63]/30 flex items-center justify-center">
                  <Wallet className="w-5 h-5 text-emerald-400" />
                </div>
                <Badge variant="live" size="sm">
                  {isArabic ? 'كفاءة تشغيلية' : 'Zero Overhead'}
                </Badge>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-mono text-gray-400">
                  {t.economics.costCardTitle}
                </span>
                <div className="font-mono text-3xl sm:text-4xl font-black text-white">
                  0 <span className="text-lg font-normal text-gray-400">{isArabic ? 'ر.س' : 'SAR'}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#9CA8A2] leading-relaxed">
                {t.economics.costCardDesc}
              </p>
            </div>

            <div className="pt-4 border-t border-white/5 text-[11px] font-mono text-emerald-400/90 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>{isArabic ? 'اعتماد كامل على البنى المجانية' : 'Cloud Free-Tier Optimization'}</span>
            </div>
          </div>

          {/* Card 2: Recorded Revenue */}
          <div className="rounded-2xl bg-[#141D18] border border-white/10 hover:border-[#B39A63]/50 p-6 sm:p-7 flex flex-col justify-between transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-[#111714] border border-[#B39A63]/30 flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-[#B39A63]" />
                </div>
                <Badge variant="gold" size="sm">
                  {isArabic ? 'إيراد رمزي مسجل' : 'Reported Test'}
                </Badge>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-mono text-gray-400">
                  {t.economics.revCardTitle}
                </span>
                <div className="font-mono text-3xl sm:text-4xl font-black text-[#D4C198]">
                  130 <span className="text-lg font-normal text-gray-400">{isArabic ? 'ر.س' : 'SAR'}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#9CA8A2] leading-relaxed">
                {t.economics.revCardDesc}
              </p>
            </div>

            <div className="pt-4 border-t border-white/5 text-[11px] font-mono text-gray-400">
              {isArabic ? 'إيراد مسجل رمزي غير قائم على اشتراكات' : 'Nominal milestone, non-recurring'}
            </div>
          </div>

          {/* Card 3: Free Public Access Model */}
          <div className="rounded-2xl bg-[#141D18] border border-white/10 hover:border-[#B39A63]/50 p-6 sm:p-7 flex flex-col justify-between transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-[#111714] border border-[#B39A63]/30 flex items-center justify-center">
                  <HeartHandshake className="w-5 h-5 text-sky-400" />
                </div>
                <Badge variant="neutral" size="sm">
                  {isArabic ? 'متاح للجميع' : 'Public Access'}
                </Badge>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-mono text-gray-400">
                  {t.economics.modelCardTitle}
                </span>
                <div className="font-mono text-3xl sm:text-4xl font-black text-sky-400">
                  {isArabic ? 'مجاني 100%' : '100% Free'}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#9CA8A2] leading-relaxed">
                {t.economics.modelCardDesc}
              </p>
            </div>

            <div className="pt-4 border-t border-white/5 text-[11px] font-mono text-sky-400/90 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              <span>{isArabic ? 'بدون حجب أي مزايا برمجية' : 'Zero Paywalled Features'}</span>
            </div>
          </div>

        </div>

      </div>
    </SectionWrapper>
  );
};

