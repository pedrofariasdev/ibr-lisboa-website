export type Projeto = {
  slug: string;
  name: string;
  description: string;
  image: string;
  sobre?: string;
  emBreve?: boolean;
};

export const projetos: Projeto[] = [
  {
    slug: "batismo",
    name: "Batismo nas Águas",
    description: "Uma decisão de fé e uma nova caminhada com Cristo.",
    image: "/images/projetos/batismo.png",
  },
  {
    slug: "bazar-social",
    name: "Bazar Social",
    description: "Solidariedade e apoio à comunidade através da partilha.",
    image: "/images/projetos/bazar.png",
  },
  {
    slug: "projeto-esperanca",
    name: "Projeto Esperança",
    description: "Levando alimento, cuidado e esperança para a comunidade.",
    image: "/images/projetos/projeto-esperanca.jpeg",
    emBreve: true,
  },
];

export function getProjeto(slug: string) {
  return projetos.find((p) => p.slug === slug);
}