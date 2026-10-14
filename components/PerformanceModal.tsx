'use client';

import React, { useState } from 'react';
import { UserStats } from '@/types/exam';
import {
  BarChart2,
  X,
  Trash2,
  Flame,
  CheckCircle2,
  Clock,
  Sparkles,
} from 'lucide-react';

interface PerformanceModalProps {
  isOpen: boolean;
  onClose: () => void;
  stats: UserStats;
  onResetData: () => void;
}

export const PerformanceModal: React.FC<PerformanceModalProps> = ({
  isOpen,
  onClose,
  stats,
  onResetData,
}) => {
  const [showConfirmReset, setShowConfirmReset] = useState(false);

  if (!isOpen) return null;

  const overallAccuracy =
    stats.totalQuestionsAnswered > 0
      ? Math.round((stats.totalCorrect / stats.totalQuestionsAnswered) * 100)
      : 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#E3E2E6] space-y-6 animate-scaleUp my-8 max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#EFEDF1]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#D8E2FF] text-[#0058BD] flex items-center justify-center font-bold">
              <BarChart2 className="w-5 h-5 text-[#0058BD]" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#1A1B1E] font-['Plus_Jakarta_Sans']">
                Seu Painel de Desempenho
              </h2>
              <p className="text-xs text-[#727785]">
                Dados persistidos localmente no seu dispositivo (100% privado)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-[#727785] hover:text-[#1A1B1E] hover:bg-[#F4F3F7] transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Top 4 KPI Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-3.5 bg-[#F4F3F7] rounded-2xl border border-[#E3E2E6] text-center">
            <span className="text-2xl font-bold text-[#765700] block font-['Plus_Jakarta_Sans']">
              🔥 {stats.streakDays}
            </span>
            <span className="text-[11px] text-[#727785] font-medium">Dias de Sequência</span>
          </div>

          <div className="p-3.5 bg-[#F4F3F7] rounded-2xl border border-[#E3E2E6] text-center">
            <span className="text-2xl font-bold text-[#0058BD] block font-['Plus_Jakarta_Sans']">
              {stats.totalQuestionsAnswered}
            </span>
            <span className="text-[11px] text-[#727785] font-medium">Questões Resolvidas</span>
          </div>

          <div className="p-3.5 bg-[#F4F3F7] rounded-2xl border border-[#E3E2E6] text-center">
            <span className="text-2xl font-bold text-[#006E2C] block font-['Plus_Jakarta_Sans']">
              {overallAccuracy}%
            </span>
            <span className="text-[11px] text-[#727785] font-medium">Precisão Geral</span>
          </div>

          <div className="p-3.5 bg-[#F4F3F7] rounded-2xl border border-[#E3E2E6] text-center">
            <span className="text-2xl font-bold text-[#0058BD] block font-['Plus_Jakarta_Sans']">
              {stats.averageTri.toFixed(1)}
            </span>
            <span className="text-[11px] text-[#727785] font-medium">Média TRI</span>
          </div>
        </div>

        {/* Performance by Subject */}
        <div>
          <h3 className="text-sm font-bold text-[#1A1B1E] uppercase tracking-wider mb-3 font-mono">
            Domínio por Matéria &amp; Competência
          </h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-[#BA1A1A]">Língua Portuguesa &amp; Redação</span>
                <span>{stats.areaProficiency.linguagens}% de acertos</span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-[#EFEDF1] overflow-hidden">
                <div
                  className="h-full bg-[#BA1A1A] rounded-full transition-all duration-700"
                  style={{ width: `${stats.areaProficiency.linguagens}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-[#0058BD]">Matemática &amp; Geometria</span>
                <span>{stats.areaProficiency.matematica}% de acertos</span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-[#EFEDF1] overflow-hidden">
                <div
                  className="h-full bg-[#0058BD] rounded-full transition-all duration-700"
                  style={{ width: `${stats.areaProficiency.matematica}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-[#765700]">Ciências Humanas (História &amp; Geo)</span>
                <span>{stats.areaProficiency.humanas}% de acertos</span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-[#EFEDF1] overflow-hidden">
                <div
                  className="h-full bg-[#FBBC05] rounded-full transition-all duration-700"
                  style={{ width: `${stats.areaProficiency.humanas}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-[#006E2C]">Ciências da Natureza &amp; Biologia</span>
                <span>{stats.areaProficiency.natureza}% de acertos</span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-[#EFEDF1] overflow-hidden">
                <div
                  className="h-full bg-[#006E2C] rounded-full transition-all duration-700"
                  style={{ width: `${stats.areaProficiency.natureza}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* History of Completed Exams */}
        <div>
          <h3 className="text-sm font-bold text-[#1A1B1E] uppercase tracking-wider mb-3 font-mono">
            Histórico de Simulados Concluídos ({(stats.examHistory || []).length})
          </h3>
          {(stats.examHistory || []).length > 0 ? (
            <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
              {(stats.examHistory || []).map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 rounded-xl bg-[#F4F3F7] text-xs border border-[#E3E2E6]"
                >
                  <div className="flex flex-col">
                    <span className="font-bold text-[#1A1B1E]">{item.examTitle}</span>
                    <span className="text-[#727785]">
                      {new Date(item.completedAt).toLocaleDateString('pt-BR')} · {item.correctAnswersCount}/{item.totalQuestions} questões ({item.scorePercentage}%)
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-[#0058BD] text-sm font-mono block">
                      {item.estimatedTri} TRI
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-6 bg-[#F4F3F7] rounded-2xl text-center text-xs text-[#727785]">
              Você ainda não finalizou nenhum simulado completo. Comece um simulado agora para registrar seu histórico!
            </div>
          )}
        </div>

        {/* Modal Footer & Reset data option */}
        <div className="pt-4 border-t border-[#EFEDF1] flex flex-wrap items-center justify-between gap-3">
          {!showConfirmReset ? (
            <button
              onClick={() => setShowConfirmReset(true)}
              className="text-xs text-[#BA1A1A] hover:underline flex items-center gap-1.5 cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Limpar histórico e reiniciar métricas</span>
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <span className="text-xs text-[#BA1A1A] font-bold">Tem certeza?</span>
              <button
                onClick={() => {
                  onResetData();
                  setShowConfirmReset(false);
                }}
                className="px-2.5 py-1 bg-[#BA1A1A] text-white text-xs font-bold rounded-lg hover:bg-[#93000A] cursor-pointer"
              >
                Sim, Limpar
              </button>
              <button
                onClick={() => setShowConfirmReset(false)}
                className="text-xs text-[#727785] hover:text-[#1A1B1E] cursor-pointer"
              >
                Cancelar
              </button>
            </div>
          )}

          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-[#0058BD] text-white text-xs sm:text-sm font-semibold rounded-xl hover:bg-[#2771DF] transition-colors cursor-pointer"
          >
            Fechar Painel
          </button>
        </div>
      </div>
    </div>
  );
};
