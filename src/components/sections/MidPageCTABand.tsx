"use client";

import { useAuth } from "@/components/auth/AuthProvider";
import Button from "@/components/ui/Button";

export default function MidPageCTABand() {
  const { isLoggedIn, openLogin } = useAuth();

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary to-primary-dark py-16">
      {/* Decorative circles */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/5" />
      <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/5" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-2xl font-bold text-white sm:text-3xl break-keep">
          지금 시작하면, 내일 전 세계가 당신의 콘텐츠를 봅니다
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/80 break-keep">
          1,300여 크리에이터와 기업이 컨텐츠플라이와 함께 글로벌 시장에 진출했습니다.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {isLoggedIn ? (
            <Button
              href="/cf/list"
              className="bg-white px-8 py-3 text-primary hover:bg-white/90"
            >
              요청하기
            </Button>
          ) : (
            <Button
              onClick={openLogin}
              className="bg-white px-8 py-3 text-primary hover:bg-white/90"
            >
              무료로 시작하기
            </Button>
          )}
          <Button
            href="/pricing"
            className="border-2 border-white px-8 py-3 text-white hover:bg-white/10"
          >
            가격 확인하기
          </Button>
        </div>
      </div>
    </section>
  );
}
