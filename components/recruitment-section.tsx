"use client";
import React from "react";
import { Target, Search, Users, BarChart3, CheckCircle2 } from "lucide-react";
import ScrollFloat from "@/components/scroll-float";
import { Section, TagBadge, GoldDivider } from "@/components/ui-utils";
import { useScrollReveal } from "@/components/ui-utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const recruitmentItems = [
  {
    icon: Target,
    title: "Recrutamento & Seleção por Competências",
    deliveries: [
      "Mapeamento de competências técnicas e comportamentais",
      "Entrevistas estruturadas por competências",
      "Aplicação de testes DISC/PDA",
      "Relatório de aderência cultural",
    ],
    objective: "Contratar certo da primeira vez, reduzindo turnover e custos.",
    badge: "Redução de 40% no turnover",
  },
  {
    icon: Search,
    title: "Hunting Especializado",
    deliveries: [
      "Mapeamento de mercado e benchmark salarial",
      "Abordagem confidencial e personalizada",
      "Shortlist com top 3-5 candidatos qualificados",
      "Acompanhamento pós-contratação por 90 dias",
    ],
    objective:
      "Identificar e atrair talentos estratégicos para posições de liderança.",
    badge: "Posições estratégicas",
  },
  {
    icon: Users,
    title: "Mapeamento de Perfis Comportamentais",
    deliveries: [
      "Avaliação DISC completa da equipe",
      "Identificação de forças e áreas de desenvolvimento",
      "Devolutiva individual e coletiva",
      "Plano de ação para gestão de talentos",
    ],
    objective: "Compreender o time para potencializar resultados.",
    badge: "Assessment completo",
  },
  {
    icon: BarChart3,
    title: "Análise de Compatibilidade %",
    deliveries: [
      "Cruzamento de perfil comportamental x cargo",
      "Score de aderência à cultura organizacional",
      "Recomendações de fit e gap analysis",
      "Relatório executivo para decisão",
    ],
    objective: "Embasar decisões de contratação e promoção com dados.",
    badge: "Data-driven hiring",
  },
];

const RecruitmentSection: React.FC = () => {
  useScrollReveal(".recruit-reveal");

  return (
    <Section id="recrutamento">
      <div className="text-center mb-10 sm:mb-16">
        <TagBadge icon={Target}>Recrutamento Estrategico</TagBadge>
        <ScrollFloat
          as="h2"
          containerClassName="text-2xl sm:text-3xl md:text-5xl font-bold"
          textClassName="font-sans font-bold text-gold uppercase tracking-tight"
        >
          Contratacões que Transformam
        </ScrollFloat>
        <div className="flex justify-center">
          <GoldDivider />
        </div>
      </div>

      <div className="recruit-reveal max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {recruitmentItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="bg-black-mid rounded-xl border border-gold/10 px-4 sm:px-6 overflow-hidden
                           data-[state=open]:border-gold/30 transition-colors"
              >
                <AccordionTrigger className="hover:no-underline py-5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gold/[0.08]">
                      <Icon size={20} className="text-gold" />
                    </div>
                    <span className="font-sans font-semibold text-white-ice text-base text-left">
                      {item.title}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      {item.deliveries.map((delivery, dIdx) => (
                        <div
                          key={dIdx}
                          className="flex items-start gap-2"
                        >
                          <CheckCircle2
                            size={14}
                            className="text-gold mt-0.5 shrink-0"
                          />
                          <span className="font-sans text-white-ice/80 text-sm">
                            {delivery}
                          </span>
                        </div>
                      ))}
                    </div>
                    <p className="font-sans text-gray-mid text-sm italic">
                      {item.objective}
                    </p>
                    <span className="inline-block px-3 py-1 rounded-full bg-gold/[0.08] border border-gold/20 text-gold text-xs font-sans font-medium">
                      {item.badge}
                    </span>
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </Section>
  );
};

export default RecruitmentSection;
