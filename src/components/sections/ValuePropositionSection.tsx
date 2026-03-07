"use client";

import { useRef, useEffect, useState } from "react";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { ROI_METRICS, CREATOR_RESULTS } from "@/lib/constants";
import { TrendingUp, Globe, DollarSign, Heart, Users, Eye, Languages, ArrowUpRight } from "lucide-react";

const ICONS = [TrendingUp, Globe, DollarSign, Heart];

function AnimatedCounter({ value, inView }: { value: string; inView: boolean }) {
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!inView) return;

    const numMatch = value.match(/([\d.]+)/);
    if (!numMatch) {
      setDisplay(value);
      return;
    }

    const target = parseFloat(numMatch[1]);
    const prefix = value.slice(0, numMatch.index);
    const suffix = value.slice((numMatch.index ?? 0) + numMatch[1].length);
    const hasDecimal = numMatch[1].includes(".");

    let frame = 0;
    const totalFrames = 40;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;
      const formatted = hasDecimal ? current.toFixed(1) : Math.round(current).toString();
      setDisplay(`${prefix}${formatted}${suffix}`);
      if (frame >= totalFrames) clearInterval(timer);
    }, 30);

    return () => clearInterval(timer);
  }, [inView, value]);

  return <span>{display}</span>;
}

export default function ValuePropositionSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Section className="bg-navy text-white">
      <SectionHeader
        label="글로벌 성장 효과"
        title="번역이 만드는 비즈니스 임팩트"
        className="text-white [&_p]:text-white/60"
      />
      <p className="mx-auto -mt-6 mb-12 max-w-2xl text-center text-white/70 break-keep">
        해외 시청자 확대부터 광고 수익 증가까지, 현지화 번역이 가져오는 실질적인 성과를 확인하세요.
      </p>

      {/* ROI 지표 카운터 */}
      <div ref={ref} className="grid grid-cols-2 gap-6 lg:grid-cols-4">
        {ROI_METRICS.map((metric, i) => {
          const Icon = ICONS[i];
          return (
            <div
              key={metric.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <p className="text-3xl font-bold text-white sm:text-4xl">
                <AnimatedCounter value={metric.value} inView={inView} />
              </p>
              <p className="mt-2 text-sm text-white/60">{metric.label}</p>
            </div>
          );
        })}
      </div>

      {/* 크리에이터 성과 카드 */}
      <div className="mt-16">
        <h3 className="mb-8 text-center text-xl font-bold text-white">
          실제 크리에이터 성과
        </h3>
        <div className="grid gap-6 md:grid-cols-3">
          {CREATOR_RESULTS.map((creator) => (
            <div
              key={creator.name}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              {/* Placeholder 이미지 영역 — 구독자 성장 그래프 */}
              <div className="flex h-40 items-center justify-center bg-white/5">
                <div className="text-center text-white/30">
                  <TrendingUp className="mx-auto mb-2 h-10 w-10" />
                  <p className="text-xs">구독자 성장 그래프</p>
                  <p className="text-[10px]">(이미지 준비 중)</p>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-3 flex items-center gap-2">
                  <span className="rounded-full bg-primary/20 px-3 py-0.5 text-xs font-semibold text-primary">
                    {creator.category}
                  </span>
                  <span className="text-xs text-white/50">{creator.period}</span>
                </div>
                <h4 className="font-bold text-white">{creator.name}</h4>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-lg bg-white/5 p-3">
                    <div className="flex items-center gap-1 text-xs text-white/50">
                      <Users className="h-3 w-3" />
                      구독자 성장
                    </div>
                    <p className="mt-1 text-sm font-bold text-white">
                      {creator.beforeSubs} → {creator.afterSubs}
                    </p>
                    <p className="flex items-center gap-0.5 text-xs font-semibold text-green-400">
                      <ArrowUpRight className="h-3 w-3" />
                      {creator.growthRate}
                    </p>
                  </div>
                  <div className="rounded-lg bg-white/5 p-3">
                    <div className="flex items-center gap-1 text-xs text-white/50">
                      <Eye className="h-3 w-3" />
                      최다 조회수
                    </div>
                    <p className="mt-1 text-sm font-bold text-white">
                      {creator.maxViews}
                    </p>
                    <div className="flex items-center gap-0.5 text-xs text-white/50">
                      <Languages className="h-3 w-3" />
                      {creator.languages}개 언어
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
