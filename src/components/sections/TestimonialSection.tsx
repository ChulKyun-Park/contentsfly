"use client";

import { useRef, useEffect, useState } from "react";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "김지현",
    role: "유튜브 크리에이터 · 먹방 채널",
    content:
      "초월번역이라는 말이 과장이 아니었어요. 제 유머 코드를 완벽하게 살려줘서 해외 구독자 댓글이 폭발했습니다. 영어 자막 적용 후 해외 조회수가 300% 증가했어요.",
    rating: 5,
  },
  {
    name: "이승호",
    role: "콘텐츠 디렉터 · ABC Entertainment",
    content:
      "24시간 내 납품 약속을 정말 지키더라고요. 긴급 프로젝트에서 큰 도움이 되었고, 품질도 일관되게 유지되어 신뢰할 수 있었습니다.",
    rating: 5,
  },
  {
    name: "박수진",
    role: "채널 매니저 · 글로벌 MCN",
    content:
      "위키사전 덕분에 50개 이상 채널의 톤이 일관되게 유지됩니다. 구독자 반응이 눈에 띄게 좋아졌고, 관리 리소스도 줄었어요.",
    rating: 5,
  },
  {
    name: "최민준",
    role: "마케팅 팀장 · 테크 스타트업",
    content:
      "제품 소개 영상 10개 언어 동시 번역을 맡겼는데, 각 언어별로 현지 맥락을 살려서 번역해주셔서 글로벌 런칭에 큰 힘이 되었습니다.",
    rating: 5,
  },
  {
    name: "정하은",
    role: "유튜브 크리에이터 · 뷰티 채널",
    content:
      "다른 번역 서비스 3곳을 거쳐 왔는데, 컨텐츠플라이가 확실히 다릅니다. 제품명이나 성분명 같은 전문 용어도 정확하게 처리해줘요.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "VP of Content · Global Media Corp",
    content:
      "We've been using ContentsFly for our Korean-to-English translations for over a year. The quality is exceptional, and their wiki system ensures brand consistency across all our channels.",
    rating: 5,
  },
] as const;

export default function TestimonialSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animId: number;
    let scrollPos = 0;

    function tick() {
      if (!isPaused && el) {
        scrollPos += 0.5;
        if (scrollPos >= el.scrollWidth / 2) scrollPos = 0;
        el.scrollLeft = scrollPos;
      }
      animId = requestAnimationFrame(tick);
    }
    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, [isPaused]);

  const doubled = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <Section>
      <SectionHeader
        label="고객 후기"
        title="1,300여 고객이 검증한 번역 품질"
      />

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {doubled.map((t, i) => (
          <div
            key={`${t.name}-${i}`}
            className="w-[340px] shrink-0 rounded-2xl border border-border bg-white p-6 sm:w-[380px]"
          >
            <div className="flex gap-0.5">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-foreground break-keep">
              &ldquo;{t.content}&rdquo;
            </p>
            <div className="mt-4 border-t border-border pt-4">
              <p className="text-sm font-semibold text-foreground">{t.name}</p>
              <p className="text-xs text-muted">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
