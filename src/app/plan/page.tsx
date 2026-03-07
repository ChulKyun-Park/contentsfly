import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import PlanCard from "@/components/ui/PlanCard";
import ProcessStep from "@/components/ui/ProcessStep";
import Button from "@/components/ui/Button";
import { PLANS, PROCESS_STEPS, SUBTITLE_STYLES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "서비스 | 컨텐츠플라이",
  description: "파트너십 제휴, 구독형 서비스, 단건 주문, AI서비스, 비즈니스 — 상황에 맞게 선택하는 합리적인 영상 번역 서비스.",
};

export default function PlanPage() {
  return (
    <>
      <PageHero
        label="서비스"
        title="상황에 맞게 선택하세요"
        description="크리에이터, 기업, 1회성 프로젝트 — 모든 번역 니즈에 맞는 서비스를 제공합니다."
      />

      {/* 서비스 비교 */}
      <Section>
        <SectionHeader label="서비스 비교" title="4가지 서비스" description="프로젝트 규모와 빈도에 따라 최적의 서비스를 선택하세요." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((plan) => (
            <PlanCard key={plan.title} {...plan} />
          ))}
        </div>
      </Section>

      {/* 자막 스타일 */}
      <Section className="bg-surface">
        <SectionHeader label="자막 스타일" title="콘텐츠에 맞는 자막 스타일" description="영상의 성격에 맞춰 4가지 스타일 중 선택할 수 있습니다." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SUBTITLE_STYLES.map((style) => (
            <div key={style.name} className="rounded-2xl border border-border bg-white p-6 text-center transition-shadow hover:shadow-md">
              <span className="mb-3 inline-block rounded-full bg-primary-light px-3 py-1 text-xs font-semibold text-primary">{style.tag}</span>
              <h3 className="text-lg font-bold text-foreground">{style.name}</h3>
              <p className="mt-2 text-sm text-muted break-keep">{style.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 프로세스 */}
      <Section>
        <SectionHeader label="작업 프로세스" title="5단계 전문 프로세스" description="체계적인 워크플로우로 최고의 결과물을 만들어냅니다." />
        <div className="grid gap-0 lg:grid-cols-5 lg:gap-6">
          {PROCESS_STEPS.map((s, i) => (
            <ProcessStep key={s.step} {...s} isLast={i === PROCESS_STEPS.length - 1} />
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-navy text-white">
        <div className="text-center">
          <h2 className="text-[length:var(--font-size-section-h2)] font-bold">어떤 서비스가 맞는지 모르겠다면?</h2>
          <p className="mt-4 text-lg text-white/80">전문 컨설턴트가 프로젝트에 맞는 서비스를 추천해 드립니다.</p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/contact" className="bg-white text-navy hover:bg-white/90">무료 상담 신청</Button>
            <Button href="/pricing" className="bg-primary text-white hover:bg-primary-dark">가격 상세 보기</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
