"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import ProfileCard from "@/components/ui/ProfileCard";
import { Button } from "@/components/ui/Button";

const Grainient = dynamic(() => import("@/components/ui/Grainient"), { ssr: false });

export default function AboutHeroSection() {
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
              href="/"
              className="text-xs tracking-wider uppercase text-white/50 hover:text-white transition-colors duration-200 inline-flex items-center gap-2"
            >
              &larr; Back to Home
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-7">
              <p className="text-white/70 text-sm font-mono tracking-widest uppercase mb-4">
                About Me
              </p>
              <h1 className="heading-xl text-white mb-6">
                About Zuhaib Ahmed - Full stack developer <span className="text-green">|</span> AI Engineer
              </h1>
              <p className="text-lg text-white/60 leading-relaxed max-w-xl mb-8">
                About Zuhaib Ahmed - Full stack developer, AI Engineer Based in Sindh Pakistan.
                I help businesses in the UK, US, and Pakistan
                build AI systems, automation pipelines, high-performance websites, and
                marketing campaigns that generate measurable results.
              </p>
              <Button
                href="https://wa.me/923390349804"
                size="lg"
              >
                Let&apos;s Build Something
              </Button>
            </div>
            <div className="lg:col-span-5 flex items-center justify-center">
              <ProfileCard
                name="Zuhaib Ahmed"
                title="Full stack developer | AI Engineer"
                handle="zuhaibahmed"
                status="Available"
                contactText="Let's Talk"
                onContactClick={() => window.open('https://wa.me/923390349804', '_blank')}
                avatarUrl="/images/about.webp"
                iconUrl="/images/icon-pattern.svg"
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                behindGlowColor="rgba(16, 185, 129, 0.35)"
                behindGlowEnabled
                innerGradient="linear-gradient(145deg, #0a0a1a 0%, #0d3b2e 100%)"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}