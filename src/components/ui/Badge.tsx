import { cn } from "@/lib/utils";

interface BadgeProps { children: React.ReactNode; variant?: "default" | "accent" | "outline"; className?: string; }

export default function Badge({ children, variant = "default", className }: BadgeProps) {
  const variants = {
    default: "bg-primary-light text-primary",
    accent: "bg-accent-light text-accent",
    outline: "border border-primary text-primary",
  };
  return (
    <span className={cn("inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold", variants[variant], className)}>
      {children}
    </span>
  );
}
