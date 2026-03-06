import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

const MOCK_NEWS = [
  {
    date: "2026.03.01",
    title: "컨텐츠플라이 리뉴얼 오픈",
    description: "새로운 디자인과 기능으로 돌아왔습니다.",
  },
  {
    date: "2026.02.15",
    title: "AI 더빙 서비스 출시",
    description:
      "AI 기반 더빙 서비스를 새롭게 선보입니다. 자연스러운 음성으로 글로벌 시청자에게 다가가세요.",
  },
  {
    date: "2026.01.20",
    title: "파트너쉽 프로그램 확대",
    description:
      "MCN 및 엔터테인먼트 기업을 위한 전담 파트너쉽 프로그램을 확대합니다.",
  },
] as const;

export default function NewsSection() {
  return (
    <Section className="bg-surface">
      <SectionHeader label="소식" title="컨텐츠플라이 소식" />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {MOCK_NEWS.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-border bg-white p-6 transition-shadow hover:shadow-lg"
          >
            <p className="text-xs text-muted">{item.date}</p>
            <h3 className="mt-2 text-[length:var(--font-size-card-title)] font-semibold text-foreground">
              {item.title}
            </h3>
            <p className="mt-2 text-[length:var(--font-size-card-desc)] text-muted break-keep">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Button href="/news" variant="outline">
          더 보기 &rarr;
        </Button>
      </div>
    </Section>
  );
}
