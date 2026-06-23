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

    // Warm lowpass so the pad stays soft, not buzzy.
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 900;
    filter.Q.value = 0.6;
    filter.connect(master);
    master.connect(ctx.destination);

    // An audible A-minor pad spread across octaves (mid-range = plays on any speaker),
    // each voice slightly detuned for a lush, evolving ambient texture.
    const voices = [
      { freq: 220.0, type: "sine" as OscillatorType, gain: 0.5, detune: -4 },
      { freq: 261.63, type: "sine" as OscillatorType, gain: 0.34, detune: 5 },
      { freq: 329.63, type: "triangle" as OscillatorType, gain: 0.26, detune: -6 },
      { freq: 440.0, type: "sine" as OscillatorType, gain: 0.18, detune: 7 },
    ];
    voices.forEach((v) => {
      const osc = ctx.createOscillator();
      osc.type = v.type;
      osc.frequency.value = v.freq;
      osc.detune.value = v.detune;
      const g = ctx.createGain();
      g.gain.value = v.gain;
      osc.connect(g).connect(filter);
      osc.start();
    });

    // Slow filter-cutoff LFO for gentle movement.
    const lfo = ctx.createOscillator();
    lfo.frequency.value = 0.06;
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 350;
    lfo.connect(lfoGain).connect(filter.frequency);
    lfo.start();

    ctxRef.current = ctx;
    gainRef.current = master;
  };

  const toggle = async () => {
    ensureGraph();
    const ctx = ctxRef.current!;
    const master = gainRef.current!;
    // Autoplay policy: context starts suspended; resume on this user gesture.
    if (ctx.state !== "running") await ctx.resume();
    const next = !on;
    const now = ctx.currentTime;
    master.gain.cancelScheduledValues(now);
    master.gain.setValueAtTime(master.gain.value, now);
    master.gain.linearRampToValueAtTime(next ? 0.16 : 0, now + 0.8);
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
      aria-pressed={on ? "true" : "false"}
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
              on ? `${["h-[6px]", "h-[9px]", "h-[12px]"][i]} animate-pulse` : "h-[4px]"
            )}
          />
        ))}
      </span>
    </button>
  );
}
