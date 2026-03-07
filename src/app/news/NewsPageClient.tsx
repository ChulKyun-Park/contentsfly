"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import type { NotionNewsItem } from "@/types/notion";

/* ── 상수 ── */
const FIXED_CATEGORIES = ["업계 동향", "회사 소식", "로컬리제이션 팁", "번역 기술", "파트너십", "미디어/인터뷰", "이벤트"] as const;
const ITEMS_PER_PAGE = 10;

/* ── 더미 데이터 (Notion 미연동 시 폴백) ── */
const FALLBACK_NEWS: NewsItem[] = [
  {
    slug: "ai-translation-roadmap-2026",
    title: "컨텐츠플라이, 2026년 AI 번역 품질 혁신 로드맵 공개",
    excerpt: "자체 개발 AI 엔진과 전문 번역가의 협업을 통해 OTT, 게임, 웹소설 등 다양한 콘텐츠 분야에서 번역 품질을 한 단계 끌어올릴 계획입니다.",
    date: "2026-03-05",
    category: "회사 소식",
    pinned: true,
    thumbnail: null,
    eventStatus: null,
    eventEndDate: null,
  },
  {
    slug: "k-content-localization-key",
    title: "K-콘텐츠 글로벌 진출, 로컬리제이션이 핵심이다",
    excerpt: "K-드라마, K-웹툰, K-게임의 글로벌 인기가 지속되는 가운데, 성공적인 해외 진출의 핵심 요소로 '로컬리제이션'이 주목받고 있습니다.",
    date: "2026-03-01",
    category: "업계 동향",
    pinned: true,
    thumbnail: null,
    eventStatus: null,
    eventEndDate: null,
  },
  {
    slug: "ott-subtitle-quality-matters",
    title: "OTT 자막 품질, 시청자 경험을 좌우하는 숨은 요소",
    excerpt: "글로벌 OTT 시장이 성장하면서 자막 품질에 대한 시청자 기대치도 높아지고 있습니다.",
    date: "2026-02-25",
    category: "업계 동향",
    pinned: true,
    thumbnail: null,
    eventStatus: null,
    eventEndDate: null,
  },
  {
    slug: "game-localization-trends-2026",
    title: "게임 로컬리제이션 트렌드 2026: 몰입감을 높이는 번역 전략",
    excerpt: "2026년 게임 로컬리제이션의 최신 트렌드를 분석합니다. AI 활용, 보이스 더빙 확대, 문화 적응형 콘텐츠 등.",
    date: "2026-02-20",
    category: "번역 기술",
    pinned: false,
    thumbnail: null,
    eventStatus: null,
    eventEndDate: null,
  },
  {
    slug: "webtoon-webnovel-translation-ai-limits",
    title: "웹소설·웹툰 번역, AI만으로는 부족한 이유",
    excerpt: "웹소설과 웹툰의 해외 시장이 급성장하면서 번역 수요도 폭발적으로 늘고 있습니다.",
    date: "2026-02-15",
    category: "로컬리제이션 팁",
    pinned: false,
    thumbnail: null,
    eventStatus: null,
    eventEndDate: null,
  },
];

/* ── 타입 ── */
type NewsItem = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  pinned: boolean;
  thumbnail: string | null;
  eventStatus: string | null;
  eventEndDate: string | null;
};

type SortKey = "latest";
type EventFilter = "전체" | "진행중" | "종료";

/* ── 유틸 ── */
function notionToNewsItem(item: NotionNewsItem): NewsItem {
  return {
    slug: item.slug,
    title: item.title,
    excerpt: item.excerpt,
    date: item.publishedAt,
    category: item.category,
    pinned: item.pinned,
    thumbnail: item.thumbnail,
    eventStatus: item.eventStatus,
    eventEndDate: item.eventEndDate,
  };
}

function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  return dateStr.replace(/-/g, ".");
}

function getDaysLeft(endDate: string | null): number | null {
  if (!endDate) return null;
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const end = new Date(endDate);
  end.setHours(0, 0, 0, 0);
  return Math.ceil((end.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
}

function getDdayColor(daysLeft: number): string {
  if (daysLeft <= 3) return "bg-red-500 text-white";
  if (daysLeft <= 7) return "bg-orange-500 text-white";
  return "bg-emerald-500 text-white";
}

/* ── 컴포넌트 ── */
type Props = {
  serverNews?: NotionNewsItem[];
};

export default function NewsPageClient({ serverNews }: Props) {
  const allItems: NewsItem[] = useMemo(() => {
    if (serverNews && serverNews.length > 0) {
      return serverNews.map(notionToNewsItem);
    }
    return FALLBACK_NEWS;
  }, [serverNews]);

  /* 카테고리 (이벤트는 항상 전체 바로 뒤 첫 번째) */
  const categories = useMemo(() => {
    const set = new Set(allItems.map((i) => i.category).filter(Boolean));
    const ordered = FIXED_CATEGORIES.filter((c) => c !== "이벤트" && set.has(c));
    set.forEach((c) => { if (c !== "이벤트" && !ordered.includes(c as typeof ordered[number])) ordered.push(c as typeof ordered[number]); });
    return ["전체", "이벤트", ...ordered] as string[];
  }, [allItems]);

  const [activeCategory, setActiveCategory] = useState("전체");
  const [sortBy] = useState<SortKey>("latest");
  const [searchQuery, setSearchQuery] = useState("");
  const [eventFilter, setEventFilter] = useState<EventFilter>("전체");
  const [currentPage, setCurrentPage] = useState(1);

  const isEventCategory = activeCategory === "이벤트";

  const bestItems = allItems.filter((item) => item.pinned && item.category !== "이벤트").slice(0, 5);

  const filteredItems = useMemo(() => {
    let items = allItems.filter((item) => {
      const matchCategory = activeCategory === "전체" || item.category === activeCategory;
      const matchSearch =
        !searchQuery ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

      let matchEventFilter = true;
      if (isEventCategory && item.category === "이벤트" && eventFilter !== "전체") {
        matchEventFilter = item.eventStatus === eventFilter;
      }

      return matchCategory && matchSearch && matchEventFilter;
    });

    items = [...items].sort((a, b) => b.date.localeCompare(a.date));
    return items;
  }, [allItems, activeCategory, sortBy, searchQuery, eventFilter, isEventCategory]);

  /* 페이지네이션 */
  const totalPages = Math.max(1, Math.ceil(filteredItems.length / ITEMS_PER_PAGE));
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const pagedItems = filteredItems.slice(
    (safeCurrentPage - 1) * ITEMS_PER_PAGE,
    safeCurrentPage * ITEMS_PER_PAGE,
  );

  /* 카테고리/검색 변경 시 페이지 리셋 */
  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1);
    if (cat === "이벤트") setEventFilter("전체");
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const handleEventFilterChange = (filter: EventFilter) => {
    setEventFilter(filter);
    setCurrentPage(1);
  };

  return (
    <>
      {/* Best 섹션 */}
      {bestItems.length > 0 && (
        <section className="bg-white py-12 lg:py-16">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-xl font-bold text-foreground sm:text-2xl">Best</h2>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {bestItems.map((item) => (
                <Link key={item.slug} href={`/news/${item.slug}`}>
                  <article className="group relative overflow-hidden rounded-xl bg-[#F8FBFF] p-4 transition-shadow hover:shadow-lg">
                    <span className="inline-block rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
                      {item.category}
                    </span>
                    <h3 className="mt-3 text-sm font-bold leading-snug text-foreground break-keep group-hover:text-primary line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-muted line-clamp-2 break-keep">{item.excerpt}</p>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 카테고리 탭 + 검색 + 목록 */}
      <section className="bg-white py-10 lg:py-14">
        <div className="mx-auto max-w-5xl px-6">
          {/* 탭 + 검색 */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <nav className="flex gap-1 overflow-x-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`shrink-0 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    activeCategory === cat
                      ? cat === "이벤트" ? "bg-primary text-white" : "bg-foreground text-white"
                      : cat === "이벤트" ? "text-primary hover:bg-primary-light hover:text-primary" : "text-muted hover:bg-surface hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </nav>

            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder="검색"
                className="h-10 w-full rounded-lg border border-border bg-white pl-4 pr-10 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none sm:w-56"
              />
              <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
            </div>
          </div>

          {/* 이벤트 상태 필터 + 정렬 */}
          <div className="mt-6 flex items-center justify-between gap-3 text-sm">
            <div className="flex gap-1.5">
              {isEventCategory && (
                <>
                  {(["전체", "진행중", "종료"] as EventFilter[]).map((filter) => (
                    <button
                      key={filter}
                      onClick={() => handleEventFilterChange(filter)}
                      className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${
                        eventFilter === filter
                          ? filter === "진행중" ? "bg-emerald-500 text-white" : filter === "종료" ? "bg-foreground text-white" : "bg-primary text-white"
                          : "bg-surface text-muted hover:bg-border hover:text-foreground"
                      }`}
                    >
                      {eventFilter === filter && filter === "진행중" && <span className="inline-block h-1.5 w-1.5 rounded-full bg-white" />}
                      {filter}
                    </button>
                  ))}
                </>
              )}
            </div>
            <span className="font-medium text-foreground">
              {"\u2022 "}최신순
            </span>
          </div>

          {/* 글 목록 */}
          <div className="mt-4 divide-y divide-border">
            {pagedItems.length === 0 && (
              <p className="py-12 text-center text-sm text-muted">
                {isEventCategory
                  ? eventFilter === "진행중" ? "현재 진행중인 이벤트가 없습니다." : eventFilter === "종료" ? "종료된 이벤트가 없습니다." : "등록된 이벤트가 없습니다."
                  : "검색 결과가 없습니다."}
              </p>
            )}
            {pagedItems.map((item) => {
              const isEvent = item.category === "이벤트";
              const isEnded = isEvent && item.eventStatus === "종료";
              const daysLeft = isEvent && !isEnded ? getDaysLeft(item.eventEndDate) : null;

              return (
                <Link key={item.slug} href={`/news/${item.slug}`}>
                  <article className={`group flex gap-6 py-6 ${isEnded ? "opacity-50" : ""}`}>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-primary">{item.category}</span>
                        {isEvent && daysLeft !== null && daysLeft >= 0 && (
                          <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${getDdayColor(daysLeft)}`}>
                            {daysLeft === 0 ? "D-Day" : `D-${daysLeft}`}
                          </span>
                        )}
                        {isEnded && (
                          <span className="rounded-full bg-gray-400 px-2 py-0.5 text-[10px] font-bold text-white">
                            종료
                          </span>
                        )}
                      </div>
                      <h3 className="mt-1 text-base font-bold text-foreground transition-colors group-hover:text-primary break-keep sm:text-lg">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted line-clamp-1 break-keep">
                        {item.excerpt}
                      </p>
                      <span className="mt-2 inline-block text-xs text-muted">{formatDate(item.date)}</span>
                    </div>

                    <div className="relative hidden shrink-0 sm:block">
                      {item.thumbnail ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={item.thumbnail} alt="" className="h-24 w-36 rounded-lg object-cover" />
                      ) : (
                        <div className="h-24 w-36 rounded-lg bg-surface" />
                      )}
                      {isEnded && (
                        <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/40">
                          <span className="text-xs font-bold text-white">종료</span>
                        </div>
                      )}
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>

          {/* 페이지네이션 */}
          {totalPages > 1 && (
            <div className="mt-10 flex items-center justify-center gap-1">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={safeCurrentPage === 1}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted transition-colors hover:bg-surface disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`flex h-9 w-9 items-center justify-center rounded-lg text-sm font-medium transition-colors ${
                    safeCurrentPage === page
                      ? "bg-foreground text-white"
                      : "text-muted hover:bg-surface hover:text-foreground"
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={safeCurrentPage === totalPages}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted transition-colors hover:bg-surface disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-24 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-[length:var(--font-size-section-h2)] font-bold">궁금한 점이 있으신가요?</h2>
          <p className="mt-4 text-lg text-white/80">언제든 문의해 주세요. 빠르게 답변드리겠습니다.</p>
          <div className="mt-8">
            <Button href="/contact" className="bg-white text-navy hover:bg-white/90">문의하기</Button>
          </div>
        </div>
      </section>
    </>
  );
}
