import type { MetadataRoute } from "next";

import { DEFAULT_DESCRIPTION, SITE_NAME } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: "IBR Lisboa",
    description: DEFAULT_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#e4a63a",
    lang: "pt-PT",
    dir: "ltr",
    icons: [
      {
        src: "/images/icons/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/images/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
