export type NavigationChild = {
  label: string;
  href: string;
  description?: string;
};

export type NavigationItem = {
  label: string;
  href: string;
  children?: NavigationChild[];
};

export const navigationItems: NavigationItem[] = [
  {
    label: "Home",
    href: "/",
  },

  {
    label: "Sobre Nós",
    href: "/sobre-nos/nossa-historia",
    children: [
      {
        label: "Nossa História",
        href: "/sobre-nos/nossa-historia",
        description:
          "Conheça a história, trajetória e identidade da IBR Lisboa.",
      },
      {
        label: "Nossa Visão",
        href: "/sobre-nos/nossa-visao",
        description: "Entenda nossa missão e propósito como igreja.",
      },
      {
        label: "Liderança",
        href: "/sobre-nos/lideranca",
        description:
          "Conheça aqueles que servem e conduzem a nossa comunidade.",
      },
    ],
  },

  {
    label: "Departamentos",
    href: "/departamentos",
    children: [
      {
        label: "IBR Kids",
        href: "/departamentos/ibr-kids",
        description: "Um espaço preparado especialmente para as crianças.",
      },
      {
        label: "Chosen",
        href: "/departamentos/chosen",
        description: "Uma geração escolhida para viver o propósito de Deus.",
      },
      {
        label: "Arise",
        href: "/departamentos/arise",
        description: "Uma geração levantada para viver seu chamado.",
      },
      {
        label: "Casais",
        href: "/departamentos/casais",
        description: "Fortalecendo relacionamentos e famílias.",
      },
      {
        label: "Voluntários",
        href: "/departamentos/voluntarios",
        description: "Use seus dons para servir e fazer parte.",
      },
      {
        label: "Louvor",
        href: "/departamentos/louvor",
        description:
          "Conduzindo a igreja em adoração e comunhão com Deus através da música.",
      },
      {
        label: "Mídia",
        href: "/departamentos/midia",
        description:
          "Comunicação, criatividade e tecnologia a serviço da mensagem.",
      },
    ],
  },

  {
    label: "Projetos",
    href: "/projetos",
    children: [
      {
        label: "Batismo nas Águas",
        href: "/projetos/batismo",
        description: "Uma decisão de fé e uma nova caminhada com Cristo.",
      },
      {
        label: "Projeto Esperança",
        href: "/projetos/projeto-esperanca",
        description: "Levando alimento, cuidado e esperança para a comunidade.",
      },
      {
        label: "Bazar Social",
        href: "/projetos/bazar-social",
        description: "Solidariedade através de doações e apoio às famílias.",
      },
            {
        label: "Mãos Que Acolhem",
        href: "/projetos/maos-que-acolhem",
        description: "Porque há quem não possa vir, nós vamos.",
      },
    ],
  },

  {
    label: "Agenda",
    href: "/agenda",
  },

  {
    label: "Generosidade",
    href: "/doacoes",
  },

  {
    label: "Contacto",
    href: "/contacto",
  },
];

export const liveNavigation = {
  isLive: false,
  liveLabel: "EM DIRETO",
  offlineLabel: "Cultos",
  href: "/cultos",
};