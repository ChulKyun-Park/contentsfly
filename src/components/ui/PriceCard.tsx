import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Badge from "./Badge";
import Button from "./Button";

interface PriceCardProps {
  label: string;
  price: string;
  unit: string;
  description?: string;
  badge?: string;
  highlight?: boolean;
  ctaText?: string;
  ctaHref?: string;
  features?: readonly string[];
}

export default function PriceCard({
  label,
  price,
  unit,
  description,
  badge,
  highlight,
  ctaText,
  ctaHref,
  features,
}: PriceCardProps) {
  return (
    <div
      className={cn(
        "flex h-full flex-col rounded-2xl border p-8 text-center",
        highlight ? "border-primary shadow-lg" : "border-border",
      )}
    >
      {/* Top badge — reserve space */}
      <div className="min-h-[28px]">
        {highlight && <Badge>추천</Badge>}
      </div>

      {/* Label */}
      <p className="text-sm font-semibold text-muted">{label}</p>

      {/* Price */}
      <div className="mt-3 flex items-baseline justify-center gap-1">
        <span className="text-4xl font-bold text-foreground">{price}</span>
        {unit && <span className="text-lg text-muted">{unit}</span>}
      </div>

      {/* Sub-badge — reserve space */}
      <div className="mt-3 min-h-[24px]">
        {badge && <Badge variant="accent">{badge}</Badge>}
      </div>

      {/* Description */}
      {description && (
        <p className="mt-3 text-sm text-muted">{description}</p>
      )}

      {/* Features list */}
      {features && features.length > 0 && (
        <ul className="mt-5 space-y-2 text-left">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-foreground">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span className="break-keep">{f}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Spacer to push button down */}
      <div className="flex-1" />

      {/* CTA */}
      {ctaText && ctaHref && (
        <Button
          href={ctaHref}
          variant={highlight ? "primary" : "outline"}
          className="mt-6 w-full justify-center"
        >
          {ctaText}
        </Button>
      )}
    </div>
  );
}
