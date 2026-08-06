const API_KEY = process.env.YOUTUBE_API_KEY;
const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;

const REVALIDATE = 3600; // 1 hora

export type Mensagem = {
  id: string;
  titulo: string;
  descricao: string;
  imagem: string;
  data: string;
};

type PlaylistItem = {
  snippet: {
    title: string;
    description: string;
    publishedAt: string;
    resourceId: { videoId: string };
    thumbnails: {
      high?: { url: string };
      medium?: { url: string };
      default?: { url: string };
    };
  };
};

async function getUploadsPlaylistId(): Promise<string | null> {
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/channels?key=${API_KEY}&id=${CHANNEL_ID}&part=contentDetails`,
    { next: { revalidate: 86400 } }
  );

  if (!res.ok) {
    console.warn("YouTube channels.list falhou:", res.status);
    return null;
  }

  const data = await res.json();
  return data.items?.[0]?.contentDetails?.relatedPlaylists?.uploads ?? null;
}

export async function getYoutubeMessages(): Promise<Mensagem[]> {
  if (!API_KEY || !CHANNEL_ID) {
    console.warn("Configuração do YouTube em falta — a devolver lista vazia.");
    return [];
  }

  try {
    const playlistId = await getUploadsPlaylistId();
    if (!playlistId) return [];

    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?key=${API_KEY}&playlistId=${playlistId}&part=snippet&maxResults=50`,
      { next: { revalidate: REVALIDATE } }
    );

    if (!res.ok) {
      console.warn("YouTube playlistItems.list falhou:", res.status);
      return [];
    }

    const data = await res.json();
    const items = (data.items ?? []) as PlaylistItem[];

    const videos = items
      .filter((item) => item.snippet?.resourceId?.videoId)
      .map((item) => ({
        id: item.snippet.resourceId.videoId,
        titulo: item.snippet.title,
        descricao: item.snippet.description,
        imagem:
          item.snippet.thumbnails.high?.url ??
          item.snippet.thumbnails.medium?.url ??
          item.snippet.thumbnails.default?.url ??
          "",
        data: item.snippet.publishedAt,
      }))
      .filter((v) => v.titulo !== "Private video" && v.titulo !== "Deleted video");

    return videos.filter(
      (video, index, array) =>
        index === array.findIndex((item) => item.titulo === video.titulo)
    );
  } catch (erro) {
    console.warn("Erro ao contactar a API do YouTube:", erro);
    return [];
  }
}