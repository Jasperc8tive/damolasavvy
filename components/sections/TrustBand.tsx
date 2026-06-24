"use client";

import { Panel } from "@/components/ui/Panel";
import { Counter } from "@/components/ui/Counter";
import { METRICS, WHY_CLIENTS } from "@/content/site-content";

export function TrustBand() {
  return (
    <Panel tone="dark" label="Why it works">
      <div className="container">
        {/* Metrics */}
        <div className="grid gap-x-8 gap-y-12 border-b border-line pb-16 sm:grid-cols-2 lg:grid-cols-4">
          {METRICS.map((m) => (
            <div key={m.label}>
              <Counter
                value={m.value}
                suffix={m.suffix}
                className="block font-display text-display-lg font-semibold tabular-nums text-gold"
              />
              <p className="mt-2 font-mono text-label uppercase text-muted">{m.label}</p>
            </div>
          ))}
        </div>

        {/* Why clients work with Damola */}
        <div className="mt-16 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
          {WHY_CLIENTS.map((w, i) => (
            <div key={w.title} className="group border-t border-line pt-5 transition-colors duration-300 hover:border-line-accent">
              <span className="font-mono text-label uppercase text-accent">0{i + 1}</span>
              <h3 className="mt-3 font-display text-display-sm">{w.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{w.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Panel>
  );
}
