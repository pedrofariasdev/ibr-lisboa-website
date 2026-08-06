"use client";

interface LiveChatProps {
  videoId: string | null;
}

export function LiveChat({ videoId }: LiveChatProps) {

  if (!videoId) {
    return (
      <div className="
        flex
        h-full
        items-center
        justify-center
        rounded-3xl
        border
        border-white/10
        bg-[#111]
        text-white/50
        text-sm
      ">
        O chat estará disponível durante a transmissão
      </div>
    );
  }


  return (
    <div className="
      h-full
      overflow-hidden
      rounded-3xl
      border
      border-white/10
      bg-[#111]
    ">

      <iframe
        className="h-full w-full"
        src={`https://www.youtube.com/live_chat?v=${videoId}&embed_domain=localhost`}
        title="Chat ao vivo YouTube"
      />

    </div>
  );
}