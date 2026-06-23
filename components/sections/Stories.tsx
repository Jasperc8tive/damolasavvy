"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Panel } from "@/components/ui/Panel";
import { BlurText } from "@/components/ui/BlurText";
import { TESTIMONIALS } from "@/content/testimonials";
import { cn } from "@/lib/cn";

export function Stories() {
  const [active, setActive] = useState(0);
  const t = TESTIMONIALS[active];

  return (
    <Panel id="stories" tone="light" label="Client Stories">
      <div className="container">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <BlurText as="h2" type="words" className="font-display text-display-lg">
            Client stories
          </BlurText>
          <p className="max-w-xs text-body-lg text-muted-light">
            Great work is built through partnership. Here&apos;s what clients say.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          {/* Selector list */}
          <ul className="flex flex-col gap-1 border-t border-line-dark pt-4">
            {TESTIMONIALS.map((item, i) => (
              <li key={`${item.name}-${i}`}>
                <button
                  onClick={() => setActive(i)}
                  className={cn(
                    "flex w-full items-center gap-3 py-3 text-left font-mono text-sm uppercase tracking-wider transition-opacity",
                    active === i ? "opacity-100" : "opacity-40 hover:opacity-70"
                  )}
                >
                  <span className={cn("h-px bg-current transition-all", active === i ? "w-8" : "w-3")} />
                  {item.name}
                </button>
              </li>
            ))}
          </ul>

          {/* Active quote */}
          <div className="relative min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.figure
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <blockquote className="font-display text-display-sm leading-tight">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-8 border-t border-line-dark pt-5">
                  <span className="block font-display text-lg">{t.name}</span>
                  <span className="text-sm text-muted-light">{t.role}</span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </Panel>
  );
}
