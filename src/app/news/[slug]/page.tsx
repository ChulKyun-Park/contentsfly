import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { fetchNewsBySlug, fetchPageBlocks } from "@/lib/notion/client";
import BlockRenderer from "@/components/notion/BlockRenderer";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export const revalidate = 60;

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = await fetchNewsBySlug(slug);
  if (!item) return { title: "소식 | 컨텐츠플라이" };
  return {
    title: `${item.title} | 컨텐츠플라이`,
    description: item.excerpt || undefined,
  };
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = await fetchNewsBySlug(slug);
  if (!item) notFound();

  const blocks = await fetchPageBlocks(item.id);

  return (
    <>
      {/* 상단 네비게이션 */}
      <div className="bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <div className="py-4">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              소식 목록
            </Link>
          </div>
        </div>
      </div>

      {/* 헤더: 메타 + 제목 + 썸네일 */}
      <section className="bg-surface pb-12">
        <div className="mx-auto max-w-7xl px-6">
          {/* 메타 정보 */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {item.category && (
              <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {item.category}
              </span>
            )}
            {item.publishedAt && (
              <time className="text-sm text-muted">
                {new Date(item.publishedAt).toLocaleDateString("ko-KR")}
              </time>
            )}
            {item.author && (
              <span className="text-sm text-muted">&middot; {item.author}</span>
            )}
          </div>

          {/* 제목 */}
          <h1 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl break-keep">
            {item.title}
          </h1>

          {/* 태그 */}
          {item.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* 썸네일 */}
          {item.thumbnail && (
            <div className="mt-8 overflow-hidden rounded-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full object-cover"
              />
            </div>
          )}
        </div>
      </section>

      {/* 본문 */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 overflow-x-hidden">
          {blocks.length > 0 ? (
            <BlockRenderer blocks={blocks} />
          ) : (
            item.excerpt && (
              <p className="text-[length:var(--font-size-body)] leading-relaxed text-foreground break-keep">
                {item.excerpt}
              </p>
            )
          )}
        </div>
      </section>

      {/* CTA */}
      <Section className="bg-navy text-white">
        <div className="text-center">
          <h2 className="text-[length:var(--font-size-section-h2)] font-bold">궁금한 점이 있으신가요?</h2>
          <p className="mt-4 text-lg text-white/80">언제든 문의해 주세요. 빠르게 답변드리겠습니다.</p>
          <div className="mt-8">
            <Button href="/contact" className="bg-white text-navy hover:bg-white/90">문의하기</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
