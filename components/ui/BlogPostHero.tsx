"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

const Grainient = dynamic(() => import("./Grainient"), { ssr: false });

export function BlogPostHero({
  title,
  category,
  date,
  readTime,
}: {
  title: string;
  category: string;
  date: string;
  readTime: string;
}) {
  return (
    <section className="relative w-full min-h-[60vh] flex items-center overflow-hidden bg-black">
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
              href="/blog"
              className="text-xs tracking-wider uppercase text-white/50 hover:text-white transition-colors duration-200 inline-flex items-center gap-2"
            >
              &larr; Back to Blog
            </Link>
          </div>
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-white/70 text-xs font-mono tracking-widest uppercase">
                {category}
              </span>
              <span className="text-white/40 text-sm">{date}</span>
              <span className="text-white/40 text-sm">{readTime}</span>
            </div>
            <h1 className="heading-xl text-white mb-6">{title}</h1>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-sm font-medium text-white">
                ZA
              </div>
              <div>
                <span className="block text-sm font-medium text-white">Zuhaib Ahmed</span>
                <span className="text-xs text-white/60">Full Stack Developer &amp; AI Engineer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
