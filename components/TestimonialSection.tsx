'use client';

import React from 'react';
import { LockOpen, ArrowRight } from 'lucide-react';

interface TestimonialSectionProps {
  onStartExam: () => void;
}

export const TestimonialSection: React.FC<TestimonialSectionProps> = ({
  onStartExam,
}) => {
  return (
    <section className="py-8 pb-16">
      <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-[#D8E2FF]/40 via-[#EFEDF1] to-[#86F898]/20 border border-[#E3E2E6] flex flex-col md:flex-row items-center justify-between gap-8 shadow-xs">
        {/* Quote & Student Profile */}
        <div className="max-w-xl">
          <span className="text-xs uppercase font-bold text-[#0058BD] tracking-wider font-mono">
            Histórias Reais de Sucesso
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-[#1A1B1E] mt-2 leading-relaxed sm:leading-snug font-['Plus_Jakarta_Sans']">
            &ldquo;Consegui 820 de média geral no ENEM praticando apenas 1 simulado por semana no SimulaBrasil.&rdquo;
          </h2>
          <div className="flex items-center gap-3 mt-4">
            <div className="w-10 h-10 rounded-full bg-[#0058BD] text-white flex items-center justify-center font-bold text-sm shadow-xs shrink-0">
              LM
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-[#1A1B1E] leading-snug">
                Lucas Moura da Silva
              </span>
              <span className="text-xs text-[#727785] leading-normal mt-0.5">
                Aprovado em Medicina na USP (Turma 2024) · Estudou com simulados gratuitos
              </span>
            </div>
          </div>
        </div>

        {/* Action Callout Box */}
        <div className="bg-white p-6 rounded-2xl border border-[#E3E2E6] shadow-md flex flex-col gap-3 max-w-sm w-full shrink-0">
          <div className="flex items-center gap-2">
            <LockOpen className="w-4 h-4 text-[#006E2C]" />
            <span className="text-xs font-bold text-[#006E2C] uppercase tracking-wider">
              Acesso 100% Livre
            </span>
          </div>
          <h4 className="text-lg font-bold text-[#1A1B1E] font-['Plus_Jakarta_Sans']">
            Pronto para transformar sua nota?
          </h4>
          <p className="text-xs text-[#424753] leading-relaxed">
            Sem cadastro, sem mensalidades e sem barreiras. Selecione qualquer prova e comece a treinar em menos de 5 segundos.
          </p>
          <button
            type="button"
            onClick={onStartExam}
            className="w-full text-center py-3 bg-[#0058BD] text-white font-semibold text-sm rounded-xl shadow-xs hover:bg-[#2771DF] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Começar Simulado Agora</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
