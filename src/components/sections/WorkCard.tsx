import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/types";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { cn } from "@/lib/cn";

type Variant = "showcase" | "feature" | "compact";

function metaParts(project: Project): string[] {
  const parts = [project.category, project.role];
  if (!project.year.startsWith("[")) parts.splice(1, 0, project.year);
  return parts;
}

function ProjectMeta({ project, className }: { project: Project; className?: string }) {
  return (
    <p className={cn("flex flex-wrap items-center gap-x-2 text-sm text-ink-faint", className)}>
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
  return <p className={cn("text-sm text-ink-faint", className)}>{project.tech.join(" · ")}</p>;
}

function ProjectLinks({ project, className }: { project: Project; className?: string }) {
  if (!project.hasCaseStudy && !project.externalUrl) return null;

  return (
    <div className={cn("flex flex-wrap gap-6 text-sm font-medium", className)}>
      {project.hasCaseStudy ? (
        <Link href={`/work/${project.slug}`} className="group inline-flex items-center gap-2 text-ink hover:text-accent">
          Case study
          <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      ) : null}
      {project.externalUrl ? (
        <a
          href={project.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 text-ink hover:text-accent"
        >
          Visit live
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
  className,
}: {
  project: Project;
  aspect: string;
  className?: string;
}) {
  if (!project.image) {
    return <ImagePlaceholder label={`${project.name} — image to be provided`} aspect={aspect} className={className} />;
  }

  return (
    <div className={cn("relative overflow-hidden border border-border bg-paper-alt", aspect, className)}>
      <Image
        src={project.image}
        alt={`${project.name} preview`}
        fill
        sizes="(min-width: 1024px) 60vw, 100vw"
        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
      />
    </div>
  );
}

export function WorkCard({ project, index, variant }: { project: Project; index: number; variant: Variant }) {
  const number = String(index + 1).padStart(2, "0");

  if (variant === "compact") {
    return (
      <article className="group grid grid-cols-[2.5rem_1fr] gap-x-5 gap-y-5 border-b border-border py-8 md:grid-cols-[3rem_1fr_10rem_auto] md:items-center md:gap-x-8">
        <span className="font-serif text-lg text-ink-faint">{number}</span>

        <div className="md:col-start-2">
          <h3 className="font-serif text-h3 font-medium text-ink transition-colors duration-300 group-hover:text-accent">
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

    return (
      <article className="group grid gap-8 md:grid-cols-2 md:items-center md:gap-14">
        <ProjectImage project={project} aspect="aspect-[4/3]" className={reversed ? "md:order-2" : undefined} />

        <div>
          <span className="font-serif text-lg text-ink-faint">{number}</span>
          <h3 className="mt-3 font-serif text-h2 font-medium text-balance text-ink">{project.name}</h3>
          <ProjectMeta project={project} className="mt-4" />
          <p className="mt-5 max-w-md leading-relaxed text-ink-soft">{project.description}</p>
          <ProjectTech project={project} className="mt-5" />
          <ProjectLinks project={project} className="mt-6" />
        </div>
      </article>
    );
  }

  // showcase
  return (
    <article className="group">
      <ProjectImage project={project} aspect="aspect-[16/9]" />

      <div className="mt-10 grid gap-10 md:grid-cols-[1fr_1.1fr] md:gap-16">
        <div>
          <span className="font-serif text-lg text-ink-faint">{number}</span>
          <h3 className="mt-3 font-serif text-h1 font-medium text-balance text-ink">{project.name}</h3>
          <ProjectMeta project={project} className="mt-5" />
        </div>

        <div>
          <p className="text-lede leading-relaxed text-ink-soft">{project.description}</p>
          <ProjectTech project={project} className="mt-6" />
          <ProjectLinks project={project} className="mt-7" />
        </div>
      </div>
    </article>
  );
}
