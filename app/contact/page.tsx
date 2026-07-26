import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Zuhaib Ahmed",
  description:
    "Get in touch with Zuhaib Ahmed — Full Stack Developer & AI Engineer. Free consultation available.",
  openGraph: {
    title: "Contact | Zuhaib Ahmed",
    description:
      "Get in touch with Zuhaib Ahmed — Full Stack Developer & AI Engineer.",
  },
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <HeroSection />
      <FormSection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 bg-black">
      <div className="container-main">
        <div className="max-w-3xl">
          <p className="text-green text-sm font-mono tracking-widest uppercase mb-6">
            Contact
          </p>
          <h1 className="heading-xl text-white mb-6">
            Let&apos;s talk about your next project
          </h1>
          <p className="text-lg text-neutral-400 leading-relaxed max-w-xl">
            Whether you need a web application, AI system, or full digital
            strategy — I&apos;m here to help. Fill out the form and I&apos;ll
            get back to you within 24 hours.
          </p>
        </div>
      </div>
    </section>
  );
}

function FormSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold text-black mb-2">Send a message</h2>
            <p className="text-neutral-500 mb-8">
              Tell me about your project, budget, and timeline.
            </p>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Name"
                  className="w-full px-5 py-4 border border-neutral-200 text-black placeholder-neutral-400 text-sm focus:outline-none focus:border-green transition-colors duration-200"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="w-full px-5 py-4 border border-neutral-200 text-black placeholder-neutral-400 text-sm focus:outline-none focus:border-green transition-colors duration-200"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Message"
                  className="w-full px-5 py-4 border border-neutral-200 text-black placeholder-neutral-400 text-sm focus:outline-none focus:border-green transition-colors duration-200 resize-none"
                />
              </div>
              <Button type="submit" size="lg">
                Send Message
              </Button>
            </form>
          </div>
          <div className="lg:col-span-2">
            <div className="p-8 border border-neutral-200">
              <div className="w-8 h-px bg-green mb-4" />
              <h3 className="text-xl font-bold text-black mb-6">
                Contact Info
              </h3>
              <div className="space-y-5 text-neutral-500 text-sm">
                <div>
                  <span className="block text-neutral-400 text-xs tracking-widest uppercase mb-1.5 font-semibold">
                    Email
                  </span>
                  <a href={`mailto:${SITE.email}`} className="text-green hover:underline">
                    {SITE.email}
                  </a>
                </div>
                <div>
                  <span className="block text-neutral-400 text-xs tracking-widest uppercase mb-1.5 font-semibold">
                    Location
                  </span>
                  <span>{SITE.location}</span>
                </div>
                <div>
                  <span className="block text-neutral-400 text-xs tracking-widest uppercase mb-1.5 font-semibold">
                    Availability
                  </span>
                  <span className="inline-flex items-center gap-2.5 text-green">
                    <span className="w-2 h-2 rounded-full bg-green" />
                    Available for projects
                  </span>
                </div>
                <div className="pt-5 mt-5 border-t border-neutral-200">
                  <span className="block text-neutral-400 text-xs tracking-widest uppercase mb-3 font-semibold">
                    Connect
                  </span>
                  <div className="flex gap-4">
                    <a href={SITE.social.github} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-green transition-colors text-sm">
                      GitHub
                    </a>
                    <a href={SITE.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-green transition-colors text-sm">
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
