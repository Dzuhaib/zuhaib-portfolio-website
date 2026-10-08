"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md border-b border-neutral-200 shadow-sm"
            : "bg-black/70 backdrop-blur-md md:bg-transparent md:backdrop-blur-none md:border-b md:border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 h-20">
          <Link href="/" className="group" onClick={close} aria-label="Zuhaib Ahmed — home">
            <span
              className={`text-2xl md:text-3xl font-black tracking-tight transition-colors duration-300 ${
                scrolled ? "text-black group-hover:text-green" : "text-white group-hover:text-white/70"
              }`}
            >
              Z
              <span className={scrolled ? "text-green" : "text-white/80"}>.</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                  scrolled ? "text-neutral-500 hover:text-black" : "text-white/70 hover:text-white"
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
                scrolled ? "text-green hover:text-emerald-600" : "text-white/80 hover:text-white"
              }`}
            >
              Let&apos;s Talk ↗
            </a>
          </nav>

          <MobileMenuButton open={open} scrolled={scrolled} onToggle={() => setOpen((v) => !v)} />
        </div>
      </header>

      {open && <MobileMenuPanel onClose={close} />}
    </>
  );
}

function MobileMenuButton({
  open,
  scrolled,
  onToggle,
}: {
  open: boolean;
  scrolled: boolean;
  onToggle: () => void;
}) {
  const bar = scrolled ? "bg-neutral-800" : "bg-white";

  return (
    <button
      type="button"
      onClick={onToggle}
      className="md:hidden flex flex-col justify-center items-end gap-1.5 p-3 -mr-3"
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      aria-controls="mobile-menu"
    >
      <span
        className={`block h-0.5 w-6 rounded-full transition-all duration-300 ${bar} ${
          open ? "translate-y-[3.5px] rotate-45" : ""
        }`}
      />
      <span
        className={`block h-0.5 w-6 rounded-full transition-opacity duration-300 ${bar} ${
          open ? "opacity-0" : ""
        }`}
      />
      <span
        className={`block h-0.5 w-6 rounded-full transition-all duration-300 ${bar} ${
          open ? "-translate-y-[3.5px] -rotate-45" : ""
        }`}
      />
    </button>
  );
}

function MobileMenuPanel({ onClose }: { onClose: () => void }) {
  const pathname = usePathname();

  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  return (
    <div
      id="mobile-menu"
      className="fixed inset-0 z-[60] md:hidden overscroll-contain"
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
    >
      <button
        type="button"
        tabIndex={-1}
        aria-hidden="true"
        onClick={onClose}
        className="absolute inset-0 h-full w-full cursor-default bg-black/40 backdrop-blur-sm"
      />
      <div className="absolute inset-x-3 top-[4.75rem] rounded-2xl border border-neutral-200 bg-white shadow-2xl p-3 flex flex-col gap-1">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="rounded-xl px-4 py-3 text-base font-medium text-neutral-700 hover:bg-neutral-100 hover:text-black transition-colors"
          >
            {item.label}
          </Link>
        ))}
        <a
          href="https://wa.me/923390349804"
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className="mt-1 rounded-xl border border-green/30 px-4 py-3 text-center text-base font-semibold text-green hover:bg-green/5 transition-colors"
        >
          Let&apos;s Talk ↗
        </a>
      </div>
    </div>
  );
}