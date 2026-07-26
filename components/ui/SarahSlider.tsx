"use client";

import { useState } from "react";
import { DesktopMockup } from "./DesktopMockup";

const images = [
  { src: "/images/lead-engine/sarah-1.webp", alt: "Sarah auditing leads interface" },
  { src: "/images/lead-engine/sarah-2.webp", alt: "Sarah leads needing attention" },
];

export function SarahSlider() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="relative group">
      <DesktopMockup>
        <img
          src={images[current].src}
          alt={images[current].alt}
          className="w-full object-contain transition-opacity duration-300"
        />
      </DesktopMockup>
      <div className="absolute inset-0 flex items-center justify-between px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <button
          onClick={() => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
          className="w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors text-sm pointer-events-auto"
          aria-label="Previous image"
        >
          ←
        </button>
        <button
          onClick={() => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
          className="w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors text-sm pointer-events-auto"
          aria-label="Next image"
        >
          →
        </button>
      </div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
              i === current ? "bg-white w-3" : "bg-white/50"
            }`}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
