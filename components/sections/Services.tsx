"use client";

import { Panel } from "@/components/ui/Panel";
import { Accordion } from "@/components/ui/Accordion";
import { BlurText } from "@/components/ui/BlurText";
import { SERVICE_CATEGORIES } from "@/content/site-content";

export function Services() {
  return (
    <Panel id="services" tone="light" label="Services / Capabilities">
      <div className="container grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        {/* Sticky intro */}
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <BlurText as="h2" type="words" className="font-display text-display-lg">
            Built to extend across products and experiences.
          </BlurText>
          <p className="mt-6 max-w-sm text-body-lg text-muted-light">
            Strategy, design, development and growth — one accountable partner, end to end.
          </p>
          <p className="mt-10 font-mono text-label uppercase text-muted-light">
            Our core capabilities
          </p>
        </div>

        {/* Accordion */}
        <Accordion items={SERVICE_CATEGORIES} tone="light" defaultOpen={0} />
      </div>
    </Panel>
  );
}
