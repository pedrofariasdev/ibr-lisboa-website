import type { YoutubeLiveStream } from "@/types/youtube";

const API_KEY = process.env.YOUTUBE_API_KEY;
const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;

const REVALIDATE = 3600; // 1 hora
const LIVE_REVALIDATE = 60; // atraso máximo esperado de cerca de 1–2 minutos

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

type LivePlaylistItem = {
  contentDetails?: {
    videoId?: string;
  };
};

type YoutubeVideo = {
  id: string;
  snippet?: {
    title?: string;
    liveBroadcastContent?: "live" | "none" | "upcoming";
    thumbnails?: {
      high?: { url: string };
      medium?: { url: string };
      default?: { url: string };
    };
  };
  liveStreamingDetails?: {
    actualStartTime?: string;
    actualEndTime?: string;
  };
  status?: {
    embeddable?: boolean;
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

export async function getYoutubeLiveStream(): Promise<YoutubeLiveStream | null> {
  if (!API_KEY || !CHANNEL_ID) {
    console.warn("Configuração do YouTube em falta — transmissão indisponível.");
    return null;
  }

  try {
    const playlistId = await getUploadsPlaylistId();
    if (!playlistId) return null;

    const playlistParams = new URLSearchParams({
      key: API_KEY,
      maxResults: "10",
      part: "contentDetails",
      playlistId,
    });

    const playlistResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?${playlistParams}`,
      { next: { revalidate: LIVE_REVALIDATE } }
    );

    if (!playlistResponse.ok) {
      console.warn(
        "YouTube playlistItems.list (ao vivo) falhou:",
        playlistResponse.status
      );
      return null;
    }

    const playlistData = await playlistResponse.json();
    const videoIds = ((playlistData.items ?? []) as LivePlaylistItem[])
      .map((item) => item.contentDetails?.videoId)
      .filter((videoId): videoId is string => Boolean(videoId));

    if (videoIds.length === 0) return null;

    const videosParams = new URLSearchParams({
      id: videoIds.join(","),
      key: API_KEY,
      part: "snippet,liveStreamingDetails,status",
    });

    const videosResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?${videosParams}`,
      { next: { revalidate: LIVE_REVALIDATE } }
    );

    if (!videosResponse.ok) {
      console.warn("YouTube videos.list falhou:", videosResponse.status);
      return null;
    }

    const videosData = await videosResponse.json();
    const activeStream = ((videosData.items ?? []) as YoutubeVideo[]).find(
      (video) =>
        video.snippet?.liveBroadcastContent === "live" &&
        !video.liveStreamingDetails?.actualEndTime
    );

    if (!activeStream) return null;

    const thumbnailUrl =
      activeStream.snippet?.thumbnails?.high?.url ??
      activeStream.snippet?.thumbnails?.medium?.url ??
      activeStream.snippet?.thumbnails?.default?.url ??
      "";

    return {
      videoId: activeStream.id,
      title: activeStream.snippet?.title ?? "IBR Lisboa em direto",
      watchUrl: `https://www.youtube.com/watch?v=${activeStream.id}`,
      thumbnailUrl,
      startedAt: activeStream.liveStreamingDetails?.actualStartTime ?? null,
      embeddable: activeStream.status?.embeddable !== false,
    };
  } catch (error) {
    console.warn("Erro ao verificar transmissão ao vivo no YouTube:", error);
    return null;
  }
}
