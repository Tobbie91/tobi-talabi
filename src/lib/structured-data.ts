import { siteConfig } from "@/content/site";
import { siteDescription, siteUrl } from "./metadata";

// sameAs is deliberately omitted until real LinkedIn/GitHub URLs exist —
// emitting placeholder "#" links into structured data would be misleading.
export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    alternateName: siteConfig.fullName,
    jobTitle: siteConfig.role,
    url: siteUrl,
    email: siteConfig.email,
    description: siteDescription,
  };
}
