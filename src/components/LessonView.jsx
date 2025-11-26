import { useState, useEffect } from 'react';
import { marked } from 'marked';
import { PracticeMode } from './PracticeMode';
import { useLanguage } from '../hooks/useLanguage.jsx';

export function LessonView({ unit, status, onBack, onMarkComplete, onAddTime }) {
  const { t } = useLanguage();
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mode, setMode] = useState('learn'); // 'learn' or 'practice'

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`/lessons/${unit.file}`)
      .then(res => {
        if (!res.ok) throw new Error('Failed to load lesson');
        return res.text();
      })
      .then(text => {
        setContent(text);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [unit.file]);

  if (loading) {
    return <div className="lesson-loading">Loading lesson...</div>;
  }

  if (error) {
    return (
      <div className="lesson-error">
        <p>Error loading lesson: {error}</p>
        <button onClick={onBack}>{t('backToDashboard')}</button>
      </div>
    );
  }

  // Practice mode
  if (mode === 'practice') {
    return (
      <PracticeMode
        content={content}
        unitId={unit.id}
        onBack={() => setMode('learn')}
        onComplete={(timeSpent) => {
          if (onAddTime) onAddTime(unit.id, Math.round(timeSpent / 60));
          onMarkComplete(unit.id);
          setMode('learn');
        }}
      />
    );
  }

  // Extract just the Learn section for initial view
  const learnSection = content.match(/## Learn[\s\S]*?(?=## Practice|---\s*$)/)?.[0] || content;
  const htmlContent = marked(learnSection);

  return (
    <div className="lesson-view">
      <header className="lesson-header">
        <button className="btn-back" onClick={onBack}>{t('back')}</button>
        <div className="lesson-info">
          <h1>{unit.title}</h1>
          <div className="lesson-meta">
            <span>{t('learnTime')}: {unit.learnTime} {t('min')}</span>
            <span>{t('practiceTime')}: {unit.practiceTime} {t('min')}</span>
            {status.repetitions > 0 && (
              <span className="completed-badge">
                {t('completed')} {status.repetitions}x
              </span>
            )}
          </div>
        </div>
      </header>

      <div className="mode-tabs">
        <button
          className={`tab ${mode === 'learn' ? 'active' : ''}`}
          onClick={() => setMode('learn')}
        >
          📖 {t('learn')}
        </button>
        <button
          className={`tab ${mode === 'practice' ? 'active' : ''}`}
          onClick={() => setMode('practice')}
        >
          ✏️ {t('practice')}
        </button>
      </div>

      <div
        className="lesson-content"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />

      <footer className="lesson-footer">
        <div className="lesson-actions">
          <button
            className="btn-practice"
            onClick={() => setMode('practice')}
          >
            {t('startPractice')}
          </button>
          <button className="btn-back" onClick={onBack}>
            {t('backToDashboard')}
          </button>
        </div>
      </footer>
    </div>
  );
}
