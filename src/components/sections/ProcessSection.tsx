import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import ProcessStep from "@/components/ui/ProcessStep";
import { PROCESS_STEPS } from "@/lib/constants";

export default function ProcessSection() {
  return (
    <Section className="bg-surface">
      <SectionHeader
        label="작업 프로세스"
        title="5단계 전문 프로세스"
      />

      <div className="flex flex-col lg:flex-row lg:gap-8">
        {PROCESS_STEPS.map((s, i) => (
          <ProcessStep
            key={s.step}
            step={s.step}
            title={s.title}
            description={s.description}
            isLast={i === PROCESS_STEPS.length - 1}
          />
        ))}
      </div>
    </Section>
  );
}
