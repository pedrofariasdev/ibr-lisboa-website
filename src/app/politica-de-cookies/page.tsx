import {
  LegalList,
  LegalPage,
  LegalSection,
} from "@/components/legal/LegalPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Política de Cookies",
  description:
    "Conheça as tecnologias de armazenamento local e os conteúdos externos utilizados no site da IBR Lisboa.",
  path: "/politica-de-cookies",
});

export default function PoliticaDeCookiesPage() {
  return (
    <LegalPage
      description="Explicamos as tecnologias utilizadas pelo site, as escolhas disponíveis e como alterar a autorização concedida a conteúdos externos."
      eyebrow="Cookies e tecnologias semelhantes"
      title="Política de Cookies"
    >
      <LegalSection title="1. O que são cookies e tecnologias semelhantes">
        <p>
          Cookies são pequenos ficheiros guardados no dispositivo pelo
          navegador. Tecnologias semelhantes, como o armazenamento local,
          também podem conservar preferências. Algumas são necessárias ao
          funcionamento solicitado; outras dependem de consentimento.
        </p>
      </LegalSection>

      <LegalSection title="2. Tecnologia necessária utilizada pela IBR Lisboa">
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-white/[0.05] text-white">
              <tr>
                <th className="px-5 py-4 font-semibold">Identificador</th>
                <th className="px-5 py-4 font-semibold">Finalidade</th>
                <th className="px-5 py-4 font-semibold">Duração</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-white/10">
                <td className="px-5 py-4 font-mono text-xs text-white/80">
                  ibr-lisboa-consent-v1
                </td>
                <td className="px-5 py-4">
                  Guardar a escolha sobre YouTube e Google Maps no armazenamento
                  local do navegador.
                </td>
                <td className="px-5 py-4">Até 6 meses</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Este registo não identifica diretamente o visitante e é necessário
          para respeitar a escolha feita. Se o navegador impedir o
          armazenamento, a decisão poderá manter-se apenas durante a página
          atual.
        </p>
      </LegalSection>

      <LegalSection title="3. Conteúdos externos opcionais">
        <LegalList>
          <li>
            <strong className="text-white">YouTube:</strong> utilizado para
            mensagens e transmissões. Só é carregado após autorização e pode
            utilizar cookies ou identificadores da Google.
          </li>
          <li>
            <strong className="text-white">Google Maps:</strong> utilizado para
            apresentar a localização. Só é carregado após autorização e pode
            utilizar cookies ou identificadores da Google.
          </li>
        </LegalList>
        <p>
          Mesmo sem autorizar, pode abrir o conteúdo diretamente no respetivo
          fornecedor através do botão apresentado no espaço bloqueado. Nesse
          caso, aplicam-se as políticas do serviço externo.
        </p>
      </LegalSection>

      <LegalSection title="4. O que não utilizamos atualmente">
        <p>
          Na versão indicada nesta política, o site não utiliza cookies de
          publicidade, perfis comportamentais, pixels de redes sociais ou
          ferramentas próprias de analytics. Se isso mudar, esta política e o
          mecanismo de consentimento serão atualizados antes da ativação.
        </p>
      </LegalSection>

      <LegalSection title="5. Como gerir ou retirar a autorização">
        <p>
          Pode aceitar ou recusar os conteúdos externos no painel apresentado
          na primeira visita. A opção “Preferências de privacidade”, disponível
          no rodapé, permite alterar a decisão a qualquer momento.
        </p>
        <p>
          Também pode eliminar o armazenamento local nas definições do
          navegador. Depois disso, o site voltará a pedir uma escolha. A recusa
          não impede a navegação nas páginas institucionais.
        </p>
      </LegalSection>

      <LegalSection title="6. Fundamento legal e atualizações">
        <p>
          A preferência estritamente necessária é utilizada para prestar o
          serviço solicitado e respeitar a decisão do visitante. O carregamento
          de YouTube e Google Maps baseia-se no consentimento, que pode ser
          retirado sem afetar a licitude do tratamento anterior.
        </p>
        <p>
          Esta lista será revista quando forem adicionados serviços ou alteradas
          as respetivas finalidades.
        </p>
      </LegalSection>
    </LegalPage>
  );
}

