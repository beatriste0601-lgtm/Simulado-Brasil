'use client';

import React from 'react';
import {
  GraduationCap,
  BarChart2,
  Search,
  X,
  Play,
  TrendingUp,
  Sparkles,
} from 'lucide-react';

interface HeaderProps {
  onSearchChange: (query: string) => void;
  searchQuery: string;
  onOpenPerformance: () => void;
  streakDays: number;
  hasInProgress: boolean;
  onResumeExam: () => void;
  onNavigateHome: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onSearchChange,
  searchQuery,
  onOpenPerformance,
  streakDays,
  hasInProgress,
  onResumeExam,
  onNavigateHome,
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAF9FD]/95 backdrop-blur-md border-b border-[#E3E2E6] shadow-[0_1px_8px_rgba(0,0,0,0.03)]">
      <div className="h-16 sm:h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 sm:gap-4">
        {/* Brand Zone */}
        <div className="flex items-center gap-4 lg:gap-6 shrink-0">
          <button
            onClick={onNavigateHome}
            className="flex items-center gap-2 group text-left cursor-pointer focus:outline-none"
            aria-label="Voltar para a página inicial"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#0058BD] via-[#2771DF] to-[#006E2C] flex items-center justify-center shadow-xs text-white group-hover:scale-105 transition-transform shrink-0">
              <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="flex flex-col shrink-0">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-[#0058BD] flex items-center gap-1 font-['Plus_Jakarta_Sans'] whitespace-nowrap leading-tight">
                Simula<span className="text-[#006E2C]">Brasil</span>
              </span>
              <span className="text-[10px] font-semibold text-[#727785] tracking-wider uppercase hidden sm:block whitespace-nowrap leading-tight mt-0.5">
                100% Gratuito · Sem Login
              </span>
            </div>
          </button>

          {/* Navigation links */}
          <nav className="hidden lg:flex items-center gap-1">
            <button
              onClick={onNavigateHome}
              className="px-3 py-1.5 rounded-lg text-sm font-semibold bg-[#D8E2FF] text-[#001A41] transition-colors cursor-pointer"
            >
              Simulados
            </button>
            <a
              href="#materias-exclusivas-section"
              className="px-3 py-1.5 rounded-lg text-sm font-medium text-[#424753] hover:text-[#1A1B1E] hover:bg-[#EFEDF1] transition-colors"
            >
              Por Matéria Específica
            </a>
            <a
              href="#simulados-grid"
              className="px-3 py-1.5 rounded-lg text-sm font-medium text-[#424753] hover:text-[#1A1B1E] hover:bg-[#EFEDF1] transition-colors"
            >
              5, 10 e 20 Questões
            </a>
            <button
              onClick={onOpenPerformance}
              className="px-3 py-1.5 rounded-lg text-sm font-medium text-[#424753] hover:text-[#1A1B1E] hover:bg-[#EFEDF1] transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <BarChart2 className="w-4 h-4 text-[#0058BD]" />
              <span>Desempenho</span>
            </button>
          </nav>
        </div>

        {/* Search Input Zone */}
        <div className="hidden md:flex flex-1 max-w-md mx-2 items-center relative">
          <Search className="w-4 h-4 absolute left-3.5 text-[#727785] pointer-events-none select-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Buscar simulado de Português, Matemática, 10 ou 20 questões..."
            className="w-full pl-10 pr-9 py-2 bg-[#F4F3F7] rounded-xl text-xs sm:text-sm text-[#1A1B1E] placeholder:text-[#727785] border border-transparent focus:border-[#0058BD] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0058BD]/20 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 text-[#727785] hover:text-[#1A1B1E] cursor-pointer"
              aria-label="Limpar busca"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Action Zone: Frictionless Zero-Auth Badges */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          {/* Resume in-progress exam if exists */}
          {hasInProgress && (
            <button
              onClick={onResumeExam}
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-xs font-bold bg-[#86F898]/40 text-[#005320] border border-[#006E2C]/20 rounded-xl hover:bg-[#86F898] transition-colors shadow-xs whitespace-nowrap shrink-0 cursor-pointer"
              title="Continuar o simulado em andamento"
            >
              <Play className="w-3.5 h-3.5 fill-[#005320]" />
              <span className="hidden sm:inline">Continuar</span>
            </button>
          )}

          {/* Daily Streak Counter */}
          <div
            className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 bg-[#FFDEA0]/40 border border-[#FBBC05]/40 rounded-xl text-[#5C4300] font-bold text-xs sm:text-sm shadow-xs whitespace-nowrap shrink-0"
            title="Sua constância de estudos diários salva no navegador"
          >
            <span className="text-sm select-none">🔥</span>
            <span>{streakDays} dias</span>
          </div>

          {/* Performance Stats Button */}
          <button
            onClick={onOpenPerformance}
            className="inline-flex items-center gap-1.5 px-2.5 sm:px-4 py-2 bg-[#0058BD] text-white hover:bg-[#2771DF] rounded-xl text-xs sm:text-sm font-semibold shadow-xs transition-all active:scale-95 whitespace-nowrap shrink-0 cursor-pointer"
            aria-label="Abrir estatísticas de desempenho"
          >
            <BarChart2 className="w-4 h-4" />
            <span className="hidden sm:inline">Meu Progresso</span>
          </button>
        </div>
      </div>
    </header>
  );
};
