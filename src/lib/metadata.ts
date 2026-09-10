// The production domain (tobitalabi.com) isn't confirmed live yet, so this
// falls back to a placeholder that's obvious in source/build output. Set
// NEXT_PUBLIC_SITE_URL once DNS/hosting is finalized.
const FALLBACK_SITE_URL = "https://tobitalabi.com";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? FALLBACK_SITE_URL;

export const siteDescription =
  "Software engineer and product builder focused on building thoughtful, scalable digital products and experiences.";
