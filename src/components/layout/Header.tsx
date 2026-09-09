import Link from "next/link";
import { primaryNav, siteConfig } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-dark text-paper">
      <Container wide className="flex h-20 items-center justify-between md:h-24">
        <Link href="/" className="font-display text-lg font-semibold tracking-tight">
          {siteConfig.name}
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-10 md:flex">
          {primaryNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-paper/70 transition-colors duration-200 hover:text-paper"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/#contact"
          className="group hidden items-center gap-2 text-sm font-medium text-accent transition-colors duration-200 hover:text-paper md:inline-flex"
        >
          Let&rsquo;s work together
          <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </Link>

        <MobileNav links={primaryNav} ctaHref="/#contact" ctaLabel="Let's work together" />
      </Container>
    </header>
  );
}
