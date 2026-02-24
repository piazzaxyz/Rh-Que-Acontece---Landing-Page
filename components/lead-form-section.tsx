"use client";
import React, { useState } from "react";
import { ArrowUpRight, Loader2 } from "lucide-react";
import ScrollFloat from "@/components/scroll-float";
import { Section, GoldDivider } from "@/components/ui-utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const LeadFormSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Section id="lead-form">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-black-mid rounded-2xl p-12 border border-gold/20 shadow-[0_0_40px_rgba(228,199,90,0.05)]">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-dark to-gold mx-auto mb-6 flex items-center justify-center">
              <ArrowUpRight size={28} className="text-black-deep" />
            </div>
            <h3 className="font-sans font-bold text-gold text-2xl mb-4">
              {"Obrigado pelo interesse!"}
            </h3>
            <p className="font-sans text-white-ice/80 text-base">
              {"Em breve você receberá o material no seu e-mail. Fique de olho!"}
            </p>
          </div>
        </div>
      </Section>
    );
  }

  return (
    <Section id="lead-form">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <ScrollFloat
            as="h2"
            containerClassName="text-2xl sm:text-3xl md:text-4xl font-bold"
            textClassName="font-sans font-bold text-gold uppercase tracking-tight"
          >
            Baixe o Material Gratuito
          </ScrollFloat>
          <p className="font-sans text-white-ice/80 text-base mt-4">
            {"Manual de Implantação de RH do Zero"}
          </p>
          <div className="flex justify-center">
            <GoldDivider />
          </div>
        </div>

        <div className="bg-black-mid rounded-2xl p-5 sm:p-8 md:p-10 border border-gold/20 shadow-[0_0_40px_rgba(228,199,90,0.05)]">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Essential data */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Input
                  placeholder="Nome completo *"
                  required
                  className="bg-black-deep border-gold/20 text-white-ice placeholder:text-gray-mid
                             focus-visible:border-gold focus-visible:ring-gold/30 h-12 font-sans"
                />
              </div>
              <div>
                <Input
                  placeholder="E-mail profissional *"
                  type="email"
                  required
                  className="bg-black-deep border-gold/20 text-white-ice placeholder:text-gray-mid
                             focus-visible:border-gold focus-visible:ring-gold/30 h-12 font-sans"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                placeholder="WhatsApp *"
                type="tel"
                required
                className="bg-black-deep border-gold/20 text-white-ice placeholder:text-gray-mid
                           focus-visible:border-gold focus-visible:ring-gold/30 h-12 font-sans"
              />
              <Input
                placeholder="Nome da empresa *"
                required
                className="bg-black-deep border-gold/20 text-white-ice placeholder:text-gray-mid
                           focus-visible:border-gold focus-visible:ring-gold/30 h-12 font-sans"
              />
            </div>

            <Input
              placeholder="Cargo / Função *"
              required
              className="bg-black-deep border-gold/20 text-white-ice placeholder:text-gray-mid
                         focus-visible:border-gold focus-visible:ring-gold/30 h-12 font-sans"
            />

            {/* Strategic data */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-gray-mid text-xs mb-2 font-sans">
                  Quantidade de colaboradores
                </Label>
                <Select>
                  <SelectTrigger className="w-full bg-black-deep border-gold/20 text-white-ice h-12 font-sans">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent className="bg-black-mid border-gold/20 text-white-ice">
                    <SelectItem value="ate-10">{"Até 10"}</SelectItem>
                    <SelectItem value="11-30">{"11 a 30"}</SelectItem>
                    <SelectItem value="31-100">{"31 a 100"}</SelectItem>
                    <SelectItem value="101-300">{"101 a 300"}</SelectItem>
                    <SelectItem value="acima-300">{"Acima de 300"}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="text-gray-mid text-xs mb-2 font-sans">
                  Segmento
                </Label>
                <Select>
                  <SelectTrigger className="w-full bg-black-deep border-gold/20 text-white-ice h-12 font-sans">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent className="bg-black-mid border-gold/20 text-white-ice">
                    <SelectItem value="industria">{"Indústria"}</SelectItem>
                    <SelectItem value="comercio">{"Comércio"}</SelectItem>
                    <SelectItem value="servicos">{"Serviços"}</SelectItem>
                    <SelectItem value="agronegocio">{"Agronegócio"}</SelectItem>
                    <SelectItem value="tecnologia">{"Tecnologia"}</SelectItem>
                    <SelectItem value="outro">{"Outro"}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Radio groups */}
            <div>
              <Label className="text-gray-mid text-xs mb-3 font-sans block">
                {"Seu RH está em qual estágio?"}
              </Label>
              <RadioGroup defaultValue="nao-possui" className="grid grid-cols-2 gap-3">
                {[
                  { value: "nao-possui", label: "Não possui RH" },
                  { value: "operacional", label: "RH operacional" },
                  { value: "estruturado", label: "RH estruturado" },
                  { value: "estrategico", label: "RH estratégico" },
                ].map((item) => (
                  <div key={item.value} className="flex items-center gap-2">
                    <RadioGroupItem
                      value={item.value}
                      id={`rh-${item.value}`}
                      className="border-gold/40 text-gold data-[state=checked]:border-gold"
                    />
                    <Label
                      htmlFor={`rh-${item.value}`}
                      className="text-white-ice/80 text-sm font-sans font-normal cursor-pointer"
                    >
                      {item.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div>
              <Label className="text-gray-mid text-xs mb-3 font-sans block">
                {"Qual seu maior desafio?"}
              </Label>
              <RadioGroup defaultValue="recrutamento" className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { value: "recrutamento", label: "Recrutamento e Seleção" },
                  { value: "processos", label: "Organização de processos" },
                  { value: "rotatividade", label: "Alta rotatividade" },
                  { value: "estrategia", label: "Falta de estratégia" },
                  { value: "ia", label: "Implementação de IA" },
                  { value: "rh-zero", label: "Estruturar o RH do zero" },
                ].map((item) => (
                  <div key={item.value} className="flex items-center gap-2">
                    <RadioGroupItem
                      value={item.value}
                      id={`desafio-${item.value}`}
                      className="border-gold/40 text-gold data-[state=checked]:border-gold"
                    />
                    <Label
                      htmlFor={`desafio-${item.value}`}
                      className="text-white-ice/80 text-sm font-sans font-normal cursor-pointer"
                    >
                      {item.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-gradient-to-r from-gold-dark to-gold
                         text-black-deep font-sans font-bold text-base rounded-xl
                         hover:shadow-[0_0_30px_rgba(228,199,90,0.5)] transition-all duration-300
                         flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  {"Enviando..."}
                </>
              ) : (
                <>
                  {"Quero meu Material Gratuito"}
                  <ArrowUpRight size={18} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default LeadFormSection;
