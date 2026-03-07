/**
 * Notion API 클라이언트
 * - 뉴스 DB 조회, 페이지 블록 조회 등 공통 함수
 * - nililia-homepage 패턴을 기반으로 contentsfly용으로 간소화
 */

import type { NotionNewsItem } from "@/types/notion";

const NOTION_API_BASE = "https://api.notion.com/v1";
const NOTION_VERSION = "2022-06-28";
const REVALIDATE_SECONDS = 60;

const NEWS_DB_ID = process.env.NOTION_NEWS_DB_ID ?? "";

function getToken(): string {
  const token = process.env.NOTION_API_KEY?.trim();
  if (!token) throw new Error("NOTION_API_KEY is not configured");
  return token;
}

/* ── Notion API 공통 ── */

async function queryDatabase(databaseId: string, body: Record<string, unknown>) {
  const res = await fetch(`${NOTION_API_BASE}/databases/${databaseId}/query`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${getToken()}`,
      "Notion-Version": NOTION_VERSION,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    next: { revalidate: REVALIDATE_SECONDS },
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Notion API error (${res.status}): ${text}`);
  }

  return res.json();
}

/* ── 프로퍼티 헬퍼 ── */

function getRichText(prop: unknown): string {
  const arr = prop as Array<{ plain_text?: string }> | undefined;
  return arr?.map((t) => t.plain_text ?? "").join("") ?? "";
}

function getDate(prop: unknown): string {
  const d = prop as { start?: string } | null;
  return d?.start ?? "";
}

function getCheckbox(prop: unknown): boolean {
  return prop === true;
}

function getSelect(prop: unknown): string {
  const s = prop as { name?: string } | null;
  return s?.name ?? "";
}

function getMultiSelect(prop: unknown): string[] {
  const arr = prop as Array<{ name?: string }> | undefined;
  return arr?.map((t) => t.name ?? "").filter(Boolean) ?? [];
}

function getFileThumbnail(prop: unknown): string | null {
  const files = prop as Array<{
    file?: { url?: string };
    external?: { url?: string };
  }> | undefined;
  if (!files || files.length === 0) return null;
  return files[0]?.file?.url ?? files[0]?.external?.url ?? null;
}

/* ── 타입 ── */

type NotionProperty = {
  type?: string;
  title?: unknown;
  rich_text?: unknown;
  date?: unknown;
  url?: unknown;
  files?: unknown;
  select?: { name?: string } | null;
  multi_select?: Array<{ name?: string }>;
  checkbox?: boolean;
};

type NotionPage = {
  id: string;
  properties: Record<string, NotionProperty>;
};

/* ── 필터 & 정렬 ── */

const publishedFilter = {
  property: "Published",
  checkbox: { equals: true },
};

const defaultSorts = [
  { property: "Pinned", direction: "descending" as const },
  { property: "Date", direction: "descending" as const },
];

/* ── 매퍼 ── */

/**
 * Notion News DB 스키마 (contentsfly용):
 *   Title (rich_text), Slug (rich_text), Category (select),
 *   Thumbnail (files), Excerpt (rich_text), Tags (multi_select),
 *   Published (checkbox), Pinned (checkbox), Date (date), Author (rich_text)
 */
function mapNewsPage(page: NotionPage): NotionNewsItem {
  const props = page.properties;
  return {
    id: page.id,
    title: getRichText(props.Title?.rich_text),
    excerpt: getRichText(props.Excerpt?.rich_text),
    thumbnail: getFileThumbnail(props.Thumbnail?.files),
    publishedAt: getDate(props.Date?.date),
    slug: getRichText(props.Slug?.rich_text) || page.id,
    category: getSelect(props.Category?.select),
    author: getRichText(props.Author?.rich_text),
    pinned: getCheckbox(props.Pinned?.checkbox),
    tags: getMultiSelect(props.Tags?.multi_select),
    eventStatus: getSelect((props["이벤트 상태"] as NotionProperty)?.select) || null,
    eventEndDate: getDate((props["이벤트 종료일"] as NotionProperty)?.date) || null,
  };
}

/* ── Public API ── */

/** 홈페이지 미리보기용 최신 뉴스 N개 */
export async function fetchNewsPreview(limit = 3): Promise<NotionNewsItem[]> {
  if (!NEWS_DB_ID) return [];
  try {
    const response = await queryDatabase(NEWS_DB_ID, {
      filter: publishedFilter,
      sorts: defaultSorts,
      page_size: limit,
    });
    return ((response.results ?? []) as NotionPage[]).map(mapNewsPage);
  } catch (error) {
    console.error("Failed to fetch news preview:", error);
    return [];
  }
}

/** /news 페이지용 전체 뉴스 */
export async function fetchAllNews(): Promise<NotionNewsItem[]> {
  if (!NEWS_DB_ID) return [];
  try {
    const response = await queryDatabase(NEWS_DB_ID, {
      filter: publishedFilter,
      sorts: defaultSorts,
      page_size: 100,
    });
    return ((response.results ?? []) as NotionPage[]).map(mapNewsPage);
  } catch (error) {
    console.error("Failed to fetch all news:", error);
    return [];
  }
}

/** slug로 단일 뉴스 조회 */
export async function fetchNewsBySlug(slug: string): Promise<NotionNewsItem | null> {
  if (!NEWS_DB_ID) return null;
  try {
    const response = await queryDatabase(NEWS_DB_ID, {
      filter: {
        and: [
          publishedFilter,
          { property: "Slug", rich_text: { equals: slug } },
        ],
      },
      page_size: 1,
    });
    const pages = (response.results ?? []) as NotionPage[];
    if (pages.length === 0) return null;
    return mapNewsPage(pages[0]);
  } catch (error) {
    console.error("Failed to fetch news by slug:", error);
    return null;
  }
}

/* ── Notion 블록 ── */

export type NotionBlock = {
  id: string;
  type: string;
  has_children: boolean;
  [key: string]: unknown;
};

/** 페이지 본문 블록 조회 */
export async function fetchPageBlocks(pageId: string): Promise<NotionBlock[]> {
  try {
    const res = await fetch(`${NOTION_API_BASE}/blocks/${pageId}/children?page_size=100`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
        "Notion-Version": NOTION_VERSION,
      },
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return (data.results ?? []) as NotionBlock[];
  } catch (error) {
    console.error("Failed to fetch page blocks:", error);
    return [];
  }
}
