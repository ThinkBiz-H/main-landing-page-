import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import en from './translations/en.json';
import ar from './translations/ar.json';

type Language = 'en' | 'ar';

type TranslationValue = string | string[] | { [key: string]: TranslationValue };

interface Translations {
  [key: string]: TranslationValue;
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  tArray: (key: string) => string[];
  isRTL: boolean;
}

const translations: Record<Language, Translations> = { en, ar };

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const getNestedValue = (obj: Translations, path: string): TranslationValue | undefined => {
  return path.split('.').reduce<TranslationValue | undefined>((acc, part) => {
    if (acc && typeof acc === 'object' && !Array.isArray(acc)) {
      return (acc as Record<string, TranslationValue>)[part];
    }
    return undefined;
  }, obj as TranslationValue);
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'en';
  });

  const isRTL = language === 'ar';

  useEffect(() => {
    localStorage.setItem('language', language);
    // Keep page LTR, only set lang attribute for SEO
    document.documentElement.setAttribute('dir', 'ltr');
    document.documentElement.setAttribute('lang', language);
    
    // Add/remove RTL class for selective text styling only
    if (isRTL) {
      document.documentElement.classList.add('rtl-text');
    } else {
      document.documentElement.classList.remove('rtl-text');
    }
  }, [language, isRTL]);

  const t = (key: string): string => {
    const value = getNestedValue(translations[language], key);
    if (typeof value === 'string') {
      return value;
    }
    console.warn(`Translation key "${key}" not found or not a string`);
    return key;
  };

  const tArray = (key: string): string[] => {
    const value = getNestedValue(translations[language], key);
    if (Array.isArray(value)) {
      return value as string[];
    }
    console.warn(`Translation key "${key}" not found or not an array`);
    return [];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, tArray, isRTL }}>
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
