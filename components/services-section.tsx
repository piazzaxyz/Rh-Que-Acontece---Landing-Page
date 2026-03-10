"use client";
import React from "react";
import {
  Building2,
  Users,
  Brain,
  BarChart3,
  ArrowUpRight,
} from "lucide-react";
import ScrollFloat from "@/components/scroll-float";
import { Section, TagBadge, GoldDivider } from "@/components/ui-utils";
import { useScrollReveal } from "@/components/ui-utils";

const services = [
  {
    icon: Building2,
    title: "Diagnóstico e Implementação de RH",
    description:
      "Diagnóstico completo, políticas internas, compliance trabalhista e processos sob medida para sua empresa crescer com base sólida.",
    tag: "Implantação Completa",
    href: "#servicos",
  },
  {
    icon: Users,
    title: "Recrutamento e Seleção",
    description:
      "Método estruturado com DISC/PDA, aderência cultural e shortlist qualificada para suas posições-chave.",
    tag: "Seleção por Competências",
    href: "#recrutamento",
  },
  {
    icon: Brain,
    title: "IA Aplicada ao RH (Treinamentos)",
    description:
      "Capacitação prática: prompts estratégicos, agentes personalizados e automação de processos repetitivos.",
    tag: "Capacitação em IA",
    href: "#treinamento-ia",
  },
  {
    icon: BarChart3,
    title: "Mapeamento Comportamental e Perfil",
    description:
      "Análise DISC, forças de liderança e devolutiva individual para decisões assertivas de gestão de pessoas.",
    tag: "Assessment",
    href: "#recrutamento",
  },
];

const ServicesSection: React.FC = () => {
  useScrollReveal(".service-card");

  return (
    <Section id="servicos" className="relative">
      <div className="text-center mb-10 sm:mb-16">
        <TagBadge icon={Building2}>Nossos Serviços</TagBadge>
        <ScrollFloat
          as="h2"
          containerClassName="text-2xl sm:text-3xl md:text-5xl font-bold"
          textClassName="font-sans font-bold text-gold uppercase tracking-tight"
        >
          Soluções Estratégicas
        </ScrollFloat>
        <div className="flex justify-center">
          <GoldDivider />
        </div>
      </div>

      {/* Grid 2x2 layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-3xl mx-auto">
        {services.map((service, idx) => {
          const Icon = service.icon;
          return (
            <a
              key={idx}
              href={service.href}
              className="service-card group bg-black-mid rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-gold/10
                         hover:border-gold/40 hover:shadow-[0_0_20px_rgba(228,199,90,0.15)]
                         hover:scale-[1.02] hover:-translate-y-1
                         transition-all duration-500 ease-out cursor-pointer"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gold/[0.08] border border-gold/20">
                  <Icon size={20} className="text-gold sm:w-6 sm:h-6" />
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-gold/0 group-hover:text-gold transition-all duration-300
                             group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
              <h3 className="font-sans font-bold text-gold text-base sm:text-lg mb-2 leading-tight">
                {service.title}
              </h3>
              <p className="font-sans text-white-ice/70 text-xs sm:text-sm leading-relaxed mb-3">
                {service.description}
              </p>
              <span className="inline-block px-3 py-1 rounded-full bg-gold/[0.08] border border-gold/20 text-gold text-xs font-sans font-medium tracking-wide">
                {service.tag}
              </span>
            </a>
          );
        })}
      </div>
    </Section>
  );
};

export default ServicesSection;
