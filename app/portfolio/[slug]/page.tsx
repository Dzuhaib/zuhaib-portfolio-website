import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ProjectHero } from "@/components/ui/ProjectHero";
import { SarahSlider } from "@/components/ui/SarahSlider";
import { DesktopMockup } from "@/components/ui/DesktopMockup";
import { PROJECTS } from "@/lib/constants";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | Zuhaib Ahmed`,
      description: project.description,
    },
    alternates: { canonical: `/portfolio/${slug}` },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  const otherProjects = PROJECTS.filter((p) => p.slug !== slug);

  return (
    <>
      <ProjectHero project={project} />
      <OverviewSection project={project} />
      {slug === "ai-lead-engine" && <ArchitectureSection />}
      {slug === "ai-lead-engine" && <TechStackSection />}
      {slug === "aivized-agent-factory" && <ProblemSolutionSection />}
      {slug === "aivized-agent-factory" && <AgentFactoryTechStackSection />}
      {slug === "aivized-agent-factory" && <AgentFactoryCTASection />}
      {slug === "growth-os" && <GrowthOSSection />}
      {slug === "growth-os" && <GrowthOSTechStackSection />}
      {slug === "fiveos" && <FiveOSSection />}
      {slug === "fiveos" && <FiveOSTechStackSection />}
      {slug === "talent-ai" && <TalentAISection />}
      {slug === "talent-ai" && <TalentAITechStackSection />}
      {slug === "videodown" && <VideoDownSection />}
      {slug === "videodown" && <VideoDownTechStackSection />}
      <TechnologiesSection project={project} />
      {project.achievements && <AchievementsSection project={project} />}
      <OtherProjectsSection projects={otherProjects} />
    </>
  );
}

function OverviewSection({ project }: { project: (typeof PROJECTS)[number] }) {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <div className="max-w-5xl">
          <p className="text-neutral-400 text-sm font-mono tracking-widest uppercase mb-3">
            Case Study Overview
          </p>
          <h2 className="heading-lg text-black mb-10">Value & Architecture Breakdown</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Problem */}
            <div className="p-6 border border-neutral-200 rounded-sm bg-neutral-50/50">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                <h3 className="text-xs font-mono tracking-wider uppercase text-neutral-500 font-bold">1. Problem</h3>
              </div>
              <p className="text-neutral-800 text-base leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* Solution */}
            <div className="p-6 border border-neutral-200 rounded-sm bg-neutral-50/50">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-green" />
                <h3 className="text-xs font-mono tracking-wider uppercase text-neutral-500 font-bold">2. Solution</h3>
              </div>
              <p className="text-neutral-800 text-base leading-relaxed">
                {project.solution}
              </p>
            </div>

            {/* Tech Stack Summary */}
            <div className="p-6 border border-neutral-200 rounded-sm bg-neutral-50/50">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <h3 className="text-xs font-mono tracking-wider uppercase text-neutral-500 font-bold">3. Tech Stack</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 bg-white border border-neutral-200 text-neutral-700 font-mono">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Business Impact */}
            <div className="p-6 border border-neutral-200 rounded-sm bg-neutral-50/50">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <h3 className="text-xs font-mono tracking-wider uppercase text-neutral-500 font-bold">4. Business Impact</h3>
              </div>
              <p className="text-neutral-800 text-base leading-relaxed font-semibold">
                {project.impact}
              </p>
            </div>
          </div>

          <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-white">Need an AI system tailored to your business?</p>
              <p className="text-xs text-neutral-400 mt-0.5">
                Let&apos;s discuss custom AI automation, agents, or SaaS development.
              </p>
            </div>
            <a
              href="https://wa.me/923390349804"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-green text-black font-semibold text-xs rounded-sm hover:bg-emerald-400 transition-colors whitespace-nowrap"
            >
              Contact on WhatsApp →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArchitectureSection() {
  const agents = [
    {
      name: "Alex",
      role: "Lead Collector",
      emoji: "🔍",
      description: "Scrapes Google Maps Business Profiles looking for businesses with 1–2 reviews, collects their name, review count, email, website, and social handles. Verifies whether their social accounts are active — checks if they posted in the last 2 days. If a business has a website but no email, Alex scrapes the site to extract it.",
      stats: "100 leads per job · 1–7 concurrent crawlers · Social activity check",
    },
    {
      name: "Sarah",
      role: "Lead Verifier",
      emoji: "✅",
      description: "Takes Alex's leads and verifies each one for SEO readiness, page speed performance, design quality, and whether they have a chatbot. Assigns qualification tags so the right outreach angle is used.",
      stats: "100 leads verified per job",
    },
    {
      name: "Marcus",
      role: "Email Outreach",
      emoji: "✉️",
      description: "Crafts personalized emails for each verified lead using OpenAI. Sends through the user's chosen email provider — professional SMTP or Gmail — with human-like delivery timing to maximize open rates.",
      stats: "Personalized via OpenAI · Custom SMTP or Gmail",
    },
    {
      name: "Chloe",
      role: "Social Outreach",
      emoji: "📱",
      description: "Takes verified leads and sends personalized direct messages over Instagram and LinkedIn. Uses the social handles collected by Alex to engage leads on their active platforms with AI-crafted messaging.",
      stats: "Instagram DMs · LinkedIn messages · AI-personalized",
      locked: true,
    },
  ];

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-main">
        <div className="max-w-3xl mb-14">
          <p className="text-green text-sm font-mono tracking-widest uppercase mb-4">
            System Architecture
          </p>
          <h2 className="heading-lg text-black mb-6">Four agents, one pipeline</h2>
          <p className="text-neutral-500 leading-relaxed">
            The system runs as a fully automated pipeline. Alex discovers leads
            (including social activity checks), Sarah qualifies them, Marcus
            reaches out via email, and Chloe handles social outreach — all
            without manual intervention. Each job processes hundreds of leads on
            a schedule you control.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-neutral-200 -translate-x-1/2" />

          <div className="space-y-12 md:space-y-0 relative">
            {agents.map((agent, i) => (
              <div
                key={agent.name}
                className={`md:grid md:grid-cols-2 md:gap-16 items-center ${
                  i < agents.length - 1 ? "md:mb-16" : ""
                }`}
              >
                <div className={`${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className={`bg-white border ${
                    agent.locked ? "border-amber-200/60" : "border-neutral-200"
                  } p-8 md:p-10 rounded-sm relative overflow-hidden`}>
                    {agent.locked && (
                      <div className="absolute top-0 right-0">
                        <div className="bg-amber-50 text-amber-700 text-[10px] font-mono tracking-wider uppercase px-3 py-1 rounded-bl-sm border-l border-b border-amber-200/60">
                          🔒 In Progress
                        </div>
                      </div>
                    )}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{agent.emoji}</span>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-xl font-bold text-black">{agent.name}</h3>
                            {agent.locked && (
                              <span className="text-[10px] font-mono text-amber-600 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-sm">
                                LOCKED
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-green font-mono">{agent.role}</p>
                        </div>
                      </div>
                      <span className="hidden md:inline-flex items-center justify-center w-8 h-8 rounded-full bg-black text-white text-xs font-bold">
                        {i + 1}
                      </span>
                    </div>
                    <p className="text-neutral-500 leading-relaxed mb-4">
                      {agent.description}
                    </p>
                    <div className="text-xs font-mono text-neutral-400 bg-neutral-50 px-4 py-2 border border-neutral-100">
                      {agent.stats}
                    </div>
                    {agent.locked && (
                      <div className="mt-4 text-xs text-amber-600 bg-amber-50/50 border border-amber-200/50 px-4 py-2.5 rounded-sm">
                        This module is under development — core architecture is built but not yet deployed.
                      </div>
                    )}
                  </div>
                </div>
                <div className={`${i % 2 === 1 ? "md:order-1" : ""}`}>
                  {agent.name === "Alex" ? (
                    <DesktopMockup>
                      <img src="/images/lead-engine/alex.webp" alt="Alex lead collection interface" className="w-full object-contain" />
                    </DesktopMockup>
                  ) : agent.name === "Sarah" ? (
                    <SarahSlider />
                  ) : agent.name === "Marcus" ? (
                    <DesktopMockup>
                      <img src="/images/lead-engine/marcus.webp" alt="Marcus email outreach interface" className="w-full object-contain" />
                    </DesktopMockup>
                  ) : (
                    <DesktopMockup className={agent.locked ? "border-amber-700/50" : ""}>
                      <div className={`flex items-center justify-center text-sm py-16 ${
                        agent.locked ? "text-amber-400" : "text-neutral-300"
                      }`}>
                        {agent.locked ? "🔒 Under Development" : "Agent Visualization"}
                      </div>
                    </DesktopMockup>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-black p-8 md:p-10 rounded-sm">
          <h3 className="text-lg font-bold text-white mb-4">How it all connects</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
            <div className="border border-neutral-800 p-5">
              <p className="text-green font-mono text-xs tracking-widest uppercase mb-2">Step 1</p>
              <p className="text-neutral-300">Alex crawls GMB for leads + social activity → stores in PostgreSQL via Prisma</p>
            </div>
            <div className="border border-neutral-800 p-5">
              <p className="text-green font-mono text-xs tracking-widest uppercase mb-2">Step 2</p>
              <p className="text-neutral-300">Sarah verifies each lead → BullMQ queue processes verification jobs</p>
            </div>
            <div className="border border-neutral-800 p-5">
              <p className="text-green font-mono text-xs tracking-widest uppercase mb-2">Step 3</p>
              <p className="text-neutral-300">Marcus generates + sends emails → OpenAI crafts copy, Nodemailer delivers</p>
            </div>
            <div className="border border-amber-900/30 p-5 relative">
              <div className="absolute top-0 right-0 bg-amber-900/20 text-amber-400 text-[9px] font-mono px-2 py-0.5 rounded-bl-sm">LOCKED</div>
              <p className="text-green font-mono text-xs tracking-widest uppercase mb-2">Step 4</p>
              <p className="text-neutral-400">Chloe sends social DMs → Instagram + LinkedIn outreach (under development)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechStackSection() {
  const categories = [
    {
      title: "Languages",
      items: [
        { name: "TypeScript", desc: "All app code, server actions, API routes, worker services & automation engines" },
        { name: "TSX / JSX", desc: "React components and pages (Next.js App Router)" },
        { name: "Prisma Schema", desc: "Database modeling" },
      ],
    },
    {
      title: "Framework",
      items: [
        { name: "Next.js 15", desc: "Full-stack React framework (App Router, API routes, server actions)" },
        { name: "React 19", desc: "UI rendering" },
      ],
    },
    {
      title: "UI & Styling",
      items: [
        { name: "Tailwind CSS 3.4", desc: "Utility-first CSS framework" },
        { name: "Radix UI", desc: "Headless accessible UI primitives (avatar, dialog, dropdown, tabs, toast, etc.)" },
        { name: "Framer Motion 11", desc: "Animations & transitions" },
        { name: "Lucide React", desc: "Icon library" },
        { name: "Recharts", desc: "Data visualization & charting" },
      ],
    },
    {
      title: "Data & State",
      items: [
        { name: "TanStack React Query 5", desc: "Server state & async data fetching" },
        { name: "TanStack React Table 8", desc: "Headless data table" },
        { name: "Zustand 5", desc: "Client-side state management" },
        { name: "Zod 3", desc: "Schema validation & type inference" },
      ],
    },
    {
      title: "Backend & Database",
      items: [
        { name: "Prisma 6", desc: "ORM + schema migrations + type-safe database client" },
        { name: "PostgreSQL", desc: "Production database (via Docker Compose)" },
        { name: "SQLite", desc: "Local dev database" },
      ],
    },
    {
      title: "Authentication",
      items: [
        { name: "NextAuth.js v5", desc: "Authentication framework with Prisma adapter" },
        { name: "bcryptjs", desc: "Password hashing" },
        { name: "jose", desc: "JWT / JWS handling" },
      ],
    },
    {
      title: "Job Queue & Background Processing",
      items: [
        { name: "BullMQ 5", desc: "Redis-backed job queue for background tasks" },
        { name: "ioredis", desc: "Redis client" },
      ],
    },
    {
      title: "Web Scraping & Automation",
      items: [
        { name: "Playwright", desc: "Browser automation (headless Chromium) for GMB scraping" },
        { name: "Cheerio", desc: "HTML parsing & DOM manipulation for email extraction" },
      ],
    },
    {
      title: "Email & Outreach",
      items: [
        { name: "Nodemailer", desc: "SMTP email sending (professional email or Gmail)" },
        { name: "imap / imap-simple", desc: "IMAP email reading (inbox monitoring)" },
      ],
    },
    {
      title: "AI",
      items: [
        { name: "OpenAI SDK", desc: "GPT integration for personalized email content generation" },
      ],
    },
    {
      title: "DevOps & Utilities",
      items: [
        { name: "Docker", desc: "Containerized deployment (Docker Compose)" },
        { name: "date-fns", desc: "Date manipulation" },
        { name: "pino", desc: "Structured JSON logging" },
        { name: "p-limit", desc: "Concurrency control" },
      ],
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <div className="max-w-5xl">
          <p className="text-neutral-400 text-sm font-mono tracking-widest uppercase mb-4">
            Full Tech Stack
          </p>
          <h2 className="heading-lg text-black mb-6">Every tool that powers this system</h2>
          <p className="text-neutral-500 leading-relaxed mb-12">
            A comprehensive breakdown of all languages, frameworks, libraries, and services used.
          </p>

          <div className="space-y-10">
            {categories.map((cat) => (
              <div key={cat.title}>
                <h3 className="text-sm font-mono tracking-widest uppercase text-neutral-400 mb-4 pb-2 border-b border-neutral-100">
                  {cat.title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {cat.items.map((item) => (
                    <div key={item.name} className="flex items-start gap-3 p-4 border border-neutral-100 hover:border-green/30 transition-colors duration-200">
                      <div className="w-1.5 h-1.5 rounded-full bg-green shrink-0 mt-2" />
                      <div>
                        <p className="text-sm font-semibold text-black">{item.name}</p>
                        <p className="text-xs text-neutral-500 mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemSolutionSection() {
  return (
    <>
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <p className="text-neutral-400 text-sm font-mono tracking-widest uppercase mb-4">
                The Problem
              </p>
              <h2 className="heading-lg text-black mb-6">Chatbot delivery was taking too long</h2>
              <p className="text-neutral-500 leading-relaxed text-lg">
                Every client project meant building a custom chatbot from scratch — wiring up the backend, designing a frontend widget, configuring the LLM, and handling deployment. What should have been a quick deliverable was bleeding into weeks, pushing back timelines and frustrating clients who expected instant results.
              </p>
              <div className="mt-8 bg-red-50 border border-red-100 p-6 rounded-sm">
                <p className="text-sm font-semibold text-red-800 mb-2">Before AIVIZED</p>
                <p className="text-red-700 text-sm leading-relaxed">
                  1–2 weeks per chatbot — custom code, manual deployment, client wait time, and zero reusability between projects.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-neutral-200" />
              <div className="lg:pl-16">
                <p className="text-green text-sm font-mono tracking-widest uppercase mb-4">
                  The Solution
                </p>
                <h2 className="heading-lg text-black mb-6">A platform that builds them in 10 minutes</h2>
                <p className="text-neutral-500 leading-relaxed text-lg">
                  I built AIVIZED Agent Factory — a no-code platform where I configure, generate, and deploy a fully functional AI chatbot in under 10 minutes. The backend handles LLM orchestration, API key management, structured logging, and async webhook delivery. The frontend widget bundles everything into a single self-contained script that drops into any website.
                </p>
                <div className="mt-8 bg-green-50 border border-green-100 p-6 rounded-sm">
                  <p className="text-sm font-semibold text-green-800 mb-2">After AIVIZED</p>
                  <p className="text-green-700 text-sm leading-relaxed">
                    Under 10 minutes per chatbot — no code, reusable components, instant deployment, and a consistent architecture across every project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="container-main">
          <div className="max-w-4xl">
            <p className="text-neutral-400 text-sm font-mono tracking-widest uppercase mb-4">
              How it works
            </p>
            <h2 className="heading-lg text-black mb-6">Configure. Generate. Deploy.</h2>
            <p className="text-neutral-500 leading-relaxed mb-12">
              The system is split into three layers — a Python/FastAPI backend, a self-contained React widget, and an admin dashboard.
            </p>
            <div className="relative">
              <div className="hidden md:block absolute left-[19px] top-0 bottom-0 w-px bg-neutral-200" />
              <div className="space-y-0">
                <div className="relative md:pl-16 pb-16">
                  <div className="hidden md:flex absolute left-0 top-1 w-[39px] h-[39px] rounded-full bg-green items-center justify-center">
                    <span className="text-white text-xs font-bold">01</span>
                  </div>
                  <div className="md:hidden text-green text-2xl font-mono font-bold mb-3">01</div>
                  <h3 className="text-xl font-bold text-black mb-3">Backend API</h3>
                  <p className="text-neutral-500 leading-relaxed mb-4">
                    FastAPI async server with SQLAlchemy ORM → PostgreSQL on Neon. OpenAI GPT-4o for chat completions with SSE streaming. Fernet-encrypted API key storage, structlog for structured logging, and httpx for async webhook delivery.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {["FastAPI", "Python 3.11", "SQLAlchemy", "OpenAI", "PostgreSQL"].map((t) => (
                      <span key={t} className="text-[11px] px-2.5 py-1 border border-neutral-200 text-neutral-500">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="relative md:pl-16 pb-16">
                  <div className="hidden md:flex absolute left-0 top-1 w-[39px] h-[39px] rounded-full bg-green items-center justify-center">
                    <span className="text-white text-xs font-bold">02</span>
                  </div>
                  <div className="md:hidden text-green text-2xl font-mono font-bold mb-3">02</div>
                  <h3 className="text-xl font-bold text-black mb-3">Widget Frontend</h3>
                  <p className="text-neutral-500 leading-relaxed mb-4">
                    React 18 chat widget built with TypeScript, bundled via Vite 5 into a single IIFE file (dist/widget.js). CSS-in-JS keeps styles self-contained. Minified with terser — drop it into any website and it works.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {["React 18", "TypeScript", "Vite 5", "terser", "CSS-in-JS"].map((t) => (
                      <span key={t} className="text-[11px] px-2.5 py-1 border border-neutral-200 text-neutral-500">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="relative md:pl-16">
                  <div className="hidden md:flex absolute left-0 top-1 w-[39px] h-[39px] rounded-full bg-green items-center justify-center">
                    <span className="text-white text-xs font-bold">03</span>
                  </div>
                  <div className="md:hidden text-green text-2xl font-mono font-bold mb-3">03</div>
                  <h3 className="text-xl font-bold text-black mb-3">Admin Dashboard</h3>
                  <p className="text-neutral-500 leading-relaxed mb-4">
                    Next.js 14+ dashboard with TailwindCSS, Prisma ORM, and JWT authentication. Manage chatbots, view analytics, configure webhooks, and monitor usage — all from one interface.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {["Next.js 14", "TailwindCSS", "Prisma", "JWT"].map((t) => (
                      <span key={t} className="text-[11px] px-2.5 py-1 border border-neutral-200 text-neutral-500">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function AgentFactoryTechStackSection() {
  const categories = [
    {
      title: "Backend",
      items: [
        { name: "Python 3.11.8", desc: "Runtime environment" },
        { name: "FastAPI (>=0.109)", desc: "Async REST API framework" },
        { name: "Uvicorn (>=0.27)", desc: "ASGI server" },
        { name: "SQLAlchemy 2.0", desc: "ORM → PostgreSQL (Neon, serverless)" },
        { name: "Pydantic 2", desc: "Validation & settings" },
        { name: "OpenAI Python SDK (>=1.12)", desc: "GPT-4o chat completions + SSE streaming" },
        { name: "cryptography (Fernet)", desc: "Encrypted API key storage" },
        { name: "structlog", desc: "Structured logging with secret scrubbing" },
        { name: "httpx", desc: "Async webhook delivery" },
        { name: "pytest + ruff", desc: "Testing & linting" },
      ],
    },
    {
      title: "Frontend Widget",
      items: [
        { name: "React 18 (TSX)", desc: "Chat widget UI" },
        { name: "Vite 5", desc: "Build tool → IIFE bundle dist/widget.js" },
        { name: "terser", desc: "Minification" },
        { name: "ESLint", desc: "Linting" },
        { name: "CSS-in-JS via Vite plugin", desc: "Self-contained single-file widget" },
      ],
    },
    {
      title: "Admin Dashboard",
      items: [
        { name: "Next.js 14+", desc: "Admin dashboard framework" },
        { name: "TailwindCSS", desc: "Dashboard styling" },
        { name: "Prisma", desc: "ORM for dashboard data" },
        { name: "JWT Auth", desc: "Authentication for admin panel" },
      ],
    },
    {
      title: "Infrastructure",
      items: [
        { name: "PostgreSQL 15+", desc: "on Neon (serverless)" },
        { name: "Docker / Docker Compose", desc: "Containerization (planned)" },
        { name: "Nixpacks", desc: "For Railway builds" },
        { name: "Railway / Heroku", desc: "Deployment platforms" },
        { name: "OpenAPI 3.0/3.1", desc: "API contracts for widget, admin, and webhooks" },
      ],
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <div className="max-w-5xl">
          <p className="text-neutral-400 text-sm font-mono tracking-widest uppercase mb-4">
            Full Tech Stack
          </p>
          <h2 className="heading-lg text-black mb-6">Every tool that powers AIVIZED Agent Factory</h2>
          <p className="text-neutral-500 leading-relaxed mb-12">
            A comprehensive breakdown of all languages, frameworks, libraries, and infrastructure used.
          </p>

          <div className="space-y-10">
            {categories.map((cat) => (
              <div key={cat.title}>
                <h3 className="text-sm font-mono tracking-widest uppercase text-neutral-400 mb-4 pb-2 border-b border-neutral-100">
                  {cat.title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {cat.items.map((item) => (
                    <div key={item.name} className="flex items-start gap-3 p-4 border border-neutral-100 hover:border-green/30 transition-colors duration-200">
                      <div className="w-1.5 h-1.5 rounded-full bg-green shrink-0 mt-2" />
                      <div>
                        <p className="text-sm font-semibold text-black">{item.name}</p>
                        <p className="text-xs text-neutral-500 mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AgentFactoryCTASection() {
  return (
    <section className="section-padding bg-black">
      <div className="container-main">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-green text-sm font-mono tracking-widest uppercase mb-4">
            Get Your Own
          </p>
          <h2 className="heading-lg text-white mb-6">
            Want a chatbot for your business?
          </h2>
          <p className="text-neutral-400 leading-relaxed text-lg mb-10">
            I build custom AI chatbots tailored to your industry — handling customer support, lead capture, bookings, and more. No code required on your end. Deployed within hours, not days.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/923390349804"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-green text-black text-sm font-semibold hover:bg-green/90 transition-colors duration-200"
            >
              Let&apos;s Build Your Chatbot
            </a>
            <a
              href="/portfolio"
              className="inline-flex items-center px-8 py-4 border border-neutral-700 text-neutral-300 text-sm font-semibold hover:border-green hover:text-green transition-colors duration-200"
            >
              See More Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function GrowthOSSection() {
  const features = [
    {
      title: "Hook Analyzer",
      desc: "AI-powered analysis of post hooks — scores effectiveness, suggests improvements, and shows what's working in your niche.",
      img: "/images/growth-os/Hook analyzer.webp",
    },
    {
      title: "Caption Generator",
      desc: "Generate viral-worthy captions tailored to your brand voice and content type. Trained on high-performing Instagram patterns.",
      img: "/images/growth-os/Caption generator.webp",
    },
    {
      title: "Content Scorer",
      desc: "Every post gets a data-driven score based on engagement potential, timing, format, and historical performance of similar content.",
      img: "/images/growth-os/Content Scorer check.webp",
    },
    {
      title: "Competitor Gap Analyzer",
      desc: "Analyze competitor profiles side-by-side. Discover content gaps, underserved topics, and opportunities to outperform.",
      img: "/images/growth-os/Competitor Gap analyzer.webp",
    },
    {
      title: "Niche Tracker",
      desc: "Track trending topics and hashtags in your niche. Stay ahead of content trends before they saturate.",
      img: "/images/growth-os/Nicher Tracker.webp",
    },
    {
      title: "Schedule Posts",
      desc: "Plan and schedule Instagram posts directly from the dashboard with a clean calendar interface.",
      img: "/images/growth-os/Schedule posts.webp",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <div className="max-w-3xl mb-14">
          <p className="text-neutral-400 text-sm font-mono tracking-widest uppercase mb-4">
            Features
          </p>
          <h2 className="heading-lg text-black mb-6">
            Everything you need to grow on Instagram
          </h2>
          <p className="text-neutral-500 leading-relaxed">
            From hook analysis to post scheduling — every feature is powered by
            OpenAI and connected to Instagram via the official Meta Graph API.
          </p>
        </div>
        <div className="space-y-20">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
            >
              <div className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <DesktopMockup>
                  <img
                    src={f.img}
                    alt={f.title}
                    className="w-full object-contain"
                  />
                </DesktopMockup>
              </div>
              <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <span className="text-green text-sm font-mono font-bold">
                  {(i + 1).toString().padStart(2, "0")}
                </span>
                <h3 className="text-2xl font-bold text-black mt-2 mb-4">{f.title}</h3>
                <p className="text-neutral-500 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GrowthOSTechStackSection() {
  const categories = [
    {
      title: "Languages",
      items: [
        { name: "TypeScript", desc: "Primary language across the entire app" },
        { name: "JavaScript", desc: "Scripting & configuration" },
        { name: "CSS", desc: "Styling via Tailwind v4 + PostCSS + Lightning CSS" },
        { name: "Node.js", desc: "Runtime environment" },
      ],
    },
    {
      title: "Core Framework",
      items: [
        { name: "Next.js 16.1.6 (App Router)", desc: "Full-stack React framework" },
        { name: "React 19.2.3", desc: "UI rendering" },
      ],
    },
    {
      title: "Styling & UI",
      items: [
        { name: "Tailwind CSS v4", desc: "Utility-first CSS framework" },
        { name: "PostCSS + Lightning CSS", desc: "CSS processing & optimization" },
        { name: "Framer Motion", desc: "Animations & transitions" },
        { name: "Lucide React", desc: "Icon library" },
      ],
    },
    {
      title: "Authentication",
      items: [
        { name: "Clerk (@clerk/nextjs v7)", desc: "Full auth, session management, user metadata — no database needed" },
      ],
    },
    {
      title: "AI / ML",
      items: [
        { name: "OpenAI SDK v6.29.0 (gpt-4o-mini)", desc: "Powers all AI features — hook analysis, caption gen, reel scripts, content scoring, comment intelligence, competitor gap, niche tracking, story planning" },
      ],
    },
    {
      title: "APIs",
      items: [
        { name: "Meta Graph API v25.0", desc: "Instagram Business/Creator account integration" },
        { name: "Instagram OAuth 2.0", desc: "User authentication via Instagram" },
      ],
    },
    {
      title: "Forms & Validation",
      items: [
        { name: "React Hook Form", desc: "Form management" },
        { name: "Zod v4", desc: "Schema validation" },
      ],
    },
    {
      title: "Charts & Data",
      items: [
        { name: "Recharts v3.8", desc: "Data visualization & charting" },
      ],
    },
    {
      title: "State Management",
      items: [
        { name: "Zustand v5", desc: "Client-side state management" },
      ],
    },
    {
      title: "Payment",
      items: [
        { name: "Stripe.js", desc: "Payment processing (loaded) + WhatsApp manual billing" },
      ],
    },
    {
      title: "Tooling & Deployment",
      items: [
        { name: "ESLint v9", desc: "Code linting" },
        { name: "TypeScript v5", desc: "Type checking" },
        { name: "npm", desc: "Package management" },
        { name: "Vercel", desc: "Deployment platform" },
      ],
    },
    {
      title: "Database",
      items: [
        { name: "None", desc: "All user data stored in Clerk's user metadata; data generated dynamically via OpenAI" },
      ],
    },
  ];

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-main">
        <div className="max-w-5xl">
          <p className="text-neutral-400 text-sm font-mono tracking-widest uppercase mb-4">
            Full Tech Stack
          </p>
          <h2 className="heading-lg text-black mb-6">Every tool powering Instagram Growth OS</h2>
          <p className="text-neutral-500 leading-relaxed mb-12">
            A comprehensive breakdown of all languages, frameworks, libraries, and services used.
          </p>
          <div className="space-y-10">
            {categories.map((cat) => (
              <div key={cat.title}>
                <h3 className="text-sm font-mono tracking-widest uppercase text-neutral-400 mb-4 pb-2 border-b border-neutral-100">
                  {cat.title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {cat.items.map((item) => (
                    <div key={item.name} className="flex items-start gap-3 p-4 border border-neutral-100 hover:border-green/30 transition-colors duration-200">
                      <div className="w-1.5 h-1.5 rounded-full bg-green shrink-0 mt-2" />
                      <div>
                        <p className="text-sm font-semibold text-black">{item.name}</p>
                        <p className="text-xs text-neutral-500 mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FiveOSSection() {
  const steps = [
    {
      step: "01",
      title: "Add Niche & Business",
      desc: "Enter your Fiverr niche and business type. The system kicks off a full market analysis pipeline — scraping gigs, reviews, keywords, and competitor stats in real-time.",
      img: "/images/fiveos/1 Add Niche and business and click genenrate strategy.webp",
    },
    {
      step: "02",
      title: "Scraping & Analysis",
      desc: "The Python backend uses curl_cffi to bypass Cloudflare and scrape live Fiverr data — gig listings, pricing, reviews, keywords, and seller stats. BeautifulSoup + lxml parse everything into structured data.",
      img: "/images/fiveos/2 scraping gig lists, kyewords, reviews and market stats.webp",
    },
    {
      step: "03",
      title: "Deep Reasoning Mode",
      desc: "OpenAI o3-mini analyzes the scraped data with deep reasoning — identifying market gaps, pricing opportunities, keyword demand, and competitive weaknesses.",
      img: "/images/fiveos/3 Deep reasoning mode.webp",
    },
    {
      step: "04",
      title: "Growth Strategy + Streaming UI",
      desc: "GPT-4o generates a comprehensive growth strategy. The result streams to the frontend in real-time via WebSockets — displayed alongside the WebGL shader background for a premium experience.",
      img: "/images/fiveos/4 Result Strategy.webp",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <div className="max-w-3xl mb-14">
          <p className="text-neutral-400 text-sm font-mono tracking-widest uppercase mb-4">
            How it works
          </p>
          <h2 className="heading-lg text-black mb-6">
            From niche to strategy in 4 steps
          </h2>
          <p className="text-neutral-500 leading-relaxed">
            FiveOS combines real-time Fiverr scraping with dual OpenAI models (o3-mini + gpt-4o)
            to generate actionable market intelligence — streamed live to your browser.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-[19px] top-0 bottom-0 w-px bg-neutral-200" />
          <div className="space-y-0">
            {steps.map((s, i) => (
              <div key={s.step} className={`relative md:pl-16 ${i < steps.length - 1 ? "pb-16" : ""}`}>
                <div className="hidden md:flex absolute left-0 top-1 w-[39px] h-[39px] rounded-full bg-green items-center justify-center">
                  <span className="text-white text-xs font-bold">{s.step}</span>
                </div>
                <div className="md:hidden text-green text-2xl font-mono font-bold mb-3">{s.step}</div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                  <div className="lg:col-span-7">
                    <DesktopMockup>
                      <img src={s.img} alt={s.title} className="w-full object-contain" />
                    </DesktopMockup>
                  </div>
                  <div className="lg:col-span-5">
                    <h3 className="text-xl font-bold text-black mb-3">{s.title}</h3>
                    <p className="text-neutral-500 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FiveOSTechStackSection() {
  const categories = [
    {
      title: "Languages",
      items: [
        { name: "TypeScript", desc: "Frontend & Next.js application code" },
        { name: "Python 3.11", desc: "Backend scraping & AI orchestration" },
        { name: "GLSL", desc: "WebGL shader programming for animated backgrounds" },
        { name: "CSS", desc: "Styling via Tailwind CSS" },
      ],
    },
    {
      title: "Frontend",
      items: [
        { name: "Next.js 15 (App Router)", desc: "Full-stack React framework" },
        { name: "React 19", desc: "UI rendering" },
        { name: "Tailwind CSS 3", desc: "Utility-first CSS framework" },
        { name: "lucide-react", desc: "Icon library" },
        { name: "react-markdown", desc: "Markdown rendering for strategy output" },
        { name: "ogl", desc: "WebGL/3D library for shader backgrounds" },
      ],
    },
    {
      title: "Backend",
      items: [
        { name: "FastAPI + Uvicorn", desc: "Async Python API server" },
        { name: "OpenAI API (o3-mini + gpt-4o)", desc: "Dual-model AI pipeline — deep reasoning + strategy generation" },
        { name: "curl_cffi", desc: "Cloudflare bypass for Fiverr scraping" },
        { name: "BeautifulSoup4 + lxml", desc: "HTML parsing & data extraction" },
      ],
    },
  ];

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-main">
        <div className="max-w-5xl">
          <p className="text-neutral-400 text-sm font-mono tracking-widest uppercase mb-4">
            Full Tech Stack
          </p>
          <h2 className="heading-lg text-black mb-6">Every tool powering FiveOS</h2>
          <p className="text-neutral-500 leading-relaxed mb-12">
            Languages, frameworks, and services used to build the Fiverr intelligence platform.
          </p>
          <div className="space-y-10">
            {categories.map((cat) => (
              <div key={cat.title}>
                <h3 className="text-sm font-mono tracking-widest uppercase text-neutral-400 mb-4 pb-2 border-b border-neutral-100">
                  {cat.title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {cat.items.map((item) => (
                    <div key={item.name} className="flex items-start gap-3 p-4 border border-neutral-100 hover:border-green/30 transition-colors duration-200">
                      <div className="w-1.5 h-1.5 rounded-full bg-green shrink-0 mt-2" />
                      <div>
                        <p className="text-sm font-semibold text-black">{item.name}</p>
                        <p className="text-xs text-neutral-500 mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TalentAISection() {
  const steps = [
    {
      step: "01",
      title: "Create Job Application Form",
      desc: "Employers build custom job application forms with specific requirements, skills, and qualifications. The form auto-generates a shareable link ready for distribution.",
      img: "/images/talent-ai/1 Creating job application form.webp",
    },
    {
      step: "02",
      title: "Share Link & Collect Candidates",
      desc: "Copy the link and share it directly with candidates or post on social media. Each submission feeds into the system automatically.",
      img: "/images/talent-ai/2 Created job application and copy link and share with candidates or social posting.webp",
    },
    {
      step: "03",
      title: "AI-Powered Auto-Shortlisting",
      desc: "When a candidate submits their CV, the system extracts text (PDF via pdfjs-dist, DOCX via mammoth) and scores it against the job requirements using Google Gemini AI. ATS-friendly CVs get shortlisted automatically.",
      img: "/images/talent-ai/3 I have submitted my cv through the copied link and my CV was ats frienldy so I got shortlisted automatically.webp",
    },
    {
      step: "04",
      title: "Scoring & Reasoning",
      desc: "Each submission shows exactly why it was shortlisted or rejected — with a detailed score breakdown based on the candidate's CV against the job requirements. Full transparency, no bias.",
      img: "/images/talent-ai/4 in the view submission it give reason why he made it shortlist and the scoring based on the candidate cv and the job requiremets..webp",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <div className="max-w-3xl mb-14">
          <p className="text-neutral-400 text-sm font-mono tracking-widest uppercase mb-4">
            How it works
          </p>
          <h2 className="heading-lg text-black mb-6">
            From job posting to AI shortlist in 4 steps
          </h2>
          <p className="text-neutral-500 leading-relaxed">
            Employers create job forms, share a link, and let AI handle the screening.
            Candidates submit CVs — the system extracts, scores, and shortlists automatically.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-[19px] top-0 bottom-0 w-px bg-neutral-200" />
          <div className="space-y-0">
            {steps.map((s, i) => (
              <div key={s.step} className={`relative md:pl-16 ${i < steps.length - 1 ? "pb-16" : ""}`}>
                <div className="hidden md:flex absolute left-0 top-1 w-[39px] h-[39px] rounded-full bg-green items-center justify-center">
                  <span className="text-white text-xs font-bold">{s.step}</span>
                </div>
                <div className="md:hidden text-green text-2xl font-mono font-bold mb-3">{s.step}</div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                  <div className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                    <DesktopMockup>
                      <img src={s.img} alt={s.title} className="w-full object-contain" />
                    </DesktopMockup>
                  </div>
                  <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                    <h3 className="text-xl font-bold text-black mb-3">{s.title}</h3>
                    <p className="text-neutral-500 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TalentAITechStackSection() {
  const categories = [
    {
      title: "Languages",
      items: [
        { name: "TypeScript", desc: "Main language (with JSX for React components)" },
      ],
    },
    {
      title: "Frontend",
      items: [
        { name: "React 19", desc: "UI framework" },
        { name: "Vite 6", desc: "Build tool & dev server" },
        { name: "React Router DOM v7", desc: "Client-side routing" },
        { name: "Tailwind CSS v4", desc: "Utility-first CSS (via @tailwindcss/vite)" },
        { name: "shadcn/ui (base-nova)", desc: "Component library" },
        { name: "Base UI React", desc: "Headless UI primitives" },
        { name: "Lucide React", desc: "Icon library" },
        { name: "Motion (Framer Motion)", desc: "Animations" },
        { name: "class-variance-authority + clsx + tailwind-merge", desc: "Class management" },
        { name: "Sonner", desc: "Toast notifications" },
        { name: "date-fns", desc: "Date utilities" },
      ],
    },
    {
      title: "Backend / Server",
      items: [
        { name: "Express", desc: "HTTP server (runs via tsx in server.ts)" },
        { name: "tsx", desc: "TypeScript execution engine" },
        { name: "dotenv", desc: "Environment variable management" },
      ],
    },
    {
      title: "AI / Data",
      items: [
        { name: "Google Gen AI SDK (@google/genai)", desc: "Gemini API for AI analysis & scoring" },
        { name: "pdfjs-dist", desc: "PDF text extraction from CVs" },
        { name: "mammoth", desc: "DOCX text extraction from CVs" },
      ],
    },
    {
      title: "Database & Auth",
      items: [
        { name: "Firebase v12", desc: "Firestore (database), Authentication, Storage" },
      ],
    },
    {
      title: "Dev Tools",
      items: [
        { name: "TypeScript 5.8", desc: "Type checking" },
        { name: "Autoprefixer", desc: "CSS vendor prefixes" },
      ],
    },
  ];

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-main">
        <div className="max-w-5xl">
          <p className="text-neutral-400 text-sm font-mono tracking-widest uppercase mb-4">
            Full Tech Stack
          </p>
          <h2 className="heading-lg text-black mb-6">Every tool powering Talent AI</h2>
          <p className="text-neutral-500 leading-relaxed mb-12">
            Languages, frameworks, and services used to build the AI-powered recruitment platform.
          </p>
          <div className="space-y-10">
            {categories.map((cat) => (
              <div key={cat.title}>
                <h3 className="text-sm font-mono tracking-widest uppercase text-neutral-400 mb-4 pb-2 border-b border-neutral-100">
                  {cat.title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {cat.items.map((item) => (
                    <div key={item.name} className="flex items-start gap-3 p-4 border border-neutral-100 hover:border-green/30 transition-colors duration-200">
                      <div className="w-1.5 h-1.5 rounded-full bg-green shrink-0 mt-2" />
                      <div>
                        <p className="text-sm font-semibold text-black">{item.name}</p>
                        <p className="text-xs text-neutral-500 mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function VideoDownSection() {
  const steps = [
    {
      step: "01",
      title: "Paste Your Link",
      desc: "Drop a YouTube, Instagram, or TikTok URL into the input field. The app detects the platform automatically.",
      img: "/images/videodown/Youtube, insta, tiktok video downloader.webp",
    },
    {
      step: "02",
      title: "Choose Format",
      desc: "Select whether you want video (MP4) or audio-only (MP3). ffmpeg handles the conversion on the fly.",
      img: "/images/videodown/paste your link and choose the format whether you want audio or video in format.webp",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <div className="max-w-3xl mb-14">
          <p className="text-neutral-400 text-sm font-mono tracking-widest uppercase mb-4">
            How it works
          </p>
          <h2 className="heading-lg text-black mb-6">
            Paste. Pick. Download.
          </h2>
          <p className="text-neutral-500 leading-relaxed">
            Two simple steps — paste any video link from YouTube, Instagram, or TikTok, choose your format, and download. No accounts, no friction.
          </p>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute left-[19px] top-0 bottom-0 w-px bg-neutral-200" />
          <div className="space-y-0">
            {steps.map((s, i) => (
              <div key={s.step} className={`relative md:pl-16 ${i < steps.length - 1 ? "pb-16" : ""}`}>
                <div className="hidden md:flex absolute left-0 top-1 w-[39px] h-[39px] rounded-full bg-green items-center justify-center">
                  <span className="text-white text-xs font-bold">{s.step}</span>
                </div>
                <div className="md:hidden text-green text-2xl font-mono font-bold mb-3">{s.step}</div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                  <div className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                    <DesktopMockup>
                      <img src={s.img} alt={s.title} className="w-full object-contain" />
                    </DesktopMockup>
                  </div>
                  <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                    <h3 className="text-xl font-bold text-black mb-3">{s.title}</h3>
                    <p className="text-neutral-500 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function VideoDownTechStackSection() {
  const categories = [
    {
      title: "Languages",
      items: [
        { name: "TypeScript", desc: "Main application language" },
        { name: "CSS", desc: "Styling via Tailwind CSS" },
      ],
    },
    {
      title: "Framework",
      items: [
        { name: "Next.js 14 (App Router)", desc: "Full-stack React framework" },
        { name: "React 18", desc: "UI rendering" },
      ],
    },
    {
      title: "Styling",
      items: [
        { name: "Tailwind CSS 3", desc: "Utility-first CSS framework" },
        { name: "PostCSS + Autoprefixer", desc: "CSS processing" },
      ],
    },
    {
      title: "Libraries",
      items: [
        { name: "youtube-dl-exec", desc: "Video/audio downloading (YouTube, TikTok, Instagram)" },
        { name: "ffmpeg-static", desc: "Audio conversion (MP3 extraction)" },
        { name: "rate-limiter-flexible", desc: "API rate limiting" },
      ],
    },
    {
      title: "Dev Tools",
      items: [
        { name: "ESLint", desc: "Code linting" },
        { name: "TypeScript 5", desc: "Type checking" },
      ],
    },
  ];

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-main">
        <div className="max-w-5xl">
          <p className="text-neutral-400 text-sm font-mono tracking-widest uppercase mb-4">
            Full Tech Stack
          </p>
          <h2 className="heading-lg text-black mb-6">Every tool powering VideoDown</h2>
          <p className="text-neutral-500 leading-relaxed mb-12">
            Languages, frameworks, and libraries used to build the cross-platform downloader.
          </p>
          <div className="space-y-10">
            {categories.map((cat) => (
              <div key={cat.title}>
                <h3 className="text-sm font-mono tracking-widest uppercase text-neutral-400 mb-4 pb-2 border-b border-neutral-100">
                  {cat.title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {cat.items.map((item) => (
                    <div key={item.name} className="flex items-start gap-3 p-4 border border-neutral-100 hover:border-green/30 transition-colors duration-200">
                      <div className="w-1.5 h-1.5 rounded-full bg-green shrink-0 mt-2" />
                      <div>
                        <p className="text-sm font-semibold text-black">{item.name}</p>
                        <p className="text-xs text-neutral-500 mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TechnologiesSection({ project }: { project: (typeof PROJECTS)[number] }) {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-main">
        <div className="max-w-3xl">
          <p className="text-neutral-400 text-sm font-mono tracking-widest uppercase mb-4">
            Key Technologies
          </p>
          <h2 className="heading-lg text-black mb-6">The tools that powered this project</h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-sm px-4 py-2.5 border border-neutral-200 text-neutral-600"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AchievementsSection({ project }: { project: (typeof PROJECTS)[number] }) {
  if (!project.achievements) return null;
  return (
    <section className="section-padding bg-black">
      <div className="container-main">
        <div className="max-w-3xl">
          <p className="text-green text-sm font-mono tracking-widest uppercase mb-4">
            Achievements
          </p>
          <h2 className="heading-lg text-white mb-8">Measurable impact</h2>
          <div className="space-y-4">
            {project.achievements.map((a) => (
              <div key={a} className="flex items-start gap-3">
                <span className="shrink-0 w-5 h-5 rounded-full border border-green flex items-center justify-center mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-green" />
                </span>
                <span className="text-neutral-300">{a}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function OtherProjectsSection({ projects }: { projects: readonly (typeof PROJECTS)[number][] }) {
  if (projects.length === 0) return null;
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <p className="text-neutral-400 text-sm font-mono tracking-widest uppercase mb-4">
          More Projects
        </p>
        <h2 className="heading-lg text-black mb-10">Other work you might like</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.slice(0, 2).map((p) => (
            <Link
              key={p.slug}
              href={`/portfolio/${p.slug}`}
              className="group block border border-neutral-200 p-8 hover:border-green transition-colors duration-300"
            >
              <p className="text-green text-xs font-mono tracking-widest uppercase mb-3">{p.category}</p>
              <h3 className="text-xl font-bold text-black group-hover:text-green transition-colors duration-200">{p.title}</h3>
              <p className="text-neutral-500 text-sm mt-2 line-clamp-2">{p.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
