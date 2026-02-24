"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Sparkles, ArrowUpRight, ChevronDown } from "lucide-react";
import RotatingText from "./RotatingText";

const HeroSection: React.FC = () => {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(
      ".hero-badge",
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 }
    )
      .fromTo(
        ".hero-title-line",
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15 },
        "-=0.3"
      )
      .fromTo(
        ".hero-sub",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.4"
      )
      .fromTo(
        ".hero-desc",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        "-=0.3"
      )
      .fromTo(
        ".hero-ctas",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        "-=0.3"
      );
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-28 pb-12">
      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(228,199,90,0.04)_0%,transparent_70%)]" />

      <div className="relative z-10 flex flex-col items-center text-center px-5 sm:px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="hero-badge inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full border border-gold/30 bg-gold/[0.08] text-gold font-sans text-[10px] sm:text-xs font-medium tracking-widest uppercase mb-6 sm:mb-8">
          <Sparkles size={12} />
          <span>{"Consultoria Estratégica com IA"}</span>
        </div>

        {/* Title — Line 1: static */}
        <h1 className="hero-title-line font-sans font-bold text-gold text-3xl sm:text-4xl md:text-6xl lg:text-7xl uppercase tracking-tight leading-[1.15] mb-4 text-balance">
          {"Estruturamos seu RH"}
        </h1>

        {/* Title — Line 2: RotatingText chip, nunca quebra linha */}
        <div className="hero-title-line mb-6 flex justify-center w-full overflow-hidden">
          <RotatingText
            texts={[
              "Com IA.",
              "Com Dados.",
              "Com Estratégia.",
              "Com Propósito.",
            ]}
            mainClassName="text-black-deep bg-gold px-4 sm:px-6 py-1.5 sm:py-2 rounded-xl justify-center font-sans font-bold uppercase tracking-tight text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-tight !whitespace-nowrap"
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1"
            elementLevelClassName="font-bold"
            staggerFrom="last"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.02}
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2200}
          />
        </div>

        {/* Subtitle */}
        <p className="hero-sub font-serif text-gold text-2xl sm:text-3xl md:text-5xl mb-6">
          {'"De RH para RH"'}
        </p>

        {/* Description */}
        <p className="hero-desc font-sans text-white-ice/80 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed mb-8 sm:mb-10 text-pretty">
          {
            "Estruturamos seu RH, fortalecemos suas contratações e ensinamos sua equipe a trabalhar com Inteligência Artificial de forma estratégica."
          }
        </p>

        {/* CTAs */}
        <div className="hero-ctas flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
          <a
            href="#servicos"
            className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl
                       bg-gradient-to-r from-gold-dark to-gold
                       text-black-deep font-sans font-bold text-sm sm:text-base
                       hover:shadow-[0_0_30px_rgba(228,199,90,0.5)] transition-all duration-300"
          >
            {"Conheça nossos serviços"}
            <ArrowUpRight size={18} />
          </a>
          <a
            href="#materiais"
            className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl
                       border-2 border-gold text-gold font-sans font-bold text-sm sm:text-base
                       hover:bg-gold/10 transition-all duration-300"
          >
            {"Baixar material gratuito"}
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <ChevronDown size={28} className="text-gold/60" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;