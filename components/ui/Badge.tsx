interface BadgeProps {
  children: React.ReactNode;
  variant?: "forest" | "gold" | "olive";
  className?: string;
}

const variants = {
  forest: "text-forest",
  gold: "text-gold-dark",
  olive: "text-olive",
};

export function Badge({ children, variant = "forest", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em] uppercase ${variants[variant]} ${className}`}
    >
      <span className="decorative-line" />
      {children}
    </span>
  );
}
