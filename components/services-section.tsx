"use client";
import React from "react";
import {
  Building2,
  Users,
  Brain,
  Search,
  BarChart3,
  ArrowUpRight,
} from "lucide-react";
import ScrollFloat from "@/components/scroll-float";
import { Section, TagBadge, GoldDivider } from "@/components/ui-utils";
import { useScrollReveal } from "@/components/ui-utils";

const services = [
  {
    icon: Building2,
    title: "Estruturação e Implantação de RH do Zero",
    description:
      "Diagnóstico completo, políticas internas, compliance trabalhista e processos sob medida para sua empresa crescer com base sólida.",
    tag: "Implantação Completa",
    large: true,
  },
  {
    icon: Users,
    title: "Recrutamento Estratégico por Competências",
    description:
      "Método estruturado com DISC/PDA, aderência cultural e shortlist qualificada para suas posições-chave.",
    tag: "Seleção Avançada",
    large: false,
  },
  {
    icon: Brain,
    title: "Treinamento em IA aplicada ao RH",
    description:
      "Capacitação prática: prompts estratégicos, agentes personalizados e automação de processos repetitivos.",
    tag: "IA Prática",
    large: false,
  },
  {
    icon: Search,
    title: "Hunting Especializado",
    description:
      "Mapeamento de mercado, abordagem confidencial e shortlist para posições estratégicas e de liderança.",
    tag: "Executive Search",
    large: false,
  },
  {
    icon: BarChart3,
    title: "Mapeamento Comportamental",
    description:
      "Análise DISC, forças de liderança e devolutiva individual para decisões assertivas de gestão de pessoas.",
    tag: "Assessment",
    large: false,
  },
];

const ServicesSection: React.FC = () => {
  useScrollReveal(".service-card");

  return (
    <Section id="servicos" className="relative">
      <div className="text-center mb-10 sm:mb-16">
        <TagBadge icon={Building2}>Nossos Servicos</TagBadge>
        <ScrollFloat
          as="h2"
          containerClassName="text-2xl sm:text-3xl md:text-5xl font-bold"
          textClassName="font-sans font-bold text-gold uppercase tracking-tight"
        >
          Solucões Estratégicas
        </ScrollFloat>
        <div className="flex justify-center">
          <GoldDivider />
        </div>
      </div>

      {/* Bento grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service, idx) => {
          const Icon = service.icon;
          return (
            <div
              key={idx}
              className={`service-card group bg-black-mid rounded-2xl p-5 sm:p-6 border border-gold/10
                         hover:border-gold/40 hover:shadow-[0_0_20px_rgba(228,199,90,0.15)]
                         hover:scale-105 hover:-translate-y-2
                         transition-all duration-500 ease-out cursor-pointer
                         ${idx === 0 ? "sm:col-span-2 lg:col-span-1 lg:row-span-2" : ""}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-gold/[0.08] border border-gold/20">
                  <Icon size={24} className="text-gold" />
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-gold/0 group-hover:text-gold transition-all duration-300
                             group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
              <h3 className="font-sans font-bold text-gold text-lg mb-3 leading-tight">
                {service.title}
              </h3>
              <p className="font-sans text-white-ice/70 text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <span className="inline-block px-3 py-1 rounded-full bg-gold/[0.08] border border-gold/20 text-gold text-xs font-sans font-medium tracking-wide">
                {service.tag}
              </span>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default ServicesSection;
