"use client";
import React from "react";
import { BookOpen, Crown, ArrowUpRight, Clock } from "lucide-react";
import ScrollFloat from "@/components/scroll-float";
import { Section, TagBadge, GoldDivider } from "@/components/ui-utils";
import { useScrollReveal } from "@/components/ui-utils";

const upcomingEbooks = [
  "Guia Prático de Estruturação de RH",
  "Templates de Processos de RH",
  "Manual de Recrutamento por Competências",
  "Prompts de IA para RH",
  "Checklist de Compliance Trabalhista",
];

const MaterialsSection: React.FC = () => {
  useScrollReveal(".material-card");

  return (
    <Section id="materiais">
      <div className="text-center mb-10 sm:mb-16">
        <TagBadge icon={BookOpen}>Conhecimento</TagBadge>
        <ScrollFloat
          as="h2"
          containerClassName="text-2xl sm:text-3xl md:text-5xl font-bold"
          textClassName="font-sans font-bold text-gold uppercase tracking-tight"
        >
          Materiais e eBooks
        </ScrollFloat>
        <div className="flex justify-center">
          <GoldDivider />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 max-w-3xl mx-auto">
        {/* Free card */}
        <div
          className="material-card group relative bg-black-mid rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-[#27C93F]/30
                     hover:border-[#27C93F]/50 hover:shadow-[0_0_20px_rgba(39,201,63,0.1)]
                     hover:scale-[1.02] hover:-translate-y-1
                     transition-all duration-500 ease-out"
        >
          <span className="absolute top-3 right-3 sm:top-4 sm:right-4 px-2 sm:px-3 py-1 rounded-full bg-[#27C93F]/10 border border-[#27C93F]/30 text-[#27C93F] text-[10px] sm:text-xs font-sans font-bold uppercase tracking-wider">
            Gratuito
          </span>
          <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gold/[0.08] border border-gold/20 w-fit mb-4 sm:mb-5">
            <BookOpen size={24} className="text-gold" />
          </div>
          <h3 className="font-sans font-bold text-white-ice text-lg sm:text-xl mb-2">
            {"Material Gratuito"}
          </h3>
          <p className="font-sans font-semibold text-gold text-sm sm:text-base mb-2 sm:mb-3">
            {"Checklist de Estruturação de RH"}
          </p>
          <p className="font-sans text-white-ice/60 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5">
            {"Um guia rápido e prático para você começar a organizar seu RH com os primeiros passos essenciais."}
          </p>
          <a
            href="#lead-form"
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl
                       border-2 border-gold text-gold font-sans font-bold text-xs sm:text-sm
                       hover:bg-gold/10 transition-all duration-300"
          >
            {"Baixar Gratuitamente"}
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Premium card - Em Breve */}
        <div
          className="material-card group relative bg-black-mid rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-gold/30
                     opacity-90"
        >
          <span className="absolute top-3 right-3 sm:top-4 sm:right-4 px-2 sm:px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-[10px] sm:text-xs font-sans font-bold uppercase tracking-wider flex items-center gap-1.5">
            <Clock size={10} className="sm:w-3 sm:h-3" />
            Em Breve
          </span>
          <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gold/[0.08] border border-gold/20 w-fit mb-4 sm:mb-5">
            <Crown size={24} className="text-gold" />
          </div>
          <h3 className="font-sans font-bold text-white-ice text-lg sm:text-xl mb-2">
            {"eBooks & Materiais Completos"}
          </h3>
          <p className="font-sans font-semibold text-gold text-sm sm:text-base mb-3">
            {"Conteúdo aprofundado com método"}
          </p>
          
          <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-5">
            {upcomingEbooks.map((ebook, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gold/50" />
                <span className="font-sans text-white-ice/50 text-xs sm:text-sm">
                  {ebook}
                </span>
              </div>
            ))}
          </div>
          
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl
                       bg-gold/10 border border-gold/30
                       text-gold/60 font-sans font-bold text-xs sm:text-sm cursor-not-allowed"
          >
            {"Disponível em breve"}
            <Clock size={14} className="sm:w-4 sm:h-4" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default MaterialsSection;
