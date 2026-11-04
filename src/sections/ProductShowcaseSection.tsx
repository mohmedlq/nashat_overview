import React, { useState } from 'react';
import { useLanguage } from '../app/providers/LanguageContext';
import { SectionWrapper } from '../components/layout/SectionWrapper';
import { PROJECT_INFO } from '../data/project';
import { Badge } from '../components/presentation/Badge';
import { ExternalLink, Check, Eye } from 'lucide-react';

interface ShowcaseItem {
  id: string;
  route: string;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  imageSrc: string;
  isRealScreenshot: boolean;
  featuresAr: string[];
  featuresEn: string[];
}

export const ProductShowcaseSection: React.FC = () => {
  const { isArabic, t } = useLanguage();
  const [selectedItem, setSelectedItem] = useState<string>('generator');

  const showcaseItems: ShowcaseItem[] = [
    {
      id: 'generator',
      route: '/generator',
      titleAr: 'المساعد الذكي — محرر التوليد الفوري',
      titleEn: 'Smart Assistant — Real-Time Generation Engine',
      descAr: 'المساحة التفاعلية المركزية حيث يكتب رائد النشاط أفكاره البسيطة ليقوم الذكاء الاصطناعي بصياغة التقرير أو الإذاعة كاملة خلال 5 ثوانٍ.',
      descEn: 'The core interactive workspace where educators describe their activity and AI drafts complete, structured documents in 5 seconds.',
      imageSrc: '/assets/nashat-generator.png',
      isRealScreenshot: true,
      featuresAr: [
        'خياران للتوليد: تقرير نشاط رسمي أو إذاعة مدرسية متكاملة.',
        'إرشادات مدمجة: كيف تكتب طلبك بذكاء للحصول على أفضل مخرجات.',
        'أمثلة ومقترحات جاهزة للتجربة بضغطة زر واحدة.',
        'تخصيص مباشر للبيانات المدرسية (المدرسة، المنطقة، المشرف، الإدارة).'
      ],
      featuresEn: [
        'Two core generation tracks: Formal School Report or Morning Broadcast.',
        'Contextual hints guiding users on prompt clarity for high pedagogical accuracy.',
        'One-click prompt suggestions based on actual school events.',
        'Metadata placeholders for school name, region, supervisor, and administration.'
      ]
    },
    {
      id: 'hero',
      route: '/',
      titleAr: 'بوابة المنصة — نقطة الانطلاق السريعة',
      titleEn: 'Service Portal — Streamlined Navigation',
      descAr: 'الصفحة الرئيسية لمنصة نشاط التي توفر وصولاً فورياً للخدمات الثلاث الأساسية بدون أي تعقيد أو تسجيلات طويلة.',
      descEn: 'Nashat homepage offering friction-free access to all core school activity workflows without onboarding barriers.',
      imageSrc: '/assets/nashat-hero.png',
      isRealScreenshot: true,
      featuresAr: [
        'شعار "اصنع محتواك المدرسي بطريقة سهلة وذكية".',
        'بطاقات وصول مباشر للتقارير، الإذاعات، والمساعد الذكي.',
        'تصميم هادئ بخلفية داكنة خالية من التشتيت البصري.',
        'هوية بصرية معتمدة بلمسات ذهبية متوازنة (#B39A63).'
      ],
      featuresEn: [
        'Clear educational value proposition: "Craft school content simply and smartly".',
        'Direct gateway cards to Reports, Broadcasts, and Smart Assistant.',
        'Distraction-free dark canvas tailored for focused educator tasks.',
        'Cohesive visual identity with muted metallic gold accents (#B39A63).'
      ]
    },
    {
      id: 'options',
      route: '/generator (خيارات المحتوى)',
      titleAr: 'قوائم التخصيص — مسارات الإذاعة والتقرير',
      titleEn: 'Content Selector — Specialized Prompt Pathways',
      descAr: 'واجهة اختيار وتحديد نوع المحتوى المطلوب مع توفير قوالب ونماذج للأسبوع الفضائي، برامج رفق، واليوم الوطني.',
      descEn: 'Dynamic dropdown enabling educators to pivot between full reports, morning broadcasts, and tailored event templates.',
      imageSrc: '/assets/nashat-options.jpg',
      isRealScreenshot: true,
      featuresAr: [
        'قائمة منسدلة سريعة لاختيار نمط العمل المطلوب.',
        'بطاقات مسبقة الإعداد لأبرز المناسبات المدرسية المعتمدة.',
        'مراعاة الفروق الدقيقة بين صياغة التقرير الرسمي والكلمة الإذاعية.',
        'إدخال سلس للملاحظات الخاصة قبل إرسال أمر التوليد.'
      ],
      featuresEn: [
        'Quick dropdown selector for activity reports vs school morning broadcasts.',
        'Pre-configured prompt templates for Saudi National Day, Space Week, and more.',
        'Nuanced domain distinction between formal administrative text and spoken broadcasts.',
        'Seamless input fields for custom school observations.'
      ]
    },
    {
      id: 'analytics',
      route: 'Vercel Analytics Dashboard',
      titleAr: 'لوحة الأداء الحية — توثيق الزيارات والاستخدام',
      titleEn: 'Live Telemetry — Documented Platform Traffic',
      descAr: 'لقطة شاشة موثقة من لوحة تحليلات Vercel تثبت نشاط المنصة الفعلي في الميدان بأكثر من 5,900 مشاهدة و1,500 زائر خلال 30 يوماً.',
      descEn: 'Documented Vercel Analytics telemetry verifying live organic engagement with 5,900+ page views and 1,500 visitors in 30 days.',
      imageSrc: '/assets/nashat-analytics.png',
      isRealScreenshot: true,
      featuresAr: [
        '1,500 زائر مستقل (Visitors) خلال 30 يوماً.',
        '5,909 مشاهدات للصفحة (Page Views).',
        'معدل ارتداد منخفض 39% يعكس تفاعلاً حقيقياً مع أدوات المنصة.',
        'توزيع الزيارات على المسارات الرئيسية: /generator و/reports و/.'
      ],
      featuresEn: [
        '1,500 unique visitors recorded across a 30-day window.',
        '5,909 verified page views.',
        'Healthy 39% bounce rate signifying sustained session engagement.',
        'Traffic distributed across primary routes: /generator, /reports, and /.'
      ]
    }
  ];

  const currentItem = showcaseItems.find(item => item.id === selectedItem) || showcaseItems[0];

  return (
    <SectionWrapper
      id="product"
      sectionNumber="04"
      badgeText={t.product.badge}
      title={t.product.title}
      subtitle={t.product.subtitle}
      containerWidth="wide"
    >
      <div className="space-y-8">
        
        {/* Navigation Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {showcaseItems.map(item => {
            const isSelected = item.id === selectedItem;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedItem(item.id)}
                type="button"
                className={`p-3.5 rounded-xl border text-start transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#18251E] border-[#B39A63] shadow-lg shadow-[#B39A63]/10'
                    : 'bg-[#151E19] border-white/5 hover:border-[#B39A63]/30 text-gray-400 hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono text-[11px] text-[#B39A63]">
                    {item.route}
                  </span>
                  {item.isRealScreenshot && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  )}
                </div>
                <div className={`text-sm font-bold ${isSelected ? 'text-white' : 'text-gray-300'}`}>
                  {isArabic ? item.titleAr : item.titleEn}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Screen Details & Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-2xl bg-[#141D18] border border-[#B39A63]/25 p-4 sm:p-8">
          
          {/* Left / Info Side */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Badge variant="live" size="sm">
                  {currentItem.isRealScreenshot
                    ? (isArabic ? 'لقطة شاشة حقيقية موثقة' : 'Verified Production Capture')
                    : (isArabic ? 'معاينة توضيحية' : 'Illustrative Preview')}
                </Badge>
                <code className="text-xs font-mono text-[#D4C198] bg-[#111714] px-2 py-0.5 rounded border border-white/10">
                  {currentItem.route}
                </code>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                {isArabic ? currentItem.titleAr : currentItem.titleEn}
              </h3>

              <p className="text-sm sm:text-base text-[#9CA8A2] leading-relaxed">
                {isArabic ? currentItem.descAr : currentItem.descEn}
              </p>
            </div>

            {/* Feature Bullets */}
            <div className="space-y-2.5 pt-2 border-t border-white/5">
              <div className="text-xs font-mono text-[#D4C198] uppercase tracking-wider">
                {isArabic ? 'ملاحظات التجربة والوظائف:' : 'Operational Capabilities:'}
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
                {(isArabic ? currentItem.featuresAr : currentItem.featuresEn).map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2.5">
                    <span className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-[#B39A63]/20 text-[#B39A63] flex items-center justify-center">
                      <Check className="w-2.5 h-2.5" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action to visit live platform */}
            <div className="pt-2">
              <a
                href={PROJECT_INFO.urls.platform}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#D4C198] hover:text-[#CBB688] underline underline-offset-4"
              >
                <span>{t.common.visitPlatform}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right / Big Screen Preview Frame */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-[#B39A63]/30 bg-[#111714] overflow-hidden shadow-2xl">
              
              {/* Browser chrome header */}
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10 bg-[#151E19]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-gray-400 ms-2">
                    https://nashat-seven.vercel.app{currentItem.route.startsWith('/') ? currentItem.route : ''}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#D4C198]">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Production Live</span>
                </div>
              </div>

              {/* The Real Image Asset */}
              <div className="relative bg-[#0E1310] flex items-center justify-center p-2 sm:p-3">
                <img
                  src={currentItem.imageSrc}
                  alt={isArabic ? currentItem.titleAr : currentItem.titleEn}
                  className="w-full h-auto max-h-[500px] object-contain rounded-lg border border-white/5"
                  loading="lazy"
                />
              </div>

              {/* Image Attribution Footer */}
              <div className="px-4 py-2 bg-[#121A15] border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-gray-400">
                <span>
                  {currentItem.isRealScreenshot
                    ? (isArabic ? '✓ لقطة شاشة موثقة من بيئة الإنتاج' : '✓ Verified Production UI Capture')
                    : (isArabic ? 'معاينة توضيحية' : 'Illustrative Preview')}
                </span>
                <span>Nashat Platform ©</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </SectionWrapper>
  );
};

