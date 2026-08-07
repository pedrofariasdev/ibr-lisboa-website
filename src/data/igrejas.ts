export type IgrejaEuropa = {
  name: string;
  slug: string;

  city: string;
  country: string;

  address?: string;
  pastor?: string;
  description?: string;

  instagram?: string;
  website?: string;
  whatsapp?: string;

  image?: string;

  latitude?: number;
  longitude?: number;

  featured?: boolean;
};


export const igrejasEuropa: IgrejaEuropa[] = [

  {
    name: "IBR Lisboa",
    slug: "ibr-lisboa",
    city: "Lisboa",
    country: "Portugal",

    address:
      "Av. Almirante Reis 228, 1000-056 Lisboa",

    pastor:
      "Bp. Rogério Rocha & Pra. Anabella Rocha",

    description:
      "Uma comunidade de fé, comunhão e transformação em Lisboa.",

    instagram:
      "https://www.instagram.com/ibrlisboa",

    featured: true,
  },


  {
    name: "IBR Algés",
    slug: "ibr-alges",
    city: "Algés",
    country: "Portugal",

    description:
      "Uma comunidade IBR servindo Algés e região.",
  },


  {
    name: "Igreja Batista Renovada de Queluz",
    slug: "ibr-queluz",
    city: "Queluz",
    country: "Portugal",

    description:
      "Uma comunidade IBR servindo Queluz e região.",
  },


  {
    name: "IBR Margem Sul",
    slug: "ibr-margem-sul",
    city: "Margem Sul",
    country: "Portugal",

    description:
      "Uma comunidade IBR servindo a Margem Sul.",
  },


  {
    name: "IBR Porto",
    slug: "ibr-porto",
    city: "Porto",
    country: "Portugal",

    description:
      "Uma comunidade IBR servindo a cidade do Porto e região.",
  },


  {
    name: "IBR Vila do Conde",
    slug: "ibr-vila-do-conde",
    city: "Vila do Conde",
    country: "Portugal",

    description:
      "Uma comunidade IBR servindo Vila do Conde e região.",
  },


  {
    name: "IBR Feira",
    slug: "ibr-feira",
    city: "Santa Maria da Feira",
    country: "Portugal",

    description:
      "Uma comunidade IBR servindo Santa Maria da Feira e região.",
  },


  {
    name: "Igreja Batista Renovada de Cascais",
    slug: "ibr-cascais",
    city: "Cascais",
    country: "Portugal",

    description:
      "Uma comunidade IBR servindo Cascais e região.",
  },


  {
    name: "Igreja Batista Renovada Bruxelas",
    slug: "ibr-bruxelas",
    city: "Bruxelas",
    country: "Bélgica",

    description:
      "Uma comunidade IBR servindo Bruxelas e região.",
  },


  {
    name: "Igreja Batista Renovada Setúbal",
    slug: "ibr-setubal",
    city: "Setúbal",
    country: "Portugal",

    description:
      "Uma comunidade IBR servindo Setúbal e região.",
  },

];