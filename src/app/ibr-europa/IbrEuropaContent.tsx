"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

import {
  igrejasEuropa,
  type IgrejaEuropa,
} from "@/data/igrejas";


function normalizeText(text: string) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}


function ChurchCard({
  church,
}: {
  church: IgrejaEuropa;
}) {
  return (
    <article
      className="
        group
        flex
        min-h-[320px]
        flex-col
        justify-between
        rounded-3xl
        border
        border-white/10
        bg-[#0d0d0d]
        p-7
        transition
        duration-300
        hover:-translate-y-1
        hover:border-[#e4a63a]/35
      "
    >
      <div>
        <div className="flex items-center justify-between gap-4">
          <span
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.25em]
              text-[#e4a63a]
            "
          >
            {church.country}
          </span>

          {church.featured && (
            <span
              className="
                rounded-full
                border
                border-white/10
                bg-white/[0.04]
                px-3
                py-1
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-white/50
              "
            >
              IBR Europa
            </span>
          )}
        </div>


        <h2
          className="
            mt-7
            text-3xl
            font-semibold
            tracking-tight
          "
        >
          {church.name}
        </h2>


        <p className="mt-2 text-white/55">
          {church.city}, {church.country}
        </p>


        {church.description && (
          <p
            className="
              mt-6
              leading-7
              text-white/60
            "
          >
            {church.description}
          </p>
        )}


        {church.address && (
          <div
            className="
              mt-6
              border-t
              border-white/10
              pt-5
            "
          >
            <span
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#e4a63a]
              "
            >
              Localização
            </span>

            <p
              className="
                mt-2
                leading-6
                text-white/60
              "
            >
              {church.address}
            </p>
          </div>
        )}


        {church.pastor && (
          <div
            className="
              mt-5
              border-t
              border-white/10
              pt-5
            "
          >
            <span
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#e4a63a]
              "
            >
              Liderança
            </span>

            <p
              className="
                mt-2
                font-medium
                text-white/75
              "
            >
              {church.pastor}
            </p>
          </div>
        )}
      </div>


      {(church.website ||
        church.instagram ||
        church.whatsapp) && (
        <div
          className="
            mt-8
            flex
            flex-wrap
            gap-3
          "
        >
          {church.website && (
            <a
              href={church.website}
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-full
                bg-[#e4a63a]
                px-5
                py-2.5
                text-sm
                font-semibold
                text-black
                transition
                hover:bg-[#f0b64c]
              "
            >
              Visitar site
            </a>
          )}


          {church.instagram && (
            <a
              href={church.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-full
                border
                border-white/15
                px-5
                py-2.5
                text-sm
                font-semibold
                text-white
                transition
                hover:bg-white/10
              "
            >
              Instagram
            </a>
          )}


          {church.whatsapp && (
            <a
              href={church.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-full
                border
                border-white/15
                px-5
                py-2.5
                text-sm
                font-semibold
                text-white
                transition
                hover:bg-white/10
              "
            >
              WhatsApp
            </a>
          )}
        </div>
      )}
    </article>
  );
}


export default function IbrEuropaContent() {
  const searchParams = useSearchParams();

  const buscaInicial =
    searchParams.get("busca") ?? "";

  const [search, setSearch] =
    useState(buscaInicial);

  const [country, setCountry] =
    useState("Todos");


  const countries = useMemo(() => {
    return [
      "Todos",
      ...Array.from(
        new Set(
          igrejasEuropa.map(
            (church) => church.country
          )
        )
      ).sort(),
    ];
  }, []);


  const filteredChurches = useMemo(() => {
    const normalizedSearch =
      normalizeText(search);

    return igrejasEuropa.filter(
      (church) => {
        const matchesCountry =
          country === "Todos" ||
          church.country === country;

        const searchableText =
          normalizeText(
            `
              ${church.name}
              ${church.city}
              ${church.country}
              ${church.address ?? ""}
              ${church.pastor ?? ""}
            `
          );

        const matchesSearch =
          !normalizedSearch ||
          searchableText.includes(
            normalizedSearch
          );

        return (
          matchesCountry &&
          matchesSearch
        );
      }
    );
  }, [search, country]);


  return (
    <main
      className="
        min-h-screen
        bg-black
        text-white
      "
    >

      {/* HERO */}

      <section
        className="
          relative
          overflow-hidden
          border-b
          border-white/10
          px-6
          pb-24
          pt-40
          sm:pb-32
          sm:pt-48
        "
      >
        <div
          aria-hidden="true"
          className="
            absolute
            -right-40
            top-0
            h-[520px]
            w-[520px]
            rounded-full
            bg-[#e4a63a]/10
            blur-[160px]
          "
        />


        <div
          className="
            relative
            mx-auto
            max-w-7xl
          "
        >
          <span
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.35em]
              text-[#e4a63a]
            "
          >
            IBR Europa
          </span>


          <h1
            className="
              mt-7
              max-w-5xl
              text-5xl
              font-bold
              leading-[0.92]
              tracking-tight
              sm:text-7xl
              lg:text-8xl
            "
          >
            Uma igreja.
            <br />
            Muitas cidades.
          </h1>


          <div
            className="
              mt-10
              grid
              gap-10
              lg:grid-cols-[minmax(0,1fr)_420px]
              lg:items-end
            "
          >
            <p
              className="
                max-w-2xl
                text-lg
                leading-8
                text-white/60
                sm:text-xl
              "
            >
              A IBR está presente em
              diferentes cidades da Europa,
              formando comunidades de fé,
              comunhão e transformação.
            </p>


            <div
              className="
                border-l
                border-[#e4a63a]/40
                pl-6
              "
            >
              <span
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-white/50
                "
              >
                A mesma missão
              </span>

              <p
                className="
                  mt-3
                  leading-7
                  text-white/70
                "
              >
                Diferentes cidades,
                diferentes culturas e uma
                mesma paixão por Jesus e
                pelas pessoas.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* DESTAQUE */}

      <section className="px-6 py-24">
        <div
          className="
            relative
            mx-auto
            min-h-[420px]
            max-w-7xl
            overflow-hidden
            rounded-[2rem]
            border
            border-white/10
            bg-[#0a0a0a]
          "
        >
          <div
            aria-hidden="true"
            className="
              absolute
              left-1/2
              top-1/2
              h-[400px]
              w-[400px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border
              border-[#e4a63a]/10
            "
          />

          <div
            aria-hidden="true"
            className="
              absolute
              left-1/2
              top-1/2
              h-[300px]
              w-[300px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border
              border-[#e4a63a]/10
            "
          />

          <div
            aria-hidden="true"
            className="
              absolute
              left-1/2
              top-1/2
              h-[200px]
              w-[200px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border
              border-[#e4a63a]/10
            "
          />


          <div
            aria-hidden="true"
            className="
              absolute
              left-1/2
              top-1/2
              h-72
              w-72
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#e4a63a]/10
              blur-[120px]
            "
          />


          <div
            className="
              relative
              z-10
              flex
              min-h-[420px]
              flex-col
              items-center
              justify-center
              px-8
              text-center
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
              Europa
            </span>


            <h2
              className="
                mt-5
                max-w-3xl
                text-4xl
                font-semibold
                tracking-tight
                sm:text-6xl
              "
            >
              Encontre uma IBR perto de você.
            </h2>


            <p
              className="
                mt-6
                max-w-xl
                leading-7
                text-white/55
              "
            >
              Consulte abaixo as comunidades
              IBR presentes em diferentes
              cidades e países.
            </p>
          </div>
        </div>
      </section>


      {/* DIRETÓRIO */}

      <section
        className="
          border-t
          border-white/10
          px-6
          py-24
        "
      >
        <div className="mx-auto max-w-7xl">

          <div
            className="
              grid
              gap-8
              lg:grid-cols-[minmax(0,1fr)_420px]
              lg:items-end
            "
          >
            <div>
              <span
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-[#e4a63a]
                "
              >
                Encontre uma igreja
              </span>


              <h2
                className="
                  mt-4
                  text-4xl
                  font-semibold
                  tracking-tight
                  sm:text-5xl
                "
              >
                IBR pela Europa
              </h2>


              <p
                className="
                  mt-4
                  max-w-xl
                  leading-7
                  text-white/55
                "
              >
                Pesquise por cidade, país ou
                nome da igreja.
              </p>
            </div>


            <div>
              <label
                htmlFor="church-search"
                className="sr-only"
              >
                Pesquisar igreja
              </label>


              <input
                id="church-search"
                type="search"
                value={search}
                onChange={(event) =>
                  setSearch(
                    event.target.value
                  )
                }
                placeholder="Pesquisar cidade ou país..."
                className="
                  w-full
                  rounded-full
                  border
                  border-white/15
                  bg-white/[0.04]
                  px-6
                  py-4
                  text-white
                  outline-none
                  transition
                  placeholder:text-white/40
                  focus:border-[#e4a63a]/60
                "
              />
            </div>
          </div>


          {/* FILTROS */}

          <div
            className="
              mt-10
              flex
              flex-wrap
              gap-3
            "
          >
            {countries.map(
              (item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() =>
                    setCountry(item)
                  }
                  className={`
                    rounded-full
                    px-5
                    py-2.5
                    text-sm
                    font-semibold
                    transition
                    ${
                      country === item
                        ? "bg-[#e4a63a] text-black"
                        : "border border-white/15 text-white/65 hover:bg-white/10 hover:text-white"
                    }
                  `}
                >
                  {item}
                </button>
              )
            )}
          </div>


          {/* CONTADOR */}

          <div
            className="
              mt-10
              flex
              items-center
              justify-between
              border-b
              border-white/10
              pb-5
            "
          >
            <p className="text-sm text-white/50">
              {filteredChurches.length}{" "}
              {filteredChurches.length === 1
                ? "igreja encontrada"
                : "igrejas encontradas"}
            </p>

            {(search ||
              country !== "Todos") && (
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setCountry("Todos");
                }}
                className="
                  text-sm
                  font-semibold
                  text-[#e4a63a]
                  transition
                  hover:text-[#f0b64c]
                "
              >
                Limpar filtros
              </button>
            )}
          </div>


          {/* CARDS */}

          {filteredChurches.length > 0 ? (
            <div
              className="
                mt-10
                grid
                gap-6
                md:grid-cols-2
                lg:grid-cols-3
              "
            >
              {filteredChurches.map(
                (church) => (
                  <ChurchCard
                    key={church.slug}
                    church={church}
                  />
                )
              )}
            </div>
          ) : (
            <div
              className="
                mt-12
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                px-8
                py-16
                text-center
              "
            >
              <h3
                className="
                  text-2xl
                  font-semibold
                "
              >
                Nenhuma IBR encontrada
              </h3>


              <p
                className="
                  mt-3
                  text-white/55
                "
              >
                Tente pesquisar outra cidade,
                país ou nome da igreja.
              </p>


              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setCountry("Todos");
                }}
                className="
                  mt-7
                  rounded-full
                  bg-[#e4a63a]
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-black
                  transition
                  hover:bg-[#f0b64c]
                "
              >
                Ver todas as IBRs
              </button>
            </div>
          )}
        </div>
      </section>


      {/* CTA */}

      <section
        className="
          px-6
          pb-24
        "
      >
        <div
          className="
            mx-auto
            max-w-7xl
            rounded-[2rem]
            bg-[#e4a63a]
            px-8
            py-14
            text-black
            sm:px-14
            sm:py-20
          "
        >
          <div
            className="
              grid
              gap-10
              lg:grid-cols-[minmax(0,1fr)_380px]
              lg:items-end
            "
          >
            <h2
              className="
                max-w-4xl
                text-4xl
                font-bold
                leading-tight
                tracking-tight
                sm:text-6xl
              "
            >
              Onde houver pessoas,
              existe uma oportunidade
              para servir.
            </h2>


            <div>
              <p
                className="
                  leading-7
                  text-black/70
                "
              >
                Conheça a IBR Lisboa ou
                encontre uma comunidade
                próxima de você.
              </p>


              <Link
                href="/#contacto"
                className="
                  mt-7
                  inline-flex
                  rounded-full
                  bg-black
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  transition
                  hover:bg-black/80
                "
              >
                Conhecer a IBR Lisboa
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}