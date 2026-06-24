"use client";

import { Panel } from "@/components/ui/Panel";
import { BlurText } from "@/components/ui/BlurText";

/** Dark centered statement — the craft thesis. */
export function StatementCraft() {
  return (
    <Panel tone="dark" crosshairs className="flex min-h-[80svh] items-center">
      <div className="container max-w-5xl text-center">
        <h2 className="mx-auto font-display text-display-lg">
          <BlurText as="span" type="words" className="inline">
            Great websites don&apos;t just look beautiful. They
          </BlurText>{" "}
          <BlurText as="span" type="words" className="serif-accent inline text-gold">
            create experiences, build trust and drive growth.
          </BlurText>
        </h2>
      </div>
    </Panel>
  );
}
