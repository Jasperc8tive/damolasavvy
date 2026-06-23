"use client";

import { Panel } from "@/components/ui/Panel";
import { BlurText } from "@/components/ui/BlurText";

/** Dark centered statement — the craft thesis. */
export function StatementCraft() {
  return (
    <Panel tone="dark" crosshairs className="flex min-h-[80svh] items-center">
      <div className="container max-w-5xl text-center">
        <BlurText as="h2" type="words" className="mx-auto font-display text-display-lg">
          Great websites don&apos;t just look beautiful. They create experiences, build trust and
          drive growth.
        </BlurText>
      </div>
    </Panel>
  );
}
