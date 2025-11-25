import { useState } from 'react';
import { useProgress } from '../hooks/useProgress';
import { Dashboard } from './Dashboard';
import { LessonView } from './LessonView';

export function App() {
  const [selectedUnit, setSelectedUnit] = useState(null);
  const {
    loading,
    markComplete,
    getStats,
    getUnitStatus,
    exportProgress
  } = useProgress();

  if (loading) {
    return <div className="app-loading">Loading...</div>;
  }

  const stats = getStats();

  // If a unit is selected, show the lesson view
  if (selectedUnit) {
    return (
      <LessonView
        unit={selectedUnit}
        status={getUnitStatus(selectedUnit.id)}
        onBack={() => setSelectedUnit(null)}
        onMarkComplete={(unitId) => {
          markComplete(unitId);
        }}
      />
    );
  }

  // Otherwise show the dashboard
  return (
    <Dashboard
      stats={stats}
      getUnitStatus={getUnitStatus}
      onSelectUnit={setSelectedUnit}
      onExport={exportProgress}
    />
  );
}
