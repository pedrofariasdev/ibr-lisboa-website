import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projetos, getProjeto } from "@/data/projetos";

export function generateStaticParams() {
  return projetos
    .filter((p) => !p.emBreve)
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const projeto = getProjeto(slug);

  if (!projeto) return { title: "Projeto não encontrado" };

  return {
    title: projeto.name,
    description: projeto.description,
  };
}

export default async function ProjetoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projeto = getProjeto(slug);

  if (!projeto || projeto.emBreve) notFound();

  const turma = projeto.turma;
  const temTurma =
    turma && (turma.inicio || turma.dia || turma.horario || turma.local);

  return (
    <article className="bg-black text-white">
      <div className="relative min-h-[75vh] overflow-hidden border-t border-white/10">
        <Image
          src={projeto.imageHero ?? projeto.image}
          alt={projeto.name}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 px-6 pb-16">
          <div className="mx-auto max-w-7xl">
            <Link
              href="/projetos"
              className="text-sm font-semibold text-white/60 transition hover:text-[#e4a63a]"
            >
              ← Projetos
            </Link>

            <h1 className="mt-6 text-5xl font-bold leading-[1] tracking-tight drop-shadow-lg sm:text-7xl">
              {projeto.name}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              {projeto.description}
            </p>
          </div>
        </div>
      </div>

      <div className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#e4a63a]">
              Sobre
            </span>

            <p className="mt-6 text-lg leading-8 text-white/60">
              {projeto.sobre ??
                `O ${projeto.name} faz parte da missão da IBR Lisboa. Em breve partilharemos mais informação sobre como participar e apoiar.`}
            </p>

            <Link
              href={`/contacto?projeto=${projeto.slug}`}
              className="mt-10 inline-flex rounded-full border border-white/20 px-7 py-3.5 font-semibold transition hover:border-[#e4a63a] hover:bg-[#e4a63a] hover:text-black"
            >
              Quero participar
            </Link>
          </div>

          {temTurma && (
            <aside className="rounded-3xl border border-white/10 bg-[#111111] p-8">
              <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#e4a63a]">
                Próxima turma
              </h2>

              <dl className="mt-6 space-y-6">
                {turma.inicio && (
                  <div>
                    <dt className="text-sm text-white/45">Início</dt>
                    <dd className="mt-1 text-lg">{turma.inicio}</dd>
                  </div>
                )}

                {turma.dia && (
                  <div>
                    <dt className="text-sm text-white/45">Dia</dt>
                    <dd className="mt-1 text-lg">{turma.dia}</dd>
                  </div>
                )}

                {turma.horario && (
                  <div>
                    <dt className="text-sm text-white/45">Horário</dt>
                    <dd className="mt-1 text-lg">{turma.horario}</dd>
                  </div>
                )}

                {turma.local && (
                  <div>
                    <dt className="text-sm text-white/45">Local</dt>
                    <dd className="mt-1 text-lg">{turma.local}</dd>
                  </div>
                )}
              </dl>
            </aside>
          )}
        </div>
      </div>

      {projeto.slug === "batismo" && (
        <section className="border-t border-white/10 px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#e4a63a]">
              Depois do batismo
            </span>

            <h2 className="mt-5 max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Projeto Start
            </h2>

            <div className="mt-8 grid gap-10 lg:grid-cols-[1.5fr_1fr]">
              <p className="text-lg leading-8 text-white/60">
                O batismo é o início, não o fim. O Projeto Start acompanha quem
                deu esse passo e quem acaba de conhecer Cristo, ajudando a
                construir fundamentos sólidos para a caminhada. É um espaço de
                primeiros passos, onde ninguém precisa de saber tudo para
                participar.
              </p>

              <aside className="rounded-3xl border border-white/10 bg-[#111111] p-8">
                <dl className="space-y-6">
                  <div>
                    <dt className="text-sm text-white/45">Quando</dt>
                    <dd className="mt-1 text-lg">Domingos, 16h30</dd>
                  </div>

                  <div>
                    <dt className="text-sm text-white/45">Onde</dt>
                    <dd className="mt-1 text-lg">
                      IBR Lisboa
                      <br />
                      <span className="text-base text-white/60">
                        Av. Alm. Reis 228
                      </span>
                    </dd>
                  </div>

                  <div>
                    <dt className="text-sm text-white/45">Para quem</dt>
                    <dd className="mt-1 text-lg">
                      Novos batizados e novos convertidos
                    </dd>
                  </div>
                </dl>

                <p className="mt-6 border-t border-white/10 pt-6 text-sm leading-6 text-white/45">
                  Acontece em paralelo com a Escola da Bíblia, em sala própria.
                </p>
              </aside>
            </div>
          </div>
        </section>
      )}
    </article>
  );
}