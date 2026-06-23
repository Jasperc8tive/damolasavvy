import { Hero } from "@/components/sections/Hero";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { StatementIntro } from "@/components/sections/StatementIntro";
import { Work } from "@/components/sections/Work";
import { Expertise } from "@/components/sections/Expertise";
import { Services } from "@/components/sections/Services";
import { StatementCraft } from "@/components/sections/StatementCraft";
import { Process } from "@/components/sections/Process";
import { Stories } from "@/components/sections/Stories";
import { TrustBand } from "@/components/sections/TrustBand";
import { Future } from "@/components/sections/Future";
import { Faq } from "@/components/sections/Faq";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <StatementIntro />
      <Work />
      <Expertise />
      <Services />
      <StatementCraft />
      <Process />
      <Stories />
      <TrustBand />
      <Future />
      <Faq />
      <Footer />
    </>
  );
}
