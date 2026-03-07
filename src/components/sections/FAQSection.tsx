"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { FAQ_ITEMS } from "@/lib/constants";

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-border">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-primary"
      >
        <span className="text-base font-semibold text-foreground sm:text-lg">
          {question}
        </span>
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 text-muted transition-transform duration-200",
            isOpen && "rotate-180 text-primary",
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-200",
          isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <p className="text-sm leading-relaxed text-muted sm:text-base">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section>
      <SectionHeader label="자주 묻는 질문" title="궁금한 점이 있으신가요?" />

      <div className="mx-auto max-w-3xl">
        {FAQ_ITEMS.map((item, i) => (
          <AccordionItem
            key={item.question}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </div>
    </Section>
  );
}
