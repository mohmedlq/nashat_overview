import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../app/providers/LanguageContext';
import { NAV_ITEMS } from '../../data/navigation';
import { PROJECT_INFO } from '../../data/project';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ExternalLink, Github, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { isArabic, t } = useLanguage();
  const [activeSection, setActiveSection] = useState<string>('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = totalScroll > 0 ? (window.scrollY / totalScroll) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, currentProgress)));

      // Active section detection
      const sections = NAV_ITEMS.map(item => document.getElementById(item.id)).filter(Boolean) as HTMLElement[];
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#111714]/90 backdrop-blur-md border-b border-[#B39A63]/20 transition-all">
      {/* Scroll Progress Bar */}
      <div 
        className="h-[2px] bg-gradient-to-r from-[#B39A63]/40 via-[#B39A63] to-[#D4C198] transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
          
          {/* Brand Identity with Official Open Book Logo */}
          <a
            href="#overview"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#B39A63]/50 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-lg bg-[#18231C] border border-[#B39A63]/30 flex items-center justify-center p-1.5 shadow-sm group-hover:border-[#B39A63] transition-colors">
              <img
                src="/assets/nashat-logo.png"
                alt="شعار نشاط الرسمي - Open Book Official Logo"
                className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(179,154,99,0.3)]"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold tracking-tight text-white group-hover:text-[#D4C198] transition-colors">
                  {isArabic ? PROJECT_INFO.name.ar : PROJECT_INFO.name.en}
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-950/60 text-emerald-400 border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {isArabic ? 'يعمل ويتوسّع' : 'Live'}
                </span>
              </div>
              <span className="text-[11px] text-[#9CA8A2] tracking-wide hidden md:block">
                {isArabic ? PROJECT_INFO.tagline.ar : PROJECT_INFO.tagline.en}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 overflow-x-auto py-1">
            {NAV_ITEMS.slice(0, 8).map(item => {
              const isActive = activeSection === item.id;
              const label = isArabic ? item.labelAr : item.labelEn;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.href)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-[#B39A63]/15 text-[#D4C198] border border-[#B39A63]/40'
                      : 'text-gray-300 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  {label}
                </button>
              );
            })}
            {/* Quick dropdown or link for testimonials */}
            <button
              onClick={() => scrollTo('#testimonials')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap cursor-pointer ${
                activeSection === 'testimonials'
                  ? 'bg-[#B39A63]/15 text-[#D4C198] border border-[#B39A63]/40'
                  : 'text-[#D4C198]/80 hover:text-[#D4C198] hover:bg-[#B39A63]/10 border border-transparent'
              }`}
            >
              {isArabic ? 'آراء المستفيدين' : 'Testimonials'}
            </button>
          </nav>

          {/* Right Controls: Language Switcher, Platform Link & GitHub */}
          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageSwitcher />

            {/* Official Platform External CTA */}
            <a
              href={PROJECT_INFO.urls.platform}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#B39A63] hover:bg-[#C2A870] text-[#111714] text-xs sm:text-sm font-semibold shadow-sm transition-all hover:shadow-[0_0_15px_rgba(179,154,99,0.35)] cursor-pointer"
              title={isArabic ? 'فتح منصة نشاط الحية في نافذة جديدة' : 'Open live Nashat platform in a new tab'}
            >
              <span>{t.common.visitPlatform}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            {/* GitHub Repo Link */}
            <a
              href={PROJECT_INFO.urls.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-[#B39A63]/25 bg-[#16201B] hover:bg-[#1C2A23] hover:border-[#B39A63]/50 text-gray-300 hover:text-white transition-all hidden sm:flex items-center justify-center"
              aria-label="GitHub Repository"
              title={t.common.viewGitHub}
            >
              <Github className="w-4 h-4" />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(prev => !prev)}
              type="button"
              className="xl:hidden p-2 rounded-lg border border-white/10 bg-[#16201B] text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-[#B39A63]/20 bg-[#111714]/98 px-4 pt-3 pb-6 space-y-2 animate-fadeIn shadow-2xl">
          <div className="grid grid-cols-2 gap-2">
            {NAV_ITEMS.map(item => {
              const isActive = activeSection === item.id;
              const label = isArabic ? item.labelAr : item.labelEn;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.href)}
                  className={`p-2.5 text-xs font-medium rounded-lg text-start transition-all ${
                    isActive
                      ? 'bg-[#B39A63]/20 text-[#D4C198] border border-[#B39A63]/40'
                      : 'bg-[#151E19] text-gray-300 hover:text-white border border-white/5'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
            <span>{isArabic ? 'المرحلة 2 — توسع المنصة' : 'Phase 2 — Platform Expansion'}</span>
            <a
              href={PROJECT_INFO.urls.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#D4C198] hover:underline"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
