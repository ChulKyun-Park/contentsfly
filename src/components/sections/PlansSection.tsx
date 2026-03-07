import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import PlanCard from "@/components/ui/PlanCard";
import { PLANS } from "@/lib/constants";

export default function PlansSection() {
  return (
    <Section id="plans">
      <SectionHeader label="서비스" title="상황에 맞게 선택하는 합리적인 요금제" />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {PLANS.map((plan) => (
          <PlanCard
            key={plan.title}
            title={plan.title}
            description={plan.description}
            features={plan.features}
            href={plan.href}
            highlight={plan.highlight}
            price={plan.price}
            priceUnit={plan.priceUnit}
            badge={plan.badge}
          />
        ))}
      </div>
    </Section>
  );
}
