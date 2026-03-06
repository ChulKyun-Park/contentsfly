"use client";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import StatCounter from "@/components/ui/StatCounter";
import { useAuth } from "@/components/auth/AuthProvider";
import { STATS } from "@/lib/constants";

export default function HeroSection() {
  const { isLoggedIn, openLogin } = useAuth();

  return (
    <section className="bg-hero-bg py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-[length:var(--font-size-hero-h1)] font-bold tracking-tight text-foreground break-keep">
            영상이 세계와 만나는 가장 빠른 길
          </h1>
          <p className="mt-6 text-[length:var(--font-size-hero-sub)] text-muted break-keep">
            전문가 번역부터 AI 번역·더빙까지, 크리에이터와 기업의 글로벌 진출을
            지원합니다.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {isLoggedIn ? (
              <Button href="/cf/list" variant="primary">
                요청하기
              </Button>
            ) : (
              <Button onClick={openLogin} variant="primary">
                시작하기
              </Button>
            )}
            <Button href="/business" variant="outline">
              비즈니스 문의
            </Button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {STATS.map((stat) => (
            <StatCounter key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </Container>
    </section>
  );
}
