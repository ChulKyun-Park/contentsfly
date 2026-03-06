import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import TestimonialCard from "@/components/ui/TestimonialCard";

const TESTIMONIALS = [
  {
    name: "김지현",
    role: "크리에이터",
    content:
      "초월번역이라는 말이 과장이 아니었어요. 제 유머 코드를 완벽하게 살려줬습니다.",
  },
  {
    name: "이승호",
    role: "ABC Entertainment",
    content:
      "24시간 내 납품 약속을 정말 지키더라고요. 긴급 프로젝트에서 큰 도움이 되었습니다.",
  },
  {
    name: "박수진",
    role: "글로벌 MCN",
    content:
      "위키사전 덕분에 채널 톤이 일관되게 유지됩니다. 구독자 반응이 눈에 띄게 좋아졌어요.",
  },
] as const;

export default function TestimonialSection() {
  return (
    <Section>
      <SectionHeader
        label="고객 후기"
        title="고객이 직접 전하는 경험"
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <TestimonialCard
            key={t.name}
            name={t.name}
            role={t.role}
            content={t.content}
          />
        ))}
      </div>
    </Section>
  );
}
