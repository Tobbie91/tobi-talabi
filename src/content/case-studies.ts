// Full case studies, keyed by project slug (see projects.ts). A project without
// an entry here still gets a page at /work/[slug] — it just falls back to the
// simple "coming soon" stub instead of the full template. Add an entry here
// whenever a project's full story is ready to publish.

import type { CaseStudy } from "./types";

// Esemie ships as two project entries (the marketing site and the business app),
// but it's one product story — Frontend Engineer & Team Lead, building it from
// day one through to a live launch. Both slugs share this content; only `slug`
// differs per entry.
const esemieCaseStudy: Omit<CaseStudy, "slug"> = {
  title: "Esemie — Building the frontend for an accounting platform designed for small businesses",
  subtitle:
    "An all-in-one accounting platform that helps small businesses manage invoices, expenses, budgets and financial reporting — built from the ground up and taken through to launch.",
  summary:
    "I joined Esemie from the beginning as Frontend Engineer and Frontend Team Lead, building the frontend application alongside leading the frontend team from development through launch. Esemie gives small businesses tools to generate invoices, track expenses, manage budgets, access financial reports, and give team members or stakeholders controlled access to business information.",
  meta: {
    role: "Frontend Engineer & Frontend Team Lead",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    scope: ["Frontend Development", "Team Leadership"],
  },
  heroImage: "/images/projects/esemie-hero.png",
  context: {
    challenges: [
      "This was my first project that would go live with real users, which changed how I approached development.",
      "The goal wasn't just matching the design — every feature needed to work as expected, edge cases needed to be considered, and the experience needed to stay reliable once real users began interacting with it.",
      "The platform needed to support several distinct areas of small business operations — invoicing, expense tracking, budgets, financial reporting, multi-currency invoicing, and controlled staff/stakeholder access — as one cohesive frontend experience.",
      "As the frontend team grew, the application needed to stay consistent as multiple people contributed to it.",
    ],
  },
  contribution: {
    items: [
      "Built the frontend application from the ground up",
      "Translated product and UI designs into functional interfaces",
      "Worked with React, TypeScript, and Tailwind CSS",
      "Led and coordinated the frontend team",
      "Ensured consistency across the application",
      "Integrated frontend features with backend services",
      "Tested features before release",
      "Supported the product through its launch to live users",
    ],
  },
  engineering: {
    description:
      "Rather than joining an already established product, I was part of the process of turning the product idea and designs into a working application from day one. Alongside writing code, I led the frontend team — thinking beyond the individual feature I was working on to consider how different parts of the application fit together, and ensuring the frontend stayed consistent as multiple people contributed to the product.",
    flow: { steps: ["Build", "Test", "Review", "Refine"] },
  },
  product: {
    journey: {
      steps: [
        "Invoicing",
        "Expense Tracking",
        "Budget Management",
        "Financial Reporting",
        "Multi-Currency Invoicing",
        "Team & Stakeholder Access",
      ],
    },
    image: "/images/projects/esemie-features.png",
  },
  challenges: [
    {
      challenge:
        "This was my first project going live with real users, so the frontend needed to be reliable, not just visually accurate to the design.",
      decision:
        "I treated feature completion as 'working correctly for real users' rather than 'matching the design,' running features through a build → test → review → refine cycle and paying close attention to edge cases before release.",
      why: "Real businesses would be relying on the platform to manage invoices, expenses, and budgets, so failures had real consequences beyond a missed visual detail.",
    },
    {
      challenge:
        "As frontend lead, I needed the application to stay consistent as multiple people worked on different parts of it at the same time.",
      decision:
        "I coordinated the team's work alongside my own feature development, thinking about how different parts of the application fit together rather than only the feature I was building.",
      why: "Without that coordination, a growing team working in parallel risked inconsistent patterns and a fragmented experience for the businesses using the platform.",
    },
  ],
  results: {
    impact: [
      "Esemie launched successfully as a live accounting platform for small businesses",
      "First product I built from its early stages through to launch",
      "First product I shipped to real, live users",
      "First time leading a frontend team",
      "Grew from focusing primarily on building interfaces to owning product quality, collaboration, and real-user outcomes",
    ],
  },
  learnings:
    "Esemie was a significant milestone — my first experience building a product from early stages through launch, working with live users, and leading a frontend team. It helped me grow from focusing primarily on building interfaces to thinking more broadly about ownership, product quality, collaboration, and building software for real users.",
  evidence: [],
};

export const caseStudies: Record<string, CaseStudy> = {
  ajoti: {
    slug: "ajoti",
    title: "Ajoti — Digitising Rotating Savings in Africa",
    subtitle: "Building digital infrastructure for community-based savings.",
    summary:
      "I led the frontend architecture and implementation of a multi-application fintech platform designed to digitise ROSCA communities, savings, wallets and trust-based financial products. I am also the co-founder.",
    meta: {
      role: "Co-Founder · Frontend Developer / Technical Contributor",
      stack: ["React", "TypeScript", "Vite", "Tailwind", "Zustand"],
      scope: ["User App", "Admin Portal", "Super Admin"],
    },
    heroImage: "/images/projects/ajoti.png",
    context: {
      challenges: [
        "Traditional ROSCA processes are often manual.",
        "Users need transparency around contributions and payouts.",
        "Administrators need tools to manage members and cycles.",
        "The platform needed multiple interfaces for different roles.",
      ],
    },
    contribution: {
      items: [
        "Project manager for the project",
        "Designed and implemented frontend architecture.",
        "Built the user-facing application.",
        "Built admin and super-admin interfaces.",
        "Developed reusable UI components.",
        "Implemented state management.",
        "Integrated APIs and financial workflows.",
        "Worked on wallet and savings experiences.",
        "Collaborated with backend/product stakeholders.",
        "Improved responsiveness and usability.",
      ],
    },
    engineering: {
      description:
        "The platform was structured as a monorepo containing separate user, admin and super-admin applications. This allowed each experience to have its own permissions and workflows while maintaining consistency across the system.",
      flow: { steps: ["User App", "Shared Components", "API / Backend", "Database"] },
    },
    product: {
      // TODO(confirm): drafted from the ROSCA flow you described — confirm this
      // matches the real onboarding-to-payout sequence before treating as final.
      journey: { steps: ["Create account", "KYC", "Join ROSCA", "Contribute", "Track cycle", "Receive payout"] },
    },
    challenges: [
      {
        challenge: "The platform needed to support different roles with very different permissions.",
        decision:
          "I separated the application experiences into user, admin and super-admin applications while maintaining shared patterns across the system.",
        why: "This made the permissions model clearer and allowed each application to evolve independently.",
      },
    ],
    results: {
      impact: [
        "3 application interfaces delivered",
        "Multiple financial workflows implemented",
        "ROSCA, savings and wallet experiences digitised",
        "Admin operations moved into a centralised platform",
        "Product prepared for production deployment",
      ],
      // No metrics yet — add real, substantiated figures (users, transactions,
      // cycles, performance) here once confirmed. Don't fill with placeholders.
    },
    // TODO(confirm): drafted reflection — reword into your own voice, or confirm as-is.
    learnings:
      "Working on Ajoti pushed me beyond UI implementation into thinking about financial workflows, permissions, trust systems and the relationship between product architecture and user behaviour.",
    evidence: [],
  },
  "alaje-admin": {
    slug: "alaje-admin",
    title: "Alaje Admin — Building the frontend for a payment platform",
    subtitle:
      "A React-based Admin platform designed to support payment operations, platform management, and merchant oversight.",
    summary:
      "I worked as the Frontend Engineer responsible for building the Alaje Admin platform — the operational side of a payment gateway that gives internal users visibility and control over the wider payment ecosystem. My work involved translating product designs into responsive, functional interfaces and integrating them with the required backend and third-party services.",
    meta: {
      role: "Frontend Engineer",
      stack: ["React", "TypeScript"],
      scope: [
        "Payment Channel Monitoring",
        "Merchant & User Management",
        "Settlements & Reconciliation",
        "Reports & Audit Logs",
      ],
    },
    heroImage: "/images/projects/alajeAdmin.png",
    context: {
      challenges: [
        "Internal teams needed a single place to monitor activity across the wider payment ecosystem.",
        "The admin platform brought together many distinct operational areas — merchants, users and roles, MDA accounts, transactions, settlements, reconciliations, tickets, audit logs and reports — that all needed to live in one coherent interface.",
        "Large amounts of operational information had to be presented clearly rather than overwhelming administrators.",
        "Alaje integrates with backend and third-party services, so integration timelines occasionally affected the overall development process.",
      ],
    },
    contribution: {
      items: [
        "Converted product designs into functional interfaces",
        "Built the frontend application in React",
        "Created reusable and maintainable UI components",
        "Implemented responsive user interfaces",
        "Integrated frontend features with backend APIs",
        "Integrated with external and third-party APIs where required",
        "Tested features extensively to ensure they worked as expected",
      ],
    },
    engineering: {
      description:
        "The Admin platform was built by converting the provided designs into reusable React components and application pages — dashboard layouts, navigation, data displays, tables, forms and status indicators. Once the interfaces were in place, I integrated them with the backend services powering the platform. Because some features depended on external and third-party services, development required continuous testing and coordination to confirm each feature worked correctly once its required integration became available.",
      flow: { steps: ["Design", "React Components", "API Integration", "Testing"] },
    },
    product: {
      journey: {
        steps: [
          "Monitor payment channels",
          "Manage merchants, users & roles",
          "Track transactions",
          "Process settlement requests",
          "Reconcile & resolve tickets",
          "Report & audit",
        ],
      },
    },
    challenges: [
      {
        challenge:
          "Because this was a payment-related product spanning many operational areas, data displayed in the admin dashboard needed to be accurate and reliably kept in sync with backend and third-party services.",
        decision:
          "I tested features repeatedly to confirm that data was displayed correctly, that API integrations behaved as expected, and that transaction and operational information was accurately reflected in the interface.",
        why: "Since some integrations weren't always ready at the same time as the frontend, rigorous, repeated testing was the way to catch mismatches before they reached administrators relying on the dashboard for operational decisions.",
      },
    ],
    results: {
      impact: [
        "Functional frontend implementation delivered for the Alaje Admin platform",
        "Centralised dashboard covering payment channels, merchants, users, MDA accounts, transactions, settlements, reconciliations, tickets, audit logs, reports and platform configuration",
        "Admin frontend integrated with the backend and third-party services powering the platform",
      ],
    },
    learnings:
      "Building the interface was only one part of delivering a working product — dependencies on backend and third-party services could significantly influence timelines. That reinforced the need for continuous testing and coordination so features worked correctly once the required integrations became available.",
    evidence: [],
  },
  "alaje-merchant": {
    slug: "alaje-merchant",
    title: "Alaje Merchant — Building the frontend for a payment platform",
    subtitle:
      "A React-based Merchant platform designed to support merchant payment activity within the Alaje payment ecosystem.",
    summary:
      "I worked as the Frontend Engineer responsible for building the Alaje Merchant platform, giving businesses using Alaje access to the tools and information they need to manage their payment activities. My work involved translating product designs into responsive, functional interfaces and integrating them with the required backend and third-party services.",
    meta: {
      role: "Frontend Engineer",
      stack: ["React", "TypeScript"],
      scope: ["Merchant Dashboard", "Payment Activity", "API Integration"],
    },
    heroImage: "/images/projects/alajeMerchant.png",
    context: {
      challenges: [
        "Merchants needed clear visibility into their own payment activity within the Alaje ecosystem, distinct from the operational view built for internal admins.",
        "The interface needed to accurately reflect transaction and operational data pulled from backend and third-party services.",
        "Designs needed to be translated into a functional, responsive application rather than static screens.",
        "Alaje integrates with backend and third-party services, so integration timelines occasionally affected the overall development process.",
      ],
    },
    contribution: {
      items: [
        "Converted product designs into functional interfaces",
        "Built the frontend application in React",
        "Created reusable and maintainable UI components",
        "Implemented responsive user interfaces",
        "Integrated frontend features with backend APIs",
        "Integrated with external and third-party APIs where required",
        "Tested features extensively to ensure they worked as expected",
      ],
    },
    engineering: {
      description:
        "The Merchant platform was built by converting the provided designs into reusable React components and application pages, then integrating them with the backend services powering merchant payment activity. Because some features depended on external and third-party services, development required continuous testing and coordination to confirm each feature worked correctly once its required integration became available.",
      flow: { steps: ["Design", "React Components", "API Integration", "Testing"] },
    },
    challenges: [
      {
        challenge:
          "Since this was a payment-related product, the merchant platform needed to accurately reflect transaction and operational information sourced from backend and third-party services.",
        decision:
          "I tested features repeatedly to confirm that data was displayed correctly, that API integrations behaved as expected, and that user actions triggered the correct responses.",
        why: "Rigorous, repeated testing was necessary to ensure merchants could trust the information the dashboard showed them about their own payment activity.",
      },
    ],
    results: {
      impact: [
        "Functional frontend implementation delivered for the Alaje Merchant platform",
        "Merchant-facing interface for managing payment activity within the Alaje ecosystem",
        "Merchant frontend integrated with the backend and third-party services powering the platform",
      ],
    },
    learnings:
      "Building the interface was only one part of delivering a working product — dependencies on backend and third-party services could significantly influence timelines. That reinforced the need for continuous testing and coordination so features worked correctly once the required integrations became available.",
    evidence: [],
  },
  "esemie-business-app": { slug: "esemie-business-app", ...esemieCaseStudy },
  "esemie-website": { slug: "esemie-website", ...esemieCaseStudy },
  beafrique: {
    slug: "beafrique",
    title: "Beafrique — Building a full-stack e-commerce platform for African fashion",
    subtitle:
      "An e-commerce platform for African women's fashion, built end to end — frontend, backend, and Stripe payments — to serve local and international customers.",
    summary:
      "I worked as the Full-Stack Developer on Beafrique, an e-commerce platform focused on African women's fashion, built to make its products accessible to customers beyond a single location. I was responsible for building both the frontend and backend of the platform, as well as integrating Stripe to handle payments for local and international customers.",
    meta: {
      role: "Full-Stack Developer",
      stack: ["React", "Stripe"],
      scope: ["Frontend Development", "Backend Development", "Payment Integration"],
    },
    heroImage: "/images/projects/beafrique-hero.png",
    context: {
      challenges: [
        "The platform needed to let both local and international customers browse and purchase products through a single online shopping experience.",
        "Because the business could serve customers from different locations, the payment experience was an important part of the project.",
        "Unlike frontend-only projects, this required thinking about how the product, backend and payment systems worked together as one complete customer journey.",
      ],
    },
    contribution: {
      items: [
        "Built the customer-facing e-commerce experience — responsive product and shopping interfaces with React",
        "Implemented the user journey from product discovery through checkout",
        "Built the backend functionality required to support the platform",
        "Connected the frontend with the application's data and services",
        "Supported the e-commerce and order flow",
        "Integrated Stripe into the platform and implemented the payment flow for customers",
        "Tested the payment integration to ensure payments could be processed correctly",
      ],
    },
    engineering: {
      description:
        "Building both the frontend and backend meant taking responsibility for more of the product than just implementing the interface — the different parts of the application had to work together to support the complete customer journey. Integrating Stripe was the most significant new area: it was a payment provider I hadn't worked with before, so I had to understand how the payment flow worked and connect it properly to the rest of the application, treating checkout as a complete experience spanning frontend, backend and payment provider rather than just another UI feature.",
      flow: { steps: ["Product Experience", "Shopping Flow", "Backend", "Payment Processing"] },
    },
    product: {
      journey: {
        steps: ["Browse Products", "View Product Details", "Add to Cart", "Checkout", "Pay via Stripe", "Order Confirmed"],
      },
      image: "/images/projects/beafrique-services.png",
    },
    challenges: [
      {
        challenge:
          "Stripe was a payment provider I hadn't previously integrated, and the platform needed to process payments correctly for customers in different locations.",
        decision:
          "I learned how Stripe's payment flow worked and connected it across the frontend, backend and payment provider as one checkout experience, then tested the integration thoroughly to confirm payments processed correctly.",
        why: "Payments have real financial consequences, so the integration needed to be understood end to end rather than treated as a self-contained UI component.",
      },
    ],
    results: {
      impact: [
        "Beafrique launched as a live e-commerce platform for African women's fashion",
        "Complete e-commerce experience delivered — product browsing through to checkout",
        "Stripe integrated to handle payments for local and international customers",
        "First project building and owning both the frontend and backend of a product",
      ],
    },
    learnings:
      "Beafrique gave me the opportunity to move beyond frontend development and take responsibility for building the full technical experience — from the customer-facing store to the backend and payment flow. Working across the stack gave me a broader view of product development and the relationship between the interface users see and the systems that power it.",
    evidence: [],
  },
};
