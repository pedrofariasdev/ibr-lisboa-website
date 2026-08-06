export type ChurchEvent = {
  title: string;
  slug: string;
  date: string;
  time?: string;
  location?: string;
  category?: string;
  description?: string;
  image: string;
  posterImage?: string;
  featured?: boolean;
  ticketUrl?: string;
};

export const events: ChurchEvent[] = [
{
  title: "Expansão Euro Conference 26",
  slug: "expansao-euro-conference-2026",
  date: "2026-09-27",
  time: "14h00",
  location: "Praça das Indústrias, 1 — Lisboa",
  category: "Conferência",
  description:
    "Uma conferência da IBR Europa para um tempo de fé, comunhão e expansão.",
  image: "/images/events/expansao-euro-conference-2026.png",
  posterImage:
    "/images/events/expansao-euro-conference-2026-vertical.png",
  featured: true,
  ticketUrl:
    "https://www.eventbrite.com/e/expansao-2026-tickets-1990591333263",
},
];

