import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SERVICES } from "@/lib/constants";
import type { Service } from "@/lib/constants";
import { ServiceHero } from "@/components/ui/ServiceHero";

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
    description: service.metaDescription,
    openGraph: {
      title: `${service.keyword}`,
      description: service.metaDescription,
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
      <ServiceHero
        title={service.h1}
        tagline={service.tagline}
        keyword={service.keyword}
      />
      <OverviewSection service={service} />
      <EntitySection service={service} />
      <TechnicalSection service={service} />
      <FeaturesSection service={service} />
      <WhoSection service={service} />
      <MidPageCTA service={service} />
      <FAQSection service={service} />
      <OtherServicesSection service={service} />
      <CTASection service={service} />
    </>
  );
}

function OverviewSection({ service }: { service: Service }) {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <div className="max-w-3xl">
          <p className="text-neutral-400 text-sm font-mono tracking-widest uppercase mb-4">
            {service.overviewH2 ? "Overview" : "Overview"}
          </p>
          <h2 className="heading-lg text-black mb-6">
            {service.overviewH2 || `What ${service.title} means for your business`}
          </h2>
          <p className="text-green text-xl font-semibold mb-8">{service.h1}</p>
          <div className="text-neutral-500 leading-relaxed space-y-4">
            {service.description.split("\n").filter(Boolean).map((para, i) => (
              <p key={i} className="text-lg">{para}</p>
            ))}
            <p>
              Every project I deliver is built with performance, scalability,
              and maintainability in mind. I follow industry best practices and
              use modern tooling to ensure your investment stands the test of
              time.
            </p>
            <p>
              My approach combines technical excellence with clear communication. You will
              never wonder what is happening with your project. I provide regular updates,
              transparent timelines, and a fixed-price structure so there are no surprises.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function EntitySection({ service }: { service: Service }) {
  if (!service.entitySection) return null;
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-main">
        <div className="max-w-3xl">
          <p className="text-neutral-400 text-sm font-mono tracking-widest uppercase mb-4">
            How It Works
          </p>
          <h2 className="heading-lg text-black mb-6">{service.entitySection.h2}</h2>
          <div className="text-neutral-500 leading-relaxed space-y-4">
            {service.entitySection.paragraphs.map((para, i) => (
              <p key={i} className="text-lg">{para}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TechnicalSection({ service }: { service: Service }) {
  if (!service.technicalSection) return null;
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <div className="max-w-3xl">
          <p className="text-neutral-400 text-sm font-mono tracking-widest uppercase mb-4">
            Technical Foundation
          </p>
          <h2 className="heading-lg text-black mb-6">{service.technicalSection.h2}</h2>
          <div className="text-neutral-500 leading-relaxed space-y-4">
            {service.technicalSection.paragraphs.map((para, i) => (
              <p key={i} className="text-lg">{para}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection({ service }: { service: Service }) {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-main">
        <div className="max-w-3xl">
          <p className="text-neutral-400 text-sm font-mono tracking-widest uppercase mb-4">
            What Is Included
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

function WhoSection({ service }: { service: Service }) {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <div className="max-w-3xl">
          <p className="text-neutral-400 text-sm font-mono tracking-widest uppercase mb-4">
            Who This Is For
          </p>
          <h2 className="heading-lg text-black mb-6">Who this service is built for</h2>
          <p className="text-neutral-500 text-lg leading-relaxed">
            {service.whoItsFor}
          </p>
        </div>
      </div>
    </section>
  );
}

function MidPageCTA({ service }: { service: Service }) {
  return (
    <section className="py-12 bg-green/5 border-y border-green/10">
      <div className="container-main text-center">
        <p className="text-neutral-600 text-lg max-w-2xl mx-auto mb-5">
          Ready to get started with <strong>{service.title}</strong>? Let&apos;s discuss your project requirements.
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

function FAQSection({ service }: { service: Service }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a },
    })),
  };

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-main">
        <div className="max-w-3xl">
          <p className="text-neutral-400 text-sm font-mono tracking-widest uppercase mb-4">
            FAQ
          </p>
          <h2 className="heading-lg text-black mb-8">Frequently asked questions</h2>
          <div className="space-y-6">
            {service.faqs.map((faq, i) => (
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

function OtherServicesSection({ service }: { service: Service }) {
  const otherServices = SERVICES.filter((s) => s.slug !== service.slug);
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <div className="max-w-3xl">
          <p className="text-neutral-400 text-sm font-mono tracking-widest uppercase mb-4">
            Other Services
          </p>
          <h2 className="heading-lg text-black mb-8">Explore more services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {otherServices.map((s) => (
              <a
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
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection({ service }: { service: Service }) {
  return (
    <section className="section-padding bg-black">
      <div className="container-main text-center">
        <h2 className="heading-lg text-white mb-4">Interested in {service.title}?</h2>
        <p className="text-neutral-400 text-lg max-w-2xl mx-auto mb-8">
          {service.closingCta}
        </p>
        <a
          href="https://wa.me/923390349804"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green text-white font-medium px-8 py-4 text-sm tracking-wider uppercase hover:bg-green/90 transition-colors duration-200"
        >
          Discuss Your Project
        </a>
      </div>
    </section>
  );
}