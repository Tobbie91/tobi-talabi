"use client";

import { useState } from "react";
import Image from "next/image";

export function YouTubeEmbed({ videoId, title, className }: { videoId: string; title: string; className?: string }) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className={`relative aspect-video overflow-hidden border border-ink/15 bg-ink ${className ?? ""}`}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
          title={title}
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Play video: ${title}`}
      className={`group relative block aspect-video w-full overflow-hidden border border-ink/15 ${className ?? ""}`}
    >
      <Image
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt=""
        fill
        sizes="(min-width: 768px) 900px, 100vw"
        className="object-cover"
      />
      <span aria-hidden className="absolute inset-0 bg-ink/25 transition-colors duration-200 group-hover:bg-ink/35" />
      <span
        aria-hidden
        className="absolute top-1/2 left-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-paper text-ink transition-transform duration-200 group-hover:scale-105"
      >
        <svg width="20" height="22" viewBox="0 0 24 26" fill="none" aria-hidden>
          <path d="M2 2v22l20-11L2 2Z" fill="currentColor" />
        </svg>
      </span>
    </button>
  );
}
