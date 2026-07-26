"use client";

import { motion } from "framer-motion";
import { Highlight } from "./Highlight";
import ProfileCard from "./ProfileCard";

const FOCUS_AREAS = [
  "Full Stack Development",
  "AI Engineering",
  "Automation",
  "Performance",
  "UI/UX",
  "Problem Solving",
];

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-neutral-50">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20"
        >
          <div className="lg:col-span-5 flex items-center justify-center">
            <ProfileCard
              name="Zuhaib Ahmed"
              title="Full Stack Developer & AI Engineer"
              handle="zuhaibahmed"
              status="Available"
              contactText="Let's Talk"
              onContactClick={() => window.open('https://wa.me/923390349804', '_blank')}
              avatarUrl="/images/about.png"
              iconUrl="/images/icon-pattern.svg"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              behindGlowColor="rgba(16, 185, 129, 0.35)"
              behindGlowEnabled
              innerGradient="linear-gradient(145deg, #0a0a1a 0%, #0d3b2e 100%)"
            />
          </div>
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="text-neutral-400 text-sm font-mono mb-4 tracking-widest uppercase">
              About Me
            </p>
            <h2 className="heading-lg text-black mb-6">
              I turn complex problems into{" "}
              <Highlight>intelligent</Highlight> solutions
            </h2>
            <div className="space-y-4 text-neutral-500 leading-relaxed max-w-lg">
              <p className="text-lg text-neutral-600">
                I&apos;m a Full Stack Developer & AI Engineer based in Pakistan,
                helping businesses across the globe build scalable web
                applications and AI-powered systems that drive real results.
              </p>
              <p>
                With deep expertise in Next.js, React, Python, and AI
                technologies like LangChain and RAG, I bring a rare combination
                of technical depth and strategic thinking to every project. I
                don&apos;t just write code — I solve problems that move the
                needle.
              </p>
              <p>
                When I&apos;m not building, I&apos;m exploring new AI
                frameworks, optimizing performance, and pushing the boundaries
                of what the web can do.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-8">
              {FOCUS_AREAS.map((area) => (
                <span
                  key={area}
                  className="text-xs px-3 py-1.5 border border-neutral-200 text-neutral-600"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
