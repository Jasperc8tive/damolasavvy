"use client";

import { Panel } from "@/components/ui/Panel";
import { BlurText } from "@/components/ui/BlurText";

/** Light statement panel — the brand thesis. */
export function StatementIntro() {
  return (
    <Panel tone="light" crosshairs className="flex min-h-[80svh] items-center">
      <div className="container max-w-5xl">
        <p className="eyebrow mb-10">The difference</p>
        <h2 className="font-display text-display-lg">
          <BlurText as="span" type="words" className="block">
            Most businesses have websites.
          </BlurText>
          <span className="block">
            <BlurText as="span" type="words" className="inline">
              Very few have
            </BlurText>{" "}
            <BlurText as="span" type="words" className="serif-accent inline text-accent-deep">
              digital experiences.
            </BlurText>
          </span>
        </h2>
        <p className="mt-8 font-display text-display-md text-muted-light">
          I build{" "}
          <span className="serif-accent text-accent-deep">the difference.</span>
        </p>
      </div>
    </Panel>
  );
}
