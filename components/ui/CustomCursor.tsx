"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    setMounted(true);
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  if (!mounted || isTouch) return null;

  return <CursorWithMotion />;
}

function CursorWithMotion() {
  const [isHovering, setIsHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const [pos, setPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [visible]);

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
      style={{
        transform: `translate(calc(${pos.x}px - 50%), calc(${pos.y}px - 50%))`,
        width: isHovering ? 48 : 24,
        height: isHovering ? 48 : 24,
        opacity: visible ? 1 : 0,
        transition: "width 0.2s, height 0.2s, opacity 0.2s",
      }}
    >
      <div className="w-full h-full rounded-full border border-green" />
    </div>
  );
}