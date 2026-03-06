import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import PlanCard from "@/components/ui/PlanCard";
import { PLANS } from "@/lib/constants";

export default function PlansSection() {
  return (
    <Section id="plans">
      <SectionHeader label="번역 플랜" title="목적에 맞는 플랜을 선택하세요" />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {PLANS.map((plan) => (
          <PlanCard
            key={plan.title}
            title={plan.title}
            description={plan.description}
            features={plan.features}
            href={plan.href}
            highlight={plan.highlight}
          />
        ))}
      </div>
    </Section>
  );
}
