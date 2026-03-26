import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ru' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-700/50 bg-indigo-950/30 text-indigo-200 hover:text-white hover:bg-purple-900/30 hover:border-purple-500/50 transition-all text-sm"
      aria-label="Switch language"
    >
      <Languages className="w-4 h-4" />
      <span className="uppercase font-medium">
        {i18n.language === 'en' ? 'RU' : 'EN'}
      </span>
    </button>
  );
}