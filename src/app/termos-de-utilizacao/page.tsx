import Link from "next/link";

import {
  LegalList,
  LegalPage,
  LegalSection,
} from "@/components/legal/LegalPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Termos de Utilização",
  description:
    "Consulte as condições de utilização do site institucional da IBR Lisboa.",
  path: "/termos-de-utilizacao",
});

export default function TermosDeUtilizacaoPage() {
  return (
    <LegalPage
      description="Estes termos regulam o acesso e a utilização do site institucional da IBR Lisboa e procuram garantir uma experiência segura, clara e responsável."
      eyebrow="Condições do site"
      title="Termos de Utilização"
    >
      <LegalSection title="1. Identificação e aceitação">
        <p>
          O site é disponibilizado pela Igreja Batista Renovada – Lisboa, IBR
          Lisboa, com morada na Av. Alm. Reis 228, 1000-056 Lisboa. Ao utilizar o
          site, o visitante compromete-se a respeitar estes termos e a legislação
          aplicável.
        </p>
      </LegalSection>

      <LegalSection title="2. Natureza institucional e informativa">
        <p>
          O site divulga a identidade, atividades, cultos, mensagens, projetos,
          departamentos, eventos e formas de contacto da IBR Lisboa. O conteúdo
          tem natureza geral e não substitui aconselhamento pastoral,
          psicológico, médico, jurídico, financeiro ou outro apoio profissional.
        </p>
      </LegalSection>

      <LegalSection title="3. Agenda, eventos e transmissões">
        <p>
          Datas, horários, locais, oradores e programas podem ser alterados ou
          cancelados por motivos operacionais, pastorais, de segurança ou força
          maior. Procuraremos atualizar a informação, mas recomenda-se confirmar
          os detalhes antes da deslocação.
        </p>
        <p>
          As transmissões em direto dependem da disponibilidade técnica e de
          serviços externos. Uma interrupção não cria obrigação de retransmissão
          imediata.
        </p>
      </LegalSection>

      <LegalSection title="4. Doações">
        <p>
          A página de doações apresenta dados informativos e não processa
          pagamentos no site. O visitante deve confirmar os dados nos canais
          oficiais antes de realizar qualquer operação. Contribuições são
          voluntárias e eventuais questões devem ser dirigidas à IBR Lisboa.
        </p>
      </LegalSection>

      <LegalSection title="5. Utilização permitida">
        <p>O visitante não deve:</p>
        <LegalList>
          <li>tentar aceder sem autorização a sistemas, contas ou dados;</li>
          <li>interferir com a segurança, disponibilidade ou desempenho;</li>
          <li>introduzir código malicioso, automatizar pedidos abusivos ou contornar limitações;</li>
          <li>utilizar conteúdo para fraude, assédio, discriminação ou finalidade ilícita;</li>
          <li>
            recolher, republicar ou explorar imagens e dados de membros,
            visitantes ou menores sem base legal.
          </li>
        </LegalList>
      </LegalSection>

      <LegalSection title="6. Propriedade intelectual e imagem">
        <p>
          Textos, identidade visual, logótipos, fotografias, vídeos, gravações e
          organização do site pertencem à IBR Lisboa ou são utilizados com
          autorização, salvo indicação em contrário. A consulta pessoal e a
          partilha de ligações são permitidas; reprodução, alteração ou
          exploração comercial exigem autorização prévia.
        </p>
        <p>
          A presença de uma pessoa numa fotografia ou transmissão não autoriza
          terceiros a reutilizar a sua imagem. Consulte a <Link className="text-[#e4a63a] hover:underline" href="/politica-de-imagem">política de imagem e som</Link>.
        </p>
      </LegalSection>

      <LegalSection title="7. Ligações e serviços de terceiros">
        <p>
          O site pode encaminhar para YouTube, Google Maps, WhatsApp, Instagram,
          Eventbrite ou outros serviços. A IBR Lisboa não controla a
          disponibilidade, segurança ou práticas desses serviços. Ao sair do
          site, aplicam-se os termos e políticas do fornecedor correspondente.
        </p>
      </LegalSection>

      <LegalSection title="8. Disponibilidade e responsabilidade">
        <p>
          A IBR Lisboa procura manter o conteúdo correto e o site disponível,
          mas pode suspender, corrigir ou alterar funcionalidades sem aviso
          prévio. Nada nestes termos exclui responsabilidade que não possa ser
          legalmente excluída, nem limita os direitos reconhecidos por normas
          imperativas.
        </p>
      </LegalSection>

      <LegalSection title="9. Privacidade, alterações e lei aplicável">
        <p>
          O tratamento de dados segue a <Link className="text-[#e4a63a] hover:underline" href="/politica-de-privacidade">Política de Privacidade</Link> e a <Link className="text-[#e4a63a] hover:underline" href="/politica-de-cookies">Política de Cookies</Link>.
          Estes termos podem ser atualizados quando o site, a atividade ou a lei
          mudar. Aplica-se a lei portuguesa, sem prejuízo de direitos e regras de
          competência imperativas.
        </p>
      </LegalSection>
    </LegalPage>
  );
}

