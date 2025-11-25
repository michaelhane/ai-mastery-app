import { useState, useEffect, useCallback } from 'react';
import lessonsData from '../data/lessons.json';

const STORAGE_KEY = 'ai-mastery-progress';

const defaultProgress = {
  units: {},
  currentUnit: '01-clear-prompts',
  totalTimeSpent: 0,
  lastActive: null
};

export function useProgress() {
  const [progress, setProgress] = useState(defaultProgress);
  const [loading, setLoading] = useState(true);

  // Load progress from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setProgress(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse progress:', e);
      }
    }
    setLoading(false);
  }, []);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    if (!loading) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    }
  }, [progress, loading]);

  // Mark a unit as complete
  const markComplete = useCallback((unitId) => {
    setProgress(prev => {
      const existing = prev.units[unitId] || {};
      const now = new Date().toISOString().split('T')[0];

      return {
        ...prev,
        units: {
          ...prev.units,
          [unitId]: {
            status: 'completed',
            repetitions: (existing.repetitions || 0) + 1,
            lastCompleted: now,
            timeSpent: existing.timeSpent || 0
          }
        },
        lastActive: now
      };
    });
  }, []);

  // Mark a unit as in progress
  const markInProgress = useCallback((unitId) => {
    setProgress(prev => ({
      ...prev,
      currentUnit: unitId,
      units: {
        ...prev.units,
        [unitId]: {
          ...prev.units[unitId],
          status: 'in-progress'
        }
      },
      lastActive: new Date().toISOString().split('T')[0]
    }));
  }, []);

  // Add time spent to a unit
  const addTimeSpent = useCallback((unitId, minutes) => {
    setProgress(prev => ({
      ...prev,
      units: {
        ...prev.units,
        [unitId]: {
          ...prev.units[unitId],
          timeSpent: (prev.units[unitId]?.timeSpent || 0) + minutes
        }
      },
      totalTimeSpent: prev.totalTimeSpent + minutes
    }));
  }, []);

  // Calculate completion stats
  const getStats = useCallback(() => {
    const allUnits = lessonsData.levels.flatMap(l => l.units);
    const totalUnits = allUnits.length;
    const completedUnits = Object.values(progress.units).filter(u => u.status === 'completed').length;

    const levelStats = lessonsData.levels.map(level => {
      const levelUnits = level.units.length;
      const levelCompleted = level.units.filter(u => progress.units[u.id]?.status === 'completed').length;
      return {
        id: level.id,
        title: level.title,
        completed: levelCompleted,
        total: levelUnits,
        percentage: Math.round((levelCompleted / levelUnits) * 100)
      };
    });

    return {
      totalUnits,
      completedUnits,
      percentage: Math.round((completedUnits / totalUnits) * 100),
      levelStats,
      totalTimeSpent: progress.totalTimeSpent,
      currentUnit: progress.currentUnit
    };
  }, [progress]);

  // Get unit status
  const getUnitStatus = useCallback((unitId) => {
    return progress.units[unitId] || { status: 'not-started', repetitions: 0, timeSpent: 0 };
  }, [progress]);

  // Reset all progress
  const resetProgress = useCallback(() => {
    setProgress(defaultProgress);
  }, []);

  // Export progress as JSON
  const exportProgress = useCallback(() => {
    const dataStr = JSON.stringify(progress, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ai-mastery-progress.json';
    a.click();
    URL.revokeObjectURL(url);
  }, [progress]);

  // Import progress from JSON
  const importProgress = useCallback((jsonString) => {
    try {
      const imported = JSON.parse(jsonString);
      setProgress(imported);
      return true;
    } catch (e) {
      console.error('Failed to import progress:', e);
      return false;
    }
  }, []);

  return {
    progress,
    loading,
    markComplete,
    markInProgress,
    addTimeSpent,
    getStats,
    getUnitStatus,
    resetProgress,
    exportProgress,
    importProgress
  };
}
