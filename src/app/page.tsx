import { Hero } from "@/components/sections/Hero";
import { AgendaSection } from "@/components/sections/EventosSection";
import { SobreSection } from "@/components/sections/SobreSection";
import { DepartamentosSection } from "@/components/sections/DepartamentosSection";
import { ProjetosSection } from "@/components/sections/ProjetosSection";
import { ContactoSection } from "@/components/sections/ContactoSection";
import { IbrEuropaSection } from "@/components/sections/IbrEuropaSection";


export default function Home() {
  return (
    <div className="bg-black text-white">

      <Hero />

      <AgendaSection />

      <SobreSection />

      <DepartamentosSection />

      <ProjetosSection />

      <ContactoSection />

      <IbrEuropaSection />

    </div>
  );
}