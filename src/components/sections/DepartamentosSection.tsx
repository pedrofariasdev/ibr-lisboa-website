import Link from "next/link";
import Image from "next/image";
import { departamentos } from "@/data/departamentos";

export function DepartamentosSection() {
  return (
    <section
      id="departamentos"
      className="border-t border-white/10 bg-[#0b0b0b] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">

        {/* Cabeçalho */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#e4a63a]">
              Faça parte
            </span>

            <h2 className="mt-5 max-w-3xl text-5xl font-bold leading-[1] tracking-tight sm:text-7xl">
              Existe um lugar
              <br />
              para você.
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-lg leading-8 text-white/55">
              Conheça os departamentos da IBR Lisboa e encontre um espaço para
              crescer, servir e construir relacionamentos.
            </p>

            <Link
              href="/departamentos"
              className="mt-6 inline-flex text-sm font-semibold text-[#e4a63a] transition hover:text-[#f0b64c]"
            >
              Ver todos os departamentos →
            </Link>
          </div>
        </div>


        {/* Cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {departamentos.map((departamento) => (

            <Link
              key={departamento.name}
              href={`/departamentos/${departamento.slug}`}
              className="group relative min-h-[360px] overflow-hidden rounded-3xl border border-white/10 bg-[#111111] transition duration-500 hover:-translate-y-2 hover:border-[#e4a63a]/50"
            >

              <Image
                src={departamento.image}
                alt={departamento.name}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />


              <div className="absolute inset-x-0 bottom-0 p-7">

                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#e4a63a]">
                  Departamento
                </span>

                <h3 className="mt-3 text-3xl font-semibold">
                  {departamento.name}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/60">
                  {departamento.description}
                </p>

                <span className="mt-5 inline-flex text-sm font-semibold text-[#e4a63a] opacity-0 transition group-hover:opacity-100">
                  Conhecer departamento →
                </span>

              </div>

            </Link>

          ))}

        </div>

      </div>
    </section>
  );
}