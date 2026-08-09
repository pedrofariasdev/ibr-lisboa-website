import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";

const contributionTypes = [
  {
    number: "01",
    title: "Dízimos",
    description:
      "Um mandamento bíblico e uma expressão de obediência a Cristo, fidelidade e gratidão a Deus.",
  },
  {
    number: "02",
    title: "Ofertas",
    description:
      "Contribuições voluntárias que ajudam a responder às necessidades da comunidade e da igreja.",
  },
  {
    number: "03",
    title: "Missões e Projetos",
    description:
      "Apoio direcionado a iniciativas missionárias, sociais e a projetos que cuidam de pessoas.",
  },
];

const contributionMethods = [
  {
    title: "MB Way",
    value: "969 704 199",
    description: "Utilize este número oficial para contribuir através de MB Way.",
    status: "Disponível",
  },
  {
    title: "SPIN",
    value: "592 007 014",
    description: "Utilize este identificador oficial para contribuir através de SPIN.",
    status: "Disponível",
  },
  {
    title: "PIX — Brasil",
    value: "pix@ibr.pt",
    description: "Utilize esta chave oficial para contribuir através de PIX no Brasil.",
    status: "Disponível",
  },
];

const contributionDestinations = [
  {
    title: "Vida da igreja",
    description:
      "Manutenção dos espaços e recursos necessários ao funcionamento da comunidade.",
  },
  {
    title: "Ministérios",
    description:
      "Apoio ao trabalho desenvolvido com crianças, jovens, casais e famílias.",
  },
  {
    title: "Ação social",
    description:
      "Cuidado prático e apoio a pessoas e famílias em situação de necessidade.",
  },
  {
    title: "Missões e projetos",
    description:
      "Iniciativas que levam a mensagem do Evangelho e servem pessoas dentro e fora de Lisboa.",
  },
];

export const metadata = createPageMetadata({
  title: "Doações",
  description:
    "Conheça as formas de contribuir com os dízimos, ofertas, missões e projetos da IBR Lisboa.",
  path: "/doacoes",
});

export default function DoacoesPage() {
  return (
    <div className="overflow-hidden bg-black text-white">
      <section
        aria-labelledby="doacoes-title"
        className="relative isolate border-b border-white/10 px-6 pb-24 pt-40 sm:pb-28 sm:pt-48"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-28 top-20 -z-10 h-80 w-80 rounded-full bg-[#e4a63a]/10 blur-3xl sm:h-[30rem] sm:w-[30rem]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-px bg-gradient-to-r from-transparent via-[#e4a63a]/50 to-transparent"
        />

        <div className="mx-auto max-w-7xl">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#e4a63a]">
            Generosidade
          </span>

          <h1
            id="doacoes-title"
            className="mt-6 max-w-5xl text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl"
          >
            Generosidade
            <br />
            <span className="text-white/55">que transforma.</span>
          </h1>

          <div className="mt-10 grid gap-8 border-t border-white/10 pt-8 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <p className="max-w-xl text-xl font-medium leading-8 text-white sm:text-2xl sm:leading-9">
              Cada contribuição faz parte daquilo que Deus tem feito através
              da IBR Lisboa.
            </p>

            <div className="max-w-2xl space-y-5 text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
              <p>
                A generosidade ajuda-nos a continuar a servir pessoas,
                fortalecer famílias, apoiar projetos e anunciar o Evangelho.
              </p>
              <p>
                O dízimo não é uma missão ou campanha da igreja. É um
                mandamento bíblico e uma resposta de obediência a Cristo. As
                ofertas destinadas a missões e projetos são voluntárias.
              </p>
            </div>
          </div>

          <blockquote className="mt-10 max-w-3xl border-l-2 border-[#e4a63a] bg-white/[0.03] px-6 py-6 sm:px-8 sm:py-7">
            <p className="text-xl font-medium leading-8 text-white sm:text-2xl sm:leading-9">
              “Trazei todos os dízimos à casa do tesouro, para que haja
              mantimento na minha casa.”
            </p>
            <footer className="mt-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#e4a63a]">
              <cite className="not-italic">Malaquias 3:10</cite>
            </footer>
          </blockquote>

          <a
            href="#formas-de-contribuir"
            className="mt-10 inline-flex min-h-12 items-center justify-center rounded-full bg-[#e4a63a] px-7 py-3 text-sm font-semibold text-black transition hover:bg-[#f0b850] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e4a63a]"
          >
            Ver formas de contribuir
          </a>
        </div>
      </section>

      <section
        aria-labelledby="contribuicoes-title"
        className="bg-[#080808] px-6 py-24 sm:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#e4a63a]">
              Como participar
            </span>
            <h2
              id="contribuicoes-title"
              className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl"
            >
              Diferentes formas de contribuir.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
              Cada contribuição, independentemente da forma ou do valor, é
              recebida com gratidão e tratada com responsabilidade.
            </p>
          </div>

          <ol className="mt-14 grid gap-5 lg:grid-cols-3">
            {contributionTypes.map((type) => (
              <li
                key={type.title}
                className="group flex min-h-72 flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-1 hover:border-[#e4a63a]/40 hover:bg-white/[0.05] sm:p-10"
              >
                <span
                  aria-hidden="true"
                  className="font-mono text-sm text-[#e4a63a]"
                >
                  {type.number}
                </span>
                <h3 className="mt-auto pt-14 text-3xl font-semibold tracking-tight">
                  {type.title}
                </h3>
                <p className="mt-4 leading-7 text-white/65">
                  {type.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="formas-de-contribuir"
        aria-labelledby="formas-title"
        className="scroll-mt-28 border-y border-white/10 bg-black px-6 py-24 sm:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#e4a63a]">
                Formas de contribuir
              </span>
              <h2
                id="formas-title"
                className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl"
              >
                Simples, claro e seguro.
              </h2>
              <p className="mt-6 max-w-lg text-lg leading-8 text-white/65">
                Utilize uma das opções oficiais disponíveis abaixo para fazer
                a sua contribuição.
              </p>

              <div className="mt-8 rounded-2xl border border-[#e4a63a]/25 bg-[#e4a63a]/[0.06] p-6">
                <p className="text-sm leading-6 text-white/75">
                  Por segurança, utilize apenas os dados publicados nos canais
                  oficiais da IBR Lisboa. Não efetue transferências para dados
                  enviados por terceiros.
                </p>
              </div>
            </div>

            <dl className="divide-y divide-white/10 border-y border-white/10">
              {contributionMethods.map((method) => (
                <div
                  key={method.title}
                  className="py-8"
                >
                  <dt className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
                    <span className="text-2xl font-semibold tracking-tight">
                      {method.title}
                    </span>
                    <span
                      className={`w-fit shrink-0 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] ${
                        method.status === "Disponível"
                          ? "border-[#e4a63a]/40 bg-[#e4a63a]/10 text-[#e4a63a]"
                          : "border-white/15 bg-white/[0.04] text-white/70"
                      }`}
                    >
                      {method.status}
                    </span>
                  </dt>
                  <dd className="mt-3 max-w-xl">
                    {method.value && (
                      <p className="font-mono text-xl font-semibold tracking-wide text-white sm:text-2xl">
                        <span className="sr-only">Dados para contribuição: </span>
                        {method.value}
                      </p>
                    )}
                    <p
                      className={`${method.value ? "mt-3" : ""} leading-7 text-white/65`}
                    >
                      {method.description}
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="destino-title"
        className="bg-[#080808] px-6 py-24 sm:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#e4a63a]">
                Propósito
              </span>
              <h2
                id="destino-title"
                className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl"
              >
                Onde a sua contribuição faz a diferença.
              </h2>
            </div>

            <ul className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2">
              {contributionDestinations.map((destination) => (
                <li
                  key={destination.title}
                  className="bg-[#0c0c0c] p-8 sm:p-10"
                >
                  <span
                    aria-hidden="true"
                    className="mb-6 block h-px w-10 bg-[#e4a63a]"
                  />
                  <h3 className="text-xl font-semibold">
                    {destination.title}
                  </h3>
                  <p className="mt-3 leading-7 text-white/65">
                    {destination.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="transparencia-title"
        className="border-y border-white/10 bg-black px-6 py-24 sm:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl border border-[#e4a63a]/25 bg-[#e4a63a]/[0.06] p-8 sm:p-12 lg:p-16">
            <div
              aria-hidden="true"
              className="absolute -right-20 -top-24 h-72 w-72 rounded-full border border-[#e4a63a]/20"
            />
            <div
              aria-hidden="true"
              className="absolute -right-8 -top-12 h-52 w-52 rounded-full border border-[#e4a63a]/15"
            />

            <div className="relative max-w-4xl">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#e4a63a]">
                Transparência
              </span>
              <h2
                id="transparencia-title"
                className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-5xl"
              >
                Responsabilidade em cada contribuição.
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
                Administramos cada recurso com cuidado, responsabilidade e
                propósito, procurando honrar a confiança de quem contribui e a
                missão que nos foi confiada.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="contacto-doacoes-title"
        className="bg-[#080808] px-6 py-24 sm:py-28"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#e4a63a]">
              Estamos disponíveis
            </span>
            <h2
              id="contacto-doacoes-title"
              className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl"
            >
              Tem alguma dúvida sobre contribuições?
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
              Fale connosco através dos canais oficiais. Teremos todo o gosto
              em esclarecer as suas questões.
            </p>
          </div>

          <Link
            href="/contacto"
            className="inline-flex min-h-12 w-fit shrink-0 items-center justify-center rounded-full bg-[#e4a63a] px-7 py-3 font-semibold text-black transition hover:bg-[#f0b850] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e4a63a]"
          >
            Contactar a IBR Lisboa
          </Link>
        </div>
      </section>
    </div>
  );
}
