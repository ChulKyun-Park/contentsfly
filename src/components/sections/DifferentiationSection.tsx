import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { DIFFERENTIATIONS } from "@/lib/constants";
import {
  BadgeDollarSign,
  Globe,
  Zap,
  Workflow,
  Shield,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  BadgeDollarSign,
  Globe,
  Zap,
  Workflow,
  Shield,
};

export default function DifferentiationSection() {
  return (
    <Section>
      <SectionHeader
        label="왜 컨텐츠플라이인가"
        title="영상 번역, 이렇게 다릅니다"
      />
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {DIFFERENTIATIONS.map((item) => {
          const Icon = iconMap[item.icon];
          return (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-white p-6 transition-shadow hover:shadow-lg"
            >
              {Icon && (
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
              )}
              <h3 className="text-[length:var(--font-size-card-title)] font-bold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-[length:var(--font-size-card-desc)] text-muted break-keep">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
