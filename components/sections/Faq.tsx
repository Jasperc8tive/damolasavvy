"use client";

import { Panel } from "@/components/ui/Panel";
import { Accordion } from "@/components/ui/Accordion";
import { BlurText } from "@/components/ui/BlurText";
import { FAQ } from "@/content/site-content";

export function Faq() {
  const items = FAQ.map((f, i) => ({
    n: `0${i + 1}`,
    title: f.q,
    body: f.a,
  }));

  return (
    <Panel id="faq" tone="light" label="FAQ">
      <div className="container grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        <BlurText as="h2" type="words" className="font-display text-display-lg lg:sticky lg:top-28 lg:h-fit">
          Questions, answered.
        </BlurText>
        <Accordion items={items} tone="light" defaultOpen={null} />
      </div>
    </Panel>
  );
}
