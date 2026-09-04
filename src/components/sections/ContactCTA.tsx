import { contact } from "@/content/home";
import { siteConfig, socialLinks } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { Reveal } from "@/components/ui/Reveal";

export function ContactCTA() {
  const linkedIn = socialLinks.find((link) => link.label === "LinkedIn");

  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-24 py-20 md:py-32">
      <Container className="text-center">
        <Reveal>
          <h2 id="contact-heading" className="mx-auto max-w-2xl text-h2 font-semibold text-balance text-ink">
            {contact.headline}
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-ink-soft">{contact.supporting}</p>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <LinkButton href={`mailto:${siteConfig.email}`} variant="solid">
              {contact.primaryCta.label}
            </LinkButton>
            {linkedIn ? (
              <LinkButton href={linkedIn.href} variant="outline" external={!linkedIn.isPlaceholder}>
                {contact.secondaryCta.label}
              </LinkButton>
            ) : null}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
