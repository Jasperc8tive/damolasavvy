"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MENU_LINKS, SITE } from "@/lib/constants";
import { LiveTime } from "./LiveTime";

const ease = [0.76, 0, 0.24, 1] as const;

export function MenuOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const go = (id: string) => {
    onClose();
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 200);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-[105] bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.aside
            className="fixed right-0 top-0 z-[106] flex h-[100dvh] w-full flex-col justify-between bg-surface p-8 sm:w-[460px] sm:p-12"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.7, ease }}
          >
            <div className="flex items-center justify-between">
              <span className="eyebrow">Menu</span>
              <button
                onClick={onClose}
                className="pill border-white/30 hover:bg-white/10"
                aria-label="Close menu"
              >
                Close ✕
              </button>
            </div>

            <nav className="flex flex-col gap-1">
              {MENU_LINKS.map((link, i) => (
                <motion.button
                  key={link.id}
                  onClick={() => go(link.id)}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + i * 0.06, duration: 0.6, ease }}
                  className="group flex items-baseline gap-4 py-1 text-left font-display text-display-md leading-none text-paper/90 transition-colors hover:text-paper"
                >
                  <span className="font-mono text-label text-muted">0{i + 1}</span>
                  <span className="relative">
                    {link.label}
                    <span className="absolute -bottom-1 left-0 h-px w-0 bg-paper transition-all duration-500 group-hover:w-full" />
                  </span>
                </motion.button>
              ))}
            </nav>

            <div className="space-y-4">
              <p className="eyebrow">Business enquiry</p>
              <a href={`mailto:${SITE.email}`} className="block text-body-lg hover:underline">
                {SITE.email}
              </a>
              <div className="flex items-center justify-between border-t border-line pt-4 font-mono text-label uppercase text-muted">
                <span>{SITE.location}</span>
                <LiveTime />
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
