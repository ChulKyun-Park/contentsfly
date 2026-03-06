import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

const serviceLinks = [
  { label: "파트너쉽 요청", href: "/plan/partnership" },
  { label: "구독 요청", href: "/plan/subscription" },
  { label: "단건 요청", href: "/plan/single" },
  { label: "AI 번역·더빙", href: "/ai" },
  { label: "가격 안내", href: "/pricing" },
];

const companyLinks = [
  { label: "회사 소개", href: "/about" },
  { label: "비즈니스", href: "/business" },
  { label: "소식", href: "/news" },
  { label: "문의하기", href: "/contact" },
];

const familySites = [
  { label: "NILILIA", href: "https://nililia.com" },
  { label: "CONTENTSFLYS", href: "https://contentsfly-s.com" },
];

export default function Footer() {
  return (
    <>
      <footer className="border-t border-border bg-surface text-foreground">
        <div className="mx-auto max-w-7xl px-6 lg:pl-12">
          {/* 4-column grid */}
          <div className="grid grid-cols-1 gap-3 py-8 sm:grid-cols-2 lg:grid-cols-[2.5fr_1fr_1fr_1.2fr] lg:gap-x-3">
            {/* Column 1: Company Info */}
            <div>
              <h3 className="mb-5 text-[1.25rem] font-bold tracking-[0.01em] text-foreground">
                {COMPANY_INFO.name}
              </h3>
              <ul className="space-y-1 text-sm leading-relaxed text-muted">
                <li>{COMPANY_INFO.address}</li>
                <li>
                  대표자 : {COMPANY_INFO.ceo} | 사업자 등록번호 : {COMPANY_INFO.bizNumber}
                </li>
                <li>
                  고객센터 :{" "}
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="font-medium text-foreground transition-colors hover:text-primary"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                </li>
              </ul>

              <p className="mt-8 text-sm text-muted">
                &copy; {new Date().getFullYear()} Nililia Inc. All rights reserved.
              </p>
            </div>

            {/* Column 2: Services */}
            <div>
              <h3 className="mb-3 text-sm font-medium text-foreground">서비스</h3>
              <ul className="space-y-1">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Company + Family */}
            <div>
              <h3 className="mb-3 text-sm font-medium text-foreground">회사</h3>
              <ul className="space-y-1">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <h3 className="mb-3 mt-6 text-sm font-medium text-foreground">
                Family Sites
              </h3>
              <ul className="space-y-1">
                {familySites.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted transition-colors hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div>
              <h3 className="mb-3 text-sm font-medium text-foreground">Contact</h3>
              <p className="mb-2 text-sm text-muted">
                문의 가능 시간 : {COMPANY_INFO.hours}
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2 text-muted">
                  <Phone className="h-4 w-4 text-primary/60" />
                  <span>번역 문의</span>
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="font-medium text-foreground transition-colors hover:text-primary"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                </li>
                <li className="flex items-center gap-2 text-muted">
                  <Mail className="h-4 w-4 text-primary/60" />
                  <span>기업 문의</span>
                  <a
                    href={`mailto:${COMPANY_INFO.emails.translation}`}
                    className="font-medium text-foreground transition-colors hover:text-primary"
                  >
                    {COMPANY_INFO.emails.translation}
                  </a>
                </li>
                <li className="flex items-center gap-2 text-muted">
                  <Mail className="h-4 w-4 text-primary/60" />
                  <span>제휴 문의</span>
                  <a
                    href={`mailto:${COMPANY_INFO.emails.partnership}`}
                    className="font-medium text-foreground transition-colors hover:text-primary"
                  >
                    {COMPANY_INFO.emails.partnership}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Terms */}
          <div className="flex gap-6 border-t border-border py-4 text-sm text-muted">
            <Link href="#" className="transition-colors hover:text-foreground">
              이용약관
            </Link>
            <Link href="#" className="transition-colors hover:text-foreground">
              개인정보처리방침
            </Link>
          </div>
        </div>
      </footer>

      {/* Floating CTA */}
      <div className="fixed bottom-6 right-6 z-40">
        <Link
          href="/contact"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30 transition-all hover:scale-110 hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/40"
          aria-label="문의하기"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </Link>
      </div>
    </>
  );
}
