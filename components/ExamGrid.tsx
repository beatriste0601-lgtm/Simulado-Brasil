'use client';

import React, { useState } from 'react';
import { Exam, EducationCycle } from '@/types/exam';
import { ExamCard } from './ExamCard';
import { SearchX, SlidersHorizontal } from 'lucide-react';

interface ExamGridProps {
  exams: Exam[];
  onStartExam: (examId: string) => void;
  activeCategory: 'all' | EducationCycle;
  selectedSubject: string | null;
  selectedQuestionCount: number | null;
  searchQuery: string;
  onClearFilters: () => void;
}

export const ExamGrid: React.FC<ExamGridProps> = ({
  exams,
  onStartExam,
  activeCategory,
  selectedSubject,
  selectedQuestionCount,
  searchQuery,
  onClearFilters,
}) => {
  const [sortBy, setSortBy] = useState<'popular' | 'duration' | 'difficulty'>('popular');

  // Filter exams
  let filtered = exams.filter((exam) => {
    // Category filter
    if (activeCategory !== 'all' && exam.category !== activeCategory) {
      return false;
    }
    // Question count filter (5, 10, 20)
    if (selectedQuestionCount !== null && exam.questions.length !== selectedQuestionCount) {
      return false;
    }
    // Subject filter
    if (selectedSubject) {
      const matchSubject =
        exam.subject.toLowerCase().includes(selectedSubject.toLowerCase()) ||
        exam.title.toLowerCase().includes(selectedSubject.toLowerCase());
      if (!matchSubject) return false;
    }
    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const match =
        exam.title.toLowerCase().includes(q) ||
        exam.description.toLowerCase().includes(q) ||
        exam.subject.toLowerCase().includes(q) ||
        exam.tag.toLowerCase().includes(q) ||
        `${exam.questions.length}`.includes(q);
      if (!match) return false;
    }
    return true;
  });

  // Sorting
  filtered = [...filtered].sort((a, b) => {
    if (sortBy === 'duration') {
      return a.durationMinutes - b.durationMinutes;
    }
    if (sortBy === 'difficulty') {
      const diffOrder: Record<string, number> = { Básico: 1, Médio: 2, Avançado: 3, Desafio: 4 };
      return (diffOrder[b.difficulty] || 0) - (diffOrder[a.difficulty] || 0);
    }
    // Default popular: keep highlight first
    return (b.highlight ? 1 : 0) - (a.highlight ? 1 : 0);
  });

  return (
    <section className="py-6 sm:py-8" id="simulados-grid">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#006E2C]" />
            <span className="text-xs uppercase tracking-wider text-[#006E2C] font-bold">
              Edições Vigentes 2025 · 5, 10 e 20 Questões
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1B1E] mt-1 font-['Plus_Jakarta_Sans'] leading-tight">
            Simulados Disponíveis
          </h2>
        </div>

        {/* Sort selector */}
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-[#727785]" />
          <label htmlFor="sort-select" className="text-xs text-[#727785] whitespace-nowrap">
            Ordenar por:
          </label>
          <select
            id="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="px-3 py-1.5 rounded-xl bg-white border border-[#E3E2E6] text-[#1A1B1E] text-xs font-semibold shadow-xs focus:outline-none focus:ring-2 focus:ring-[#0058BD] cursor-pointer"
          >
            <option value="popular">Mais Populares</option>
            <option value="duration">Mais Rápidos (&lt; 30 min)</option>
            <option value="difficulty">Nível de Dificuldade</option>
          </select>
        </div>
      </div>

      {/* Grid of Exam Cards */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((exam) => (
            <ExamCard key={exam.id} exam={exam} onStartExam={onStartExam} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 px-4 bg-white rounded-2xl border border-[#E3E2E6] max-w-lg mx-auto shadow-xs">
          <div className="w-12 h-12 rounded-2xl bg-[#F4F3F7] flex items-center justify-center mx-auto mb-3 text-[#727785]">
            <SearchX className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-[#1A1B1E] leading-snug">
            Nenhum simulado com esses filtros
          </h3>
          <p className="text-xs text-[#727785] mt-1 mb-4 leading-normal">
            Tente selecionar outra matéria ou limpar os filtros de questões.
          </p>
          <button
            onClick={onClearFilters}
            className="px-4 py-2 bg-[#0058BD] text-white rounded-xl text-xs font-semibold hover:bg-[#2771DF] transition-colors cursor-pointer"
          >
            Limpar Filtros e Ver Todos
          </button>
        </div>
      )}
    </section>
  );
};
