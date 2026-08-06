import { cultos } from "@/data/cultos";

export function getProximoCulto() {
  const agora = new Date();

  const diaAtual = agora.getDay();
  const horaAtual = agora.getHours();
  const minutoAtual = agora.getMinutes();

  const horarioAtual = horaAtual + minutoAtual / 60;


  // Procura culto ainda hoje
  const cultoHoje = cultos
    .filter((culto) => culto.diaSemana === diaAtual)
    .filter((culto) => culto.horaInicio > horarioAtual)
    .sort((a, b) => a.horaInicio - b.horaInicio);


  if (cultoHoje.length > 0) {
    return cultoHoje[0];
  }


  // Procura próximo dia
  const proximos = cultos
    .filter((culto) => {
      if (culto.diaSemana > diaAtual) {
        return true;
      }

      return false;
    })
    .sort((a, b) => a.diaSemana - b.diaSemana);


  if (proximos.length > 0) {
    return proximos[0];
  }


  // Caso tenha passado todos da semana
  return cultos[0];
}