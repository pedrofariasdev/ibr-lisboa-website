import Link from "next/link";

export function CultosSection() {
  const isLive = false;

  return (
    <section
      id="cultos"
      className="border-t border-white/10 bg-[#0B0B0B] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#E4A63A]">
              Encontre-nos
            </span>

            <h2 className="mt-5 text-5xl font-bold tracking-tight sm:text-7xl">
              Cultos
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-white/55">
              Venha viver um tempo de adoração, comunhão e transformação
              conosco.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:p-10">
            {isLive ? (
              <>
                <div className="flex items-center gap-3">
                  <span className="h-3 w-3 animate-pulse rounded-full bg-red-600" />

                  <span className="text-sm font-semibold uppercase tracking-[0.25em] text-red-500">
                    Estamos ao vivo
                  </span>
                </div>

                <h3 className="mt-6 text-3xl font-semibold sm:text-4xl">
                  Participe do culto agora
                </h3>

                <Link
                  href="/ao-vivo"
                  className="mt-8 inline-flex rounded-full bg-red-600 px-7 py-3.5 font-semibold transition hover:bg-red-500"
                >
                  Assistir transmissão
                </Link>
              </>
            ) : (
              <>
                <span className="text-sm uppercase tracking-[0.25em] text-white/45">
                  Próximo culto
                </span>

                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <div>
                    <p className="text-5xl font-bold text-[#E4A63A]">Domingo</p>
                    <p className="mt-2 text-xl text-white/70">10h30</p>
                  </div>

                  <div className="border-t border-white/10 pt-6 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
                    <p className="text-sm uppercase tracking-[0.2em] text-white/40">
                      Local
                    </p>

                    <p className="mt-3 text-lg leading-7 text-white/75">
                      IBR Lisboa
                      <br />
                      Morada a confirmar
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/cultos"
                    className="rounded-full bg-[#E4A63A] px-7 py-3.5 font-semibold text-black transition hover:bg-[#f0b64c]"
                  >
                    Ver todos os cultos
                  </Link>

                  <Link
                    href="/contacto"
                    className="rounded-full border border-white/15 px-7 py-3.5 font-semibold transition hover:border-white/40 hover:bg-white/5"
                  >
                    Como chegar
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}