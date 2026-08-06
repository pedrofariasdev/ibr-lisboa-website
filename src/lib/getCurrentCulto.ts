import { cultos } from "@/data/cultos";


export function getCurrentCulto() {

  const agora = new Date();


  const hoje = agora.getDay();


  const cultoHoje = cultos.find((culto) => {

    if(culto.diaSemana !== hoje){
      return false;
    }


    const inicio = new Date();

    inicio.setHours(
      culto.horaInicio,
      0,
      0,
      0
    );


    const fim = new Date(inicio);

    // duração estimada do culto
    fim.setHours(
      fim.getHours() + 2
    );


    return agora >= inicio && agora <= fim;

  });


  return cultoHoje ?? null;

}