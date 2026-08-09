export type Projeto = {
  slug: string;
  name: string;
  description: string;
  image: string;
  imageHero?: string;
  logo?: boolean;
  sobre?: string;
  emBreve?: boolean;
    turma?: {
    inicio?: string;
    dia?: string;
    horario?: string;
    local?: string;
  };
};



export const projetos: Projeto[] = [
  {
    slug: "batismo",
    name: "Batismo nas Águas",
    description: "Uma decisão de fé e uma nova caminhada com Cristo.",
    image: "/images/projetos/batismo.png",
    sobre:
      "O batismo é uma decisão pessoal de fé e o início de uma nova caminhada com Cristo. Na IBR Lisboa, os batismos acontecem na Praia de Caxias e realizam-se aproximadamente a cada cinco meses. Antes do batismo há um tempo de preparação, para que cada pessoa compreenda o significado deste passo e siga acompanhada. Para participar, basta falar com o responsável em qualquer culto ou enviar mensagem — a partir daí explicamos todos os detalhes.",
  },

{
    slug: "projeto-esperanca",
    name: "Projeto Esperança",
    description: "Levando alimento, cuidado e esperança para a comunidade.",
    image: "/images/projetos/projeto-esperanca.jpeg",
    logo: true,
  },
  {
    slug: "maos-que-acolhem",
    name: "Mãos Que Acolhem",
    description: "Cuidado que chega a casa.",
    image: "/images/projetos/maos-que-acolhem.webp",
    logo: true,
    sobre:
      "O Mãos Que Acolhem leva a presença da igreja a quem não pode vir até ela. Visitamos famílias em casa, acompanhamos pessoas hospitalizadas, apoiamos quem atravessa períodos de doença e estamos presentes junto de mães recém-paridas nos primeiros tempos com o bebé. Onde há alguém a precisar de companhia, oração ou uma ajuda prática, é aí que queremos estar.",
  },

    {
    slug: "bazar-social",
    name: "Bazar Social",
    description: "Solidariedade e apoio à comunidade através da partilha.",
    image: "/images/projetos/bazar.webp",
  },
];

export function getProjeto(slug: string) {
  return projetos.find((p) => p.slug === slug);
}
