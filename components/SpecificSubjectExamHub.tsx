'use client';

import React, { useState } from 'react';
import {
  BookOpen,
  Calculator,
  Compass,
  Globe2,
  Dna,
  Zap,
  FlaskConical,
  Languages,
  Play,
  Clock,
  Sparkles,
  ArrowRight,
  Sliders,
  CheckCircle2,
} from 'lucide-react';

interface SpecificSubjectExamHubProps {
  onStartExam: (examId: string) => void;
  onFilterSubjectGrid?: (subjectName: string) => void;
}

interface SubjectItem {
  id: string;
  name: string;
  shortName: string;
  icon: React.ReactNode;
  themeColor: string;
  badgeBg: string;
  badgeText: string;
  borderColor: string;
  description: string;
  topics: string[];
  exams: {
    q5: string;
    q10: string;
    q20?: string;
  };
}

export const SpecificSubjectExamHub: React.FC<SpecificSubjectExamHubProps> = ({
  onStartExam,
  onFilterSubjectGrid,
}) => {
  const subjects: SubjectItem[] = [
    {
      id: 'portugues',
      name: 'Língua Portuguesa & Literatura',
      shortName: 'Português',
      icon: <BookOpen className="w-5 h-5 text-white" />,
      themeColor: '#BA1A1A',
      badgeBg: 'bg-[#FFDAD6]',
      badgeText: 'text-[#93000A]',
      borderColor: 'border-[#BA1A1A]',
      description: 'Interpretação textual crítica, variação linguística, sintaxe, concordância e obras canônicas da literatura brasileira.',
      topics: ['Interpretação Textual', 'Concordância & Regência', 'Figuras de Linguagem', 'Literatura Brasileira'],
      exams: {
        q5: 'portugues-rapido-5q',
        q10: 'portugues-especial-10q',
        q20: 'portugues-maratona-20q',
      },
    },
    {
      id: 'matematica',
      name: 'Matemática & Raciocínio',
      shortName: 'Matemática',
      icon: <Calculator className="w-5 h-5 text-white" />,
      themeColor: '#0058BD',
      badgeBg: 'bg-[#D8E2FF]',
      badgeText: 'text-[#001A41]',
      borderColor: 'border-[#0058BD]',
      description: 'Álgebra, porcentagem, equações, geometria plana e espacial, combinatória e resolução de problemas práticos.',
      topics: ['Porcentagem & Frações', 'Geometria Plana & Espacial', 'Funções & Álgebra', 'Probabilidade & Estatística'],
      exams: {
        q5: 'matematica-express-5q',
        q10: 'matematica-focado-10q',
        q20: 'matematica-maratona-20q',
      },
    },
    {
      id: 'historia',
      name: 'História do Brasil & Geral',
      shortName: 'História',
      icon: <Compass className="w-5 h-5 text-white" />,
      themeColor: '#765700',
      badgeBg: 'bg-[#FFDEA0]',
      badgeText: 'text-[#5C4300]',
      borderColor: 'border-[#765700]',
      description: 'Brasil Colônia, Era Vargas, Ditadura Militar, Revolução Francesa, Feudalismo, Cidadania e Nova República.',
      topics: ['Brasil República & Ditadura', 'Era Vargas & Trabalhismo', 'Revoluções Burguesas', 'Cidadania & Direitos'],
      exams: {
        q5: 'historia-rapido-5q',
        q10: 'historia-focado-10q',
        q20: 'historia-maratona-20q',
      },
    },
    {
      id: 'geografia',
      name: 'Geografia do Brasil & Física',
      shortName: 'Geografia',
      icon: <Globe2 className="w-5 h-5 text-white" />,
      themeColor: '#006E2C',
      badgeBg: 'bg-[#86F898]',
      badgeText: 'text-[#005320]',
      borderColor: 'border-[#006E2C]',
      description: 'Biomas brasileiros (Cerrado, Caatinga, Amazônia), dinâmicas climáticas, matriz energética, urbanização e geopolítica.',
      topics: ['Biomas & Climatologia', 'Urbanização & Metropolização', 'Matriz Energética', 'Geopolítica Global'],
      exams: {
        q5: 'geografia-rapido-5q',
        q10: 'geografia-focado-10q',
        q20: 'geografia-maratona-20q',
      },
    },
    {
      id: 'biologia',
      name: 'Biologia & Ciências da Vida',
      shortName: 'Biologia',
      icon: <Dna className="w-5 h-5 text-white" />,
      themeColor: '#006E2C',
      badgeBg: 'bg-[#D1E8D5]',
      badgeText: 'text-[#004A1C]',
      borderColor: 'border-[#006E2C]',
      description: 'Citologia, fotossíntese, genética mendeliana, ecologia trófica, imunologia (vacinas) e fisiologia humana.',
      topics: ['Genética & Biotecnologia', 'Ecologia & Eutrofização', 'Citologia & Fotossíntese', 'Fisiologia & Imunidade'],
      exams: {
        q5: 'biologia-rapido-5q',
        q10: 'biologia-focado-10q',
        q20: 'biologia-maratona-20q',
      },
    },
    {
      id: 'fisica',
      name: 'Física Clássica & Moderna',
      shortName: 'Física',
      icon: <Zap className="w-5 h-5 text-white" />,
      themeColor: '#0058BD',
      badgeBg: 'bg-[#E0E7FF]',
      badgeText: 'text-[#1E1B4B]',
      borderColor: 'border-[#0058BD]',
      description: 'Cinemática, Leis de Newton, trabalho e energia, eletrodinâmica, calorimetria, óptica geométrica e ondulatória.',
      topics: ['Eletrodinâmica & Circuitos', 'Mecânica & Energia', 'Ondulatória & Doppler', 'Calorimetria & Óptica'],
      exams: {
        q5: 'fisica-rapido-5q',
        q10: 'fisica-focado-10q',
        q20: 'fisica-maratona-20q',
      },
    },
    {
      id: 'quimica',
      name: 'Química Geral & Orgânica',
      shortName: 'Química',
      icon: <FlaskConical className="w-5 h-5 text-white" />,
      themeColor: '#2771DF',
      badgeBg: 'bg-[#CFE5FF]',
      badgeText: 'text-[#002D62]',
      borderColor: 'border-[#2771DF]',
      description: 'Cálculo estequiométrico, soluções, equilíbrio químico, funções orgânicas, pilhas eletroquímicas e termoquímica.',
      topics: ['Estequiometria & Soluções', 'Química Orgânica', 'Equilíbrio & Le Chatelier', 'Eletroquímica & Pilhas'],
      exams: {
        q5: 'quimica-rapido-5q',
        q10: 'quimica-focado-10q',
        q20: 'quimica-maratona-20q',
      },
    },
    {
      id: 'ingles',
      name: 'Língua Inglesa (ENEM)',
      shortName: 'Inglês',
      icon: <Languages className="w-5 h-5 text-white" />,
      themeColor: '#0058BD',
      badgeBg: 'bg-[#EAE8FD]',
      badgeText: 'text-[#2E1065]',
      borderColor: 'border-[#0058BD]',
      description: 'Leitura e compreensão de textos autênticos em inglês, conectivos (linking words), falsos amigos e gramática contextual.',
      topics: ['Linking Words & Conectivos', 'False Friends (Falsos Cognatos)', 'Leitura Crítica Internacional', 'Modal Verbs & Voz Passiva'],
      exams: {
        q5: 'ingles-rapido-5q',
        q10: 'ingles-focado-10q',
      },
    },
  ];

  const [activeSubjectId, setActiveSubjectId] = useState<string>('portugues');
  const [selectedQuestionsCount, setSelectedQuestionsCount] = useState<5 | 10 | 20>(10);

  const activeSubject = subjects.find((s) => s.id === activeSubjectId) || subjects[0];

  const handleLaunchQuickExam = () => {
    if (selectedQuestionsCount === 20 && activeSubject.exams.q20) {
      onStartExam(activeSubject.exams.q20);
    } else if (selectedQuestionsCount === 5) {
      onStartExam(activeSubject.exams.q5);
    } else {
      onStartExam(activeSubject.exams.q10);
    }
  };

  return (
    <section className="py-8" id="materias-exclusivas-section">
      <div className="bg-gradient-to-br from-white to-[#F9F8FD] rounded-3xl border border-[#E3E2E6] p-6 sm:p-8 shadow-sm">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#EFEDF1]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D8E2FF] text-[#001A41] text-xs font-bold mb-2 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#0058BD]" />
              <span>Simulados por Matéria Individual</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1B1E] font-['Plus_Jakarta_Sans'] leading-tight">
              Provas de Matérias Específicas
            </h2>
            <p className="text-sm text-[#424753] mt-1.5 leading-relaxed max-w-2xl">
              Treine cada matéria <strong>completamente sozinha</strong>: escolha a disciplina e resolva provas no formato de <strong>5</strong>, <strong>10</strong> ou <strong>20 questões</strong> com gabarito comentado.
            </p>
          </div>

          {/* Quick Start Controller Box */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 p-2 bg-[#F4F3F7] rounded-2xl border border-[#E3E2E6] shrink-0">
            <div className="flex items-center gap-1.5 px-2 text-xs font-bold text-[#1A1B1E]">
              <Sliders className="w-4 h-4 text-[#0058BD]" />
              <span className="hidden sm:inline">Tamanho:</span>
            </div>
            <div className="flex items-center gap-1">
              {[5, 10, 20].map((count) => {
                const isSelected = selectedQuestionsCount === count;
                const isDisabled = count === 20 && !activeSubject.exams.q20;
                return (
                  <button
                    key={count}
                    disabled={isDisabled}
                    onClick={() => setSelectedQuestionsCount(count as any)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#0058BD] text-white shadow-xs'
                        : isDisabled
                        ? 'opacity-40 cursor-not-allowed bg-transparent text-[#727785]'
                        : 'bg-white text-[#424753] hover:bg-white/80'
                    }`}
                  >
                    {count} Questões
                  </button>
                );
              })}
            </div>
            <button
              onClick={handleLaunchQuickExam}
              className="w-full sm:w-auto px-4 py-2 bg-[#006E2C] hover:bg-[#005320] text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs transition-colors cursor-pointer"
            >
              <span>Iniciar {activeSubject.shortName} ({selectedQuestionsCount}Q)</span>
              <Play className="w-3.5 h-3.5 fill-white" />
            </button>
          </div>
        </div>

        {/* Subjects Selector Pills Carousel */}
        <div className="pt-6">
          <div className="text-xs font-bold text-[#727785] uppercase tracking-wider mb-3">
            Escolha a matéria para praticar:
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
            {subjects.map((sub) => {
              const isSelected = activeSubjectId === sub.id;
              return (
                <button
                  key={sub.id}
                  onClick={() => setActiveSubjectId(sub.id)}
                  className={`flex flex-col items-center justify-center p-3 rounded-2xl border transition-all text-center cursor-pointer ${
                    isSelected
                      ? 'bg-white shadow-md border-2 scale-[1.03] z-10'
                      : 'bg-[#F4F3F7]/80 border-transparent hover:bg-white hover:border-[#E3E2E6]'
                  }`}
                  style={{
                    borderColor: isSelected ? sub.themeColor : undefined,
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-1.5 shadow-2xs transition-transform"
                    style={{ backgroundColor: sub.themeColor }}
                  >
                    {sub.icon}
                  </div>
                  <span className={`text-xs font-bold leading-tight ${isSelected ? 'text-[#1A1B1E]' : 'text-[#424753]'}`}>
                    {sub.shortName}
                  </span>
                  <span className="text-[10px] text-[#727785] mt-0.5 leading-none">
                    {sub.exams.q20 ? '5, 10 e 20Q' : '5 e 10Q'}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Subject Showcase & Direct Action Panel */}
        <div className="mt-6 p-5 sm:p-6 bg-white rounded-2xl border border-[#E3E2E6] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Subject Info */}
            <div className="lg:col-span-7 flex flex-col gap-3">
              <div className="flex items-center gap-2.5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-2xs"
                  style={{ backgroundColor: activeSubject.themeColor }}
                >
                  {activeSubject.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-[#1A1B1E] font-['Plus_Jakarta_Sans'] leading-tight">
                      {activeSubject.name}
                    </h3>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${activeSubject.badgeBg} ${activeSubject.badgeText}`}>
                      100% Isolada
                    </span>
                  </div>
                  <p className="text-xs text-[#727785] mt-0.5 leading-normal">
                    Banco de questões exclusivo da matéria sem misturar com outras disciplinas
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#424753] leading-relaxed">
                {activeSubject.description}
              </p>

              {/* Topics Pills */}
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                <span className="text-[11px] font-bold text-[#1A1B1E] mr-1">Tópicos:</span>
                {activeSubject.topics.map((t, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 text-[11px] font-medium bg-[#F4F3F7] text-[#424753] px-2.5 py-0.5 rounded-lg border border-[#E3E2E6]"
                  >
                    <CheckCircle2 className="w-3 h-3 text-[#006E2C]" />
                    <span>{t}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Direct Instant Launch Exam Options */}
            <div className="lg:col-span-5 flex flex-col gap-2.5 border-t lg:border-t-0 lg:border-l border-[#EFEDF1] pt-4 lg:pt-0 lg:pl-6">
              <span className="text-xs font-bold text-[#1A1B1E] flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#0058BD]" />
                <span>Escolha a extensão e comece agora:</span>
              </span>

              {/* 5 Questions button */}
              <button
                onClick={() => onStartExam(activeSubject.exams.q5)}
                className="group flex items-center justify-between p-3 rounded-xl border border-[#E3E2E6] hover:border-[#0058BD] bg-[#FAF9FD] hover:bg-[#D8E2FF]/20 transition-all text-left cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#E3E2E6] group-hover:bg-[#0058BD] text-[#1A1B1E] group-hover:text-white flex items-center justify-center font-bold text-xs transition-colors shrink-0">
                    5Q
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-[#1A1B1E] leading-tight">
                      Mini-Simulado Express (5 Questões)
                    </div>
                    <div className="text-[11px] text-[#727785] leading-normal">
                      ~15 minutos · Treino rápido diário
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs font-bold text-[#0058BD]">
                  <span>Fazer</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </button>

              {/* 10 Questions button */}
              <button
                onClick={() => onStartExam(activeSubject.exams.q10)}
                className="group flex items-center justify-between p-3 rounded-xl border-2 border-[#0058BD] bg-[#D8E2FF]/30 hover:bg-[#D8E2FF]/50 transition-all text-left cursor-pointer shadow-2xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0058BD] text-white flex items-center justify-center font-bold text-xs transition-colors shrink-0 shadow-2xs">
                    10Q
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-[#001A41] leading-tight">
                      Simulado Padrão (10 Questões)
                    </div>
                    <div className="text-[11px] text-[#004494] leading-normal">
                      ~30 minutos · Cobertura completa mais popular
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs font-bold text-[#0058BD]">
                  <span>Fazer</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </button>

              {/* 20 Questions button (if available) */}
              {activeSubject.exams.q20 && (
                <button
                  onClick={() => onStartExam(activeSubject.exams.q20!)}
                  className="group flex items-center justify-between p-3 rounded-xl border border-[#E3E2E6] hover:border-[#BA1A1A] bg-[#FAF9FD] hover:bg-[#FFDAD6]/20 transition-all text-left cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#E3E2E6] group-hover:bg-[#BA1A1A] text-[#1A1B1E] group-hover:text-white flex items-center justify-center font-bold text-xs transition-colors shrink-0">
                      20Q
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-[#1A1B1E] leading-tight">
                        Super Maratona Aprofundada (20 Questões)
                      </div>
                      <div className="text-[11px] text-[#727785] leading-normal">
                        ~55 minutos · Alta densidade e foco total
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-bold text-[#BA1A1A]">
                    <span>Fazer</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
