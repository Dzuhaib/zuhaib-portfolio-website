"use client";

import { motion } from "framer-motion";
import { EXPERIENCES } from "@/lib/constants";
import { Highlight } from "./Highlight";

const companyLogos: Record<string, string> = {
  "Freelance": "F",
  "Tech Agency": "TA",
  "Digital Solutions Inc": "DS",
};

export function ExperienceSection() {
  return (
    <section id="experience" className="section-padding bg-neutral-50">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16 text-center"
        >
          <p className="text-neutral-400 text-sm font-mono mb-4 tracking-widest uppercase">
            Experience
          </p>
          <h2 className="heading-lg text-black">
            Where I&apos;ve <Highlight>Worked</Highlight>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="group relative bg-white rounded-2xl border border-neutral-200 p-8 hover:border-green/30 hover:shadow-[0_8px_40px_-12px_rgba(34,197,94,0.12)] transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-green/10 flex items-center justify-center text-sm font-bold text-green group-hover:scale-105 transition-transform duration-300">
                  {companyLogos[exp.company] || exp.company.charAt(0)}
                </div>
                <span className="text-xs font-mono text-neutral-400 bg-neutral-100 px-3 py-1 rounded-full">
                  {exp.duration}
                </span>
              </div>

              <h3 className="text-lg font-bold text-black mb-1">{exp.company}</h3>
              <p className="text-sm text-neutral-500 mb-5 pb-5 border-b border-neutral-100">{exp.position}</p>

              <ul className="space-y-3">
                {exp.achievements.map((a) => (
                  <li key={a} className="text-sm text-neutral-500 flex items-start gap-3 leading-relaxed">
                    <svg className="w-4 h-4 text-green shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {a}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
