import { resources } from "@/content/resources";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Resources() {
  const publishedResources = resources.filter((resource) => !resource.isPlaceholder);

  return (
    <section aria-labelledby="resources-heading" className="border-t border-ink/10 py-24 md:py-36">
      <Container wide>
        <Reveal>
          <SectionHeading id="resources" kicker="Writing" title="Articles, tutorials & resources" />
        </Reveal>

        {publishedResources.length === 0 ? (
          <Reveal delay={100}>
            <p className="mt-12 max-w-md border-t border-dashed border-ink/10 pt-8 text-sm text-ink-faint">
              Writing and resources — coming soon.
            </p>
          </Reveal>
        ) : (
          <ul className="mt-16 border-t border-ink/10">
            {publishedResources.map((resource, index) => (
              <Reveal key={resource.slug} delay={index * 80}>
                <li className="border-b border-ink/10 py-8">
                  <p className="text-meta font-semibold text-ink-faint uppercase">{resource.category}</p>
                  <h3 className="mt-3 font-display text-h3 font-bold text-ink">{resource.title}</h3>
                  <p className="mt-2 max-w-xl leading-relaxed text-ink-soft">{resource.description}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        )}
      </Container>
    </section>
  );
}
