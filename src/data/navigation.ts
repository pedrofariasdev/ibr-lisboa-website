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
    href: "#sobre",
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
        description:
          "Entenda nossa missão e propósito como igreja.",
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
        href: "/departamentos/kids",
        description:
          "Um espaço preparado especialmente para as crianças.",
      },
      {
        label: "Chosen",
        href: "/departamentos/chosen",
        description:
          "Uma geração escolhida para viver o propósito de Deus.",
      },
      {
        label: "Ensino",
        href: "/departamentos/ensino",
        description:
          "Fortalecendo a fé por meio do ensino da Palavra de Deus.",
      },
      {
        label: "Casais",
        href: "/departamentos/casais",
        description:
          "Fortalecendo relacionamentos e famílias.",
      },
      {
        label: "Voluntários",
        href: "/departamentos/voluntarios",
        description:
          "Use seus dons para servir e fazer parte.",
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
        label: "Projeto Esperança",
        href: "/projetos/esperanca",
        description:
          "Levando alimento, cuidado e esperança para a comunidade.",
      },
      {
        label: "Bazar Social",
        href: "/projetos/bazar-social",
        description:
          "Solidariedade através de doações e apoio às famílias.",
      },
    ],
  },


  {
    label: "Agenda",
    href: "/agenda",
  },


  {
    label: "Generosidade",
    href: "/generosidade",
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