import type { ProjectTheme } from "@/content/types";

export interface ProjectThemeStyle {
  /** Full-bleed section background. */
  bg: string;
  /** Primary text color on that background. */
  text: string;
  /** Muted/secondary text color on that background. */
  textMuted: string;
  /** Border/divider color that reads against that background. */
  border: string;
  /** Solid CTA button classes tuned for that background. */
  cta: string;
}

export const projectThemes: Record<ProjectTheme, ProjectThemeStyle> = {
  ajoti: {
    bg: "bg-ajoti",
    text: "text-paper",
    textMuted: "text-paper/65",
    border: "border-paper/25",
    cta: "bg-paper text-ajoti hover:bg-gold hover:text-ink",
  },
  beafrique: {
    bg: "bg-beafrique",
    text: "text-paper",
    textMuted: "text-paper/70",
    border: "border-paper/25",
    cta: "bg-ink text-paper hover:bg-paper hover:text-beafrique",
  },
  esemie: {
    bg: "bg-esemie",
    text: "text-paper",
    textMuted: "text-paper/65",
    border: "border-paper/20",
    cta: "bg-esemie-accent text-ink hover:bg-paper hover:text-esemie",
  },
};
