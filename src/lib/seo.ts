import type { Metadata } from "next";

export const SITE_NAME = "IBR Lisboa";
export const DEFAULT_DESCRIPTION =
  "Uma comunidade de fé, comunhão e transformação em Lisboa.";

export const SITE_URL =
  "https://ibr-lisboa-website.phl-farias27.workers.dev";

const OPEN_GRAPH_IMAGE = {
  url: "/images/icons/og.png",
  width: 150,
  height: 150,
  alt: "IBR Lisboa",
};

type PageMetadataOptions = {
  title?: string;
  description: string;
  path: string;
};

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadataOptions): Metadata {
  const socialTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;

  return {
    ...(title ? { title } : {}),
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      locale: "pt_PT",
      url: path,
      siteName: SITE_NAME,
      title: socialTitle,
      description,
      images: [OPEN_GRAPH_IMAGE],
    },
    twitter: {
      card: "summary",
      title: socialTitle,
      description,
      images: [OPEN_GRAPH_IMAGE.url],
    },
  };
}

export const churchStructuredData = {
  "@context": "https://schema.org",
  "@type": "Church",
  "@id": `${SITE_URL}/#church`,
  name: "Igreja Batista Renovada - Lisboa",
  alternateName: SITE_NAME,
  description: DEFAULT_DESCRIPTION,
  url: SITE_URL,
  logo: `${SITE_URL}/images/icons/icon-512.png`,
  image: `${SITE_URL}/images/icons/og.png`,
  telephone: "+351969704199",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Alm. Reis 228",
    postalCode: "1000-056",
    addressLocality: "Lisboa",
    addressCountry: "PT",
  },
  sameAs: [
    "https://www.instagram.com/ibrlisboa",
    "https://www.youtube.com/@ibrlisboa",
  ],
};
