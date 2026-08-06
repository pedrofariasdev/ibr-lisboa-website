const API_KEY = process.env.YOUTUBE_API_KEY;
const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;


export async function getYoutubeMessages() {


  if (!API_KEY || !CHANNEL_ID) {

    throw new Error(
      "Configuração do YouTube não encontrada"
    );

  }



  const response = await fetch(

    `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=50`

  );



  if (!response.ok) {

    console.warn(
      "API do YouTube temporariamente indisponível:",
      response.status
    );

    return [];
  }



  const data = await response.json();



  type YoutubeItem = {

    id: {

      kind: string;

      videoId?: string;

    };


    snippet: {

      title: string;

      description: string;

      publishedAt: string;


      thumbnails: {

        high: {

          url: string;

        };

      };

    };

  };




  const videos = (data.items as YoutubeItem[])

    .filter(

      (item) =>
        item.id.kind === "youtube#video"

    )


    .map(

      (item) => ({

        id: item.id.videoId ?? "",


        titulo: item.snippet.title,


        descricao:
          item.snippet.description,


        imagem:
          item.snippet.thumbnails.high.url,


        data:
          item.snippet.publishedAt

      })

    );





  const videosUnicos = videos.filter(

    (video, index, array) =>

      index === array.findIndex(

        (item) =>
          item.titulo === video.titulo

      )

  );





  return videosUnicos;


}