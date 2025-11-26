import { ProgressBar } from './ProgressBar';
import { LevelCard } from './LevelCard';
import { LanguageSelector } from './LanguageSelector';
import { useLanguage } from '../hooks/useLanguage.jsx';
import lessonsData from '../data/lessons.json';

export function Dashboard({ stats, getUnitStatus, onSelectUnit, onExport }) {
  const { t } = useLanguage();

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="header-top">
          <h1>{t('appTitle')}</h1>
          <LanguageSelector />
        </div>
        <p className="subtitle">{t('appSubtitle')}</p>
      </header>

      <div className="intro-section">
        <h2>{t('howToUse')}</h2>
        <ol>
          <li>{t('step1')}</li>
          <li>{t('step2')}</li>
          <li>{t('step3')}</li>
          <li>{t('step4')}</li>
        </ol>
        <p className="intro-tip">
          {t('cliTip')} <code>/lesson</code>, <code>/progress</code>, <code>/practice</code>
        </p>
      </div>

      <div className="overall-progress">
        <div className="progress-info">
          <span className="progress-label">{t('overallProgress')}</span>
          <span className="progress-stats">
            {stats.completedUnits}/{stats.totalUnits} {t('unitsCompleted')}
          </span>
        </div>
        <ProgressBar percentage={stats.percentage} size="lg" />
        <div className="progress-details">
          <span>{stats.percentage}% {t('complete')}</span>
          <span>{stats.totalTimeSpent} {t('minInvested')}</span>
          <button className="btn-export" onClick={onExport}>{t('exportProgress')}</button>
        </div>
      </div>

      <div className="levels-container">
        {lessonsData.levels.map((level, index) => {
          const levelStats = stats.levelStats.find(s => s.id === level.id);
          return (
            <LevelCard
              key={level.id}
              level={level}
              levelStats={levelStats}
              getUnitStatus={getUnitStatus}
              onSelectUnit={onSelectUnit}
            />
          );
        })}
      </div>
    </div>
  );
}
