"use client";

import { useRef } from "react";
import { Panel } from "@/components/ui/Panel";
import { BlurText } from "@/components/ui/BlurText";
import { useGSAP } from "@/hooks/useGSAP";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { FUTURE_AREAS } from "@/content/site-content";

export function Future() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useGSAP(() => {
    if (reduced || !ref.current) return;
    gsap.from("[data-area]", {
      opacity: 0,
      y: 24,
      stagger: 0.07,
      duration: 0.6,
      scrollTrigger: { trigger: ref.current, start: "top 70%" },
    });
  }, [reduced]);

  return (
    <Panel tone="dark" label="The Future">
      <div ref={ref} className="container">
        <BlurText as="h2" type="words" className="max-w-4xl font-display text-display-lg">
          Building for an intelligent, immersive, experience-driven web.
        </BlurText>
        <p className="mt-6 max-w-2xl text-body-lg text-muted">
          The ambition extends beyond websites — to digital products, platforms and growth systems
          that help businesses across Africa leverage technology to scale, compete and thrive.
        </p>

        <div className="mt-14 flex flex-wrap gap-3">
          {FUTURE_AREAS.map((area) => (
            <span
              key={area}
              data-area
              className="rounded-full border border-line px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:border-paper/40 hover:text-paper"
            >
              {area}
            </span>
          ))}
        </div>
      </div>
    </Panel>
  );
}
