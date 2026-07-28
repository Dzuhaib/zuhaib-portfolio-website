"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const Grainient = dynamic(() => import("@/components/ui/Grainient"), { ssr: false });

export default function ContactHeroSection() {
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
          <div className="max-w-3xl">
            <p className="text-white/70 text-sm font-mono tracking-widest uppercase mb-4">
              Contact
            </p>
            <h1 className="heading-xl text-white mb-6">
              Let&apos;s talk about your next project
            </h1>
            <p className="text-lg text-white/60 leading-relaxed max-w-xl mb-8">
              Whether you need an AI system, a custom website, or a marketing
              campaign that delivers — reach out and I&apos;ll respond within 24 hours.
            </p>
            <Button
              href="https://wa.me/923390349804"
              size="lg"
            >
              Start a Conversation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}