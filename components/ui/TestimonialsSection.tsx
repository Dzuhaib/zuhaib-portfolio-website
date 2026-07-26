"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";
import { Highlight } from "./Highlight";

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? TESTIMONIALS.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1));

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-neutral-400 text-sm font-mono mb-4 tracking-widest uppercase">
            Testimonials
          </p>
          <h2 className="heading-lg text-black mb-16">
            What <Highlight>Clients</Highlight> Say
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-center"
            >
              <p className="text-lg md:text-xl text-neutral-600 leading-relaxed mb-8 italic">
                &ldquo;{TESTIMONIALS[current].content}&rdquo;
              </p>
              <p className="font-bold text-black">{TESTIMONIALS[current].name}</p>
              <p className="text-sm text-neutral-400">{TESTIMONIALS[current].role}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 border border-neutral-200 flex items-center justify-center text-neutral-400 hover:border-green hover:text-green transition-colors duration-200"
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    i === current ? "bg-green" : "bg-neutral-200"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 border border-neutral-200 flex items-center justify-center text-neutral-400 hover:border-green hover:text-green transition-colors duration-200"
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
