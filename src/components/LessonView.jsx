import { useState, useEffect } from 'react';
import { marked } from 'marked';

export function LessonView({ unit, status, onBack, onMarkComplete }) {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        <button onClick={onBack}>Back to Dashboard</button>
      </div>
    );
  }

  const htmlContent = marked(content);

  return (
    <div className="lesson-view">
      <header className="lesson-header">
        <button className="btn-back" onClick={onBack}>← Back</button>
        <div className="lesson-info">
          <h1>{unit.title}</h1>
          <div className="lesson-meta">
            <span>Learn: {unit.learnTime} min</span>
            <span>Practice: {unit.practiceTime} min</span>
            {status.repetitions > 0 && (
              <span className="completed-badge">
                Completed {status.repetitions}x
              </span>
            )}
          </div>
        </div>
      </header>

      <div
        className="lesson-content"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />

      <footer className="lesson-footer">
        <div className="lesson-actions">
          {status.status !== 'completed' ? (
            <button
              className="btn-complete"
              onClick={() => onMarkComplete(unit.id)}
            >
              Mark as Complete
            </button>
          ) : (
            <button
              className="btn-repeat"
              onClick={() => onMarkComplete(unit.id)}
            >
              Mark as Repeated (+1)
            </button>
          )}
          <button className="btn-back" onClick={onBack}>
            Back to Dashboard
          </button>
        </div>
      </footer>
    </div>
  );
}
