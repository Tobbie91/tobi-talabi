import Link from "next/link";
import { primaryNav, siteConfig } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-paper/90 backdrop-blur-md">
      <Container wide className="flex h-20 items-center justify-between md:h-24">
        <Link href="/" className="font-serif text-lg tracking-tight text-ink">
          {siteConfig.name}
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-10 md:flex">
          {primaryNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-ink-soft transition-colors duration-200 hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#contact"
          className="group hidden items-center gap-2 text-sm font-medium text-ink transition-colors duration-200 hover:text-accent md:inline-flex"
        >
          Let&rsquo;s talk
          <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </Link>

        <MobileNav links={primaryNav} ctaHref="#contact" ctaLabel="Let's talk" />
      </Container>
    </header>
  );
}
