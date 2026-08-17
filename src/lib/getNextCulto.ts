import { cultos } from "@/data/cultos";

const TZ = "Europe/Lisbon";

/** Deslocamento do fuso de Lisboa face ao UTC, em minutos, na data indicada. */
function offsetLisboa(data: Date): number {
  const utc = new Date(data.toLocaleString("en-US", { timeZone: "UTC" }));
  const lisboa = new Date(data.toLocaleString("en-US", { timeZone: TZ }));
  return (lisboa.getTime() - utc.getTime()) / 60000;
}

export function getNextCulto(agora = new Date()) {
  const proximos = getCultosDaSemana(agora).map((culto) => {
    const data = new Date(culto.data);

    if (data <= agora) {
      data.setDate(data.getDate() + 7);
    }

    return { ...culto, data };
  });

  return (
    proximos.sort((a, b) => a.data.getTime() - b.data.getTime())[0] ?? null
  );
}

type ScheduledTransmissionStatus = "upcoming" | "starting" | "waiting";

export function getScheduledTransmission(agora = new Date()) {
  const transmissoes = getCultosDaSemana(agora).filter(
    (culto) => culto.transmissao
  );

  const dentroDaJanela = transmissoes
    .map((culto) => ({
      culto,
      minutosAteInicio: (culto.data.getTime() - agora.getTime()) / 60_000,
    }))
    .filter(
      ({ minutosAteInicio }) =>
        minutosAteInicio <= 10 && minutosAteInicio >= -30
    )
    .sort(
      (a, b) => Math.abs(a.minutosAteInicio) - Math.abs(b.minutosAteInicio)
    )[0];

  if (dentroDaJanela) {
    const status: ScheduledTransmissionStatus =
      dentroDaJanela.minutosAteInicio > 0 ? "starting" : "waiting";

    return { ...dentroDaJanela.culto, status };
  }

  const proxima = transmissoes
    .map((culto) => {
      const data = new Date(culto.data);

      if (data <= agora) {
        data.setDate(data.getDate() + 7);
      }

      return { ...culto, data };
    })
    .sort((a, b) => a.data.getTime() - b.data.getTime())[0];

  return proxima ? { ...proxima, status: "upcoming" as const } : null;
}

function getCultosDaSemana(agora: Date) {

  const offset = offsetLisboa(agora);

  // Dia da semana e hora atuais em Lisboa
  const emLisboa = new Date(agora.getTime() + offset * 60000);
  const diaAtual = emLisboa.getUTCDay();

  return cultos.map((culto) => {
    const diferenca = culto.diaSemana - diaAtual;

    const [hora, minuto] = culto.horario.replace("h", ":").split(":");

    // Constrói a data no fuso de Lisboa e converte para UTC
    const data = new Date(emLisboa);
    data.setUTCDate(data.getUTCDate() + diferenca);
    data.setUTCHours(Number(hora), Number(minuto || 0), 0, 0);

    const dataReal = new Date(data.getTime() - offset * 60000);

    return { ...culto, data: dataReal };
  });
}
