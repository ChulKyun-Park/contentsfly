"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import Button from "@/components/ui/Button";

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
  onLogin: () => void;
}

export default function LoginModal({ open, onClose, onLogin }: LoginModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /* prevent body scroll while open */
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // UI-only: simulate login
    onLogin();
    setEmail("");
    setPassword("");
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl mx-4">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-1.5 text-muted transition-colors hover:bg-surface hover:text-foreground"
          aria-label="닫기"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-foreground">로그인</h2>
          <p className="mt-2 text-sm text-muted">
            ContentsFly에 로그인하여 번역을 요청하세요.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="login-email" className="mb-1 block text-sm font-medium text-foreground">
              이메일
            </label>
            <input
              id="login-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@example.com"
              className="w-full rounded-lg border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted/60 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div>
            <label htmlFor="login-password" className="mb-1 block text-sm font-medium text-foreground">
              비밀번호
            </label>
            <input
              id="login-password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호 입력"
              className="w-full rounded-lg border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted/60 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <Button type="submit" variant="primary" className="w-full justify-center py-3">
            로그인
          </Button>
        </form>

        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs text-muted">또는</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Social login buttons (UI only) */}
        <div className="space-y-3">
          <button
            type="button"
            onClick={onLogin}
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-border px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Google 로그인
          </button>
          <button
            type="button"
            onClick={onLogin}
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-[#FEE500] px-4 py-3 text-sm font-medium text-[#000000D9] transition-colors hover:bg-[#FDD800]"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#000000D9">
              <path d="M12 3C6.477 3 2 6.463 2 10.691c0 2.734 1.81 5.134 4.536 6.499l-1.15 4.238a.4.4 0 00.604.437l4.97-3.282c.33.03.667.046 1.01.046h.03c5.523 0 10-3.463 10-7.938C22 6.463 17.523 3 12 3z"/>
            </svg>
            카카오 로그인
          </button>
        </div>

        <p className="mt-6 text-center text-xs text-muted">
          계정이 없으신가요?{" "}
          <button type="button" onClick={onLogin} className="font-medium text-primary hover:underline">
            회원가입
          </button>
        </p>
      </div>
    </div>
  );
}
