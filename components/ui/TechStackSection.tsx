"use client";

import { motion } from "framer-motion";
import { TECH_LOGOS } from "@/lib/constants";
import { iconComponents } from "./tech-icons";

export function TechStackSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16 text-center"
        >
          <p className="text-neutral-400 text-sm font-mono mb-4 tracking-widest uppercase">
            Tech Stack
          </p>
          <h2 className="heading-lg text-black">
            Tools I use daily
          </h2>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {TECH_LOGOS.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: i * 0.05,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="group flex flex-col items-center justify-center gap-3 p-6 border border-neutral-200 hover:border-green transition-colors duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center">
                {iconComponents[tech.icon] || (
                  <div className="w-8 h-8 bg-neutral-200 rounded-sm" />
                )}
              </div>
              <span className="text-xs text-neutral-500 font-medium">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
