import React from 'react';
import { useLanguage } from '../../app/providers/LanguageContext';
import { Globe } from 'lucide-react';

export const LanguageSwitcher: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      type="button"
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#B39A63]/30 bg-[#16201B] hover:bg-[#1C2A23] hover:border-[#B39A63]/60 text-sm font-medium text-gray-200 transition-all cursor-pointer focus:ring-2 focus:ring-[#B39A63]/50 focus:outline-none ${className}`}
      aria-label={language === 'ar' ? 'التحويل إلى اللغة الإنجليزية' : 'Switch to Arabic'}
      title={language === 'ar' ? 'Switch to English' : 'التحويل إلى العربية'}
    >
      <Globe className="w-4 h-4 text-[#B39A63]" />
      <span className="font-mono text-xs flex items-center gap-1.5">
        <span className={language === 'ar' ? 'text-[#D4C198] font-bold' : 'text-gray-400'}>
          عربي
        </span>
        <span className="text-gray-600">|</span>
        <span className={language === 'en' ? 'text-[#D4C198] font-bold' : 'text-gray-400'}>
          EN
        </span>
      </span>
    </button>
  );
};

