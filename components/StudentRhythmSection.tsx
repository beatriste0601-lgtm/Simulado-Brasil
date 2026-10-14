'use client';

import React from 'react';
import { UserStats } from '@/types/exam';
import {
  Flame,
  Medal,
  ArrowUp,
  CheckCircle2,
  Zap,
  Award,
  ExternalLink,
  Lightbulb,
  ArrowRight,
} from 'lucide-react';

interface StudentRhythmSectionProps {
  stats: UserStats;
  onPracticeRecommendation: () => void;
  onOpenPerformanceModal: () => void;
}

export const StudentRhythmSection: React.FC<StudentRhythmSectionProps> = ({
  stats,
  onPracticeRecommendation,
  onOpenPerformanceModal,
}) => {
  const weeklyPercentage = Math.min(
    100,
    Math.round((stats.weeklyGoalCurrent / stats.weeklyGoalTarget) * 100)
  );

  return (
    <section className="py-6 sm:py-8" id="desempenho">
      <div className="p-5 sm:p-8 bg-white rounded-3xl border border-[#E3E2E6] shadow-sm relative overflow-hidden">
        {/* Decorative backdrop glow */}
        <div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-[#D8E2FF]/30 pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">
          {/* Left Side: Daily Streak & Weekly Goal */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-[#FFDEA0] text-[#765700] flex items-center justify-center shrink-0">
                  <Flame className="w-5 h-5 fill-[#765700]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1A1B1E] font-['Plus_Jakarta_Sans'] leading-tight">
                    Seu Ritmo de Estudos
                  </h3>
                  <p className="text-xs text-[#727785] leading-normal mt-0.5">
                    Constância diária salva no seu navegador sem necessidade de cadastro
                  </p>
                </div>
              </div>

              {/* Daily Streak Card */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-[#FFDEA0]/30 border border-[#FBBC05]/30 text-[#1A1B1E] mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-[#765700] font-['Plus_Jakarta_Sans'] shrink-0">
                    🔥 {stats.streakDays}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-[#1A1B1E] leading-snug">
                      Dias seguidos de simulados
                    </span>
                    <span className="text-xs text-[#727785] leading-normal">
                      Próximo marco: {Math.max(stats.streakDays + 3, 15)} dias (Medalha de Bronze)
                    </span>
                  </div>
                </div>
                <Medal className="w-6 h-6 text-[#765700] shrink-0" />
              </div>

              {/* Weekly Goal Progress Bar */}
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-[#1A1B1E]">
                    Meta Semanal: {stats.weeklyGoalCurrent} de {stats.weeklyGoalTarget} questões
                  </span>
                  <span className="text-[#0058BD] font-bold">{weeklyPercentage}%</span>
                </div>
                <div className="w-full h-3 rounded-full bg-[#EFEDF1] overflow-hidden">
                  <div
                    className="h-full bg-[#0058BD] rounded-full transition-all duration-1000"
                    style={{ width: `${weeklyPercentage}%` }}
                  />
                </div>
              </div>

              {/* Overall TRI Score Banner */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-[#F4F3F7] border border-[#E3E2E6]">
                <div>
                  <span className="text-[11px] text-[#727785] uppercase font-bold tracking-wider leading-none block">
                    Média TRI Geral Atual
                  </span>
                  <div className="text-3xl font-bold text-[#0058BD] font-['Plus_Jakarta_Sans'] leading-tight mt-1">
                    {stats.averageTri.toFixed(1)}
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center gap-1 text-[#006E2C] text-xs font-bold bg-[#86F898]/40 px-2 py-0.5 rounded-md">
                    <ArrowUp className="w-3.5 h-3.5" />
                    <span>+38 pts</span>
                  </span>
                  <p className="text-[11px] text-[#727785] mt-1 leading-normal">desde o último mês</p>
                </div>
              </div>
            </div>

            {/* Badges Ribbon */}
            <div className="pt-4 flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#86F898]/50 text-[#005320] text-xs font-bold border border-[#006E2C]/20 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Português Nota 900+</span>
              </span>
              <span className="px-3 py-1 rounded-full bg-[#D8E2FF] text-[#001A41] text-xs font-bold border border-[#0058BD]/20 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5" />
                <span>Velocista em Exatas</span>
              </span>
              <span className="px-3 py-1 rounded-full bg-[#FFDEA0]/70 text-[#5C4300] text-xs font-bold border border-[#FBBC05]/40 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" />
                <span>Top 5% da sua Série</span>
              </span>
            </div>
          </div>

          {/* Right Side: Skill Radar / Matrix */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-[#F4F3F7] p-5 sm:p-6 rounded-2xl border border-[#E3E2E6]">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#E3E2E6]">
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-[#1A1B1E] font-['Plus_Jakarta_Sans'] leading-tight">
                    Mapeamento de Habilidades por Área
                  </h4>
                  <p className="text-xs text-[#727785] leading-normal mt-0.5">
                    Atualizado automaticamente conforme você resolve simulados
                  </p>
                </div>
                <button
                  onClick={onOpenPerformanceModal}
                  className="px-2.5 py-1 rounded-full bg-white text-[#0058BD] text-xs font-bold hover:bg-[#D8E2FF] transition-colors border border-[#C2C6D5]/50 flex items-center gap-1.5 cursor-pointer shrink-0"
                >
                  <span>Ver Detalhes</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>

              {/* Progress bars */}
              <div className="space-y-4 pt-4">
                {/* Linguagens */}
                <div>
                  <div className="flex flex-wrap items-center justify-between text-xs font-semibold mb-1.5 gap-1">
                    <span className="text-[#1A1B1E] flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#BA1A1A] shrink-0" />
                      <span>Língua Portuguesa &amp; Literatura</span>
                    </span>
                    <span className="text-[#1A1B1E] font-bold whitespace-nowrap">
                      {stats.areaProficiency.linguagens}% de acerto
                    </span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-white overflow-hidden border border-[#E3E2E6]">
                    <div
                      className="h-full bg-[#BA1A1A] rounded-full transition-all duration-700"
                      style={{ width: `${stats.areaProficiency.linguagens}%` }}
                    />
                  </div>
                </div>

                {/* Matemática */}
                <div>
                  <div className="flex flex-wrap items-center justify-between text-xs font-semibold mb-1.5 gap-1">
                    <span className="text-[#1A1B1E] flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#0058BD] shrink-0" />
                      <span>Matemática e Raciocínio Lógico</span>
                    </span>
                    <span className="text-[#1A1B1E] font-bold whitespace-nowrap">
                      {stats.areaProficiency.matematica}% de acerto
                    </span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-white overflow-hidden border border-[#E3E2E6]">
                    <div
                      className="h-full bg-[#0058BD] rounded-full transition-all duration-700"
                      style={{ width: `${stats.areaProficiency.matematica}%` }}
                    />
                  </div>
                </div>

                {/* Humanas */}
                <div>
                  <div className="flex flex-wrap items-center justify-between text-xs font-semibold mb-1.5 gap-1">
                    <span className="text-[#1A1B1E] flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#765700] shrink-0" />
                      <span>Ciências Humanas (História &amp; Geo)</span>
                    </span>
                    <span className="text-[#1A1B1E] font-bold whitespace-nowrap">
                      {stats.areaProficiency.humanas}% de acerto
                    </span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-white overflow-hidden border border-[#E3E2E6]">
                    <div
                      className="h-full bg-[#FBBC05] rounded-full transition-all duration-700"
                      style={{ width: `${stats.areaProficiency.humanas}%` }}
                    />
                  </div>
                </div>

                {/* Natureza */}
                <div>
                  <div className="flex flex-wrap items-center justify-between text-xs font-semibold mb-1.5 gap-1">
                    <span className="text-[#1A1B1E] flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#006E2C] shrink-0" />
                      <span>Ciências da Natureza</span>
                    </span>
                    <span className="text-[#1A1B1E] font-bold whitespace-nowrap">
                      {stats.areaProficiency.natureza}% de acerto{' '}
                      <span className="text-xs font-normal text-[#006E2C] hidden sm:inline">(Foco de melhoria)</span>
                    </span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-white overflow-hidden border border-[#E3E2E6]">
                    <div
                      className="h-full bg-[#006E2C] rounded-full transition-all duration-700"
                      style={{ width: `${stats.areaProficiency.natureza}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Diagnostic recommendation action */}
            <div className="mt-5 p-3.5 bg-white rounded-xl border border-[#E3E2E6] flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#D8E2FF] flex items-center justify-center text-[#0058BD] shrink-0">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#1A1B1E]">
                    Recomendação Pedagógica:
                  </span>
                  <span className="text-xs text-[#424753] leading-normal">
                    Pratique o simulado exclusivo de Português ou a Maratona de Matemática para equilibrar sua nota TRI.
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={onPracticeRecommendation}
                className="px-4 py-2 bg-[#D8E2FF] text-[#004494] text-xs font-bold rounded-xl hover:bg-[#0058BD] hover:text-white transition-colors flex items-center justify-center gap-1.5 shrink-0 cursor-pointer"
              >
                <span>Praticar Agora</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
