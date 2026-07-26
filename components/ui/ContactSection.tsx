"use client";

import { motion } from "framer-motion";
import { Button } from "./Button";
import { Highlight } from "./Highlight";

export function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-black">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-xl mx-auto mb-16"
        >
          <p className="text-neutral-500 text-sm font-mono mb-4 tracking-widest uppercase">
            Contact
          </p>
          <h2 className="heading-lg text-white mb-6">
            Let&apos;s build something{" "}
            <Highlight>intelligent</Highlight>
          </h2>
          <p className="text-neutral-400 leading-relaxed">
            Have a project in mind? Let&apos;s discuss how we can build
            something extraordinary together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-md mx-auto"
        >
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Name"
                className="w-full px-5 py-4 bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-green transition-colors duration-200"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                className="w-full px-5 py-4 bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-green transition-colors duration-200"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Message"
                className="w-full px-5 py-4 bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-green transition-colors duration-200 resize-none"
              />
            </div>
            <Button type="submit" size="lg" className="w-full">
              Send Message
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
