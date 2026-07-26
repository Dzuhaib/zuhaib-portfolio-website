import type { Metadata } from "next";
import { HeroSection } from "@/components/ui/HeroSection";
import { PortfolioSection } from "@/components/ui/PortfolioSection";
import { AboutSection } from "@/components/ui/AboutSection";
import { SkillsSection } from "@/components/ui/SkillsSection";


import { TestimonialsSection } from "@/components/ui/TestimonialsSection";


export const metadata: Metadata = {
  title: "Zuhaib Ahmed — Full Stack Developer & AI Engineer",
  description:
    "Full Stack Developer & AI Engineer creating scalable web applications, AI automation systems, intelligent chatbots, and modern user experiences.",
  openGraph: {
    title: "Zuhaib Ahmed — Full Stack Developer & AI Engineer",
    description:
      "Full Stack Developer & AI Engineer creating scalable web applications, AI automation systems, intelligent chatbots, and modern user experiences.",
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
