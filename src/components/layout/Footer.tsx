import Link from "next/link";
import { primaryNav, siteConfig, socialLinks } from "@/content/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark text-paper">
      <Container wide className="flex flex-col gap-10 border-t border-paper/10 py-16 md:py-20">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-display text-xl font-semibold tracking-tight">{siteConfig.name}</p>
            <p className="mt-2 max-w-xs text-sm text-paper/60">{siteConfig.role}</p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
            {primaryNav.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-paper/60 transition-colors duration-200 hover:text-paper">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-2 text-sm">
            <a href={`mailto:${siteConfig.email}`} className="text-paper/60 transition-colors duration-200 hover:text-paper">
              {siteConfig.email}
            </a>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.isPlaceholder ? undefined : "_blank"}
                rel={social.isPlaceholder ? undefined : "noopener noreferrer"}
                aria-disabled={social.isPlaceholder}
                className="text-paper/60 transition-colors duration-200 hover:text-paper"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-paper/10 pt-8 text-xs text-paper/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>{siteConfig.tagline}</p>
        </div>
      </Container>
    </footer>
  );
}
