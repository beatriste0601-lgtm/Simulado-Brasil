'use client';

import React, { useState, useEffect } from 'react';
import { Exam, ExamSession, UserAnswer } from '@/types/exam';
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Play,
  Pause,
  LogOut,
  Bookmark,
  CheckCircle2,
  XCircle,
  CircleDot,
  Circle,
  AlertTriangle,
  CheckCheck,
  RotateCcw,
} from 'lucide-react';

interface ExamRunnerProps {
  exam: Exam;
  initialSession?: ExamSession | null;
  onFinishExam: (session: ExamSession) => void;
  onExitExam: (session: ExamSession, saveProgress: boolean) => void;
}

export const ExamRunner: React.FC<ExamRunnerProps> = ({
  exam,
  initialSession,
  onFinishExam,
  onExitExam,
}) => {
  // State initialization
  const [currentIndex, setCurrentIndex] = useState(
    initialSession ? initialSession.currentQuestionIndex : 0
  );
  const [isStudyMode, setIsStudyMode] = useState(
    initialSession ? initialSession.isStudyMode : false
  );
  const [answers, setAnswers] = useState<Record<string, UserAnswer>>(
    initialSession?.answers || {}
  );
  const [elapsedSeconds, setElapsedSeconds] = useState(
    initialSession ? initialSession.elapsedSeconds : 0
  );
  const [isTimerPaused, setIsTimerPaused] = useState(false);
  const [showExitModal, setShowExitModal] = useState(false);
  const [showFinishModal, setShowFinishModal] = useState(false);

  const currentQuestion = exam.questions[currentIndex];
  const currentAnswer = answers[currentQuestion.id] || {
    questionId: currentQuestion.id,
    selectedOption: null,
    isFlagged: false,
    timeSpentSeconds: 0,
  };

  // Timer tick
  useEffect(() => {
    if (isTimerPaused) return;
    const interval = setInterval(() => {
      setElapsedSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isTimerPaused]);

  // Selection handler
  const handleSelectOption = React.useCallback(
    (optionId: string) => {
      setAnswers((prev) => ({
        ...prev,
        [currentQuestion.id]: {
          questionId: currentQuestion.id,
          selectedOption: optionId,
          isFlagged: prev[currentQuestion.id]?.isFlagged || false,
          timeSpentSeconds: (prev[currentQuestion.id]?.timeSpentSeconds || 0) + 1,
        },
      }));
    },
    [currentQuestion.id]
  );

  // Keyboard shortcut listener: numbers 1-5 or letters A-E
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if typing in an input
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      const key = e.key.toUpperCase();
      const optionMap: Record<string, string> = {
        '1': 'A',
        '2': 'B',
        '3': 'C',
        '4': 'D',
        '5': 'E',
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D',
        E: 'E',
      };

      if (optionMap[key]) {
        const optionExists = currentQuestion.options.some(
          (o) => o.id === optionMap[key]
        );
        if (optionExists) {
          e.preventDefault();
          handleSelectOption(optionMap[key]);
        }
      }

      if (e.key === 'ArrowRight' && currentIndex < exam.questions.length - 1) {
        e.preventDefault();
        setCurrentIndex((i) => i + 1);
      }
      if (e.key === 'ArrowLeft' && currentIndex > 0) {
        e.preventDefault();
        setCurrentIndex((i) => i - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, exam.questions.length, currentQuestion.options, handleSelectOption]);

  const handleToggleFlag = () => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: {
        questionId: currentQuestion.id,
        selectedOption: currentAnswer.selectedOption,
        isFlagged: !currentAnswer.isFlagged,
        timeSpentSeconds: currentAnswer.timeSpentSeconds,
      },
    }));
  };

  const formatTime = (totalSecs: number) => {
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const totalAnswered = Object.values(answers).filter(
    (a) => a.selectedOption !== null
  ).length;

  const unansweredCount = exam.questions.length - totalAnswered;

  const getSessionSnapshot = (isCompleted: boolean): ExamSession => ({
    examId: exam.id,
    examTitle: exam.title,
    currentQuestionIndex: currentIndex,
    answers,
    startTime: initialSession ? initialSession.startTime : Date.now(),
    elapsedSeconds,
    isCompleted,
    isStudyMode,
  });

  return (
    <div className="min-h-screen bg-[#FAF9FD] flex flex-col">
      {/* Top Runner Navigation Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E3E2E6] shadow-xs px-4 sm:px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Left: Exam title & Question counter */}
          <div className="flex items-center gap-3 min-w-0">
            <button
              onClick={() => setShowExitModal(true)}
              className="p-2 rounded-xl hover:bg-[#F4F3F7] text-[#424753] hover:text-[#1A1B1E] transition-colors shrink-0 cursor-pointer"
              title="Voltar / Pausar simulado"
              aria-label="Voltar"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex flex-col min-w-0">
              <h2 className="text-sm sm:text-base font-bold text-[#1A1B1E] truncate font-['Plus_Jakarta_Sans'] leading-tight">
                {exam.shortTitle}
              </h2>
              <span className="text-xs text-[#0058BD] font-semibold leading-normal mt-0.5">
                Questão {currentIndex + 1} de {exam.questions.length}
              </span>
            </div>
          </div>

          {/* Center: Timer & Mode Switch */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            {/* Study Mode Toggle */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-[#F4F3F7] rounded-xl border border-[#E3E2E6]">
              <span className="text-xs text-[#424753] font-medium">Gabarito Imediato</span>
              <button
                type="button"
                onClick={() => setIsStudyMode(!isStudyMode)}
                className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out focus:outline-none ${
                  isStudyMode ? 'bg-[#0058BD]' : 'bg-[#C2C6D5]'
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out mt-0.5 ml-0.5 ${
                    isStudyMode ? 'translate-x-4' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            {/* Cronômetro */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F4F3F7] border border-[#E3E2E6] text-xs sm:text-sm font-bold text-[#1A1B1E]">
              <Clock className="w-4 h-4 text-[#0058BD]" />
              <span className="font-mono">{formatTime(elapsedSeconds)}</span>
              <button
                type="button"
                onClick={() => setIsTimerPaused(!isTimerPaused)}
                className="ml-1 text-[#727785] hover:text-[#1A1B1E] focus:outline-none cursor-pointer"
                title={isTimerPaused ? 'Retomar cronômetro' : 'Pausar cronômetro'}
              >
                {isTimerPaused ? (
                  <Play className="w-3.5 h-3.5 text-[#006E2C] fill-[#006E2C]" />
                ) : (
                  <Pause className="w-3.5 h-3.5 text-[#727785]" />
                )}
              </button>
            </div>

            {/* Exit button */}
            <button
              onClick={() => setShowExitModal(true)}
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-[#BA1A1A] hover:bg-[#FFDAD6]/40 transition-colors cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
              <span>Sair da Prova</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Runner Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Question Resolution Stage (Left 8 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-5">
            {/* Card Container */}
            <div className="bg-white rounded-2xl border border-[#E3E2E6] shadow-sm p-6 sm:p-8">
              {/* Question metadata strip */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#EFEDF1]">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-[#D8E2FF] text-[#004494] text-xs font-bold">
                    {currentQuestion.subject}
                  </span>
                  <span className="text-xs text-[#727785] font-medium">
                    {currentQuestion.topic}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {currentQuestion.bnccCode && (
                    <span className="text-[11px] font-mono bg-[#F4F3F7] px-2 py-0.5 rounded text-[#424753] border border-[#E3E2E6]">
                      {currentQuestion.bnccCode}
                    </span>
                  )}
                  <button
                    onClick={handleToggleFlag}
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                      currentAnswer.isFlagged
                        ? 'bg-[#FFDEA0] text-[#5C4300]'
                        : 'bg-[#F4F3F7] text-[#727785] hover:text-[#1A1B1E]'
                    }`}
                  >
                    <Bookmark
                      className={`w-3.5 h-3.5 ${
                        currentAnswer.isFlagged ? 'fill-[#5C4300]' : ''
                      }`}
                    />
                    <span>{currentAnswer.isFlagged ? 'Marcada' : 'Revisar'}</span>
                  </button>
                </div>
              </div>

              {/* Context text if present (e.g. quote, excerpt) */}
              {currentQuestion.contextText && (
                <div className="my-4 p-4 rounded-xl bg-[#F4F3F7] border-l-4 border-[#0058BD] text-xs sm:text-sm text-[#424753] leading-relaxed italic">
                  &ldquo;{currentQuestion.contextText}&rdquo;
                </div>
              )}

              {/* Question Statement */}
              <h3 className="text-base sm:text-lg font-semibold text-[#1A1B1E] pt-3 pb-4 leading-relaxed font-['Plus_Jakarta_Sans']">
                {currentQuestion.statement}
              </h3>

              {/* Radio Alternatives Options List */}
              <div className="flex flex-col gap-3">
                {currentQuestion.options.map((option) => {
                  const isSelected = currentAnswer.selectedOption === option.id;
                  const isCorrect = option.id === currentQuestion.correctAnswer;

                  let containerStyles =
                    'bg-[#FAF9FD] hover:bg-[#F4F3F7] border-[#E3E2E6] text-[#1A1B1E]';
                  let badgeStyles = 'bg-[#EFEDF1] text-[#1A1B1E]';

                  if (isStudyMode && currentAnswer.selectedOption !== null) {
                    if (isCorrect) {
                      containerStyles =
                        'bg-[#86F898]/20 border-[#006E2C] text-[#005320] shadow-xs';
                      badgeStyles = 'bg-[#006E2C] text-white';
                    } else if (isSelected && !isCorrect) {
                      containerStyles =
                        'bg-[#FFDAD6]/30 border-[#BA1A1A] text-[#93000A] shadow-xs';
                      badgeStyles = 'bg-[#BA1A1A] text-white';
                    }
                  } else if (isSelected) {
                    containerStyles =
                      'bg-[#D8E2FF]/40 border-[#0058BD] text-[#001A41] shadow-xs ring-1 ring-[#0058BD]/20';
                    badgeStyles = 'bg-[#0058BD] text-white';
                  }

                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => handleSelectOption(option.id)}
                      className={`flex items-start justify-between p-3.5 sm:p-4 rounded-2xl border-2 transition-all cursor-pointer text-left ${containerStyles}`}
                    >
                      <div className="flex items-start gap-3 min-w-0 pr-2">
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 transition-colors ${badgeStyles}`}
                        >
                          {option.id}
                        </div>
                        <span className="text-xs sm:text-sm leading-relaxed pt-0.5 break-words">
                          {option.text}
                        </span>
                      </div>

                      {/* Icon state */}
                      <div className="shrink-0 ml-2 mt-1">
                        {isStudyMode && currentAnswer.selectedOption !== null ? (
                          isCorrect ? (
                            <CheckCircle2 className="w-5 h-5 text-[#006E2C]" />
                          ) : isSelected ? (
                            <XCircle className="w-5 h-5 text-[#BA1A1A]" />
                          ) : null
                        ) : isSelected ? (
                          <CircleDot className="w-5 h-5 text-[#0058BD]" />
                        ) : (
                          <Circle className="w-5 h-5 text-[#C2C6D5]" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Study Mode Instant Feedback Box */}
              {isStudyMode && currentAnswer.selectedOption !== null && (
                <div
                  className={`mt-6 p-4 rounded-2xl border text-xs sm:text-sm space-y-2 ${
                    currentAnswer.selectedOption === currentQuestion.correctAnswer
                      ? 'bg-[#86F898]/20 border-[#006E2C]/30 text-[#005320]'
                      : 'bg-[#FFDAD6]/30 border-[#BA1A1A]/30 text-[#93000A]'
                  }`}
                >
                  <div className="flex items-center gap-2 font-bold text-sm">
                    {currentAnswer.selectedOption === currentQuestion.correctAnswer ? (
                      <CheckCircle2 className="w-5 h-5 text-[#006E2C]" />
                    ) : (
                      <XCircle className="w-5 h-5 text-[#BA1A1A]" />
                    )}
                    <span>
                      {currentAnswer.selectedOption === currentQuestion.correctAnswer
                        ? 'Você acertou! Alternativa ' + currentQuestion.correctAnswer
                        : `Incorreto. A resposta correta é a letra ${currentQuestion.correctAnswer}.`}
                    </span>
                  </div>
                  <p className="text-[#1A1B1E] leading-relaxed">
                    <strong>Explicação:</strong> {currentQuestion.explanation}
                  </p>
                  <div className="pt-1 text-[11px] text-[#424753] font-semibold">
                    💡 Conceito-chave: {currentQuestion.keyConcept}
                  </div>
                </div>
              )}

              {/* Bottom Question Controls */}
              <div className="mt-8 pt-5 border-t border-[#EFEDF1] flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  disabled={currentIndex === 0}
                  onClick={() => setCurrentIndex((i) => i - 1)}
                  className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                    currentIndex === 0
                      ? 'bg-[#F4F3F7] text-[#C2C6D5] cursor-not-allowed'
                      : 'bg-[#F4F3F7] text-[#1A1B1E] hover:bg-[#EFEDF1]'
                  }`}
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Anterior</span>
                </button>

                <div className="flex items-center gap-2">
                  {currentIndex < exam.questions.length - 1 ? (
                    <button
                      type="button"
                      onClick={() => setCurrentIndex((i) => i + 1)}
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#0058BD] text-white text-xs sm:text-sm font-semibold hover:bg-[#2771DF] shadow-xs transition-colors cursor-pointer"
                    >
                      <span>Próxima</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setShowFinishModal(true)}
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#006E2C] text-white text-xs sm:text-sm font-semibold hover:bg-[#005320] shadow-sm transition-colors cursor-pointer"
                    >
                      <span>Finalizar Simulado</span>
                      <CheckCheck className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Palette / Navigator (Right 4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="bg-white rounded-2xl border border-[#E3E2E6] shadow-xs p-5">
              <div className="flex items-center justify-between pb-3 border-b border-[#EFEDF1]">
                <h3 className="text-sm font-bold text-[#1A1B1E] font-['Plus_Jakarta_Sans']">
                  Mapa de Questões
                </h3>
                <span className="text-xs font-semibold text-[#0058BD]">
                  {totalAnswered}/{exam.questions.length} Respondidas
                </span>
              </div>

              {/* Question button tiles */}
              <div className="grid grid-cols-5 gap-2 pt-4">
                {exam.questions.map((q, idx) => {
                  const ans = answers[q.id];
                  const hasAnswered = ans && ans.selectedOption !== null;
                  const isCurrent = idx === currentIndex;
                  const isFlagged = ans && ans.isFlagged;

                  let tileStyle =
                    'bg-[#F4F3F7] text-[#424753] hover:bg-[#EFEDF1] border-transparent';

                  if (hasAnswered) {
                    tileStyle =
                      'bg-[#D8E2FF] text-[#004494] font-bold border-[#0058BD]/30';
                  }

                  if (isCurrent) {
                    tileStyle =
                      'ring-2 ring-[#0058BD] bg-white text-[#0058BD] font-bold border-[#0058BD] shadow-xs';
                  }

                  return (
                    <button
                      key={q.id}
                      type="button"
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-10 rounded-xl text-xs flex items-center justify-center relative border transition-all cursor-pointer ${tileStyle}`}
                      title={`Questão ${idx + 1}`}
                    >
                      <span>{idx + 1}</span>
                      {isFlagged && (
                        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#FBBC05] rounded-full border border-white" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Legend */}
              <div className="mt-5 pt-3 border-t border-[#EFEDF1] flex flex-wrap items-center gap-3 text-[11px] text-[#727785]">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#D8E2FF] border border-[#0058BD]/30" />
                  <span>Respondida</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#F4F3F7] border border-[#E3E2E6]" />
                  <span>Pendente</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#FBBC05]" />
                  <span>Revisar</span>
                </div>
              </div>

              {/* Finish Exam Button in Sidebar */}
              <div className="mt-5 pt-3">
                <button
                  type="button"
                  onClick={() => setShowFinishModal(true)}
                  className="w-full py-3 bg-[#006E2C] text-white rounded-xl text-xs sm:text-sm font-semibold hover:bg-[#005320] transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                >
                  <CheckCheck className="w-4 h-4" />
                  <span>Entregar e Ver Gabarito</span>
                </button>
              </div>
            </div>

            {/* Keyboard shortcut hint */}
            <div className="p-4 rounded-xl bg-white border border-[#E3E2E6] text-[11px] text-[#727785] space-y-1">
              <span className="font-bold text-[#1A1B1E] block">Dica de Prática:</span>
              <p>Pressione as teclas <strong>A</strong>, <strong>B</strong>, <strong>C</strong>, <strong>D</strong> ou <strong>1-5</strong> para marcar opções rapidamente. Use <strong>←</strong> e <strong>→</strong> para navegar.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Exit Confirmation Modal */}
      {showExitModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-[#E3E2E6] space-y-4">
            <div className="flex items-center gap-3 text-[#BA1A1A]">
              <AlertTriangle className="w-6 h-6 text-[#BA1A1A] shrink-0" />
              <h3 className="text-lg font-bold font-['Plus_Jakarta_Sans']">
                Pausar ou Sair do Simulado?
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#424753] leading-relaxed">
              Você respondeu <strong>{totalAnswered}</strong> de <strong>{exam.questions.length}</strong> questões. Deseja salvar o seu progresso no navegador para continuar mais tarde ou abandonar a tentativa?
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-2 pt-2">
              <button
                type="button"
                onClick={() => {
                  setShowExitModal(false);
                  onExitExam(getSessionSnapshot(false), true);
                }}
                className="w-full sm:w-auto flex-1 py-2.5 px-4 bg-[#0058BD] text-white text-xs sm:text-sm font-semibold rounded-xl hover:bg-[#2771DF] transition-colors cursor-pointer"
              >
                Salvar e Continuar Depois
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowExitModal(false);
                  onExitExam(getSessionSnapshot(false), false);
                }}
                className="w-full sm:w-auto py-2.5 px-4 bg-[#FFDAD6] text-[#93000A] text-xs sm:text-sm font-semibold rounded-xl hover:bg-[#FFDAD6]/70 transition-colors cursor-pointer"
              >
                Descartar
              </button>
              <button
                type="button"
                onClick={() => setShowExitModal(false)}
                className="w-full sm:w-auto py-2.5 px-3 text-[#727785] hover:text-[#1A1B1E] text-xs font-semibold cursor-pointer"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Finish Confirmation Modal */}
      {showFinishModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-[#E3E2E6] space-y-4">
            <div className="flex items-center gap-3 text-[#006E2C]">
              <CheckCircle2 className="w-6 h-6 text-[#006E2C] shrink-0" />
              <h3 className="text-lg font-bold text-[#1A1B1E] font-['Plus_Jakarta_Sans']">
                Finalizar Simulado?
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#424753] leading-relaxed">
              Você respondeu <strong>{totalAnswered}</strong> de <strong>{exam.questions.length}</strong> questões.
              {unansweredCount > 0 ? (
                <span className="text-[#BA1A1A] block font-semibold mt-1">
                  Atenção: ainda restam {unansweredCount} questão(ões) em branco!
                </span>
              ) : (
                <span className="text-[#006E2C] block font-semibold mt-1">
                  Parabéns! Todas as questões foram respondidas.
                </span>
              )}
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-2 pt-2">
              <button
                type="button"
                onClick={() => {
                  setShowFinishModal(false);
                  onFinishExam(getSessionSnapshot(true));
                }}
                className="w-full sm:w-auto flex-1 py-2.5 px-4 bg-[#006E2C] text-white text-xs sm:text-sm font-semibold rounded-xl hover:bg-[#005320] transition-colors cursor-pointer"
              >
                Confirmar e Ver Gabarito
              </button>
              <button
                type="button"
                onClick={() => setShowFinishModal(false)}
                className="w-full sm:w-auto py-2.5 px-4 bg-[#F4F3F7] text-[#424753] text-xs sm:text-sm font-semibold rounded-xl hover:bg-[#EFEDF1] transition-colors cursor-pointer"
              >
                Continuar Resolvendo
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
