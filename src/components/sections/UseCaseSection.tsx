import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { Youtube, Building2, GraduationCap, Film } from "lucide-react";

const USE_CASES = [
  {
    icon: Youtube,
    title: "유튜브 크리에이터",
    description: "채널 톤에 맞는 초월번역으로 해외 구독자를 확보하세요. 전담 위키사전이 일관된 자막 품질을 보장합니다.",
    features: ["위키사전 관리", "채널 톤 반영", "빠른 납품"],
    href: "/plan/subscription",
    ctaText: "구독형 서비스 보기",
  },
  {
    icon: Building2,
    title: "기업·브랜드",
    description: "글로벌 마케팅 영상, 교육 콘텐츠, IR 자료까지. 전담 매니저가 품질과 보안을 책임집니다.",
    features: ["전담 매니저", "NDA 보안", "대량 할인"],
    href: "/business",
    ctaText: "비즈니스 문의",
  },
  {
    icon: GraduationCap,
    title: "교육·강의",
    description: "강의 콘텐츠의 정확한 의미 전달이 핵심입니다. 전문 용어와 맥락을 살린 번역을 제공합니다.",
    features: ["전문 용어 관리", "정확한 맥락 전달", "배리어프리 지원"],
    href: "/plan/single",
    ctaText: "단건 주문하기",
  },
  {
    icon: Film,
    title: "MCN·프로덕션",
    description: "대량 콘텐츠를 체계적으로 관리합니다. TMS 기반 워크플로우로 진행 상황을 실시간 확인하세요.",
    features: ["TMS 워크플로우", "멀티 채널 관리", "실시간 진행 확인"],
    href: "/business",
    ctaText: "맞춤 견적 받기",
  },
];

export default function UseCaseSection() {
  return (
    <Section className="bg-surface">
      <SectionHeader
        label="콘텐츠별 추천"
        title="어떤 콘텐츠든, 최적의 솔루션"
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {USE_CASES.map((uc) => {
          const Icon = uc.icon;
          return (
            <div
              key={uc.title}
              className="flex flex-col rounded-2xl border border-border bg-white p-6 transition-shadow hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground">{uc.title}</h3>
              <p className="mt-2 flex-1 text-sm text-muted break-keep">
                {uc.description}
              </p>
              <ul className="mt-4 space-y-1">
                {uc.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                href={uc.href}
                variant="outline"
                className="mt-6 w-full justify-center text-sm"
              >
                {uc.ctaText}
              </Button>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
