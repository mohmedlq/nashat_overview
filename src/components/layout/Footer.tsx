import React from 'react';
import { useLanguage } from '../../app/providers/LanguageContext';
import { PROJECT_INFO } from '../../data/project';
import { ExternalLink, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  const { isArabic, t } = useLanguage();

  return (
    <footer className="bg-[#0D120F] border-t border-[#B39A63]/20 py-12 text-sm text-[#9CA8A2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          
          {/* Logo & Identity */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#141E18] border border-[#B39A63]/30 p-1.5 flex items-center justify-center">
              <img
                src="/assets/nashat-logo.png"
                alt="شعار نشاط"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="font-bold text-white text-base">
                {isArabic ? PROJECT_INFO.name.ar : PROJECT_INFO.name.en}
              </div>
              <div className="text-xs text-[#B39A63]">
                {isArabic ? PROJECT_INFO.tagline.ar : PROJECT_INFO.tagline.en}
              </div>
            </div>
          </div>

          {/* Official External Links */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
            <a
              href={PROJECT_INFO.urls.platform}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-gray-300 hover:text-[#D4C198] transition-colors"
            >
              <span>{t.common.visitPlatform}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <span className="text-gray-700">•</span>

            <a
              href={PROJECT_INFO.urls.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-gray-300 hover:text-[#D4C198] transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>{t.common.viewGitHub}</span>
            </a>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            {t.footer.copyright} {new Date().getFullYear()} — {isArabic ? 'منصة نشاط' : 'Nashat Platform'}
          </div>

          <div className="font-mono text-[11px] text-[#B39A63]/80">
            {t.footer.techBadge}
          </div>
        </div>
      </div>
    </footer>
  );
};
