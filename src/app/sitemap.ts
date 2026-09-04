import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { caseStudies } from "@/content/case-studies";
import { siteUrl } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  // Only projects with a full case study are indexable — the "coming soon"
  // stub pages are marked noindex, so they're left out of the sitemap.
  const projectEntries: MetadataRoute.Sitemap = projects
    .filter((project) => caseStudies[project.slug])
    .map((project) => ({
      url: `${siteUrl}/work/${project.slug}`,
      lastModified: new Date(),
    }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
    },
    ...projectEntries,
  ];
}
