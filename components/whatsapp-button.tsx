"use client";
import React from "react";
import { MessageCircle } from "lucide-react";

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/XXXXX"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center
                 w-14 h-14 rounded-full bg-[#25D366]
                 ring-2 ring-gold ring-offset-2 ring-offset-black-deep
                 shadow-[0_0_20px_rgba(37,211,102,0.4)]
                 animate-pulse-slow transition-transform hover:scale-110"
    >
      <MessageCircle className="text-white-ice" size={26} />
    </a>
  );
};

export default WhatsAppButton;
