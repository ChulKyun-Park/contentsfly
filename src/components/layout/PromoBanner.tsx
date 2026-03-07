"use client";

import { useState } from "react";
import { X, Zap, Gift } from "lucide-react";

const PROMOS = [
  {
    icon: Zap,
    text: "오전 11시 이전 요청 시 당일 완료",
    sub: "30분 영상 기준",
  },
  {
    icon: Gift,
    text: "신규 가입 시 5만원 쿠폰 증정",
    sub: "지금 시작하세요",
  },
];

export default function PromoBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative z-[60] bg-navy text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-6 px-6 py-2 text-sm sm:gap-10">
        {PROMOS.map((promo) => (
          <span key={promo.text} className="flex items-center gap-1.5">
            <promo.icon className="h-3.5 w-3.5 shrink-0 text-accent" />
            <span className="font-semibold">{promo.text}</span>
            <span className="hidden text-white/60 sm:inline">· {promo.sub}</span>
          </span>
        ))}
      </div>
      <button
        type="button"
        onClick={() => setVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-1 text-white/60 transition-colors hover:text-white"
        aria-label="닫기"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
