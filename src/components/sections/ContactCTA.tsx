import { contact } from "@/content/home";
import { siteConfig, socialLinks } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { ColorSection } from "@/components/ui/ColorSection";
import { Reveal } from "@/components/ui/Reveal";

function socialActionLabel(label: string) {
  if (label === "WhatsApp") return "Send a message ↗";
  return "View profile ↗";
}

export function ContactCTA() {
  return (
    <ColorSection tone="dark" id="contact" aria-labelledby="contact-heading" className="scroll-mt-24 py-28 md:py-40">
      <Container wide className="text-center">
        <Reveal>
          <p className="flex items-center justify-center gap-3 text-meta font-semibold text-paper/50 uppercase">
            <span aria-hidden className="h-px w-8 bg-accent" />
            {contact.kicker}
            <span aria-hidden className="h-px w-8 bg-accent" />
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h2 id="contact-heading" className="mx-auto mt-8 max-w-3xl font-display text-h1 font-extrabold text-balance">
            {contact.headline}
            <br />
            <span className="font-serif text-accent italic">{contact.accent}</span>
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <p className="mx-auto mt-8 max-w-lg text-lede leading-relaxed text-paper/70">{contact.supporting}</p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mx-auto mt-14 flex max-w-3xl flex-col items-center gap-8 border-t border-paper/15 pt-10 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-12">
            <a href={`mailto:${siteConfig.email}`} className="group flex flex-col items-center gap-1.5">
              <span className="text-meta font-semibold text-paper/50 uppercase">Email</span>
              <span className="text-lg transition-colors duration-200 group-hover:text-accent">{siteConfig.email}</span>
            </a>

            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.isPlaceholder ? undefined : "_blank"}
                rel={social.isPlaceholder ? undefined : "noopener noreferrer"}
                aria-disabled={social.isPlaceholder}
                className="group flex flex-col items-center gap-1.5"
              >
                <span className="text-meta font-semibold text-paper/50 uppercase">{social.label}</span>
                <span className="text-lg transition-colors duration-200 group-hover:text-accent">
                  {socialActionLabel(social.label)}
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </Container>
    </ColorSection>
  );
}
