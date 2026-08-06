export type Departamento = {
  name: string;
  description: string;
  image: string;
  href: string;
};

export const departamentos: Departamento[] = [
  {
    name: "Chosen",
    description: "Uma geração vivendo propósito e identidade em Cristo.",
    image: "/images/departamentos/chosen.png",
    href: "/departamentos/chosen",
  },
  {
    name: "IBR Kids",
    description: "Construindo uma fé sólida desde a infância.",
    image: "/images/departamentos/ibr-kids.png",
    href: "/departamentos/ibr-kids",
  },
  {
    name: "Casais",
    description: "Fortalecendo famílias através da comunhão e da fé.",
    image: "/images/departamentos/casais.png",
    href: "/departamentos/casais",
  },
  {
    name: "Arise",
    description: "Uma geração levantada para viver seu chamado.",
    image: "/images/departamentos/arise.png",
    href: "/departamentos/arise",
  },
  {
    name: "Voluntários",
    description: "Servindo com amor e dedicação.",
    image: "/images/departamentos/voluntarios.png",
    href: "/departamentos/voluntarios",
  },
  {
    name: "Mídia",
    description: "Comunicação e criatividade a serviço do Reino.",
    image: "/images/departamentos/midia.png",
    href: "/departamentos/midia",
  },
  {
    name: "Louvor",
    description: "Adoração que conecta pessoas à presença de Deus.",
    image: "/images/departamentos/louvor.png",
    href: "/departamentos/louvor",
  },
];