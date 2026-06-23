"use client";

import { Panel } from "@/components/ui/Panel";
import { BlurText } from "@/components/ui/BlurText";

/** Light statement panel — the brand thesis. */
export function StatementIntro() {
  return (
    <Panel tone="light" crosshairs className="flex min-h-[80svh] items-center">
      <div className="container max-w-5xl">
        <p className="eyebrow mb-10">The difference</p>
        <BlurText as="h2" type="words" className="font-display text-display-lg">
          Most businesses have websites. Very few have digital experiences.
        </BlurText>
        <BlurText
          as="p"
          type="words"
          className="mt-6 font-display text-display-lg text-muted-light"
        >
          I build the difference.
        </BlurText>
      </div>
    </Panel>
  );
}
