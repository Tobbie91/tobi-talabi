import Image from "next/image";
import type { TrainingEvent } from "@/content/types";
import { Badge } from "@/components/ui/Badge";

export function TrainingCard({ event }: { event: TrainingEvent }) {
  return (
    <article className="flex flex-col rounded-2xl border border-border p-8">
      {event.photoUrl ? (
        <div className="relative -mx-8 -mt-8 mb-6 aspect-16/10 overflow-hidden rounded-t-2xl border-b border-border">
          <Image
            src={event.photoUrl}
            alt={`${event.title} flyer`}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover object-top"
          />
        </div>
      ) : null}

      <div className="flex flex-wrap items-center gap-2 text-xs text-ink-faint">
        <span>{event.date}</span>
        <span aria-hidden>·</span>
        <span>{event.audience}</span>
      </div>

      <h3 className="mt-4 text-h3 font-semibold text-balance text-ink">{event.title}</h3>
      <p className="mt-2 text-sm font-medium text-ink-soft">{event.topic}</p>
      <p className="mt-4 leading-relaxed text-ink-soft">{event.description}</p>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        {event.attendeeCount ? <Badge>{event.attendeeCount} attendees</Badge> : null}
        {event.partnerOrg ? <Badge>{event.partnerOrg}</Badge> : null}
        {!event.photoUrl && !event.videoUrl && !event.slidesUrl ? (
          <Badge className="border-dashed text-ink-faint">Media coming soon</Badge>
        ) : null}
      </div>
    </article>
  );
}
