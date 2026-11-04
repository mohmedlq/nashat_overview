import { ProductRoute } from '../types';

export const PROJECT_INFO = {
  name: {
    ar: 'نشاط',
    en: 'Nashat'
  },
  tagline: {
    ar: 'أنت توصف… ونشاط ينفّذ.',
    en: 'You Describe. Nashat Delivers.'
  },
  subtagline: {
    ar: 'منصة رقمية مجانية مدعومة بالذكاء الاصطناعي لتحويل أفكار وتفاصيل النشاط المدرسي إلى تقارير وإذاعات وخطط متكاملة في ثوانٍ معدودة.',
    en: 'A free AI-powered digital platform turning school activity notes into structured reports, morning broadcasts, and activity plans in seconds.'
  },
  category: {
    ar: 'منصة إنتاجية تعليمية مدعومة بالذكاء الاصطناعي',
    en: 'AI-Powered Educational Productivity Platform'
  },
  status: {
    ar: 'تعمل وتتوسّع',
    en: 'Live & Expanding'
  },
  currentPhase: {
    ar: 'المرحلة 2 — توسع المنصة',
    en: 'Phase 2 — Platform Expansion'
  },
  launchDate: {
    ar: '17 سبتمبر',
    en: 'September 17'
  },
  urls: {
    platform: 'https://nashat-seven.vercel.app/',
    github: 'https://github.com/mohmedlq/Nashat'
  },
  founder: {
    contextAr: 'مشرف سابق على الإذاعة المدرسية شارك في الإشراف على أكثر من 300 إذاعة ومناسبة مدرسية على مدى 3 سنوات. انطلقت الفكرة مباشرة من واقع المعاناة الإدارية وتكرار التوثيق في البيئة التعليمية الميدانية.',
    contextEn: 'Former school broadcast supervisor who supervised 300+ school morning broadcasts and events over 3 years. The platform was born directly from real operational school pain points and administrative overhead.'
  },
  audience: [
    {
      roleAr: 'رواد النشاط المدرسي',
      roleEn: 'School Activity Leaders',
      descAr: 'المسؤولون عن قيادة وتنسيق البرامج والفعاليات المدرسية.',
      descEn: 'Educators responsible for leading and orchestrating school programs.'
    },
    {
      roleAr: 'مشرفو الأنشطة الطلابية',
      roleEn: 'Student Activity Supervisors',
      descAr: 'الكوادر المشرفة ميدانياً على تنفيذ الأنشطة الطلابية.',
      descEn: 'Staff members managing field execution of student activities.'
    },
    {
      roleAr: 'معدو ومنظمو الفعاليات',
      roleEn: 'Event & Program Organizers',
      descAr: 'القائمون على تحضير وتوثيق الفعاليات المدرسية الدورية.',
      descEn: 'Personnel drafting and documenting regular educational events.'
    },
    {
      roleAr: 'الكوادر التعليمية المساندة',
      roleEn: 'Educational Support Staff',
      descAr: 'المعلمون والإداريون المشاركون في إعداد التقارير والإذاعات.',
      descEn: 'Teachers and administrators assisting in reports and broadcasts.'
    }
  ]
};

export const PRODUCT_ROUTES: ProductRoute[] = [
  {
    path: '/',
    nameAr: 'الرئيسية',
    nameEn: 'Home',
    purposeAr: 'نقطة الانطلاق والتعريف بالخدمات واختيار مسار العمل.',
    purposeEn: 'Starting portal introducing available services and entry workflows.',
    statusAr: 'متاحة',
    statusEn: 'Live'
  },
  {
    path: '/generator',
    nameAr: 'المساعد الذكي / المولد',
    nameEn: 'Smart Assistant / Generator',
    purposeAr: 'محرر الصياغة الذكية لتحويل الوصف البسيط إلى محتوى تعليمي متكامل خلال 5 ثوانٍ.',
    purposeEn: 'AI engine interface turning brief prompts into structured school content in 5 seconds.',
    statusAr: 'متاحة',
    statusEn: 'Live'
  },
  {
    path: '/reports',
    nameAr: 'تقارير النشاط',
    nameEn: 'Activity Reports',
    purposeAr: 'إعداد واستعراض وتخصيص تقارير الأنشطة والبرامج المدرسية المكتملة.',
    purposeEn: 'Preparation, customization, and review of completed school activity reports.',
    statusAr: 'متاحة',
    statusEn: 'Live'
  },
  {
    path: '/broadcasts',
    nameAr: 'مكتبة الإذاعات المدرسية',
    nameEn: 'School Broadcasts Library',
    purposeAr: 'توليد واستعراض فقرات الإذاعة الصباحية المنظمة بمختلف الموضوعات.',
    purposeEn: 'Generating and browsing organized school morning broadcast segments.',
    statusAr: 'متاحة',
    statusEn: 'Live'
  },
  {
    path: '/ActivityPlans',
    nameAr: 'خطط النشاط المدرسي',
    nameEn: 'Activity Plans',
    purposeAr: 'قسم مخصص لإعداد وتنظيم الجداول والخطط الزمنية للأنشطة الطلابية.',
    purposeEn: 'Dedicated section for structuring student activity timelines and plans.',
    statusAr: 'متاحة',
    statusEn: 'Live'
  },
  {
    path: '/reports/:id',
    nameAr: 'عرض التقرير الفردي',
    nameEn: 'Individual Report View',
    purposeAr: 'معاينة التقرير النهائي، مراجعته، إدراج الشواهد، وتصديره كملف PDF.',
    purposeEn: 'Previewing final generated report, review, attaching evidence, and PDF export.',
    statusAr: 'متاحة',
    statusEn: 'Live'
  }
];

export const CORE_CAPABILITIES = [
  {
    id: 'ai-reports',
    num: '01',
    titleAr: 'توليد تقارير النشاط بالذكاء الاصطناعي',
    titleEn: 'AI School Activity Report Generation',
    descAr: 'تحويل الأسطر المكتوبة والملاحظات البسيطة إلى تقرير رسمي متكامل العناصر والأهداف والنتائج بدلاً من الكتابة اليدوية المطولة.',
    descEn: 'Converts raw activity notes and highlights into a complete formal report with objectives, indicators, and outcomes.'
  },
  {
    id: 'broadcasts',
    num: '02',
    titleAr: 'توليد الإذاعات المدرسية المتكاملة',
    titleEn: 'Structured School Broadcast Generation',
    descAr: 'إنشاء برامج الإذاعة الصباحية المنظمة بفقراتها (مقدمة، قرآن، حديث، كلمة، حكمة) بدقة تربوية تناسب الفئات العمرية.',
    descEn: 'Produces structured morning broadcast scripts complete with intro, reading, address, and wisdom segments.'
  },
  {
    id: 'plans',
    num: '03',
    titleAr: 'خطط النشاط المدرسي',
    titleEn: 'School Activity Plans',
    descAr: 'قسم مخصص لبناء وتنظيم خطط وجداول الفعاليات المدرسية على مدار الفصول الدراسية.',
    descEn: 'Dedicated workspace for planning and organizing school event schedules across academic terms.'
  },
  {
    id: 'editing',
    num: '04',
    titleAr: 'تحرير وتخصيص فوري للتقرير',
    titleEn: 'Inline Content Review & Editing',
    descAr: 'مرونة تامة للمشرف لمراجعة النص المولد، تعديل التفاصيل، وإضافة الملاحظات الخاصة بالمدرسة.',
    descEn: 'Full editorial control allowing supervisors to fine-tune text, dates, attendance figures, and school specifics.'
  },
  {
    id: 'approval',
    num: '05',
    titleAr: 'مسار المراجعة والاعتماد',
    titleEn: 'Approval Workflow',
    descAr: 'مراجعة التقرير والمصادقة عليه قبل إرساله للجهة المشرفة أو إدارة المدرسة.',
    descEn: 'Enables structured verification and approval before delivering reports to administration.'
  },
  {
    id: 'evidence',
    num: '06',
    titleAr: 'الشواهد والمرفقات الميدانية',
    titleEn: 'Evidence & Supporting Documentation',
    descAr: 'إرفاق الصور والوثائق الداعمة للنشاط داخل هيكل التقرير لتوثيق الأثر الفعلي.',
    descEn: 'Integrates on-site photos, attendance sheets, and documentation within the standardized report layout.'
  },
  {
    id: 'ain-links',
    num: '07',
    titleAr: 'روابط منصة عين التعليمية',
    titleEn: 'Ain Educational Resource Links',
    descAr: 'ربط التقرير أو الفعالية بروابط ومصادر إثرائية معتمدة من منصة عين التعليمية الوطنية.',
    descEn: 'Links activity topics to verified enrichments and materials from the Saudi Ain Educational Portal.'
  },
  {
    id: 'pdf-export',
    num: '08',
    titleAr: 'تصدير PDF جاهز للطباعة والرفع',
    titleEn: 'Standardized PDF Export',
    descAr: 'تحويل فوري للتقرير النهائي إلى مستند PDF مهيأ للطباعة الورقية أو الرفع عبر القنوات الرسمية.',
    descEn: 'One-click conversion of final approved reports into cleanly formatted, printable PDF documents.'
  }
];

