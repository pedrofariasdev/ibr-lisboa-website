import { Hero } from "@/components/sections/Hero";
import { AgendaSection } from "@/components/sections/EventosSection";
import { SobreSection } from "@/components/sections/SobreSection";
import { DepartamentosSection } from "@/components/sections/DepartamentosSection";
import { ProjetosSection } from "@/components/sections/ProjetosSection";
import { ContactoSection } from "@/components/sections/ContactoSection";
import { IbrEuropaSection } from "@/components/sections/IbrEuropaSection";
import { createPageMetadata, DEFAULT_DESCRIPTION } from "@/lib/seo";

export const metadata = createPageMetadata({
  description: DEFAULT_DESCRIPTION,
  path: "/",
});


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
