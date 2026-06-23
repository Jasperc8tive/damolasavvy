"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/cn";

/**
 * Sound toggle — a Trionn signature. Generates a soft ambient drone with the
 * WebAudio API (no audio asset required). Off by default; only starts on a
 * user gesture, per browser autoplay rules.
 */
export function SoundToggle({ className }: { className?: string }) {
  const [on, setOn] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);
  const gainRef = useRef<GainNode | null>(null);

  const ensureGraph = () => {
    if (ctxRef.current) return;
    const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const ctx = new AC();
    const master = ctx.createGain();
    master.gain.value = 0;
    master.connect(ctx.destination);

    // Two detuned low oscillators + a slow LFO for a calm ambient bed.
    [55, 82.5].forEach((freq, i) => {
      const osc = ctx.createOscillator();
      osc.type = i === 0 ? "sine" : "triangle";
      osc.frequency.value = freq;
      const g = ctx.createGain();
      g.gain.value = i === 0 ? 0.6 : 0.25;
      osc.connect(g).connect(master);
      osc.start();
    });
    const lfo = ctx.createOscillator();
    lfo.frequency.value = 0.08;
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 0.015;
    lfo.connect(lfoGain).connect(master.gain);
    lfo.start();

    ctxRef.current = ctx;
    gainRef.current = master;
  };

  const toggle = () => {
    ensureGraph();
    const ctx = ctxRef.current!;
    const master = gainRef.current!;
    if (ctx.state === "suspended") ctx.resume();
    const next = !on;
    master.gain.cancelScheduledValues(ctx.currentTime);
    master.gain.linearRampToValueAtTime(next ? 0.05 : 0, ctx.currentTime + 0.6);
    setOn(next);
  };

  useEffect(() => {
    return () => {
      ctxRef.current?.close();
    };
  }, []);

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={on}
      aria-label={on ? "Mute ambient sound" : "Play ambient sound"}
      className={cn(
        "pill gap-2 border-white/40 backdrop-blur-sm hover:bg-white/10",
        className
      )}
    >
      {on ? <Volume2 className="h-3.5 w-3.5" /> : <VolumeX className="h-3.5 w-3.5" />}
      <span className="flex items-end gap-[2px]">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className={cn(
              "w-[2px] bg-current transition-all duration-300",
              on ? "animate-pulse" : ""
            )}
            style={{ height: on ? 6 + i * 3 : 4 }}
          />
        ))}
      </span>
    </button>
  );
}
