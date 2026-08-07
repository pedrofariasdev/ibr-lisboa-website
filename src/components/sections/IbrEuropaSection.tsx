import Link from "next/link";


export function IbrEuropaSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        border-t
        border-white/10
        bg-[#080808]
        px-6
        py-24
        text-white
        sm:py-32
      "
    >

      {/* Detalhes de fundo */}

      <div
        aria-hidden="true"
        className="
          absolute
          -right-32
          top-1/2
          h-[500px]
          w-[500px]
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
          -right-8
          top-1/2
          h-[340px]
          w-[340px]
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
          right-24
          top-1/2
          h-[180px]
          w-[180px]
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
          right-20
          top-1/2
          h-72
          w-72
          -translate-y-1/2
          rounded-full
          bg-[#e4a63a]/10
          blur-[120px]
        "
      />


      <div
        className="
          relative
          mx-auto
          max-w-7xl
        "
      >

        <div
          className="
            grid
            gap-12
            lg:grid-cols-[minmax(0,1fr)_480px]
            lg:items-end
          "
        >

          {/* Texto */}

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
              IBR Europa
            </span>


            <h2
              className="
                mt-6
                max-w-4xl
                text-5xl
                font-bold
                leading-[0.95]
                tracking-tight
                sm:text-7xl
              "
            >
              Uma igreja mais
              <br />
              perto do que
              <br />
              você imagina.
            </h2>


            <p
              className="
                mt-7
                max-w-2xl
                text-lg
                leading-8
                text-white/55
              "
            >
              A IBR está presente em diferentes
              cidades da Europa. Encontre uma
              comunidade perto de você e faça
              parte dessa família.
            </p>

          </div>


          {/* Pesquisa */}

          <div
            className="
              rounded-[2rem]
              border
              border-white/10
              bg-white/[0.04]
              p-6
              backdrop-blur-sm
              sm:p-8
            "
          >

            <span
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.25em]
                text-white/40
              "
            >
              Encontre uma IBR
            </span>


            <h3
              className="
                mt-4
                text-2xl
                font-semibold
                tracking-tight
              "
            >
              Qual cidade você está?
            </h3>


            <form
              action="/ibr-europa"
              method="get"
              className="
                mt-7
                flex
                flex-col
                gap-3
              "
            >

              <label
                htmlFor="busca-ibr"
                className="sr-only"
              >
                Pesquisar por cidade ou país
              </label>


              <div
                className="
                  flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-white/15
                  bg-black/50
                  px-5
                  transition
                  focus-within:border-[#e4a63a]/60
                "
              >

                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="
                    h-5
                    w-5
                    shrink-0
                    text-white/35
                  "
                >
                  <path
                    d="m21 21-4.35-4.35m2.35-5.65a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>


                <input
                  id="busca-ibr"
                  type="search"
                  name="busca"
                  placeholder="Cidade ou país..."
                  className="
                    min-w-0
                    flex-1
                    bg-transparent
                    py-4
                    text-sm
                    text-white
                    outline-none
                    placeholder:text-white/30
                  "
                />

              </div>


              <button
                type="submit"
                className="
                  rounded-full
                  bg-[#e4a63a]
                  px-6
                  py-4
                  text-sm
                  font-semibold
                  text-black
                  transition
                  hover:bg-[#f0b64c]
                "
              >
                Procurar IBR →
              </button>

            </form>


            <Link
              href="/ibr-europa"
              className="
                mt-6
                inline-flex
                text-sm
                font-semibold
                text-white/50
                transition
                hover:text-[#e4a63a]
              "
            >
              Ver todas as IBRs da Europa →
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}