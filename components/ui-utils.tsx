"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function useScrollReveal(selector: string) {
  useEffect(() => {
    gsap.fromTo(
      selector,
      { y: 24, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: selector,
          start: "top 92%",
          toggleActions: "play none none none",
        },
      }
    );
  }, [selector]);
}

/* Reusable UI primitives */

export const GoldDivider = () => (
  <div className="w-24 h-[2px] bg-gradient-to-r from-gold-dark to-gold rounded-full my-6" />
);

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  id,
  className = "",
}) => (
  <section
    id={id}
    className={`py-16 sm:py-20 md:py-24 px-5 sm:px-6 md:px-8 max-w-7xl mx-auto ${className}`}
  >
    {children}
  </section>
);

interface TagBadgeProps {
  icon?: React.ComponentType<{ size?: number; className?: string }>;
  children: React.ReactNode;
}

export const TagBadge: React.FC<TagBadgeProps> = ({ icon: Icon, children }) => (
  <div
    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                border border-gold/30 bg-gold/[0.08]
                text-gold font-sans text-xs font-medium tracking-widest uppercase mb-4"
  >
    {Icon && <Icon size={12} />}
    {children}
  </div>
);
