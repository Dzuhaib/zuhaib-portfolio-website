"use client";

import { SparklesCore } from "./sparkles";
import { Highlight } from "./Highlight";
import { SITE } from "@/lib/constants";
import WorldMap from "./world-map";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black w-full">
      <div className="w-full bg-black flex flex-col items-center overflow-hidden relative">

        <div className="w-full max-w-6xl mx-auto px-6 py-20">
          <div className="mb-12 text-center">
            <p className="text-neutral-500 text-sm font-mono mb-4 tracking-widest uppercase">
              Global Reach
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Working with clients <Highlight>worldwide</Highlight>
            </h2>
            <p className="text-neutral-400 leading-relaxed max-w-md mx-auto">
              Based in Pakistan, delivering for businesses across the globe.
            </p>
          </div>
          <WorldMap
            lineColor="#22C55E"
            dots={[
              { start: { lat: 30.3753, lng: 69.3451, label: "Pakistan" }, end: { lat: 40.7128, lng: -74.006, label: "New York" } },
              { start: { lat: 30.3753, lng: 69.3451, label: "Pakistan" }, end: { lat: 51.5074, lng: -0.1278, label: "London" } },
              { start: { lat: 30.3753, lng: 69.3451, label: "Pakistan" }, end: { lat: 48.8566, lng: 2.3522, label: "Paris" } },
              { start: { lat: 30.3753, lng: 69.3451, label: "Pakistan" }, end: { lat: 35.6762, lng: 139.6503, label: "Tokyo" } },
              { start: { lat: 30.3753, lng: 69.3451, label: "Pakistan" }, end: { lat: -33.8688, lng: 151.2093, label: "Sydney" } },
              { start: { lat: 30.3753, lng: 69.3451, label: "Pakistan" }, end: { lat: 25.2048, lng: 55.2708, label: "Dubai" } },
            ]}
          />
        </div>

        <div className="pt-10 pb-10 flex flex-col items-center border-t border-neutral-800 w-full">
          <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
            Zuhaib
          </h1>
          <div className="w-[40rem] h-40 relative">
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-green-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-green-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-green-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-green-500 to-transparent h-px w-1/4" />

            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />

            <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]" />
          </div>
        </div>

        <div className="w-full border-t border-neutral-800 py-6 px-6 flex flex-col md:flex-row items-center justify-between gap-4 z-20">
          <div className="flex items-center gap-6">
            <a href={SITE.social.github} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-green transition-colors duration-200 text-sm">
              GitHub
            </a>
            <a href={SITE.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-green transition-colors duration-200 text-sm">
              LinkedIn
            </a>
            <a href={SITE.social.twitter} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-green transition-colors duration-200 text-sm">
              X
            </a>
            <a href={`mailto:${SITE.email}`} className="text-neutral-400 hover:text-green transition-colors duration-200 text-sm">
              Email
            </a>
          </div>
          <p className="text-neutral-500 text-xs">
            &copy; {year} {SITE.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
