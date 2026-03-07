import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import { Sparkles, Globe, Zap, Volume2, Languages, Clock, Play, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "AI 번역·더빙 | 컨텐츠플라이",
  description: "AI 기반 자동 번역과 더빙 서비스를 준비하고 있습니다. 사전 알림을 신청하세요.",
};

const UPCOMING_FEATURES = [
  { icon: Languages, title: "140+ 언어쌍", desc: "전 세계 140개 이상 언어쌍을 지원하는 AI 자동 번역" },
  { icon: Volume2, title: "AI 더빙", desc: "원본 음성의 톤과 감정을 재현하는 AI 음성 합성 더빙" },
  { icon: Zap, title: "즉시 처리", desc: "업로드 후 수 분 내 번역 결과를 확인할 수 있는 속도" },
  { icon: Clock, title: "24/7 이용", desc: "시간 제한 없이 언제든 이용 가능한 셀프서비스" },
  { icon: Globe, title: "글로벌 커버리지", desc: "주요 언어뿐 아니라 소수 언어까지 폭넓게 지원" },
  { icon: Sparkles, title: "전문가 하이브리드", desc: "AI 번역 + 전문가 후편집(MTPE)으로 품질을 보장" },
];

export default function AIPage() {
  return (
    <>
      <PageHero
        label="AI 번역·더빙"
        title="AI가 만드는 새로운 번역 경험"
        description="컨텐츠플라이가 AI 기반 자동 번역과 더빙 서비스를 준비하고 있습니다."
      />

      {/* Coming Soon */}
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-accent-light px-6 py-3 text-sm font-semibold text-accent">
            <Sparkles className="h-4 w-4" />
            Coming Soon
          </div>
          <h2 className="text-[length:var(--font-size-section-h2)] font-bold text-foreground break-keep">
            더 빠르고, 더 저렴한<br />AI 번역을 곧 만나보세요
          </h2>
          <p className="mt-4 text-[length:var(--font-size-section-body)] text-muted break-keep">
            전문가 번역의 품질을 기반으로, AI 기술을 결합한 새로운 번역 서비스를 개발 중입니다.
            출시 알림을 신청하시면 가장 먼저 소식을 전해 드립니다.
          </p>
        </div>
      </Section>

      {/* 데모 영상 Placeholder */}
      <Section className="bg-surface">
        <SectionHeader label="미리보기" title="AI 번역·더빙은 이렇게 동작합니다" />
        <div className="mx-auto max-w-3xl">
          <div className="flex aspect-video items-center justify-center rounded-2xl border border-border bg-white">
            <div className="text-center text-muted">
              <Play className="mx-auto mb-3 h-16 w-16 text-border" />
              <p className="text-sm font-semibold">AI 번역·더빙 데모 영상</p>
              <p className="mt-1 text-xs">(영상 준비 중)</p>
            </div>
          </div>
        </div>
      </Section>

      {/* 예정 기능 */}
      <Section>
        <SectionHeader label="예정 기능" title="AI가 할 수 있는 것들" description="전문가 번역의 품질을 기반으로, AI 기술을 결합합니다." />
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {UPCOMING_FEATURES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-xl border border-border bg-white p-5 opacity-80">
                <Icon className="mb-3 h-8 w-8 text-primary/60" />
                <h4 className="font-semibold text-foreground">{title}</h4>
                <p className="mt-1 text-sm text-muted break-keep">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* AI vs 전문가 비교 */}
      <Section className="bg-surface">
        <SectionHeader label="서비스 비교" title="AI 번역 vs 전문가 번역" description="프로젝트 특성에 맞는 최적의 방법을 선택하세요." />
        <div className="mx-auto max-w-3xl">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-white p-6">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-light px-4 py-1.5 text-sm font-semibold text-primary">
                <Sparkles className="h-4 w-4" />
                AI 번역
              </div>
              <ul className="space-y-3 text-sm text-muted">
                <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#10003;</span> 140+ 언어 즉시 지원</li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#10003;</span> 업로드 후 수 분 내 완료</li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#10003;</span> 1,000원/분의 합리적 가격</li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#10003;</span> 24/7 셀프서비스</li>
              </ul>
              <p className="mt-4 text-xs text-muted">대량 콘텐츠, 빠른 출시, 비용 절감이 중요할 때</p>
            </div>
            <div className="rounded-2xl border border-primary bg-white p-6 shadow-md">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-navy px-4 py-1.5 text-sm font-semibold text-white">
                <Globe className="h-4 w-4" />
                전문가 번역
              </div>
              <ul className="space-y-3 text-sm text-muted">
                <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#10003;</span> 맥락과 문화 반영 초월번역</li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#10003;</span> 전담 매니저 + 위키사전</li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#10003;</span> 시청자 반응 피드백 반영</li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#10003;</span> 크리에이터 톤 완벽 보존</li>
              </ul>
              <p className="mt-4 text-xs text-muted">브랜드 일관성, 고품질, 깊은 현지화가 중요할 때</p>
              <a href="/plan" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
                전문가 번역 자세히 보기 <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA — 알림 신청 */}
      <Section className="bg-navy text-white">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-[length:var(--font-size-section-h2)] font-bold">출시 알림 신청</h2>
          <p className="mt-4 text-lg text-white/80">AI 번역·더빙 서비스가 출시되면 가장 먼저 알려드립니다.</p>
          <div className="mt-8">
            <Button href="/contact" className="bg-white text-navy hover:bg-white/90">알림 신청하기</Button>
          </div>
          <p className="mt-6 text-sm text-white/50">
            현재 전문가 번역 서비스는 정상 운영 중입니다.{" "}
            <a href="/plan" className="underline underline-offset-2 hover:text-white/80">번역 플랜 보기 →</a>
          </p>
        </div>
      </Section>
    </>
  );
}
