import React, { useState } from 'react';
import { useLanguage } from '../app/providers/LanguageContext';
import { SectionWrapper } from '../components/layout/SectionWrapper';
import { ARCHITECTURE_NODES, REQUEST_FLOW_STEPS } from '../data/architecture';
import { Badge } from '../components/presentation/Badge';
import { 
  Server, 
  Globe, 
  Cpu, 
  Cloud, 
  ShieldAlert, 
  Layers
} from 'lucide-react';

export const ArchitectureSection: React.FC = () => {
  const { isArabic, t } = useLanguage();
  const [selectedNodeId, setSelectedNodeId] = useState<string>('frontend');
  const [activeFlowStep, setActiveFlowStep] = useState<number>(1);

  const selectedNode = ARCHITECTURE_NODES.find(n => n.id === selectedNodeId) || ARCHITECTURE_NODES[0];
  const currentStep = REQUEST_FLOW_STEPS.find(s => s.step === activeFlowStep) || REQUEST_FLOW_STEPS[0];

  const nodeIcons: Record<string, React.ReactNode> = {
    'frontend': <Globe className="w-5 h-5 text-[#B39A63]" />,
    'hosting-frontend': <Cloud className="w-5 h-5 text-sky-400" />,
    'backend': <Server className="w-5 h-5 text-amber-400" />,
    'hosting-backend': <Cloud className="w-5 h-5 text-indigo-400" />,
    'ai-engine': <Cpu className="w-5 h-5 text-emerald-400" />,
    'stateless-design': <ShieldAlert className="w-5 h-5 text-[#D4C198]" />
  };

  return (
    <SectionWrapper
      id="architecture"
      sectionNumber="07"
      badgeText={t.architecture.badge}
      title={t.architecture.title}
      subtitle={t.architecture.subtitle}
      containerWidth="wide"
    >
      <div className="space-y-16">
        
        {/* Interactive System Architecture Canvas */}
        <div className="rounded-2xl bg-[#141D18] border border-[#B39A63]/30 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/5">
            <div>
              <div className="flex items-center gap-2">
                <Badge variant="gold" size="sm">
                  {isArabic ? 'مخطط النظام التفاعلي' : 'System Diagram'}
                </Badge>
                <span className="text-xs font-mono text-gray-400">
                  {isArabic ? 'انقر على أي طبقة لاستعراض تفاصيلها' : 'Click any layer to inspect'}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                {isArabic ? 'مكونات المنظومة وعلاقات الاتصال' : 'System Topology & Interaction Nodes'}
              </h3>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-[#D4C198]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{isArabic ? 'معمارية خفيفة بدون قاعدة بيانات' : 'Lean Stateless Architecture'}</span>
            </div>
          </div>

          {/* Interactive Topology Nodes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {ARCHITECTURE_NODES.map(node => {
              const isSelected = node.id === selectedNodeId;
              return (
                <button
                  key={node.id}
                  onClick={() => setSelectedNodeId(node.id)}
                  type="button"
                  className={`p-5 rounded-xl border text-start transition-all cursor-pointer relative overflow-hidden ${
                    isSelected
                      ? 'bg-[#18261E] border-[#B39A63] shadow-lg shadow-[#B39A63]/15'
                      : 'bg-[#121A15] border-white/5 hover:border-[#B39A63]/30 text-gray-400 hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-lg bg-[#111714] border border-white/10 flex items-center justify-center">
                      {nodeIcons[node.id] || <Layers className="w-4 h-4 text-[#B39A63]" />}
                    </div>
                    <span className="font-mono text-[10px] uppercase px-2 py-0.5 rounded bg-white/5 text-[#D4C198] border border-white/5">
                      {node.badge}
                    </span>
                  </div>

                  <h4 className={`text-sm sm:text-base font-bold mb-1 ${isSelected ? 'text-white' : 'text-gray-200'}`}>
                    {isArabic ? node.titleAr : node.titleEn}
                  </h4>

                  <div className="font-mono text-xs text-[#9CA8A2]">
                    {node.techStack}
                  </div>

                  {isSelected && (
                    <div className="absolute bottom-0 start-0 end-0 h-[2px] bg-[#B39A63]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Architecture Node Inspector Panel */}
          <div className="rounded-xl bg-[#111714] border border-[#B39A63]/30 p-6 sm:p-8">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Badge variant="gold" size="sm">
                    {selectedNode.badge}
                  </Badge>
                  <span className="font-mono text-xs text-emerald-400">
                    {selectedNode.techStack}
                  </span>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-white">
                  {isArabic ? selectedNode.titleAr : selectedNode.titleEn}
                </h4>
                <div className="text-xs font-mono text-gray-400">
                  {isArabic ? selectedNode.subtitleAr : selectedNode.subtitleEn}
                </div>
              </div>

              <div className="hidden sm:block text-end">
                <div className="text-xs text-gray-500 font-mono">Component ID</div>
                <div className="font-mono text-xs text-[#D4C198]">{selectedNode.id}</div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 space-y-3">
                <span className="text-xs font-mono text-[#D4C198] uppercase tracking-wider">
                  {isArabic ? 'الدور والمسؤولية في النظام:' : 'Core Responsibility:'}
                </span>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {isArabic ? selectedNode.roleAr : selectedNode.roleEn}
                </p>
              </div>

              <div className="lg:col-span-7 space-y-3">
                <span className="text-xs font-mono text-[#D4C198] uppercase tracking-wider">
                  {isArabic ? 'الخصائص والمحددات الهندسية:' : 'Technical Specifications & Notes:'}
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-[#9CA8A2]">
                  {(isArabic ? selectedNode.detailsAr : selectedNode.detailsEn).map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2.5">
                      <span className="mt-1 flex-shrink-0 w-3.5 h-3.5 rounded-full bg-[#B39A63]/20 text-[#B39A63] flex items-center justify-center text-[10px]">
                        ✓
                      </span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 9-Step Request Flow Visualizer */}
        <div className="rounded-2xl bg-[#141D18] border border-white/10 p-6 sm:p-8">
          <div className="mb-6 pb-4 border-b border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <Badge variant="live" size="sm">
                  Request Lifecycle
                </Badge>
                <span className="font-mono text-xs text-gray-400">
                  9 Verified Stages
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                {t.architecture.requestFlowTitle}
              </h3>
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto py-1">
              {REQUEST_FLOW_STEPS.map(s => (
                <button
                  key={s.step}
                  onClick={() => setActiveFlowStep(s.step)}
                  className={`w-7 h-7 rounded-md font-mono text-xs font-bold transition-all ${
                    s.step === activeFlowStep
                      ? 'bg-[#B39A63] text-[#111714]'
                      : 'bg-[#111714] text-gray-400 hover:text-white border border-white/5'
                  }`}
                >
                  {s.step}
                </button>
              ))}
            </div>
          </div>

          {/* Current Request Flow Stage Card */}
          <div className="rounded-xl bg-[#111714] border border-[#B39A63]/20 p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#B39A63]/20 text-[#D4C198]">
                  Stage {currentStep.step} / 9
                </span>
                <span className="font-mono text-xs text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/20">
                  Protocol: {currentStep.protocol}
                </span>
                {currentStep.speedHighlight && (
                  <span className="font-mono text-xs font-bold text-emerald-400">
                    ⚡ {currentStep.speedHighlight} turnaround
                  </span>
                )}
              </div>

              <h4 className="text-xl sm:text-2xl font-bold text-white">
                {isArabic ? currentStep.titleAr : currentStep.titleEn}
              </h4>

              <p className="text-sm sm:text-base text-[#9CA8A2] leading-relaxed">
                {isArabic ? currentStep.descriptionAr : currentStep.descriptionEn}
              </p>
            </div>

            {/* Step navigation */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveFlowStep(prev => Math.max(1, prev - 1))}
                disabled={activeFlowStep === 1}
                type="button"
                className="px-3.5 py-1.5 rounded-lg bg-[#18231C] text-xs font-semibold text-gray-300 disabled:opacity-40 transition-all cursor-pointer"
              >
                {t.common.prev}
              </button>
              <button
                onClick={() => setActiveFlowStep(prev => Math.min(9, prev + 1))}
                disabled={activeFlowStep === 9}
                type="button"
                className="px-3.5 py-1.5 rounded-lg bg-[#B39A63] hover:bg-[#C2A870] text-[#111714] text-xs font-bold disabled:opacity-40 transition-all cursor-pointer"
              >
                {t.common.next}
              </button>
            </div>
          </div>
        </div>

        {/* Stateless Architecture Note (Strict Accuracy Compliance) */}
        <div className="rounded-2xl bg-gradient-to-r from-[#17221C] via-[#141E19] to-[#121A15] border border-[#B39A63]/30 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#111714] border border-[#B39A63]/40 flex items-center justify-center flex-shrink-0">
              <ShieldAlert className="w-5 h-5 text-[#B39A63]" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Badge variant="gold" size="sm">
                  {isArabic ? 'ملاحظة معمارية مؤكدة' : 'Confirmed Architecture Trait'}
                </Badge>
                <span className="font-mono text-xs text-gray-400">
                  Privacy & Data Autonomy
                </span>
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-white">
                {t.architecture.statelessNoticeTitle}
              </h4>
              <p className="text-sm text-[#9CA8A2] leading-relaxed max-w-4xl">
                {t.architecture.statelessNoticeDesc}
              </p>
              <div className="pt-2 text-xs font-mono text-[#D4C198]">
                {isArabic 
                  ? '✓ لا يتم تخزين مسودات التقارير في أي قاعدة بيانات • لا يتم استخدام LocalStorage • تصدير مباشر للـ PDF على جهاز المستخدم'
                  : '✓ Zero database persistence • Zero LocalStorage dependency • Direct local PDF document compilation'}
              </div>
            </div>
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
};
