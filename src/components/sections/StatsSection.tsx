import Section from "@/components/ui/Section";
import { STATS } from "@/lib/constants";

export default function StatsSection() {
  return (
    <Section className="bg-surface">
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-4xl font-bold text-primary">{stat.value}</div>
            <div className="mt-2 text-muted">{stat.label}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
