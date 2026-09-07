import type { Project } from "@/content/types";

export interface WorkTiers {
  showcase: Project | null;
  featured: Project[];
  compact: Project[];
}

/** How many projects (including the showcase) get large, individual visual treatment. */
const FEATURED_COUNT = 3;

/**
 * Splits the curated project order (content/projects.ts) into visual tiers:
 * the strongest project leads at full size, the next two get a large
 * side-by-side treatment, and the rest fall into a lighter editorial list —
 * so adding/reordering projects doesn't require touching the UI.
 */
export function tierProjects(projects: Project[]): WorkTiers {
  const [showcase = null, ...rest] = projects;
  return {
    showcase,
    featured: rest.slice(0, FEATURED_COUNT - 1),
    compact: rest.slice(FEATURED_COUNT - 1),
  };
}
