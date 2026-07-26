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
              title="AI Automation & AI Systems Engineer"
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
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="text-neutral-400 text-sm font-mono mb-4 tracking-widest uppercase">
              About Me
            </p>
              <h2 className="heading-lg text-black mb-6">
                I build autonomous AI systems and{" "}
                <Highlight>scalable</Highlight> AI SaaS products
              </h2>
              <div className="space-y-4 text-neutral-500 leading-relaxed max-w-lg">
                <p className="text-lg text-neutral-600">
                  I&apos;m Zuhaib Ahmed Based in Sindh — an AI Systems & Automation Engineer. I specialize in building custom AI SaaS platforms, multi-agent autonomous pipelines, and high-performance full-stack web applications for global clients.
                </p>
                <p>
                  My stack centers around Next.js, FastAPI/Python, TypeScript, PostgreSQL, and multi-model AI integrations (OpenAI o3-mini/GPT-4o, Google Gemini, BullMQ agent orchestration). I build reliable software architecture that automates complex business operations and generates clear ROI.
                </p>
                <p>
                  From startups to established businesses, my clients choose me because I deliver production-ready products — not prototypes. When I&apos;m not building, I&apos;m exploring new AI frameworks, optimizing workflows, and pushing what the web can do.
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
