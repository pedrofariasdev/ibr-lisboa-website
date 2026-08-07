import { cultos } from "@/data/cultos";
import { agoraEmLisboa } from "@/utils/proximoCulto";
import type { LiveData } from "@/types/live";

const API_KEY = process.env.YOUTUBE_API_KEY;
const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;

const MINUTOS_ANTES = 30;
const MINUTOS_DEPOIS = 150;

/** Estamos dentro da janela de um culto transmitido? */
function dentroDaJanela(): boolean {
  const { diaSemana, horaDecimal } = agoraEmLisboa();

  return cultos
    .filter((c) => c.transmissao)
    .some((c) => {
      if (c.diaSemana !== diaSemana) return false;

      const inicio = c.horaInicio - MINUTOS_ANTES / 60;
      const fim = c.horaInicio + MINUTOS_DEPOIS / 60;

      return horaDecimal >= inicio && horaDecimal <= fim;
    });
}

export async function getLiveData(): Promise<LiveData> {
  if (!API_KEY || !CHANNEL_ID) return { status: "offline" };

  // Fora das horas de culto não gastamos cota.
  if (!dentroDaJanela()) return { status: "offline" };

  try {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&eventType=live&type=video&maxResults=1`,
      { next: { revalidate: 180 } }
    );

    if (!res.ok) {
      console.warn("YouTube live check falhou:", res.status);
      return { status: "offline" };
    }

    const data = await res.json();
    const videoId = data.items?.[0]?.id?.videoId;

    if (!videoId) return { status: "starting" };

    return { status: "live", videoId };
  } catch (erro) {
    console.warn("Erro ao verificar transmissão:", erro);
    return { status: "offline" };
  }
}