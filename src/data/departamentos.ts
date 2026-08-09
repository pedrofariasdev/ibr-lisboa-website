export type Departamento = {
  slug: string;
  name: string;
  description: string;
  image: string;
  sobre?: string;
  responsavel?: string;
  horario?: string;
  contacto?: string;
};

export const departamentos: Departamento[] = [
  {
    slug: "chosen",
    name: "Chosen",
    description: "Uma geração vivendo propósito e identidade em Cristo.",
    image: "/images/departamentos/chosen.jpeg",
  },
  {
    slug: "ibr-kids",
    name: "IBR Kids",
    description: "Construindo uma fé sólida desde a infância.",
    image: "/images/departamentos/ibr-kids.webp",
  },
  {
    slug: "casais",
    name: "Casais",
    description: "Fortalecendo famílias através da comunhão e da fé.",
    image: "/images/departamentos/casais.webp",
  },
  {
    slug: "arise",
    name: "Arise",
    description: "Uma geração levantada para viver seu chamado.",
    image: "/images/departamentos/arise.jpeg",
  },
  {
    slug: "voluntarios",
    name: "Voluntários",
    description: "Servindo com amor e dedicação.",
    image: "/images/departamentos/voluntarios.webp",
  },
  {
    slug: "midia",
    name: "Mídia",
    description: "Comunicação e criatividade a serviço do Reino.",
    image: "/images/departamentos/midia.webp",
  },
  {
    slug: "louvor",
    name: "Louvor",
    description: "Adoração que conecta pessoas à presença de Deus.",
    image: "/images/departamentos/louvor.png",
  },
  {
    slug: "ensino",
    name: "Ensino",
    description: "Fortalecendo a fé por meio do ensino da Palavra de Deus.",
    image: "/images/departamentos/escola-biblia.webp",
  },
];

export function getDepartamento(slug: string) {
  return departamentos.find((d) => d.slug === slug);
}
