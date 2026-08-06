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
    image: "/images/departamentos/chosen.png",
  },
  {
    slug: "ibr-kids",
    name: "IBR Kids",
    description: "Construindo uma fé sólida desde a infância.",
    image: "/images/departamentos/ibr-kids.png",
  },
  {
    slug: "casais",
    name: "Casais",
    description: "Fortalecendo famílias através da comunhão e da fé.",
    image: "/images/departamentos/casais.png",
  },
  {
    slug: "arise",
    name: "Arise",
    description: "Uma geração levantada para viver seu chamado.",
    image: "/images/departamentos/arise.png",
  },
  {
    slug: "voluntarios",
    name: "Voluntários",
    description: "Servindo com amor e dedicação.",
    image: "/images/departamentos/voluntarios.png",
  },
  {
    slug: "midia",
    name: "Mídia",
    description: "Comunicação e criatividade a serviço do Reino.",
    image: "/images/departamentos/midia.png",
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
    image: "/images/departamentos/ensino.png",
  },
];

export function getDepartamento(slug: string) {
  return departamentos.find((d) => d.slug === slug);
}