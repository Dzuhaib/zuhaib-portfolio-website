"use client";

import { useState } from "react";

interface FaqItem {
  q: string;
  a: string;
}

interface FaqProps {
  items: readonly FaqItem[];
  className?: string;
}

export function Faq({ items, className = "" }: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={`divide-y divide-stone/60 ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="py-6 first:pt-0 last:pb-0">
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex items-center justify-between w-full text-left gap-6 group"
            >
              <span className="font-serif text-lg md:text-xl leading-snug text-charcoal group-hover:text-forest transition-colors duration-200">
                {item.q}
              </span>
              <span
                className={`shrink-0 w-8 h-8 flex items-center justify-center rounded-full border transition-all duration-300 text-sm ${
                  isOpen
                    ? "border-forest bg-forest text-warm-white rotate-45"
                    : "border-stone-dark/30 text-charcoal/30 group-hover:border-forest/30 group-hover:text-forest"
                }`}
              >
                +
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-96 mt-5" : "max-h-0 mt-0"
              }`}
            >
              <p className="text-charcoal/50 leading-relaxed text-sm">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
