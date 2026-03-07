"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";
import { NAV_MENU } from "@/lib/constants";
import Button from "@/components/ui/Button";
import LanguageSelector from "@/components/ui/LanguageSelector";
import { useAuth } from "@/components/auth/AuthProvider";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { isLoggedIn, openLogin, logout } = useAuth();

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-white/95 backdrop-blur shadow-sm supports-[backdrop-filter]:bg-white/80"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-[52px] max-w-7xl items-center justify-between px-6 lg:h-[56px]">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo/contentsfly-logo.png"
            alt="ContentsFly"
            width={160}
            height={40}
            className="h-7 w-auto lg:h-8"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_MENU.map((item) =>
            "children" in item && item.children ? (
              <div key={item.href} className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setDropdownOpen((v) => !v)}
                  className="flex items-center gap-1 text-sm font-medium text-muted transition-colors hover:text-foreground"
                >
                  {item.label}
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform",
                      dropdownOpen && "rotate-180",
                    )}
                  />
                </button>
                {dropdownOpen && (
                  <div className="absolute left-1/2 top-full mt-2 -translate-x-1/2 rounded-xl border border-border bg-white py-1.5 shadow-lg">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setDropdownOpen(false)}
                        className="block whitespace-nowrap px-4 py-2 text-sm text-muted transition-colors hover:bg-surface hover:text-foreground"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        {/* Desktop right buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSelector />

          {isLoggedIn ? (
            <>
              <Button href="/cf/list" variant="primary" className="px-5 py-2 text-sm">
                시작하기
              </Button>
              <button
                type="button"
                onClick={logout}
                className="text-sm font-medium text-muted transition-colors hover:text-foreground"
              >
                로그아웃
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={openLogin}
                className="text-sm font-medium text-muted transition-colors hover:text-foreground"
              >
                회원가입
              </button>
              <Button
                onClick={openLogin}
                variant="primary"
                className="px-5 py-2 text-sm"
              >
                로그인
              </Button>
            </>
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-muted hover:bg-surface lg:hidden"
          aria-label="메뉴 열기"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="border-t border-border bg-white lg:hidden">
          <nav className="mx-auto max-w-7xl px-6 py-4">
            <div className="space-y-1">
              {NAV_MENU.map((item) =>
                "children" in item && item.children ? (
                  <div key={item.href}>
                    <p className="px-4 py-3 text-base font-semibold text-foreground">
                      {item.label}
                    </p>
                    <div className="ml-4 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block rounded-lg px-4 py-2.5 text-sm text-muted transition-colors hover:bg-surface hover:text-primary"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center rounded-lg px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-surface hover:text-primary"
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </div>

            <div className="my-4 border-t border-border" />

            {/* Mobile language selector */}
            <div className="px-4 pb-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted">
                Language
              </p>
              <LanguageSelector variant="list" />
            </div>

            <div className="space-y-3 px-4">
              {isLoggedIn ? (
                <>
                  <Button
                    href="/cf/list"
                    variant="primary"
                    className="w-full justify-center py-3"
                  >
                    시작하기
                  </Button>
                  <button
                    type="button"
                    onClick={() => {
                      setMobileOpen(false);
                      logout();
                    }}
                    className="flex w-full items-center justify-center rounded-lg border border-border px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface"
                  >
                    로그아웃
                  </button>
                </>
              ) : (
                <>
                  <Button
                    onClick={() => {
                      setMobileOpen(false);
                      openLogin();
                    }}
                    variant="primary"
                    className="w-full justify-center py-3"
                  >
                    로그인
                  </Button>
                  <button
                    type="button"
                    onClick={() => {
                      setMobileOpen(false);
                      openLogin();
                    }}
                    className="flex w-full items-center justify-center rounded-lg border border-border px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface"
                  >
                    회원가입
                  </button>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
