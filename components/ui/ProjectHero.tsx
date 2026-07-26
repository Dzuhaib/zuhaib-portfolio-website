"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { Button } from "./Button";
import { DesktopMockup } from "./DesktopMockup";

const Grainient = dynamic(() => import("./Grainient"), { ssr: false });

const projectImages: Record<string, string> = {
  "ai-lead-engine": "/images/lead-engine/dashboard.png",
  "aivized-agent-factory": "/images/agent-factory/dashboard.png",
  "growth-os": "/images/growth-os/homepage.png",
  "fiveos": "/images/fiveos/Homepage.png",
  "talent-ai": "/images/talent-ai/Homepage.png",
  "videodown": "/images/videodown/Youtube, insta, tiktok video downloader.png",
};

export function ProjectHero({ project }: { project: { slug: string; category: string; title: string; description: string; liveUrl: string | null; githubUrl: string | null } }) {
  const img = projectImages[project.slug] || null;
  return (
    <section className="relative w-full min-h-[80vh] flex items-center overflow-hidden bg-black">
      <div className="absolute inset-0 w-full h-full">
        <Grainient
          color1="#ffffff"
          color2="#10B981"
          color3="#06B6D4"
          timeSpeed={0.95}
          colorBalance={0}
          warpStrength={4}
          warpFrequency={5}
          warpSpeed={3.3}
          warpAmplitude={46}
          blendAngle={0}
          blendSoftness={0.05}
          rotationAmount={500}
          noiseScale={2}
          grainAmount={0.1}
          grainScale={2}
          grainAnimated={false}
          contrast={1.5}
          gamma={1}
          saturation={1}
          centerX={0}
          centerY={0}
          zoom={0.9}
        />
      </div>

      <div className="absolute inset-0 bg-black/30 pointer-events-none" />

      <div className="relative z-20 w-full px-4 py-32 md:py-40">
        <div className="container-main">
          <div className="mb-8">
            <Link
              href="/portfolio"
              className="text-xs tracking-wider uppercase text-white/50 hover:text-white transition-colors duration-200 inline-flex items-center gap-2"
            >
              ← Back to Portfolio
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-7">
              <p className="text-white/70 text-sm font-mono tracking-widest uppercase mb-4">
                {project.category}
              </p>
              <h1 className="heading-xl text-white mb-6">{project.title}</h1>
              <p className="text-lg text-white/60 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-3 mt-8">
                {project.liveUrl && (
                  <Button href={project.liveUrl} size="md" className="bg-white text-black hover:bg-white/90">
                    Visit Live Site
                  </Button>
                )}
                {project.githubUrl && (
                  <Button href={project.githubUrl} variant="outline" size="md" className="text-white border-white hover:bg-white hover:text-black">
                    View Source
                  </Button>
                )}
              </div>
            </div>
            <div className="lg:col-span-5">
              {img ? (
                <DesktopMockup>
                  <img
                    src={img}
                    alt={project.title}
                    className="w-full h-auto max-h-[420px] object-contain"
                  />
                </DesktopMockup>
              ) : (
                <div className="aspect-[16/10] bg-black/20 rounded-sm overflow-hidden flex items-center justify-center text-white/30 text-sm">
                  Preview
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
