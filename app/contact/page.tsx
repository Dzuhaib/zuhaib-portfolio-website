import type { Metadata } from "next";
import ContactHeroSection from "./HeroSection";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Zuhaib Ahmed - Full Stack Developer & AI Engineer",
  description:
    "Get in touch with Zuhaib Ahmed - Full Stack Developer & AI Engineer Based in Sindh, Pakistan. Free consultation available.",
  openGraph: {
    title: "Contact | Zuhaib Ahmed",
    description:
      "Get in touch with Zuhaib Ahmed - Full Stack Developer & AI Engineer.",
  },
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <ContactHeroSection />
      <ContactInfoSection />
    </>
  );
}

function ContactInfoSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-neutral-400 text-sm font-mono tracking-widest uppercase mb-4">
              Get in Touch
            </p>
            <h2 className="heading-lg text-black mb-4">
              Let&apos;s talk about your project
            </h2>
            <p className="text-neutral-500 text-lg leading-relaxed max-w-xl mx-auto">
              Whether you need an AI system, a website, or a marketing campaign,
              I&apos;m here to help. Reach out and I&apos;ll get back to you within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="border border-neutral-200 p-8 text-center">
              <div className="w-10 h-10 rounded-full bg-green/10 flex items-center justify-center mx-auto mb-4">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-green">
                  <path d="M3 8l9 6 9-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
                </svg>
              </div>
              <h3 className="text-sm font-bold text-black mb-2">Email</h3>
              <a href={`mailto:${SITE.email}`} className="text-green text-sm hover:underline">
                {SITE.email}
              </a>
            </div>
            <div className="border border-neutral-200 p-8 text-center">
              <div className="w-10 h-10 rounded-full bg-green/10 flex items-center justify-center mx-auto mb-4">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-green">
                  <path d="M12 2C8.5 2 5 5 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-4-3.5-7-7-7z" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
                </svg>
              </div>
              <h3 className="text-sm font-bold text-black mb-2">Location</h3>
              <p className="text-neutral-500 text-sm">{SITE.location}</p>
            </div>
            <div className="border border-neutral-200 p-8 text-center">
              <div className="w-10 h-10 rounded-full bg-green/10 flex items-center justify-center mx-auto mb-4">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-green">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-sm font-bold text-black mb-2">Availability</h3>
              <span className="inline-flex items-center gap-2 text-green text-sm">
                <span className="w-2 h-2 rounded-full bg-green" />
                Available for projects
              </span>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://wa.me/923390349804"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green text-white font-medium px-10 py-5 text-sm tracking-wider uppercase hover:bg-green/90 transition-colors duration-200"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Start a Conversation on WhatsApp
            </a>
            <div className="flex items-center justify-center gap-6 mt-8 text-sm">
              <a href={SITE.social.github} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-green transition-colors">
                GitHub
              </a>
              <a href={SITE.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-green transition-colors">
                LinkedIn
              </a>
              <a href={`mailto:${SITE.email}`} className="text-neutral-500 hover:text-green transition-colors">
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}