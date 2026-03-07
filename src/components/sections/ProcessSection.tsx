import { ChevronRight, Upload, BookOpen, FileText, Globe, Send } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import ProcessStep from "@/components/ui/ProcessStep";
import { PROCESS_STEPS } from "@/lib/constants";

const STEP_ICONS = [Upload, BookOpen, FileText, Globe, Send];

export default function ProcessSection() {
  return (
    <Section className="bg-surface">
      <SectionHeader
        label="작업 프로세스"
        title="5단계 전문 프로세스"
        description="영상 업로드부터 납품까지, 체계적인 워크플로우로 최고 품질을 보장합니다."
      />

      <div className="flex flex-col lg:flex-row lg:items-start lg:gap-0">
        {PROCESS_STEPS.map((s, i) => {
          const Icon = STEP_ICONS[i];
          return (
            <div
              key={s.step}
              className="flex flex-1 items-start lg:flex-col lg:items-center"
            >
              <div className="flex flex-col lg:items-center">
                {/* Placeholder 이미지 — UI 스크린샷 */}
                <div className="mb-4 hidden w-full lg:block">
                  <div className="mx-auto flex h-32 w-full max-w-[180px] items-center justify-center rounded-xl border border-border bg-white">
                    <div className="text-center text-muted">
                      <Icon className="mx-auto mb-1 h-8 w-8 text-primary/30" />
                      <p className="text-[10px] text-muted/60">스크린샷</p>
                    </div>
                  </div>
                </div>
                <ProcessStep
                  step={s.step}
                  title={s.title}
                  description={s.description}
                  isLast={i === PROCESS_STEPS.length - 1}
                />
              </div>
              {/* Arrow connector (desktop only) */}
              {i < PROCESS_STEPS.length - 1 && (
                <div className="hidden shrink-0 pt-3 lg:flex lg:items-center lg:pt-20">
                  <ChevronRight className="h-5 w-5 text-primary/40" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
