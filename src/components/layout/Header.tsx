import Link from "next/link";
import { primaryNav, siteConfig } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-paper/85 backdrop-blur-md">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="text-base font-semibold tracking-tight text-ink">
          {siteConfig.name}
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
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
          className="hidden items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-paper transition-colors duration-200 hover:bg-accent-deep md:inline-flex"
        >
          Let&rsquo;s Talk <span aria-hidden>→</span>
        </Link>

        <MobileNav links={primaryNav} ctaHref="#contact" ctaLabel="Let's Talk" />
      </Container>
    </header>
  );
}
