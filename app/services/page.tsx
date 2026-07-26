import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-stack development and AI engineering services including Next.js, React, Python, and AI automation.",
  openGraph: {
    title: "Services | Zuhaib Ahmed",
    description:
      "Full-stack development and AI engineering services.",
  },
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <HeroSection />
      <AllServicesSection />
      <ProcessSection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 bg-black">
      <div className="container-main">
        <div className="max-w-3xl">
          <p className="text-green text-sm font-mono tracking-widest uppercase mb-6">
            Services
          </p>
          <h1 className="heading-xl text-white mb-6">
            Full-stack development and AI engineering — built for scale
          </h1>
          <p className="text-lg text-neutral-400 leading-relaxed max-w-xl">
            From blazing-fast web applications to intelligent AI systems, every
            service is designed to deliver measurable results.
          </p>
        </div>
      </div>
    </section>
  );
}

function AllServicesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group block border border-neutral-200 p-8 hover:border-green transition-colors duration-300"
            >
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

function ProcessSection() {
  const steps = [
    { num: "01", title: "Consultation", desc: "We discuss your goals, requirements, and expectations in detail." },
    { num: "02", title: "Proposal", desc: "I provide a clear scope, timeline, and fixed-price quote." },
    { num: "03", title: "Development", desc: "Regular updates and transparent progress throughout the build." },
    { num: "04", title: "Launch", desc: "Deployment with monitoring, backups, and performance testing." },
    { num: "05", title: "Support", desc: "Ongoing maintenance and optimization to keep you ahead." },
  ];

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-main">
        <div className="mb-16">
          <p className="text-neutral-400 text-sm font-mono tracking-widest uppercase mb-4">
            Process
          </p>
          <h2 className="heading-lg text-black">From idea to launch — a clear path forward</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-6">
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
