"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-20">
        <Link href="/" className="group">
          <span className={`text-2xl md:text-3xl font-black tracking-tight transition-colors duration-300 ${
            scrolled ? "text-black group-hover:text-green" : "text-white group-hover:text-white/70"
          }`}>
            Z<span className={scrolled ? "text-green" : "text-white/80"}>.</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                scrolled
                  ? "text-neutral-500 hover:text-black"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://wa.me/923390349804"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-sm font-semibold transition-colors duration-200 ${
              scrolled
                ? "text-green hover:text-emerald-600"
                : "text-white/80 hover:text-white"
            }`}
          >
            Let&apos;s Talk ↗
          </a>
        </nav>

        <MobileMenu scrolled={scrolled} />
      </div>
    </header>
  );
}

function MobileMenu({ scrolled }: { scrolled: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden flex flex-col gap-1 p-2"
        aria-label="Toggle menu"
      >
        <span className={`block h-px w-5 transition-all duration-300 ${open ? "rotate-45 translate-y-[2.5px]" : ""} ${scrolled ? "bg-neutral-600" : "bg-white/70"}`} />
        <span className={`block h-px w-5 transition-opacity duration-300 ${open ? "opacity-0" : ""} ${scrolled ? "bg-neutral-600" : "bg-white/70"}`} />
        <span className={`block h-px w-5 transition-all duration-300 ${open ? "-rotate-45 -translate-y-[2.5px]" : ""} ${scrolled ? "bg-neutral-600" : "bg-white/70"}`} />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 md:hidden" onClick={() => setOpen(false)}>
          <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" />
          <div className="absolute top-20 left-4 right-4 bg-white rounded-2xl border border-neutral-200 shadow-xl p-4 flex flex-col gap-1" onClick={(e) => e.stopPropagation()}>
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-sm text-neutral-600 hover:text-black transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://wa.me/923390349804"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 px-4 py-3 text-sm font-semibold text-center text-green border border-green/30 rounded-xl hover:bg-green/5 transition-colors"
            >
              Let&apos;s Talk ↗
            </a>
          </div>
        </div>
      )}
    </>
  );
}
