import type { ReactNode } from "react";

interface DesktopMockupProps {
  children: ReactNode;
  className?: string;
}

export function DesktopMockup({ children, className = "" }: DesktopMockupProps) {
  return (
    <div className={`rounded-lg overflow-hidden border border-neutral-700 bg-neutral-900 shadow-2xl ${className}`}>
      <div className="flex items-center gap-1.5 px-4 py-2.5 bg-neutral-800 border-b border-neutral-700">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
      </div>
      <div className="bg-neutral-800 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}
