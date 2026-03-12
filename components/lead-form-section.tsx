"use client";
import React, { useState } from "react";
import { ArrowUpRight, Loader2, BookOpen, Crown, Clock, CheckCircle2 } from "lucide-react";
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

const upcomingEbooks = [
  "Guia Prático de Estruturação de RH",
  "Templates de Processos de RH",
  "Manual de Recrutamento por Competências",
  "Prompts de IA para RH",
  "Checklist de Compliance Trabalhista",
];

const LeadFormSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Form fields
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [cargo, setCargo] = useState("");
  const [colaboradores, setColaboradores] = useState("");
  const [segmento, setSegmento] = useState("");
  const [estagioRh, setEstagioRh] = useState("nao-possui");
  const [desafio, setDesafio] = useState("recrutamento");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch("https://formsubmit.co/ajax/rhqueacontece@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Nome: nome,
          Email: email,
          WhatsApp: whatsapp,
          Empresa: empresa,
          Cargo: cargo,
          Colaboradores: colaboradores,
          Segmento: segmento,
          "Estágio do RH": estagioRh,
          "Maior Desafio": desafio,
          _subject: "Nova Lead - Material Gratuito RH Que Acontece",
        }),
      });
    } catch {
      // proceed even on network error
    }

    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Section id="lead-form">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-black-mid rounded-2xl p-12 border border-gold/20 shadow-[0_0_40px_rgba(228,199,90,0.05)]">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-dark to-gold mx-auto mb-6 flex items-center justify-center">
              <CheckCircle2 size={28} className="text-black-deep" />
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

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6 lg:gap-8 items-start">
        {/* Form */}
        <div className="bg-black-mid rounded-2xl p-5 sm:p-8 md:p-10 border border-gold/20 shadow-[0_0_40px_rgba(228,199,90,0.05)]">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Essential data */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Input
                  placeholder="Nome completo *"
                  required
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="bg-black-deep border-gold/20 text-white-ice placeholder:text-gray-mid
                             focus-visible:border-gold focus-visible:ring-gold/30 h-12 font-sans"
                />
              </div>
              <div>
                <Input
                  placeholder="E-mail profissional *"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                className="bg-black-deep border-gold/20 text-white-ice placeholder:text-gray-mid
                           focus-visible:border-gold focus-visible:ring-gold/30 h-12 font-sans"
              />
              <Input
                placeholder="Nome da empresa *"
                required
                value={empresa}
                onChange={(e) => setEmpresa(e.target.value)}
                className="bg-black-deep border-gold/20 text-white-ice placeholder:text-gray-mid
                           focus-visible:border-gold focus-visible:ring-gold/30 h-12 font-sans"
              />
            </div>

            <Input
              placeholder="Cargo / Função *"
              required
              value={cargo}
              onChange={(e) => setCargo(e.target.value)}
              className="bg-black-deep border-gold/20 text-white-ice placeholder:text-gray-mid
                         focus-visible:border-gold focus-visible:ring-gold/30 h-12 font-sans"
            />

            {/* Strategic data */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-gray-mid text-xs mb-2 font-sans">
                  Quantidade de colaboradores
                </Label>
                <Select value={colaboradores} onValueChange={setColaboradores}>
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
                <Select value={segmento} onValueChange={setSegmento}>
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
              <RadioGroup defaultValue="nao-possui" value={estagioRh} onValueChange={setEstagioRh} className="grid grid-cols-2 gap-3">
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
              <RadioGroup defaultValue="recrutamento" value={desafio} onValueChange={setDesafio} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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

        {/* Material cards — desktop only */}
        <div className="hidden lg:flex flex-col gap-4">
          {/* Free card */}
          <div
            className="group relative bg-black-mid rounded-xl p-5 border border-[#27C93F]/30"
          >
            <span className="absolute top-3 right-3 px-2 py-1 rounded-full bg-[#27C93F]/10 border border-[#27C93F]/30 text-[#27C93F] text-[10px] font-sans font-bold uppercase tracking-wider">
              Gratuito
            </span>
            <div className="p-2 rounded-lg bg-gold/[0.08] border border-gold/20 w-fit mb-4">
              <BookOpen size={22} className="text-gold" />
            </div>
            <h3 className="font-sans font-bold text-white-ice text-base mb-1">
              {"Material Gratuito"}
            </h3>
            <p className="font-sans font-semibold text-gold text-sm mb-2">
              {"Checklist de Estruturação de RH"}
            </p>
            <p className="font-sans text-white-ice/60 text-xs leading-relaxed">
              {"Um guia rápido e prático para você começar a organizar seu RH com os primeiros passos essenciais."}
            </p>
          </div>

          {/* Premium card - Em Breve */}
          <div
            className="group relative bg-black-mid rounded-xl p-5 border border-gold/30 opacity-90"
          >
            <span className="absolute top-3 right-3 px-2 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-[10px] font-sans font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Clock size={10} />
              Em Breve
            </span>
            <div className="p-2 rounded-lg bg-gold/[0.08] border border-gold/20 w-fit mb-4">
              <Crown size={22} className="text-gold" />
            </div>
            <h3 className="font-sans font-bold text-white-ice text-base mb-1">
              {"eBooks & Materiais Completos"}
            </h3>
            <p className="font-sans font-semibold text-gold text-sm mb-2">
              {"Conteúdo aprofundado com método"}
            </p>
            <div className="space-y-1.5">
              {upcomingEbooks.map((ebook, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-gold/50" />
                  <span className="font-sans text-white-ice/50 text-xs">
                    {ebook}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default LeadFormSection;
