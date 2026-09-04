"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import type { NavLink } from "@/content/types";

export function MobileNav({ links, ctaHref, ctaLabel }: { links: NavLink[]; ctaHref: string; ctaLabel: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  // Rendered via a portal to document.body: the header this button lives in
  // uses backdrop-blur, which (like transform/filter) makes it a containing
  // block for `position: fixed` descendants — without the portal, this panel
  // would be trapped inside the header's own height instead of the viewport.
  const panel =
    open
      ? createPortal(
          <div id="mobile-nav-panel" className="fixed inset-0 z-40 flex flex-col justify-center bg-paper px-8">
            <nav aria-label="Mobile" className="flex flex-col gap-6">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-3xl font-medium text-ink"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={ctaHref}
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-accent px-6 py-3 text-base font-medium text-paper"
              >
                {ctaLabel} <span aria-hidden>→</span>
              </Link>
            </nav>
          </div>,
          document.body,
        )
      : null;

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((prev) => !prev)}
        className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5"
      >
        <span
          aria-hidden
          className={`h-px w-5 bg-ink transition-transform duration-200 ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
        />
        <span
          aria-hidden
          className={`h-px w-5 bg-ink transition-transform duration-200 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
        />
      </button>

      {panel}
    </div>
  );
}
