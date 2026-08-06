import Link from "next/link";
import Image from "next/image";
import { projetos } from "@/data/projetos";

export function ProjetosSection() {
  return (
    <section
      id="projetos"
      className="border-t border-white/10 bg-black px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">

        {/* Cabeçalho */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#e4a63a]">
              Nossa missão
            </span>

            <h2 className="mt-5 max-w-3xl text-5xl font-bold leading-[1] tracking-tight sm:text-7xl">
              Vivendo
              <br />
              a missão.
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-lg leading-8 text-white/55">
              Uma fé que ultrapassa as paredes da igreja e alcança pessoas
              através do amor, serviço e transformação.
            </p>
          </div>

        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {projetos.map((projeto) => {
            const conteudo = (
              <>
                <Image
                  src={projeto.image}
                  alt={projeto.name}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-8">
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#e4a63a]">
                    Projeto
                  </span>

                  <h3 className="mt-3 text-4xl font-semibold tracking-tight">
                    {projeto.name}
                  </h3>

                  <p className="mt-4 max-w-md text-base leading-7 text-white/65">
                    {projeto.description}
                  </p>

                  {projeto.emBreve ? (
                    <span className="mt-6 inline-flex rounded-full border border-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                      Em breve
                    </span>
                  ) : (
                    <span className="mt-6 inline-flex text-sm font-semibold text-[#e4a63a] opacity-0 transition duration-300 group-hover:opacity-100">
                      Conhecer projeto →
                    </span>
                  )}
                </div>
              </>
            );

            const classesBase =
              "group relative min-h-[380px] overflow-hidden rounded-3xl border border-white/10 bg-[#111111] transition duration-500";

            return projeto.emBreve ? (
              <div key={projeto.slug} className={classesBase}>
                {conteudo}
              </div>
            ) : (
              <Link
                key={projeto.slug}
                href={`/projetos/${projeto.slug}`}
                className={`${classesBase} hover:-translate-y-2 hover:border-[#e4a63a]/50`}
              >
                {conteudo}
              </Link>
            );
          })}

        </div>

      </div>
    </section>
  );
}