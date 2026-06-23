# Damola Doyin — Portfolio (Trionn-concept)

A premium, motion-driven digital experience positioning **Damola Doyin** as a Website Developer, Digital Experience Designer & Growth Strategist. The interface concept faithfully reinterprets [trionn.com](https://trionn.com/): **pure monochrome**, oversized neo-grotesque type, mono micro-labels, alternating **dark ↔ light** full-bleed panels, `+` crosshair marks, blur-resolve headlines, a 3D metallic hero object, an orbital "expertise" ring, custom cursor, sound toggle, live local time, and a line-art footer.

## Tech Stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS** (custom dark design system)
- **GSAP + ScrollTrigger** — pinning, scrubbing, horizontal scroll, mask reveals
- **Lenis** — momentum smooth scrolling, synced to ScrollTrigger
- **Framer Motion** — menu overlay + entrance choreography
- **SplitType** — character/word/line text reveals
- **React Three Fiber + drei + three** — selective WebGL (hero + expertise ring only)
- **lucide-react** — icons

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Architecture

```text
app/            layout (fonts, metadata, JSON-LD, Chrome, cursor), page (sections), SEO routes, OG image
components/
  providers/    SmoothScrollProvider — Lenis ⇄ GSAP single scroll source
  chrome/       Chrome (wordmark + pills), MenuOverlay, CustomCursor, SoundToggle, LiveTime
  three/        MetalObject (hero), ExpertiseRing, Lazy3D (WebGL gatekeeper)
  sections/     Hero, LogoMarquee, StatementIntro, Work + CaseStudy, Expertise, Services,
                StatementCraft, Process, Stories, TrustBand, Future, Faq, Footer
  ui/           BlurText, Panel, Accordion, Crosshair, LineArtText, Counter, Marquee, VideoReveal, MagneticButton
hooks/          useGSAP, useReducedMotion, useMediaQuery, useInView
lib/            gsap (plugin registration), constants (site config), cn
content/        projects, testimonials, site-content (typed data, no fabricated metrics)
public/         videos/ (6 project clips), logos/ (6 brand logos)
```

### The sections (in scroll order)

1. **Hero** (dark) — 3D metallic monolith, "Designed to perform" blur-resolve headline, EST. meta
2. **Client logo marquee** — the 6 brands, monochrome
3. **Statement** (light) — "Most businesses have websites…"
4. **Selected Work** — `WORK` cleanser + 6 video-led case studies (Problem / Strategy / Solution / Outcome)
5. **Area of expertise** (dark) — orbital WebGL ring + service list
6. **Services** (light) — sticky intro + numbered expanding accordion
7. **Statement** (dark) — "Great websites don't just look beautiful…"
8. **How we work** (dark) — 8-step process columns
9. **Client stories** (light) — selectable testimonials
10. **Trust band** (dark) — count-up metrics + "why clients work with Damola"
11. **The Future** (dark) — AI / growth-systems narrative
12. **FAQ** (light) — numbered accordion (editable default answers)
13. **Footer / Contact** (dark) — line-art "DAMOLA", CTA, channels, live Lagos time

## Performance Notes (95+ Lighthouse target)

- **Selective WebGL** — `Lazy3D` renders nothing on touch / small screens / `prefers-reduced-motion`, so the three.js bundle is never even downloaded there. It is `next/dynamic` with `ssr: false`.
- **Lazy video** — the 6 project clips (~30 MB each) use `preload="none"` and only fetch/play when scrolled into view via IntersectionObserver (`VideoReveal`). **Recommended:** before production, compress these to ~2–5 MB (HandBrake / `ffmpeg -vcodec libx264 -crf 28 -vf scale=1280:-2`) and add a `poster` image per project for instant first paint.
- **Reduced motion** — every animation is gated by `useReducedMotion()`; the site degrades to a clean static layout.
- **Fonts** — Geist Mono + Instrument Serif via `next/font` (zero CLS); General Sans (display/body) via Fontshare CDN.
- **Code splitting** — sections are client components; WebGL is a separate on-demand chunk.

## Deployment (Vercel)

1. Push this folder to a Git repo.
2. Import the repo at [vercel.com/new](https://vercel.com/new) — framework auto-detected as Next.js.
3. No env vars required. Deploy.
4. Set your custom domain and update `SITE.url` in `lib/constants.ts`.

## Before You Ship

Email, WhatsApp, LinkedIn and the live `url` are already set in **`lib/constants.ts`**. The only remaining placeholder is **Calendly** (marked "placeholder" in the contact section) — drop in a real link when ready:

```ts
calendly: "https://calendly.com/<you>",
```

Optionally compress `public/videos/*.mp4` and add posters as noted above.
