import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { Check, Shield, Users, Headphones, BarChart3, Globe, Lock, TrendingUp, Building2, Play } from "lucide-react";

export const metadata: Metadata = {
  title: "비즈니스 | 컨텐츠플라이",
  description: "기업 전용 영상 번역 솔루션. 전담 매니저, 보안 옵션, 맞춤 워크플로우를 제공합니다.",
};

const BENEFITS = [
  { icon: Users, title: "전담 매니저", desc: "프로젝트 전반을 관리하는 전담 매니저가 배정되어 원활한 커뮤니케이션을 보장합니다." },
  { icon: Shield, title: "보안 옵션", desc: "NDA 체결, 전용 링크, 워터마크, 권한 관리 등 콘텐츠 보안을 철저하게 지원합니다." },
  { icon: Headphones, title: "24/7 긴급 대응", desc: "비즈니스 고객은 영업시간 외에도 긴급 요청 핫라인을 이용할 수 있습니다." },
  { icon: BarChart3, title: "대시보드 리포트", desc: "월간 번역량, 비용, 품질 지표를 대시보드에서 실시간으로 확인할 수 있습니다." },
  { icon: Globe, title: "다국어 동시 번역", desc: "하나의 영상을 10개 이상 언어로 동시에 번역하여 글로벌 출시 일정을 맞춥니다." },
  { icon: Lock, title: "SLA 보장", desc: "계약된 납품 기한과 품질 기준을 SLA로 보장합니다. 미달 시 보상이 적용됩니다." },
];

const CLIENTS = [
  "MCN · 엔터테인먼트 기업",
  "방송사 · OTT 플랫폼",
  "게임 퍼블리셔 · 개발사",
  "교육 · 이러닝 기업",
  "글로벌 마케팅 에이전시",
  "공공기관 · 비영리단체",
];

const PROCESS = [
  { step: "01", title: "문의 및 상담", desc: "프로젝트 규모, 언어쌍, 일정 등을 파악합니다." },
  { step: "02", title: "견적 및 제안", desc: "맞춤 견적서와 작업 제안서를 제공합니다." },
  { step: "03", title: "계약 및 온보딩", desc: "NDA 체결, 전담 매니저 배정, 위키사전 세팅을 진행합니다." },
  { step: "04", title: "번역 진행", desc: "체계적인 워크플로우로 일관된 품질의 번역을 제공합니다." },
  { step: "05", title: "납품 및 리포트", desc: "결과물 납품 후 품질 리포트와 피드백을 공유합니다." },
];

export default function BusinessPage() {
  return (
    <>
      <PageHero
        label="비즈니스"
        title="기업을 위한 맞춤 번역 솔루션"
        description="MCN, 방송사, 기업의 글로벌 콘텐츠 전략을 전담 매니저와 함께 설계합니다."
      />

      {/* 비즈니스 혜택 */}
      <Section>
        <SectionHeader label="비즈니스 혜택" title="기업 고객 전용 서비스" description="비즈니스 고객만을 위한 프리미엄 서비스를 제공합니다." />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-border bg-white p-6 transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted break-keep">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 대상 고객 */}
      <Section className="bg-surface">
        <SectionHeader label="대상 고객" title="이런 기업에 추천합니다" />
        <div className="mx-auto max-w-3xl">
          <div className="grid gap-4 sm:grid-cols-2">
            {CLIENTS.map((client) => (
              <div key={client} className="flex items-center gap-3 rounded-xl border border-border bg-white p-4">
                <Check className="h-5 w-5 shrink-0 text-primary" />
                <span className="font-medium text-foreground">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 비즈니스 프로세스 */}
      <Section>
        <SectionHeader label="진행 과정" title="비즈니스 도입 프로세스" />
        <div className="mx-auto max-w-3xl space-y-0">
          {PROCESS.map((p, i) => (
            <div key={p.step} className="relative flex gap-6 pb-8">
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">
                  {p.step}
                </div>
                {i < PROCESS.length - 1 && <div className="mt-2 h-full w-px bg-border" />}
              </div>
              <div className="pt-2">
                <h4 className="text-lg font-semibold text-foreground">{p.title}</h4>
                <p className="mt-1 text-sm text-muted break-keep">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 성과 지표 */}
      <Section className="bg-surface">
        <SectionHeader label="도입 성과" title="비즈니스 도입 후 달라지는 것" />
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
          {[
            { icon: TrendingUp, value: "+550%", label: "해외 시청자 도달", desc: "현지화 번역 후 평균 해외 시청자 증가율" },
            { icon: Globe, value: "10+", label: "동시 번역 언어", desc: "하나의 영상을 10개 이상 언어로 동시 번역" },
            { icon: BarChart3, value: "+70%", label: "광고 수익 증가", desc: "글로벌 시청자 확대로 인한 광고 수익 상승" },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl border border-border bg-white p-8 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <p className="text-3xl font-bold text-foreground">{item.value}</p>
              <p className="mt-1 font-semibold text-foreground">{item.label}</p>
              <p className="mt-2 text-sm text-muted break-keep">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 도입 사례 Placeholder */}
      <Section>
        <SectionHeader label="도입 사례" title="이미 많은 기업이 함께하고 있습니다" />
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {[
            { type: "MCN 기획사", desc: "소속 크리에이터 50명의 영상을 월 200편 이상 번역" },
            { type: "OTT 플랫폼", desc: "오리지널 시리즈 10개 언어 동시 자막 제작" },
          ].map((cs) => (
            <div key={cs.type} className="overflow-hidden rounded-2xl border border-border bg-white">
              <div className="flex h-48 items-center justify-center bg-surface">
                <div className="text-center text-muted">
                  <Building2 className="mx-auto mb-2 h-10 w-10 text-border" />
                  <p className="text-xs">도입 사례 이미지</p>
                  <p className="text-[10px]">(이미지 준비 중)</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold text-primary">{cs.type}</p>
                <p className="mt-2 text-sm text-muted break-keep">{cs.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 비디오 Placeholder */}
      <Section className="bg-surface">
        <SectionHeader label="소개 영상" title="컨텐츠플라이 비즈니스 소개" />
        <div className="mx-auto max-w-3xl">
          <div className="flex aspect-video items-center justify-center rounded-2xl border border-border bg-white">
            <div className="text-center text-muted">
              <Play className="mx-auto mb-3 h-16 w-16 text-border" />
              <p className="text-sm font-semibold">비즈니스 소개 영상</p>
              <p className="mt-1 text-xs">(영상 준비 중)</p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-navy text-white">
        <div className="text-center">
          <h2 className="text-[length:var(--font-size-section-h2)] font-bold">비즈니스 상담을 시작하세요</h2>
          <p className="mt-4 text-lg text-white/80">전담 매니저가 귀사에 맞는 맞춤 솔루션을 제안합니다.</p>
          <div className="mt-3 text-sm text-white/60">비즈니스 문의: partnership@nililia.com · 070-5227-1571</div>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/contact" className="bg-white text-navy hover:bg-white/90">비즈니스 문의하기</Button>
            <Button href="/pricing" className="bg-primary text-white hover:bg-primary-dark">가격 비교표 보기</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
