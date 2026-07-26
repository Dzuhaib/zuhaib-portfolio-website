import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { SERVICES } from "@/lib/constants";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.keyword,
    description: service.description,
    openGraph: {
      title: `${service.keyword} | Zuhaib Ahmed`,
      description: service.description,
    },
    alternates: { canonical: `/services/${slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <HeroSection service={service} />
      <OverviewSection service={service} />
      <FeaturesSection service={service} />
      <ProcessSection />
    </>
  );
}

function HeroSection({ service }: { service: (typeof SERVICES)[number] }) {
  return (
    <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 bg-black">
      <div className="container-main">
        <div className="max-w-3xl">
          <p className="text-green text-sm font-mono tracking-widest uppercase mb-6">
            Service
          </p>
          <h1 className="heading-xl text-white mb-6">{service.h1}</h1>
          <p className="text-lg text-neutral-400 leading-relaxed max-w-xl mb-8">
            {service.tagline}
          </p>
          <Button href="/contact" size="lg">
            Discuss Your Project
          </Button>
        </div>
      </div>
    </section>
  );
}

function OverviewSection({ service }: { service: (typeof SERVICES)[number] }) {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <div className="max-w-3xl">
          <p className="text-neutral-400 text-sm font-mono tracking-widest uppercase mb-4">
            Overview
          </p>
          <h2 className="heading-lg text-black mb-6">
            What {service.title} means for your business
          </h2>
          <div className="text-neutral-500 leading-relaxed space-y-4">
            <p className="text-lg">{service.description}</p>
            <p>
              Every project I deliver is built with performance, scalability,
              and maintainability in mind. I follow industry best practices and
              use modern tooling to ensure your investment stands the test of
              time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection({ service }: { service: (typeof SERVICES)[number] }) {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-main">
        <div className="max-w-3xl">
          <p className="text-neutral-400 text-sm font-mono tracking-widest uppercase mb-4">
            What&apos;s Included
          </p>
          <h2 className="heading-lg text-black mb-8">
            Every detail covered
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-4 p-5 border border-neutral-200"
              >
                <span className="shrink-0 w-5 h-5 rounded-full border border-green flex items-center justify-center mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-green" />
                </span>
                <span className="text-neutral-600 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    { num: "01", title: "Discovery", desc: "Understanding your goals, audience, and requirements." },
    { num: "02", title: "Planning", desc: "Creating a clear roadmap with milestones and timelines." },
    { num: "03", title: "Development", desc: "Building with regular updates and transparent communication." },
    { num: "04", title: "Testing", desc: "Rigorous testing across devices, browsers, and scenarios." },
    { num: "05", title: "Launch", desc: "Smooth deployment with monitoring and support in place." },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <div className="max-w-3xl">
          <p className="text-neutral-400 text-sm font-mono tracking-widest uppercase mb-4">
            My Process
          </p>
          <h2 className="heading-lg text-black mb-10">How I deliver results</h2>
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
      </div>
    </section>
  );
}
