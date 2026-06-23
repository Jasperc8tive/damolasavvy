"use client";

import { useState } from "react";
import { SITE } from "@/lib/constants";
import { MenuOverlay } from "./MenuOverlay";
import { SoundToggle } from "./SoundToggle";

/**
 * Persistent floating UI (Trionn-style). Uses mix-blend-difference so the
 * white chrome stays legible over both dark and light sections automatically.
 */
export function Chrome() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="pointer-events-none fixed inset-x-0 top-0 z-[95] mix-blend-difference">
        <div className="container flex items-center justify-between py-5">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="pointer-events-auto flex items-center gap-1 font-display text-xl font-semibold tracking-tight text-white"
          >
            Damola<span className="align-super text-xs">®</span>
          </button>

          <div className="pointer-events-auto flex items-center gap-2 text-white">
            <a href={`mailto:${SITE.email}`} className="pill border-white bg-white text-ink hover:bg-transparent hover:text-white">
              Let&apos;s Talk
            </a>
            <button
              onClick={() => setMenuOpen(true)}
              className="pill gap-2 border-white/40 text-white hover:bg-white/10"
              aria-label="Open menu"
            >
              Menu
              <span className="flex flex-col gap-[3px]">
                <span className="h-px w-3.5 bg-current" />
                <span className="h-px w-3.5 bg-current" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom-left sound toggle */}
      <div className="fixed bottom-5 left-5 z-[95] mix-blend-difference">
        <div className="text-white">
          <SoundToggle />
        </div>
      </div>

      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
