import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { departamentos, getDepartamento } from "@/data/departamentos";
import { createPageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return departamentos.map((dep) => ({ slug: dep.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const dep = getDepartamento(slug);

  if (!dep) return { title: "Departamento não encontrado" };

  return createPageMetadata({
    title: dep.name,
    description: dep.description,
    path: `/departamentos/${dep.slug}`,
  });
}

export default async function DepartamentoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const dep = getDepartamento(slug);

  if (!dep) notFound();

  return (
    <article className="bg-black text-white">
      {/* Hero */}
      <div className="relative min-h-[60vh] overflow-hidden border-t border-white/10">
        <Image
          src={dep.image}
          alt={dep.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />

        <div className="absolute inset-x-0 bottom-0 px-6 pb-16">
          <div className="mx-auto max-w-7xl">
            <Link
              href="/departamentos"
              className="text-sm font-semibold text-white/60 transition hover:text-[#e4a63a]"
            >
              ← Departamentos
            </Link>

            <h1 className="mt-6 text-5xl font-bold leading-[1] tracking-tight sm:text-7xl">
              {dep.name}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              {dep.description}
            </p>
          </div>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#e4a63a]">
              Sobre
            </span>

            <p className="mt-6 text-lg leading-8 text-white/60">
              {dep.sobre ??
                `O departamento ${dep.name} faz parte da vida da IBR Lisboa. Em breve partilharemos mais informação sobre as atividades, encontros e formas de participar.`}
            </p>

            <Link
              href={`/contacto?departamento=${dep.slug}`}
              className="mt-10 inline-flex rounded-full border border-white/20 px-7 py-3.5 font-semibold transition hover:border-[#e4a63a] hover:bg-[#e4a63a] hover:text-black"
            >
              Quero participar
            </Link>
          </div>

          {(dep.responsavel || dep.horario || dep.contacto) && (
            <aside className="rounded-3xl border border-white/10 bg-[#111111] p-8">
              <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#e4a63a]">
                Informações
              </h2>

              <dl className="mt-6 space-y-6">
                {dep.responsavel && (
                  <div>
                    <dt className="text-sm text-white/45">Responsável</dt>
                    <dd className="mt-1 text-lg">{dep.responsavel}</dd>
                  </div>
                )}

                {dep.horario && (
                  <div>
                    <dt className="text-sm text-white/45">Horário</dt>
                    <dd className="mt-1 text-lg">{dep.horario}</dd>
                  </div>
                )}

                {dep.contacto && (
                  <div>
                    <dt className="text-sm text-white/45">Contacto</dt>
                    <dd className="mt-1 text-lg">
                      <a
                        href={`https://wa.me/${dep.contacto.replace(/\D/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition hover:text-[#e4a63a]"
                      >
                        {dep.contacto}
                      </a>
                    </dd>
                  </div>
                )}
              </dl>
            </aside>
          )}
        </div>
      </div>
    </article>
  );
}
