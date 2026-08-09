import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Nossa Visão",
  description:
    "Conheça a missão, a visão e os valores que orientam a IBR Lisboa.",
  path: "/sobre-nos/nossa-visao",
});


const values = [
  {
    number: "01",
    title: "Jesus no centro",
    description:
      "Cristo é o centro da nossa fé, da nossa mensagem e de tudo o que fazemos como igreja.",
  },
  {
    number: "02",
    title: "Palavra de Deus",
    description:
      "Buscamos crescer no conhecimento das Escrituras e viver seus princípios diariamente.",
  },
  {
    number: "03",
    title: "Comunhão",
    description:
      "Acreditamos em uma igreja onde pessoas caminham juntas, cuidam umas das outras e constroem relacionamentos verdadeiros.",
  },
  {
    number: "04",
    title: "Serviço",
    description:
      "Cada pessoa possui dons e capacidades que podem ser usados para servir a Deus, à igreja e à comunidade.",
  },
  {
    number: "05",
    title: "Família",
    description:
      "Valorizamos famílias fortalecidas, relacionamentos saudáveis e um ambiente seguro para todas as gerações.",
  },
  {
    number: "06",
    title: "Missão",
    description:
      "Existimos para compartilhar a mensagem de Jesus e contribuir para a transformação de vidas.",
  },
];


const pillars = [
  {
    title: "Alcançar",
    text:
      "Apresentar Jesus de maneira clara, acolhedora e relevante para pessoas de diferentes histórias e culturas.",
  },
  {
    title: "Cuidar",
    text:
      "Receber cada pessoa com amor, criar relacionamentos verdadeiros e caminhar ao seu lado.",
  },
  {
    title: "Ensinar",
    text:
      "Fortalecer a fé por meio do ensino da Palavra de Deus e do desenvolvimento espiritual.",
  },
  {
    title: "Enviar",
    text:
      "Preparar pessoas para servirem com seus dons e fazerem diferença onde estiverem.",
  },
];


export default function NossaVisaoPage() {
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
            top-10
            h-[520px]
            w-[520px]
            rounded-full
            bg-[#e4a63a]/10
            blur-[160px]
          "
        />

        <div
          aria-hidden="true"
          className="
            absolute
            -left-48
            bottom-0
            h-[400px]
            w-[400px]
            rounded-full
            bg-white/[0.04]
            blur-[140px]
          "
        />


        <div className="relative mx-auto max-w-7xl">

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
            Uma igreja para
            <br />
            pessoas e para a cidade.
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
              Nossa visão é construir uma comunidade
              centrada em Jesus, firmada na Palavra e
              comprometida com a transformação de vidas.
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
                Nossa direção
              </span>

              <p
                className="
                  mt-3
                  leading-7
                  text-white/70
                "
              >
                Amar a Deus, cuidar de pessoas e servir
                Lisboa com fé, excelência e propósito.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* Missão */}

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
              Nossa missão
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
              Aproximar pessoas de Jesus.
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
              Existimos para compartilhar a mensagem de
              Jesus, acolher pessoas e ajudá-las a
              desenvolver uma fé sólida, prática e
              transformadora.
            </p>

            <p>
              Queremos ser uma igreja onde cada pessoa
              encontre espaço para pertencer, crescer,
              descobrir seu propósito e servir com os
              dons que recebeu.
            </p>

            <p>
              Nossa missão não acontece apenas durante
              os cultos. Ela continua dentro das casas,
              das famílias, dos locais de trabalho e em
              cada lugar onde podemos demonstrar o amor
              de Deus.
            </p>
          </div>

        </div>
      </section>


      {/* Visão central */}

      <section className="px-6">

        <div
          className="
            relative
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
          <div
            aria-hidden="true"
            className="
              absolute
              right-0
              top-0
              h-72
              w-72
              rounded-full
              bg-[#e4a63a]/10
              blur-[100px]
            "
          />


          <div className="relative">

            <span
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#e4a63a]
              "
            >
              A igreja que buscamos ser
            </span>


            <blockquote
              className="
                mt-8
                max-w-5xl
                text-3xl
                font-semibold
                leading-tight
                tracking-tight
                sm:text-5xl
                lg:text-6xl
              "
            >
              “Uma igreja viva, acolhedora e relevante,
              onde pessoas encontram Jesus, crescem na
              fé e descobrem seu propósito.”
            </blockquote>

          </div>
        </div>

      </section>


      {/* Pilares */}

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
              lg:grid-cols-[minmax(0,1fr)_460px]
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
                Como vivemos essa visão
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
                Alcançar, cuidar, ensinar e enviar.
              </h2>
            </div>


            <p
              className="
                text-lg
                leading-8
                text-white/55
              "
            >
              Nossa visão se transforma em atitudes
              práticas que orientam a vida e o trabalho
              da igreja.
            </p>

          </div>


          <div
            className="
              mt-16
              grid
              gap-px
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-white/10
              md:grid-cols-2
            "
          >
            {pillars.map((pillar, index) => (
              <article
                key={pillar.title}
                className="
                  bg-[#0c0c0c]
                  p-8
                  sm:p-10
                "
              >
                <span
                  className="
                    text-sm
                    font-semibold
                    tracking-[0.2em]
                    text-[#e4a63a]
                  "
                >
                  0{index + 1}
                </span>

                <h3
                  className="
                    mt-7
                    text-3xl
                    font-semibold
                    tracking-tight
                  "
                >
                  {pillar.title}
                </h3>

                <p
                  className="
                    mt-5
                    max-w-xl
                    leading-7
                    text-white/55
                  "
                >
                  {pillar.text}
                </p>
              </article>
            ))}
          </div>

        </div>
      </section>


      {/* Valores */}

      <section
        className="
          border-y
          border-white/10
          bg-[#090909]
          px-6
          py-24
          sm:py-32
        "
      >
        <div className="mx-auto max-w-7xl">

          <div
            className="
              grid
              gap-10
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
                Nossos valores
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
                Princípios que orientam nossa caminhada.
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
              {values.map((value) => (
                <article
                  key={value.number}
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
                    {value.number}
                  </span>

                  <h3
                    className="
                      mt-5
                      text-2xl
                      font-semibold
                      tracking-tight
                    "
                  >
                    {value.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      leading-7
                      text-white/55
                    "
                  >
                    {value.description}
                  </p>
                </article>
              ))}
            </div>

          </div>
        </div>
      </section>


      {/* Cidade */}

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
            lg:grid-cols-2
            lg:items-center
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
              Lisboa
            </span>

            <h2
              className="
                mt-5
                max-w-2xl
                text-4xl
                font-semibold
                leading-tight
                tracking-tight
                sm:text-6xl
              "
            >
              Uma igreja presente na vida da cidade.
            </h2>
          </div>


          <div
            className="
              space-y-6
              text-lg
              leading-8
              text-white/60
            "
          >
            <p>
              Lisboa é uma cidade formada por diferentes
              culturas, histórias e gerações. Queremos ser
              uma comunidade onde todas essas pessoas
              possam encontrar acolhimento e esperança.
            </p>

            <p>
              Acreditamos que a igreja deve estar
              presente, servir com generosidade e
              contribuir para o bem das pessoas e da
              comunidade ao seu redor.
            </p>
          </div>

        </div>
      </section>


      {/* CTA */}

      <section
        className="
          px-6
          pb-24
          sm:pb-32
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
                Faça parte
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
                Há um lugar para você nesta caminhada.
              </h2>
            </div>


            <div>
              <p
                className="
                  leading-7
                  text-black/70
                "
              >
                Venha conhecer a IBR Lisboa, participar
                de um dos nossos cultos e viver essa
                visão junto conosco.
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
                  href="/sobre-nos/lideranca"
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
                  Conhecer a liderança
                </Link>

              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
