import type { Metadata } from "next";
import { HeroSection } from "@/components/ui/HeroSection";
import { PortfolioSection } from "@/components/ui/PortfolioSection";
import { AboutSection } from "@/components/ui/AboutSection";
import { SkillsSection } from "@/components/ui/SkillsSection";


import { TestimonialsSection } from "@/components/ui/TestimonialsSection";


export const metadata: Metadata = {
  title: "Zuhaib Ahmed Based in Sindh - Full Stack Developer & AI Engineer",
  description:
    "Zuhaib Ahmed Based in Sindh — Full Stack Developer & AI Engineer building scalable web applications, AI automation systems, intelligent chatbots, and modern digital products for global clients.",
  openGraph: {
    title: "Zuhaib Ahmed Based in Sindh - Full Stack Developer & AI Engineer",
    description:
      "Zuhaib Ahmed Based in Sindh — Full Stack Developer & AI Engineer building scalable web applications, AI automation systems, intelligent chatbots, and modern digital products for global clients.",
  },
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <PortfolioSection />
      <AboutSection />
      <SkillsSection />
      <TestimonialsSection />
    </>
  );
}
