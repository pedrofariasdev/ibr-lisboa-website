import { getYoutubeLiveStream } from "@/lib/youtube";

export async function GET() {
  const stream = await getYoutubeLiveStream();

  return Response.json(
    {
      isLive: Boolean(stream),
      stream,
    },
    {
      headers: {
        "Cache-Control":
          "public, max-age=30, s-maxage=60, stale-while-revalidate=30",
      },
    }
  );
}
