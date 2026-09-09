import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/types";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { DeviceFrame } from "@/components/ui/DeviceFrame";
import { LinkButton } from "@/components/ui/LinkButton";
import { cn } from "@/lib/cn";

type Variant = "showcase" | "feature" | "compact";

function metaParts(project: Project): string[] {
  const parts = [project.category, project.role];
  if (!project.year.startsWith("[")) parts.splice(1, 0, project.year);
  return parts;
}

function ProjectMeta({ project, className }: { project: Project; className?: string }) {
  return (
    <p className={cn("flex flex-wrap items-center gap-x-2 text-sm text-ink-soft", className)}>
      {metaParts(project).map((part, index) => (
        <span key={part + index} className="flex items-center gap-2">
          {index > 0 ? <span aria-hidden>·</span> : null}
          {part}
        </span>
      ))}
    </p>
  );
}

function ProjectTech({ project, className }: { project: Project; className?: string }) {
  if (project.tech.length === 0) return null;
  return <p className={cn("text-sm text-ink-soft", className)}>{project.tech.join(" · ")}</p>;
}

function ProjectLinks({ project, className }: { project: Project; className?: string }) {
  if (!project.hasCaseStudy && !project.externalUrl) return null;

  const linkClass = "group inline-flex items-center gap-2 text-ink hover:text-accent";

  return (
    <div className={cn("flex flex-wrap gap-6 text-sm font-medium", className)}>
      {project.hasCaseStudy ? (
        <Link href={`/work/${project.slug}`} className={linkClass}>
          Case study
          <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      ) : null}
      {project.externalUrl ? (
        <a href={project.externalUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
          Visit product
          <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      ) : null}
    </div>
  );
}

/** For the showcase/feature tiers: the case study is the primary CTA (solid accent button), the external link stays a plain arrow-link. */
function FeaturedLinks({ project, className }: { project: Project; className?: string }) {
  return (
    <div className={cn("flex flex-wrap items-center gap-6", className)}>
      {project.hasCaseStudy ? (
        <LinkButton href={`/work/${project.slug}`} variant="solid">
          Read the case study
        </LinkButton>
      ) : null}
      {project.externalUrl ? (
        <a
          href={project.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-accent"
        >
          Visit product
          <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      ) : null}
    </div>
  );
}

function ProjectImage({
  project,
  aspect,
  framed,
  className,
}: {
  project: Project;
  aspect: string;
  framed: boolean;
  className?: string;
}) {
  if (!project.image) {
    return <ImagePlaceholder label={`${project.name} — image to be provided`} aspect={aspect} className={className} />;
  }

  if (framed) {
    return <DeviceFrame src={project.image} alt={`${project.name} preview`} aspect={aspect} className={cn("group", className)} />;
  }

  return (
    <div className={cn("group relative overflow-hidden border border-border", aspect, className)}>
      <Image
        src={project.image}
        alt={`${project.name} preview`}
        fill
        sizes="(min-width: 1024px) 60vw, 100vw"
        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
      />
    </div>
  );
}

export function WorkCard({ project, index, variant }: { project: Project; index: number; variant: Variant }) {
  const number = String(index + 1).padStart(2, "0");
  // Beafrique's asset is an editorial fashion photo, not a product screenshot —
  // showing it in browser chrome would misrepresent it, so it skips DeviceFrame.
  const framed = project.slug !== "beafrique";

  if (variant === "compact") {
    return (
      <article className="group grid grid-cols-[2.5rem_1fr] gap-x-5 gap-y-5 border-b border-border py-8 md:grid-cols-[3rem_1fr_10rem_auto] md:items-center md:gap-x-8">
        <span className="font-display text-lg font-bold text-ink-soft/70">{number}</span>

        <div className="md:col-start-2">
          <h3 className="font-display text-h3 font-bold text-ink transition-colors duration-300 group-hover:text-accent">
            {project.name}
          </h3>
          <ProjectMeta project={project} className="mt-2" />
        </div>

        <ProjectTech project={project} className="col-start-2 md:col-start-3" />

        <ProjectLinks project={project} className="col-start-2 md:col-start-4 md:justify-self-end" />
      </article>
    );
  }

  if (variant === "feature") {
    const reversed = index % 2 === 0;
    // Esemie's asset is a wide screenshot — matching its native aspect keeps
    // object-cover from cropping it in half. Beafrique keeps the original 4:3.
    const aspect = project.slug === "esemie-website" ? "aspect-video" : "aspect-[4/3]";

    return (
      <article className="group grid gap-10 md:grid-cols-2 md:items-center md:gap-14">
        <ProjectImage project={project} aspect={aspect} framed={framed} className={reversed ? "md:order-2" : undefined} />

        <div>
          <span className="font-display text-lg font-bold text-ink-soft">{number}</span>
          <h3 className="mt-3 font-display text-h2 font-extrabold text-balance text-ink">{project.name}</h3>
          <ProjectMeta project={project} className="mt-4" />
          <p className="mt-5 max-w-md leading-relaxed text-ink-soft">{project.description}</p>
          <ProjectTech project={project} className="mt-5" />
          <FeaturedLinks project={project} className="mt-7" />
        </div>
      </article>
    );
  }

  // showcase
  return (
    <article className="group">
      <ProjectImage project={project} aspect="aspect-[16/9]" framed={framed} className="mx-auto max-w-3xl" />

      <div className="mt-10 grid gap-10 md:grid-cols-[1fr_1.1fr] md:gap-16">
        <div>
          <span className="font-display text-lg font-bold text-ink-soft">{number}</span>
          <h3 className="mt-3 font-display text-h1 font-extrabold text-balance text-ink">{project.name}</h3>
          <ProjectMeta project={project} className="mt-5" />
        </div>

        <div>
          <p className="text-lede leading-relaxed text-ink-soft">{project.description}</p>
          <ProjectTech project={project} className="mt-6" />
          <FeaturedLinks project={project} className="mt-7" />
        </div>
      </div>
    </article>
  );
}
