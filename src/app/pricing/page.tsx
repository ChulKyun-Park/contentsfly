import { Fragment } from "react";
import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { Check, X, Gift, Zap, Handshake, RefreshCw, FileText, Sparkles, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "가격 안내 | 컨텐츠플라이",
  description: "영상 번역 가격을 한눈에 비교하세요. 파트너십 제휴, 구독형, 단건, AI서비스, 비즈니스 상세 요금 안내.",
};

/* ── 5-tier 요금 카드 ── */
const PRICE_CARDS = [
  {
    icon: Handshake,
    label: "파트너십 제휴",
    price: "4,800",
    unit: "원/분~",
    desc: "MCN · 기획사 전용",
    topBadge: "",
    subBadge: "20% 파트너 할인",
    highlight: false,
    href: "/plan/partnership",
  },
  {
    icon: RefreshCw,
    label: "구독형 서비스",
    price: "3,900",
    unit: "원/분~",
    desc: "월 정기 결제 할인",
    topBadge: "추천",
    subBadge: "최대 36% 할인",
    highlight: true,
    href: "/plan/subscription",
  },
  {
    icon: FileText,
    label: "단건 주문",
    price: "6,000",
    unit: "원/분",
    desc: "1회성 건별 결제",
    topBadge: "",
    subBadge: "",
    highlight: false,
    href: "/plan/single",
  },
  {
    icon: Sparkles,
    label: "AI서비스",
    price: "1,000",
    unit: "원/분",
    desc: "AI 자동 번역·더빙",
    topBadge: "NEW",
    subBadge: "",
    highlight: false,
    href: "/ai",
  },
  {
    icon: Building2,
    label: "비즈니스",
    price: "별도 문의",
    unit: "",
    desc: "전담 매니저 + 후불 정산",
    topBadge: "",
    subBadge: "",
    highlight: false,
    href: "/business",
  },
];

/* ── 5-column 비교 테이블 (카테고리 그룹) ── */
type CellValue = string | boolean;

interface TableRow {
  label: string;
  tooltip?: string;
  values: [CellValue, CellValue, CellValue, CellValue, CellValue];
}

interface TableGroup {
  category: string;
  rows: TableRow[];
}

const SERVICE_HEADERS = [
  { label: "파트너십 제휴", sub: "MCN·기획사", recommended: false },
  { label: "구독형 서비스", sub: "정기 이용", recommended: true },
  { label: "단건 주문", sub: "1회성 프로젝트", recommended: false },
  { label: "AI서비스", sub: "자동 번역·더빙", recommended: false },
  { label: "비즈니스", sub: "기업 맞춤", recommended: false },
];

const COMPARISON_TABLE: TableGroup[] = [
  {
    category: "가격 정보",
    rows: [
      { label: "기본 단가", tooltip: "한·영 번역 기준", values: ["4,800원/분~", "3,900원/분~", "6,000원/분", "1,000원/분", "별도 협의"] },
      { label: "최대 할인", values: ["20%", "36%", "—", "—", "별도 협의"] },
      { label: "결제 방식", values: ["후불 정산", "월 정기 결제", "건별 결제", "건별 결제", "후불 정산"] },
      { label: "최소 약정", values: ["6개월", "1개월", "없음", "없음", "3개월"] },
    ],
  },
  {
    category: "번역 품질",
    rows: [
      { label: "번역 방식", values: ["100% 휴먼", "100% 휴먼", "100% 휴먼", "AI + MTPE", "100% 휴먼"] },
      { label: "납품 속도", tooltip: "30분 영상 기준", values: ["2영업일", "24시간", "48시간", "즉시", "협의 가능"] },
      { label: "지원 언어", values: ["10개+", "10개+", "10개+", "140개+", "맞춤 지원"] },
      { label: "자막 스타일 선택", tooltip: "일반·유머·진지·배리어프리", values: [true, true, true, false, true] },
      { label: "무료 수정", values: ["무제한", "2회", "1회", "—", "무제한"] },
    ],
  },
  {
    category: "관리 지원",
    rows: [
      { label: "전담 매니저", values: [true, true, false, false, true] },
      { label: "맞춤 위키사전", tooltip: "크리에이터별 톤·용어 사전", values: [true, true, false, false, true] },
      { label: "우선 처리", values: [true, true, false, false, true] },
      { label: "카톡 승인 자동 주문", values: [true, true, false, false, false] },
      { label: "결과물 자동 적용", tooltip: "YouTube 제목·설명·CC자막", values: [true, false, false, false, "협의 가능"] },
    ],
  },
  {
    category: "부가 기능",
    rows: [
      { label: "마스터 시스템", tooltip: "다수 채널 통합 관리", values: [true, false, false, false, true] },
      { label: "대시보드 리포트", values: [true, false, false, false, true] },
      { label: "보안 옵션 (NDA)", values: [true, false, false, false, true] },
      { label: "SLA 보장", values: [true, false, false, false, true] },
      { label: "AI 더빙 지원", values: [false, false, false, true, "협의 가능"] },
    ],
  },
];

/* ── FAQ ── */
const FAQ = [
  { q: "파트너십 제휴와 구독형 서비스의 차이가 무엇인가요?", a: "파트너십 제휴는 MCN, 기획사, 방송사 등 다수 채널을 운영하는 기업을 위한 프로그램입니다. 마스터 시스템으로 소속 크리에이터를 통합 관리하고, 20% 파트너 할인과 후불 정산이 적용됩니다. 구독형 서비스는 개별 크리에이터가 월 정기 결제로 최대 36% 할인을 받는 방식입니다." },
  { q: "구독형 서비스와 단건 주문의 차이가 무엇인가요?", a: "구독형 서비스는 정기적으로 번역이 필요한 고객을 위한 월 정기 결제 방식으로, 최대 36% 할인과 전담 매니저, 위키사전 관리 등의 혜택이 제공됩니다. 단건 주문은 1회성 프로젝트에 적합한 건별 결제 방식입니다." },
  { q: "AI서비스는 어떻게 다른가요?", a: "AI서비스는 AI 기반 자동 번역과 더빙으로, 분당 1,000원의 합리적인 가격에 140개 이상 언어를 즉시 지원합니다. 빠른 처리가 필요하거나 비용을 줄이고 싶을 때 적합합니다. 전문가 후편집(MTPE) 옵션으로 품질을 높일 수도 있습니다." },
  { q: "할인은 어떻게 적용되나요?", a: "구독형 서비스는 월 이용량에 따라 최대 36%까지 할인이 적용됩니다. 파트너십 제휴사는 모든 서비스에 20% 파트너 할인이 적용되며, 비즈니스 고객은 계약 조건에 따라 별도 할인을 제공합니다." },
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

      {/* 핵심 요금 요약 — 5개 카드 */}
      <Section>
        <SectionHeader label="서비스 요금" title="영상 번역 요금제" description="프로젝트 규모와 빈도에 따라 최적의 요금제를 선택하세요." />
        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {PRICE_CARDS.map((card) => (
            <a
              key={card.label}
              href={card.href}
              className={`group flex flex-col rounded-2xl border bg-white p-6 text-center transition-shadow hover:shadow-lg ${
                card.highlight ? "border-primary shadow-md ring-1 ring-primary/20" : "border-border"
              }`}
            >
              <div className="min-h-[28px]">
                {card.topBadge && (
                  <Badge variant={card.highlight ? "default" : "accent"}>{card.topBadge}</Badge>
                )}
              </div>
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-surface">
                <card.icon className="h-5 w-5 text-primary" />
              </div>
              <p className="text-sm font-semibold text-muted">{card.label}</p>
              <div className="mt-2 flex items-baseline justify-center gap-0.5">
                <span className="text-3xl font-bold text-foreground">{card.price}</span>
                {card.unit && <span className="text-base text-muted">{card.unit}</span>}
              </div>
              <p className="mt-2 text-xs text-muted">{card.desc}</p>
              <div className="mt-3 min-h-[24px]">
                {card.subBadge && <Badge variant="accent">{card.subBadge}</Badge>}
              </div>
              <span className="mt-auto pt-4 text-xs font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                자세히 보기 &rarr;
              </span>
            </a>
          ))}
        </div>
      </Section>

      {/* 서비스별 상세 비교 테이블 — 5열 + 카테고리 그룹 */}
      <Section className="bg-surface">
        <SectionHeader
          label="서비스 비교"
          title="서비스별 상세 비교"
          description="가격, 품질, 관리 지원, 부가 기능을 한눈에 비교하고 내 프로젝트에 맞는 서비스를 선택하세요."
        />
        <div className="mx-auto max-w-7xl overflow-x-auto rounded-2xl border border-border bg-white shadow-sm">
          <table className="w-full min-w-[800px] text-sm">
            {/* 헤더 — 서비스명 + 대상 설명 */}
            <thead>
              <tr className="border-b border-border bg-surface/60">
                <th className="w-44 px-5 py-5 text-left text-xs font-medium uppercase tracking-wider text-muted">
                  항목
                </th>
                {SERVICE_HEADERS.map((h) => (
                  <th
                    key={h.label}
                    className={`px-4 py-5 text-center ${h.recommended ? "bg-primary/[0.04]" : ""}`}
                  >
                    <div className="flex flex-col items-center gap-1">
                      {h.recommended && <Badge>추천</Badge>}
                      <span className="text-sm font-bold text-foreground">{h.label}</span>
                      <span className="text-[11px] font-normal text-muted">{h.sub}</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARISON_TABLE.map((group) => (
                <Fragment key={group.category}>
                  {/* 카테고리 구분 행 */}
                  <tr className="bg-surface/40">
                    <td
                      colSpan={6}
                      className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-primary"
                    >
                      {group.category}
                    </td>
                  </tr>
                  {/* 데이터 행 */}
                  {group.rows.map((row) => (
                    <tr key={row.label} className="border-b border-border/40 transition-colors hover:bg-surface/30">
                      <td className="px-5 py-3.5">
                        <span className="font-medium text-foreground">{row.label}</span>
                        {row.tooltip && (
                          <span className="ml-1.5 text-[11px] text-muted">({row.tooltip})</span>
                        )}
                      </td>
                      {row.values.map((val, i) => (
                        <td
                          key={i}
                          className={`px-4 py-3.5 text-center ${i === 1 ? "bg-primary/[0.04]" : ""}`}
                        >
                          {val === true ? (
                            <Check className="mx-auto h-5 w-5 text-primary" />
                          ) : val === false ? (
                            <X className="mx-auto h-5 w-5 text-border" />
                          ) : val === "—" ? (
                            <span className="text-border">—</span>
                          ) : (
                            <span className={`text-[13px] ${i === 1 ? "font-semibold text-primary" : "text-foreground"}`}>
                              {val}
                            </span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>

        {/* 하단 안내 + CTA */}
        <div className="mt-6 text-center">
          <p className="text-xs text-muted">
            * 가격은 한·영 번역 기준이며, 기타 언어쌍은 10~30% 추가 요금이 발생할 수 있습니다.
            &nbsp;·&nbsp; VAT 별도
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button href="/contact">맞춤 견적 받기</Button>
            <Button href="/plan" variant="outline">서비스 상세 보기 &rarr;</Button>
          </div>
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
