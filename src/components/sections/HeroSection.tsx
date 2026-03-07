"use client";

import { Play } from "lucide-react";
import Button from "@/components/ui/Button";
import { useAuth } from "@/components/auth/AuthProvider";

export default function HeroSection() {
  const { isLoggedIn, openLogin } = useAuth();

  return (
    <section className="relative flex min-h-[600px] items-center overflow-hidden sm:min-h-[700px] lg:min-h-[80vh]">
      {/* Video placeholder background (full-bleed) */}
      <div className="absolute inset-0 bg-navy">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/90 to-primary/20" />

        {/* Play icon hint */}
        <div className="absolute right-8 top-8 flex items-center gap-2 opacity-30 sm:right-12 sm:top-12">
          <Play className="h-5 w-5 fill-white text-white" />
          <span className="text-xs text-white">VIDEO PLACEHOLDER</span>
        </div>

        {/* Decorative dot */}
        <div className="absolute bottom-6 left-6 flex items-center gap-2">
          <div className="h-2 w-2 animate-pulse rounded-full bg-red-400" />
          <span className="text-xs text-white/40">COMING SOON</span>
        </div>
      </div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content overlay */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-[length:var(--font-size-hero-h1)] font-bold leading-[1.15] tracking-tight text-white break-keep">
            영상이 세계와 만나는
            <br />
            가장 빠른 길
          </h1>
          <p className="mt-6 text-[length:var(--font-size-hero-sub)] leading-relaxed text-white/80 break-keep">
            휴먼터치 번역부터 AI 번역·더빙까지,
            <br className="hidden sm:block" />
            크리에이터와 기업의 글로벌 진출을 지원합니다.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {isLoggedIn ? (
              <Button
                href="/cf/list"
                className="bg-white px-8 py-3 text-navy hover:bg-white/90"
              >
                요청하기
              </Button>
            ) : (
              <Button
                onClick={openLogin}
                className="bg-white px-8 py-3 text-navy hover:bg-white/90"
              >
                시작하기
              </Button>
            )}
            <Button
              href="/business"
              className="bg-primary px-8 py-3 text-white hover:bg-primary-dark"
            >
              비즈니스 문의
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
