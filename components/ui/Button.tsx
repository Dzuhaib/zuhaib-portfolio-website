import Link from "next/link";

type ButtonVariant = "primary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-green text-black hover:bg-green-dark",
  outline: "border border-neutral-300 text-black hover:border-green hover:text-green",
  ghost: "text-neutral-500 hover:text-green",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-5 py-2 text-xs tracking-wider uppercase",
  md: "px-8 py-3.5 text-sm tracking-wide",
  lg: "px-10 py-4 text-base tracking-wide",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-green/40 disabled:opacity-40 disabled:cursor-not-allowed";
  const classes = `${base} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
