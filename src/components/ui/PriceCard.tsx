import { cn } from "@/lib/utils";
import Badge from "./Badge";

interface PriceCardProps {
  label: string;
  price: string;
  unit: string;
  description?: string;
  badge?: string;
  highlight?: boolean;
}

export default function PriceCard({ label, price, unit, description, badge, highlight }: PriceCardProps) {
  return (
    <div className={cn(
      "rounded-2xl border p-8 text-center",
      highlight ? "border-primary shadow-lg" : "border-border"
    )}>
      <p className="text-sm font-semibold text-muted">{label}</p>
      <div className="mt-4 flex items-baseline justify-center gap-1">
        <span className="text-4xl font-bold text-foreground">{price}</span>
        <span className="text-lg text-muted">{unit}</span>
      </div>
      {badge && <Badge variant="accent" className="mt-4">{badge}</Badge>}
      {description && <p className="mt-4 text-sm text-muted">{description}</p>}
    </div>
  );
}
