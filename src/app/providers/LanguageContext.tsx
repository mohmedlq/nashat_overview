import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, Direction } from '../../types';
import { TRANSLATIONS } from '../../data/translations';

interface LanguageContextType {
  language: Language;
  direction: Direction;
  t: typeof TRANSLATIONS.ar;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  isArabic: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('ar');

  const direction: Direction = language === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.setAttribute('dir', direction);
    document.documentElement.setAttribute('lang', language);
    if (language === 'ar') {
      document.body.classList.remove('font-english');
      document.body.classList.add('font-arabic');
    } else {
      document.body.classList.remove('font-arabic');
      document.body.classList.add('font-english');
    }
  }, [language, direction]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const toggleLanguage = () => {
    setLanguageState(prev => (prev === 'ar' ? 'en' : 'ar'));
  };

  const t = language === 'ar' ? TRANSLATIONS.ar : TRANSLATIONS.en;

  return (
    <LanguageContext.Provider
      value={{
        language,
        direction,
        t,
        setLanguage,
        toggleLanguage,
        isArabic: language === 'ar'
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

