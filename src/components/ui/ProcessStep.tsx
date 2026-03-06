import { cn } from "@/lib/utils";

interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
  isLast?: boolean;
}

export default function ProcessStep({ step, title, description, isLast }: ProcessStepProps) {
  return (
    <div className="flex gap-4 lg:flex-col lg:items-center lg:text-center">
      <div className="flex flex-col items-center">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
          {step}
        </div>
        {!isLast && <div className="mt-2 h-full w-px bg-border lg:hidden" />}
      </div>
      <div className="pb-8 lg:pb-0">
        <h4 className="font-semibold text-foreground">{title}</h4>
        <p className="mt-1 text-sm text-muted break-keep">{description}</p>
      </div>
    </div>
  );
}
