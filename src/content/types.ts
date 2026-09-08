export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  /** True while the destination is still a placeholder ("#") rather than a real URL. */
  isPlaceholder: boolean;
}

export interface Metric {
  label: string;
  /** Rendered value, e.g. "6+". Use "—" when the real figure isn't known yet — never invent one. */
  value: string;
  isPlaceholder: boolean;
}

export type ProjectTheme = "ajoti" | "beafrique" | "esemie";

export interface Project {
  slug: string;
  name: string;
  description: string;
  role: string;
  /** May be the literal placeholder "[YEAR]" until confirmed — never render it as-is. */
  year: string;
  tech: string[];
  category: string;
  image?: string;
  externalUrl?: string;
  hasCaseStudy: boolean;
  /** Bespoke full-bleed colour treatment for the showcase/featured tier — see lib/project-themes.ts. */
  theme?: ProjectTheme;
  isPlaceholder: boolean;
}

export interface TrainingEvent {
  slug: string;
  title: string;
  topic: string;
  date: string;
  audience: string;
  description: string;
  attendeeCount?: string;
  partnerOrg?: string;
  photoUrl?: string;
  videoUrl?: string;
  slidesUrl?: string;
  isPlaceholder: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  organization: string;
  quote: string;
  photoUrl?: string;
  profileUrl?: string;
  isPlaceholder: boolean;
}

export type AchievementType =
  | "grant"
  | "award"
  | "fellowship"
  | "media"
  | "partnership"
  | "milestone";

export interface Achievement {
  title: string;
  type: AchievementType;
  date: string;
  description: string;
  isPlaceholder: boolean;
}

export interface Resource {
  slug: string;
  title: string;
  category: string;
  description: string;
  date?: string;
  isPlaceholder: boolean;
}

/** A labelled sequence of steps rendered as a flow diagram (e.g. an architecture stack or a user journey). */
export interface FlowDiagram {
  steps: string[];
}

export interface ChallengeDecision {
  challenge: string;
  decision: string;
  why: string;
}

export interface CaseStudyMetric {
  label: string;
  /** Only include figures you can substantiate — never a placeholder-looking guess. */
  value: string;
}

export interface EvidenceItem {
  label: string;
  /** e.g. "Article", "Press", "Testimonial", "Video", "Document", "Link" */
  type: string;
  url?: string;
}

export interface CaseStudy {
  /** Matches a Project.slug in projects.ts */
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  meta: {
    role: string;
    stack: string[];
    scope: string[];
  };
  heroImage?: string;
  context: {
    challenges: string[];
  };
  contribution: {
    items: string[];
  };
  engineering: {
    description: string;
    flow?: FlowDiagram;
  };
  product?: {
    journey?: FlowDiagram;
    /** Supporting product screenshot rendered alongside the journey steps. */
    image?: string;
  };
  challenges: ChallengeDecision[];
  results: {
    impact: string[];
    metrics?: CaseStudyMetric[];
  };
  learnings?: string;
  evidence: EvidenceItem[];
}
