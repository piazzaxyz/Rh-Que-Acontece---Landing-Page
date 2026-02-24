"use client";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import ScrollFloat from "@/components/scroll-float";
import { Section, TagBadge, GoldDivider } from "@/components/ui-utils";
import { useScrollReveal } from "@/components/ui-utils";

const stats = [
  { value: "25+", label: "Anos de\nexperiência" },
  { value: "2010", label: "Implantando\nRH do zero" },
  { value: "3 anos", label: "IA aplicada\nao RH" },
];

const AboutSection: React.FC = () => {
  useScrollReveal(".about-reveal");

  return (
    <Section id="sobre" className="relative overflow-hidden">
      {/* Background decorative text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none overflow-hidden w-full">
        <span className="font-serif text-[120px] sm:text-[200px] md:text-[300px] text-gold/[0.04] whitespace-nowrap block text-center">
          25 anos
        </span>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Image placeholder */}
        <div className="about-reveal flex justify-center lg:justify-start">
          <div className="relative">
            {/* Decorative frame */}
            <div className="absolute -inset-3 rounded-2xl border-2 border-gold/30 -rotate-2" />
            <div className="absolute -inset-3 rounded-2xl border border-gold/10 rotate-1" />
            <div
              className="relative w-56 h-72 sm:w-72 sm:h-96 md:w-80 md:h-[28rem] rounded-2xl overflow-hidden bg-black-mid
                          border border-gold/20"
              style={{
                clipPath:
                  "polygon(0 0, 100% 0, 100% 85%, 92% 100%, 0 100%)",
              }}
            >
              <img
                src="/siteCarol.webp"
                alt="Caroline Scholl"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Text content */}
        <div>
          <TagBadge>
            {"A especialista por trás da consultoria"}
          </TagBadge>

          <div className="mb-2">
            <ScrollFloat
              as="h2"
              containerClassName="text-xl sm:text-2xl md:text-4xl font-bold"
              textClassName="font-sans font-bold text-white-ice uppercase tracking-tight"
            >
              Prazer, eu sou
            </ScrollFloat>
          </div>

          <h3 className="about-reveal font-serif text-gold text-3xl sm:text-4xl md:text-6xl mb-6">
            Caroline Scholl
          </h3>

          <div className="about-reveal space-y-3 mb-6">
            <p className="font-sans text-white-ice/80 text-base leading-relaxed">
              {"25 anos de experiência em Recursos Humanos"}
            </p>
            <p className="font-sans text-white-ice/80 text-base leading-relaxed">
              {"Desde 2010: implantação de RH do zero"}
            </p>
            <p className="font-sans text-white-ice/80 text-base leading-relaxed">
              {"Especialista em IA aplicada ao RH nos últimos 3 anos"}
            </p>
          </div>

          <GoldDivider />

          {/* Stats */}
          <div className="about-reveal grid grid-cols-3 gap-4 mb-8">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="text-center p-4 rounded-xl bg-black-mid border border-gold/10
                           hover:border-gold/40 hover:shadow-[0_0_20px_rgba(228,199,90,0.2)]
                           hover:scale-105 hover:-translate-y-1
                           transition-all duration-500 ease-out cursor-pointer"
              >
                <p className="font-sans font-bold text-gold text-xl sm:text-2xl md:text-3xl mb-1">
                  {stat.value}
                </p>
                <p className="font-sans text-gray-mid text-xs whitespace-pre-line leading-tight">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Quote */}
          <blockquote className="about-reveal mb-8 pl-4 border-l-2 border-gold/40">
            <p className="font-serif text-gold text-xl sm:text-2xl md:text-3xl">
              {'"Antes da tecnologia, vem a base."'}
            </p>
          </blockquote>

          <a
            href="#contato"
            className="about-reveal inline-flex items-center gap-2 text-gold font-sans font-semibold text-sm
                       hover:gap-3 transition-all duration-300"
          >
            {"Saiba mais sobre minha trajetória"}
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
