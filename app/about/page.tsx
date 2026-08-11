import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";
import { ID, JsonLd, breadcrumbSchema, graph } from "@/lib/schema";
import AboutHeroSection from "./HeroSection";

export const metadata: Metadata = {
  title: "About Zuhaib Ahmed — Full Stack Developer & AI Engineer",
  description:
    "Zuhaib Ahmed is a Full Stack Developer and AI Engineer based in Sindh, Pakistan, with 5 years of experience building AI systems, automation pipelines, and high-performance websites for clients in the UK, US, and Pakistan.",
  openGraph: {
    title: "About Zuhaib Ahmed — Full Stack Developer & AI Engineer",
    description:
      "Zuhaib Ahmed is a Full Stack Developer and AI Engineer based in Sindh, Pakistan, building AI systems, automation pipelines, and high-performance websites for global clients.",
    type: "profile",
  },
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const profileSchema = {
    "@type": "ProfilePage",
    "@id": `${SITE.url}/about#profile`,
    url: `${SITE.url}/about`,
    name: "About Zuhaib Ahmed — Full Stack Developer & AI Engineer",
    mainEntity: { "@id": ID.person },
    isPartOf: { "@id": ID.website },
    inLanguage: "en",
  };

  const crumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ]);

  return (
    <>
      <JsonLd schema={graph(profileSchema, crumbs)} />
      <AboutHeroSection />
      <WhatIDoSection />
      <ApproachSection />
      <SkillsSection />
      <AboutFaqSection />
      <CTASection />
    </>
  );
}

function WhatIDoSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <div className="max-w-3xl">
          <p className="text-neutral-400 text-sm font-mono tracking-widest uppercase mb-4">
            What I Do
          </p>
          <h2 className="heading-lg text-black mb-8">
            I build systems that generate revenue, not just code that compiles
          </h2>
          <div className="space-y-5 text-neutral-500 leading-relaxed">
            <p className="text-lg text-neutral-600 leading-relaxed">
              I&apos;m Zuhaib Ahmed, a Full Stack Developer and AI Engineer based in
              Sindh, Pakistan. I help businesses in the UK, US, and Pakistan build
              technology that actually moves their business forward, custom AI systems
              that automate complex workflows, automation pipelines that connect
              disconnected tools, high-performance websites that convert visitors into
              customers, backend APIs that scale under real traffic, frontend
              interfaces that users actually enjoy, and digital marketing campaigns
              that generate measurable returns.
            </p>
            <p>
              My work spans two worlds. On one side, I build AI systems from the ground up, multi-agent 
              pipelines that research, analyze, and act autonomously, RAG systems that retrieve information 
              from your proprietary documents, and SaaS platforms where artificial intelligence is the core 
              architecture, not a feature bolted on afterward. On the other side, I build the web applications, 
              APIs, and frontend interfaces that make those AI systems accessible and useful to real users.
            </p>
            <p>
              The combination matters. An AI system without a usable interface doesn&apos;t deliver value. A 
              beautiful website without AI or automation leaves money on the table. I bridge both, building 
              complete systems where the intelligence and the interface work together to produce business 
              outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ApproachSection() {
  const pillars = [
    {
      title: "AI Systems & Automation",
      desc: "Custom AI platforms, multi-agent orchestration pipelines, RAG systems over proprietary data, and workflow automations that connect the tools you already use. I build systems that work autonomously, not chatbots that need someone holding the prompt.",
    },
    {
      title: "Web Development",
      desc: "React and Next.js websites engineered for performance and SEO, backend APIs that scale under production traffic, frontend interfaces built for accessibility and conversion, and custom WordPress solutions beyond bloated page builders. Every project gets the same attention to architecture regardless of the stack.",
    },
    {
      title: "Digital Marketing & SEO",
      desc: "Meta ad campaigns built on audience research and systematic creative testing rather than guesswork, and AI-driven SEO that builds entity signals, structured data, and genuinely useful content instead of keyword-stuffed blog posts. Every campaign is measured against actual business results.",
    },
    {
      title: "Maintenance & Support",
      desc: "Proactive website maintenance that prevents problems instead of reacting to them, security updates, performance monitoring, content management, and technical audits that keep your digital presence running at peak efficiency without you needing to think about it.",
    },
  ];

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-main">
        <div className="max-w-3xl">
          <p className="text-neutral-400 text-sm font-mono tracking-widest uppercase mb-4">
            How I Work
          </p>
          <h2 className="heading-lg text-black mb-10">
            Four pillars, one standard of quality
          </h2>
          <div className="space-y-6">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="border border-neutral-200 p-8">
                <div className="w-8 h-px bg-green mb-4" />
                <h3 className="text-xl font-bold text-black mb-3">{pillar.title}</h3>
                <p className="text-neutral-500 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  const categories = [
    { title: "AI & Automation", skills: ["OpenAI", "LangChain", "RAG", "Multi-Agent Systems", "Vector Databases", "n8n"] },
    { title: "Frontend", skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"] },
    { title: "Backend", skills: ["Node.js", "Python", "FastAPI", "Express", "PostgreSQL", "MongoDB"] },
    { title: "Infrastructure", skills: ["Docker", "Vercel", "AWS", "CI/CD", "Redis", "BullMQ"] },
    { title: "Marketing", skills: ["Meta Ads", "AI SEO", "Entity Building", "Structured Data", "Conversion Tracking"] },
  ];

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-main">
        <div className="max-w-3xl">
          <p className="text-neutral-400 text-sm font-mono tracking-widest uppercase mb-4">
            Skills
          </p>
          <h2 className="heading-lg text-black mb-8">
            Tools I use to build
          </h2>
          <div className="space-y-7">
            {categories.map((cat) => (
              <div key={cat.title}>
                <h3 className="text-xs font-mono tracking-widest uppercase text-neutral-400 mb-3">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm px-4 py-2 border border-neutral-200 text-neutral-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button href="/contact">
              Let&apos;s Work Together
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutFaqSection() {
  const faqs = [
    {
      q: "What makes Zuhaib Ahmed a Full Stack Developer rather than a front-end developer?",
      a: "Zuhaib Ahmed owns the full request path, not just the browser layer. On the front end that means Next.js, React, and TypeScript with server components, accessibility, and Core Web Vitals treated as requirements rather than cleanup. On the back end it means designing the PostgreSQL or MongoDB schema, writing the Node.js or FastAPI services, handling authentication and authorization, and building the background job infrastructure with Redis and BullMQ that queues and retries work reliably. It extends into infrastructure: Docker images, CI/CD pipelines, and deployment on Vercel or AWS. The practical result is that a bug can be traced from a rendering glitch through the API contract to a database query without waiting on a handoff, which is where most delivery time is actually lost.",
    },
    {
      q: "What does Zuhaib Ahmed build as an AI Engineer?",
      a: "AI engineering here means production systems, not prompt experiments. Zuhaib Ahmed builds multi-agent pipelines where separate agents own separate stages and hand structured state between them — the AI Lead Engine runs four such agents covering collection, verification, email generation, and social outreach, processing 100 leads per job. He builds retrieval-augmented generation systems that ground model output in a company's own documents through vector search, so answers cite internal sources instead of hallucinating. He also builds full AI SaaS platforms such as the AIVIZED Agent Factory, where the model is the core architecture. The engineering work is mostly the unglamorous part: evaluation, retries, cost control, queue management, and failure handling.",
    },
    {
      q: "Does Zuhaib Ahmed work with clients outside Pakistan?",
      a: "Yes. Zuhaib Ahmed is based in Sindh, Pakistan, and the majority of his work is with clients in the United Kingdom and the United States, alongside local Pakistani businesses. The timezone position is practical for both: Pakistan Standard Time overlaps most of the UK working day and reaches US Eastern mornings in the late afternoon, so scheduled calls with either region are routine rather than awkward. Collaboration runs through whatever the client already uses — GitHub for code review, Slack or email for communication, Linear or Jira for tracking. Contracts, invoicing, and payment are handled in the client's preferred currency and method, and engagements run as either fixed-scope projects or ongoing retainers.",
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
    <section className="section-padding bg-white">
      <div className="container-main">
        <div className="max-w-3xl">
          <p className="text-neutral-400 text-sm font-mono tracking-widest uppercase mb-4">
            FAQ
          </p>
          <h2 className="heading-lg text-black mb-8">
            Common questions about working with Zuhaib Ahmed
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-neutral-200 p-6">
                <h3 className="text-black font-bold mb-2">{faq.q}</h3>
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
        <h2 className="heading-lg text-white mb-4">Ready to build something that actually works?</h2>
        <p className="text-neutral-400 text-lg max-w-xl mx-auto mb-8">
          Whether you need an AI system, a website, or a marketing campaign, let&apos;s talk about what you&apos;re building and how I can help.
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
