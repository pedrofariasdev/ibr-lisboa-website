export type YoutubeLiveStream = {
  videoId: string;
  title: string;
  watchUrl: string;
  thumbnailUrl: string;
  startedAt: string | null;
  embeddable: boolean;
};

export type YoutubeLiveStatusResponse = {
  isLive: boolean;
  stream: YoutubeLiveStream | null;
};
