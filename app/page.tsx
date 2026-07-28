import type { Metadata } from "next";
import Link from "next/link";
import { HeroSection } from "@/components/ui/HeroSection";
import { PortfolioSection } from "@/components/ui/PortfolioSection";
import { AboutSection } from "@/components/ui/AboutSection";
import { SkillsSection } from "@/components/ui/SkillsSection";
import { TestimonialsSection } from "@/components/ui/TestimonialsSection";
import { SERVICES } from "@/lib/constants";

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
      <ServicesSection />
      <AboutSection />
      <SkillsSection />
      <TestimonialsSection />
      <FAQSection />
    </>
  );
}

function ServicesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <div className="max-w-3xl">
          <p className="text-neutral-400 text-sm font-mono tracking-widest uppercase mb-4">
            Services
          </p>
          <h2 className="heading-lg text-black mb-8">
            What I can build for you
          </h2>
          <p className="text-neutral-500 text-lg leading-relaxed mb-10">
            From AI systems and automation pipelines to high-performance websites and
            digital marketing campaigns — each service is built around your specific
            business needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={"/services/" + s.slug}
                className="group border border-neutral-200 p-6 hover:border-green transition-colors duration-300"
              >
                <p className="text-green text-xs font-mono tracking-widest uppercase mb-2">
                  {s.title}
                </p>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {s.tagline}
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/services"
              className="text-sm text-neutral-400 hover:text-green transition-colors duration-200 inline-flex items-center gap-2"
            >
              View all services →
            </Link>
          </div>
        </div>
      </div>
    </section>
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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a },
    })),
  };

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
}