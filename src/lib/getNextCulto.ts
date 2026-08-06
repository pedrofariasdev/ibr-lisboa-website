import { cultos } from "@/data/cultos";


export function getNextCulto() {

  const agora = new Date();

  const proximos = cultos.map((culto) => {

    const data = new Date();

    const diaAtual = data.getDay();

    let diferenca =
      culto.diaSemana - diaAtual;


    if (diferenca < 0) {
      diferenca += 7;
    }


    data.setDate(
      data.getDate() + diferenca
    );


    const [hora, minuto] =
    culto.horario
        .replace("h", ":")
        .split(":");
    data.setHours(
      Number(hora),
      Number(minuto),
      0,
      0
    );


    return {
      ...culto,
      data,
    };

  });


  console.log(proximos);

    return (
    proximos
        .filter(
        (culto) => culto.data > agora
        )
        .sort(
        (a, b) =>
            a.data.getTime() -
            b.data.getTime()
        )[0] ?? null
    );

}