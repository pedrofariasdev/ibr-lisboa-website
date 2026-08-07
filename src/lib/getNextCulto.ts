import { cultos } from "@/data/cultos";

const TZ = "Europe/Lisbon";

/** Deslocamento do fuso de Lisboa face ao UTC, em minutos, na data indicada. */
function offsetLisboa(data: Date): number {
  const utc = new Date(data.toLocaleString("en-US", { timeZone: "UTC" }));
  const lisboa = new Date(data.toLocaleString("en-US", { timeZone: TZ }));
  return (lisboa.getTime() - utc.getTime()) / 60000;
}

export function getNextCulto() {
  const agora = new Date();

  const offset = offsetLisboa(agora);

  // Dia da semana e hora atuais em Lisboa
  const emLisboa = new Date(agora.getTime() + offset * 60000);
  const diaAtual = emLisboa.getUTCDay();

  const proximos = cultos.map((culto) => {
    let diferenca = culto.diaSemana - diaAtual;
    if (diferenca < 0) diferenca += 7;

    const [hora, minuto] = culto.horario.replace("h", ":").split(":");

    // Constrói a data no fuso de Lisboa e converte para UTC
    const data = new Date(emLisboa);
    data.setUTCDate(data.getUTCDate() + diferenca);
    data.setUTCHours(Number(hora), Number(minuto || 0), 0, 0);

    const dataReal = new Date(data.getTime() - offset * 60000);

    // Se já passou, vai para a semana seguinte
    if (dataReal <= agora) {
      dataReal.setDate(dataReal.getDate() + 7);
    }

    return { ...culto, data: dataReal };
  });

  return (
    proximos.sort((a, b) => a.data.getTime() - b.data.getTime())[0] ?? null
  );
}