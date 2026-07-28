import type { Metadata } from "next";
import { HeroSection } from "@/components/ui/HeroSection";
import { PortfolioSection } from "@/components/ui/PortfolioSection";
import { AboutSection } from "@/components/ui/AboutSection";
import { SkillsSection } from "@/components/ui/SkillsSection";
import { TestimonialsSection } from "@/components/ui/TestimonialsSection";

export const metadata: Metadata = {
  title: "Zuhaib Ahmed Based in Sindh - Full Stack Developer & AI Engineer",
  description:
    "Zuhaib Ahmed Based in Sindh -- Full Stack Developer & AI Engineer building scalable web applications, AI automation systems, intelligent chatbots, and modern digital products for global clients.",
  openGraph: {
    title: "Zuhaib Ahmed Based in Sindh - Full Stack Developer & AI Engineer",
    description:
      "Zuhaib Ahmed Based in Sindh -- Full Stack Developer & AI Engineer building scalable web applications, AI automation systems, intelligent chatbots, and modern digital products for global clients.",
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
      <FAQSection />
    </>
  );
}

function FAQSection() {
  const faqs = [
    {
      q: "Who is Zuhaib Ahmed?",
      a: "Zuhaib Ahmed is a Full Stack Developer and AI Engineer based in Karachi, Pakistan, with around five years of experience building AI systems, automations, and websites for businesses in the UK and US. He is also the founder of AIVIZED."
    },
    {
      q: "What does Zuhaib Ahmed do?",
      a: "Zuhaib Ahmed builds AI systems, automations, websites, AI chatbots, and handles AI SEO and digital marketing including Meta ads, working with clients across the UK and US."
    },
    {
      q: "Is Zuhaib Ahmed the founder of AIVIZED?",
      a: "Yes. Zuhaib Ahmed founded AIVIZED, a specialized AI chatbot and automation service, alongside his broader freelance work as a Full Stack Developer and AI Engineer."
    },
    {
      q: "Where is Zuhaib Ahmed based?",
      a: "Zuhaib Ahmed is based in Karachi, Pakistan, and works remotely with clients across the UK, US, and locally in Pakistan."
    },
  ];

  return (
    <section className="section-padding bg-black">
      <div className="container-main">
        <div className="max-w-3xl">
          <p className="text-green text-sm font-mono tracking-widest uppercase mb-4">FAQ</p>
          <h2 className="heading-lg text-white mb-10">Frequently asked questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-white/20 p-6">
                <p className="text-white font-bold mb-2">{faq.q}</p>
                <p className="text-sm text-neutral-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}