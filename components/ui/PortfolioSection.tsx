"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/constants";
import { Button } from "./Button";
import { Highlight } from "./Highlight";
import { DesktopMockup } from "./DesktopMockup";

function stagger(index: number) {
  return {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: {
      duration: 0.6,
      delay: index * 0.1,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  };
}

export function PortfolioSection() {
  const featured = PROJECTS.filter((p) => p.featured);
  const regular = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-20"
        >
          <p className="text-neutral-400 text-sm font-mono mb-4 tracking-widest uppercase">
            Portfolio
          </p>
          <h2 className="heading-lg text-black">
            Real Projects, <Highlight>Real Results</Highlight>
          </h2>
        </motion.div>

        <div className="space-y-32 mb-32">
          {featured.map((project, i) => (
            <FeaturedProject key={project.slug} project={project} index={i} />
          ))}
        </div>

        <div className="space-y-20">
          {regular.map((project, i) => (
            <ProjectRow key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function getProjectImage(slug: string): string | null {
  const images: Record<string, string> = {
    "ai-lead-engine": "/images/lead-engine/dashboard.webp",
    "aivized-agent-factory": "/images/agent-factory/dashboard.webp",
    "growth-os": "/images/growth-os/homepage.webp",
    "fiveos": "/images/fiveos/Homepage.webp",
    "talent-ai": "/images/talent-ai/Homepage.webp",
    "videodown": "/images/videodown/Youtube, insta, tiktok video downloader.webp",
  };
  return images[slug] || null;
}

function FeaturedProject({
  project,
  index,
}: {
  project: (typeof PROJECTS)[number];
  index: number;
}) {
  const img = getProjectImage(project.slug);
  return (
    <motion.div
      {...stagger(index)}
      className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
    >
      <div className={`lg:col-span-7 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
        {img ? (
          <DesktopMockup>
            <img src={img} alt={project.title} className="w-full object-contain" />
          </DesktopMockup>
        ) : (
          <div className="aspect-[16/10] bg-neutral-100 rounded-sm overflow-hidden relative flex items-center justify-center text-neutral-300 text-sm">
            Project Preview
          </div>
        )}
      </div>
      <div className={`lg:col-span-5 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
        <p className="text-green text-xs font-mono tracking-widest uppercase mb-3">
          {project.category}
        </p>
        <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
          {project.title}
        </h3>
        <p className="text-neutral-500 leading-relaxed mb-6">
          {project.description}
        </p>
        {project.achievements && (
          <ul className="space-y-2 mb-6">
            {project.achievements.map((a) => (
              <li key={a} className="text-sm text-neutral-600 flex items-start gap-2">
                <span className="text-green mt-1.5 w-1 h-1 rounded-full bg-green shrink-0" />
                {a}
              </li>
            ))}
          </ul>
        )}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1.5 border border-neutral-200 text-neutral-600"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href={`/portfolio/${project.slug}`} size="sm">
            View Project →
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectRow({
  project,
  index,
}: {
  project: (typeof PROJECTS)[number];
  index: number;
}) {
  const img = getProjectImage(project.slug);
  return (
    <motion.div
      {...stagger(index + 2)}
      className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center py-8 border-t border-neutral-100"
    >
      <div className={`md:col-span-5 ${index % 2 === 1 ? "md:order-2" : ""}`}>
        {img ? (
          <DesktopMockup>
            <img src={img} alt={project.title} className="w-full object-contain" />
          </DesktopMockup>
        ) : (
          <div className="aspect-[16/10] bg-neutral-50 rounded-sm overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center text-neutral-200 text-xs">
              Preview
            </div>
          </div>
        )}
      </div>
      <div className={`md:col-span-7 ${index % 2 === 1 ? "md:order-1" : ""}`}>
        <p className="text-green text-xs font-mono tracking-widest uppercase mb-2">
          {project.category}
        </p>
        <h3 className="text-xl font-bold text-black mb-2">{project.title}</h3>
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
        <div className="flex flex-wrap gap-3">
          <Button href={`/portfolio/${project.slug}`} size="sm">
            View Project →
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
