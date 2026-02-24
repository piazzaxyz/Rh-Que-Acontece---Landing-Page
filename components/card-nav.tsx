"use client";
import React, { useRef, useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

type CardNavLink = {
  label: string;
  href: string;
  ariaLabel: string;
};

type CardNavItem = {
  label: string;
  bgColor: string;
  textColor: string;
  links: CardNavLink[];
};

interface CardNavProps {
  items: CardNavItem[];
}

const CardNav: React.FC<CardNavProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on link click
  const handleLinkClick = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 pt-3 sm:pt-4">
      <div
        className={`
          relative mx-auto max-w-5xl rounded-2xl
          transition-all duration-500
          ${
            scrolled
              ? "bg-black-deep/80 backdrop-blur-2xl border border-gold/20 shadow-[0_8px_32px_rgba(228,199,90,0.08)]"
              : "bg-black-deep/50 backdrop-blur-xl border border-white-ice/5"
          }
        `}
      >
        {/* Gold decorative line on top */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

        {/* Top bar */}
        <div className="flex items-center justify-between h-14 sm:h-16 px-4 sm:px-5">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 shrink-0">
            <img
              src="/dourado_sem_fundo.svg"
              alt="RH que Acontece"
              className="h-8 sm:h-10 w-auto"
            />
            <div className="flex flex-col leading-none">
              <span className="font-sans font-bold text-gold text-xs tracking-[0.15em] uppercase">
                RH que
              </span>
              <span className="font-serif text-gold text-sm">
                Acontece
              </span>
            </div>
          </a>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-6">
            {items.map((item, idx) => (
              <div key={idx} className="relative group">
                <button className="font-sans text-white-ice/70 hover:text-gold text-sm transition-colors cursor-pointer">
                  {item.label}
                </button>
                {/* Dropdown */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div
                    className="rounded-xl p-4 border border-gold/10 min-w-[200px]"
                    style={{ backgroundColor: item.bgColor }}
                  >
                    <div className="flex flex-col gap-2">
                      {item.links.map((link, i) => (
                        <a
                          key={i}
                          href={link.href}
                          aria-label={link.ariaLabel}
                          className="flex items-center gap-2 text-white-ice/80 hover:text-gold transition-colors text-sm font-sans group/link whitespace-nowrap"
                        >
                          <ArrowUpRight
                            size={13}
                            className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                          />
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* CTA desktop */}
            <a
              href="#lead-form"
              className="hidden md:flex items-center gap-2 px-5 py-2 rounded-xl
                         bg-gradient-to-r from-gold-dark to-gold
                         text-black-deep font-sans font-semibold text-sm
                         hover:shadow-[0_0_20px_rgba(228,199,90,0.4)] transition-all duration-300"
            >
              Fale Conosco
              <ArrowUpRight size={14} />
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg
                         text-gold hover:bg-gold/10 transition-colors cursor-pointer"
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          ref={menuRef}
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pb-4 pt-2">
            <div className="flex flex-col gap-3">
              {items.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-xl p-4 border border-gold/10 bg-black-mid/80"
                >
                  <p className="font-sans font-semibold text-gold text-sm mb-3 tracking-wide uppercase">
                    {item.label}
                  </p>
                  <div className="flex flex-col gap-2">
                    {item.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.href}
                        aria-label={link.ariaLabel}
                        onClick={handleLinkClick}
                        className="flex items-center gap-2 text-white-ice/80 hover:text-gold transition-colors text-sm font-sans"
                      >
                        <ArrowUpRight size={13} />
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}

              {/* Mobile CTA */}
              <a
                href="#lead-form"
                onClick={handleLinkClick}
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl
                           bg-gradient-to-r from-gold-dark to-gold
                           text-black-deep font-sans font-semibold text-sm mt-1"
              >
                Fale Conosco
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default CardNav;
