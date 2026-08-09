import {
  LegalList,
  LegalPage,
  LegalSection,
} from "@/components/legal/LegalPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Política de Fotografias, Filmagens e Som",
  description:
    "Conheça as regras da IBR Lisboa para captação, transmissão e utilização responsável de imagem e som.",
  path: "/politica-de-imagem",
});

export default function PoliticaDeImagemPage() {
  return (
    <LegalPage
      description="A IBR Lisboa procura documentar e comunicar a vida da comunidade sem comprometer a dignidade, a privacidade, a liberdade religiosa ou a segurança de adultos e menores."
      eyebrow="Direito à imagem, voz e privacidade"
      title="Política de Fotografias, Filmagens e Som"
    >
      <LegalSection title="1. Âmbito">
        <p>
          Esta política aplica-se a fotografias, vídeo, áudio, transmissões em
          direto, gravações, entrevistas e testemunhos realizados pela IBR
          Lisboa ou em seu nome, nas instalações, cultos, batismos, conferências,
          retiros, atividades infantis, ações sociais e demais eventos.
        </p>
      </LegalSection>

      <LegalSection title="2. Princípios adotados">
        <LegalList>
          <li>respeito pela dignidade, intimidade e liberdade de consciência;</li>
          <li>informação prévia, clara e acessível sobre a captação;</li>
          <li>captação limitada ao necessário para uma finalidade legítima;</li>
          <li>proteção reforçada de crianças, adolescentes e pessoas vulneráveis;</li>
          <li>nenhuma presunção de consentimento a partir do silêncio;</li>
          <li>meios simples para recusar, retirar autorização ou pedir remoção.</li>
        </LegalList>
      </LegalSection>

      <LegalSection title="3. Finalidades e canais">
        <p>Imagem e som podem ser utilizados para:</p>
        <LegalList>
          <li>transmitir cultos, conferências e mensagens;</li>
          <li>informar sobre atividades, projetos e eventos;</li>
          <li>preservar memória histórica e comunitária;</li>
          <li>produzir materiais institucionais, educativos e pastorais;</li>
          <li>publicar no site, YouTube, Instagram e canais oficiais.</li>
        </LegalList>
        <p>
          A imagem não será vendida nem licenciada para publicidade de terceiros
          sem uma autorização específica.
        </p>
      </LegalSection>

      <LegalSection title="4. Informação prévia e organização dos espaços">
        <p>
          Sempre que exista captação planeada, serão utilizados avisos visíveis
          na entrada ou junto à área de gravação. Os avisos indicarão a
          finalidade, os canais previstos e como falar com a equipa.
        </p>
        <p>
          Quem não pretenda aparecer deve informar a receção ou a equipa de
          comunicação antes do início. Sempre que possível, será indicado um
          lugar fora do enquadramento, uma área sem captação ou outro sinal
          discreto para a equipa reconhecer a preferência.
        </p>
        <p>
          O aviso geral não substitui consentimento quando este for necessário,
          especialmente para retratos, entrevistas, testemunhos, menores ou
          utilização promocional destacada.
        </p>
      </LegalSection>

      <LegalSection title="5. Fundamentos e dados de natureza religiosa">
        <p>
          Fotografias e vídeos identificáveis são dados pessoais. Quando o
          contexto possa revelar participação religiosa, serão aplicadas
          salvaguardas reforçadas e um fundamento adequado para categorias
          especiais de dados.
        </p>
        <p>
          A IBR Lisboa procurará obter consentimento explícito e documentado para
          publicação pública de pessoas em destaque, entrevistas, testemunhos,
          batismos e outras situações que revelem claramente a participação
          individual. Imagens gerais serão planeadas para privilegiar palco,
          equipa autorizada ou enquadramentos onde os participantes não sejam
          individualmente identificáveis.
        </p>
      </LegalSection>

      <LegalSection title="6. Pessoas em destaque e testemunhos">
        <p>
          Retratos, entrevistas, testemunhos pessoais, histórias de vida e
          conteúdos em que uma pessoa seja o elemento principal exigem
          autorização específica quanto à finalidade e aos canais de publicação.
          Uma autorização para um evento não permite automaticamente novas
          campanhas ou finalidades incompatíveis.
        </p>
      </LegalSection>

      <LegalSection title="7. Crianças e adolescentes">
        <LegalList>
          <li>
            Menores não serão apresentados de forma identificável em publicação
            ou transmissão sem autorização prévia e documentada do responsável
            legal, salvo fundamento legal específico avaliado pela IBR Lisboa.
          </li>
          <li>
            A vontade da criança ou adolescente será considerada de acordo com
            a idade e maturidade; uma recusa será respeitada mesmo existindo
            autorização do responsável.
          </li>
          <li>
            Não serão divulgados nomes completos, contactos, escola, morada,
            rotinas, informação de saúde ou outros elementos que aumentem risco.
          </li>
          <li>
            A captação em atividades infantis deve ser previamente planeada e
            limitada a equipas autorizadas.
          </li>
        </LegalList>
      </LegalSection>

      <LegalSection title="8. Situações em que não deve haver captação">
        <p>Não será realizada captação intencional em:</p>
        <LegalList>
          <li>aconselhamento, confissão, oração privada ou acompanhamento pastoral;</li>
          <li>momentos de sofrimento, crise, assistência médica ou vulnerabilidade;</li>
          <li>instalações sanitárias, balneários, zonas de troca de roupa ou amamentação;</li>
          <li>operações financeiras, dados de doação ou documentos pessoais;</li>
          <li>
            qualquer situação em que a segurança ou dignidade prevaleça sobre a
            finalidade de comunicação.
          </li>
        </LegalList>
      </LegalSection>

      <LegalSection title="9. Cultos e transmissões em direto">
        <p>
          As câmaras devem ser posicionadas prioritariamente para o palco e para
          pessoas previamente autorizadas. A assistência não deve ser o foco da
          transmissão. Planos gerais só devem ser usados com informação prévia e
          medidas que reduzam a identificação individual.
        </p>
        <p>
          Uma transmissão já emitida não pode ser apagada do momento em que foi
          vista, mas a IBR Lisboa avaliará pedidos relativos à gravação arquivada,
          incluindo edição, ocultação ou remoção quando tecnicamente possível e
          legalmente adequado.
        </p>
      </LegalSection>

      <LegalSection title="10. Conservação e acesso interno">
        <p>
          Ficheiros brutos devem ser acessíveis apenas à equipa autorizada e
          conservados pelo tempo necessário à seleção, edição, segurança e
          arquivo legítimo. Conteúdos publicados são revistos periodicamente e
          removidos quando deixam de servir a finalidade ou quando um pedido
          fundamentado deva prevalecer.
        </p>
      </LegalSection>

      <LegalSection title="11. Retirada do consentimento e pedidos de remoção">
        <p>
          O consentimento pode ser retirado para utilizações futuras, sem afetar
          o tratamento realizado licitamente antes da retirada. Também podem ser
          exercidos os direitos de acesso, oposição, apagamento ou limitação,
          conforme o fundamento aplicável.
        </p>
        <p>
          O pedido deve, se possível, indicar o evento, a data, a ligação ou uma
          descrição que permita localizar o conteúdo. A IBR Lisboa atuará sobre
          os canais que controla e realizará esforços razoáveis perante
          republicações sob seu controlo, não podendo garantir a eliminação de
          cópias feitas autonomamente por terceiros.
        </p>
      </LegalSection>

      <LegalSection title="12. Fotografias feitas por visitantes">
        <p>
          Visitantes devem respeitar as instruções da organização, a privacidade
          das pessoas e as áreas sem captação. Não devem fotografar ou publicar
          menores de outras famílias, momentos pastorais privados ou pessoas que
          manifestem oposição. A autorização para estar num evento não concede o
          direito de explorar comercialmente imagens de terceiros.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
