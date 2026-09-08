// Homepage prose. Headline/positioning lines are drawn directly from the brief.
// Anything not yet supplied (bio paragraph, philosophy) is a clearly marked
// placeholder — replace the bracketed text, do not leave it in production.

export const hero = {
  eyebrow: "Frontend Developer · Product Builder · Technology Educator",
  name: "Tobi Talabi",
  statement:
    "I build digital products, solve real problems with technology, and help people find their footing in tech — across fintech, e-commerce, SaaS, healthcare and aviation.",
  primaryCta: { label: "View my work", href: "#work" },
  secondaryCta: { label: "Let's work together", href: "#contact" },
};

export const about = {
  kicker: "About",
  statement: "I build digital products that solve real problems.",
  // Drawn from oluwatobi-akinrimisi.netlify.app's bio — reword freely, this is a starting point.
  paragraph:
    "I’m a developer who ships, obsessed with great DX/UX, performance, and accessible interfaces. I build frontend-heavy full-stack products, combining React and TypeScript with the Node, PostgreSQL, and Supabase systems behind them. And when I’m not building, I’m teaching, helping others find their way into tech.",
  cta: { label: "More about me", href: "#about" },
};

export const capabilities = [
  {
    index: "01",
    title: "Product Development",
    description: "Building digital products from idea to production — scoping, shipping and iterating with real users.",
  },
  {
    index: "02",
    title: "Frontend Engineering",
    description: "React, TypeScript, Next.js and modern frontend architecture built to last past the first release.",
  },
  {
    index: "03",
    title: "Full-Stack Development",
    description: "Working across APIs, databases, authentication and the backend systems a product depends on.",
  },
  {
    index: "04",
    title: "Product Thinking",
    description: "Translating business problems into useful, usable digital experiences — not just implementing designs.",
  },
  {
    index: "05",
    title: "Technology Education",
    description: "Speaking, mentoring and helping people navigate careers in technology.",
  },
];

export const philosophy = {
  pullQuote: "Technology should solve real problems, not simply exist for the sake of innovation.",
  body:
    "As a software engineer, I approach every project with curiosity, ownership, and a focus on building solutions that are practical, accessible, and impactful. I believe in continuous learning, taking on unfamiliar challenges, and using every experience to become a better builder. Ultimately, I want my work to create meaningful products, open opportunities, and contribute to a stronger technology ecosystem.",
  isPlaceholder: false,
};

export const contact = {
  kicker: "Contact",
  headline: "Have a product worth building?",
  accent: "Let's talk.",
  supporting:
    "Whether it's a product, collaboration, speaking opportunity or simply an interesting conversation, I'd love to hear from you.",
};
