export function UnitCard({ unit, status, onClick }) {
  const statusIcons = {
    'not-started': '○',
    'in-progress': '◐',
    'completed': '●'
  };

  const statusColors = {
    'not-started': 'status-pending',
    'in-progress': 'status-progress',
    'completed': 'status-complete'
  };

  return (
    <div
      className={`unit-card ${statusColors[status.status || 'not-started']}`}
      onClick={onClick}
    >
      <div className="unit-header">
        <span className="unit-status">{statusIcons[status.status || 'not-started']}</span>
        <span className="unit-title">{unit.title}</span>
      </div>
      <div className="unit-meta">
        <span className="unit-time">{unit.learnTime + unit.practiceTime} min</span>
        {status.repetitions > 0 && (
          <span className="unit-reps">{status.repetitions}x completed</span>
        )}
      </div>
    </div>
  );
}
