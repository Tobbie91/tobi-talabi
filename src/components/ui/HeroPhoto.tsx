import Image from "next/image";
import { siteConfig } from "@/content/site";

/**
 * No background-removed asset exists for the headshot, so the "cutout" feel
 * comes from composition alone: an organic clip-path instead of a rectangle.
 * The photo stays true to colour — the portfolio's restraint is about the UI
 * around it, not about muting the one real photograph on the page.
 */
export function HeroPhoto() {
  return (
    <div className="relative w-full">
      <svg width="0" height="0" aria-hidden className="absolute">
        <defs>
          <clipPath id="hero-portrait-clip" clipPathUnits="objectBoundingBox">
            <path d="M0.82,0.05 C0.96,0.13 1,0.33 0.98,0.53 C0.96,0.76 0.93,0.95 0.71,1.0 C0.49,1.05 0.21,1.0 0.08,0.84 C-0.04,0.68 0.0,0.41 0.06,0.23 C0.13,0.03 0.37,-0.05 0.59,0.0 C0.67,0.02 0.76,0.01 0.82,0.05 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="relative aspect-4/5 overflow-hidden bg-border" style={{ clipPath: "url(#hero-portrait-clip)" }}>
        <Image
          src="/images/hero/headshot.jpeg"
          alt={siteConfig.name}
          fill
          sizes="(min-width: 1024px) 640px, 90vw"
          className="object-cover"
          priority
        />
      </div>

      <span aria-hidden className="absolute -top-5 -left-5 hidden h-9 w-9 rounded-full bg-accent lg:block" />
    </div>
  );
}
