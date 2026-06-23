import type { Metadata, Viewport } from "next";
import { Inter, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/constants";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { Chrome } from "@/components/chrome/Chrome";
import { CustomCursor } from "@/components/chrome/CustomCursor";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["italic", "normal"],
  variable: "--font-serif",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SITE.title, template: "%s — Damola Doyin" },
  description: SITE.description ?? SITE.tagline,
  keywords: [
    "Damola Doyin",
    "Website Developer",
    "Digital Experience Designer",
    "Growth Strategist",
    "Web Design Lagos",
    "Conversion Optimization",
    "Premium Web Development Africa",
  ],
  authors: [{ name: SITE.fullName }],
  creator: SITE.fullName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    title: SITE.title,
    description: SITE.tagline,
    siteName: SITE.name,
  },
  twitter: { card: "summary_large_image", title: SITE.title, description: SITE.tagline },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  alternates: { canonical: SITE.url },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.fullName,
  url: SITE.url,
  email: SITE.email,
  jobTitle: "Website Developer, Digital Experience Designer & Growth Strategist",
  address: { "@type": "PostalAddress", addressLocality: "Lagos", addressCountry: "NG" },
  knowsAbout: ["Website Development", "Digital Experience Design", "Conversion Rate Optimization", "SEO", "Brand Strategy"],
  makesOffer: { "@type": "Service", serviceType: "Website Design, Development & Growth Strategy" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable} ${serif.variable}`}>
      <body className="grain">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <CustomCursor />
        <Chrome />
        <SmoothScrollProvider>
          <main id="top">{children}</main>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
