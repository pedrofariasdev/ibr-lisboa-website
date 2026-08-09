import Image from "next/image";
import Link from "next/link";

import { getNextCulto } from "@/lib/getNextCulto";
import { getLiveStatus } from "@/lib/getLiveStatus";
import { getCultoImage } from "@/lib/getCultoImage";
import { Countdown } from "@/components/ui/Countdown";
import { ExternalMediaEmbed } from "@/components/privacy/ExternalMediaEmbed";

const CHANNEL_ID = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID;

export function LivePlayer() {
  const proximoCulto = getNextCulto();

  const cultoImage = proximoCulto
    ? getCultoImage(proximoCulto.nome)
    : "/images/cultos/culto-1.png";

  const status = proximoCulto
    ? getLiveStatus(proximoCulto.data)
    : "upcoming";

  return (
    <div id="ao-vivo" className="grid grid-cols-1 gap-6">
      <div className="relative aspect-video overflow-hidden rounded-3xl border border-white/10 bg-[#111]">

        {status === "live" && CHANNEL_ID && (
          <>
            <ExternalMediaEmbed
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
              fallbackHref="https://www.youtube.com/@ibrlisboa/live"
              loading="eager"
              provider="YouTube"
              src={`https://www.youtube.com/embed/live_stream?channel=${CHANNEL_ID}`}
              title="IBR Lisboa Ao Vivo"
            />

            <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white">
              <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
              EM DIRETO
            </div>
          </>
        )}

        {status === "starting" && (
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
        )}

        {status === "upcoming" && (
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
