import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { STATS, COMPANY_INFO } from "@/lib/constants";
import { Target, Heart, Lightbulb, Users, MapPin, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "회사 소개 | 컨텐츠플라이",
  description: "컨텐츠플라이는 영상 번역 전문 플랫폼입니다. 크리에이터와 기업의 글로벌 진출을 지원합니다.",
};

const VALUES = [
  { icon: Target, title: "초월번역", desc: "단순 번역을 넘어, 문화와 맥락을 살린 현지화로 콘텐츠의 가치를 극대화합니다." },
  { icon: Heart, title: "크리에이터 중심", desc: "크리에이터의 톤과 개성을 이해하고, 그것을 다른 언어에서도 살려냅니다." },
  { icon: Lightbulb, title: "기술 × 전문성", desc: "체계적 TMS 워크플로우와 전문 번역가의 결합으로 효율과 품질을 동시에 추구합니다." },
  { icon: Users, title: "신뢰와 파트너십", desc: "일회성 거래가 아닌, 장기적 파트너십으로 함께 성장합니다." },
];

const MILESTONES = [
  { year: "2016", title: "닐리리아 설립", desc: "영상 번역 전문 기업으로 시작" },
  { year: "2018", title: "컨텐츠플라이 런칭", desc: "크리에이터 전용 자막 번역 플랫폼 오픈" },
  { year: "2020", title: "기업 서비스 확장", desc: "MCN, 방송사, OTT 대상 B2B 서비스 시작" },
  { year: "2022", title: "누적 1억 단어 돌파", desc: "번역 누적량 1억 단어 달성" },
  { year: "2024", title: "TMS 도입", desc: "자체 번역관리시스템(TMS) 도입으로 워크플로우 체계화" },
  { year: "2026", title: "AI 번역 준비", desc: "AI 번역·더빙 서비스 개발 및 플랫폼 리뉴얼" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="회사 소개"
        title="영상이 세계와 만나는 가장 빠른 길"
        description="컨텐츠플라이는 크리에이터와 기업의 콘텐츠가 언어의 장벽 없이 전 세계에 전달되도록 돕습니다."
      />

      {/* 미션 */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[length:var(--font-size-section-h2)] font-bold text-foreground break-keep">
            &ldquo;모든 콘텐츠에는 세계와 만날 자격이 있습니다&rdquo;
          </h2>
          <p className="mt-6 text-[length:var(--font-size-section-body)] leading-relaxed text-muted break-keep">
            우리는 단순히 언어를 바꾸는 것이 아니라, 콘텐츠의 매력과 맥락을 다른 문화권에 온전히 전달하는 것을 목표로 합니다.
            &lsquo;초월번역&rsquo;이라는 철학 아래, 크리에이터의 유머, 브랜드의 메시지, 콘텐츠의 감성이 번역 후에도 그대로 살아 숨 쉴 수 있도록 합니다.
          </p>
        </div>
      </Section>

      {/* 수치 */}
      <Section className="bg-surface">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold text-primary">{stat.value}</div>
              <div className="mt-2 text-sm text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* 핵심 가치 */}
      <Section>
        <SectionHeader label="핵심 가치" title="우리가 일하는 방식" />
        <div className="grid gap-8 md:grid-cols-2">
          {VALUES.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-light">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">{title}</h3>
                <p className="mt-1 text-sm text-muted break-keep">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 연혁 */}
      <Section className="bg-surface">
        <SectionHeader label="연혁" title="함께 걸어온 길" />
        <div className="mx-auto max-w-2xl">
          {MILESTONES.map((m, i) => (
            <div key={m.year} className="relative flex gap-6 pb-8">
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy text-xs font-bold text-white">
                  {m.year.slice(2)}
                </div>
                {i < MILESTONES.length - 1 && <div className="mt-2 h-full w-px bg-border" />}
              </div>
              <div className="pt-1">
                <div className="text-xs font-semibold text-primary">{m.year}</div>
                <h4 className="mt-1 font-semibold text-foreground">{m.title}</h4>
                <p className="mt-0.5 text-sm text-muted">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 회사 정보 */}
      <Section>
        <SectionHeader label="회사 정보" title="오시는 길" />
        <div className="mx-auto max-w-2xl space-y-4">
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <div>
              <p className="font-medium text-foreground">{COMPANY_INFO.name}</p>
              <p className="text-sm text-muted">{COMPANY_INFO.address}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 shrink-0 text-primary" />
            <a href={`tel:${COMPANY_INFO.phone}`} className="text-foreground hover:text-primary">{COMPANY_INFO.phone}</a>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 shrink-0 text-primary" />
            <a href={`mailto:${COMPANY_INFO.emails.translation}`} className="text-foreground hover:text-primary">{COMPANY_INFO.emails.translation}</a>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-navy text-white">
        <div className="text-center">
          <h2 className="text-[length:var(--font-size-section-h2)] font-bold">함께 시작하세요</h2>
          <p className="mt-4 text-lg text-white/80">컨텐츠플라이와 함께 글로벌 콘텐츠 시장에 도전하세요.</p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/contact" className="bg-white text-navy hover:bg-white/90">문의하기</Button>
            <Button href="/plan" className="bg-primary text-white hover:bg-primary-dark">번역 플랜 보기</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
