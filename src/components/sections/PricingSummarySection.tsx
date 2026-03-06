import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import PriceCard from "@/components/ui/PriceCard";
import Button from "@/components/ui/Button";
import { PRICING } from "@/lib/constants";

export default function PricingSummarySection() {
  return (
    <Section>
      <SectionHeader
        label="합리적인 가격"
        title="투명한 가격, 최대 36% 할인"
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <PriceCard
          label={PRICING.prepaid.label}
          price={PRICING.prepaid.price}
          unit={PRICING.prepaid.unit}
          highlight
          badge={`최대 ${PRICING.maxDiscount} 할인`}
        />
        <PriceCard
          label={PRICING.postpaid.label}
          price={PRICING.postpaid.price}
          unit={PRICING.postpaid.unit}
        />
        <PriceCard
          label={PRICING.script.label}
          price={PRICING.script.price}
          unit={PRICING.script.unit}
        />
      </div>

      <div className="mt-10 text-center">
        <Button href="/pricing" variant="outline">
          상세 가격 보기 &rarr;
        </Button>
      </div>
    </Section>
  );
}
