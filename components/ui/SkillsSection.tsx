"use client";

import { motion } from "framer-motion";
import { SKILL_CATEGORIES } from "@/lib/constants";

export function SkillsSection() {
  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16"
        >
          <p className="text-neutral-400 text-sm font-mono mb-4 tracking-widest uppercase">
            Skills
          </p>
          <h2 className="heading-lg text-black">
            Technologies & Expertise
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="border border-neutral-200 p-8"
            >
              <p className="text-green text-xs font-mono tracking-widest uppercase mb-5">
                {category.title}
              </p>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-4 py-2 border border-neutral-200 text-neutral-700 hover:border-green hover:text-green transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
