'use client';

import React, { useState } from 'react';
import { Exam, ExamResult } from '@/types/exam';
import {
  ArrowLeft,
  RotateCcw,
  BarChart2,
  CheckCircle2,
  XCircle,
  Home,
  GraduationCap,
  Clock,
  Award,
  Zap,
} from 'lucide-react';

interface ExamResultsProps {
  exam: Exam;
  result: ExamResult;
  onRetakeExam: () => void;
  onBackToHome: () => void;
  onOpenPerformanceModal: () => void;
}

export const ExamResults: React.FC<ExamResultsProps> = ({
  exam,
  result,
  onRetakeExam,
  onBackToHome,
  onOpenPerformanceModal,
}) => {
  const [filter, setFilter] = useState<'all' | 'correct' | 'wrong' | 'flagged'>('all');

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}m ${s}s`;
  };

  const getScoreMessage = () => {
    const pct = result.scorePercentage;
    if (pct >= 80) {
      return {
        title: 'Excelente Desempenho!',
        description: 'Sua coerência pedagógica na TRI foi excelente, com domínio sólido das habilidades da BNCC.',
        badgeClass: 'bg-[#86F898] text-[#005320]',
      };
    } else if (pct >= 60) {
      return {
        title: 'Bom Trabalho! Quase lá.',
        description: 'Você demonstrou boa base. Foque na revisão dos tópicos errados para subir ainda mais a sua nota.',
        badgeClass: 'bg-[#D8E2FF] text-[#001A41]',
      };
    }
    return {
      title: 'Momento de Diagnóstico e Prática',
      description: 'Use a resolução comentada abaixo para entender onde ocorreram os distratores e refaça a prova.',
      badgeClass: 'bg-[#FFDEA0] text-[#5C4300]',
    };
  };

  const scoreMessage = getScoreMessage();

  // Filter questions for the answer key review
  const filteredQuestions = exam.questions.filter((q) => {
    const ans = result.userAnswers[q.id];
    const isCorrect = ans && ans.selectedOption === q.correctAnswer;
    const isFlagged = ans && ans.isFlagged;

    if (filter === 'correct') return isCorrect;
    if (filter === 'wrong') return !isCorrect;
    if (filter === 'flagged') return isFlagged;
    return true;
  });

  return (
    <div className="min-h-screen bg-[#FAF9FD] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header Breadcrumb & Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0058BD] hover:underline mb-1.5 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar ao Início</span>
            </button>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#1A1B1E] font-['Plus_Jakarta_Sans'] leading-tight">
              Relatório de Desempenho &amp; Gabarito
            </h1>
            <p className="text-xs sm:text-sm text-[#727785] leading-normal mt-1">
              {exam.title} · Finalizado em {new Date(result.completedAt).toLocaleDateString('pt-BR')}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={onRetakeExam}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-white border border-[#C2C6D5] rounded-xl text-xs sm:text-sm font-semibold text-[#1A1B1E] hover:bg-[#F4F3F7] shadow-xs transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Refazer Simulado</span>
            </button>
            <button
              type="button"
              onClick={onOpenPerformanceModal}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#0058BD] text-white rounded-xl text-xs sm:text-sm font-semibold hover:bg-[#2771DF] shadow-xs transition-colors cursor-pointer"
            >
              <BarChart2 className="w-4 h-4" />
              <span>Ver Estatísticas Gerais</span>
            </button>
          </div>
        </div>

        {/* Score Overview Card */}
        <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E3E2E6] shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Left Result Message */}
            <div className="md:col-span-7 flex flex-col gap-2">
              <span className={`self-start px-3 py-1 rounded-full text-xs font-bold ${scoreMessage.badgeClass}`}>
                {scoreMessage.title}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#1A1B1E] font-['Plus_Jakarta_Sans'] leading-snug">
                Você acertou {result.correctAnswersCount} de {result.totalQuestions} questões
              </h2>
              <p className="text-xs sm:text-sm text-[#424753] leading-relaxed">
                {scoreMessage.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-3 text-xs sm:text-sm font-semibold text-[#424753]">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#0058BD]" />
                  <span>Tempo gasto: <strong>{formatTime(result.elapsedSeconds)}</strong></span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-[#765700]" />
                  <span>Taxa de Acerto: <strong>{result.scorePercentage}%</strong></span>
                </div>
              </div>
            </div>

            {/* Right TRI Gauge Card */}
            <div className="md:col-span-5 flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-br from-[#D8E2FF]/40 to-[#FAF9FD] border border-[#0058BD]/20 text-center">
              <span className="text-xs font-bold text-[#0058BD] uppercase tracking-wider font-mono">
                Pontuação Estimada TRI
              </span>
              <div className="text-4xl sm:text-5xl font-extrabold text-[#0058BD] font-['Plus_Jakarta_Sans'] my-2">
                {result.estimatedTri}
              </div>
              <span className="text-xs text-[#727785] max-w-xs leading-normal">
                Escala calibrada entre 200 e 1000 pontos com base nos parâmetros oficiais do INEP/MEC.
              </span>
            </div>
          </div>
        </div>

        {/* Section: Answer Key (Gabarito Comentado) */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-[#E3E2E6]">
            <div>
              <h2 className="text-xl font-bold text-[#1A1B1E] font-['Plus_Jakarta_Sans'] leading-tight">
                Gabarito Comentado &amp; Justificativas
              </h2>
              <p className="text-xs text-[#727785] leading-normal mt-0.5">
                Revise cada alternativa e entenda as explicações pedagógicas
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex items-center gap-1 p-1 bg-[#F4F3F7] rounded-xl border border-[#E3E2E6] shrink-0 self-start sm:self-auto">
              <button
                onClick={() => setFilter('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  filter === 'all'
                    ? 'bg-white text-[#0058BD] shadow-2xs'
                    : 'text-[#424753] hover:text-[#1A1B1E]'
                }`}
              >
                Todas ({exam.questions.length})
              </button>
              <button
                onClick={() => setFilter('correct')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  filter === 'correct'
                    ? 'bg-white text-[#006E2C] shadow-2xs'
                    : 'text-[#424753] hover:text-[#006E2C]'
                }`}
              >
                Acertos ({result.correctAnswersCount})
              </button>
              <button
                onClick={() => setFilter('wrong')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  filter === 'wrong'
                    ? 'bg-white text-[#BA1A1A] shadow-2xs'
                    : 'text-[#424753] hover:text-[#BA1A1A]'
                }`}
              >
                Erros ({result.totalQuestions - result.correctAnswersCount})
              </button>
            </div>
          </div>

          {/* Questions review accordion / list */}
          <div className="space-y-4">
            {filteredQuestions.map((question) => {
              const ans = result.userAnswers[question.id];
              const isCorrect = ans?.selectedOption === question.correctAnswer;
              const hasAnswered = ans && ans.selectedOption !== null;

              return (
                <div
                  key={question.id}
                  className={`p-6 rounded-2xl bg-white border transition-all ${
                    isCorrect
                      ? 'border-[#86F898] shadow-2xs'
                      : 'border-[#FFDAD6] shadow-2xs'
                  }`}
                >
                  {/* Question Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#EFEDF1]">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-[#1A1B1E]">
                        Questão {question.number}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-[#D8E2FF] text-[#004494]">
                        {question.subject}
                      </span>
                      <span className="text-xs text-[#727785]">
                        · {question.topic}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {isCorrect ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#86F898]/40 text-[#005320] text-xs font-bold border border-[#006E2C]/20">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#006E2C]" />
                          <span>Acertou</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#FFDAD6] text-[#93000A] text-xs font-bold border border-[#BA1A1A]/20">
                          <XCircle className="w-3.5 h-3.5 text-[#BA1A1A]" />
                          <span>{hasAnswered ? 'Errou' : 'Em Branco'}</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Context statement */}
                  {question.contextText && (
                    <div className="my-3 p-3 rounded-xl bg-[#F4F3F7] text-xs text-[#424753] italic leading-relaxed">
                      &ldquo;{question.contextText}&rdquo;
                    </div>
                  )}

                  <p className="text-sm sm:text-base font-medium text-[#1A1B1E] pt-2 pb-3 leading-relaxed">
                    {question.statement}
                  </p>

                  {/* Alternatives Summary */}
                  <div className="space-y-2 py-2">
                    {question.options.map((opt) => {
                      const isUserChoice = ans?.selectedOption === opt.id;
                      const isRightOption = question.correctAnswer === opt.id;

                      let optClass = 'bg-[#F4F3F7] text-[#424753] border-transparent';
                      if (isRightOption) {
                        optClass = 'bg-[#86F898]/30 border-[#006E2C] text-[#005320] font-semibold';
                      } else if (isUserChoice && !isRightOption) {
                        optClass = 'bg-[#FFDAD6]/40 border-[#BA1A1A] text-[#93000A] font-semibold';
                      }

                      return (
                        <div
                          key={opt.id}
                          className={`p-3 rounded-xl border text-xs sm:text-sm flex items-start justify-between gap-3 ${optClass}`}
                        >
                          <div className="flex items-start gap-2.5 min-w-0 pr-2">
                            <span
                              className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                                isRightOption
                                  ? 'bg-[#006E2C] text-white'
                                  : isUserChoice
                                  ? 'bg-[#BA1A1A] text-white'
                                  : 'bg-[#E3E2E6] text-[#1A1B1E]'
                              }`}
                            >
                              {opt.id}
                            </span>
                            <span className="pt-0.5 leading-relaxed break-words">{opt.text}</span>
                          </div>
                          {isRightOption && (
                            <span className="text-xs font-bold text-[#006E2C] shrink-0 mt-0.5 whitespace-nowrap">
                              (Gabarito Correto)
                            </span>
                          )}
                          {isUserChoice && !isRightOption && (
                            <span className="text-xs font-bold text-[#BA1A1A] shrink-0 mt-0.5 whitespace-nowrap">
                              (Sua Escolha)
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Explanation Resolution Box */}
                  <div className="mt-4 p-4 rounded-xl bg-[#F4F3F7] border border-[#E3E2E6] text-xs sm:text-sm space-y-2">
                    <div className="flex items-center gap-1.5 font-bold text-[#0058BD]">
                      <GraduationCap className="w-4 h-4 text-[#0058BD]" />
                      <span>Resolução e Comentário Pedagógico</span>
                    </div>
                    <p className="text-[#1A1B1E] leading-relaxed">
                      {question.explanation}
                    </p>
                    <div className="pt-1 text-[11px] text-[#727785]">
                      <span className="font-bold text-[#424753]">Conceito-Chave:</span> {question.keyConcept}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Navigation CTAs */}
        <div className="pt-6 border-t border-[#E3E2E6] flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0058BD] text-white font-semibold text-sm rounded-xl hover:bg-[#2771DF] transition-colors shadow-xs cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>Explorar Outros Simulados</span>
          </button>
          <button
            onClick={onRetakeExam}
            className="inline-flex items-center gap-2 px-5 py-3 bg-white border border-[#C2C6D5] text-[#1A1B1E] font-semibold text-sm rounded-xl hover:bg-[#F4F3F7] transition-colors shadow-xs cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Refazer Este Simulado</span>
          </button>
        </div>
      </div>
    </div>
  );
};
