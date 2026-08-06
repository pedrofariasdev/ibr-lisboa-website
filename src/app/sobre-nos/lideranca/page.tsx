import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Liderança",
  description:
    "Conheça a liderança pastoral e os responsáveis pelos departamentos da IBR Lisboa.",
};


type Leader = {
  name: string;
  role: string;
  department?: string;
  description: string;
  image?: string;
};


const featuredLeaders: Leader[] = [
  {
    name: "Bispo Rogério Rocha",
    role: "Liderança pastoral",

    description:
      "Responsável pela direção espiritual e ministerial da IBR Lisboa, conduzindo a igreja com fé, cuidado e compromisso com a Palavra de Deus.",

      image: "/images/lideranca/bispo.png",
  },

  {
    name: "Pastora Anabella Rocha",
    role: "Pastora",

    description:
      "Ao lado do Bispo, atua no cuidado pastoral, no fortalecimento das famílias e no desenvolvimento da igreja.",

      image: "/images/lideranca/pastora-ana-bela.png",
    
  },
];


const departmentLeaders: Leader[] = [
  {
    name: "Liderança de Ensino",
    role: "Responsável pelo departamento",
    department: "Ensino",

    description:
      "Fortalecendo a fé por meio do ensino da Palavra de Deus.",
    
      image: "/images/lideranca/ensino.png",
  
  },

  {
    name: "Liderança do Louvor",
    role: "Responsável pelo departamento",
    department: "Louvor",

    description:
      "Conduzindo a igreja em adoração e comunhão com Deus através da música.",

      image: "/images/lideranca/louvor.png",
  },

  {
    name: "Liderança do Kids",
    role: "Responsável pelo departamento",
    department: "Kids",

    description:
      "Ensinando as crianças a conhecerem Jesus em um ambiente seguro, acolhedor e cheio de alegria.",

    
      image: "/images/lideranca/kids.png",
  },

  {
    name: "Liderança de Casais",
    role: "Responsáveis pelo departamento",
    department: "Casais",

    description:
      "Fortalecendo relacionamentos e ajudando casais a construírem famílias firmadas em Deus.",

      image: "/images/lideranca/casais.png",
  },

  {
    name: "Liderança do Chosen",
    role: "Responsável pelo departamento",
    department: "Chosen",

    description:
      "Acompanhando adolescentes em uma jornada de fé, identidade, comunhão e propósito.",

      image: "/images/lideranca/chosen.png",
  },

  {
    name: "Liderança do Projeto Start",
    role: "Responsável pelo departamento",
    department: "Primeiros Passos",

    description:
      "Ajudando novos batizados a conhecerem os fundamentos da fé e iniciarem sua caminhada cristã.",

      image: "/images/lideranca/projeto-start.png",
  },
    {
    name: "Liderança da Mídia",
    role: "Responsável pelo departamento",
    department: "Mídia",

    description:
      "Ajudando novos batizados a conhecerem os fundamentos da fé e iniciarem sua caminhada cristã.",

      image: "/images/lideranca/midia.png",
    
  },
    {
    name: "Liderança dos Voluntários",
    role: "Responsável pelo departamento",
    department: "Voluntários",

    description:
      "Ajudando novos batizados a conhecerem os fundamentos da fé e iniciarem sua caminhada cristã.",

      image: "/images/lideranca/voluntarios2.png",
    
  },
      {
    name: "Liderança do Projeto Esperança",
    role: "Responsável pelo departamento",
    department: "Projeto Esperança",

    description:
      "Ajudando novos batizados a conhecerem os fundamentos da fé e iniciarem sua caminhada cristã.",

      image: "/images/lideranca/projeto-esperanca.png",
    
  },
];


function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}


type LeaderPhotoProps = {
  leader: Leader;
  featured?: boolean;
};


function LeaderPhoto({
  leader,
  featured = false,
}: LeaderPhotoProps) {
  return (
    <div
      className={`
        relative
        overflow-hidden
        bg-[#141414]
        ${
          featured
          ? "aspect-[4/5]"
          : "aspect-[4/5]"
        }
      `}
    >
      {leader.image ? (
        <Image
          src={leader.image}
          alt={`Fotografia de ${leader.name}`}
          fill
          priority={featured}
          className="
            object-cover
            object-top
            transition-transform
            duration-700
            group-hover:scale-[1.03]
          "
          sizes={
            featured
              ? "(min-width: 1024px) 50vw, 100vw"
              : "(min-width: 1024px) 33vw, 100vw"
          }
        />
      ) : (
        <div
          className="
            absolute
            inset-0
            flex
            flex-col
            items-center
            justify-center
            bg-gradient-to-br
            from-[#1a1a1a]
            via-[#101010]
            to-[#080808]
            px-6
            text-center
          "
        >
          <span
            className={`
              font-bold
              tracking-tight
              text-white/[0.08]
              ${
                featured
                  ? "text-8xl sm:text-9xl"
                  : "text-6xl"
              }
            `}
          >
            {getInitials(leader.name)}
          </span>

          <span
            className="
              mt-5
              text-xs
              font-semibold
              uppercase
              tracking-[0.25em]
              text-white/30
            "
          >
            Foto em breve
          </span>
        </div>
      )}


      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black
          via-black/10
          to-transparent
        "
      />
    </div>
  );
}


function FeaturedLeaderCard({
  leader,
}: {
  leader: Leader;
}) {
  return (
    <article
      className="
        group
        overflow-hidden
        rounded-[2rem]
        border
        border-white/10
        bg-[#0d0d0d]
      "
    >
      <LeaderPhoto
        leader={leader}
        featured
      />


      <div className="p-4 sm:p-5">

        <span
          className="
            text-xs
            font-semibold
            uppercase
            tracking-[0.28em]
            text-[#e4a63a]
          "
        >
          {leader.role}
        </span>


        <h3
          className="
            mt-4
            text-3xl
            font-semibold
            tracking-tight
            sm:text-4xl
          "
        >
          {leader.name}
        </h3>


        <p
          className="
            mt-5
            max-w-xl
            leading-7
            text-white/55
          "
        >
          {leader.description}
        </p>

      </div>
    </article>
  );
}


function DepartmentLeaderCard({
  leader,
}: {
  leader: Leader;
}) {
  return (
    <article
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-[#0d0d0d]
        transition
        duration-300
        hover:-translate-y-1
        hover:border-[#e4a63a]/30
      "
    >
      <LeaderPhoto leader={leader} />


      <div className="p-5">

        {leader.department && (
          <span
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.25em]
              text-[#e4a63a]
            "
          >
            {leader.department}
          </span>
        )}


        <h3
          className="
            mt-4
            text-2xl
            font-semibold
            leading-tight
            tracking-tight
          "
        >
          {leader.name}
        </h3>


        <p
          className="
            mt-2
            text-sm
            text-white/40
          "
        >
          {leader.role}
        </p>


        <p
          className="
            mt-5
            leading-7
            text-white/55
          "
        >
          {leader.description}
        </p>

      </div>
    </article>
  );
}


export default function LiderancaPage() {
  return (
    <div className="min-h-screen bg-black text-white">

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
            top-0
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
            -left-52
            absolute
            bottom-0
            h-[400px]
            w-[400px]
            rounded-full
            bg-white/[0.04]
            blur-[140px]
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
            Liderança que serve,
            <br />
            cuida e caminha junto.
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
              Conheça as pessoas que conduzem,
              cuidam e servem a comunidade da
              IBR Lisboa.
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
                Nosso compromisso
              </span>

              <p
                className="
                  mt-3
                  leading-7
                  text-white/70
                "
              >
                Liderar pelo exemplo, servir com
                humildade e cuidar de cada pessoa
                com amor e responsabilidade.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Liderança pastoral */}

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
              lg:grid-cols-[minmax(0,1fr)_450px]
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
                Liderança pastoral
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
                Uma vida dedicada ao cuidado da igreja.
              </h2>
            </div>


            <p
              className="
                text-lg
                leading-8
                text-white/55
              "
            >
              Nossa liderança pastoral trabalha
              para fortalecer a fé, desenvolver
              pessoas e conduzir a igreja em sua missão.
            </p>
          </div>


          <div
            className="
              mx-auto
              mt-10
              grid
              max-w-4xl
              gap-10
              md:grid-cols-2
            "
          >
            {featuredLeaders.map((leader) => (
              <FeaturedLeaderCard
                key={leader.name}
                leader={leader}
              />
            ))}
          </div>

        </div>
      </section>


      {/* Frase institucional */}

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
              Liderar é servir
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
              “Nossa liderança existe para servir
              pessoas, desenvolver novos líderes e
              ajudar cada pessoa a crescer em sua
              caminhada com Deus.”
            </blockquote>

          </div>
        </div>

      </section>


      {/* Lideranças dos departamentos */}

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
              lg:grid-cols-[minmax(0,1fr)_470px]
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
                Departamentos
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
                Pessoas que transformam propósito em ação.
              </h2>

            </div>


            <p
              className="
                text-lg
                leading-8
                text-white/55
              "
            >
              Cada departamento é conduzido por
              pessoas comprometidas em servir com
              responsabilidade, amor e excelência.
            </p>
          </div>


          <div
            className="
              mx-auto
              mt-12
              grid
              max-w-5xl
              gap-6
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {departmentLeaders.map((leader) => (
              <DepartmentLeaderCard
                key={leader.department}
                leader={leader}
              />
            ))}
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
                Você também pode servir com seus dons.
              </h2>

            </div>


            <div>

              <p
                className="
                  leading-7
                  text-black/70
                "
              >
                Conheça nossos departamentos e encontre
                um espaço para crescer, servir e fazer
                parte da comunidade.
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
                  href="/#departamentos"
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
                  Conhecer departamentos
                </Link>


                <Link
                  href="/#contacto"
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
                  Falar conosco
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}