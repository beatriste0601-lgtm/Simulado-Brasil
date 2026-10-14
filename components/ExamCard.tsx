'use client';

import React from 'react';
import { Exam } from '@/types/exam';
import {
  Award,
  GraduationCap,
  CheckCircle2,
  ListOrdered,
  Clock,
  Zap,
  Play,
} from 'lucide-react';

interface ExamCardProps {
  exam: Exam;
  onStartExam: (examId: string) => void;
}

export const ExamCard: React.FC<ExamCardProps> = ({ exam, onStartExam }) => {
  // Mapping color badges
  const getBadgeStyles = () => {
    switch (exam.tagColor) {
      case 'secondary':
        return 'bg-[#86F898] text-[#005320] border-[#006E2C]/20';
      case 'tertiary':
        return 'bg-[#FFDEA0] text-[#5C4300] border-[#FBBC05]/30';
      case 'error':
        return 'bg-[#FFDAD6] text-[#93000A] border-[#BA1A1A]/20';
      default:
        return 'bg-[#D8E2FF] text-[#001A41] border-[#0058BD]/20';
    }
  };

  const getDifficultyColor = () => {
    switch (exam.difficulty) {
      case 'Básico':
        return 'text-[#006E2C]';
      case 'Médio':
        return 'text-[#765700]';
      case 'Avançado':
        return 'text-[#BA1A1A]';
      case 'Desafio':
        return 'text-[#765700]';
      default:
        return 'text-[#0058BD]';
    }
  };

  return (
    <div className="flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-white border border-[#E3E2E6] shadow-xs hover:shadow-lg transition-all duration-300 relative group overflow-hidden">
      {/* Top color indicator bar */}
      <div
        className="absolute top-0 left-0 w-full h-1.5 transition-all group-hover:h-2"
        style={{ backgroundColor: exam.accentColor }}
      />

      <div>
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span
            className={`px-2.5 py-1 rounded-full text-xs font-bold border flex items-center gap-1.5 ${getBadgeStyles()}`}
          >
            {exam.category === 'olimpiada' ? (
              <Award className="w-3.5 h-3.5 shrink-0" />
            ) : (
              <GraduationCap className="w-3.5 h-3.5 shrink-0" />
            )}
            <span className="leading-tight">{exam.tag}</span>
          </span>
          <span className="text-xs text-[#727785] font-semibold flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#006E2C] shrink-0" />
            <span className="leading-tight">{exam.badgeLevel}</span>
          </span>
        </div>

        {/* Title with clean line-height */}
        <h3 className="text-lg sm:text-xl font-bold text-[#1A1B1E] group-hover:text-[#0058BD] transition-colors line-clamp-2 leading-snug font-['Plus_Jakarta_Sans']">
          {exam.title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-[#424753] mt-2 line-clamp-2 leading-relaxed">
          {exam.description}
        </p>

        {/* Specs Ribbon */}
        <div className="grid grid-cols-3 gap-2 py-3 my-4 bg-[#F4F3F7] rounded-xl px-2 border border-[#E3E2E6]/60">
          <div className="flex flex-col items-center text-center">
            <ListOrdered className="w-4 h-4 text-[#0058BD]" />
            <span className="text-xs font-bold text-[#1A1B1E] mt-1 leading-tight">
              {exam.questions.length} Questões
            </span>
          </div>

          <div className="flex flex-col items-center text-center border-x border-[#E3E2E6]">
            <Clock className="w-4 h-4 text-[#0058BD]" />
            <span className="text-xs font-bold text-[#1A1B1E] mt-1 leading-tight">
              {exam.durationMinutes} min
            </span>
          </div>

          <div className="flex flex-col items-center text-center">
            <Zap className={`w-4 h-4 ${getDifficultyColor()}`} />
            <span className={`text-xs font-bold mt-1 leading-tight ${getDifficultyColor()}`}>
              {exam.difficulty}
            </span>
          </div>
        </div>
      </div>

      {/* Button Action */}
      <div className="pt-1">
        <button
          type="button"
          onClick={() => onStartExam(exam.id)}
          className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#0058BD] text-white font-semibold text-sm rounded-xl shadow-xs hover:bg-[#2771DF] active:scale-[0.98] transition-all cursor-pointer"
        >
          <span>Iniciar Simulado</span>
          <Play className="w-4 h-4 fill-white" />
        </button>
      </div>
    </div>
  );
};
