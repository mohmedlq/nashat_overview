import React, { useState, useEffect } from 'react';
import { useLanguage } from '../app/providers/LanguageContext';
import { SectionWrapper } from '../components/layout/SectionWrapper';
import { Badge } from '../components/presentation/Badge';
import { 
  SlidersHorizontal, 
  PenTool, 
  Send, 
  Sparkles, 
  CheckSquare, 
  Download,
  Play,
  RotateCcw,
  Zap,
  CheckCircle2
} from 'lucide-react';

export const WorkflowSection: React.FC = () => {
  const { isArabic, t } = useLanguage();
  const [activeStep, setActiveStep] = useState<number>(1);
  const [timerRunning, setTimerRunning] = useState<boolean>(false);
  const [timerCount, setTimerCount] = useState<number>(0);

  const steps = [
    {
      step: 1,
      titleAr: 'تحديد نوع الأداة والمحتوى',
      titleEn: 'Tool & Content Selection',
      descAr: 'يختار المستخدم بين مسار "تقرير نشاط رسمي" أو "إذاعة مدرسية متكاملة" من القائمة الرئيسية أو المساعد الذكي.',
      descEn: 'The user selects between formal Activity Report or Morning Broadcast script from the generator options.',
      icon: <SlidersHorizontal className="w-5 h-5" />,
      subtextAr: 'تقرير نشاط / إذاعة مدرسية',
      subtextEn: 'Report / Morning Broadcast'
    },
    {
      step: 2,
      titleAr: 'وصف الفعالية بأسلوب طبيعي',
      titleEn: 'Natural Activity Description',
      descAr: 'كتابة ملاحظات عفوية تتضمن موضوع الفعالية، عدد المستفيدين، المكان، وأبرز الملاحظات دون تقيد بقوالب مسبقة.',
      descEn: 'User enters free-form notes covering event theme, student numbers, venue, and spontaneous highlights.',
      icon: <PenTool className="w-5 h-5" />,
      subtextAr: 'مدخلات مرنة بدون تعقيد',
      subtextEn: 'Unconstrained prompt input'
    },
    {
      step: 3,
      titleAr: 'إرسال الطلب للمعالجة الذكية',
      titleEn: 'Secure AI Request Dispatch',
      descAr: 'يرسل التطبيق النص إلى خادم ASP.NET Core الذي يهيئ التوجيه التربوي ويخاطب واجهة Gemini AI API.',
      descEn: 'Frontend dispatches data to ASP.NET Core API which orchestrates domain prompts to Gemini AI.',
      icon: <Send className="w-5 h-5" />,
      subtextAr: 'تشفير HTTPS وربط مباشر',
      subtextEn: 'Encrypted HTTPS API bridge'
    },
    {
      step: 4,
      titleAr: 'استلام التقرير المولد (5 ثوانٍ)',
      titleEn: 'Receive Generated Draft (5s)',
      descAr: 'يعود المحتوى فوراً متضمناً الأهداف التربوية، ومؤشرات التنفيذ، والتوصيات والنتائج بصياغة رسمية معتمدة.',
      descEn: 'Structured draft returns in 5 seconds with articulated educational aims, metrics, and outcomes.',
      icon: <Sparkles className="w-5 h-5 text-emerald-400" />,
      subtextAr: 'سرعة قياسية: 5 ثوانٍ',
      subtextEn: 'Reported benchmark: 5 seconds'
    },
    {
      step: 5,
      titleAr: 'المراجعة والتحرير المباشر',
      titleEn: 'Inline Review & Editing',
      descAr: 'يتيح المحرر للمشرف تعديل الأسماء، ضبط الملاحظات، وإضافة اللمسات الخاصة بالمدرسة بدقة وحرية.',
      descEn: 'Educator reviews generated content in-browser, customizes specifics, and incorporates local school nuances.',
      icon: <CheckSquare className="w-5 h-5" />,
      subtextAr: 'تحكم تحريري كامل للمشرف',
      subtextEn: 'Full supervisor editorial control'
    },
    {
      step: 6,
      titleAr: 'الاعتماد وتصدير ملف الـ PDF',
      titleEn: 'Approval & Standardized PDF Export',
      descAr: 'المصادقة على التقرير، إرفاق الشواهد وروابط منصة عين، ثم تحميل مستند PDF رسمي جاهز للطباعة والرفع.',
      descEn: 'Supervisor approves, attaches field photo evidence, and downloads a clean, print-ready PDF document.',
      icon: <Download className="w-5 h-5 text-[#B39A63]" />,
      subtextAr: 'ملف PDF منسق ومعتمد',
      subtextEn: 'Print-ready formal PDF'
    }
  ];

  // Live 5-second generation simulation timer
  useEffect(() => {
    let interval: any;
    if (timerRunning) {
      interval = setInterval(() => {
        setTimerCount(prev => {
          if (prev >= 5.0) {
            setTimerRunning(false);
            return 5.0;
          }
          return +(prev + 0.1).toFixed(1);
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [timerRunning]);

  const startTimer = () => {
    setTimerCount(0);
    setTimerRunning(true);
  };

  const resetTimer = () => {
    setTimerRunning(false);
    setTimerCount(0);
  };

  const currentStepData = steps.find(s => s.step === activeStep) || steps[0];

  return (
    <SectionWrapper
      id="workflow"
      sectionNumber="05"
      badgeText={t.workflow.badge}
      title={t.workflow.title}
      subtitle={t.workflow.subtitle}
    >
      <div className="space-y-12">
        
        {/* Prominent 5-Second Speed Benchmark Hero Card */}
        <div className="rounded-2xl bg-gradient-to-r from-[#17221C] via-[#151F19] to-[#121A15] border border-emerald-500/30 p-6 sm:p-8 relative overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-2">
                <Badge variant="live" size="sm">
                  <Zap className="w-3.5 h-3.5" />
                  <span>{isArabic ? 'زمن التوليد القياسي المعتمد' : 'Authoritative Benchmark'}</span>
                </Badge>
                <span className="font-mono text-xs text-gray-400">
                  {isArabic ? 'متوسط استجابة المنصة' : 'Reported System Turnaround'}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                {t.workflow.speedHighlightTitle}
              </h3>

              <p className="text-sm sm:text-base text-[#9CA8A2] leading-relaxed max-w-2xl">
                {t.workflow.speedHighlightDesc}
              </p>
            </div>

            {/* Interactive 5-Second Speed Simulation Widget */}
            <div className="lg:col-span-4 bg-[#111714] rounded-xl border border-[#B39A63]/30 p-5 flex flex-col items-center justify-center text-center">
              <span className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-1">
                {isArabic ? 'محاكاة زمن التوليد الفعلي' : 'Live Speed Simulation'}
              </span>

              {/* The 5-second stopwatch */}
              <div className="font-mono text-4xl sm:text-5xl font-black text-white my-2 tracking-tight">
                <span className={timerCount >= 5.0 ? 'text-emerald-400' : 'text-[#D4C198]'}>
                  {timerCount.toFixed(1)}
                </span>
                <span className="text-lg font-normal text-gray-400 ms-1">s / 5.0s</span>
              </div>

              {/* Progress track */}
              <div className="w-full bg-[#18231C] h-2 rounded-full overflow-hidden my-2 border border-white/5">
                <div
                  className="h-full bg-gradient-to-r from-[#B39A63] to-emerald-400 transition-all duration-100 ease-linear"
                  style={{ width: `${(timerCount / 5.0) * 100}%` }}
                />
              </div>

              <div className="flex items-center gap-2 mt-2">
                {!timerRunning && timerCount === 0 && (
                  <button
                    onClick={startTimer}
                    type="button"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#B39A63] hover:bg-[#C2A870] text-[#111714] text-xs font-bold transition-all cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>{isArabic ? 'تجربة الـ 5 ثوانٍ الآن' : 'Test 5s Speed'}</span>
                  </button>
                )}

                {timerRunning && (
                  <span className="text-xs font-mono text-emerald-400 animate-pulse flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    {isArabic ? 'الذكاء الاصطناعي يحلل ويصيغ...' : 'Gemini AI generating...'}
                  </span>
                )}

                {!timerRunning && timerCount >= 5.0 && (
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-emerald-400 font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {isArabic ? 'اكتمل التوليد بنجاح!' : 'Complete!'}
                    </span>
                    <button
                      onClick={resetTimer}
                      type="button"
                      className="p-1 rounded bg-[#18231C] hover:bg-[#202E25] text-gray-400 hover:text-white"
                      title={isArabic ? 'إعادة التجربة' : 'Reset'}
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* 6-Step Connected Sequence Visualizer */}
        <div className="space-y-6">
          <div className="text-xs font-mono text-[#D4C198] uppercase tracking-widest">
            {isArabic ? 'مراحل تدفق تجربة المستخدم (انقر على أي مرحلة):' : 'Interactive 6-Stage User Workflow (Click to Inspect):'}
          </div>

          {/* Stepper Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {steps.map(s => {
              const isActive = s.step === activeStep;
              return (
                <button
                  key={s.step}
                  onClick={() => setActiveStep(s.step)}
                  type="button"
                  className={`p-3.5 rounded-xl border text-start transition-all cursor-pointer flex flex-col justify-between ${
                    isActive
                      ? 'bg-[#18251E] border-[#B39A63] shadow-md shadow-[#B39A63]/15'
                      : 'bg-[#151E19] border-white/5 hover:border-[#B39A63]/30 text-gray-400 hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-[#B39A63]">
                      0{s.step}
                    </span>
                    <div className={isActive ? 'text-[#D4C198]' : 'text-gray-500'}>
                      {s.icon}
                    </div>
                  </div>
                  <div className={`text-xs font-bold leading-tight ${isActive ? 'text-white' : 'text-gray-300'}`}>
                    {isArabic ? s.titleAr : s.titleEn}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Detailed Showcase Box */}
          <div className="rounded-xl bg-[#141D18] border border-[#B39A63]/25 p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2">
                <Badge variant="gold" size="sm">
                  {isArabic ? `المرحلة 0${currentStepData.step} من 6` : `Stage 0${currentStepData.step} of 6`}
                </Badge>
                <span className="font-mono text-xs text-[#D4C198]">
                  {isArabic ? currentStepData.subtextAr : currentStepData.subtextEn}
                </span>
              </div>

              <h4 className="text-xl sm:text-2xl font-bold text-white">
                {isArabic ? currentStepData.titleAr : currentStepData.titleEn}
              </h4>

              <p className="text-sm sm:text-base text-[#9CA8A2] leading-relaxed">
                {isArabic ? currentStepData.descAr : currentStepData.descEn}
              </p>
            </div>

            {/* Stepper Navigation buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setActiveStep(prev => Math.max(1, prev - 1))}
                disabled={activeStep === 1}
                type="button"
                className="px-4 py-2 rounded-lg bg-[#111714] border border-white/10 hover:border-[#B39A63]/40 text-xs font-semibold text-gray-300 disabled:opacity-40 disabled:pointer-events-none transition-all cursor-pointer"
              >
                {t.common.prev}
              </button>
              <button
                onClick={() => setActiveStep(prev => Math.min(6, prev + 1))}
                disabled={activeStep === 6}
                type="button"
                className="px-4 py-2 rounded-lg bg-[#B39A63] hover:bg-[#C2A870] text-[#111714] text-xs font-bold disabled:opacity-40 disabled:pointer-events-none transition-all cursor-pointer"
              >
                {t.common.next}
              </button>
            </div>
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
};

