"use client";

import { motion } from "motion/react";
import dynamic from "next/dynamic";
import { Button } from "./Button";
import { Highlight } from "./Highlight";

const Grainient = dynamic(() => import("./Grainient"), { ssr: false });

export function HeroSection() {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black">
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

      <div className="relative z-20 max-w-7xl mx-auto w-full px-4 py-32 md:py-40 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <p className="text-white/70 text-sm font-mono mb-4 tracking-widest uppercase">
            Full Stack Developer & AI Engineer
          </p>
          <h1 className="text-3xl md:text-6xl font-bold text-white leading-tight">
            Building <span className="text-white/90">Intelligent</span>{" "}
            Digital <span className="text-white/90">Products</span>
          </h1>
          <p className="text-base md:text-lg text-white/60 max-w-md mt-4 mx-auto">
            Let&apos;s build something intelligent
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Button href="/portfolio" size="lg" className="bg-white text-black hover:bg-white/90">
              View Portfolio
            </Button>
            <Button href="https://wa.me/923390349804" size="lg" className="bg-green text-black hover:bg-emerald-400">
              Chat on WhatsApp
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
