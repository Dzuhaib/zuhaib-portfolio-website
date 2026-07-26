"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        const next = p + Math.random() * 20;
        return next >= 100 ? 100 : next;
      });
    }, 200);

    const timer = setTimeout(() => {
      setProgress(100);
      setTimeout(() => setDone(true), 500);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  const bars = Math.floor(progress / 10);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[9998] bg-black flex items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-left">
            <p className="text-green font-mono text-sm mb-4">
              Initializing Portfolio...
            </p>
            <div className="flex gap-1 mb-4">
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className={`w-4 h-4 transition-colors duration-200 ${
                    i < bars ? "bg-green" : "bg-neutral-800"
                  }`}
                />
              ))}
            </div>
            <div className="flex items-center gap-1">
              <span className="text-green font-mono text-sm">
                {Math.round(progress)}%
              </span>
              <span className="w-2 h-4 bg-green animate-pulse ml-1" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
