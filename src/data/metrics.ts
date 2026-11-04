import { MetricItem } from '../types';

export const AUTHORITATIVE_METRICS: MetricItem[] = [
  {
    id: 'users',
    labelAr: 'المستخدمون المعتمدون',
    labelEn: 'Total Users',
    value: '3,500+',
    numericValue: 3500,
    suffix: '+',
    contextAr: 'مشرفون ورواد نشاط وكوادر تعليمية يعتمدون على نشاط في إعداد المحتوى.',
    contextEn: 'School activity leaders, supervisors, and educators using Nashat.',
    category: 'usage',
    verifiedSource: 'إحصائية معلنة من واقع المنصة'
  },
  {
    id: 'reports',
    labelAr: 'التقارير المولدة',
    labelEn: 'Generated Reports',
    value: '5,000+',
    numericValue: 5000,
    suffix: '+',
    contextAr: 'تقرير مدرسي متكامل تم إنشاؤه وصياغته ومراجعته عبر المنصة.',
    contextEn: 'Full formal school activity reports generated and formatted.',
    category: 'usage',
    verifiedSource: 'سجل عمليات التوليد'
  },
  {
    id: 'broadcasts',
    labelAr: 'الإذاعات المدرسية',
    labelEn: 'Generated Broadcasts',
    value: '1,500+',
    numericValue: 1500,
    suffix: '+',
    contextAr: 'برنامج إذاعي صباحي متكامل الفقرات أُنتج لدعم الطابور الصباحي المدرسي.',
    contextEn: 'Structured morning broadcast scripts prepared for school assemblies.',
    category: 'usage',
    verifiedSource: 'سجل عمليات التوليد'
  },
  {
    id: 'plans',
    labelAr: 'خطط النشاط',
    labelEn: 'Activity Plans',
    value: '500+',
    numericValue: 500,
    suffix: '+',
    contextAr: 'خطة وجدول زمني للأنشطة المدرسية تم تنظيمها وتنسيقها.',
    contextEn: 'Educational activity timelines and schedules organized on the platform.',
    category: 'usage',
    verifiedSource: 'سجل التخطيط المدرسي'
  },
  {
    id: 'speed',
    labelAr: 'زمن التوليد الذكي',
    labelEn: 'AI Generation Speed',
    value: '5 ثوانٍ',
    numericValue: 5,
    suffix: 's',
    contextAr: 'الزمن القياسي لتحويل الوصف المختصر إلى مسودة تقرير رسمي متكامل.',
    contextEn: 'Turnaround time transforming brief user prompts into full draft reports.',
    category: 'speed',
    verifiedSource: 'متوسط استجابة نموذج التوليد'
  },
  {
    id: 'retention',
    labelAr: 'معدل استبقاء المستخدمين',
    labelEn: 'User Retention Rate',
    value: '35%',
    numericValue: 35,
    suffix: '%',
    contextAr: 'نسبة المستخدمين العائدين للمنصة بصورة متكررة لإعداد أعمالهم المدرسية.',
    contextEn: 'Users returning repeatedly to conduct their routine school activity workflows.',
    category: 'usage',
    verifiedSource: 'معدل الاستبقاء المعلن للمشروع'
  },
  {
    id: 'costs',
    labelAr: 'التكاليف التشغيلية',
    labelEn: 'Operating Costs',
    value: '0 ر.س',
    numericValue: 0,
    suffix: ' SAR',
    contextAr: 'تشغيل عالي الكفاءة باستغلال البنى السحابية المجانية والنماذج الذكية بدون أعباء مالية.',
    contextEn: 'Highly efficient architecture built on zero-cost tiers without infrastructure burden.',
    category: 'financial',
    verifiedSource: 'السجل المالي التشغيلي للمشروع'
  },
  {
    id: 'revenue',
    labelAr: 'الإيرادات المسجلة',
    labelEn: 'Recorded Revenue',
    value: '130 ر.س',
    numericValue: 130,
    suffix: ' SAR',
    contextAr: 'نموذج تقديم مجاني تماماً للمدارس مع تسجيل إيراد رمزي تجريبي أولي.',
    contextEn: 'Free public access model with an initial nominal recorded revenue test.',
    category: 'financial',
    verifiedSource: 'الملخص المالي للمشروع'
  }
];

export const SAUDI_REGIONS = [
  { id: 'riyadh', nameAr: 'منطقة الرياض', nameEn: 'Riyadh Region', coordinates: { x: 53, y: 48 } },
  { id: 'makkah', nameAr: 'منطقة مكة المكرمة', nameEn: 'Makkah Region', coordinates: { x: 34, y: 55 } },
  { id: 'madinah', nameAr: 'منطقة المدينة المنورة', nameEn: 'Madinah Region', coordinates: { x: 32, y: 41 } },
  { id: 'eastern', nameAr: 'المنطقة الشرقية', nameEn: 'Eastern Province', coordinates: { x: 70, y: 45 } },
  { id: 'qassim', nameAr: 'منطقة القصيم', nameEn: 'Qassim Region', coordinates: { x: 46, y: 39 } },
  { id: 'asir', nameAr: 'منطقة عسير', nameEn: 'Asir Region', coordinates: { x: 38, y: 72 } },
  { id: 'tabuk', nameAr: 'منطقة تبوك', nameEn: 'Tabuk Region', coordinates: { x: 23, y: 27 } },
  { id: 'hail', nameAr: 'منطقة حائل', nameEn: 'Hail Region', coordinates: { x: 39, y: 31 } },
  { id: 'northern', nameAr: 'منطقة الحدود الشمالية', nameEn: 'Northern Borders', coordinates: { x: 42, y: 19 } },
  { id: 'jazan', nameAr: 'منطقة جازان', nameEn: 'Jazan Region', coordinates: { x: 39, y: 82 } },
  { id: 'najran', nameAr: 'منطقة نجران', nameEn: 'Najran Region', coordinates: { x: 50, y: 78 } },
  { id: 'baha', nameAr: 'منطقة الباحة', nameEn: 'Al-Baha Region', coordinates: { x: 35, y: 65 } },
  { id: 'jouf', nameAr: 'منطقة الجوف', nameEn: 'Al-Jouf Region', coordinates: { x: 34, y: 22 } }
];

export const VERCEL_ANALYTICS_DATA = {
  visitors30d: '1,500',
  pageViews30d: '5,909',
  bounceRate: '39%',
  topRoutes: [
    { path: '/', visitors: 649, labelAr: 'الرئيسية', labelEn: 'Home' },
    { path: '/generator', visitors: 616, labelAr: 'المساعد الذكي (المولد)', labelEn: 'Generator' },
    { path: '/reports', visitors: 555, labelAr: 'تقارير النشاط', labelEn: 'Reports' }
  ],
  topReferrers: [
    { source: 'vercel.com', visitors: 27 },
    { source: 'linkedin.com', visitors: 2 },
    { source: 'org.telegram.plus', visitors: 2 }
  ]
};

