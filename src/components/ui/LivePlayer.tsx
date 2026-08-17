"use client";

import Image from "next/image";
import Link from "next/link";

import { useLiveStatus } from "@/components/live/LiveStatusProvider";
import { ExternalMediaEmbed } from "@/components/privacy/ExternalMediaEmbed";
import { Countdown } from "@/components/ui/Countdown";
import { getCultoImage } from "@/lib/getCultoImage";
import { getNextCulto } from "@/lib/getNextCulto";
import { getLiveStatus } from "@/lib/getLiveStatus";

export function LivePlayer() {
  const { isChecking, liveStream } = useLiveStatus();
  const proximoCulto = getNextCulto();

  const cultoImage = proximoCulto
    ? getCultoImage(proximoCulto.nome)
    : "/images/cultos/culto-1.png";

  const scheduledStatus = proximoCulto
    ? getLiveStatus(proximoCulto.data)
    : "upcoming";

  return (
    <div id="ao-vivo" className="grid grid-cols-1 gap-6">
      <div className="relative aspect-video overflow-hidden rounded-3xl border border-white/10 bg-[#111]">

        {liveStream ? (
          liveStream.embeddable ? (
            <>
              <ExternalMediaEmbed
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
                fallbackHref={liveStream.watchUrl}
                loading="eager"
                provider="YouTube"
                src={`https://www.youtube.com/embed/${liveStream.videoId}?rel=0`}
                title={liveStream.title}
              />

              <div
                aria-live="polite"
                className="pointer-events-none absolute left-4 top-4 flex items-center gap-2 rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-lg sm:left-6 sm:top-6"
              >
                <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
                EM DIRETO
              </div>
            </>
          ) : (
            <>
              <Image
                src={liveStream.thumbnailUrl || cultoImage}
                alt=""
                fill
                className="object-cover opacity-35"
              />
              <div className="absolute inset-0 bg-black/70" />
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">
                <span className="rounded-full bg-red-600 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white">
                  Em direto
                </span>
                <h2 className="mt-6 max-w-2xl text-2xl font-bold sm:text-4xl">
                  {liveStream.title}
                </h2>
                <a
                  className="mt-8 inline-flex rounded-full bg-[#E4A63A] px-6 py-3 font-semibold text-black transition hover:bg-[#f0b64c]"
                  href={liveStream.watchUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Assistir no YouTube
                </a>
              </div>
            </>
          )
        ) : isChecking ? (
          <div
            aria-live="polite"
            className="absolute inset-0 flex items-center justify-center px-6 text-center text-sm text-white/70"
          >
            A verificar a transmissão no YouTube…
          </div>
        ) : scheduledStatus === "starting" ? (
          <>
            <Image
              src={cultoImage}
              alt=""
              fill
              className="object-cover opacity-30"
            />

            <div className="absolute inset-0 bg-black/70" />

            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">
              <span className="rounded-full border border-red-500/30 bg-red-500/10 px-5 py-2 text-xs uppercase tracking-[0.25em] text-red-400">
                🔴 Preparando transmissão
              </span>

              <h2 className="mt-6 text-3xl font-bold sm:text-4xl">
                O culto começa em instantes
              </h2>

              {proximoCulto && <Countdown targetDate={proximoCulto.data} />}
            </div>
          </>
        ) : (
          <>
            <Image
              src={cultoImage}
              alt=""
              fill
              className="object-cover opacity-30"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />

            <div className="absolute inset-0 flex translate-y-4 flex-col items-center justify-center px-6 text-center">
              <span className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.25em] text-white/70">
                Próxima transmissão
              </span>

              <h2 className="mt-8 text-3xl font-bold sm:text-4xl">
                A próxima transmissão começa em breve
              </h2>

              {proximoCulto && (
                <>
                  <p className="mt-3 text-white/70">
                    {proximoCulto.nome}
                    <br />
                    {proximoCulto.data.toLocaleDateString("pt-PT", {
                      weekday: "long",
                      day: "numeric",
                      month: "long",
                      timeZone: "Europe/Lisbon",
                    })}
                    {" • "}
                    {proximoCulto.horario}
                  </p>

                  <Countdown targetDate={proximoCulto.data} />
                </>
              )}

              <Link
                href="/mensagens"
                className="mt-8 inline-flex rounded-full bg-[#E4A63A] px-6 py-3 font-semibold text-black transition hover:bg-[#f0b64c]"
              >
                Ver mensagens anteriores
              </Link>
            </div>
          </>
        )}

      </div>
    </div>
  );
}
