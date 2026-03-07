"use client";

import { useAuth } from "@/components/auth/AuthProvider";
import Button from "@/components/ui/Button";

export default function CTABandSection() {
  const { isLoggedIn, openLogin } = useAuth();

  return (
    <section className="relative overflow-hidden bg-navy py-24">
      {/* Subtle pattern overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
          {/* Left column */}
          <div className="lg:max-w-lg">
            <h2 className="text-[length:var(--font-size-section-h2)] font-bold tracking-tight text-white break-keep">
              지금 바로 시작하세요
            </h2>
            <p className="mt-4 text-[length:var(--font-size-section-body)] text-white/80 break-keep">
              번역 전문가가 당신의 콘텐츠를 전 세계에 전달합니다.
            </p>
            <div className="mt-8">
              {isLoggedIn ? (
                <Button
                  href="/cf/list"
                  className="bg-white text-navy hover:bg-white/90"
                >
                  요청하기
                </Button>
              ) : (
                <Button
                  onClick={openLogin}
                  className="bg-white text-navy hover:bg-white/90"
                >
                  시작하기
                </Button>
              )}
            </div>
          </div>

          {/* Right column */}
          <div className="lg:max-w-md">
            <h3 className="text-[length:var(--font-size-card-title)] font-semibold text-white">
              기업 고객이신가요?
            </h3>
            <p className="mt-2 text-[length:var(--font-size-section-body)] text-white/80 break-keep">
              전담 매니저가 맞춤 솔루션을 제안합니다.
            </p>
            <div className="mt-6">
              <Button
                href="/business"
                className="bg-primary text-white hover:bg-primary-dark"
              >
                비즈니스 문의
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
