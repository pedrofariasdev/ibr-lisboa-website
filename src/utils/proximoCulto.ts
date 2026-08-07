import { cultos, type Culto } from "@/data/cultos";

const TZ = "Europe/Lisbon";

/** Devolve o dia da semana (0–6) e a hora decimal em Lisboa, independentemente do fuso do servidor. */
export function agoraEmLisboa() {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: TZ,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const partes = Object.fromEntries(
    formatter.formatToParts(new Date()).map((p) => [p.type, p.value])
  );

  const dias: Record<string, number> = {
    Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6,
  };

  const diaSemana = dias[partes.weekday] ?? 0;
  const hora = Number(partes.hour);
  const minuto = Number(partes.minute);

  return { diaSemana, hora, minuto, horaDecimal: hora + minuto / 60 };
}

/** Ordena por dia da semana e, dentro do mesmo dia, por hora. */
function ordenar(lista: Culto[]) {
  return [...lista].sort(
    (a, b) => a.diaSemana - b.diaSemana || a.horaInicio - b.horaInicio
  );
}

export function getProximoCulto(): Culto {
  const { diaSemana, horaDecimal } = agoraEmLisboa();

  // Ainda hoje
  const hoje = ordenar(
    cultos.filter(
      (c) => c.diaSemana === diaSemana && c.horaInicio > horaDecimal
    )
  );

  if (hoje.length > 0) return hoje[0];

  // Próximos dias desta semana
  const restoDaSemana = ordenar(
    cultos.filter((c) => c.diaSemana > diaSemana)
  );

  if (restoDaSemana.length > 0) return restoDaSemana[0];

  // Recomeça na semana seguinte
  return ordenar(cultos)[0];
}