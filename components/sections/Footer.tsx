"use client";

import { Mail, MessageCircle, Linkedin, CalendarClock, ArrowUpRight } from "lucide-react";
import { BlurText } from "@/components/ui/BlurText";
import { LineArtText } from "@/components/ui/LineArtText";
import { LiveTime } from "@/components/chrome/LiveTime";
import { SITE } from "@/lib/constants";

const CHANNELS = [
  { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}`, ready: true },
  { icon: MessageCircle, label: "WhatsApp", value: "+234 903 345 4812", href: SITE.whatsapp, ready: true },
  { icon: Linkedin, label: "LinkedIn", value: "in/damoladoyin", href: SITE.linkedin, ready: true },
  { icon: CalendarClock, label: "Calendly", value: "Add your link", href: SITE.calendly, ready: false },
];

export function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-ink pt-section">
      <div className="container">
        <p className="eyebrow mb-10">Let&apos;s build</p>
        <BlurText as="h2" type="words" className="max-w-5xl font-display text-display-xl font-semibold">
          Ready to build something unforgettable?
        </BlurText>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${SITE.email}`}
            className="pill border-white bg-white px-7 py-3.5 text-ink hover:bg-transparent hover:text-white"
          >
            Let&apos;s Talk <ArrowUpRight className="ml-2 h-4 w-4" />
          </a>
          <span className="font-mono text-label uppercase text-muted">
            Currently open to new projects
          </span>
        </div>

        {/* Channels */}
        <div className="mt-20 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {CHANNELS.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.label === "Email" ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-xl border border-line p-5 transition-colors hover:border-paper/30 hover:bg-surface-2"
            >
              <c.icon className="h-5 w-5" />
              <span className="flex-1">
                <span className="flex items-center gap-2 font-mono text-label uppercase text-muted">
                  {c.label}
                  {!c.ready && (
                    <span className="rounded-full bg-white/5 px-2 py-0.5 text-[9px] tracking-normal">
                      placeholder
                    </span>
                  )}
                </span>
                <span className="mt-0.5 block text-paper/90">{c.value}</span>
              </span>
              <ArrowUpRight className="h-4 w-4 text-muted transition-transform group-hover:rotate-45" />
            </a>
          ))}
        </div>
      </div>

      {/* Giant line-art wordmark */}
      <div className="relative mt-24 flex items-center justify-center">
        <LineArtText className="text-[26vw]">DAMOLA</LineArtText>
      </div>

      <div className="container flex flex-col items-center justify-between gap-4 border-t border-line py-8 font-mono text-label uppercase text-muted sm:flex-row">
        <span>© {new Date().getFullYear()} {SITE.fullName}</span>
        <span>{SITE.location}</span>
        <LiveTime />
      </div>
    </footer>
  );
}
