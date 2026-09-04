import type { Project, WorkLayoutOverride } from "@/content/types";

const PATTERN: WorkLayoutOverride[] = ["featured", "pair", "pair", "horizontal"];

export interface WorkLayoutItem {
  project: Project;
  variant: WorkLayoutOverride;
}

export type WorkLayoutGroup =
  | { kind: "single"; variant: "featured" | "horizontal"; item: WorkLayoutItem }
  | { kind: "pair"; items: WorkLayoutItem[] };

function assignWorkLayout(projects: Project[]): WorkLayoutItem[] {
  return projects.map((project, index) => ({
    project,
    variant: project.layoutOverride ?? PATTERN[index % PATTERN.length],
  }));
}

/**
 * Groups projects into the editorial grid pattern (1 featured -> 2-col pair
 * -> 1 horizontal, repeating) purely from project order/index, so adding or
 * reordering entries in content/projects.ts doesn't require touching the UI.
 */
export function buildWorkLayoutGroups(projects: Project[]): WorkLayoutGroup[] {
  const items = assignWorkLayout(projects);
  const groups: WorkLayoutGroup[] = [];
  let pairBuffer: WorkLayoutItem[] = [];

  const flushPairs = () => {
    if (pairBuffer.length > 0) {
      groups.push({ kind: "pair", items: pairBuffer });
      pairBuffer = [];
    }
  };

  for (const item of items) {
    if (item.variant === "pair") {
      pairBuffer.push(item);
      if (pairBuffer.length === 2) flushPairs();
    } else {
      flushPairs();
      groups.push({ kind: "single", variant: item.variant, item });
    }
  }
  flushPairs();

  return groups;
}
