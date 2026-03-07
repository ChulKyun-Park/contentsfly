import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PromoBanner from "@/components/layout/PromoBanner";
import AuthProvider from "@/components/auth/AuthProvider";
import { SITE_META } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_META.url),
  title: SITE_META.title,
  description: SITE_META.description,
  keywords: [
    "영상 번역",
    "자막 번역",
    "현지화",
    "컨텐츠플라이",
    "크리에이터 번역",
    "영상 자막",
    "번역 플랫폼",
  ],
  openGraph: {
    title: SITE_META.title,
    description: SITE_META.description,
    type: "website",
    locale: "ko_KR",
    siteName: "ContentsFly",
    url: SITE_META.url,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_META.title,
    description: SITE_META.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.variable} antialiased`}>
        <AuthProvider>
          <PromoBanner />
          <Header />
          <main>{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
