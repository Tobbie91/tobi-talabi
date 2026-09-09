// Homepage prose. Headline/positioning lines are drawn directly from the brief.
// Anything not yet supplied (bio paragraph, philosophy) is a clearly marked
// placeholder — replace the bracketed text, do not leave it in production.

export const hero = {
  identity: "Tobi Talabi",
  role: "Frontend Developer · Product Builder",
  headline: "Frontend engineer building products people actually use.",
  supporting:
    "I build and ship digital products across fintech, e-commerce, SaaS and other real-world domains — from polished interfaces to the systems behind them.",
  primaryCta: { label: "View my work", href: "#work" },
  secondaryCta: { label: "Let's work together", href: "#contact" },
};

export const about = {
  kicker: "About",
  statement: "I build digital products that solve real problems.",
  paragraph:
    "I'm a frontend-heavy full-stack developer who ships — React and TypeScript on the surface, Node, PostgreSQL and Supabase underneath. I've built products across fintech, e-commerce, SaaS and healthcare, and I care as much about the engineering holding together as the interface people see.",
  cta: { label: "More about me", href: "#about" },
};

export const capabilities = [
  {
    index: "01",
    title: "Frontend Engineering",
    description: "React, TypeScript, Next.js and modern frontend architecture built to last past the first release.",
  },
  {
    index: "02",
    title: "Product Development",
    description: "Taking products from idea to production — translating business problems into useful experiences, then shipping and iterating with real users.",
  },
  {
    index: "03",
    title: "Full-Stack Development",
    description: "Working across APIs, databases, authentication and the backend systems a product depends on.",
  },
];

export const philosophy = {
  pullQuote:
    "I don't build for the sake of shipping code. I build products that solve real problems, feel good to use, and can survive beyond the first release.",
  isPlaceholder: false,
};

export const contact = {
  kicker: "Contact",
  headline: "Have a product worth building?",
  accent: "Let's talk.",
  supporting:
    "Whether it's a product, collaboration, speaking opportunity or simply an interesting conversation, I'd love to hear from you.",
};
