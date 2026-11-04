import { ArchitectureNode, RequestFlowStep } from '../types';

export const ARCHITECTURE_NODES: ArchitectureNode[] = [
  {
    id: 'frontend',
    category: 'client',
    titleAr: 'واجهة المستخدم التفاعلية (Web Platform)',
    titleEn: 'Interactive Web Client',
    subtitleAr: 'منصة نشاط الرقمية (Nashat Web Platform)',
    subtitleEn: 'Nashat Web Client Application',
    techStack: 'React / Modern Frontend SPA',
    roleAr: 'استقبال مدخلات المستخدم، إدارة صياغة الأوامر، عرض المسودات اللحظية، وتوفير أدوات التحرير وتصدير المستندات.',
    roleEn: 'Handles user interaction, prompt entry, real-time draft rendering, inline editing, and client-side document export.',
    detailsAr: [
      'واجهة سريعة وخفيفة مصممة خصيصاً لرواد النشاط المدرسي.',
      'توفير قوالب ذكية لنوعين رئيسيين: تقرير نشاط أو إذاعة مدرسية.',
      'تضمين محرر تعديل حي لمراجعة النص واعتماده فور التوليد.',
      'تصدير مستندات PDF منسقة جاهزة للطباعة والمشاركة.'
    ],
    detailsEn: [
      'Lightweight, responsive UI tailored for school activity coordinators.',
      'Specialized input builders for reports and morning broadcasts.',
      'Live in-browser editor for verifying and enriching generated drafts.',
      'Direct client-side PDF document generation formatted for print.'
    ],
    badge: 'Client Layer'
  },
  {
    id: 'hosting-frontend',
    category: 'hosting',
    titleAr: 'استضافة الواجهة السحابية',
    titleEn: 'Frontend Edge Hosting',
    subtitleAr: 'منصة Vercel Edge Network',
    subtitleEn: 'Vercel Edge Platform',
    techStack: 'Vercel Edge Global CDN',
    roleAr: 'خدمة الأصول وتوزيع التطبيق بكفاءة عالية على خوادم إيدج سريعة تضمن سرعة تحميل فائقة من أي منطقة.',
    roleEn: 'Distributes application assets globally with edge caching, zero downtime, and instant HTTPS termination.',
    detailsAr: [
      'نطاق رسمي موثق: nashat-seven.vercel.app',
      'توزيع جغرافي سريع يخدم المستخدمين في كافة مناطق المملكة العربية السعودية.',
      'إحصائيات حية ترصد الزيارات وسلوك التصفح (سجل أكثر من 5,900 مشاهدة).',
      'تكلفة تشغيلية 0 ر.س مع موثوقية عالية للخدمة.'
    ],
    detailsEn: [
      'Official production domain: nashat-seven.vercel.app',
      'Edge CDN routing ensuring fast response across all Saudi provinces.',
      'Built-in analytics tracking sessions and engagement (5,900+ verified views).',
      'Zero-dollar operational infrastructure expenditure.'
    ],
    badge: 'Hosting Layer'
  },
  {
    id: 'backend',
    category: 'backend',
    titleAr: 'الواجهة البرمجية الخلفية (Backend API)',
    titleEn: 'Application Backend API',
    subtitleAr: 'واجهة ASP.NET Core API',
    subtitleEn: 'ASP.NET Core REST API',
    techStack: 'C# / ASP.NET Core',
    roleAr: 'استقبال طلبات التوليد، معالجة وتدقيق المدخلات، ضبط التعليمات الموجهة للنموذج (System Prompts)، والتواصل الآمن مع واجهة الذكاء الاصطناعي.',
    roleEn: 'Receives generation requests, sanitizes payload, orchestrates system prompts, and handles secure AI service communication.',
    detailsAr: [
      'مبني على بيئة ASP.NET Core القوية ذات الأداء المستقر.',
      'تأمين مفاتيح الوصول لخدمات الذكاء الاصطناعي بعيداً عن متصفح العميل.',
      'هندسة متطلبات التقرير (أهداف، مخرجات، فقرات إذاعية) ضمن التوجيه المنطقي.',
      'تصميم خفيف الوزن يعالج الطلبات بصورة لحظية.'
    ],
    detailsEn: [
      'High-performance ASP.NET Core runtime delivering resilient request processing.',
      'Isolates Gemini API credentials and sensitive keys away from the client browser.',
      'Enriches prompts with educational domain guidelines and formal report structures.',
      'Stateless request handling optimized for fast turnaround.'
    ],
    badge: 'Application Core'
  },
  {
    id: 'hosting-backend',
    category: 'hosting',
    titleAr: 'استضافة خادم التطبيقات',
    titleEn: 'Backend Server Hosting',
    subtitleAr: 'سحابة Somee Server',
    subtitleEn: 'Somee Windows / .NET Hosting',
    techStack: 'Somee .NET Cloud Environment',
    roleAr: 'تشغيل خدمة الـ API الخلفية على خادم .NET مهيأ لاستقبال واستجابة الطلبات القادمة من الواجهة الأمامية.',
    roleEn: 'Runs the ASP.NET Core API runtime with specialized Windows/.NET ecosystem compatibility.',
    detailsAr: [
      'استضافة مخصصة لتطبيقات ASP.NET Core.',
      'اتصال آمن ومستمر عبر بروتوكول HTTPS.',
      'تشغيل بدون تكلفة متكررة، ما يضمن نموذج استدامة مجاني للمشروع.',
      'إدارة دورة حياة الطلبات وضمان الاستجابة السريعة.'
    ],
    detailsEn: [
      'Specialized runtime environment for Microsoft .NET web services.',
      'Secure HTTPS communication with cross-origin handling for Vercel.',
      'Operates within a lean hosting tier maintaining the 0 SAR cost profile.',
      'Manages backend request-response lifecycles.'
    ],
    badge: 'Server Infrastructure'
  },
  {
    id: 'ai-engine',
    category: 'ai',
    titleAr: 'محرك التوليد بالذكاء الاصطناعي',
    titleEn: 'Generative AI Foundation',
    subtitleAr: 'واجهة برمجة تطبيقات Gemini (Gemini AI API)',
    subtitleEn: 'Google Gemini AI API',
    techStack: 'Google Gemini Flash / Pro Foundation Model',
    roleAr: 'معالجة الوصف التعليمي واستخلاص الأهداف التربوية، وصياغة التقارير الرسمية وفق المعايير المعتمدة في المدارس السعودية.',
    roleEn: 'Processes natural-language school descriptions to produce articulated, culturally coherent educational content.',
    detailsAr: [
      'فهم متقدم للسياق التربوي والمصطلحات التعليمية في المملكة العربية السعودية.',
      'زمن استجابة فائق ينجز التوليد خلال 5 ثوانٍ فقط.',
      'صياغة متكاملة تشمل الأهداف، المؤشرات، التوصيات، والفقرات الإذاعية.',
      'اتصال مباشر وآمن عبر الـ Backend API.'
    ],
    detailsEn: [
      'Deep domain comprehension of Saudi educational activity terminologies.',
      'High-velocity inference clocking at 5 seconds average response time.',
      'Structures complete report sections: objectives, student impact, and highlights.',
      'Securely connected via backend API proxy.'
    ],
    badge: 'AI Engine'
  },
  {
    id: 'stateless-design',
    category: 'output',
    titleAr: 'الخصوصية والتصميم عديم الحالة (Stateless Architecture)',
    titleEn: 'Stateless Architecture & Privacy',
    subtitleAr: 'غياب قواعد البيانات والتخزين المحلي',
    subtitleEn: 'No Database / No LocalStorage Dependency',
    techStack: 'Ephemeral In-Memory Processing',
    roleAr: 'معالجة فورية وتوليد لحظي دون حفظ مسودات المستخدمين أو بيانات المدارس على خوادم أو قواعد بيانات.',
    roleEn: 'Guarantees immediate in-memory processing without persisting sensitive school or student data in databases.',
    detailsAr: [
      'لا يتم تخزين تقارير المدارس في أي قاعدة بيانات خارجية (No Database).',
      'لا يعتمد التطبيق على LocalStorage لحفظ مسودات المستخدمين.',
      'أقصى درجات الخصوصية للكوادر المدرسية والبيانات المرفقة.',
      'المستخدم يتحكم بالكامل بالمسودة ويصدرها فوراً إلى PDF على جهازه.'
    ],
    detailsEn: [
      'No persistent database storage of school reports or activities.',
      'Zero reliance on browser LocalStorage for draft storage.',
      'Optimal privacy and data autonomy for schools and student records.',
      'Users review in-memory and export directly to local PDF files.'
    ],
    badge: 'Architecture Note'
  }
];

export const REQUEST_FLOW_STEPS: RequestFlowStep[] = [
  {
    step: 1,
    titleAr: 'إدخال الفكرة والوصف',
    titleEn: 'User Describes Activity',
    descriptionAr: 'يقوم رائد النشاط بإدخال ملخص بسيط لفعالية المدرسة، عدد المستفيدين، والأهداف العامة عبر منصة نشاط.',
    descriptionEn: 'Supervisor inputs brief event notes, participant count, and objectives into the Nashat interface.',
    fromNode: 'frontend',
    toNode: 'frontend',
    protocol: 'User Input'
  },
  {
    step: 2,
    titleAr: 'إرسال طلب التوليد الآمن',
    titleEn: 'Secure API Request Dispatch',
    descriptionAr: 'ترسل الواجهة الأمامية (المستضافة على Vercel) الطلب البرمجي المشفر عبر HTTPS إلى الـ Backend.',
    descriptionEn: 'The Vercel-hosted frontend dispatches an encrypted HTTPS POST request to the backend API.',
    fromNode: 'frontend',
    toNode: 'backend',
    protocol: 'HTTPS / JSON'
  },
  {
    step: 3,
    titleAr: 'المعالجة وهندسة التوجيه',
    titleEn: 'Backend Processing & Prompt Engineering',
    descriptionAr: 'يستقبل خادم ASP.NET Core (المستضاف على Somee) الطلب، ويدمجه مع إرشادات الصياغة التعليمية والمعايير التربوية.',
    descriptionEn: 'The ASP.NET Core server validates inputs and orchestrates domain-specific prompt constraints.',
    fromNode: 'backend',
    toNode: 'backend',
    protocol: 'C# / ASP.NET Core'
  },
  {
    step: 4,
    titleAr: 'استدعاء نموذج Gemini AI',
    titleEn: 'Gemini AI API Call',
    descriptionAr: 'يتم استدعاء واجهة برمجة تطبيقات Gemini AI وتمرير معطيات النشاط لبدء عملية التوليد الفوري.',
    descriptionEn: 'The backend securely calls Google Gemini AI API with the structured prompt context.',
    fromNode: 'backend',
    toNode: 'ai-engine',
    protocol: 'REST / Gemini API'
  },
  {
    step: 5,
    titleAr: 'التوليد الذكي الفائق (5 ثوانٍ)',
    titleEn: 'AI Generation (5 Seconds)',
    descriptionAr: 'يحلل النموذج المعطيات ويصيغ تقريراً متكاملاً أو برنامجاً إذاعياً متناسقاً بدقة واحترافية خلال 5 ثوانٍ فقط.',
    descriptionEn: 'Gemini synthesizes the text into formal educational report sections within 5 seconds.',
    fromNode: 'ai-engine',
    toNode: 'backend',
    protocol: 'AI Inference',
    speedHighlight: '5s'
  },
  {
    step: 6,
    titleAr: 'إرجاع المسودة للواجهة',
    titleEn: 'Draft Returned to Frontend',
    descriptionAr: 'يستقبل الـ Backend النتيجة المنظمة ويعيدها مباشرة إلى المتصفح دون تخزينها في أي قاعدة بيانات.',
    descriptionEn: 'Backend returns the structured response directly to the browser with zero database footprint.',
    fromNode: 'backend',
    toNode: 'frontend',
    protocol: 'JSON Response'
  },
  {
    step: 7,
    titleAr: 'المراجعة والتحرير المباشر',
    titleEn: 'Inline Review & Customization',
    descriptionAr: 'يستعرض رائد النشاط المسودة على الشاشة، ويعدل أي بيانات أو أسماء، أو يغير في الصياغة بحرية تامة.',
    descriptionEn: 'Supervisor reviews the draft, adjusts dates, student numbers, or custom school highlights.',
    fromNode: 'frontend',
    toNode: 'frontend',
    protocol: 'DOM Editor'
  },
  {
    step: 8,
    titleAr: 'إرفاق الشواهد والاعتماد',
    titleEn: 'Evidence Attachment & Approval',
    descriptionAr: 'يتم إدراج صور الفعالية وروابط منصة عين، والمصادقة على اعتماد التقرير داخل مسار العمل.',
    descriptionEn: 'Evidence photos and Ain educational links are attached, leading to final report approval.',
    fromNode: 'frontend',
    toNode: 'frontend',
    protocol: 'Client Workflow'
  },
  {
    step: 9,
    titleAr: 'التصدير النهائي كـ PDF',
    titleEn: 'Standardized PDF Export',
    descriptionAr: 'تصدير التقرير النهائي بضغطة زر إلى ملف PDF عالي الجودة جاهز للطباعة والرفع للإدارة التعليمية.',
    descriptionEn: 'One-click export produces a print-ready, officially formatted PDF document locally.',
    fromNode: 'frontend',
    toNode: 'frontend',
    protocol: 'Client PDF Engine'
  }
];

