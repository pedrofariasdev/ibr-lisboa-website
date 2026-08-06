export type Culto = {
  diaSemana: number;
  nomeDia: string;
  horario: string;
  horaInicio: number;
  nome: string;

  // futuro
  transmissao?: boolean;
  youtubeId?: string;
};


export const cultos: Culto[] = [
  {
  diaSemana: 2,
  nomeDia: "Terça-feira",
  horario: "20h00",
  horaInicio: 20,
  nome: "Terça Abundante",
  transmissao: true,
  },

  {
    diaSemana: 4,
    nomeDia: "Quinta-feira",
    horario: "20h00",
    horaInicio: 20,
    nome: "Quinta da Resposta",
    transmissao: true,
  },

  {
    diaSemana: 0,
    nomeDia: "Domingo",
    horario: "09h00",
    horaInicio: 9,
    nome: "O Melhor Domingo da Sua Vida",
    transmissao: false,
  },

  {
    diaSemana: 0,
    nomeDia: "Domingo",
    horario: "11h00",
    horaInicio: 11,
    nome: "O Melhor Domingo da Sua Vida",
    transmissao: true,
  },

  {
    diaSemana: 0,
    nomeDia: "Domingo",
    horario: "18h00",
    horaInicio: 18,
    nome: "O Melhor Domingo da Sua Vida",
    transmissao: true,
  },
];