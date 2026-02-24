"use client";
import React from "react";
import { BookOpen, Crown, ArrowUpRight } from "lucide-react";
import ScrollFloat from "@/components/scroll-float";
import { Section, TagBadge, GoldDivider } from "@/components/ui-utils";
import { useScrollReveal } from "@/components/ui-utils";

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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-4xl mx-auto">
        {/* Free card */}
        <div
          className="material-card group relative bg-black-mid rounded-2xl p-6 sm:p-8 border border-[#27C93F]/30
                     hover:border-[#27C93F]/50 hover:shadow-[0_0_20px_rgba(39,201,63,0.1)]
                     hover:scale-105 hover:-translate-y-2
                     transition-all duration-500 ease-out"
        >
          <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#27C93F]/10 border border-[#27C93F]/30 text-[#27C93F] text-xs font-sans font-bold uppercase tracking-wider">
            Free
          </span>
          <div className="p-3 rounded-xl bg-gold/[0.08] border border-gold/20 w-fit mb-6">
            <BookOpen size={28} className="text-gold" />
          </div>
          <h3 className="font-sans font-bold text-white-ice text-xl mb-2">
            {"Materiais Gratuitos"}
          </h3>
          <p className="font-sans font-semibold text-gold text-base mb-3">
            {"Manual de Implantação de RH do Zero"}
          </p>
          <p className="font-sans text-white-ice/60 text-sm leading-relaxed mb-6">
            {"Checklists, guias, modelos práticos para estruturar seu RH com base técnica e estratégica."}
          </p>
          <a
            href="#lead-form"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                       border-2 border-gold text-gold font-sans font-bold text-sm
                       hover:bg-gold/10 transition-all duration-300"
          >
            {"Baixar Gratuitamente"}
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Premium card */}
        <div
          className="material-card group relative bg-black-mid rounded-2xl p-6 sm:p-8 border border-gold/30
                     hover:border-gold/50 hover:shadow-[0_0_20px_rgba(228,199,90,0.15)]
                     hover:scale-105 hover:-translate-y-2
                     transition-all duration-500 ease-out"
        >
          <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-sans font-bold uppercase tracking-wider">
            Exclusivo
          </span>
          <div className="p-3 rounded-xl bg-gold/[0.08] border border-gold/20 w-fit mb-6">
            <Crown size={28} className="text-gold" />
          </div>
          <h3 className="font-sans font-bold text-white-ice text-xl mb-2">
            {"eBooks & Materiais Completos"}
          </h3>
          <p className="font-sans font-semibold text-gold text-base mb-3">
            {"Conteúdo aprofundado com método"}
          </p>
          <p className="font-sans text-white-ice/60 text-sm leading-relaxed mb-6">
            {"Prompts de IA, modelos editáveis, estruturação completa de RH e guias de recrutamento."}
          </p>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                       bg-gradient-to-r from-gold-dark to-gold
                       text-black-deep font-sans font-bold text-sm
                       hover:shadow-[0_0_20px_rgba(228,199,90,0.4)] transition-all duration-300"
          >
            {"Ver Materiais Disponíveis"}
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </Section>
  );
};

export default MaterialsSection;
