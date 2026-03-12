"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Sparkles, ArrowUpRight } from "lucide-react";
import RotatingText from "./RotatingText";
import { Section, TagBadge, GoldDivider } from "@/components/ui-utils";

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
    <Section id="estruturacao" className="relative overflow-hidden">
      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(228,199,90,0.04)_0%,transparent_70%)]" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Badge */}
        <TagBadge icon={Sparkles}>Consultoria Estratégica</TagBadge>

        {/* Title — Line 1: static */}
        <h2 className="hero-title-line font-sans font-bold text-gold text-2xl sm:text-3xl md:text-5xl uppercase tracking-tight leading-[1.15] mb-3 text-balance">
          {"Estruturamos seu RH"}
        </h2>

        {/* Title — Line 2: RotatingText chip */}
        <div className="hero-title-line mb-6 flex justify-center w-full overflow-hidden">
          <RotatingText
            texts={[
              "Com IA.",
              "Com Dados.",
              "Com Estratégia.",
              "Com Propósito.",
            ]}
            mainClassName="text-black-deep bg-gold px-4 sm:px-5 py-1.5 rounded-xl justify-center font-sans font-bold uppercase tracking-tight text-2xl sm:text-3xl md:text-5xl leading-tight !whitespace-nowrap"
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

        <div className="flex justify-center mb-6">
          <GoldDivider />
        </div>

        {/* Description */}
        <p className="hero-desc font-sans text-white-ice/80 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed mb-8 text-pretty">
          {
            "Estruturamos seu RH, fortalecemos suas contratações e ensinamos sua equipe a trabalhar com Inteligência Artificial de forma estratégica."
          }
        </p>

        {/* CTAs */}
        <div className="hero-ctas flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
          <a
            href="https://wa.me/5551981391355"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl
                       bg-gradient-to-r from-gold-dark to-gold
                       text-black-deep font-sans font-bold text-sm
                       hover:shadow-[0_0_30px_rgba(228,199,90,0.5)] transition-all duration-300"
          >
            {"Fale Conosco"}
          </a>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;