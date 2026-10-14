'use client';

import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  ArrowRight,
  BookOpen,
  TrendingUp,
  Clock,
  CheckCircle2,
  Bookmark,
  Check,
} from 'lucide-react';

interface HeroSectionProps {
  onStartExam: (examId: string) => void;
  onExploreSubjects: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartExam,
  onExploreSubjects,
}) => {
  // Live mock timer state
  const [secondsLeft, setSecondsLeft] = useState(2 * 3600 + 44 * 60 + 58);
  const [selectedOption, setSelectedOption] = useState<string>('B');
  const [isFlagged, setIsFlagged] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTimer = (totalSecs: number) => {
    const hrs = String(Math.floor(totalSecs / 3600)).padStart(2, '0');
    const mins = String(Math.floor((totalSecs % 3600) / 60)).padStart(2, '0');
    const secs = String(totalSecs % 60).padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
  };

  const options = [
    { id: 'A', text: 'Carotenoide alfa' },
    { id: 'B', text: 'Clorofila a e Clorofila b' },
    { id: 'C', text: 'Antocianina hidrossolúvel' },
    { id: 'D', text: 'Xantofila de fase escura' },
  ];

  return (
    <section className="relative w-full overflow-hidden py-8 md:py-14">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -top-32 -left-20 h-96 w-96 rounded-full bg-[#0058BD]/8 blur-3xl" />
      <div className="pointer-events-none absolute top-40 right-10 h-80 w-80 rounded-full bg-[#006E2C]/8 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 left-1/3 h-72 w-72 rounded-full bg-[#FBBC05]/10 blur-2xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-6">
            {/* Tagline Pill */}
            <div className="inline-flex flex-wrap items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-[#D8E2FF] text-[#001A41] text-xs font-semibold shadow-xs">
              <ShieldCheck className="w-4 h-4 text-[#0058BD] shrink-0" />
              <span className="leading-normal">Plataforma Oficial de Prática Pedagógica</span>
              <span className="bg-[#0058BD] text-white text-[11px] px-2 py-0.5 rounded-full font-bold shrink-0">
                BNCC 2025
              </span>
            </div>

            {/* Main Title with generous line-height */}
            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-tight text-[#1A1B1E] leading-[1.28] sm:leading-[1.24] lg:leading-[1.22] font-['Plus_Jakarta_Sans']">
              Prepare-se para suas provas com{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0058BD] via-[#2771DF] to-[#006E2C] inline-block py-0.5">
                simulados interativos
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg text-[#424753] leading-relaxed max-w-2xl font-normal">
              Simulados gratuitos com matérias específicas (Português, Matemática, Ciências da Natureza e Humanas) em formatos rápidos de <strong>5</strong>, <strong>10</strong> e maratona de <strong>20 questões</strong> com gabarito comentado.
            </p>

            {/* Main CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#simulados-grid"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#0058BD] text-white font-semibold text-sm sm:text-base rounded-xl shadow-md hover:bg-[#2771DF] hover:shadow-lg active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Fazer Simulado Agora</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={onExploreSubjects}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white text-[#1A1B1E] font-semibold text-sm sm:text-base rounded-xl border border-[#C2C6D5]/60 shadow-xs hover:bg-[#EFEDF1] transition-all cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-[#006E2C]" />
                <span>Escolher Matéria</span>
              </button>
            </div>

            {/* Trust Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
              <div className="flex flex-col p-3 bg-white/90 rounded-xl border border-[#E3E2E6] shadow-xs">
                <span className="text-lg sm:text-xl font-bold text-[#0058BD] font-['Plus_Jakarta_Sans'] leading-tight">
                  +450 mil
                </span>
                <span className="text-xs text-[#727785] mt-1 leading-normal">Questões cadastradas</span>
              </div>
              <div className="flex flex-col p-3 bg-white/90 rounded-xl border border-[#E3E2E6] shadow-xs">
                <span className="text-lg sm:text-xl font-bold text-[#006E2C] font-['Plus_Jakarta_Sans'] leading-tight">
                  100% TRI
                </span>
                <span className="text-xs text-[#727785] mt-1 leading-normal">Padrão MEC e INEP</span>
              </div>
              <div className="flex flex-col p-3 bg-white/90 rounded-xl border border-[#E3E2E6] shadow-xs">
                <span className="text-lg sm:text-xl font-bold text-[#765700] font-['Plus_Jakarta_Sans'] leading-tight">
                  5, 10 e 20Q
                </span>
                <span className="text-xs text-[#727785] mt-1 leading-normal">Diferentes tamanhos</span>
              </div>
              <div className="flex flex-col p-3 bg-white/90 rounded-xl border border-[#E3E2E6] shadow-xs">
                <span className="text-lg sm:text-xl font-bold text-[#BA1A1A] font-['Plus_Jakarta_Sans'] leading-tight">
                  Zero Login
                </span>
                <span className="text-xs text-[#727785] mt-1 leading-normal">Acesso 100% livre</span>
              </div>
            </div>
          </div>

          {/* Hero Right: Interactive Mockup Quiz Card */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            {/* TRI Precision floating badge */}
            <div className="absolute -top-3.5 -right-2 z-20 bg-[#86F898] text-[#005320] px-3 py-1 rounded-full shadow-md text-xs font-bold flex items-center gap-1.5 border border-[#006E2C]/20">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>98.4% de precisão na TRI</span>
            </div>

            {/* Interactive Diagnostic Card */}
            <div className="bg-white rounded-2xl border border-[#E3E2E6] shadow-xl p-5 sm:p-6 relative">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-3 border-b border-[#EFEDF1]">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#EA4335]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FBBC05]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#34A853]" />
                  <span className="ml-2 text-xs font-bold text-[#424753] uppercase tracking-wider">
                    ENEM Simulado Ao Vivo
                  </span>
                </div>
                <div className="flex items-center gap-1.5 bg-[#F4F3F7] px-2.5 py-1 rounded-full text-[#0058BD] text-xs font-bold font-mono">
                  <Clock className="w-3.5 h-3.5 text-[#0058BD]" />
                  <span>{formatTimer(secondsLeft)}</span>
                </div>
              </div>

              {/* Subject & Question Index */}
              <div className="flex items-center justify-between pt-3 pb-1">
                <span className="px-2.5 py-0.5 rounded bg-[#D8E2FF] text-[#004494] text-xs font-bold">
                  Ciências da Natureza
                </span>
                <span className="text-xs font-medium text-[#727785]">Questão 142 de 180</span>
              </div>

              {/* Statement */}
              <p className="text-sm sm:text-base text-[#1A1B1E] font-medium pt-2 leading-relaxed">
                Em um experimento de fotossíntese, a taxa metabólica de uma planta aquática varia conforme a incidência de luz azul e vermelha. Qual pigmento é o principal responsável por essa absorção máxima?
              </p>

              {/* Selectable Options */}
              <div className="flex flex-col gap-2 pt-3">
                {options.map((option) => {
                  const isSelected = selectedOption === option.id;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => {
                        setSelectedOption(option.id);
                        setShowFeedback(false);
                      }}
                      className={`flex items-start justify-between p-2.5 sm:p-3 rounded-xl cursor-pointer text-left transition-all ${
                        isSelected
                          ? 'bg-[#D8E2FF]/70 border-2 border-[#0058BD] shadow-xs'
                          : 'bg-[#F4F3F7] hover:bg-[#EFEDF1] border-2 border-transparent'
                      }`}
                    >
                      <div className="flex items-start gap-3 min-w-0 pr-2">
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 transition-colors ${
                            isSelected
                              ? 'bg-[#0058BD] text-white'
                              : 'bg-[#E3E2E6] text-[#1A1B1E]'
                          }`}
                        >
                          {option.id}
                        </div>
                        <span className={`text-xs sm:text-sm leading-snug break-words ${isSelected ? 'font-semibold text-[#001A41]' : 'text-[#1A1B1E]'}`}>
                          {option.text}
                        </span>
                      </div>
                      <div className="shrink-0 mt-1">
                        {isSelected ? (
                          <CheckCircle2 className="w-4 h-4 text-[#0058BD]" />
                        ) : (
                          <div className="w-4 h-4 rounded-full border border-[#C2C6D5]" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Instant feedback callout */}
              {showFeedback && (
                <div className="mt-3 p-3 rounded-xl bg-[#86F898]/30 border border-[#006E2C]/30 text-[#005320] text-xs space-y-1.5 animate-fadeIn">
                  <div className="flex items-center gap-1.5 font-bold">
                    <CheckCircle2 className="w-4 h-4 text-[#006E2C]" />
                    <span>Resposta Exata! (Opção B)</span>
                  </div>
                  <p className="leading-relaxed text-[#1A1B1E]">
                    As clorofilas a e b possuem picos no azul (430 nm) e vermelho (660 nm), refletindo o verde. Essa questão possui calibração TRI com alta coerência!
                  </p>
                  <button
                    onClick={() => onStartExam('natureza-completo-10q')}
                    className="mt-2 w-full py-2 bg-[#006E2C] text-white font-semibold rounded-lg hover:bg-[#005320] flex items-center justify-center gap-1.5 text-xs transition-colors cursor-pointer"
                  >
                    <span>Fazer Prova Completa de Natureza (10 Questões)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

              {/* Card Controls */}
              {!showFeedback && (
                <div className="mt-4 pt-3 border-t border-[#EFEDF1] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setIsFlagged(!isFlagged)}
                    className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer ${
                      isFlagged
                        ? 'text-[#765700] bg-[#FFDEA0]/40'
                        : 'text-[#727785] hover:text-[#1A1B1E] hover:bg-[#EFEDF1]'
                    }`}
                  >
                    <Bookmark className={`w-3.5 h-3.5 ${isFlagged ? 'fill-[#765700]' : ''}`} />
                    <span>{isFlagged ? 'Marcada' : 'Marcar p/ Revisão'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowFeedback(true)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#006E2C] text-white text-xs sm:text-sm font-semibold shadow-xs hover:bg-[#005320] active:scale-95 transition-all cursor-pointer"
                  >
                    <span>Confirmar Resposta</span>
                    <Check className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
