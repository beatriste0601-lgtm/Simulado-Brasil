export type KnowledgeArea = 'matematica' | 'linguagens' | 'humanas' | 'natureza' | 'astronomia';

export type EducationCycle = 'fundamental' | 'medio' | 'olimpiada';

export interface QuestionAlternative {
  id: string; // 'A', 'B', 'C', 'D', 'E'
  text: string;
}

export interface Question {
  id: string;
  examId: string;
  number: number;
  subject: string;
  area: KnowledgeArea;
  topic: string;
  bnccCode?: string;
  difficulty: 'Fácil' | 'Médio' | 'Difícil';
  triWeight: number; // For TRI calculation estimation
  statement: string;
  contextText?: string;
  imageUrl?: string;
  imageAlt?: string;
  options: QuestionAlternative[];
  correctAnswer: string; // 'A', 'B', 'C', etc.
  explanation: string;
  videoResolutionUrl?: string;
  keyConcept: string;
}

export interface Exam {
  id: string;
  title: string;
  shortTitle: string;
  category: EducationCycle;
  tag: string;
  tagColor?: 'primary' | 'secondary' | 'tertiary' | 'error';
  badge: string;
  badgeLevel: string;
  subject: string;
  questionsCount: number;
  durationMinutes: number;
  difficulty: 'Básico' | 'Médio' | 'Avançado' | 'Desafio';
  description: string;
  highlight?: boolean;
  accentColor: string; // hex or tailwind class
  questions: Question[];
}

export interface UserAnswer {
  questionId: string;
  selectedOption: string | null;
  isFlagged: boolean;
  timeSpentSeconds: number;
}

export interface ExamSession {
  examId: string;
  examTitle: string;
  startTime: number;
  elapsedSeconds: number;
  isStudyMode: boolean; // instant feedback vs final score
  currentQuestionIndex: number;
  answers: Record<string, UserAnswer>;
  isCompleted: boolean;
}

export interface ExamResult {
  id: string;
  examId: string;
  examTitle: string;
  completedAt: string;
  totalQuestions: number;
  correctAnswersCount: number;
  scorePercentage: number;
  estimatedTri: number;
  elapsedSeconds: number;
  byArea: Record<string, { correct: number; total: number }>;
  userAnswers: Record<string, UserAnswer>;
}

export interface UserStats {
  streakDays: number;
  lastActiveDate: string;
  totalQuestionsAnswered: number;
  totalCorrect: number;
  weeklyGoalTarget: number;
  weeklyGoalCurrent: number;
  averageTri: number;
  areaProficiency: {
    linguagens: number;
    matematica: number;
    humanas: number;
    natureza: number;
  };
  examHistory: ExamResult[];
}
