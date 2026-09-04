// Site-wide identity, navigation and contact details.

import type { NavLink, SocialLink } from "./types";

export const siteConfig = {
  name: "Tobi Talabi",
  fullName: "Oluwatobiloba Akinrimisi Talabi",
  role: "Frontend Developer · Product Builder · Technology Educator",
  email: "oluwatobiakinrimisi@gmail.com",
  tagline: "Built with curiosity & code.",
};

export const primaryNav: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Speaking & Training", href: "#speaking" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/oluwatobi-akinrimisi-webdeveloper/", isPlaceholder: false },
  { label: "GitHub", href: "https://github.com/Tobbie91", isPlaceholder: false },
];
