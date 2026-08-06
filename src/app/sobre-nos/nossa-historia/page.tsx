import Link from "next/link";


const journey = [
  {
    number: "01",
    title: "Um chamado",
    text:
      "A história da IBR Lisboa começou com um desejo simples e profundo: construir uma comunidade onde pessoas pudessem conhecer Jesus, encontrar acolhimento e desenvolver uma fé verdadeira.",
  },
  {
    number: "02",
    title: "Uma comunidade",
    text:
      "O que começou como um encontro entre pessoas unidas pela mesma fé tornou-se uma família espiritual marcada pela comunhão, pelo cuidado e pelo compromisso com a Palavra de Deus.",
  },
  {
    number: "03",
    title: "Uma igreja para a cidade",
    text:
      "Com o passar do tempo, a igreja ampliou sua atuação, desenvolvendo ministérios, projetos e encontros voltados para crianças, jovens, adultos e famílias.",
  },
  {
    number: "04",
    title: "O próximo capítulo",
    text:
      "Continuamos avançando com os olhos em Cristo e o coração voltado para Lisboa, acreditando que ainda existem muitas vidas para alcançar e muitas histórias para viver.",
  },
];


const values = [
  "Uma igreja centrada em Jesus",
  "Uma família que acolhe e cuida",
  "Uma comunidade firmada na Palavra",
  "Uma fé vivida dentro e fora da igreja",
];


export default function NossaHistoriaPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Hero */}

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
            top-20
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#e4a63a]/10
            blur-[150px]
          "
        />


        <div
          aria-hidden="true"
          className="
            absolute
            left-[-200px]
            top-[350px]
            h-[400px]
            w-[400px]
            rounded-full
            bg-white/[0.04]
            blur-[130px]
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
            Sobre nós
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
            Uma história de fé,
            <br />
            comunhão e propósito.
          </h1>


          <div
            className="
              mt-10
              grid
              gap-8
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
              A IBR Lisboa é uma comunidade cristã
              que existe para aproximar pessoas de
              Jesus e ajudá-las a viver uma fé
              transformadora em todas as áreas da vida.
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
                  text-white/40
                "
              >
                Nossa caminhada
              </span>

              <p
                className="
                  mt-3
                  leading-7
                  text-white/70
                "
              >
                Pessoas diferentes, reunidas pela
                mesma fé e pelo desejo de construir
                uma igreja viva em Lisboa.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Introdução */}

      <section
        className="
          px-6
          py-24
          sm:py-32
        "
      >
        <div
          className="
            mx-auto
            grid
            max-w-7xl
            gap-12
            lg:grid-cols-[360px_minmax(0,1fr)]
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
              Onde tudo começou
            </span>

            <h2
              className="
                mt-5
                text-4xl
                font-semibold
                leading-tight
                tracking-tight
                sm:text-5xl
              "
            >
              Mais do que um lugar, uma família.
            </h2>
          </div>


          <div
            className="
              max-w-3xl
              space-y-6
              text-lg
              leading-8
              text-white/60
            "
          >
            <p>
              A IBR Lisboa nasceu no coração de pessoas
              que acreditavam que a igreja deveria ser
              um lugar de encontro com Deus, mas também
              de relacionamento, cuidado e crescimento.
            </p>

            <p>
              Desde os primeiros encontros, a visão
              sempre foi construir uma comunidade onde
              todos pudessem chegar como estão, conhecer
              a mensagem de Jesus e encontrar pessoas
              dispostas a caminhar ao seu lado.
            </p>

            <p>
              Aos poucos, novas famílias chegaram,
              ministérios foram formados e diferentes
              gerações passaram a fazer parte dessa
              história. Cada pessoa trouxe consigo
              experiências, dons e sonhos que ajudaram
              a construir aquilo que somos hoje.
            </p>
          </div>
        </div>
      </section>


      {/* Frase central */}

      <section className="px-6">
        <div
          className="
            mx-auto
            max-w-7xl
            overflow-hidden
            rounded-[2rem]
            border
            border-white/10
            bg-[#0e0e0e]
            px-8
            py-16
            sm:px-14
            sm:py-24
            lg:px-20
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
            Nossa essência
          </span>

          <blockquote
            className="
              mt-8
              max-w-5xl
              text-3xl
              font-semibold
              leading-tight
              tracking-tight
              text-white
              sm:text-5xl
              lg:text-6xl
            "
          >
            “Não estamos apenas construindo uma igreja.
            Estamos construindo um lugar onde vidas
            encontram direção, esperança e uma nova
            família.”
          </blockquote>
        </div>
      </section>


      {/* Jornada */}

      <section
        className="
          px-6
          py-24
          sm:py-32
        "
      >
        <div className="mx-auto max-w-7xl">
          <div
            className="
              grid
              gap-8
              lg:grid-cols-[minmax(0,1fr)_480px]
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
                Nossa jornada
              </span>

              <h2
                className="
                  mt-5
                  max-w-3xl
                  text-4xl
                  font-semibold
                  leading-tight
                  tracking-tight
                  sm:text-6xl
                "
              >
                Uma história que continua sendo escrita.
              </h2>
            </div>


            <p
              className="
                text-lg
                leading-8
                text-white/55
              "
            >
              Cada fase representa pessoas que chegaram,
              serviram, cresceram e ajudaram a fortalecer
              a missão da IBR Lisboa.
            </p>
          </div>


          <div
            className="
              mt-16
              grid
              border-t
              border-white/10
              md:grid-cols-2
            "
          >
            {journey.map((item, index) => (
              <article
                key={item.number}
                className={`
                  border-white/10
                  py-10
                  md:p-10
                  ${
                    index % 2 === 0
                      ? "md:border-r"
                      : ""
                  }
                  ${
                    index < 2
                      ? "border-b"
                      : ""
                  }
                `}
              >
                <span
                  className="
                    text-sm
                    font-semibold
                    tracking-[0.2em]
                    text-[#e4a63a]
                  "
                >
                  {item.number}
                </span>

                <h3
                  className="
                    mt-6
                    text-3xl
                    font-semibold
                    tracking-tight
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-5
                    max-w-xl
                    leading-7
                    text-white/55
                  "
                >
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>


      {/* O que permanece */}

      <section
        className="
          border-y
          border-white/10
          bg-[#0a0a0a]
          px-6
          py-24
          sm:py-32
        "
      >
        <div
          className="
            mx-auto
            grid
            max-w-7xl
            gap-14
            lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]
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
              O que permanece
            </span>

            <h2
              className="
                mt-5
                text-4xl
                font-semibold
                leading-tight
                tracking-tight
                sm:text-5xl
              "
            >
              Crescemos, mas nossa essência continua
              a mesma.
            </h2>
          </div>


          <div
            className="
              grid
              gap-px
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-white/10
              sm:grid-cols-2
            "
          >
            {values.map((value, index) => (
              <div
                key={value}
                className="
                  bg-[#0d0d0d]
                  p-7
                  sm:p-9
                "
              >
                <span
                  className="
                    text-sm
                    font-semibold
                    text-[#e4a63a]
                  "
                >
                  0{index + 1}
                </span>

                <p
                  className="
                    mt-5
                    text-xl
                    font-semibold
                    leading-7
                  "
                >
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Presente */}

      <section
        className="
          px-6
          py-24
          sm:py-32
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
            lg:px-20
          "
        >
          <div
            className="
              grid
              gap-10
              lg:grid-cols-[minmax(0,1fr)_390px]
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
                  text-black/60
                "
              >
                O presente e o futuro
              </span>

              <h2
                className="
                  mt-5
                  max-w-4xl
                  text-4xl
                  font-bold
                  leading-tight
                  tracking-tight
                  sm:text-6xl
                "
              >
                Nossa história continua com cada pessoa
                que chega.
              </h2>
            </div>


            <div>
              <p
                className="
                  leading-7
                  text-black/70
                "
              >
                Acreditamos que Deus ainda tem novos
                capítulos para a IBR Lisboa e que você
                também pode fazer parte deles.
              </p>

              <div
                className="
                  mt-7
                  flex
                  flex-wrap
                  gap-4
                "
              >
                <Link
                  href="/cultos"
                  className="
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
                  Conhecer nossos cultos
                </Link>

                <Link
                  href="/sobre-nos/nossa-visao"
                  className="
                    rounded-full
                    border
                    border-black/25
                    px-6
                    py-3
                    text-sm
                    font-semibold
                    transition
                    hover:bg-black/10
                  "
                >
                  Conhecer nossa visão
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}