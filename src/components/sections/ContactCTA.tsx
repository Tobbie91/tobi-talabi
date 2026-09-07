import { contact } from "@/content/home";
import { siteConfig, socialLinks } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function ContactCTA() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-24 border-t border-border py-28 md:py-40">
      <Container wide>
        <Reveal>
          <p className="text-meta flex items-center gap-3 font-semibold tracking-[0.14em] text-ink-faint uppercase">
            <span aria-hidden className="h-px w-8 bg-accent" />
            {contact.kicker}
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h2 id="contact-heading" className="mt-8 max-w-3xl font-serif text-h1 font-medium text-balance text-ink">
            {contact.headline}
            <br />
            <span className="text-accent">{contact.accent}</span>
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-8 max-w-lg text-lede leading-relaxed text-ink-soft">{contact.supporting}</p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-14 flex flex-col gap-6 border-t border-border pt-10 sm:flex-row sm:flex-wrap sm:gap-12">
            <a
              href={`mailto:${siteConfig.email}`}
              className="group flex flex-col gap-1.5"
            >
              <span className="text-meta font-semibold text-ink-faint uppercase">Email</span>
              <span className="text-lg text-ink transition-colors duration-200 group-hover:text-accent">
                {siteConfig.email}
              </span>
            </a>

            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.isPlaceholder ? undefined : "_blank"}
                rel={social.isPlaceholder ? undefined : "noopener noreferrer"}
                aria-disabled={social.isPlaceholder}
                className="group flex flex-col gap-1.5"
              >
                <span className="text-meta font-semibold text-ink-faint uppercase">{social.label}</span>
                <span className="text-lg text-ink transition-colors duration-200 group-hover:text-accent">
                  View profile ↗
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
