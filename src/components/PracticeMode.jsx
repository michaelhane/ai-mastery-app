import { useState, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage.jsx';

// Parse exercises from markdown content
function parseExercises(content) {
  const exercises = [];

  // Find "Rewrite Vague Prompts" exercises
  const vagueMatch = content.match(/### Exercise 1:.*?(?=### Exercise 2|---)/s);
  if (vagueMatch) {
    const vagueSection = vagueMatch[0];
    const vagueItems = vagueSection.matchAll(/\d+\.\s+\*\*Vague:\*\*\s+"([^"]+)"/g);
    for (const match of vagueItems) {
      exercises.push({
        type: 'rewrite',
        prompt: match[1],
        instruction: 'Rewrite this vague prompt to be clear using Action + Target + Details'
      });
    }
  }

  // Find "Write Clear Prompts" exercises
  const writeMatch = content.match(/### Exercise 2:.*?(?=### Exercise 3|---)/s);
  if (writeMatch) {
    const writeSection = writeMatch[0];
    const writeItems = writeSection.matchAll(/\d+\.\s+\*\*Task:\*\*\s+([^\n]+)/g);
    for (const match of writeItems) {
      exercises.push({
        type: 'write',
        task: match[1].trim(),
        instruction: 'Write a clear prompt for this task'
      });
    }
  }

  return exercises;
}

// Parse success checklist from markdown
function parseChecklist(content) {
  const items = [];
  const checklistMatch = content.match(/## Success Checklist[\s\S]*?(?=---)/);
  if (checklistMatch) {
    const matches = checklistMatch[0].matchAll(/- \[ \]\s+(.+)/g);
    for (const match of matches) {
      items.push(match[1].trim());
    }
  }
  return items;
}

export function PracticeMode({ content, unitId, onComplete, onBack }) {
  const { t, getGoodExample } = useLanguage();
  const [exercises, setExercises] = useState([]);
  const [checklist, setChecklist] = useState([]);
  const [answers, setAnswers] = useState({});
  const [checklistState, setChecklistState] = useState({});
  const [currentExercise, setCurrentExercise] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [timer, setTimer] = useState(0);
  const [timerRunning, setTimerRunning] = useState(true);

  // Parse content on mount
  useEffect(() => {
    const parsedExercises = parseExercises(content);
    const parsedChecklist = parseChecklist(content);
    setExercises(parsedExercises);
    setChecklist(parsedChecklist);

    // Initialize states
    const initialAnswers = {};
    parsedExercises.forEach((_, i) => initialAnswers[i] = '');
    setAnswers(initialAnswers);

    const initialChecklist = {};
    parsedChecklist.forEach((_, i) => initialChecklist[i] = false);
    setChecklistState(initialChecklist);
  }, [content]);

  // Timer
  useEffect(() => {
    let interval;
    if (timerRunning) {
      interval = setInterval(() => setTimer(t => t + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [timerRunning]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerChange = (index, value) => {
    setAnswers(prev => ({ ...prev, [index]: value }));
    setShowFeedback(false);
  };

  const handleChecklistToggle = (index) => {
    setChecklistState(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const evaluateAnswer = (exercise, answer) => {
    if (!answer.trim()) return { score: 0, feedback: t('pleaseWriteAnswer') };

    const hasAction = /\b(read|search|find|list|check|create|show|get|analyze|report)\b/i.test(answer);
    const hasTarget = answer.length > 20;
    const hasDetails = /\b(in|with|and|for|from|all|each)\b/i.test(answer);

    let score = 0;
    let feedback = [];

    if (hasAction) {
      score += 33;
      feedback.push(t('hasActionVerb'));
    } else {
      feedback.push(t('missingActionVerb'));
    }

    if (hasTarget) {
      score += 33;
      feedback.push(t('specifiesTarget'));
    } else {
      feedback.push(t('tooShort'));
    }

    if (hasDetails) {
      score += 34;
      feedback.push(t('includesDetails'));
    } else {
      feedback.push(t('addDetails'));
    }

    // Check for example if it's a rewrite exercise (use translated examples)
    let example = null;
    if (exercise.type === 'rewrite') {
      example = getGoodExample(exercise.prompt);
    }

    return { score, feedback, example };
  };

  const allChecklistComplete = Object.values(checklistState).every(v => v);
  const currentEx = exercises[currentExercise];

  if (exercises.length === 0) {
    return (
      <div className="practice-mode">
        <div className="practice-header">
          <button className="btn-back" onClick={onBack}>{t('backToLesson')}</button>
          <h2>{t('practiceMode')}</h2>
        </div>
        <p>{t('noExercisesFound')}</p>
      </div>
    );
  }

  return (
    <div className="practice-mode">
      <div className="practice-header">
        <button className="btn-back" onClick={onBack}>{t('backToLesson')}</button>
        <div className="practice-title">
          <h2>{t('practiceMode')}</h2>
          <span className="timer">{formatTime(timer)}</span>
        </div>
        <div className="practice-progress">
          {t('exercise')} {currentExercise + 1} {t('of')} {exercises.length}
        </div>
      </div>

      <div className="exercise-container">
        <div className="exercise-type">
          {currentEx.type === 'rewrite' ? t('rewriteVaguePrompt') : t('writeClearPrompt')}
        </div>

        <div className="exercise-prompt">
          {currentEx.type === 'rewrite' ? (
            <div className="vague-prompt">
              <span className="label">{t('vague')}:</span>
              <code>"{currentEx.prompt}"</code>
            </div>
          ) : (
            <div className="task-prompt">
              <span className="label">{t('task')}:</span>
              <span>{currentEx.task}</span>
            </div>
          )}
        </div>

        <div className="exercise-instruction">
          {currentEx.type === 'rewrite' ? t('rewriteInstruction') : t('writeInstruction')}
        </div>

        <textarea
          className="answer-input"
          placeholder={t('placeholder')}
          value={answers[currentExercise] || ''}
          onChange={(e) => handleAnswerChange(currentExercise, e.target.value)}
          rows={4}
        />

        <button
          className="btn-check"
          onClick={() => setShowFeedback(true)}
          disabled={!answers[currentExercise]?.trim()}
        >
          {t('checkAnswer')}
        </button>

        {showFeedback && answers[currentExercise] && (
          <div className="feedback">
            {(() => {
              const result = evaluateAnswer(currentEx, answers[currentExercise]);
              return (
                <>
                  <div className={`score score-${result.score >= 66 ? 'good' : result.score >= 33 ? 'ok' : 'bad'}`}>
                    {t('score')}: {result.score}%
                  </div>
                  <ul className="feedback-list">
                    {result.feedback.map((f, i) => (
                      <li key={i} className={f.startsWith('✓') ? 'good' : 'bad'}>{f}</li>
                    ))}
                  </ul>
                  {result.example && (
                    <div className="example-answer">
                      <strong>{t('exampleGoodAnswer')}</strong>
                      <code>{result.example}</code>
                    </div>
                  )}
                </>
              );
            })()}
          </div>
        )}

        <div className="exercise-nav">
          <button
            className="btn-prev"
            onClick={() => { setCurrentExercise(c => c - 1); setShowFeedback(false); }}
            disabled={currentExercise === 0}
          >
            {t('previous')}
          </button>
          <button
            className="btn-next"
            onClick={() => { setCurrentExercise(c => c + 1); setShowFeedback(false); }}
            disabled={currentExercise === exercises.length - 1}
          >
            {t('next')}
          </button>
        </div>
      </div>

      <div className="checklist-section">
        <h3>{t('successChecklist')}</h3>
        <p className="checklist-instruction">{t('checklistInstruction')}</p>
        <ul className="checklist">
          {checklist.map((item, index) => (
            <li key={index} className={checklistState[index] ? 'checked' : ''}>
              <label>
                <input
                  type="checkbox"
                  checked={checklistState[index] || false}
                  onChange={() => handleChecklistToggle(index)}
                />
                <span>{item}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="practice-footer">
        <div className="completion-status">
          {allChecklistComplete ? (
            <span className="ready">{t('readyToComplete')}</span>
          ) : (
            <span className="not-ready">{t('completeAllItems')}</span>
          )}
        </div>
        <button
          className="btn-complete"
          disabled={!allChecklistComplete}
          onClick={() => {
            setTimerRunning(false);
            onComplete(timer);
          }}
        >
          {t('markUnitComplete')} ({formatTime(timer)} {t('timeSpent')})
        </button>
      </div>
    </div>
  );
}
