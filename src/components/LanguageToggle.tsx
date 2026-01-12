import { useLanguage } from '@/lib/i18n/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted hover:bg-accent/10 border border-border transition-all duration-200 group"
      aria-label={`Switch to ${language === 'en' ? 'Arabic' : 'English'}`}
    >
      <Globe className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
      <span className="font-medium text-sm text-foreground">
        {language === 'en' ? 'AR' : 'EN'}
      </span>
      <span className="text-xs text-muted-foreground">
        {language === 'en' ? 'العربية' : 'English'}
      </span>
    </button>
  );
};

export default LanguageToggle;
