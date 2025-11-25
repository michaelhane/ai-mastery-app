import { ProgressBar } from './ProgressBar';
import { LevelCard } from './LevelCard';
import lessonsData from '../data/lessons.json';

export function Dashboard({ stats, getUnitStatus, onSelectUnit, onExport }) {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>AI Mastery Roadmap</h1>
        <p className="subtitle">24 units to master Claude Code</p>
      </header>

      <div className="overall-progress">
        <div className="progress-info">
          <span className="progress-label">Overall Progress</span>
          <span className="progress-stats">
            {stats.completedUnits}/{stats.totalUnits} units completed
          </span>
        </div>
        <ProgressBar percentage={stats.percentage} size="lg" />
        <div className="progress-details">
          <span>{stats.percentage}% complete</span>
          <span>{stats.totalTimeSpent} min invested</span>
          <button className="btn-export" onClick={onExport}>Export Progress</button>
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
