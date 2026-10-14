import { ExamResult, ExamSession, UserStats } from '@/types/exam';

const STORAGE_KEYS = {
  STATS: 'simulabrasil_stats_v1',
  HISTORY: 'simulabrasil_history_v1',
  IN_PROGRESS: 'simulabrasil_in_progress_v1',
};

const DEFAULT_STATS: UserStats = {
  streakDays: 12,
  lastActiveDate: new Date().toISOString().split('T')[0],
  totalQuestionsAnswered: 85,
  totalCorrect: 74,
  weeklyGoalTarget: 100,
  weeklyGoalCurrent: 85,
  averageTri: 742.8,
  areaProficiency: {
    linguagens: 92,
    matematica: 88,
    humanas: 84,
    natureza: 78,
  },
  examHistory: [],
};

export const getStoredStats = (): UserStats => {
  if (typeof window === 'undefined') return DEFAULT_STATS;
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.STATS);
    if (!raw) {
      localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(DEFAULT_STATS));
      return DEFAULT_STATS;
    }
    return JSON.parse(raw);
  } catch (e) {
    console.error('Error reading stats from localStorage', e);
    return DEFAULT_STATS;
  }
};

export const saveStats = (stats: UserStats): void => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(stats));
  } catch (e) {
    console.error('Error saving stats to localStorage', e);
  }
};

export const updateStatsWithExamResult = (result: ExamResult): UserStats => {
  const currentStats = getStoredStats();
  const today = new Date().toISOString().split('T')[0];

  // Calculate streak
  let newStreak = currentStats.streakDays;
  if (currentStats.lastActiveDate !== today) {
    const lastDate = new Date(currentStats.lastActiveDate);
    const currentDate = new Date(today);
    const diffTime = Math.abs(currentDate.getTime() - lastDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) {
      newStreak += 1;
    } else if (diffDays > 1) {
      newStreak = 1;
    }
  }

  const updatedTotalQuestions = currentStats.totalQuestionsAnswered + result.totalQuestions;
  const updatedTotalCorrect = currentStats.totalCorrect + result.correctAnswersCount;
  const updatedWeeklyCurrent = Math.min(
    currentStats.weeklyGoalTarget,
    currentStats.weeklyGoalCurrent + result.totalQuestions
  );

  // Recalculate average TRI
  const previousWeighted = currentStats.averageTri * (currentStats.examHistory.length || 1);
  const updatedAverageTri = Number(
    ((previousWeighted + result.estimatedTri) / (currentStats.examHistory.length + 1)).toFixed(1)
  );

  // Update area proficiencies
  const updatedProficiency = { ...currentStats.areaProficiency };
  Object.entries(result.byArea).forEach(([area, counts]) => {
    if (counts.total > 0) {
      const areaKey = area as keyof typeof updatedProficiency;
      if (updatedProficiency[areaKey] !== undefined) {
        const areaScore = (counts.correct / counts.total) * 100;
        updatedProficiency[areaKey] = Math.round((updatedProficiency[areaKey] + areaScore) / 2);
      }
    }
  });

  const updatedStats: UserStats = {
    ...currentStats,
    streakDays: newStreak,
    lastActiveDate: today,
    totalQuestionsAnswered: updatedTotalQuestions,
    totalCorrect: updatedTotalCorrect,
    weeklyGoalCurrent: updatedWeeklyCurrent,
    averageTri: updatedAverageTri,
    areaProficiency: updatedProficiency,
    examHistory: [result, ...currentStats.examHistory],
  };

  saveStats(updatedStats);
  return updatedStats;
};

export const getStoredInProgressSession = (): ExamSession | null => {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.IN_PROGRESS);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (e) {
    console.error('Error reading in-progress session', e);
    return null;
  }
};

export const saveInProgressSession = (session: ExamSession | null): void => {
  if (typeof window === 'undefined') return;
  try {
    if (session) {
      localStorage.setItem(STORAGE_KEYS.IN_PROGRESS, JSON.stringify(session));
    } else {
      localStorage.removeItem(STORAGE_KEYS.IN_PROGRESS);
    }
  } catch (e) {
    console.error('Error saving in-progress session', e);
  }
};

export const resetAllStudentData = (): UserStats => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(STORAGE_KEYS.STATS);
    localStorage.removeItem(STORAGE_KEYS.HISTORY);
    localStorage.removeItem(STORAGE_KEYS.IN_PROGRESS);
  }
  return DEFAULT_STATS;
};
