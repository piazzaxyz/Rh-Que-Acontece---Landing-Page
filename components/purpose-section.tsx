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
    <Section id="proposito" className="pt-40 sm:pt-48 min-h-[100vh] flex items-center">
      <div className="w-full">
      <div className="text-center mb-10 sm:mb-16">
        <h2 className="text-gold text-4xl sm:text-5xl md:text-7xl mb-4" style={{ fontFamily: 'var(--font-display)' }}>
          De <span className="italic">RH</span> para <span className="italic">RH</span>
        </h2>
        <div className="flex justify-center">
          <GoldDivider />
        </div>
        <p className="font-sans text-white-ice/80 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed text-pretty mb-6">
          {"Surgimos da necessidade real de organizações que precisam de um RH mais estratégico, organizado e alinhado às transformações do mercado — capaz de utilizar tecnologia como apoio, sem perder o foco humano."}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
        {pillars.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <div
              key={idx}
              className="pillar-card bg-black-mid rounded-xl p-4 sm:p-5 border-l-[3px] border-l-gold
                         border border-gold/10
                         hover:border-gold/30 hover:shadow-[0_0_20px_rgba(228,199,90,0.15)]
                         hover:scale-[1.02] hover:-translate-y-1
                         transition-all duration-500 ease-out cursor-pointer"
            >
              <Icon size={24} className="text-gold mb-3" />
              <h3 className="font-sans font-bold text-gold text-base sm:text-lg uppercase tracking-wide mb-1.5 sm:mb-2">
                {pillar.title}
              </h3>
              <p className="font-sans text-white-ice/80 text-xs sm:text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          );
        })}
      </div>
      </div>
    </Section>
  );
};

export default PurposeSection;
