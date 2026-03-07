export type NotionNewsItem = {
  id: string;
  title: string;
  excerpt: string;
  thumbnail: string | null;
  publishedAt: string;
  slug: string;
  category: string;
  author: string;
  pinned: boolean;
  tags: string[];
  eventStatus: string | null;
  eventEndDate: string | null;
};
