import Link from "next/link";
import Image from "next/image";

import { LivePlayer } from "@/components/ui/LivePlayer";
import { getNextCulto } from "@/lib/getNextCulto";
import { getCultoCardImage } from "@/lib/getCultoCardImage";
import { cultos } from "@/data/cultos";
import { getYoutubeMessages } from "@/lib/youtube";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Cultos",
  description:
    "Conheça os horários, encontros e celebrações da IBR Lisboa.",
  path: "/cultos",
});


export default async function CultosPage() {

  const proximoCulto = getNextCulto();
  const mensagens = await getYoutubeMessages();


  const cultosAgrupados = cultos.reduce((acc, culto) => {

    const existente = acc.find(
      item => item.nomeDia === culto.nomeDia
    );


    if (existente) {

      existente.horarios.push({
        horario: culto.horario,
        transmissao: culto.transmissao
      });

    } else {

      acc.push({
        nomeDia: culto.nomeDia,
        nome: culto.nome,
        horarios: [
          {
            horario: culto.horario,
            transmissao: culto.transmissao
          }
        ]
      });

    }


    return acc;

  }, [] as {
    nomeDia: string;
    nome: string;
    horarios: {
      horario: string;
      transmissao?: boolean;
    }[];
  }[]);



  return (

    <main className="
      min-h-screen
      bg-black
      px-6
      pb-24
      pt-40
      text-white
    ">


      <section className="
        mx-auto
        max-w-7xl
      ">


        {/* HERO */}

        <div className="max-w-3xl">

          <span className="
            text-xs
            font-semibold
            uppercase
            tracking-[0.35em]
            text-[#e4a63a]
          ">
            Cultos IBR Lisboa
          </span>


          <h1 className="
            mt-6
            text-5xl
            font-bold
            leading-[0.95]
            sm:text-7xl
          ">
            Uma igreja viva,
            <br />
            onde você estiver.
          </h1>


          <p className="
            mt-8
            text-lg
            leading-8
            text-white/55
          ">
            Acompanhe nossas transmissões, reveja mensagens
            e esteja conectado com aquilo que Deus está fazendo
            através da IBR Lisboa.
          </p>

        </div>



        {/* TRANSMISSÃO */}

        <div className="mt-12">

          <LivePlayer />

        </div>




        {/* INFORMAÇÕES */}

        <section className="
          mt-20
          grid
          gap-6
          lg:grid-cols-3
        ">


          <div className="
            rounded-3xl
            border
            border-white/10
            bg-white/[0.03]
            p-8
          ">

            <span className="
              text-xs
              uppercase
              tracking-[0.25em]
              text-[#e4a63a]
            ">
              Próximo culto
            </span>


            <h3 className="
              mt-4
              text-2xl
              font-semibold
            ">
              {proximoCulto?.nome}
            </h3>


            <p className="
              mt-3
              text-white/50
            ">
              {proximoCulto?.nomeDia}
              {" • "}
              {proximoCulto?.horario}
            </p>


          </div>



          <div className="
            rounded-3xl
            border
            border-white/10
            bg-white/[0.03]
            p-8
          ">

            <span className="
              text-xs
              uppercase
              tracking-[0.25em]
              text-[#e4a63a]
            ">
              Local
            </span>


            <h3 className="
              mt-4
              text-2xl
              font-semibold
            ">
              IBR Lisboa
            </h3>


            <p className="
              mt-3
              text-white/50
            ">
              Av. Alm. Reis 228
            </p>


          </div>



          <div className="
            rounded-3xl
            border
            border-white/10
            bg-white/[0.03]
            p-8
          ">

            <span className="
              text-xs
              uppercase
              tracking-[0.25em]
              text-[#e4a63a]
            ">
              Online
            </span>


            <h3 className="
              mt-4
              text-2xl
              font-semibold
            ">
              YouTube IBR Lisboa
            </h3>


            <p className="
              mt-3
              text-white/50
            ">
              Acompanhe de qualquer lugar.
            </p>


          </div>


        </section>

                {/* HORÁRIOS DOS CULTOS */}

        <section className="mt-24">


          <span className="
            text-xs
            uppercase
            tracking-[0.3em]
            text-[#e4a63a]
          ">
            Horários
          </span>


          <h2 className="
            mt-4
            text-4xl
            font-semibold
          ">
            Nossos cultos
          </h2>



          <div className="
            mt-8
            grid
            gap-6
            md:grid-cols-3
          ">


            {cultosAgrupados.map((culto, index) => (

              <div
                key={index}
                className="
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.03]
                "
              >


                <div className="
                  relative
                  aspect-video
                ">

                  <Image
                    src={getCultoCardImage(culto.nomeDia)}
                    alt={culto.nome}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, calc(100vw - 3rem)"
                    className="object-cover"
                  />


                  <div className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black
                    via-black/40
                    to-transparent
                  "/>


                </div>



                <div className="p-8">


                  <p className="
                    text-white/50
                  ">
                    {culto.nomeDia}
                  </p>



                  <h3 className="
                    mt-3
                    text-2xl
                    font-semibold
                  ">
                    {culto.nome}
                  </h3>



                  <div className="
                    mt-5
                    space-y-3
                  ">


                    {culto.horarios.map((item) => (

                      <div
                        key={item.horario}
                        className="
                          flex
                          items-center
                          gap-3
                        "
                      >


                        <span className="
                          font-semibold
                          text-[#e4a63a]
                        ">
                          {item.horario}
                        </span>



                        {item.transmissao && (

                          <span className="
                            rounded-full
                            bg-red-500/10
                            px-3
                            py-1
                            text-xs
                            text-red-400
                          ">
                            🔴 Transmissão
                          </span>

                        )}


                      </div>

                    ))}


                  </div>


                </div>


              </div>


            ))}


          </div>


        </section>




{/* MENSAGENS RECENTES */}

<section className="mt-24">


<span className="
text-xs
uppercase
tracking-[0.3em]
text-[#e4a63a]
">
Mensagens recentes
</span>


<div className="flex items-end justify-between">

<h2 className="
mt-4
text-4xl
font-semibold
">
Últimos cultos
</h2>


<Link
href="/mensagens"
className="
text-[#e4a63a]
"
>
Ver mensagens →
</Link>

</div>



<div className="
mt-8
grid
gap-6
md:grid-cols-3
">


{mensagens.slice(0,3).map((mensagem)=>(


<article
key={mensagem.id}
className="
overflow-hidden
rounded-3xl
border
border-white/10
bg-white/[0.03]
"
>


<div className="
relative
aspect-video
">


<Image
src={mensagem.imagem}
alt={mensagem.titulo}
fill
sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, calc(100vw - 3rem)"
className="object-cover"
/>


</div>



<div className="p-6">


<h3 className="
text-xl
font-semibold
line-clamp-2
">
{mensagem.titulo}
</h3>



<Link
href={`/mensagens?video=${mensagem.id}`}
className="
mt-4
inline-block
text-[#e4a63a]
"
>
Assistir →
</Link>



</div>


</article>


))}


</div>


</section>


      </section>


    </main>

  );

}
