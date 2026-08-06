import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { events } from "@/data/events";

type EventDetailsPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function formatFullDate(date: string) {
  const parsedDate = new Date(`${date}T12:00:00`);

  return new Intl.DateTimeFormat("pt-PT", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(parsedDate);
}

export function generateStaticParams() {
  return events.map((event) => ({
    slug: event.slug,
  }));
}

export default async function EventDetailsPage({
  params,
}: EventDetailsPageProps) {
  const { slug } = await params;

  const event = events.find((item) => item.slug === slug);

  if (!event) {
    notFound();
  }

  const formattedDate = formatFullDate(event.date);

  // Usa o cartaz vertical quando existir.
  // Caso contrário, utiliza a imagem principal do evento.
  const posterSource = event.posterImage ?? event.image;

  return (
    <main className="min-h-screen bg-black px-6 pb-24 pt-36 text-white">
      <section className="mx-auto max-w-7xl">
        <Link
          href="/eventos"
          className="inline-flex items-center gap-2 text-sm font-semibold text-white/50 transition hover:text-[#e4a63a]"
        >
          ← Voltar aos eventos
        </Link>

        <div className="mt-10 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[520px] overflow-hidden rounded-3xl border border-white/10 bg-[#111111]">
            {/* Fundo desfocado */}
            <Image
              src={posterSource}
              alt=""
              fill
              aria-hidden="true"
              className="scale-110 object-cover opacity-25 blur-2xl"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />

            {/* Cartaz vertical principal */}
            <Image
              src={posterSource}
              alt={`Cartaz do evento ${event.title}`}
              fill
              priority
              className="object-contain"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>

          <div>
            {event.category && (
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#e4a63a]">
                {event.category}
              </span>
            )}

            <h1 className="mt-6 text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl">
              {event.title}
            </h1>

            {event.description && (
              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60">
                {event.description}
              </p>
            )}

            <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
              <div className="grid gap-2 py-6 sm:grid-cols-[130px_1fr]">
                <span className="text-sm uppercase tracking-[0.2em] text-white/35">
                  Data
                </span>

                <span className="text-lg font-medium capitalize">
                  {formattedDate}
                </span>
              </div>

              {event.time && (
                <div className="grid gap-2 py-6 sm:grid-cols-[130px_1fr]">
                  <span className="text-sm uppercase tracking-[0.2em] text-white/35">
                    Horário
                  </span>

                  <span className="text-lg font-medium">{event.time}</span>
                </div>
              )}

              {event.location && (
                <div className="grid gap-2 py-6 sm:grid-cols-[130px_1fr]">
                  <span className="text-sm uppercase tracking-[0.2em] text-white/35">
                    Local
                  </span>

                  <span className="text-lg font-medium">
                    {event.location}
                  </span>
                </div>
              )}
            </div>

            {event.ticketUrl && (
              <a
                href={event.ticketUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex rounded-full bg-[#e4a63a] px-8 py-4 font-semibold text-black transition hover:bg-[#f0b64c]"
              >
                Garantir ingresso
              </a>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}