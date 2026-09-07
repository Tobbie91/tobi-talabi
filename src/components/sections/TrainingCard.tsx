import Image from "next/image";
import type { TrainingEvent } from "@/content/types";
import { Badge } from "@/components/ui/Badge";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { cn } from "@/lib/cn";

function EventMeta({ event }: { event: TrainingEvent }) {
  return (
    <p className="flex flex-wrap items-center gap-x-2 text-sm text-ink-faint">
      <span>{event.date}</span>
      <span aria-hidden>·</span>
      <span>{event.audience}</span>
    </p>
  );
}

function EventTags({ event }: { event: TrainingEvent }) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-2">
      {event.attendeeCount ? <Badge>{event.attendeeCount} attendees</Badge> : null}
      {event.partnerOrg ? <Badge>{event.partnerOrg}</Badge> : null}
      {!event.photoUrl && !event.videoUrl && !event.slidesUrl ? (
        <Badge className="border-dashed text-ink-faint">Media coming soon</Badge>
      ) : null}
    </div>
  );
}

export function TrainingCard({ event, variant }: { event: TrainingEvent; variant: "showcase" | "feature" }) {
  const image = event.photoUrl ? (
    <div className={cn("relative overflow-hidden border border-border bg-paper-alt", variant === "showcase" ? "aspect-[16/9]" : "aspect-[4/3]")}>
      <Image
        src={event.photoUrl}
        alt={`${event.title} flyer`}
        fill
        sizes="(min-width: 1024px) 60vw, 100vw"
        className="object-cover object-top"
      />
    </div>
  ) : (
    <ImagePlaceholder
      label={`${event.title} — flyer to be provided`}
      aspect={variant === "showcase" ? "aspect-[16/9]" : "aspect-[4/3]"}
    />
  );

  if (variant === "showcase") {
    return (
      <article>
        {image}
        <div className="mt-8 grid gap-8 md:grid-cols-[1fr_1.1fr] md:gap-16">
          <div>
            <EventMeta event={event} />
            <h3 className="mt-3 font-serif text-h2 font-medium text-balance text-ink">{event.title}</h3>
          </div>
          <div>
            <p className="text-sm font-medium tracking-wide text-accent uppercase">{event.topic}</p>
            <p className="mt-4 leading-relaxed text-ink-soft">{event.description}</p>
            <EventTags event={event} />
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="grid gap-8 md:grid-cols-2 md:items-center md:gap-14">
      {image}
      <div>
        <EventMeta event={event} />
        <h3 className="mt-3 font-serif text-h3 font-medium text-balance text-ink">{event.title}</h3>
        <p className="mt-2 text-sm font-medium tracking-wide text-accent uppercase">{event.topic}</p>
        <p className="mt-4 leading-relaxed text-ink-soft">{event.description}</p>
        <EventTags event={event} />
      </div>
    </article>
  );
}
