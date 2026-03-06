import { cn } from "@/lib/utils";
import Button from "./Button";
import { Check } from "lucide-react";

interface PlanCardProps {
  title: string;
  description: string;
  features: readonly string[];
  href: string;
  highlight?: boolean;
}

export default function PlanCard({ title, description, features, href, highlight }: PlanCardProps) {
  return (
    <div className={cn(
      "rounded-2xl border p-8 transition-shadow hover:shadow-lg",
      highlight ? "border-primary bg-primary-light/30 shadow-md" : "border-border bg-white"
    )}>
      {highlight && (
        <span className="mb-4 inline-block rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">추천</span>
      )}
      <h3 className="text-[length:var(--font-size-card-title)] font-bold text-foreground">{title}</h3>
      <p className="mt-2 text-[length:var(--font-size-card-desc)] text-muted break-keep">{description}</p>
      <ul className="mt-6 space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-foreground">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            {feature}
          </li>
        ))}
      </ul>
      <Button href={href} variant={highlight ? "primary" : "outline"} className="mt-8 w-full justify-center">
        자세히 보기
      </Button>
    </div>
  );
}
