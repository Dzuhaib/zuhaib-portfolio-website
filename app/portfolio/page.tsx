import type { Metadata } from "next";
import Link from "next/link";
import { PortfolioHero } from "@/components/ui/PortfolioHero";
import { DesktopMockup } from "@/components/ui/DesktopMockup";
import { PROJECTS } from "@/lib/constants";

const projectImages: Record<string, string> = {
  "ai-lead-engine": "/images/lead-engine/dashboard.webp",
  "aivized-agent-factory": "/images/agent-factory/dashboard.webp",
  "growth-os": "/images/growth-os/homepage.webp",
  "fiveos": "/images/fiveos/Homepage.webp",
  "talent-ai": "/images/talent-ai/Homepage.webp",
  "videodown": "/images/videodown/Youtube, insta, tiktok video downloader.webp",
};

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore Zuhaib Ahmed's portfolio of web development and AI projects.",
  openGraph: {
    title: "Portfolio | Zuhaib Ahmed",
    description:
      "Explore Zuhaib Ahmed's portfolio of web development and AI projects.",
  },
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />
      <ProjectsSection />
      <FAQSection />
    </>
  );
}

function ProjectsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof PROJECTS)[number] }) {
  const img = projectImages[project.slug] || null;
  return (
    <Link href={`/portfolio/${project.slug}`} className="group block border border-neutral-200 p-8 hover:border-green transition-colors duration-300">
      <div className="mb-6">
        {img ? (
          <DesktopMockup>
            <img src={img} alt={project.title} className="w-full object-contain" />
          </DesktopMockup>
        ) : (
          <div className="aspect-[16/10] bg-neutral-100 overflow-hidden flex items-center justify-center text-neutral-300 text-sm">
            Preview
          </div>
        )}
      </div>
      <p className="text-green text-xs font-mono tracking-widest uppercase mb-2">
        {project.category}
      </p>
      <h3 className="text-xl font-bold text-black mb-2 group-hover:text-green transition-colors">{project.title}</h3>
      <p className="text-neutral-500 text-sm leading-relaxed mb-4">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="text-[11px] px-2.5 py-1 border border-neutral-200 text-neutral-500"
          >
            {tech}
          </span>
        ))}
      </div>
      <span className="text-xs font-medium text-green group-hover:underline">
        View Project →
      </span>
    </Link>
  );
}

function FAQSection() {
  const faqs = [
    {
      q: "Has Zuhaib Ahmed worked with clients in Pakistan?",
      a: "Zuhaib Ahmed is based in Karachi, Pakistan, and takes on local projects alongside his international freelance work in AI systems, automation, and website development."
    },
    {
      q: "What kind of local projects has Zuhaib Ahmed completed?",
      a: "Zuhaib Ahmed has built websites for Karachi-based startups, integrated AI chatbots for local e-commerce stores, and developed automation systems for Pakistani small businesses looking to streamline operations."
    },
    {
      q: "Does Zuhaib Ahmed offer services in Karachi?",
      a: "Yes, Zuhaib Ahmed is based in Karachi and is available for local businesses looking for website development, AI automation, or digital marketing, in addition to his remote international clients."
    },
    {
      q: "Can Pakistani businesses hire Zuhaib Ahmed directly?",
      a: "Yes, Pakistani businesses can work with Zuhaib Ahmed directly for website development, AI systems, automations, AI SEO, and Meta ads management, without going through a freelance platform."
    },
  ];

  return (
    <section className="section-padding bg-neutral-50">
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
    </section>
  );
}