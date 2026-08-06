import Link from "next/link";

import { getYoutubeMessages } from "@/lib/youtube";
import { MessageList } from "@/components/ui/MessageList";


type Mensagem = {
  id: string;
  titulo: string;
  descricao: string;
  imagem: string;
  data: string;
};



export default async function MensagensPage({

  searchParams,

}: {

  searchParams: Promise<{
    video?: string;
  }>;

}) {


  const mensagens: Mensagem[] = await getYoutubeMessages();


  const params = await searchParams;


  const videoSelecionado = params.video;



  const mensagemAtual = mensagens.find(
    (mensagem) =>
      mensagem.id === videoSelecionado
  );



  return (

    <main
      className="
        min-h-screen
        bg-black
        px-6
        pb-24
        pt-40
        text-white
      "
    >


      <section
        className="
          mx-auto
          max-w-7xl
        "
      >


        <span
          className="
            text-xs
            uppercase
            tracking-[0.35em]
            text-[#e4a63a]
          "
        >
          Mensagens IBR Lisboa
        </span>



        <h1
          className="
            mt-6
            text-5xl
            font-bold
            leading-tight
            sm:text-7xl
          "
        >
          Pregações que
          <br />
          transformam vidas.
        </h1>



        <p
          className="
            mt-8
            max-w-3xl
            text-lg
            leading-8
            text-white/55
          "
        >
          Assista às mensagens da IBR Lisboa,
          acompanhe aquilo que Deus está fazendo
          e reveja palavras que marcaram nossos cultos.
        </p>




        {videoSelecionado && (

          <section
            className="
              mt-16
            "
          >


            <span
              className="
                text-xs
                uppercase
                tracking-[0.3em]
                text-[#e4a63a]
              "
            >
              Mensagem selecionada
            </span>



            <h2
              className="
                mt-4
                text-3xl
                font-bold
              "
            >
              {mensagemAtual?.titulo}
            </h2>



            <div
              className="
                mt-8
                aspect-video
                overflow-hidden
                rounded-3xl
                border
                border-white/10
              "
            >

              <iframe
                className="
                  h-full
                  w-full
                "
                src={`https://www.youtube.com/embed/${videoSelecionado}`}
                title={mensagemAtual?.titulo}
                allowFullScreen
              />

            </div>


          </section>

        )}




        <section
          className="
            mt-24
            border-t
            border-white/10
            pt-12
          "
        >


          <span
            className="
              text-xs
              uppercase
              tracking-[0.3em]
              text-[#e4a63a]
            "
          >
            Mensagens recentes
          </span>



          <h2
            className="
              mt-4
              text-4xl
              font-bold
            "
          >
            Últimas pregações
          </h2>


        </section>




        <MessageList
          mensagensIniciais={mensagens}
        />



      </section>


    </main>

  );

}