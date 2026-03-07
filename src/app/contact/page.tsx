"use client";

import { useState, useCallback } from "react";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { COMPANY_INFO } from "@/lib/constants";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const LOCALIZATION_FIELDS = ["OTT", "게임", "영상", "문서", "웹/앱", "웹소설/웹툰", "SDH", "기타"];
const FREQUENCY_OPTIONS = ["정기 납품", "1회성", "미정"];

const inputClass =
  "w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary";

export default function ContactPage() {
  const [organization, setOrganization] = useState("");
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [field, setField] = useState("");
  const [workType, setWorkType] = useState("");
  const [message, setMessage] = useState("");
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const resetForm = useCallback(() => {
    setOrganization("");
    setContactName("");
    setEmail("");
    setPhone("");
    setField("");
    setWorkType("");
    setMessage("");
    setPrivacyConsent(false);
    setError("");
  }, []);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setError("");

      if (!organization.trim() || !contactName.trim() || !email.trim() || !phone.trim()) {
        setError("필수 항목을 모두 입력해 주세요.");
        return;
      }

      if (!privacyConsent) {
        setError("개인정보 수집 및 이용에 동의해 주세요.");
        return;
      }

      setLoading(true);

      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            organization: organization.trim(),
            contactName: contactName.trim(),
            email: email.trim(),
            phone: phone.trim(),
            field,
            workType,
            message: message.trim(),
            privacyConsent,
          }),
        });

        const data = await res.json();

        if (!res.ok) {
          setError(data.error || "요청 처리 중 오류가 발생했습니다.");
          return;
        }

        setSubmitted(true);
        resetForm();
      } catch {
        setError("네트워크 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
      } finally {
        setLoading(false);
      }
    },
    [organization, contactName, email, phone, field, workType, message, privacyConsent, resetForm],
  );

  return (
    <>
      <PageHero
        label="문의하기"
        title="프로젝트에 대해 알려주세요"
        description="담당자가 확인 후 빠르게 연락드리겠습니다."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
          {/* 문의 폼 */}
          <div>
            {submitted ? (
              <div className="flex flex-col items-center justify-center rounded-2xl border border-primary bg-primary-light/30 p-12 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground">문의가 접수되었습니다</h3>
                <p className="mt-2 text-muted">담당자가 확인 후 영업일 기준 1일 이내 연락드리겠습니다.</p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 inline-flex items-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                >
                  추가 문의하기
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">소속기관명 *</label>
                    <input
                      type="text"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      required
                      className={inputClass}
                      placeholder="회사명 또는 채널명"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">담당자명 *</label>
                    <input
                      type="text"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      required
                      className={inputClass}
                      placeholder="이름"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">이메일 *</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className={inputClass}
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">연락처 *</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className={inputClass}
                      placeholder="010-0000-0000"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">로컬리제이션 분야</label>
                    <select
                      value={field}
                      onChange={(e) => setField(e.target.value)}
                      className={inputClass}
                    >
                      <option value="">선택하세요</option>
                      {LOCALIZATION_FIELDS.map((f) => (
                        <option key={f} value={f}>{f}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">정기 작업 유무</label>
                    <select
                      value={workType}
                      onChange={(e) => setWorkType(e.target.value)}
                      className={inputClass}
                    >
                      <option value="">선택하세요</option>
                      {FREQUENCY_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">상담 내용 *</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={5}
                    className={`${inputClass} resize-none`}
                    placeholder="프로젝트 내용, 예상 분량, 희망 일정 등을 알려주세요."
                  />
                </div>

                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="privacy"
                    checked={privacyConsent}
                    onChange={(e) => setPrivacyConsent(e.target.checked)}
                    className="mt-1 h-4 w-4 rounded border-border text-primary accent-primary"
                  />
                  <label htmlFor="privacy" className="text-sm text-muted">
                    개인정보 수집 및 이용에 동의합니다. *
                  </label>
                </div>

                {error && <p className="text-sm text-red-500">{error}</p>}

                <Button type="submit" className="w-full sm:w-auto" variant="primary">
                  {loading ? "전송 중..." : "문의 보내기"}
                </Button>
              </form>
            )}
          </div>

          {/* 연락처 사이드바 */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="mb-4 text-lg font-bold text-foreground">연락처</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm text-muted">번역 문의</p>
                    <a href={`tel:${COMPANY_INFO.phone}`} className="font-medium text-foreground hover:text-primary">{COMPANY_INFO.phone}</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm text-muted">기업 문의</p>
                    <a href={`mailto:${COMPANY_INFO.emails.translation}`} className="font-medium text-foreground hover:text-primary">{COMPANY_INFO.emails.translation}</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm text-muted">제휴 문의</p>
                    <a href={`mailto:${COMPANY_INFO.emails.partnership}`} className="font-medium text-foreground hover:text-primary">{COMPANY_INFO.emails.partnership}</a>
                  </div>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="mb-4 text-lg font-bold text-foreground">찾아오시는 길</h3>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-medium text-foreground">{COMPANY_INFO.name}</p>
                  <p className="mt-1 text-sm text-muted">{COMPANY_INFO.address}</p>
                </div>
              </div>
              <div className="mt-4 flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="text-sm text-muted">상담 가능 시간</p>
                  <p className="font-medium text-foreground">{COMPANY_INFO.hours}</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
