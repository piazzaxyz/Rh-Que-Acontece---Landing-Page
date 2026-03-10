import CardNav from "@/components/card-nav";
import ParticleBackground from "@/components/particle-background";
import HeroSection from "@/components/hero-section";
import PurposeSection from "@/components/purpose-section";
import ServicesSection from "@/components/services-section";
import AboutSection from "@/components/about-section";
import RecruitmentSection from "@/components/recruitment-section";
import AITrainingSection from "@/components/ai-training-section";
import MaterialsSection from "@/components/materials-section";
import LeadFormSection from "@/components/lead-form-section";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";

const navItems = [
  {
    label: "Quem Sou",
    bgColor: "rgba(30,30,30,0.9)",
    textColor: "#F2F2F2",
    links: [
      {
        label: "Sobre Mim",
        href: "#sobre",
        ariaLabel: "Sobre Mim",
      },
      {
        label: "Minha Trajetória",
        href: "#sobre",
        ariaLabel: "Trajetória",
      },
    ],
  },
  {
    label: "Serviços",
    bgColor: "rgba(30,30,30,0.9)",
    textColor: "#F2F2F2",
    links: [
      {
        label: "Diagnóstico e Implementação de RH",
        href: "#servicos",
        ariaLabel: "Diagnóstico e Implementação de RH",
      },
      {
        label: "Recrutamento e Seleção",
        href: "#recrutamento",
        ariaLabel: "Recrutamento e Seleção",
      },
      {
        label: "IA Aplicada ao RH",
        href: "#treinamento-ia",
        ariaLabel: "IA Aplicada ao RH",
      },
      {
        label: "Mapeamento Comportamental",
        href: "#recrutamento",
        ariaLabel: "Mapeamento Comportamental",
      },
    ],
  },
  {
    label: "Materiais",
    bgColor: "rgba(20,20,20,0.9)",
    textColor: "#F2F2F2",
    links: [
      {
        label: "eBooks e Materiais",
        href: "#materiais",
        ariaLabel: "eBooks e Materiais",
      },
    ],
  },
  {
    label: "Contato",
    bgColor: "rgba(25,20,10,0.9)",
    textColor: "#F2F2F2",
    links: [
      {
        label: "WhatsApp",
        href: "https://wa.me/5551981391355",
        ariaLabel: "WhatsApp",
      },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/rh-que-acontece/posts/?feedView=all", ariaLabel: "LinkedIn" },
      { label: "Instagram", href: "https://www.instagram.com/rhqueacontece/", ariaLabel: "Instagram" },
    ],
  },
];

export default function Home() {
  return (
    <main className="relative bg-black-deep min-h-screen overflow-x-hidden">
      <ParticleBackground />
      <div className="relative z-10">
        <CardNav items={navItems} />
        <PurposeSection />
        <ServicesSection />
        <RecruitmentSection />
        <AITrainingSection />
        <HeroSection />
        <AboutSection />
        <MaterialsSection />
        <LeadFormSection />
        <Footer />
      </div>
      <WhatsAppButton />
    </main>
  );
}
