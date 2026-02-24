"use client";
import React from "react";
import { ArrowUpRight } from "lucide-react";

const footerLinks = [
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Materiais", href: "#materiais" },
  { label: "Contato", href: "#lead-form" },
];

const socialLinks = [
  { label: "WhatsApp", href: "https://wa.me/XXXXX" },
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-black-mid/70 backdrop-blur-sm border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 py-12 sm:py-16">

        {/* Grid de colunas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-12">
          {/* Col 1: Logo + tagline */}
          <div>
            <a href="#" className="flex items-center gap-3 mb-4 w-fit hover:opacity-80 transition-opacity">
              <img
                src="/dourado_sem_fundo.svg"
                alt="RH que Acontece"
                className="h-12 w-auto"
              />
              <div className="flex flex-col leading-none">
                <span className="font-sans font-bold text-gold text-xs tracking-[0.15em] uppercase">
                  RH que
                </span>
                <span className="font-serif text-gold text-lg">
                  Acontece
                </span>
              </div>
            </a>
            <p className="font-sans text-white-ice/60 text-sm leading-relaxed">
              {"Estruturamos seu RH, fortalecemos suas contratações e ensinamos sua equipe a trabalhar com IA de forma estratégica."}
            </p>
          </div>

          {/* Col 2: Quick links */}
          <div>
            <h4 className="font-sans font-semibold text-gold text-sm uppercase tracking-wider mb-4">
              Links Rápidos
            </h4>
            <div className="flex flex-col gap-3">
              {footerLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="font-sans text-white-ice/60 text-sm hover:text-gold transition-colors flex items-center gap-1 group"
                >
                  <ArrowUpRight
                    size={12}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: Social */}
          <div>
            <h4 className="font-sans font-semibold text-gold text-sm uppercase tracking-wider mb-4">
              Redes Sociais
            </h4>
            <div className="flex flex-col gap-3">
              {socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-white-ice/60 text-sm hover:text-gold transition-colors flex items-center gap-1 group"
                >
                  <ArrowUpRight
                    size={12}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* FIM do grid — divider vem logo após */}

        {/* Linha separadora */}
        <div className="mt-10 sm:mt-12 border-t border-gold/20" />

        {/* Copyright */}
        <p className="font-sans text-gray-mid text-xs text-center mt-6">
          {"© 2025 RH que Acontece — Caroline Scholl. Todos os direitos reservados."}
        </p>

      </div>
    </footer>
  );
};

export default Footer;