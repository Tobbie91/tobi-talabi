import Link from "next/link";
import { primaryNav, siteConfig, socialLinks } from "@/content/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <Container wide className="flex flex-col gap-10 py-16 md:py-20">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-serif text-xl tracking-tight text-ink">{siteConfig.name}</p>
            <p className="mt-2 max-w-xs text-sm text-ink-soft">{siteConfig.role}</p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
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

          <div className="flex flex-col gap-2 text-sm">
            <a href={`mailto:${siteConfig.email}`} className="text-ink-soft transition-colors duration-200 hover:text-ink">
              {siteConfig.email}
            </a>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.isPlaceholder ? undefined : "_blank"}
                rel={social.isPlaceholder ? undefined : "noopener noreferrer"}
                aria-disabled={social.isPlaceholder}
                className="text-ink-soft transition-colors duration-200 hover:text-ink"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-border pt-8 text-xs text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {siteConfig.name}. All rights reserved.</p>
          <p>{siteConfig.tagline}</p>
        </div>
      </Container>
    </footer>
  );
}
