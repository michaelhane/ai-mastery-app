import { useState } from 'react';
import { ProgressBar } from './ProgressBar';
import { UnitCard } from './UnitCard';
import { useLanguage } from '../hooks/useLanguage.jsx';

export function LevelCard({ level, levelStats, getUnitStatus, onSelectUnit }) {
  const [expanded, setExpanded] = useState(false);
  const { t } = useLanguage();

  // Get translated description if available, otherwise use original
  const description = t(`level-${level.id}`) !== `level-${level.id}`
    ? t(`level-${level.id}`)
    : level.description;

  return (
    <div className="level-card">
      <div className="level-header" onClick={() => setExpanded(!expanded)}>
        <div className="level-info">
          <h2 className="level-title">{level.title}</h2>
          <p className="level-description">{description}</p>
        </div>
        <div className="level-progress">
          <span className="level-stats">
            {levelStats.completed}/{levelStats.total} units
          </span>
          <ProgressBar percentage={levelStats.percentage} />
          <span className="level-percentage">{levelStats.percentage}%</span>
        </div>
        <span className="level-expand">{expanded ? '▼' : '▶'}</span>
      </div>

      {expanded && (
        <div className="level-units">
          {level.units.map(unit => (
            <UnitCard
              key={unit.id}
              unit={unit}
              status={getUnitStatus(unit.id)}
              onClick={() => onSelectUnit(unit)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
