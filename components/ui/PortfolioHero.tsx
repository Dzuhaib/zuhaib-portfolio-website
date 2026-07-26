"use client";

import dynamic from "next/dynamic";

const Grainient = dynamic(() => import("./Grainient"), { ssr: false });

export function PortfolioHero() {
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
          <div className="max-w-3xl">
            <p className="text-white/70 text-sm font-mono tracking-widest uppercase mb-6">
              Portfolio
            </p>
            <h1 className="heading-xl text-white mb-6">
              Selected work that speaks for itself
            </h1>
            <p className="text-lg text-white/60 leading-relaxed max-w-xl">
              A curated collection of projects I&apos;ve built with care — from
              AI-powered platforms to full-stack web applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
