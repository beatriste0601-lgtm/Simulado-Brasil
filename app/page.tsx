'use client';

import React, { useState, useEffect } from 'react';
import { MOCK_EXAMS } from '@/lib/mockExams';
import {
  getStoredStats,
  updateStatsWithExamResult,
  getStoredInProgressSession,
  saveInProgressSession,
  resetAllStudentData,
} from '@/lib/storage';
import {
  Exam,
  ExamResult,
  ExamSession,
  EducationCycle,
  UserStats,
} from '@/types/exam';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { SpecificSubjectExamHub } from '@/components/SpecificSubjectExamHub';
import { CategoryTabs } from '@/components/CategoryTabs';
import { ExamGrid } from '@/components/ExamGrid';
import { StudentRhythmSection } from '@/components/StudentRhythmSection';
import { MethodologySection } from '@/components/MethodologySection';
import { TestimonialSection } from '@/components/TestimonialSection';
import { ExamRunner } from '@/components/ExamRunner';
import { ExamResults } from '@/components/ExamResults';
import { PerformanceModal } from '@/components/PerformanceModal';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  const [view, setView] = useState<'home' | 'exam' | 'results'>('home');
  const [activeExam, setActiveExam] = useState<Exam | null>(null);
  const [activeSession, setActiveSession] = useState<ExamSession | null>(null);
  const [latestResult, setLatestResult] = useState<ExamResult | null>(null);

  // Filter and search state
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | EducationCycle>('all');
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedQuestionCount, setSelectedQuestionCount] = useState<number | null>(null);

  // Student stats & persistence state with lazy initializers
  const [userStats, setUserStats] = useState<UserStats>(() => getStoredStats());
  const [hasInProgress, setHasInProgress] = useState<boolean>(() => !!getStoredInProgressSession());
  const [isPerformanceModalOpen, setIsPerformanceModalOpen] = useState(false);

  // Scroll to top whenever view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view]);

  // Handler: Start a new or chosen exam
  const handleStartExam = (examId: string) => {
    const found = MOCK_EXAMS.find((e) => e.id === examId) || MOCK_EXAMS[0];
    const saved = getStoredInProgressSession();

    if (saved && saved.examId === examId && !saved.isCompleted) {
      setActiveSession(saved);
    } else {
      setActiveSession(null);
    }

    setActiveExam(found);
    setView('exam');
  };

  // Handler: Resume saved exam
  const handleResumeExam = () => {
    const saved = getStoredInProgressSession();
    if (!saved) return;
    const found = MOCK_EXAMS.find((e) => e.id === saved.examId) || MOCK_EXAMS[0];
    setActiveExam(found);
    setActiveSession(saved);
    setView('exam');
  };

  // Handler: Finish exam and generate detailed result & TRI calculation
  const handleFinishExam = (session: ExamSession) => {
    if (!activeExam) return;

    let correctCount = 0;
    const byArea: Record<string, { correct: number; total: number }> = {};

    activeExam.questions.forEach((q) => {
      const ans = session.answers[q.id];
      const isCorrect = ans && ans.selectedOption === q.correctAnswer;
      if (isCorrect) correctCount++;

      if (!byArea[q.area]) {
        byArea[q.area] = { correct: 0, total: 0 };
      }
      byArea[q.area].total += 1;
      if (isCorrect) {
        byArea[q.area].correct += 1;
      }
    });

    const totalQuestions = activeExam.questions.length;
    const scorePercentage = Math.round((correctCount / totalQuestions) * 100);

    // TRI score estimation formula: Base 350 + (scorePercentage * 5.2) + consistency bonus
    const consistencyBonus = correctCount >= Math.floor(totalQuestions * 0.6) ? 35 : 10;
    const estimatedTri = Math.min(
      985,
      Math.max(340, Math.round(350 + scorePercentage * 5.2 + consistencyBonus))
    );

    const result: ExamResult = {
      id: 'result_' + Date.now(),
      examId: activeExam.id,
      examTitle: activeExam.title,
      completedAt: new Date().toISOString(),
      totalQuestions,
      correctAnswersCount: correctCount,
      scorePercentage,
      estimatedTri,
      elapsedSeconds: session.elapsedSeconds,
      byArea,
      userAnswers: session.answers,
    };

    // Save and update stats
    saveInProgressSession(null);
    setHasInProgress(false);
    const updatedStats = updateStatsWithExamResult(result);
    setUserStats(updatedStats);

    setLatestResult(result);
    setView('results');
  };

  // Handler: Exit exam
  const handleExitExam = (session: ExamSession, saveProgress: boolean) => {
    if (saveProgress) {
      saveInProgressSession(session);
      setHasInProgress(true);
    } else {
      saveInProgressSession(null);
      setHasInProgress(false);
    }
    setActiveExam(null);
    setActiveSession(null);
    setView('home');
  };

  // Handler: Retake current exam
  const handleRetakeExam = () => {
    if (!activeExam) return;
    setActiveSession(null);
    setView('exam');
  };

  // Handler: Reset student data
  const handleResetData = () => {
    const defaults = resetAllStudentData();
    setUserStats(defaults);
    setHasInProgress(false);
  };

  return (
    <div className="min-h-screen bg-[#FAF9FD] text-[#1A1B1E] flex flex-col font-sans">
      {/* Home View */}
      {view === 'home' && (
        <>
          <Header
            onSearchChange={setSearchQuery}
            searchQuery={searchQuery}
            onOpenPerformance={() => setIsPerformanceModalOpen(true)}
            streakDays={userStats.streakDays}
            hasInProgress={hasInProgress}
            onResumeExam={handleResumeExam}
            onNavigateHome={() => setView('home')}
          />

          <main className="w-full pt-16 sm:pt-20 flex-1">
            {/* Hero Section */}
            <HeroSection
              onStartExam={handleStartExam}
              onExploreSubjects={() => {
                const el = document.getElementById('materias-exclusivas-section');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
              {/* Central de Provas por Matéria Específica (Individual: Português, Matemática, História, Geografia, Biologia, Física, Química, Inglês) */}
              <SpecificSubjectExamHub
                onStartExam={handleStartExam}
                onFilterSubjectGrid={(sub) => {
                  setSelectedSubject(sub);
                  const el = document.getElementById('simulados-grid');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
              />

              {/* Quick Segment Selector & Subject Navigation (Includes 5, 10, 20 questions filter) */}
              <CategoryTabs
                activeCategory={activeCategory}
                onSelectCategory={setActiveCategory}
                selectedSubject={selectedSubject}
                onSelectSubject={setSelectedSubject}
                selectedQuestionCount={selectedQuestionCount}
                onSelectQuestionCount={setSelectedQuestionCount}
              />

              {/* Featured Exam Cards Grid */}
              <ExamGrid
                exams={MOCK_EXAMS}
                onStartExam={handleStartExam}
                activeCategory={activeCategory}
                selectedSubject={selectedSubject}
                selectedQuestionCount={selectedQuestionCount}
                searchQuery={searchQuery}
                onClearFilters={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                  setSelectedSubject(null);
                  setSelectedQuestionCount(null);
                }}
              />

              {/* Gamification & Study Rhythm section */}
              <StudentRhythmSection
                stats={userStats}
                onPracticeRecommendation={() => handleStartExam('portugues-especial-10q')}
                onOpenPerformanceModal={() => setIsPerformanceModalOpen(true)}
              />

              {/* Methodology & Pedagogical Quality */}
              <MethodologySection />

              {/* Testimonial & Zero-barrier Callout */}
              <TestimonialSection
                onStartExam={() => handleStartExam('portugues-especial-10q')}
              />
            </div>
          </main>

          <Footer
            onSelectCategory={(cat) => {
              setActiveCategory(cat);
              const el = document.getElementById('simulados-grid');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            onOpenPerformance={() => setIsPerformanceModalOpen(true)}
          />
        </>
      )}

      {/* Exam Runner View (Isolated, Clean, No Overlapping Global Header) */}
      {view === 'exam' && activeExam && (
        <main className="flex-1 w-full">
          <ExamRunner
            exam={activeExam}
            initialSession={activeSession}
            onFinishExam={handleFinishExam}
            onExitExam={handleExitExam}
          />
        </main>
      )}

      {/* Results View */}
      {view === 'results' && activeExam && latestResult && (
        <main className="flex-1 w-full">
          <ExamResults
            exam={activeExam}
            result={latestResult}
            onRetakeExam={handleRetakeExam}
            onBackToHome={() => setView('home')}
            onOpenPerformanceModal={() => setIsPerformanceModalOpen(true)}
          />
        </main>
      )}

      {/* Global Performance Modal */}
      <PerformanceModal
        isOpen={isPerformanceModalOpen}
        onClose={() => setIsPerformanceModalOpen(false)}
        stats={userStats}
        onResetData={handleResetData}
      />
    </div>
  );
}
