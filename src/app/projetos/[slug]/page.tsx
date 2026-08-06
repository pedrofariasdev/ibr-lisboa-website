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

  return (
    <article className="bg-black text-white">
      <div className="relative min-h-[60vh] overflow-hidden border-t border-white/10">
        <Image
          src={projeto.image}
          alt={projeto.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />

        <div className="absolute inset-x-0 bottom-0 px-6 pb-16">
          <div className="mx-auto max-w-7xl">
            <Link
              href="/projetos"
              className="text-sm font-semibold text-white/60 transition hover:text-[#e4a63a]"
            >
              ← Projetos
            </Link>

            <h1 className="mt-6 text-5xl font-bold leading-[1] tracking-tight sm:text-7xl">
              {projeto.name}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              {projeto.description}
            </p>
          </div>
        </div>
      </div>

      <div className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
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
      </div>
    </article>
  );
}