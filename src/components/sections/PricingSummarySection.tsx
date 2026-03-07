import { Monitor } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import PriceCard from "@/components/ui/PriceCard";
import Button from "@/components/ui/Button";
import { PRICING, PRICING_FEATURES } from "@/lib/constants";

export default function PricingSummarySection() {
  return (
    <Section>
      <SectionHeader
        label="합리적인 가격"
        title="AI로 빠르게, 휴먼터치로 완벽하게"
        description="프로젝트 규모와 목적에 맞는 최적의 서비스를 선택하세요."
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <PriceCard
          label={PRICING.subscription.label}
          price={PRICING.subscription.price}
          unit={PRICING.subscription.unit}
          highlight
          badge={`최대 ${PRICING.maxDiscount} 할인`}
          features={PRICING_FEATURES.subscription}
          ctaText="구독 시작"
          ctaHref="/plan/subscription"
        />
        <PriceCard
          label={PRICING.single.label}
          price={PRICING.single.price}
          unit={PRICING.single.unit}
          features={PRICING_FEATURES.single}
          ctaText="주문하기"
          ctaHref="/plan/single"
        />
        <PriceCard
          label={PRICING.ai.label}
          price={PRICING.ai.price}
          unit={PRICING.ai.unit}
          badge="NEW"
          features={PRICING_FEATURES.ai}
          ctaText="AI서비스 시작"
          ctaHref="/ai"
        />
        <PriceCard
          label={PRICING.business.label}
          price={PRICING.business.price}
          unit={PRICING.business.unit}
          features={PRICING_FEATURES.business}
          ctaText="문의하기"
          ctaHref="/business"
        />
      </div>

      {/* Placeholder — 서비스 비교 이미지 */}
      <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-surface">
        <div className="flex h-64 items-center justify-center">
          <div className="text-center text-muted">
            <Monitor className="mx-auto mb-3 h-12 w-12 text-border" />
            <p className="text-sm font-semibold">서비스 비교 인포그래픽</p>
            <p className="mt-1 text-xs text-muted">(이미지 준비 중)</p>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center">
        <Button href="/pricing" variant="outline">
          상세 가격 비교표 보기 &rarr;
        </Button>
      </div>
    </Section>
  );
}
