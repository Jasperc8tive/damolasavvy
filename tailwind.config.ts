import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", lg: "2rem", xl: "3rem" },
      screens: { "2xl": "1600px" },
    },
    extend: {
      colors: {
        // Monochrome system — Trionn-style.
        ink: "#000000",
        paper: "#FFFFFF",
        // light panel greys
        panel: "#E9E9E7",
        "panel-2": "#D6D6D3",
        // dark surfaces
        surface: "#0A0A0A",
        "surface-2": "#141414",
        // neutral text
        muted: "#8A8A8A",
        "muted-light": "#6B6B6B",
        line: "rgba(255,255,255,0.10)",
        "line-dark": "rgba(0,0,0,0.14)",
      },
      fontFamily: {
        // General Sans = free Neue Montreal-class grotesque (loaded via Fontshare CDN)
        display: ["General Sans", "var(--font-inter)", "system-ui", "sans-serif"],
        sans: ["General Sans", "var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      fontSize: {
        "giant": ["clamp(3.5rem, 12vw, 16rem)", { lineHeight: "0.86", letterSpacing: "-0.035em" }],
        "display-xl": ["clamp(3rem, 9vw, 9rem)", { lineHeight: "0.9", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.5rem, 6.5vw, 6.5rem)", { lineHeight: "0.94", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(2rem, 4.5vw, 4.5rem)", { lineHeight: "1", letterSpacing: "-0.02em" }],
        "display-sm": ["clamp(1.5rem, 3vw, 2.75rem)", { lineHeight: "1.05", letterSpacing: "-0.015em" }],
        "body-lg": ["clamp(1.05rem, 1.4vw, 1.4rem)", { lineHeight: "1.5" }],
        "label": ["0.7rem", { lineHeight: "1", letterSpacing: "0.18em" }],
      },
      spacing: {
        section: "clamp(5rem, 12vh, 11rem)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.16, 1, 0.3, 1)",
        quart: "cubic-bezier(0.76, 0, 0.24, 1)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
