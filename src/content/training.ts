// Speaking, training and community sessions. Replace with real events and
// set isPlaceholder to false once populated.

import type { TrainingEvent } from "./types";

export const trainingEvents: TrainingEvent[] = [
  {
    slug: "breaking-into-tech",
    title: "Breaking Into Tech the Smart Way",
    topic: "Skills, Projects, and Real Opportunities",
    date: "July 24, 2026",
    audience: "Aspiring & early-career developers",
    description:
      "Hosted and moderated this live virtual panel discussion for WeAssist Virtual, featuring product design, backend and frontend professionals sharing real stories, practical advice, and proven strategies for building a career in tech.",
    attendeeCount: "53",
    partnerOrg: "WeAssist Virtual",
    photoUrl: "/images/training/breaking-into-tech.png",
    isPlaceholder: false,
  },
  {
    slug: "attention-is-all-you-need",
    title: "Attention Is All You Need",
    topic: "Performance Engineering and UX",
    date: "July 9, 2026",
    audience: "Internal engineering team",
    description:
      "Internal tech talk exploring how performance engineering decisions shape real user experience, with practical, hands-on lessons from frontend work.",
    attendeeCount: "11",
    photoUrl: "/images/training/attention-is-all-you-need.png",
    isPlaceholder: false,
  },
];
