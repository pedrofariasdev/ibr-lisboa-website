import { getYoutubeMessages } from "@/lib/youtube";


export async function GET() {

  try {

    const mensagens = await getYoutubeMessages();


    return Response.json(
      mensagens
    );

  } catch (error) {

    console.error(
      "Erro ao carregar mensagens:",
      error
    );


    return Response.json(
      {
        mensagem: "Não foi possível carregar as mensagens.",
      },
      {
        status: 500,
      }
    );

  }

}