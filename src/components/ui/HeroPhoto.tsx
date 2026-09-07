import Image from "next/image";
import { siteConfig } from "@/content/site";

export function HeroPhoto() {
  return (
    <div className="relative">
      <div aria-hidden className="absolute -top-4 -right-4 bottom-4 left-4 border border-border-strong md:-top-6 md:-right-6 md:bottom-6 md:left-6" />

      <div className="relative aspect-4/5 overflow-hidden bg-paper-alt">
        <Image
          src="/images/hero/headshot.jpeg"
          alt={siteConfig.name}
          fill
          sizes="(min-width: 1024px) 420px, 90vw"
          className="object-cover grayscale-[8%]"
          priority
        />
      </div>

      <p
        aria-hidden
        className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-paper px-4 py-1.5 text-meta font-semibold text-ink-faint uppercase md:left-auto md:right-0 md:translate-x-0"
      >
        {siteConfig.name} — {new Date().getFullYear()}
      </p>
    </div>
  );
}
