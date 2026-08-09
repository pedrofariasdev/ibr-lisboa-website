import Image from "next/image";
import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";

import {
  agenda,
  type AgendaItem,
} from "@/data/agenda";

export const metadata = createPageMetadata({
  title: "Agenda",
  description:
    "Conheça os próximos encontros, conferências e eventos da IBR Lisboa.",
  path: "/agenda",
});


function parseDate(date: string) {
  return new Date(`${date}T12:00:00`);
}


function formatDateBadge(
  date: string,
  endDate?: string
) {
  const start = parseDate(date);

  const startDay = new Intl.DateTimeFormat(
    "pt-PT",
    {
      day: "2-digit",
    }
  ).format(start);

  const month = new Intl.DateTimeFormat(
    "pt-PT",
    {
      month: "short",
    }
  )
    .format(start)
    .replace(".", "")
    .toUpperCase();


  if (!endDate) {
    return {
      day: startDay,
      month,
    };
  }


  const end = parseDate(endDate);

  const endDay = new Intl.DateTimeFormat(
    "pt-PT",
    {
      day: "2-digit",
    }
  ).format(end);


  return {
    day: `${startDay}–${endDay}`,
    month,
  };
}


function getEventTimestamp(event: AgendaItem) {
  const date = event.endDate ?? event.date;

  if (!date) {
    return Number.MAX_SAFE_INTEGER;
  }

  return parseDate(date).getTime();
}


function isExternalUrl(url: string) {
  return (
    url.startsWith("http://") ||
    url.startsWith("https://")
  );
}


type EventCardProps = {
  event: AgendaItem;
  featured?: boolean;
  recurring?: boolean;
};


function EventCard({
  event,
  featured = false,
  recurring = false,
}: EventCardProps) {
  const dateBadge = event.date
    ? formatDateBadge(
        event.date,
        event.endDate
      )
    : null;

  const isComingSoon =
    event.status === "breve";


  const actionClassName = `
    rounded-full
    bg-[#e4a63a]
    px-5
    py-2.5
    text-sm
    font-semibold
    text-black
    transition
    hover:bg-[#f0b64c]
  `;


  return (
    <article
      className={`
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-[#101010]
        ${
          featured
            ? "min-h-[620px]"
            : "min-h-[460px]"
        }
      `}
    >

      <Image
        src={event.image}
        alt=""
        fill
        aria-hidden="true"
        className="
          scale-110
          object-cover
          opacity-25
          blur-2xl
        "
        sizes={
          featured
            ? "(min-width: 1024px) 1000px, 100vw"
            : "(min-width: 1024px) 33vw, 100vw"
        }
      />


      <Image
        src={event.image}
        alt={`Cartaz de ${event.title}`}
        fill
        priority={featured}
        className="
          object-cover
          transition-transform
          duration-700
          group-hover:scale-[1.03]
        "
        sizes={
          featured
            ? "(min-width: 1024px) 1000px, 100vw"
            : "(min-width: 1024px) 33vw, 100vw"
        }
      />


      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black
          via-black/50
          to-black/5
        "
      />


      {dateBadge && (
        <div
          className="
            absolute
            left-6
            top-6
            flex
            min-h-20
            min-w-16
            flex-col
            items-center
            justify-center
            rounded-2xl
            bg-[#e4a63a]
            px-3
            text-black
            shadow-xl
          "
        >
          <strong className="text-xl leading-none">
            {dateBadge.day}
          </strong>

          <span
            className="
              mt-2
              text-xs
              font-bold
              tracking-[0.15em]
            "
          >
            {dateBadge.month}
          </span>
        </div>
      )}


      {featured && (
        <span
          className="
            absolute
            right-6
            top-6
            rounded-full
            border
            border-white/20
            bg-black/55
            px-4
            py-2
            text-xs
            font-semibold
            uppercase
            tracking-[0.15em]
            backdrop-blur-md
          "
        >
          Em destaque
        </span>
      )}


      {isComingSoon && (
        <span
          className="
            absolute
            left-6
            top-6
            rounded-full
            border
            border-[#e4a63a]/30
            bg-black/60
            px-4
            py-2
            text-xs
            font-semibold
            uppercase
            tracking-[0.15em]
            text-[#e4a63a]
            backdrop-blur-md
          "
        >
          Em breve
        </span>
      )}


      {recurring && (
        <span
          className="
            absolute
            left-6
            top-6
            rounded-full
            border
            border-[#e4a63a]/30
            bg-black/60
            px-4
            py-2
            text-xs
            font-semibold
            uppercase
            tracking-[0.15em]
            text-[#e4a63a]
            backdrop-blur-md
          "
        >
          Toda semana
        </span>
      )}


      <div
        className="
          absolute
          inset-x-0
          bottom-0
          p-7
          sm:p-9
        "
      >

        {event.category && (
          <span
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.25em]
              text-[#e4a63a]
            "
          >
            {event.category}
          </span>
        )}


        <h2
          className={`
            mt-3
            font-semibold
            leading-tight
            tracking-tight
            ${
              featured
                ? "max-w-3xl text-4xl sm:text-6xl"
                : "text-3xl"
            }
          `}
        >
          {event.title}
        </h2>


        {event.description && (
          <p
            className={`
              mt-4
              leading-7
              text-white/65
              ${
                featured
                  ? "max-w-2xl"
                  : "line-clamp-3"
              }
            `}
          >
            {event.description}
          </p>
        )}


        {(event.dateLabel ||
          event.scheduleLabel ||
          event.time ||
          event.location) && (
          <div
            className="
              mt-5
              flex
              flex-wrap
              gap-x-5
              gap-y-2
              text-sm
              text-white/75
            "
          >

            {event.dateLabel && (
              <span>
                {event.dateLabel}
              </span>
            )}

            {event.scheduleLabel && (
              <span>
                {event.scheduleLabel}
              </span>
            )}

            {event.time && (
              <span>
                {event.time}
              </span>
            )}

            {event.location && (
              <span>
                {event.location}
              </span>
            )}

          </div>
        )}


        <div
          className="
            mt-7
            flex
            flex-wrap
            items-center
            gap-4
          "
        >

          <Link
            href={`/agenda/${event.slug}`}
            className="
              inline-flex
              items-center
              gap-2
              font-semibold
              text-[#e4a63a]
            "
          >
            Ver detalhes →

          </Link>


          {event.ticketUrl && (
            <a
              href={event.ticketUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={actionClassName}
            >
              Garantir ingresso
            </a>
          )}


          {event.ctaUrl &&
            event.ctaLabel &&
            (
              isExternalUrl(event.ctaUrl) ? (
                <a
                  href={event.ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={actionClassName}
                >
                  {event.ctaLabel}
                </a>
              ) : (
                <Link
                  href={event.ctaUrl}
                  className={actionClassName}
                >
                  {event.ctaLabel}
                </Link>
              )
            )}

        </div>

      </div>

    </article>
  );
}


export default function AgendaPage() {
  const today = new Date();

  today.setHours(0, 0, 0, 0);


  const visibleItems = agenda.filter(
    (event) =>
      event.status !== "encerrado"
  );


  const specialEvents = visibleItems
    .filter(
      (event) =>
        event.group ===
        "evento-especial"
    )
    .filter((event) => {
      if (!event.date) {
        return true;
      }

      return (
        getEventTimestamp(event) >=
        today.getTime()
      );
    })
    .sort(
      (firstEvent, secondEvent) =>
        getEventTimestamp(firstEvent) -
        getEventTimestamp(secondEvent)
    );


  const weeklyPrograms =
    visibleItems.filter(
      (event) =>
        event.group ===
        "programacao-semanal"
    );


  const featuredEvent =
    specialEvents.find(
      (event) => event.featured
    ) ?? specialEvents[0];


  const remainingSpecialEvents =
    specialEvents.filter(
      (event) =>
        event.slug !== featuredEvent?.slug
    );


  return (
    <main
      className="
        min-h-screen
        bg-black
        px-6
        pb-24
        pt-40
        text-white
      "
    >

      <section className="mx-auto max-w-7xl">

        <span
          className="
            text-xs
            font-semibold
            uppercase
            tracking-[0.35em]
            text-[#e4a63a]
          "
        >
          Agenda IBR
        </span>


        <h1
          className="
            mt-6
            max-w-5xl
            text-5xl
            font-bold
            leading-[0.95]
            tracking-tight
            sm:text-7xl
            lg:text-8xl
          "
        >
          Encontros para
          <br />
          viver juntos.
        </h1>


        <p
          className="
            mt-8
            max-w-2xl
            text-lg
            leading-8
            text-white/55
          "
        >
          Confira os eventos especiais
          e a programação semanal da
          IBR Lisboa.
        </p>


        {featuredEvent && (
          <section className="mt-16">

            <span
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#e4a63a]
              "
            >
              Não perca
            </span>


            <h2
              className="
                mt-3
                text-3xl
                font-semibold
                tracking-tight
                sm:text-4xl
              "
            >
              Evento em destaque
            </h2>


            <div className="mt-8">

              <EventCard
                event={featuredEvent}
                featured
              />

            </div>

          </section>
        )}


        {remainingSpecialEvents.length > 0 && (
          <section
            className="
              mt-24
              border-t
              border-white/10
              pt-12
            "
          >

            <span
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#e4a63a]
              "
            >
              Eventos especiais
            </span>


            <h2
              className="
                mt-3
                text-3xl
                font-semibold
                tracking-tight
                sm:text-4xl
              "
            >
              Próximos momentos
            </h2>


            <div
              className="
                mt-8
                grid
                gap-6
                md:grid-cols-2
                lg:grid-cols-3
              "
            >

              {remainingSpecialEvents.map(
                (event) => (
                  <EventCard
                    key={event.slug}
                    event={event}
                  />
                )
              )}

            </div>

          </section>
        )}


        {weeklyPrograms.length > 0 && (
          <section
            className="
              mt-24
              border-t
              border-white/10
              pt-12
            "
          >

            <span
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#e4a63a]
              "
            >
              Programação semanal
            </span>


            <h2
              className="
                mt-3
                text-3xl
                font-semibold
                tracking-tight
                sm:text-4xl
              "
            >
              Toda semana na IBR
            </h2>


            <p
              className="
                mt-4
                max-w-2xl
                leading-7
                text-white/50
              "
            >
              Encontros recorrentes para
              aprender, crescer e caminhar
              em comunidade.
            </p>


            <div
              className="
                mt-8
                grid
                gap-6
                md:grid-cols-2
              "
            >

              {weeklyPrograms.map(
                (event) => (
                  <EventCard
                    key={event.slug}
                    event={event}
                    recurring
                  />
                )
              )}

            </div>

          </section>
        )}

      </section>

    </main>
  );
}
