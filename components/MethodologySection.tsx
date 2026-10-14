'use client';

import React from 'react';
import { BarChart3, CheckCircle2, GraduationCap } from 'lucide-react';

export const MethodologySection: React.FC = () => {
  const pillars = [
    {
      icon: <BarChart3 className="w-6 h-6 text-[#0058BD]" />,
      title: 'Algoritmo TRI Idêntico ao MEC',
      description:
        'Nosso sistema calcula a consistência pedagógica das suas respostas, calibrando os parâmetros da Teoria de Resposta ao Item para simular com precisão a nota oficial do INEP.',
      iconBg: 'bg-[#D8E2FF]',
      borderColor: 'hover:border-[#0058BD]',
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-[#006E2C]" />,
      title: 'Resoluções e Gabarito Comentado',
      description:
        'Errou uma questão? Acesse a justificativa detalhada que desmistifica os distratores, aponta as pegadinhas e ensina o raciocínio correto passo a passo.',
      iconBg: 'bg-[#86F898]',
      borderColor: 'hover:border-[#006E2C]',
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-[#765700]" />,
      title: 'Alinhado à BNCC do 6º Ano ao Médio',
      description:
        'Habilidades calibradas para cada etapa escolar. Alunos do Fundamental preparam-se para Saeb e Prova Paulista, enquanto vestibulandos treinam para Fuvest e ENEM.',
      iconBg: 'bg-[#FFDEA0]',
      borderColor: 'hover:border-[#FBBC05]',
    },
  ];

  return (
    <section className="py-8 sm:py-12">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <span className="text-xs uppercase font-bold text-[#0058BD] tracking-widest font-mono">
          Nossa Metodologia
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1B1E] mt-1.5 font-['Plus_Jakarta_Sans'] leading-tight">
          Por que estudar com o SimulaBrasil?
        </h2>
        <p className="text-sm text-[#424753] mt-2 leading-relaxed">
          A metodologia mais avançada a serviço da sua aprovação, desenhada por educadores e professores especialistas de todo o país.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pillars.map((pillar, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-2xl bg-white border border-[#E3E2E6] shadow-xs flex flex-col gap-3 transition-all duration-300 ${pillar.borderColor} hover:shadow-md`}
          >
            <div
              className={`w-12 h-12 rounded-2xl ${pillar.iconBg} flex items-center justify-center shrink-0 shadow-xs`}
            >
              {pillar.icon}
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[#1A1B1E] font-['Plus_Jakarta_Sans'] leading-snug">
              {pillar.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#424753] leading-relaxed">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
