import { cn } from "@/lib/utils";
import Button from "./Button";
import { Check } from "lucide-react";

interface PlanCardProps {
  title: string;
  description: string;
  features: readonly string[];
  href: string;
  highlight?: boolean;
  price?: string;
  priceUnit?: string;
  badge?: string;
}

export default function PlanCard({
  title,
  description,
  features,
  href,
  highlight,
  price,
  priceUnit,
  badge,
}: PlanCardProps) {
  return (
    <div
      className={cn(
        "flex h-full flex-col rounded-2xl border p-8 transition-shadow hover:shadow-lg",
        highlight
          ? "border-primary bg-primary-light/30 shadow-md"
          : "border-border bg-white",
      )}
    >
      {/* Top badge — reserve space */}
      <div className="min-h-[28px]">
        {highlight && (
          <span className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
            추천
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="text-[length:var(--font-size-card-title)] font-bold text-foreground">
        {title}
      </h3>

      {/* Price */}
      <div className="mt-3 flex items-baseline gap-1">
        <span className="text-2xl font-bold text-foreground">
          {price || "\u00A0"}
        </span>
        {priceUnit && <span className="text-sm text-muted">{priceUnit}</span>}
      </div>

      {/* Sub-badge — reserve space */}
      <div className="mt-2 min-h-[24px]">
        {badge && (
          <span className="inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
            {badge}
          </span>
        )}
      </div>

      {/* Description — flex-1 absorbs height diff */}
      <p className="mt-3 flex-1 text-[length:var(--font-size-card-desc)] text-muted break-keep">
        {description}
      </p>

      {/* Features */}
      <ul className="mt-6 space-y-3">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-2 text-sm text-foreground"
          >
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA — always at bottom */}
      <Button
        href={href}
        variant={highlight ? "primary" : "outline"}
        className="mt-8 w-full justify-center"
      >
        자세히 보기
      </Button>
    </div>
  );
}
