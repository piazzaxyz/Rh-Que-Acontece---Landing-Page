"use client";
import React from "react";
import { Blocks, Handshake, Zap } from "lucide-react";
import ScrollFloat from "@/components/scroll-float";
import { Section, GoldDivider } from "@/components/ui-utils";
import { useScrollReveal } from "@/components/ui-utils";

const pillars = [
  {
    icon: Blocks,
    title: "Método",
    description: "Estrutura com base técnica sólida",
  },
  {
    icon: Handshake,
    title: "Estratégia",
    description: "Gestão orientada a resultados",
  },
  {
    icon: Zap,
    title: "Tecnologia",
    description: "IA como acelerador humano",
  },
];

const PurposeSection: React.FC = () => {
  useScrollReveal(".pillar-card");

  return (
    <Section id="proposito">
      <div className="text-center mb-10 sm:mb-16">
        <ScrollFloat
          as="h2"
          containerClassName="text-2xl sm:text-3xl md:text-5xl font-bold"
          textClassName="text-gold font-serif"
        >
          De RH para RH
        </ScrollFloat>
        <div className="flex justify-center">
          <GoldDivider />
        </div>
        <p className="font-sans text-white-ice/80 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed text-pretty">
          {"A RH que Acontece nasceu para transformar a forma como empresas aplicam Gestão de Pessoas, Processos e Inteligência Artificial no dia a dia."}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pillars.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <div
              key={idx}
              className="pillar-card bg-black-mid rounded-xl p-6 border-l-[3px] border-l-gold
                         border border-gold/10
                         hover:border-gold/30 hover:shadow-[0_0_20px_rgba(228,199,90,0.15)]
                         hover:scale-105 hover:-translate-y-2
                         transition-all duration-500 ease-out cursor-pointer"
            >
              <Icon size={28} className="text-gold mb-4" />
              <h3 className="font-sans font-bold text-gold text-lg uppercase tracking-wide mb-2">
                {pillar.title}
              </h3>
              <p className="font-sans text-white-ice/80 text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default PurposeSection;
