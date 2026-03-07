import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import ProcessStep from "@/components/ui/ProcessStep";
import PriceCard from "@/components/ui/PriceCard";
import { Check } from "lucide-react";
import { PROCESS_STEPS, PRICING } from "@/lib/constants";

export const metadata: Metadata = {
  title: "단건 요청 | 컨텐츠플라이",
  description: "1회성 프로젝트도 환영합니다. 즉시 가격을 확인하고 빠르게 시작하세요.",
};

const FEATURES = [
  "회원가입 후 즉시 이용 가능",
  "영상 길이 기반 투명한 가격 산정",
  "한·영 번역 기준 24시간 내 납품",
  "납품 후 1회 무료 수정 지원",
  "자막 스타일 4종 중 선택 가능",
  "번역 완료 후 SRT/VTT 파일 제공",
];

export default function SinglePage() {
  return (
    <>
      <PageHero
        label="단건 요청"
        title="한 편만 필요해도 괜찮아요 빠르게 시작하세요"
        description="정기 계약 없이, 필요할 때 한 번만 요청할 수 있는 간편한 주문 방식입니다."
      />

      {/* 가격 안내 */}
      <Section>
        <SectionHeader label="단건 요금" title="투명한 가격 정책" description="영상 길이에 따라 가격이 산정됩니다. 추가 비용은 없습니다." />
        <div className="mx-auto grid max-w-lg gap-6">
          <PriceCard label={PRICING.single.label} price={PRICING.single.price} unit={PRICING.single.unit} highlight description="영상 길이 기반 투명한 가격 산정" />
        </div>
      </Section>

      {/* 특징 */}
      <Section className="bg-surface">
        <SectionHeader label="단건 특징" title="간편하고 빠른 단건 주문" />
        <div className="mx-auto max-w-2xl">
          <ul className="grid gap-4 sm:grid-cols-2">
            {FEATURES.map((f) => (
              <li key={f} className="flex items-start gap-3 text-foreground">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="break-keep">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* 프로세스 */}
      <Section>
        <SectionHeader label="작업 프로세스" title="단건 번역 프로세스" />
        <div className="grid gap-0 lg:grid-cols-5 lg:gap-6">
          {PROCESS_STEPS.map((s, i) => (
            <ProcessStep key={s.step} {...s} isLast={i === PROCESS_STEPS.length - 1} />
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-navy text-white">
        <div className="text-center">
          <h2 className="text-[length:var(--font-size-section-h2)] font-bold">지금 바로 주문하세요</h2>
          <p className="mt-4 text-lg text-white/80">회원가입 후 영상을 업로드하면 즉시 견적을 확인할 수 있습니다.</p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/contact" className="bg-white text-navy hover:bg-white/90">주문 시작하기</Button>
            <Button href="/plan" className="bg-primary text-white hover:bg-primary-dark">정기 플랜 보기</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
