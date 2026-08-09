import Link from "next/link";

import {
  LegalList,
  LegalPage,
  LegalSection,
} from "@/components/legal/LegalPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Política de Privacidade",
  description:
    "Saiba como a IBR Lisboa protege os dados pessoais e respeita os direitos de privacidade.",
  path: "/politica-de-privacidade",
});

export default function PoliticaDePrivacidadePage() {
  return (
    <LegalPage
      description="Esta política explica de forma clara quando e por que motivo podem ser tratados dados pessoais durante a utilização do site e a interação com os canais digitais da IBR Lisboa."
      eyebrow="Privacidade e proteção de dados"
      title="Política de Privacidade"
    >
      <LegalSection title="1. Responsável pelo tratamento">
        <p>
          A Igreja Batista Renovada – Lisboa, apresentada publicamente como
          IBR Lisboa, é responsável pelos tratamentos de dados pessoais cujas
          finalidades e meios determina no âmbito deste site.
        </p>
        <p>
          Morada: Av. Alm. Reis 228, 1000-056 Lisboa. Para assuntos de
          privacidade, pode utilizar a <Link className="text-[#e4a63a] hover:underline" href="/contacto">página de contacto</Link>,
          o WhatsApp oficial ou correspondência para esta morada.
        </p>
      </LegalSection>

      <LegalSection title="2. Âmbito desta política">
        <p>
          Esta política aplica-se ao site da IBR Lisboa, às páginas de agenda,
          mensagens, cultos, projetos, departamentos, doações e contacto, bem
          como às preferências de privacidade guardadas no dispositivo.
        </p>
        <p>
          A captação e utilização de imagem e som em cultos e eventos é ainda
          regulada pela nossa <Link className="text-[#e4a63a] hover:underline" href="/politica-de-imagem">Política de Fotografias, Filmagens e Som</Link>.
        </p>
      </LegalSection>

      <LegalSection title="3. Dados que podem ser tratados">
        <LegalList>
          <li>
            Dados técnicos necessários à entrega e segurança do site, como
            endereço IP, data e hora do pedido, tipo de navegador, dispositivo,
            páginas solicitadas e registos de segurança.
          </li>
          <li>
            Preferência relativa ao carregamento de conteúdos externos,
            guardada localmente no navegador durante até seis meses.
          </li>
          <li>
            Dados comunicados voluntariamente quando o visitante inicia uma
            conversa através do WhatsApp, Instagram ou outro canal externo.
          </li>
          <li>
            Imagem, voz e informação associada a fotografias, filmagens,
            testemunhos ou transmissões, nos termos da política específica.
          </li>
        </LegalList>
        <p>
          O site não disponibiliza atualmente contas de utilizador, newsletter,
          formulário de contacto com armazenamento próprio, analytics ou
          processamento direto de pagamentos. Os dados de doação são apenas
          informativos.
        </p>
      </LegalSection>

      <LegalSection title="4. Finalidades e fundamentos jurídicos">
        <LegalList>
          <li>
            Disponibilizar, manter e proteger o site, com base no interesse
            legítimo da IBR Lisboa em comunicar com a comunidade e garantir a
            segurança dos seus sistemas.
          </li>
          <li>
            Carregar vídeos do YouTube e mapas da Google apenas após
            consentimento do visitante.
          </li>
          <li>
            Responder a pedidos iniciados voluntariamente pelo visitante e
            adotar diligências solicitadas por este.
          </li>
          <li>
            Cumprir obrigações legais, prevenir utilizações abusivas e exercer
            ou defender direitos em processo judicial ou administrativo.
          </li>
          <li>
            Utilizar imagem e voz mediante consentimento ou outro fundamento
            legal adequado, com salvaguardas reforçadas quando a informação
            possa revelar convicções religiosas.
          </li>
        </LegalList>
      </LegalSection>

      <LegalSection title="5. Serviços externos e destinatários">
        <p>
          O site é disponibilizado através de infraestrutura da Cloudflare, que
          pode tratar dados técnicos para entrega, desempenho e segurança. Com
          consentimento, conteúdos do YouTube e Google Maps podem comunicar com
          serviços da Google. Quando o visitante abre WhatsApp ou Instagram,
          passa a interagir diretamente com serviços da Meta.
        </p>
        <p>
          Estes fornecedores tratam dados segundo as respetivas políticas e
          podem operar fora do Espaço Económico Europeu, aplicando os mecanismos
          de transferência internacional previstos na legislação aplicável. A
          IBR Lisboa não vende dados pessoais.
        </p>
      </LegalSection>

      <LegalSection title="6. Conservação">
        <p>
          Os dados são conservados apenas durante o período necessário para a
          respetiva finalidade, para cumprimento de obrigações legais ou para a
          defesa de direitos. A preferência de conteúdos externos expira após
          seis meses. Registos técnicos seguem os períodos configurados nos
          serviços de alojamento e segurança.
        </p>
        <p>
          Fotografias, vídeos e gravações podem ser mantidos enquanto conservem
          valor comunitário, histórico ou comunicacional legítimo, sem prejuízo
          dos direitos de oposição, retirada do consentimento e apagamento.
        </p>
      </LegalSection>

      <LegalSection title="7. Direitos das pessoas">
        <p>Nos termos aplicáveis, pode solicitar:</p>
        <LegalList>
          <li>acesso aos dados pessoais e informação sobre o tratamento;</li>
          <li>retificação de dados inexatos ou incompletos;</li>
          <li>apagamento ou limitação do tratamento;</li>
          <li>oposição a tratamentos baseados em interesses legítimos;</li>
          <li>portabilidade, quando legalmente aplicável;</li>
          <li>
            retirada do consentimento a qualquer momento, sem afetar a
            licitude do tratamento anterior.
          </li>
        </LegalList>
        <p>
          A IBR Lisboa poderá solicitar informação razoável para confirmar a
          identidade e proteger os dados contra pedidos indevidos.
        </p>
      </LegalSection>

      <LegalSection title="8. Reclamações e autoridade de controlo">
        <p>
          Procuraremos responder de forma clara e atempada. Sem prejuízo de
          outros meios, pode apresentar reclamação à <a className="text-[#e4a63a] hover:underline" href="https://www.cnpd.pt/" rel="noopener noreferrer" target="_blank">Comissão Nacional de Proteção de Dados</a>.
        </p>
      </LegalSection>

      <LegalSection title="9. Segurança e atualizações">
        <p>
          São adotadas medidas técnicas e organizativas proporcionais aos
          riscos. Nenhum sistema é totalmente imune, mas qualquer incidente será
          avaliado e tratado de acordo com a lei. Esta política poderá ser
          atualizada para refletir alterações legais, técnicas ou operacionais;
          a data apresentada no início identifica a versão vigente.
        </p>
      </LegalSection>
    </LegalPage>
  );
}

