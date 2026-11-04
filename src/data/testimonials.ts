import { TestimonialSlot } from '../types';

/**
 * Centralized testimonial image slots.
 * Replace `imageSrc` with the path to the real screenshot (e.g. '/assets/testimonials/review-1.png')
 * when ready. The gallery will automatically display the image in place of the neutral placeholder.
 */
export const TESTIMONIAL_SLOTS: TestimonialSlot[] = [
  {
    id: 1,
    imageSrc: '', // Leave empty to display neutral placeholder, or provide path to uploaded screenshot
    captionAr: 'رسالة إشادة من مشرف نشاط بمناسبة اليوم الوطني',
    captionEn: 'Supervisor feedback on Saudi National Day report generation',
    aspectRatio: 'aspect-[4/3]'
  },
  {
    id: 2,
    imageSrc: '',
    captionAr: 'انطباع رائد نشاط حول سرعة إعداد الإذاعة المدرسية',
    captionEn: 'Activity leader review regarding morning broadcast generation speed',
    aspectRatio: 'aspect-[4/3]'
  },
  {
    id: 3,
    imageSrc: '',
    captionAr: 'توثيق اعتماد تقرير فعالية أسبوع الفضاء',
    captionEn: 'Documentation of Space Week approved report output',
    aspectRatio: 'aspect-[4/3]'
  },
  {
    id: 4,
    imageSrc: '',
    captionAr: 'إشادة بتنسيق ملف الـ PDF وتضمين الشواهد الميدانية',
    captionEn: 'Praise for standardized PDF export with field evidence',
    aspectRatio: 'aspect-[4/3]'
  },
  {
    id: 5,
    imageSrc: '',
    captionAr: 'رأي منسق نشاط في سهولة التعديل على المحتوى المولد',
    captionEn: 'Coordinator testimony on prompt editing and custom touches',
    aspectRatio: 'aspect-[4/3]'
  },
  {
    id: 6,
    imageSrc: '',
    captionAr: 'رسالة تفاعل من إحدى مدارس المنطقة الشرقية',
    captionEn: 'User message from a school in the Eastern Province',
    aspectRatio: 'aspect-[4/3]'
  }
];

export const TESTIMONIAL_PLACEHOLDER_TEXT = {
  ar: {
    badge: 'شواهد ميدانية حية',
    title: 'آراء المستفيدين',
    subtitle: 'مساحة مخصصة لمعاينة رسائل وانطباعات رواد النشاط والمشرفين بعد استخدام المنصة وتجربة التوليد الذكي.',
    placeholderText: 'ستُضاف صورة رأي المستخدم هنا.',
    hint: 'تم تجهيز هذه الخانة هندسياً لاستيعاب لقطات الشاشة الميدانية بنصوصها العربية دون تشويه.',
    adminNotice: 'لتحديث هذه الصورة: قم بوضع مسار الصورة في ملف src/data/testimonials.ts داخل المعرّف المخصص.'
  },
  en: {
    badge: 'Field Evidences & Messages',
    title: 'Voices of Nashat',
    subtitle: 'A dedicated gallery showcasing authentic reactions and feedback from school supervisors across the Kingdom.',
    placeholderText: 'User feedback image will be added here.',
    hint: 'Engineered with calibrated aspect ratios to preserve original Arabic chat screenshots with zero distortion.',
    adminNotice: 'To upload: update the imageSrc property in src/data/testimonials.ts with the asset path.'
  }
};

