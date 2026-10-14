'use client';

import React from 'react';
import { EducationCycle } from '@/types/exam';
import {
  BookOpen,
  GraduationCap,
  Award,
  Calculator,
  FileText,
  Compass,
  Globe2,
  Dna,
  Zap,
  FlaskConical,
  Languages,
  Layers,
  ListOrdered,
  Sparkles,
} from 'lucide-react';

interface CategoryTabsProps {
  activeCategory: 'all' | EducationCycle;
  onSelectCategory: (category: 'all' | EducationCycle) => void;
  selectedSubject: string | null;
  onSelectSubject: (subject: string | null) => void;
  selectedQuestionCount: number | null;
  onSelectQuestionCount: (count: number | null) => void;
}

export const CategoryTabs: React.FC<CategoryTabsProps> = ({
  activeCategory,
  onSelectCategory,
  selectedSubject,
  onSelectSubject,
  selectedQuestionCount,
  onSelectQuestionCount,
}) => {
  const categories: Array<{
    id: 'all' | EducationCycle;
    label: string;
    icon: React.ReactNode;
    badge?: string;
    badgeClass?: string;
  }> = [
    {
      id: 'all',
      label: 'Todos os Ciclos',
      icon: <Layers className="w-4 h-4" />,
    },
    {
      id: 'fundamental',
      label: 'Ensino Fundamental (6º ao 9º)',
      icon: <BookOpen className="w-4 h-4" />,
      badge: 'Saeb',
      badgeClass: 'bg-[#FFDEA0] text-[#5C4300]',
    },
    {
      id: 'medio',
      label: 'Ensino Médio & Vestibulares',
      icon: <GraduationCap className="w-4 h-4" />,
      badge: 'ENEM',
      badgeClass: 'bg-[#D8E2FF] text-[#001A41]',
    },
    {
      id: 'olimpiada',
      label: 'Olimpíadas Científicas',
      icon: <Award className="w-4 h-4" />,
      badge: 'OBMEP / OBA',
      badgeClass: 'bg-[#86F898] text-[#005320]',
    },
  ];

  const subjects = [
    {
      id: 'portugues',
      name: 'Português',
      fullName: 'Português & Redação',
      count: '5, 10 e 20Q',
      icon: <FileText className="w-4 h-4" />,
      iconClass: 'bg-[#BA1A1A] text-white',
      borderClass: 'border-[#BA1A1A]',
    },
    {
      id: 'matematica',
      name: 'Matemática',
      fullName: 'Matemática',
      count: '5, 10 e 20Q',
      icon: <Calculator className="w-4 h-4" />,
      iconClass: 'bg-[#0058BD] text-white',
      borderClass: 'border-[#0058BD]',
    },
    {
      id: 'historia',
      name: 'História',
      fullName: 'História',
      count: '5, 10 e 20Q',
      icon: <Compass className="w-4 h-4" />,
      iconClass: 'bg-[#765700] text-white',
      borderClass: 'border-[#765700]',
    },
    {
      id: 'geografia',
      name: 'Geografia',
      fullName: 'Geografia',
      count: '5, 10 e 20Q',
      icon: <Globe2 className="w-4 h-4" />,
      iconClass: 'bg-[#006E2C] text-white',
      borderClass: 'border-[#006E2C]',
    },
    {
      id: 'biologia',
      name: 'Biologia',
      fullName: 'Biologia',
      count: '5, 10 e 20Q',
      icon: <Dna className="w-4 h-4" />,
      iconClass: 'bg-[#006E2C] text-white',
      borderClass: 'border-[#006E2C]',
    },
    {
      id: 'fisica',
      name: 'Física',
      fullName: 'Física',
      count: '5, 10 e 20Q',
      icon: <Zap className="w-4 h-4" />,
      iconClass: 'bg-[#0058BD] text-white',
      borderClass: 'border-[#0058BD]',
    },
    {
      id: 'quimica',
      name: 'Química',
      fullName: 'Química',
      count: '5, 10 e 20Q',
      icon: <FlaskConical className="w-4 h-4" />,
      iconClass: 'bg-[#2771DF] text-white',
      borderClass: 'border-[#2771DF]',
    },
    {
      id: 'ingles',
      name: 'Inglês',
      fullName: 'Inglês',
      count: '5 e 10Q',
      icon: <Languages className="w-4 h-4" />,
      iconClass: 'bg-[#0058BD] text-white',
      borderClass: 'border-[#0058BD]',
    },
  ];

  const questionFilters = [
    { label: 'Todos os tamanhos', count: null },
    { label: '5 Questões (Rápido)', count: 5 },
    { label: '10 Questões (Padrão)', count: 10 },
    { label: '20 Questões (Maratona)', count: 20 },
  ];

  return (
    <section className="py-6 sm:py-8" id="materias-section">
      {/* Category Level Switcher (Tabs) */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#1A1B1E] font-['Plus_Jakarta_Sans'] leading-tight">
            Filtre por Ciclo Escolar &amp; Área
          </h2>
          <p className="text-xs sm:text-sm text-[#727785] mt-1 leading-normal">
            Escolha provas por matéria específica individual ou por extensão de questões
          </p>
        </div>

        <div className="flex p-1.5 bg-[#EFEDF1] rounded-2xl max-w-full overflow-x-auto gap-1 border border-[#E3E2E6] shrink-0">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-white text-[#0058BD] shadow-xs border border-[#C2C6D5]/40'
                    : 'text-[#424753] hover:text-[#1A1B1E] hover:bg-white/60'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
                {cat.badge && (
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${cat.badgeClass}`}>
                    {cat.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Filter by Question Count (5, 10, 20 questões) */}
      <div className="flex flex-wrap items-center gap-2 mb-4 p-3 bg-white rounded-2xl border border-[#E3E2E6] shadow-2xs">
        <div className="flex items-center gap-1.5 text-xs font-bold text-[#1A1B1E] pr-2 border-r border-[#E3E2E6] shrink-0">
          <ListOrdered className="w-4 h-4 text-[#0058BD]" />
          <span>Extensão da Prova:</span>
        </div>
        <div className="flex flex-wrap items-center gap-1.5">
          {questionFilters.map((qf, idx) => {
            const isSelected = selectedQuestionCount === qf.count;
            return (
              <button
                key={idx}
                onClick={() => onSelectQuestionCount(qf.count)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#0058BD] text-white shadow-xs'
                    : 'bg-[#F4F3F7] text-[#424753] hover:bg-[#EFEDF1] hover:text-[#1A1B1E]'
                }`}
              >
                {qf.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Subject Tags Ribbon - All Standalone Subjects */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
        {subjects.map((sub) => {
          const isSelected =
            selectedSubject?.toLowerCase() === sub.name.toLowerCase() ||
            selectedSubject?.toLowerCase() === sub.fullName.toLowerCase();
          return (
            <button
              key={sub.id}
              onClick={() => onSelectSubject(isSelected ? null : sub.name)}
              className={`group flex flex-col items-center p-3 rounded-2xl bg-white border transition-all text-center cursor-pointer ${
                isSelected
                  ? `border-2 ${sub.borderClass} shadow-md scale-[1.02]`
                  : 'border-[#E3E2E6] hover:border-[#C2C6D5] hover:shadow-xs'
              }`}
            >
              <div
                className={`w-9 h-9 rounded-xl ${sub.iconClass} flex items-center justify-center shrink-0 mb-1.5 group-hover:scale-105 transition-transform shadow-xs`}
              >
                {sub.icon}
              </div>
              <span className="text-xs font-bold text-[#1A1B1E] truncate w-full group-hover:text-[#0058BD] leading-tight">
                {sub.name}
              </span>
              <span className="text-[10px] text-[#727785] leading-none mt-0.5">
                {sub.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Quick Subject Shortcuts */}
      <div className="mt-4 flex flex-wrap items-center gap-2 pt-2">
        <span className="text-xs font-bold text-[#1A1B1E] flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5 text-[#0058BD]" />
          <span>Filtro Direto:</span>
        </span>
        <button
          onClick={() => onSelectSubject('Português')}
          className={`px-3 py-1 rounded-full text-xs font-bold border transition-all cursor-pointer ${
            selectedSubject === 'Português'
              ? 'bg-[#BA1A1A] text-white border-[#BA1A1A] shadow-xs'
              : 'bg-[#FFDAD6]/40 text-[#93000A] border-[#BA1A1A]/30 hover:bg-[#FFDAD6]'
          }`}
        >
          📖 Só Português
        </button>
        <button
          onClick={() => onSelectSubject('Matemática')}
          className={`px-3 py-1 rounded-full text-xs font-bold border transition-all cursor-pointer ${
            selectedSubject === 'Matemática'
              ? 'bg-[#0058BD] text-white border-[#0058BD] shadow-xs'
              : 'bg-[#D8E2FF]/60 text-[#004494] border-[#0058BD]/30 hover:bg-[#D8E2FF]'
          }`}
        >
          📐 Só Matemática
        </button>
        <button
          onClick={() => onSelectSubject('História')}
          className={`px-3 py-1 rounded-full text-xs font-bold border transition-all cursor-pointer ${
            selectedSubject === 'História'
              ? 'bg-[#765700] text-white border-[#765700] shadow-xs'
              : 'bg-[#FFDEA0]/50 text-[#5C4300] border-[#FBBC05]/40 hover:bg-[#FFDEA0]'
          }`}
        >
          🏛️ Só História
        </button>
        <button
          onClick={() => onSelectSubject('Geografia')}
          className={`px-3 py-1 rounded-full text-xs font-bold border transition-all cursor-pointer ${
            selectedSubject === 'Geografia'
              ? 'bg-[#006E2C] text-white border-[#006E2C] shadow-xs'
              : 'bg-[#86F898]/40 text-[#005320] border-[#006E2C]/30 hover:bg-[#86F898]'
          }`}
        >
          🌍 Só Geografia
        </button>
        <button
          onClick={() => onSelectSubject('Biologia')}
          className={`px-3 py-1 rounded-full text-xs font-bold border transition-all cursor-pointer ${
            selectedSubject === 'Biologia'
              ? 'bg-[#006E2C] text-white border-[#006E2C] shadow-xs'
              : 'bg-[#D1E8D5]/60 text-[#004A1C] border-[#006E2C]/30 hover:bg-[#D1E8D5]'
          }`}
        >
          🧬 Só Biologia
        </button>
        <button
          onClick={() => onSelectSubject('Física')}
          className={`px-3 py-1 rounded-full text-xs font-bold border transition-all cursor-pointer ${
            selectedSubject === 'Física'
              ? 'bg-[#0058BD] text-white border-[#0058BD] shadow-xs'
              : 'bg-[#E0E7FF] text-[#1E1B4B] border-[#0058BD]/30 hover:bg-[#C7D2FE]'
          }`}
        >
          ⚡ Só Física
        </button>
        <button
          onClick={() => onSelectSubject('Química')}
          className={`px-3 py-1 rounded-full text-xs font-bold border transition-all cursor-pointer ${
            selectedSubject === 'Química'
              ? 'bg-[#2771DF] text-white border-[#2771DF] shadow-xs'
              : 'bg-[#CFE5FF] text-[#002D62] border-[#2771DF]/30 hover:bg-[#BAE6FD]'
          }`}
        >
          🧪 Só Química
        </button>
        <button
          onClick={() => onSelectSubject('Inglês')}
          className={`px-3 py-1 rounded-full text-xs font-bold border transition-all cursor-pointer ${
            selectedSubject === 'Inglês'
              ? 'bg-[#0058BD] text-white border-[#0058BD] shadow-xs'
              : 'bg-[#EAE8FD] text-[#2E1065] border-[#0058BD]/30 hover:bg-[#DDD6FE]'
          }`}
        >
          🌐 Só Inglês
        </button>
        {selectedSubject && (
          <button
            onClick={() => onSelectSubject(null)}
            className="px-2.5 py-1 rounded-full text-xs font-bold text-[#727785] hover:text-[#1A1B1E] hover:bg-[#EFEDF1] transition-colors cursor-pointer underline ml-1"
          >
            Limpar Filtro ({selectedSubject})
          </button>
        )}
      </div>
    </section>
  );
};
