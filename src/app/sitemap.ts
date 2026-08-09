import type { MetadataRoute } from "next";

import { agenda } from "@/data/agenda";
import { departamentos } from "@/data/departamentos";
import { projetos } from "@/data/projetos";
import { SITE_URL } from "@/lib/seo";

type SitemapEntry = {
  path: string;
  changeFrequency: NonNullable<
    MetadataRoute.Sitemap[number]["changeFrequency"]
  >;
  priority: number;
};

const staticRoutes: SitemapEntry[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/agenda", changeFrequency: "weekly", priority: 0.9 },
  { path: "/cultos", changeFrequency: "weekly", priority: 0.9 },
  { path: "/mensagens", changeFrequency: "weekly", priority: 0.8 },
  { path: "/departamentos", changeFrequency: "monthly", priority: 0.8 },
  { path: "/projetos", changeFrequency: "monthly", priority: 0.8 },
  { path: "/doacoes", changeFrequency: "monthly", priority: 0.8 },
  { path: "/ibr-europa", changeFrequency: "monthly", priority: 0.7 },
  {
    path: "/sobre-nos/nossa-historia",
    changeFrequency: "yearly",
    priority: 0.7,
  },
  {
    path: "/sobre-nos/nossa-visao",
    changeFrequency: "yearly",
    priority: 0.7,
  },
  {
    path: "/sobre-nos/lideranca",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  { path: "/contacto", changeFrequency: "yearly", priority: 0.7 },
];

function toSitemapItem(entry: SitemapEntry): MetadataRoute.Sitemap[number] {
  return {
    url: new URL(entry.path, SITE_URL).toString(),
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const agendaRoutes: SitemapEntry[] = agenda.map((item) => ({
    path: `/agenda/${item.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const departmentRoutes: SitemapEntry[] = departamentos.map((department) => ({
    path: `/departamentos/${department.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const projectRoutes: SitemapEntry[] = projetos.map((project) => ({
    path: `/projetos/${project.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...agendaRoutes,
    ...departmentRoutes,
    ...projectRoutes,
  ].map(toSitemapItem);
}
