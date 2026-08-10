import type { Metadata } from "next";
import Link from "next/link";
import { HeroSection } from "@/components/ui/HeroSection";
import { PortfolioSection } from "@/components/ui/PortfolioSection";
import { AboutSection } from "@/components/ui/AboutSection";
import { SkillsSection } from "@/components/ui/SkillsSection";
import { TestimonialsSection } from "@/components/ui/TestimonialsSection";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  // Homepage overrides the layout template so the brand name leads the title.
  title: {
    absolute: "Zuhaib Ahmed — Full Stack Developer & AI Engineer in Sindh",
  },
  description:
    "Zuhaib Ahmed is a Full Stack Developer and AI Engineer based in Sindh, Pakistan, with 5 years of experience building AI systems, automation pipelines, and Next.js applications for clients in the UK and US. Founder of AIVIZED.",
  openGraph: {
    title: "Zuhaib Ahmed — Full Stack Developer & AI Engineer in Sindh",
    description:
      "Zuhaib Ahmed is a Full Stack Developer and AI Engineer based in Sindh, Pakistan. 5 years building AI systems, automations, and Next.js applications. Founder of AIVIZED.",
    type: "profile",
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
      a: "Zuhaib Ahmed is a Full Stack Developer and AI Engineer based in Sindh, Pakistan, and the founder of AIVIZED. He has around five years of experience building two connected categories of software: autonomous AI systems — multi-agent pipelines, RAG systems over proprietary documents, and AI SaaS platforms where the intelligence is the core architecture rather than a bolted-on feature — and the web applications, APIs, and interfaces that make those systems usable. His shipped work includes the AIVIZED Agent Factory, a no-code platform that deploys production chatbots in under ten minutes, and the AI Lead Engine, a four-agent outreach pipeline that processes 100 leads per job. Zuhaib Ahmed works primarily in Next.js, React, TypeScript, Python, and FastAPI, with LangChain and the OpenAI API for AI systems, serving clients across the United Kingdom, United States, and Pakistan.",
    },
    {
      q: "What does Zuhaib Ahmed do as a Full Stack Developer and AI Engineer?",
      a: "As a Full Stack Developer, Zuhaib Ahmed builds production web applications end to end: Next.js and React front-ends, Node.js and FastAPI back-ends, PostgreSQL and MongoDB data layers, and Docker-based deployment pipelines. As an AI Engineer, he designs multi-agent orchestration systems, retrieval-augmented generation pipelines over private company documents, and AI SaaS platforms built on the OpenAI API and LangChain. The two roles overlap deliberately — an AI system without a usable interface delivers no value, and a website without automation leaves work on the table. He also handles technical SEO, structured data, entity building, and Meta ad campaigns for the clients whose systems he builds, so the engineering and the demand generation are designed against the same business outcome.",
    },
    {
      q: "Where is Zuhaib Ahmed based?",
      a: "Zuhaib Ahmed is based in Karachi, in the Sindh province of Pakistan, and works remotely with clients across the United Kingdom, the United States, and Pakistan. Being based in Sindh means he overlaps with UK business hours for most of the working day and with US Eastern mornings in the late afternoon, so synchronous calls with clients in both regions are practical rather than an exception. Project delivery, code review, and support are handled remotely through the client's preferred stack — GitHub, Slack, Linear, or email. He is reachable at myselfzuhaib@gmail.com and on WhatsApp for project enquiries, and typically replies within one business day.",
    },
    {
      q: "Is Zuhaib Ahmed the founder of AIVIZED?",
      a: "Yes. Zuhaib Ahmed founded AIVIZED, an AI chatbot and automation company operating from Sindh, Pakistan. AIVIZED's flagship product is the Agent Factory, a no-code platform that lets businesses configure, train, and deploy production AI chatbots in under ten minutes without writing code. Zuhaib Ahmed runs AIVIZED alongside independent client work as a Full Stack Developer and AI Engineer, which means AIVIZED products are built and tested against the same real client requirements he encounters in consulting engagements. The company focuses on AI chatbots, multi-agent automation systems, and AI SaaS platforms for small and mid-sized businesses in the UK, US, and Pakistan.",
    },
    {
      q: "What technologies does Zuhaib Ahmed work with?",
      a: "Zuhaib Ahmed's front-end stack is Next.js, React, TypeScript, Tailwind CSS, and Framer Motion. On the back end he works in Node.js, Python, FastAPI, Express, PostgreSQL, and MongoDB. For AI engineering he uses the OpenAI API, LangChain, retrieval-augmented generation over vector databases, multi-agent orchestration, and n8n for workflow automation. Infrastructure runs on Docker, Vercel, and AWS with CI/CD pipelines, Redis, and BullMQ for background job processing. He chooses the stack against the problem rather than a default — the AI Lead Engine runs on Next.js 15, Prisma, PostgreSQL, BullMQ, Redis, and Playwright because that combination handles queued scraping and verification at volume, not because it is the newest option available.",
    },
    {
      q: "How can I hire Zuhaib Ahmed for a project?",
      a: "Start by describing the problem rather than the solution — the system you want built, the workflow you want automated, or the outcome you need — via email at myselfzuhaib@gmail.com, WhatsApp, or the contact form. Zuhaib Ahmed replies within one business day and usually proposes a short scoping call to establish constraints, existing systems, and success criteria before quoting. Engagements are structured as fixed-scope projects with defined deliverables, or as ongoing retainers for maintenance, iteration, and support. He works with clients in the United Kingdom, United States, and Pakistan, and takes on both greenfield builds and rescue work on existing codebases that have stalled. Typical projects range from a focused automation pipeline to a complete AI SaaS platform.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="section-padding bg-black">
      <div className="container-main">
        <div className="max-w-3xl">
          <p className="text-green text-sm font-mono tracking-widest uppercase mb-4">FAQ</p>
          <h2 className="heading-lg text-white mb-10">
            Frequently asked questions about Zuhaib Ahmed
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-white/20 p-6">
                <h3 className="text-white font-bold mb-2">{faq.q}</h3>
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