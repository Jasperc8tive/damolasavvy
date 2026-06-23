"use client";

import { Lazy3D } from "@/components/three/Lazy3D";
import { BlurText } from "@/components/ui/BlurText";
import { EXPERTISE } from "@/content/site-content";

export function Expertise() {
  return (
    <section id="expertise" className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-ink py-section">
      <div className="pointer-events-none absolute inset-0 z-0 opacity-90">
        <Lazy3D scene="expertise" />
      </div>

      <div className="container relative z-10 text-center">
        <p className="eyebrow mx-auto mb-8 w-fit">What I do best</p>
        <BlurText as="h2" type="words" className="mx-auto max-w-4xl font-display text-display-xl">
          Area of expertise
        </BlurText>

        <ul className="mx-auto mt-16 flex max-w-4xl flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-wider text-muted">
          {EXPERTISE.map((item, i) => (
            <li key={item} className="flex items-center gap-6">
              {i > 0 && <span className="opacity-40">·</span>}
              <span className="transition-colors hover:text-paper">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
