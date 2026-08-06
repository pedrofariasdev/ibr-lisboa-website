export type Projeto = {
  name: string;
  description: string;
  image: string;
  href?: string;
};

export const projetos: Projeto[] = [
  {
    name: "Batismo nas Águas",
    description:
      "Uma decisão de fé e uma nova caminhada com Cristo.",
    image: "/images/projetos/batismo.png",
    href: "/projetos/batismo",
  },
  {
    name: "Bazar Social",
    description:
      "Solidariedade e apoio à comunidade através da partilha.",
    image: "/images/projetos/bazar.png",
    href: "/projetos/bazar-social",
  },
  {
    name: "Projeto Esperança",
    description:
      "Levando alimento, cuidado e esperança para a comunidade.",
    image: "/images/projetos/esperanca.png",
  },
];