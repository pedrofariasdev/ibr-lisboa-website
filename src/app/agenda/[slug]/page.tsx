import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { agenda } from "@/data/agenda";
import { createPageMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return agenda.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = agenda.find((e) => e.slug === slug);

  if (!item) return { title: "Evento não encontrado" };

  return createPageMetadata({
    title: item.title,
    description:
      item.description ??
      `Conheça os detalhes de ${item.title}, um evento da IBR Lisboa.`,
    path: `/agenda/${item.slug}`,
  });
}

export default async function EventDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const item = agenda.find((e) => e.slug === slug);

  if (!item) notFound();

  const quando = item.dateLabel ?? item.scheduleLabel;

  return (
    <main className="min-h-screen bg-black px-6 pb-24 pt-36 text-white">
      <section className="mx-auto max-w-7xl">
        <Link
          href="/agenda"
          className="inline-flex items-center gap-2 text-sm font-semibold text-white/50 transition hover:text-[#e4a63a]"
        >
          ← Voltar à agenda
        </Link>

        <div className="mt-10 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[520px] overflow-hidden rounded-3xl border border-white/10 bg-[#111111]">
            <Image
              src={item.image}
              alt=""
              fill
              aria-hidden="true"
              className="scale-110 object-cover opacity-25 blur-2xl"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />

            <Image
              src={item.image}
              alt={`Cartaz de ${item.title}`}
              fill
              priority
              className="object-contain"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>

          <div>
            {item.category && (
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#e4a63a]">
                {item.category}
              </span>
            )}

            <h1 className="mt-6 text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl">
              {item.title}
            </h1>

            {item.status === "breve" && (
              <span className="mt-6 inline-flex rounded-full border border-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                Em breve
              </span>
            )}

            {item.description && (
              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60">
                {item.description}
              </p>
            )}

            {(quando || item.time || item.location) && (
              <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
                {quando && (
                  <div className="grid gap-2 py-6 sm:grid-cols-[130px_1fr]">
                    <span className="text-sm uppercase tracking-[0.2em] text-white/35">
                      Quando
                    </span>
                    <span className="text-lg font-medium">{quando}</span>
                  </div>
                )}

                {item.time && (
                  <div className="grid gap-2 py-6 sm:grid-cols-[130px_1fr]">
                    <span className="text-sm uppercase tracking-[0.2em] text-white/35">
                      Horário
                    </span>
                    <span className="text-lg font-medium">{item.time}</span>
                  </div>
                )}

                {item.location && (
                  <div className="grid gap-2 py-6 sm:grid-cols-[130px_1fr]">
                    <span className="text-sm uppercase tracking-[0.2em] text-white/35">
                      Local
                    </span>
                    <span className="text-lg font-medium">{item.location}</span>
                  </div>
                )}
              </div>
            )}

            <div className="mt-10 flex flex-wrap gap-4">
                {item.ticketUrl && (
                <Link
                  href={item.ticketUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full bg-[#e4a63a] px-8 py-4 font-semibold text-black transition hover:bg-[#f0b64c]"
                >
                  Garantir ingresso
                </Link>
              )}

              {item.ctaUrl && (
                <Link
                  href={item.ctaUrl}
                  className="inline-flex rounded-full border border-white/20 px-8 py-4 font-semibold transition hover:border-[#e4a63a] hover:bg-[#e4a63a] hover:text-black"
                >
                  {item.ctaLabel ?? "Saiba mais"}
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
