export type LiveStatus =
  | "upcoming"
  | "starting"
  | "live";


export function getLiveStatus(
  startDate: Date
): LiveStatus {

  const agora = new Date();


  const diferenca =
    startDate.getTime() -
    agora.getTime();


  const minutos =
    diferenca / 1000 / 60;


  // começa 10 minutos antes
  if (minutos <= 10 && minutos > 0) {
    return "starting";
  }


  // durante o culto (até 2 horas)
  if (
    minutos <= 0 &&
    minutos > -120
  ) {
    return "live";
  }


  return "upcoming";
}