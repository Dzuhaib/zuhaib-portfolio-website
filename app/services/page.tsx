import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import { ServicesHero } from "@/components/ui/ServicesHero";
import { iconComponents } from "@/components/ui/tech-icons";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-stack development, AI systems, automation, and digital marketing services by Zuhaib Ahmed, based in Sindh, Pakistan.",
  openGraph: {
    title: "Services | Zuhaib Ahmed",
    description:
      "AI systems, automation, web development, and digital marketing services.",
  },
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <AllServicesSection />
      <WhyMeSection />
      <ProcessSection />
      <FAQSection />
      <CTASection />
    </>
  );
}

function AllServicesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <div className="mb-14">
          <p className="text-neutral-400 text-sm font-mono tracking-widest uppercase mb-4">
            What I Offer
          </p>
          <h2 className="heading-lg text-black">Services tailored to your needs</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              href={"/services/" + service.slug}
              className="group block border border-neutral-200 p-8 hover:border-green transition-colors duration-300"
            >
              <div className="mb-5">
                {iconComponents[service.icon] || (
                  <div className="w-8 h-8 rounded bg-neutral-100 flex items-center justify-center text-xs font-bold text-neutral-500">
                    {service.title.charAt(0)}
                  </div>
                )}
              </div>
              <p className="text-green text-xs font-mono tracking-widest uppercase mb-3">
                {service.title}
              </p>
              <p className="text-sm text-neutral-500 leading-relaxed mb-4">
                {service.tagline}
              </p>
              <p className="text-sm text-neutral-400 group-hover:text-green transition-colors duration-200">
                Learn more →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyMeSection() {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-main">
        <div className="max-w-3xl">
          <p className="text-neutral-400 text-sm font-mono tracking-widest uppercase mb-4">
            Why Work With Me
          </p>
          <h2 className="heading-lg text-black mb-6">Built by an engineer who understands both code and business</h2>
          <p className="text-neutral-500 text-lg leading-relaxed mb-8">
            Every project I take on gets the same treatment: clear communication, regular updates, and
            a relentless focus on quality. I don't just write code. I solve problems. Whether you need
            an AI system, a custom website, or a marketing campaign that actually converts,
            I bring the same engineering discipline to every deliverable.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border border-neutral-200">
              <p className="text-3xl font-bold text-green mb-2">6+</p>
              <p className="text-sm text-neutral-500">Projects delivered</p>
            </div>
            <div className="p-6 border border-neutral-200">
              <p className="text-3xl font-bold text-green mb-2">100%</p>
              <p className="text-sm text-neutral-500">Client satisfaction</p>
            </div>
            <div className="p-6 border border-neutral-200">
              <p className="text-3xl font-bold text-green mb-2">24h</p>
              <p className="text-sm text-neutral-500">Average response time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    { num: "01", title: "Consultation", desc: "We discuss your goals, requirements, and expectations in detail." },
    { num: "02", title: "Proposal", desc: "I provide a clear scope, timeline, and fixed-price quote." },
    { num: "03", title: "Development", desc: "Regular updates and transparent progress throughout the build." },
    { num: "04", title: "Launch", desc: "Deployment with monitoring, backups, and performance testing." },
    { num: "05", title: "Support", desc: "Ongoing maintenance and optimization to keep you ahead." },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <div className="mb-16">
          <p className="text-neutral-400 text-sm font-mono tracking-widest uppercase mb-4">
            Process
          </p>
          <h2 className="heading-lg text-black">From idea to launch — a clear path forward</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-6">
          {steps.map((step, i) => (
            <div key={step.num} className="relative">
              <span className="text-5xl md:text-6xl font-bold text-neutral-200 block mb-4 leading-none">
                {step.num}
              </span>
              <h3 className="text-lg font-bold text-black mb-2">{step.title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-3 left-[4.5rem] right-0 h-px bg-neutral-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    {
      q: "Which countries does Zuhaib Ahmed offer services to?",
      a: "Zuhaib Ahmed offers his services mainly to businesses in the United Kingdom and the United States, alongside select local clients in Pakistan."
    },
    {
      q: "Do you work with US based clients?",
      a: "Yes, US businesses regularly work with Zuhaib Ahmed for website development, AI systems, automations, and digital marketing services."
    },
    {
      q: "Do you offer services in the UK?",
      a: "Yes, the UK is one of the core markets, and much of the pricing and onboarding is built specifically around UK client needs."
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
    <section className="section-padding bg-white">
      <div className="container-main">
        <div className="max-w-3xl">
          <p className="text-neutral-400 text-sm font-mono tracking-widest uppercase mb-4">FAQ</p>
          <h2 className="heading-lg text-black mb-8">Frequently asked questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-neutral-200 p-6">
                <p className="text-black font-bold mb-2">{faq.q}</p>
                <p className="text-sm text-neutral-500 leading-relaxed">{faq.a}</p>
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

function CTASection() {
  return (
    <section className="section-padding bg-black">
      <div className="container-main text-center">
        <h2 className="heading-lg text-white mb-4">Ready to build something great?</h2>
        <p className="text-neutral-400 text-lg max-w-xl mx-auto mb-8">
          Let's talk about your project. No commitment required.
        </p>
        <a
          href="https://wa.me/923390349804"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green text-white font-medium px-8 py-4 text-sm tracking-wider uppercase hover:bg-green/90 transition-colors duration-200"
        >
          Start a Conversation
        </a>
      </div>
    </section>
  );
}