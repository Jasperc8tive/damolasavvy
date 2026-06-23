"use client";

import Image from "next/image";
import { PROJECTS } from "@/content/projects";
import { cn } from "@/lib/cn";

/** Monochrome client-logo marquee (Trionn trust strip). */
export function LogoMarquee() {
  const track = (
    <div className="flex shrink-0 animate-marquee items-center gap-16 pr-16" aria-hidden>
      {PROJECTS.map((p) => (
        <span key={p.id} className="flex items-center gap-16 whitespace-nowrap">
          <span className="flex items-center gap-3 font-display text-2xl font-medium text-paper/80">
            <span className="relative h-8 w-8 overflow-hidden rounded-md bg-white/90">
              <Image src={p.logo} alt="" fill className="object-cover grayscale" sizes="32px" />
            </span>
            {p.name}
          </span>
          <span className="opacity-30">✦</span>
        </span>
      ))}
    </div>
  );

  return (
    <section className={cn("border-y border-line bg-ink py-8")}>
      <div className="mb-6 container flex items-center gap-4">
        <span className="eyebrow">Trusted by ambitious brands</span>
      </div>
      <div className="flex w-full overflow-hidden">
        {track}
        {track}
      </div>
    </section>
  );
}
