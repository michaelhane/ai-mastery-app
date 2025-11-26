import { useState, useEffect, useCallback, createContext, useContext } from 'react';
import { translations, supportedLanguages } from '../i18n/translations';

const STORAGE_KEY = 'ai-mastery-language';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState('en');

  useEffect(() => {
    // Load saved language or detect from browser
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && translations[saved]) {
      setLanguageState(saved);
    } else {
      // Try to detect from browser
      const browserLang = navigator.language.split('-')[0];
      if (translations[browserLang]) {
        setLanguageState(browserLang);
      }
    }
  }, []);

  const setLanguage = useCallback((lang) => {
    if (translations[lang]) {
      setLanguageState(lang);
      localStorage.setItem(STORAGE_KEY, lang);
    }
  }, []);

  const t = useCallback((key) => {
    return translations[language]?.[key] || translations['en']?.[key] || key;
  }, [language]);

  const getGoodExample = useCallback((prompt) => {
    return translations[language]?.goodExamples?.[prompt] ||
           translations['en']?.goodExamples?.[prompt] ||
           null;
  }, [language]);

  return (
    <LanguageContext.Provider value={{
      language,
      setLanguage,
      t,
      getGoodExample,
      supportedLanguages
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
