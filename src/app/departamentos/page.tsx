import Link from "next/link";
import Image from "next/image";
import { departamentos } from "@/data/departamentos";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Departamentos",
  description:
    "Conheça os departamentos da IBR Lisboa e encontre o seu lugar para crescer e servir.",
  path: "/departamentos",
});

export default function DepartamentosPage() {
  return (
    <section className="border-t border-white/10 bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#e4a63a]">
          Faça parte
        </span>

        <h1 className="mt-5 max-w-3xl text-5xl font-bold leading-[1] tracking-tight sm:text-7xl">
          Existe um lugar
          <br />
          para você.
        </h1>

        <p className="mt-7 max-w-xl text-lg leading-8 text-white/60">
          Conheça os departamentos da IBR Lisboa e encontre um espaço para
          crescer, servir e construir relacionamentos.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {departamentos.map((dep) => (
            <Link
              key={dep.slug}
              href={`/departamentos/${dep.slug}`}
              className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#111111] transition duration-500 hover:-translate-y-2 hover:border-[#e4a63a]/50"
            >
              {/* Logo */}
              <div className="flex h-[190px] items-center justify-center bg-black p-8">
                <Image
                  src={dep.image}
                  alt={dep.name}
                  width={320}
                  height={160}
                  className="max-h-full w-auto object-contain transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Texto */}
              <div className="flex flex-1 flex-col p-8">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#e4a63a]">
                  Departamento
                </span>

                <h2 className="mt-3 text-4xl font-semibold tracking-tight">
                  {dep.name}
                </h2>

                <p className="mt-4 text-base leading-7 text-white/65">
                  {dep.description}
                </p>

                <span className="mt-auto pt-6 text-sm font-semibold text-[#e4a63a] opacity-0 transition duration-300 group-hover:opacity-100">
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
