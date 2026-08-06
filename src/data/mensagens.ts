export type Mensagem = {
  id: string;
  titulo: string;
  descricao: string;
  imagem: string;
  data: string;
};


export const mensagens: Mensagem[] = [

  {
    id: "domingo-18-07-2026",
    titulo: "O Melhor Domingo da Sua Vida",
    descricao: "Mensagem ministrada na IBR Lisboa.",
    imagem: "/images/mensagens/domingo.jpg",
    data: "18 Julho 2026",
  },


  {
    id: "quinta-16-07-2026",
    titulo: "Quinta da Resposta",
    descricao: "Mensagem ministrada na IBR Lisboa.",
    imagem: "/images/mensagens/quinta.jpg",
    data: "16 Julho 2026",
  },


  {
    id: "terca-14-07-2026",
    titulo: "Terça Abundante",
    descricao: "Mensagem ministrada na IBR Lisboa.",
    imagem: "/images/mensagens/terca.jpg",
    data: "14 Julho 2026",
  },

];