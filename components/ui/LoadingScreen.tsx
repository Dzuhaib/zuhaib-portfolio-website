"use client";

import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [done, setDone] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setIsMobile(window.matchMedia("(pointer: coarse)").matches);
    const timer = setTimeout(() => setDone(true), 150);
    return () => clearTimeout(timer);
  }, []);

  if (isMobile) return null;

  return (
    <div
      className={`fixed inset-0 z-[9998] bg-black flex items-center justify-center pointer-events-none transition-opacity duration-200 ${
        done ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="text-left">
        <p className="text-green font-mono text-xs tracking-widest uppercase">
          Loading...
        </p>
      </div>
    </div>
  );
}