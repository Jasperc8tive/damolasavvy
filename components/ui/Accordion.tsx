"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/cn";

export type AccordionItem = {
  n: string;
  title: string;
  body?: string;
  items?: readonly string[];
};

/** Numbered expanding accordion (Trionn services / FAQ pattern). */
export function Accordion({
  items,
  tone = "light",
  defaultOpen = 0,
}: {
  items: readonly AccordionItem[];
  tone?: "dark" | "light";
  defaultOpen?: number | null;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const lineColor = tone === "light" ? "border-line-dark" : "border-line";

  return (
    <div className={cn("border-t", lineColor)}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.n} className={cn("border-b", lineColor)}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center gap-6 py-7 text-left"
            >
              <span className="font-mono text-label opacity-50">{item.n}</span>
              <span className="flex-1 font-display text-display-sm">{item.title}</span>
              <span className={cn("text-2xl transition-transform duration-500", isOpen && "rotate-45")}>
                +
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="grid gap-6 pb-8 pl-[3.2rem] sm:grid-cols-[1fr_1fr]">
                    {item.body && <p className="max-w-md text-body-lg opacity-70">{item.body}</p>}
                    {item.items && (
                      <ul className="flex flex-col gap-2">
                        {item.items.map((sub) => (
                          <li key={sub} className="font-mono text-sm uppercase tracking-wider opacity-60">
                            {sub}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
