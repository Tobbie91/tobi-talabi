import { resources } from "@/content/resources";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Resources() {
  const publishedResources = resources.filter((resource) => !resource.isPlaceholder);

  return (
    <section aria-labelledby="resources-heading" className="py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading id="resources" kicker="Writing" title="Articles, tutorials & resources" />
        </Reveal>

        {publishedResources.length === 0 ? (
          <Reveal delay={100}>
            <div className="mt-12 rounded-2xl border border-dashed border-border p-12 text-center">
              <p className="text-ink-soft">Writing and resources — coming soon.</p>
            </div>
          </Reveal>
        ) : (
          <ul className="mt-12 grid gap-8 md:grid-cols-3">
            {publishedResources.map((resource, index) => (
              <Reveal key={resource.slug} delay={index * 80}>
                <li className="rounded-2xl border border-border p-6">
                  <p className="text-xs font-medium tracking-wide text-ink-faint uppercase">{resource.category}</p>
                  <h3 className="mt-3 font-semibold text-ink">{resource.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{resource.description}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        )}
      </Container>
    </section>
  );
}
