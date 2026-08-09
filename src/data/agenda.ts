export type AgendaItem = {
  title: string;
  slug: string;

  group:
    | "evento-especial"
    | "programacao-semanal";

  type:
    | "evento"
    | "curso"
    | "ministerio";

  status:
    | "confirmado"
    | "inscricoes"
    | "breve"
    | "encerrado";

  date?: string;
  endDate?: string;
  dateLabel?: string;

  scheduleLabel?: string;
  time?: string;
  location?: string;

  category?: string;
  description?: string;

  image: string;

  featured?: boolean;

  ticketUrl?: string;

  ctaLabel?: string;
  ctaUrl?: string;
};


export const agenda: AgendaItem[] = [

  {
    title: "Expansão Euro Conference 26",
    slug: "expansao-euro-conference-2026",

    group: "evento-especial",
    type: "evento",
    status: "inscricoes",

    date: "2026-09-27",
    dateLabel: "27 de setembro de 2026",

    time: "14h00",

    location:
      "Praça das Indústrias, 1 — Lisboa",

    category: "Conferência",

    description:
      "Uma conferência da IBR Europa para um tempo de fé, comunhão e expansão.",

    image:
      "/images/events/expansao-euro-conference-2026.png",

    featured: true,

    ticketUrl:
      "https://www.eventbrite.com/e/expansao-2026-tickets-1990591333263",
  },


  {
    title: "Acampa Teens",
    slug: "acampa-teens",

    group: "evento-especial",
    type: "evento",
    status: "confirmado",

    date: "2026-09-03",
    endDate: "2026-09-06",
    dateLabel: "3 a 6 de setembro de 2026",

    category: "Chosen",

    description:
      "Um tempo especial de comunhão, crescimento espiritual e relacionamento para os Jovens e Adolescentes.",

    image:
      "/images/projetos/acampamento.webp",

    ctaLabel: "Saiba mais",

    ctaUrl:
      "/contacto?departamento=chosen&assunto=acampa-teens",
  },


  {
    title: "Retiro Kids",
    slug: "retiro-kids",

    group: "evento-especial",
    type: "evento",
    status: "confirmado",

    date: "2026-08-14",
    endDate: "2026-08-16",
    dateLabel: "14, 15 e 16 de agosto de 2026",

    category: "Kids",

    description:
      "Um momento separado para as crianças buscarem a Deus, crescerem na fé e viverem dias especiais.",

    image:
      "/images/projetos/evento-kids.webp",

    ctaLabel: "Saiba mais",

    ctaUrl:
      "/contacto?departamento=kids&assunto=retiro-kids",
  },


  {
    title: "Batismo nas Águas",
    slug: "batismo-nas-aguas",

    group: "evento-especial",
    type: "evento",
    status: "breve",

    category: "Batismo",

    description:
      "Uma decisão de fé e o início de uma nova caminhada com Cristo.",

    image:
      "/images/projetos/batismo.png",
  },


  {
    title: "Formatura Casados Para Sempre",
    slug: "casados-para-sempre-formatura",

    group: "evento-especial",
    type: "ministerio",
    status: "confirmado",

    date: "2026-08-22",
    dateLabel: "22 de agosto de 2026",

    category: "Família",

    description:
      "Nossa Formatura Casados Para Sempre é um momento especial de celebração e reconhecimento do compromisso dos casais que participaram do curso e se dedicaram a fortalecer seus relacionamentos.",

    image:
      "/images/projetos/evento-casais.jpeg",
  },


  {
    title: "Escola da Bíblia",
    slug: "escola-da-biblia",

    group: "programacao-semanal",
    type: "curso",
    status: "confirmado",

    scheduleLabel: "Todos os domingos",
    time: "16h30",

    category: "Ensino",

    description:
      "Descobrindo Jesus no Evangelho de Marcos.",

    image:
      "/images/projetos/escola-biblia.webp",
  },


  {
    title: "Projeto Start",
    slug: "projeto-start",

    group: "programacao-semanal",
    type: "ministerio",
    status: "confirmado",

    scheduleLabel: "Todas os Domingos",
    time: "16h30",

    category: "Batizados",

    description:
    "Um encontro para novos batizados conhecerem os fundamentos da fé, iniciarem sua caminhada cristã e crescerem em comunhão.",
    image:
      "/images/projetos/start.webp",
  },

];
