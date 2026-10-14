'use client';

import React from 'react';
import {
  GraduationCap,
  ShieldCheck,
  BarChart2,
  Sparkles,
  Award,
  BookOpen,
} from 'lucide-react';

interface FooterProps {
  onSelectCategory: (category: any) => void;
  onOpenPerformance: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectCategory,
  onOpenPerformance,
}) => {
  return (
    <footer className="w-full bg-[#F4F3F7] border-t border-[#E3E2E6] pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
          {/* Brand & Mission column */}
          <div className="lg:col-span-2 flex flex-col gap-4 pr-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#0058BD] to-[#006E2C] flex items-center justify-center text-white shadow-xs">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-[#0058BD] font-['Plus_Jakarta_Sans']">
                Simula<span className="text-[#006E2C]">Brasil</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#424753] leading-relaxed max-w-sm">
              A plataforma gratuita líder em simulados diagnósticos e preparação para ENEM, Saeb, OBMEP e vestibulares em todo o Brasil.
            </p>
            <div className="flex flex-wrap items-center gap-2 mt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#86F898]/40 text-[#005320] rounded-full text-xs font-bold border border-[#006E2C]/20">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Padrão MEC / INEP</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FFDEA0]/50 text-[#5C4300] rounded-full text-xs font-bold border border-[#FBBC05]/30">
                <Award className="w-3.5 h-3.5" />
                <span>TRI Oficial</span>
              </span>
            </div>
          </div>

          {/* Ensino Fundamental */}
          <div className="flex flex-col gap-2.5">
            <h3 className="text-sm font-bold text-[#1A1B1E] uppercase tracking-wider font-mono">
              Ensino Fundamental
            </h3>
            <ul className="flex flex-col gap-2 text-xs sm:text-sm text-[#424753]">
              <li>
                <button
                  onClick={() => onSelectCategory('fundamental')}
                  className="hover:text-[#0058BD] transition-colors text-left cursor-pointer"
                >
                  6º ao 9º ano
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('fundamental')}
                  className="hover:text-[#0058BD] transition-colors text-left cursor-pointer"
                >
                  Simulado Saeb
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('fundamental')}
                  className="hover:text-[#0058BD] transition-colors text-left cursor-pointer"
                >
                  Prova Paulista &amp; SARESP
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('olimpiada')}
                  className="hover:text-[#0058BD] transition-colors text-left cursor-pointer"
                >
                  Olimpíadas Científicas
                </button>
              </li>
            </ul>
          </div>

          {/* Ensino Médio */}
          <div className="flex flex-col gap-2.5">
            <h3 className="text-sm font-bold text-[#1A1B1E] uppercase tracking-wider font-mono">
              Ensino Médio
            </h3>
            <ul className="flex flex-col gap-2 text-xs sm:text-sm text-[#424753]">
              <li>
                <button
                  onClick={() => onSelectCategory('medio')}
                  className="hover:text-[#0058BD] transition-colors text-left cursor-pointer"
                >
                  Simulado ENEM Completo
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('medio')}
                  className="hover:text-[#0058BD] transition-colors text-left cursor-pointer"
                >
                  Fuvest &amp; Unicamp
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('medio')}
                  className="hover:text-[#0058BD] transition-colors text-left cursor-pointer"
                >
                  Ciências da Natureza
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('olimpiada')}
                  className="hover:text-[#0058BD] transition-colors text-left cursor-pointer"
                >
                  OBMEP &amp; OBA
                </button>
              </li>
            </ul>
          </div>

          {/* Recursos & Ferramentas */}
          <div className="flex flex-col gap-2.5">
            <h3 className="text-sm font-bold text-[#1A1B1E] uppercase tracking-wider font-mono">
              Recursos &amp; Aluno
            </h3>
            <ul className="flex flex-col gap-2 text-xs sm:text-sm text-[#424753]">
              <li>
                <button
                  onClick={onOpenPerformance}
                  className="hover:text-[#0058BD] transition-colors text-left flex items-center gap-1.5 cursor-pointer font-medium text-[#0058BD]"
                >
                  <BarChart2 className="w-3.5 h-3.5" />
                  <span>Estatísticas de Desempenho</span>
                </button>
              </li>
              <li>
                <span className="text-[#727785]">Acesso Gratuito Aberto</span>
              </li>
              <li>
                <span className="text-[#727785]">Banco de Questões Inéditas</span>
              </li>
              <li>
                <span className="text-[#727785]">Matriz de Competências BNCC</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 border-t border-[#E3E2E6] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#727785]">
          <div>
            <span>© 2025 SimulaBrasil Tecnologia Educacional. Prática Pedagógica Aberta.</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-medium text-[#006E2C]">
              <Sparkles className="w-3.5 h-3.5 text-[#006E2C]" />
              <span>Educação Pública de Qualidade para Todos</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
