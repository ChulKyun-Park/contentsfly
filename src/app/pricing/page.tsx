import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { Check, X, Gift, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "가격 안내 | 컨텐츠플라이",
  description: "영상 번역 가격을 한눈에 비교하세요. 구독형 서비스, 단건 주문, AI서비스, 비즈니스 상세 요금 안내.",
};

const PRICING_TABLE = {
  headers: ["", "구독형 서비스", "단건 주문", "AI서비스", "비즈니스"],
  rows: [
    { label: "기본 단가", values: ["3,900원/분~", "6,000원/분", "1,000원/분", "별도 협의"] },
    { label: "최대 할인", values: ["36%", "—", "—", "별도 협의"] },
    { label: "전담 매니저", values: [true, false, false, true] },
    { label: "맞춤 위키사전", values: [true, false, false, true] },
    { label: "납품 속도", values: ["24시간", "48시간", "즉시", "협의 가능"] },
    { label: "우선 처리", values: [true, false, false, true] },
    { label: "무료 수정", values: ["2회", "1회", "—", "무제한"] },
    { label: "결제 방식", values: ["월 정기 결제", "건별 결제", "건별 결제", "후불 정산"] },
    { label: "지원 언어", values: ["10개+", "10개+", "140개+", "맞춤 지원"] },
    { label: "최소 약정", values: ["1개월", "없음", "없음", "3개월"] },
  ],
};

const FAQ = [
  { q: "구독형 서비스와 단건 주문의 차이가 무엇인가요?", a: "구독형 서비스는 정기적으로 번역이 필요한 고객을 위한 월 정기 결제 방식으로, 최대 36% 할인과 전담 매니저, 위키사전 관리 등의 혜택이 제공됩니다. 단건 주문은 1회성 프로젝트에 적합한 건별 결제 방식입니다." },
  { q: "AI서비스는 어떻게 다른가요?", a: "AI서비스는 AI 기반 자동 번역과 더빙으로, 분당 1,000원의 합리적인 가격에 140개 이상 언어를 즉시 지원합니다. 빠른 처리가 필요하거나 비용을 줄이고 싶을 때 적합합니다." },
  { q: "할인은 어떻게 적용되나요?", a: "구독형 서비스는 월 이용량에 따라 최대 36%까지 할인이 적용됩니다. 파트너십 제휴사는 20% 추가 할인, 비즈니스 고객은 계약 조건에 따라 별도 할인을 제공합니다." },
  { q: "환불 정책은 어떻게 되나요?", a: "작업 시작 전이면 100% 환불 가능합니다. 작업 진행 중인 경우 진행률에 따라 부분 환불이 적용됩니다. 구독 해지 시 잔여 기간은 환불됩니다." },
  { q: "세금계산서 발행이 가능한가요?", a: "네, 모든 결제 건에 대해 세금계산서 발행이 가능합니다. 결제 시 사업자 정보를 입력하시면 됩니다." },
  { q: "추가 언어 번역 시 가격이 달라지나요?", a: "한·영 번역이 기본 가격이며, 기타 언어쌍은 10~30% 추가 요금이 발생할 수 있습니다. 정확한 견적은 문의 시 안내해 드립니다." },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        label="가격 안내"
        title="투명하고 합리적인 가격"
        description="숨겨진 비용 없이, 영상 길이에 따라 명확하게 가격이 산정됩니다."
      />

      {/* 프로모션 배너 */}
      <div className="bg-primary-light">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-6 sm:flex-row sm:justify-center sm:gap-8">
          <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <Gift className="h-5 w-5 text-primary" />
            <span>신규 가입 시 <strong className="text-primary">5만원 쿠폰</strong> 증정</span>
          </div>
          <div className="h-px w-8 bg-border sm:h-6 sm:w-px" />
          <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <Zap className="h-5 w-5 text-primary" />
            <span>오전 11시 이전 요청 시 <strong className="text-primary">당일 완료</strong> (30분 영상 기준)</span>
          </div>
        </div>
      </div>

      {/* 핵심 요금 요약 */}
      <Section>
        <SectionHeader label="서비스 요금" title="영상 번역 요금제" description="프로젝트 규모와 빈도에 따라 최적의 요금제를 선택하세요." />
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-4">
          {[
            { label: "구독형 서비스", price: "3,900", unit: "원/분~", desc: "월 정기 결제 할인", topBadge: "추천", subBadge: "최대 36% 할인", highlight: true },
            { label: "단건 주문", price: "6,000", unit: "원/분", desc: "1회성 건별 결제", topBadge: "", subBadge: "", highlight: false },
            { label: "AI서비스", price: "1,000", unit: "원/분", desc: "AI 자동 번역·더빙", topBadge: "NEW", subBadge: "", highlight: false },
            { label: "비즈니스", price: "별도 문의", unit: "", desc: "전담 매니저 + 후불 정산", topBadge: "", subBadge: "", highlight: false },
          ].map((card) => (
            <div
              key={card.label}
              className={`flex flex-col rounded-2xl border bg-white p-8 text-center ${
                card.highlight ? "border-primary shadow-lg" : "border-border"
              }`}
            >
              <div className="min-h-[28px]">
                {card.topBadge && (
                  <Badge variant={card.highlight ? "default" : "accent"}>{card.topBadge}</Badge>
                )}
              </div>
              <p className="text-sm font-semibold text-muted">{card.label}</p>
              <div className="mt-3 flex items-baseline justify-center gap-1">
                <span className="text-4xl font-bold text-foreground">{card.price}</span>
                {card.unit && <span className="text-lg text-muted">{card.unit}</span>}
              </div>
              <p className="mt-3 text-sm text-muted">{card.desc}</p>
              <div className="mt-3 min-h-[24px]">
                {card.subBadge && <Badge variant="accent">{card.subBadge}</Badge>}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 플랜 비교 테이블 */}
      <Section className="bg-surface">
        <SectionHeader label="서비스 비교" title="서비스별 상세 비교" description="내 프로젝트에 맞는 서비스를 비교해 보세요." />
        <div className="mx-auto max-w-6xl overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr>
                {PRICING_TABLE.headers.map((h, i) => (
                  <th
                    key={h || "label"}
                    className={`border-b border-border px-6 py-4 text-left font-semibold ${
                      i === 0 ? "w-40" : "text-center"
                    } ${i === 1 ? "text-primary" : "text-foreground"}`}
                  >
                    {h}
                    {i === 1 && <Badge className="ml-2">추천</Badge>}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {PRICING_TABLE.rows.map((row) => (
                <tr key={row.label} className="border-b border-border/50">
                  <td className="px-6 py-4 font-medium text-foreground">{row.label}</td>
                  {row.values.map((val, i) => (
                    <td key={i} className="px-6 py-4 text-center">
                      {val === true ? (
                        <Check className="mx-auto h-5 w-5 text-primary" />
                      ) : val === false ? (
                        <X className="mx-auto h-5 w-5 text-border" />
                      ) : (
                        <span className={i === 0 ? "font-semibold text-primary" : "text-muted"}>{val}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8 text-center">
          <Button href="/contact">맞춤 견적 받기</Button>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeader label="자주 묻는 질문" title="가격 관련 FAQ" />
        <div className="mx-auto max-w-3xl space-y-4">
          {FAQ.map((item) => (
            <details key={item.q} className="group rounded-xl border border-border bg-white">
              <summary className="flex cursor-pointer items-center justify-between px-6 py-5 font-semibold text-foreground transition-colors hover:text-primary">
                {item.q}
                <span className="ml-4 text-muted transition-transform group-open:rotate-180">&#x25BC;</span>
              </summary>
              <div className="px-6 pb-5 text-sm text-muted break-keep">{item.a}</div>
            </details>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-navy text-white">
        <div className="text-center">
          <h2 className="text-[length:var(--font-size-section-h2)] font-bold">어떤 요금제가 맞을지 고민되시나요?</h2>
          <p className="mt-4 text-lg text-white/80">전문 컨설턴트가 프로젝트를 분석하고 최적의 요금제를 추천합니다.</p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/contact" className="bg-white text-navy hover:bg-white/90">무료 상담 신청</Button>
            <Button href="/plan" className="bg-primary text-white hover:bg-primary-dark">서비스 상세 보기</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
