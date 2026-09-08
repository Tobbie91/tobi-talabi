import Image from "next/image";
import { cn } from "@/lib/cn";

/** Sharp-cornered browser-chrome wrapper for genuine app/dashboard screenshots — never used for photos or flyers. */
export function DeviceFrame({
  src,
  alt,
  aspect = "aspect-video",
  sizes,
  className,
  priority,
}: {
  src: string;
  alt: string;
  aspect?: string;
  sizes?: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={cn("overflow-hidden border border-ink/10 bg-paper", className)}>
      <div className="flex items-center gap-1.5 border-b border-ink/10 px-4 py-2.5">
        <span aria-hidden className="h-2 w-2 bg-ink/15" />
        <span aria-hidden className="h-2 w-2 bg-ink/15" />
        <span aria-hidden className="h-2 w-2 bg-ink/15" />
        <span aria-hidden className="ml-3 h-4 w-full max-w-[220px] bg-ink/5" />
      </div>
      <div className={cn("relative", aspect)}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes ?? "(min-width: 1024px) 60vw, 100vw"}
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          priority={priority}
        />
      </div>
    </div>
  );
}
