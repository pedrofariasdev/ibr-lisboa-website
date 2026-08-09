import Link from "next/link";

export function SobreSection() {
  return (
    <section
      id="sobre"
      className="overflow-hidden border-t border-white/10 bg-black px-6 py-24 text-white"
    >
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
        {/* Área visual provisória */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#111111]">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="h-full min-h-[480px] w-full object-cover"
          >
            <source
              src="https://pub-dca1bb5b94ed4e229db7b368e7093c91.r2.dev/videos/ibr-sobre-web.mp4"
              type="video/mp4"
            />
          </video> 

          <div className="absolute inset-0 bg-black/25" />

          <div className="absolute bottom-8 left-8">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#e4a63a]">
              IBR Lisboa
            </span>

            <p className="mt-3 text-lg text-white/80">
              Uma igreja formada por pessoas,
              <br />
              famílias e histórias transformadas.
            </p>
          </div>
        </div>

        {/* Conteúdo */}
        <div className="lg:pl-10">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#E4A63A]">
            Quem somos
          </span>

          <h2 className="mt-6 text-5xl font-bold leading-[1.02] tracking-tight sm:text-7xl">
            Mais que um lugar.
            <br />
            Uma família.
          </h2>

          <p className="mt-7 max-w-xl text-lg leading-8 text-white/60">
            A IBR Lisboa é uma comunidade cristã que acredita numa fé viva,
            relevante e transformadora. Um espaço onde pessoas podem conhecer
            a Deus, construir relacionamentos e descobrir o seu propósito.
          </p>

          <div className="mt-10 grid gap-6 border-y border-white/10 py-8 sm:grid-cols-3">
            <div>
              <strong className="block text-2xl font-semibold">Fé</strong>
              <span className="mt-1 block text-sm text-white/45">
                Vivida diariamente
              </span>
            </div>

            <div>
              <strong className="block text-2xl font-semibold">
                Comunhão
              </strong>
              <span className="mt-1 block text-sm text-white/45">
                Pessoas conectadas
              </span>
            </div>

            <div>
              <strong className="block text-2xl font-semibold">
                Propósito
              </strong>
              <span className="mt-1 block text-sm text-white/45">
                Dons em movimento
              </span>
            </div>
          </div>

          <Link
            href="/sobre-nos/nossa-historia"
            className="mt-9 inline-flex rounded-full border border-white/20 px-7 py-3.5 font-semibold transition hover:border-[#E4A63A] hover:bg-[#E4A63A] hover:text-black"
          >
            Conheça a nossa história
          </Link>
        </div>
      </div>
    </section>
  );
}
