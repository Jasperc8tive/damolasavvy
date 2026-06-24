"use client";

import { useRef } from "react";
import { Panel } from "@/components/ui/Panel";
import { BlurText } from "@/components/ui/BlurText";
import { useGSAP } from "@/hooks/useGSAP";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { PROCESS_STAGES } from "@/content/site-content";

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useGSAP(() => {
    if (reduced || !ref.current) return;
    gsap.from("[data-step]", {
      opacity: 0,
      y: 40,
      stagger: 0.08,
      duration: 0.6,
      scrollTrigger: { trigger: ref.current, start: "top 65%" },
    });
  }, [reduced]);

  return (
    <Panel id="process" tone="dark" label="Our Process">
      <div ref={ref} className="container">
        <div className="mb-16 max-w-2xl">
          <BlurText as="h2" type="words" className="font-display text-display-lg">
            How we work
          </BlurText>
          <p className="mt-5 text-body-lg text-muted">A repeatable method applied across every engagement.</p>
        </div>

        <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STAGES.map((stage) => (
            <div key={stage.n} data-step className="group border-t border-line pt-5 transition-colors duration-300 hover:border-line-accent">
              <span className="font-mono text-label uppercase text-muted">
                Step — <span className="text-accent">{stage.n}</span>
              </span>
              <h3 className="mt-4 font-display text-display-sm">{stage.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{stage.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Panel>
  );
}
