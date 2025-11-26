import { useLanguage } from '../hooks/useLanguage.jsx';

export function LanguageSelector() {
  const { language, setLanguage, supportedLanguages } = useLanguage();

  return (
    <div className="language-selector">
      {supportedLanguages.map((lang) => (
        <button
          key={lang.code}
          className={`lang-btn ${language === lang.code ? 'active' : ''}`}
          onClick={() => setLanguage(lang.code)}
          title={lang.name}
        >
          {lang.flag}
        </button>
      ))}
    </div>
  );
}
