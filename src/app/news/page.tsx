import { Metadata } from "next";
import { fetchAllNews } from "@/lib/notion/client";
import PageHero from "@/components/ui/PageHero";
import NewsPageClient from "./NewsPageClient";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "소식 | 컨텐츠플라이",
  description: "컨텐츠플라이의 최신 소식, 서비스 업데이트, 업계 인사이트를 확인하세요.",
};

export default async function NewsPage() {
  const news = await fetchAllNews();
  return (
    <>
      <PageHero
        label="소식"
        title="컨텐츠플라이의 새로운 소식"
        description="서비스 업데이트, 업계 동향, 이벤트 소식을 빠르게 만나보세요."
      />
      <NewsPageClient serverNews={news} />
    </>
  );
}
