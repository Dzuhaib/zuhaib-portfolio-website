import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Zuhaib Ahmed",
  description:
    "Learn about Zuhaib Ahmed — a Full Stack Developer & AI Engineer based in Pakistan.",
  openGraph: {
    title: "About Zuhaib Ahmed",
    description:
      "Learn about Zuhaib Ahmed — a Full Stack Developer & AI Engineer based in Pakistan.",
  },
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <HeroSection />
      <StorySection />
      <JourneySection />
      <PhilosophySection />
      <SkillsSection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 bg-black">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-7">
            <p className="text-green text-sm font-mono tracking-widest uppercase mb-6">
              About Me
            </p>
            <h1 className="heading-xl text-white mb-6">
              I&apos;m Zuhaib Ahmed — an engineer who builds{" "}
              <span className="text-green">intelligent</span> systems
            </h1>
            <p className="text-lg text-neutral-400 leading-relaxed max-w-xl">
              Based in Pakistan, I help businesses build scalable web
              applications and AI-powered solutions that drive real results.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] bg-neutral-800 rounded-sm overflow-hidden relative">
              <Image
                src="/images/og-image.svg"
                alt="Zuhaib Ahmed"
                fill
                className="object-cover opacity-50"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StorySection() {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-main">
        <div className="max-w-3xl">
          <p className="text-neutral-400 text-sm font-mono tracking-widest uppercase mb-4">
            My Story
          </p>
          <div className="mt-8 space-y-5 text-neutral-500 leading-relaxed">
            <p className="text-xl text-neutral-600 leading-relaxed">
              My journey into development started with curiosity and a desire to
              create — from tinkering with code to building full-scale AI
              systems.
            </p>
            <p>
              I remember the first time I built a website from scratch. It was
              simple, but the feeling of bringing an idea to life through code
              was addictive. That curiosity turned into a career, driving me to
              master modern frameworks like Next.js and React while diving deep
              into AI technologies.
            </p>
            <p>
              Today, I combine my full-stack expertise with AI engineering to
              deliver solutions that don&apos;t just look good — they think,
              adapt, and scale with your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function JourneySection() {
  const milestones = [
    { year: "2020", title: "Started Freelancing", description: "Built my first professional web applications and discovered my passion for full-stack development." },
    { year: "2021", title: "First Enterprise Project", description: "Delivered a large-scale SaaS application for a US-based startup." },
    { year: "2022", title: "Senior Developer Role", description: "Led development of 15+ major web projects using Next.js and React." },
    { year: "2023", title: "AI Engineering Focus", description: "Deepened expertise in LangChain, RAG, and AI automation systems." },
    { year: "2024", title: "AI & Full Stack Integration", description: "Began offering comprehensive AI-powered development services globally." },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <div className="max-w-3xl">
          <p className="text-neutral-400 text-sm font-mono tracking-widest uppercase mb-4">
            Journey
          </p>
          <h2 className="heading-lg text-black mb-12">How I got here</h2>
          <div className="space-y-0">
            {milestones.map((m, i) => (
              <div key={m.year} className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 border border-neutral-200 flex items-center justify-center group-hover:border-green transition-colors duration-300">
                    <div className="w-2 h-2 rounded-full bg-green" />
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="w-px flex-1 bg-neutral-200 mt-2" />
                  )}
                </div>
                <div className="pb-10 pt-1.5">
                  <span className="text-sm text-green font-mono">{m.year}</span>
                  <h3 className="text-lg font-bold text-black mt-1">{m.title}</h3>
                  <p className="text-neutral-500 text-sm mt-1">{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PhilosophySection() {
  const items = [
    {
      title: "Quality Over Speed",
      desc: "I don't rush. Every project deserves clean code, thorough testing, and attention to detail.",
    },
    {
      title: "Communication First",
      desc: "Regular updates and transparent communication are non-negotiable. You'll always know where things stand.",
    },
    {
      title: "Business-Centered",
      desc: "Every technical decision is measured against business goals. Code exists to serve the bottom line.",
    },
    {
      title: "Continuous Learning",
      desc: "The web evolves fast. I stay ahead so your project benefits from the latest in AI and development.",
    },
  ];

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-main">
        <div className="max-w-3xl">
          <p className="text-neutral-400 text-sm font-mono tracking-widest uppercase mb-4">
            Philosophy
          </p>
          <h2 className="heading-lg text-black mb-10">
            How I approach every project
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {items.map((item) => (
              <div key={item.title} className="p-8 border border-neutral-200">
                <div className="w-8 h-px bg-green mb-4" />
                <h3 className="text-lg font-bold text-black mb-2">{item.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  const skills = [
    "Next.js", "React", "TypeScript", "Node.js", "Python",
    "FastAPI", "LangChain", "OpenAI", "RAG", "PostgreSQL",
    "MongoDB", "Docker", "Vercel", "Tailwind CSS", "Framer Motion",
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <div className="max-w-3xl">
          <p className="text-neutral-400 text-sm font-mono tracking-widest uppercase mb-4">
            Skills
          </p>
          <h2 className="heading-lg text-black mb-8">
            Tools I use to build
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="text-sm px-4 py-2 border border-neutral-200 text-neutral-600"
              >
                {skill}
              </span>
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
