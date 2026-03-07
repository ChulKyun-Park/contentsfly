import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import ProcessStep from "@/components/ui/ProcessStep";
import { Check } from "lucide-react";
import { PROCESS_STEPS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "구독형 서비스 | 컨텐츠플라이",
  description: "정기적으로 번역이 필요한 크리에이터를 위한 스마트한 선택. 전담 매니저, 맞춤 위키사전, 최대 36% 할인.",
};

const SUBSCRIPTION_TIERS = [
  {
    name: "라이트",
    minutes: "30분",
    price: "150,000",
    unit: "원/월",
    perMin: "5,000원/분",
    features: ["월 30분 번역 포함", "한·영 번역 기본", "표준 납품 (48시간)", "이메일 지원"],
    highlight: false,
  },
  {
    name: "스탠다드",
    minutes: "60분",
    price: "270,000",
    unit: "원/월",
    perMin: "4,500원/분",
    badge: "인기",
    features: ["월 60분 번역 포함", "전용 위키사전", "우선 납품 (24시간)", "채팅 지원", "카톡 승인 자동 주문"],
    highlight: true,
  },
  {
    name: "프로",
    minutes: "120분",
    price: "468,000",
    unit: "원/월",
    perMin: "3,900원/분",
    badge: "최대 할인",
    features: ["월 120분 번역 포함", "전담 매니저 배정", "맞춤 위키사전 관리", "당일 납품 가능", "우선순위 작업 처리", "전화 지원"],
    highlight: false,
  },
];

const BENEFITS = [
  { title: "전담 매니저 배정", desc: "프로젝트 전반을 관리하는 전담 매니저가 배정되어 소통 비용을 줄이고 품질을 일관되게 유지합니다." },
  { title: "맞춤 위키사전 관리", desc: "크리에이터/브랜드의 톤, 고유명사, 용어를 정리한 전용 위키사전으로 초월번역 품질을 보장합니다." },
  { title: "카톡 승인 자동 주문", desc: "카카오톡 승인 한 번으로 자동 주문됩니다. 매번 주문하는 번거로움이 사라집니다." },
  { title: "우선순위 작업 처리", desc: "구독 고객의 요청은 항상 우선 처리됩니다. 긴급 요청에도 유연하게 대응합니다." },
  { title: "최대 36% 할인 적용", desc: "월 정기 결제 할인으로 최대 36%까지 할인이 적용됩니다." },
  { title: "품질 피드백 루프", desc: "시청자 반응과 피드백을 위키사전에 반영하여 지속적으로 번역 품질을 개선합니다." },
];

const FAQ = [
  { q: "잔여 분은 이월되나요?", a: "미사용 분은 다음 달로 이월됩니다 (최대 1개월). 2개월 이상 미사용 시 소멸됩니다." },
  { q: "초과 사용 시 어떻게 되나요?", a: "월 할당량 초과 시 분당 6,000원의 표준 요금이 적용됩니다." },
  { q: "플랜 변경이 가능한가요?", a: "다음 결제일 기준으로 언제든 상위/하위 플랜으로 변경할 수 있습니다." },
  { q: "해지 위약금이 있나요?", a: "없습니다. 언제든 해지 가능하며, 남은 기간은 환불됩니다." },
];

export default function SubscriptionPage() {
  return (
    <>
      <PageHero
        label="구독형 서비스"
        title="정기적으로 번역이 필요하다면, 구독형 서비스가 정답입니다"
        description="카톡 승인 한 번으로 자동 주문. 전담 매니저와 맞춤 위키사전으로 일관된 품질을 보장합니다."
      />

      {/* 구독 티어 */}
      <Section>
        <SectionHeader label="구독 플랜" title="월 구독 요금제" description="프로젝트 규모에 맞는 플랜을 선택하세요. 모든 플랜은 언제든 변경 가능합니다." />
        <div className="grid gap-8 md:grid-cols-3">
          {SUBSCRIPTION_TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`flex h-full flex-col rounded-2xl border p-8 transition-shadow hover:shadow-lg ${
                tier.highlight ? "border-primary bg-primary-light/30 shadow-md" : "border-border bg-white"
              }`}
            >
              {/* Badge — reserve space */}
              <div className="mb-2 min-h-[24px]">
                {tier.badge && <Badge variant="accent">{tier.badge}</Badge>}
              </div>
              <h3 className="text-xl font-bold text-foreground">{tier.name}</h3>
              <p className="mt-1 text-sm text-muted">월 {tier.minutes} 번역 · {tier.perMin}</p>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-3xl font-bold text-foreground">{tier.price}</span>
                <span className="text-muted">{tier.unit}</span>
              </div>
              <ul className="mt-6 flex-1 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                href="/contact"
                variant={tier.highlight ? "primary" : "outline"}
                className="mt-8 w-full justify-center"
              >
                구독 신청
              </Button>
            </div>
          ))}
        </div>
      </Section>

      {/* 혜택 */}
      <Section className="bg-surface">
        <SectionHeader label="구독 혜택" title="왜 구독형 서비스를 선택해야 하나요?" />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b) => (
            <div key={b.title} className="rounded-2xl border border-border bg-white p-6 transition-shadow hover:shadow-md">
              <h3 className="text-lg font-bold text-foreground">{b.title}</h3>
              <p className="mt-2 text-sm text-muted break-keep">{b.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 프로세스 */}
      <Section>
        <SectionHeader label="작업 프로세스" title="구독형 서비스 번역 프로세스" />
        <div className="grid gap-0 lg:grid-cols-5 lg:gap-6">
          {PROCESS_STEPS.map((s, i) => (
            <ProcessStep key={s.step} {...s} isLast={i === PROCESS_STEPS.length - 1} />
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-surface">
        <SectionHeader label="자주 묻는 질문" title="구독형 서비스 FAQ" />
        <div className="mx-auto max-w-3xl space-y-6">
          {FAQ.map((item) => (
            <div key={item.q} className="rounded-xl border border-border bg-white p-6">
              <h4 className="font-semibold text-foreground">{item.q}</h4>
              <p className="mt-2 text-sm text-muted break-keep">{item.a}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-navy text-white">
        <div className="text-center">
          <h2 className="text-[length:var(--font-size-section-h2)] font-bold">구독을 시작하세요</h2>
          <p className="mt-4 text-lg text-white/80">첫 달 10% 추가 할인 혜택을 놓치지 마세요.</p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/contact" className="bg-white text-navy hover:bg-white/90">구독 상담 신청</Button>
            <Button href="/plan" className="bg-primary text-white hover:bg-primary-dark">다른 서비스 보기</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
