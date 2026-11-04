import React, { useState } from 'react';
import { useLanguage } from '../app/providers/LanguageContext';
import { SectionWrapper } from '../components/layout/SectionWrapper';
import { AUTHORITATIVE_METRICS, SAUDI_REGIONS, VERCEL_ANALYTICS_DATA } from '../data/metrics';
import { Badge } from '../components/presentation/Badge';
import { MapPin, ShieldCheck, Activity } from 'lucide-react';

export const ImpactSection: React.FC = () => {
  const { isArabic, t } = useLanguage();
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  // Group metrics logically for clear editorial hierarchy
  const primaryMetrics = AUTHORITATIVE_METRICS.filter(m => ['users', 'reports', 'broadcasts', 'plans'].includes(m.id));
  const performanceMetrics = AUTHORITATIVE_METRICS.filter(m => ['speed', 'retention'].includes(m.id));

  return (
    <SectionWrapper
      id="impact"
      sectionNumber="06"
      badgeText={t.impact.badge}
      title={t.impact.title}
      subtitle={t.impact.subtitle}
      containerWidth="wide"
    >
      <div className="space-y-16">
        
        {/* Authoritative Core Metrics Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs font-mono text-[#D4C198] uppercase tracking-widest border-b border-white/5 pb-2">
            <span>{isArabic ? 'المقاييس المعتمدة للمشروع (Project-Reported Metrics)' : 'Authoritative Project-Reported Metrics'}</span>
            <span className="text-gray-400">{isArabic ? 'بيانات حية مؤكدة' : 'Confirmed Live Telemetry'}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {primaryMetrics.map(metric => (
              <div
                key={metric.id}
                className="rounded-2xl bg-[#151E19] border border-[#B39A63]/25 hover:border-[#B39A63]/60 p-6 sm:p-7 transition-all hover:bg-[#18241E] flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-[#9CA8A2]">
                      {isArabic ? metric.labelAr : metric.labelEn}
                    </span>
                    <ShieldCheck className="w-4 h-4 text-[#B39A63]/60 group-hover:text-[#B39A63] transition-colors" />
                  </div>

                  <div className="font-mono text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight my-2 group-hover:text-[#D4C198] transition-colors">
                    {metric.value}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 space-y-1.5">
                  <p className="text-xs text-[#9CA8A2] leading-relaxed">
                    {isArabic ? metric.contextAr : metric.contextEn}
                  </p>
                  <div className="text-[10px] font-mono text-emerald-400/80 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>{metric.verifiedSource}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Secondary Benchmarks: Speed & Retention */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {performanceMetrics.map(metric => (
            <div
              key={metric.id}
              className="rounded-xl bg-[#141D18] border border-white/10 hover:border-[#B39A63]/40 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 transition-all"
            >
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <Badge variant="gold" size="sm">
                    {metric.id === 'speed' ? 'Benchmark' : 'Retention'}
                  </Badge>
                  <span className="text-xs font-mono text-gray-400">
                    {isArabic ? metric.labelAr : metric.labelEn}
                  </span>
                </div>
                <div className="text-sm text-[#9CA8A2] max-w-md">
                  {isArabic ? metric.contextAr : metric.contextEn}
                </div>
                <div className="text-[10px] font-mono text-gray-500 pt-1">
                  {metric.verifiedSource}
                </div>
              </div>

              <div className="font-mono text-3xl sm:text-4xl font-extrabold text-emerald-400 sm:text-end">
                {metric.value}
              </div>
            </div>
          ))}
        </div>

        {/* Geographic Reach & Kingdom Coverage Section */}
        <div className="rounded-2xl bg-[#141D18] border border-[#B39A63]/30 p-6 sm:p-10 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2">
                <Badge variant="live" size="sm">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{isArabic ? 'المملكة العربية السعودية' : 'Kingdom of Saudi Arabia'}</span>
                </Badge>
                <span className="text-xs font-mono text-gray-400">
                  {isArabic ? '13 منطقة إدارية' : '13 Administrative Regions'}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                {t.impact.nationalReachTitle}
              </h3>

              <p className="text-sm sm:text-base text-[#9CA8A2] leading-relaxed">
                {t.impact.nationalReachDesc}
              </p>

              <div className="p-4 rounded-xl bg-[#111714] border border-[#B39A63]/20 space-y-2">
                <div className="text-xs font-mono text-[#D4C198] uppercase">
                  {isArabic ? 'ملاحظة التغطية الجغرافية الدقيقة:' : 'Coverage Note:'}
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {isArabic 
                    ? 'وفقاً لبيانات المشروع المعتمدة، تضم المنصة مستخدمين فاعلين من كافة مناطق المملكة دون استثناء، ما يؤكد تلبية الاحتياج التربوي المشترك في جميع إدارات التعليم.'
                    : 'Authoritative data confirms active educators utilizing Nashat from every province across Saudi Arabia, reflecting a universally felt pedagogical need.'}
                </p>
              </div>

              {/* Active Region Pill Display */}
              <div className="pt-2">
                <div className="text-xs font-mono text-gray-400 mb-2">
                  {isArabic ? 'المناطق الممثلة في المنصة:' : 'Represented Provinces:'}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {SAUDI_REGIONS.map(reg => (
                    <span
                      key={reg.id}
                      onMouseEnter={() => setHoveredRegion(reg.id)}
                      onMouseLeave={() => setHoveredRegion(null)}
                      className={`text-xs px-2.5 py-1 rounded transition-colors cursor-default ${
                        hoveredRegion === reg.id
                          ? 'bg-[#B39A63] text-[#111714] font-bold'
                          : 'bg-[#18231C] border border-white/5 text-gray-300'
                      }`}
                    >
                      {isArabic ? reg.nameAr : reg.nameEn}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Technical Stylized Map of Saudi Arabia */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center">
              <div className="w-full max-w-md aspect-[4/3] rounded-xl bg-[#111714] border border-[#B39A63]/30 p-4 relative flex items-center justify-center">
                
                {/* SVG Visual Representation of Nationwide Reach across Saudi Provinces */}
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {/* Subtle Grid Lines inside map canvas */}
                  <line x1="10" y1="50" x2="90" y2="50" stroke="rgba(179,154,99,0.1)" strokeDasharray="2" />
                  <line x1="50" y1="10" x2="50" y2="90" stroke="rgba(179,154,99,0.1)" strokeDasharray="2" />

                  {/* Saudi Arabia stylized geographical perimeter outline */}
                  <polygon
                    points="22,25 34,20 45,18 60,25 72,35 85,45 80,65 65,75 52,85 40,84 35,70 30,55 20,38"
                    fill="#15201A"
                    stroke="#B39A63"
                    strokeWidth="0.8"
                    strokeDasharray="1.5 1.5"
                    opacity="0.8"
                  />

                  {/* Region nodes pins */}
                  {SAUDI_REGIONS.map(reg => {
                    const isHovered = hoveredRegion === reg.id;
                    return (
                      <g
                        key={reg.id}
                        className="transition-all cursor-pointer"
                        onMouseEnter={() => setHoveredRegion(reg.id)}
                        onMouseLeave={() => setHoveredRegion(null)}
                      >
                        <circle
                          cx={reg.coordinates.x}
                          cy={reg.coordinates.y}
                          r={isHovered ? 4 : 2.5}
                          fill={isHovered ? '#FFFFFF' : '#B39A63'}
                          className="transition-all"
                        />
                        <circle
                          cx={reg.coordinates.x}
                          cy={reg.coordinates.y}
                          r={isHovered ? 8 : 4.5}
                          fill="none"
                          stroke="#B39A63"
                          strokeWidth="0.4"
                          opacity={isHovered ? 0.8 : 0.4}
                          className="animate-pulse"
                        />
                      </g>
                    );
                  })}
                </svg>

                {/* Map Overlay Label */}
                <div className="absolute bottom-3 start-3 px-2.5 py-1 rounded bg-[#151E19]/90 border border-white/10 text-[10px] font-mono text-[#D4C198]">
                  {isArabic 
                    ? hoveredRegion 
                      ? SAUDI_REGIONS.find(r => r.id === hoveredRegion)?.nameAr 
                      : 'المملكة العربية السعودية (تغطية لكافة المناطق)'
                    : hoveredRegion
                      ? SAUDI_REGIONS.find(r => r.id === hoveredRegion)?.nameEn
                      : 'Nationwide Kingdom Coverage'}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Vercel Analytics Verified Telemetry Box */}
        <div className="rounded-2xl bg-[#141D18] border border-[#B39A63]/25 p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/5">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Badge variant="live" size="sm">
                  <Activity className="w-3 h-3" />
                  <span>Vercel Analytics</span>
                </Badge>
                <span className="text-xs font-mono text-gray-400">
                  nashat-seven.vercel.app
                </span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-white">
                {t.impact.vercelEvidenceTitle}
              </h4>
              <p className="text-xs sm:text-sm text-[#9CA8A2] max-w-2xl">
                {t.impact.vercelEvidenceDesc}
              </p>
            </div>

            <div className="flex items-center gap-6">
              <div className="text-center sm:text-end">
                <div className="text-xs text-gray-400 font-mono">Visitors (30d)</div>
                <div className="font-mono text-2xl font-bold text-white">{VERCEL_ANALYTICS_DATA.visitors30d}</div>
              </div>
              <div className="text-center sm:text-end">
                <div className="text-xs text-gray-400 font-mono">Page Views (30d)</div>
                <div className="font-mono text-2xl font-bold text-[#D4C198]">{VERCEL_ANALYTICS_DATA.pageViews30d}</div>
              </div>
              <div className="text-center sm:text-end">
                <div className="text-xs text-gray-400 font-mono">Bounce Rate</div>
                <div className="font-mono text-2xl font-bold text-emerald-400">{VERCEL_ANALYTICS_DATA.bounceRate}</div>
              </div>
            </div>
          </div>

          {/* Breakdown by Pages & Referrers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
            <div className="space-y-3">
              <span className="text-xs font-mono text-[#D4C198] uppercase">
                {isArabic ? 'المسارات الأكثر طلباً (Top Pages):' : 'Top Traversed Routes:'}
              </span>
              <div className="space-y-2">
                {VERCEL_ANALYTICS_DATA.topRoutes.map(route => (
                  <div
                    key={route.path}
                    className="flex items-center justify-between p-2.5 rounded bg-[#111714] border border-white/5 text-xs"
                  >
                    <div className="flex items-center gap-2">
                      <code className="text-[#D4C198] font-mono">{route.path}</code>
                      <span className="text-gray-400">({isArabic ? route.labelAr : route.labelEn})</span>
                    </div>
                    <span className="font-mono font-bold text-white">{route.visitors} visitors</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-mono text-[#D4C198] uppercase">
                {isArabic ? 'مصادر الإحالة الرئيسية (Referrers):' : 'Verified Traffic Referrers:'}
              </span>
              <div className="space-y-2">
                {VERCEL_ANALYTICS_DATA.topReferrers.map(ref => (
                  <div
                    key={ref.source}
                    className="flex items-center justify-between p-2.5 rounded bg-[#111714] border border-white/5 text-xs"
                  >
                    <span className="font-mono text-gray-300">{ref.source}</span>
                    <span className="font-mono text-[#D4C198]">{ref.visitors} visitors</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
};
