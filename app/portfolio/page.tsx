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
