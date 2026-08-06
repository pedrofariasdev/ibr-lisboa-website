"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  agenda,
  type AgendaItem,
} from "@/data/agenda";


function parseDate(date: string) {
  return new Date(`${date}T12:00:00`);
}


function getEventTimestamp(event: AgendaItem) {
  const finalDate =
    event.endDate ?? event.date;

  if (!finalDate) {
    return Number.MAX_SAFE_INTEGER;
  }

  return parseDate(finalDate).getTime();
}


function formatEventDate(
  date?: string,
  endDate?: string
) {
  if (!date) {
    return null;
  }

  const startDate = parseDate(date);

  const startDay =
    new Intl.DateTimeFormat("pt-PT", {
      day: "2-digit",
    }).format(startDate);

  const month =
    new Intl.DateTimeFormat("pt-PT", {
      month: "short",
    })
      .format(startDate)
      .replace(".", "")
      .toUpperCase();


  if (!endDate) {
    return {
      day: startDay,
      month,
    };
  }


  const finalDate = parseDate(endDate);

  const finalDay =
    new Intl.DateTimeFormat("pt-PT", {
      day: "2-digit",
    }).format(finalDate);


  return {
    day: `${startDay}–${finalDay}`,
    month,
  };
}


function isExternalUrl(url: string) {
  return (
    url.startsWith("http://") ||
    url.startsWith("https://")
  );
}


type EventPosterProps = {
  event: AgendaItem;
  featured?: boolean;
};


function EventPoster({
  event,
  featured = false,
}: EventPosterProps) {
  const formattedDate = formatEventDate(
    event.date,
    event.endDate
  );

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
        h-full
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-[#111111]
        ${
          featured
            ? "min-h-[540px]"
            : "min-h-[255px]"
        }
      `}
    >

      {/* Fundo desfocado */}

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
            ? "(min-width: 1024px) 65vw, 100vw"
            : "(min-width: 1024px) 35vw, 100vw"
        }
      />


      {/* Imagem principal */}

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
            ? "(min-width: 1024px) 65vw, 100vw"
            : "(min-width: 1024px) 35vw, 100vw"
        }
      />


      {/* Degradê */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black
          via-black/45
          to-black/5
        "
      />


      {/* Data */}

      {formattedDate && (
        <div
          className={`
            absolute
            left-6
            top-6
            flex
            flex-col
            items-center
            justify-center
            rounded-2xl
            bg-[#e4a63a]
            px-3
            text-black
            shadow-xl
            ${
              featured
                ? "min-h-20 min-w-16"
                : "min-h-16 min-w-16"
            }
          `}
        >

          <strong
            className={`
              leading-none
              ${
                featured
                  ? "text-xl"
                  : "text-lg"
              }
            `}
          >
            {formattedDate.day}
          </strong>


          <span
            className="
              mt-2
              text-[10px]
              font-bold
              tracking-[0.15em]
            "
          >
            {formattedDate.month}
          </span>

        </div>
      )}


      {/* Em destaque */}

      {featured && (
        <span
          className="
            absolute
            right-6
            top-6
            whitespace-nowrap
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


      {/* Em breve */}

      {isComingSoon && (
        <span
          className="
            absolute
            right-6
            top-6
            z-10
            whitespace-nowrap
            rounded-full
            border
            border-[#e4a63a]/35
            bg-black/75
            px-4
            py-2
            text-[11px]
            font-semibold
            uppercase
            tracking-[0.18em]
            text-[#e4a63a]
            backdrop-blur-md
          "
        >
          Em breve
        </span>
      )}


      {/* Conteúdo */}

      <div
        className={`
          absolute
          inset-x-0
          bottom-0
          ${
            featured
              ? "p-8 sm:p-10"
              : "p-6"
          }
        `}
      >

        {/* Categoria aparece somente nos eventos confirmados */}

        {event.category && !isComingSoon && (
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


        <h3
          className={`
            font-semibold
            leading-tight
            tracking-tight
            ${
              event.category && !isComingSoon
                ? "mt-3"
                : ""
            }
            ${
              featured
                ? "max-w-4xl text-4xl sm:text-5xl"
                : "line-clamp-2 text-2xl"
            }
          `}
        >
          {event.title}
        </h3>


        {featured && event.description && (
          <p
            className="
              mt-4
              max-w-2xl
              leading-7
              text-white/65
            "
          >
            {event.description}
          </p>
        )}


        <div
          className="
            mt-4
            flex
            flex-wrap
            gap-x-4
            gap-y-2
            text-sm
            text-white/70
          "
        >

          {event.dateLabel && (
            <span>
              {event.dateLabel}
            </span>
          )}


          {event.time && (
            <span>
              {event.time}
            </span>
          )}


          {featured && event.location && (
            <span>
              {event.location}
            </span>
          )}

        </div>


        <div
          className="
            mt-5
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


          {featured && event.ticketUrl && (
            <a
              href={event.ticketUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={actionClassName}
            >
              Garantir ingresso
            </a>
          )}


          {!featured &&
            event.ctaUrl &&
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


export function AgendaSection() {
  const [currentIndex, setCurrentIndex] =
    useState(0);


  const specialEvents = useMemo(() => {
    const today = new Date();

    today.setHours(0, 0, 0, 0);


    return agenda
      .filter(
        (event) =>
          event.group ===
            "evento-especial" &&
          event.status !== "encerrado"
      )
      .filter((event) => {
        if (!event.date) {
          return true;
        }

        return (
          getEventTimestamp(event) >=
          today.getTime()
        );
      });
  }, []);


  const featuredEvent =
    specialEvents.find(
      (event) => event.featured
    ) ?? specialEvents[0];


  const rotatingEvents = useMemo(() => {
    return specialEvents
      .filter(
        (event) =>
          event.slug !== featuredEvent?.slug
      )
      .sort((firstEvent, secondEvent) => {
        const firstHasDate =
          Boolean(firstEvent.date);

        const secondHasDate =
          Boolean(secondEvent.date);


        if (
          firstHasDate &&
          !secondHasDate
        ) {
          return -1;
        }


        if (
          !firstHasDate &&
          secondHasDate
        ) {
          return 1;
        }


        return (
          getEventTimestamp(firstEvent) -
          getEventTimestamp(secondEvent)
        );
      });
  }, [
    featuredEvent,
    specialEvents,
  ]);


  const sideEvents = useMemo(() => {
    if (rotatingEvents.length === 0) {
      return [];
    }

    const quantity = Math.min(
      2,
      rotatingEvents.length
    );


    return Array.from(
      {
        length: quantity,
      },
      (_, offset) =>
        rotatingEvents[
          (currentIndex + offset) %
            rotatingEvents.length
        ]
    );
  }, [
    currentIndex,
    rotatingEvents,
  ]);


  useEffect(() => {
    if (rotatingEvents.length <= 2) {
      return;
    }


    const timer = window.setInterval(
      () => {
        setCurrentIndex(
          (previousIndex) =>
            (
              previousIndex + 2
            ) % rotatingEvents.length
        );
      },
      5000
    );


    return () => {
      window.clearInterval(timer);
    };
  }, [rotatingEvents.length]);


  return (
    <section
      id="agenda"
      className="
        border-t
        border-white/10
        bg-[#0b0b0b]
        px-6
        py-24
        text-white
      "
    >

      <div className="mx-auto max-w-7xl">

        {/* Cabeçalho */}

        <div
          className="
            grid
            gap-8
            lg:grid-cols-[minmax(0,1fr)_380px]
            lg:items-end
          "
        >

          <div>

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


            <h2
              className="
                mt-5
                text-5xl
                font-bold
                leading-[0.9]
                tracking-tight
                sm:text-7xl
              "
            >
              Próximos
              <br />
              momentos.
            </h2>

          </div>


          <div
            className="
              border-white/10
              lg:border-l
              lg:pl-8
            "
          >

            <p
              className="
                text-lg
                leading-8
                text-white/55
              "
            >
              Acompanhe os próximos eventos,
              conferências e encontros especiais
              da IBR Lisboa.
            </p>


            <Link
              href="/agenda"
              className="
                mt-6
                inline-flex
                items-center
                gap-2
                font-semibold
                text-[#e4a63a]
              "
            >
              Ver agenda completa →
            </Link>

          </div>

        </div>


        {/* Eventos */}

        {featuredEvent && (
          <div
            className="
              mt-14
              grid
              gap-6
              lg:grid-cols-[minmax(0,1.45fr)_minmax(320px,0.7fr)]
            "
          >

            <EventPoster
              event={featuredEvent}
              featured
            />


            <div
              className="
                grid
                gap-6
                sm:grid-cols-2
                lg:grid-cols-1
                lg:grid-rows-2
              "
            >

              {sideEvents.map(
                (event, index) => (
                  <EventPoster
                    key={`${event.slug}-${index}`}
                    event={event}
                  />
                )
              )}

            </div>

          </div>
        )}

      </div>

    </section>
  );
}