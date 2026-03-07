import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { Check, Users, Zap, Tag, CalendarClock, LayoutDashboard } from "lucide-react";

export const metadata: Metadata = {
  title: "파트너십 제휴 | 컨텐츠플라이",
  description: "MCN · 기획사 · 방송사를 위한 파트너십 제휴 프로그램. 20% 할인, 우선 스케줄링, 마스터 시스템으로 다수 채널을 효율적으로 관리하세요.",
};

const BENEFITS = [
  {
    icon: Tag,
    title: "20% 파트너 할인",
    desc: "파트너 제휴사는 모든 서비스에 20% 할인이 적용됩니다. 바이럴 프로모션과 중복 적용 가능합니다.",
  },
  {
    icon: Zap,
    title: "2영업일 내 납품 보장",
    desc: "100% 핸드메이드 고퀄리티 자막을 최대 2영업일 내 납품합니다. 긴급 요청도 유연하게 대응합니다.",
  },
  {
    icon: CalendarClock,
    title: "우선 스케줄링",
    desc: "파트너 제휴사의 요청은 일반 주문보다 항상 우선 처리됩니다. 대기 시간 없이 빠르게 작업이 시작됩니다.",
  },
  {
    icon: Users,
    title: "전담 매니저 배정",
    desc: "제휴사마다 전담 매니저가 배정되어 프로젝트 전반을 관리합니다. 원활한 커뮤니케이션을 보장합니다.",
  },
  {
    icon: LayoutDashboard,
    title: "마스터 시스템",
    desc: "다수 크리에이터를 하나의 마스터 계정으로 관리합니다. 개별 크리에이터 계정, 이용 현황, 정산을 한눈에 확인하세요.",
  },
  {
    icon: Check,
    title: "결과물 자동 적용 지원",
    desc: "각 언어별 제목·설명·CC자막을 일일이 적용할 필요 없이, 파트너십 제휴사 전용 자동 적용 기능을 지원합니다.",
  },
];

const TARGETS = [
  "MCN 기획사 · 매니지먼트",
  "방송사 · OTT 플랫폼",
  "대형 유튜브 채널 (다수 크리에이터 보유)",
  "글로벌 콘텐츠 에이전시",
  "월 30건 이상 정기 번역이 필요한 기업",
];

const PROCESS = [
  { step: "01", title: "제휴 문의", desc: "이메일 또는 전화로 파트너십 제휴를 문의합니다." },
  { step: "02", title: "상담 및 견적", desc: "프로젝트 규모와 요구사항을 파악하고 맞춤 견적을 제공합니다." },
  { step: "03", title: "계약 및 온보딩", desc: "제휴 계약 체결 후 마스터 계정 세팅, 전담 매니저를 배정합니다." },
  { step: "04", title: "운영 시작", desc: "크리에이터별 위키사전 구축, 자동 주문 시스템으로 안정적으로 운영합니다." },
];

export default function PartnershipPage() {
  return (
    <>
      <PageHero
        label="파트너십 제휴"
        title="MCN · 기획사를 위한 파트너십 프로그램"
        description="영상의 맛과 향을 살리는 몰입도 높은 고퀄리티 자막, 합리적인 가격. 이미 수많은 제휴사가 컨텐츠플라이 파트너십으로 글로벌 성장을 경험하고 있습니다."
      />

      {/* 파트너 혜택 */}
      <Section>
        <SectionHeader label="파트너 혜택" title="제휴사 전용 프리미엄 혜택" description="파트너십 제휴사에게만 제공되는 특별한 혜택입니다." />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex flex-col rounded-2xl border border-border bg-white p-6 transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground">{title}</h3>
              <p className="mt-2 flex-1 text-sm text-muted break-keep">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 마스터 시스템 */}
      <Section className="bg-surface">
        <SectionHeader label="마스터 시스템" title="다수 채널을 하나로 관리" description="MCN · 기획사를 위한 통합 관리 시스템입니다." />
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-border bg-white p-8">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <h4 className="font-semibold text-foreground">공용 포인트 계정</h4>
                <p className="mt-1 text-sm text-muted break-keep">개별 크리에이터마다 따로 결제할 필요 없이, 공용 포인트 계정으로 통합 정산합니다. 충전 시 세금계산서가 발행됩니다.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">개별 크리에이터 계정</h4>
                <p className="mt-1 text-sm text-muted break-keep">소속 크리에이터마다 개별 계정이 부여되어 각자의 위키사전, 주문 이력, 피드백을 독립적으로 관리합니다.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">대시보드 모니터링</h4>
                <p className="mt-1 text-sm text-muted break-keep">모든 소속 크리에이터의 번역 진행 현황, 이용량, 비용을 마스터 대시보드에서 실시간으로 확인합니다.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">후불 정산</h4>
                <p className="mt-1 text-sm text-muted break-keep">월 30건 이상 정기 의뢰 시, 선불 충전 없이 후불 정산으로 이용 가능합니다.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 대상 고객 */}
      <Section>
        <SectionHeader label="대상" title="이런 분들에게 추천합니다" />
        <div className="mx-auto max-w-2xl space-y-3">
          {TARGETS.map((target) => (
            <div key={target} className="flex items-center gap-3 rounded-xl border border-border bg-white p-4">
              <Check className="h-5 w-5 shrink-0 text-primary" />
              <span className="font-medium text-foreground">{target}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* 프로세스 */}
      <Section className="bg-surface">
        <SectionHeader label="진행 과정" title="파트너십 제휴 프로세스" />
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

      {/* CTA */}
      <Section className="bg-navy text-white">
        <div className="text-center">
          <h2 className="text-[length:var(--font-size-section-h2)] font-bold">파트너십 제휴를 시작하세요</h2>
          <p className="mt-4 text-lg text-white/80">전담 매니저가 귀사에 맞는 최적의 제휴 조건을 제안합니다.</p>
          <div className="mt-3 text-sm text-white/60">제휴 문의: partnership@nililia.com · 070-5227-1571</div>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/contact" className="bg-white text-navy hover:bg-white/90">제휴 상담 신청</Button>
            <Button href="/plan" className="bg-primary text-white hover:bg-primary-dark">다른 서비스 보기</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
