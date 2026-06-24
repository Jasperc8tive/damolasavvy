"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/cn";

const TRACK = "/audio/ambient.mp3";
const TARGET_VOLUME = 0.55;
const FADE_MS = 800;

/**
 * Sound toggle — a Trionn signature. Plays a looping ambient track
 * (ES_Nostalgia · Aiyo) with a smooth fade in/out. Off by default; only
 * starts on a user gesture, per browser autoplay rules.
 */
export function SoundToggle({ className }: { className?: string }) {
  const [on, setOn] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeRef = useRef<number | null>(null);

  const ensureAudio = () => {
    if (audioRef.current) return audioRef.current;
    const audio = new Audio(TRACK);
    audio.loop = true;
    audio.preload = "none";
    audio.volume = 0;
    audioRef.current = audio;
    return audio;
  };

  /** Smoothly ramp volume, then pause once silent. */
  const fadeTo = (target: number, onDone?: () => void) => {
    const audio = audioRef.current;
    if (!audio) return;
    if (fadeRef.current) cancelAnimationFrame(fadeRef.current);

    const start = audio.volume;
    const startedAt = performance.now();
    const step = (now: number) => {
      const t = Math.min((now - startedAt) / FADE_MS, 1);
      audio.volume = start + (target - start) * t;
      if (t < 1) {
        fadeRef.current = requestAnimationFrame(step);
      } else {
        fadeRef.current = null;
        onDone?.();
      }
    };
    fadeRef.current = requestAnimationFrame(step);
  };

  const toggle = async () => {
    const audio = ensureAudio();
    const next = !on;
    setOn(next);

    if (next) {
      try {
        await audio.play(); // user gesture satisfies autoplay policy
        fadeTo(TARGET_VOLUME);
      } catch {
        setOn(false); // playback was blocked
      }
    } else {
      fadeTo(0, () => audio.pause());
    }
  };

  useEffect(() => {
    return () => {
      if (fadeRef.current) cancelAnimationFrame(fadeRef.current);
      audioRef.current?.pause();
      audioRef.current = null;
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
