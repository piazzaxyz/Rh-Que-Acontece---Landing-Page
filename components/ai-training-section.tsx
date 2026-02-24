"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Bot, CheckCircle2, Zap, Target } from "lucide-react";
import ScrollFloat from "@/components/scroll-float";
import { Section, TagBadge, GoldDivider } from "@/components/ui-utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const terminalLines = [
  "> Analisando gaps do seu RH...",
  "> Criando prompts estratégicos...",
  "> Automatizando processos repetitivos...",
  "> Liberando tempo para o que importa: pessoas",
];

const benefits = [
  "Criação de prompts estratégicos",
  "Agentes personalizados para RH",
  "Automação de processos repetitivos",
  "Relatórios inteligentes",
  "Mais foco em pessoas e decisões",
];

const AITrainingSection: React.FC = () => {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const terminalRef = useRef<HTMLDivElement>(null);
  const hasTriggered = useRef(false);

  useEffect(() => {
    if (!terminalRef.current) return;

    ScrollTrigger.create({
      trigger: terminalRef.current,
      start: "top 80%",
      onEnter: () => {
        if (hasTriggered.current) return;
        hasTriggered.current = true;

        terminalLines.forEach((line, idx) => {
          setTimeout(() => {
            setDisplayedLines((prev) => [...prev, line]);
          }, idx * 800);
        });
      },
    });
  }, []);

  return (
    <Section id="treinamento-ia">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text content */}
        <div>
          <TagBadge icon={Bot}>IA Aplicada ao RH</TagBadge>

          <div className="mb-2">
            <ScrollFloat
              as="h2"
              containerClassName="text-2xl sm:text-3xl md:text-4xl font-bold"
              textClassName="font-sans font-bold text-gold uppercase tracking-tight"
            >
              Menos burocracia.
            </ScrollFloat>
          </div>
          <ScrollFloat
            as="h2"
            containerClassName="text-2xl sm:text-3xl md:text-4xl font-bold mb-6"
            textClassName="font-sans font-bold text-gold uppercase tracking-tight"
          >
            Mais estratégia.
          </ScrollFloat>

          <p className="font-sans text-white-ice/80 text-base leading-relaxed mb-6">
            {"Capacito equipes de RH para usar IA de forma prática:"}
          </p>

          <div className="space-y-3 mb-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <CheckCircle2 size={16} className="text-gold shrink-0" />
                <span className="font-sans text-white-ice/80 text-sm">
                  {benefit}
                </span>
              </div>
            ))}
          </div>

          <GoldDivider />

          {/* Results highlight */}
          <div className="space-y-3 p-4 rounded-xl border border-gold/20 bg-gold/[0.04]">
            <div className="flex items-center gap-2">
              <Zap size={16} className="text-gold" />
              <span className="font-sans text-white-ice text-sm font-medium">
                {"Menos tempo em tarefas operacionais"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Target size={16} className="text-gold" />
              <span className="font-sans text-white-ice text-sm font-medium">
                {"Mais energia para cultura e estratégia"}
              </span>
            </div>
          </div>
        </div>

        {/* Terminal mock */}
        <div ref={terminalRef}>
          <div className="bg-black-mid rounded-2xl border border-gold/20 overflow-hidden shadow-[0_0_40px_rgba(228,199,90,0.05)]">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-gold/10">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
              </div>
              <span className="font-mono text-gray-mid text-xs ml-2">
                rh-ia-training.sh
              </span>
            </div>

            {/* Terminal body */}
            <div className="p-6 min-h-[240px]">
              {displayedLines.map((line, idx) => (
                <div
                  key={idx}
                  className="font-mono text-sm text-gold/90 mb-2 flex items-center gap-2"
                >
                  <span>{line}</span>
                  {idx === displayedLines.length - 1 &&
                    idx === terminalLines.length - 1 && (
                      <CheckCircle2
                        size={14}
                        className="text-[#27C93F]"
                      />
                    )}
                </div>
              ))}
              {displayedLines.length < terminalLines.length && (
                <span className="inline-block w-2 h-4 bg-gold/60 animate-pulse" />
              )}
              {displayedLines.length === 0 && (
                <span className="inline-block w-2 h-4 bg-gold/60 animate-pulse" />
              )}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AITrainingSection;
