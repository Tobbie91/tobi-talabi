import Image from "next/image";
import { siteConfig } from "@/content/site";

export function HeroPhoto() {
  return (
    <div className="relative rounded-[2rem] bg-linear-to-br from-accent-deep via-accent to-accent-bright p-3">
      <div aria-hidden className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-accent-bright/40 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-12 -left-10 h-48 w-48 rounded-full bg-accent-deep/50 blur-3xl" />

      <div className="relative aspect-4/5 overflow-hidden rounded-[1.6rem]">
        <Image
          src="/images/hero/headshot.jpeg"
          alt={siteConfig.name}
          fill
          sizes="(min-width: 1024px) 420px, 90vw"
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
