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
        // Dark editorial luxury — warm near-black canvas, warm paper, champagne gold accent.
        ink: "#0A0908", // warm off-black (was pure #000)
        paper: "#F4F1EA", // warm bone white (was pure #FFF)
        "paper-pure": "#FFFFFF",
        // light panel — warm ivory, not cold grey
        panel: "#ECE7DC",
        "panel-2": "#DCD5C6",
        // dark surfaces (warm)
        surface: "#0E0C0A",
        "surface-2": "#161310",
        // champagne-gold accent system
        accent: "#C6A15B", // champagne gold
        "accent-bright": "#E7C988", // highlight gold
        "accent-deep": "#9A7B3F", // deep antique gold
        // neutral text (warm-tinted)
        muted: "#8B857B",
        "muted-light": "#6A6457",
        line: "rgba(244,241,234,0.10)",
        "line-dark": "rgba(20,16,10,0.14)",
        "line-accent": "rgba(198,161,91,0.28)",
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
        // slow champagne sheen sweeping across gold text/rules
        shimmer: {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
        // barely-there breathing for ambient accents
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
        shimmer: "shimmer 6s linear infinite",
        float: "float 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
