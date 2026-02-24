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
    label: "Serviços",
    bgColor: "rgba(30,30,30,0.9)",
    textColor: "#F2F2F2",
    links: [
      {
        label: "Estruturação de RH",
        href: "#estruturacao",
        ariaLabel: "Estruturação de RH",
      },
      {
        label: "Recrutamento Estratégico",
        href: "#recrutamento",
        ariaLabel: "Recrutamento",
      },
      {
        label: "Treinamento em IA",
        href: "#treinamento-ia",
        ariaLabel: "Treinamento IA",
      },
    ],
  },
  {
    label: "Materiais",
    bgColor: "rgba(20,20,20,0.9)",
    textColor: "#F2F2F2",
    links: [
      {
        label: "eBooks Gratuitos",
        href: "#materiais",
        ariaLabel: "eBooks gratuitos",
      },
      { label: "Guias de RH", href: "#materiais", ariaLabel: "Guias de RH" },
    ],
  },
  {
    label: "Contato",
    bgColor: "rgba(25,20,10,0.9)",
    textColor: "#F2F2F2",
    links: [
      {
        label: "WhatsApp",
        href: "https://wa.me/XXXXX",
        ariaLabel: "WhatsApp",
      },
      { label: "LinkedIn", href: "#", ariaLabel: "LinkedIn" },
      { label: "Instagram", href: "#", ariaLabel: "Instagram" },
    ],
  },
];

export default function Home() {
  return (
    <main className="relative bg-black-deep min-h-screen overflow-x-hidden">
      <ParticleBackground />
      <div className="relative z-10">
        <CardNav items={navItems} />
        <HeroSection />
        <PurposeSection />
        <ServicesSection />
        <AboutSection />
        <RecruitmentSection />
        <AITrainingSection />
        <MaterialsSection />
        <LeadFormSection />
        <Footer />
      </div>
      <WhatsAppButton />
    </main>
  );
}
