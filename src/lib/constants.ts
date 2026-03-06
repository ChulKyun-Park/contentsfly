// ── GNB 메뉴 구조 ──
export const NAV_MENU = [
  {
    label: "번역 플랜",
    href: "/plan",
    children: [
      { label: "파트너쉽 요청", href: "/plan/partnership" },
      { label: "구독 요청", href: "/plan/subscription" },
      { label: "단건 요청", href: "/plan/single" },
    ],
  },
  { label: "가격", href: "/pricing" },
  { label: "AI 번역·더빙", href: "/ai" },
  { label: "비즈니스", href: "/business" },
  { label: "소식", href: "/news" },
] as const;

// ── 통계 수치 ──
export const STATS = [
  { value: "50+", label: "기업 고객" },
  { value: "150M+", label: "번역 단어" },
  { value: "10+", label: "지원 언어" },
  { value: "24h", label: "평균 납품" },
] as const;

// ── 번역 플랜 ──
export const PLANS = [
  {
    title: "파트너쉽 요청",
    description: "전담 매니저 배정, 정기 번역, 맞춤 위키사전으로 일관된 품질을 보장합니다.",
    features: ["전담 매니저 배정", "맞춤 위키사전 관리", "정기 납품 스케줄", "우선순위 작업 처리"],
    href: "/plan/partnership",
    highlight: true,
  },
  {
    title: "구독 요청",
    description: "월 정액으로 필요한 만큼 사용하세요. 유연하게 확장 가능합니다.",
    features: ["월 정액 플랜", "분 단위 사용", "유연한 확장", "할인 혜택 적용"],
    href: "/plan/subscription",
    highlight: false,
  },
  {
    title: "단건 요청",
    description: "1회성 프로젝트도 환영합니다. 즉시 가격을 확인하고 빠르게 시작하세요.",
    features: ["즉시 가격 확인", "빠른 납품", "간편한 주문", "피드백 반영"],
    href: "/plan/single",
    highlight: false,
  },
] as const;

// ── 가격 정보 ──
export const PRICING = {
  prepaid: { price: "6,000", unit: "원/분", label: "선불형" },
  postpaid: { price: "25", unit: "원/글자", label: "후불형" },
  script: { price: "2,000", unit: "원/분", label: "스크립트 제작" },
  maxDiscount: "36%",
} as const;

// ── 프로세스 단계 ──
export const PROCESS_STEPS = [
  {
    step: 1,
    title: "번역 신청",
    description: "영상 업로드 후 원하는 언어와 스타일을 선택합니다.",
  },
  {
    step: 2,
    title: "영상 분석·가이드 작성",
    description: "크리에이터 전용 위키사전을 만들어 톤, 고유명사, 용어를 정리합니다.",
  },
  {
    step: 3,
    title: "전문가 스크립트 제작",
    description: "영상에 최적화된 한글 스크립트를 핸드메이드로 작성합니다.",
  },
  {
    step: 4,
    title: "원어민 현지화 번역",
    description: "원어민 전문가가 맥락과 문화를 반영한 현지화 번역을 진행합니다.",
  },
  {
    step: 5,
    title: "납품·피드백 반영",
    description: "결과물을 전달하고, 시청자 피드백을 위키에 반영하여 품질을 개선합니다.",
  },
] as const;

// ── 차별화 포인트 ──
export const DIFFERENTIATIONS = [
  {
    title: "합리적인 가격 정책",
    description: "동종 업계 대비 합리적인 가격으로 최고 품질의 번역을 제공합니다. 최대 36% 추가 할인까지.",
    icon: "BadgeDollarSign",
  },
  {
    title: "고품질 맞춤 현지화",
    description: "100% 핸드메이드 번역 공정. 크리에이터의 톤과 맥락을 살린 초월번역을 제공합니다.",
    icon: "Globe",
  },
  {
    title: "24시간 빠른 납품",
    description: "한·영 번역 기준 24시간 내 납품. 긴급 요청도 유연하게 대응합니다.",
    icon: "Zap",
  },
  {
    title: "체계적 워크플로우",
    description: "전용 TMS 기반으로 프로젝트를 체계적으로 관리합니다. 진행 상황을 실시간으로 확인하세요.",
    icon: "Workflow",
  },
  {
    title: "안심 보안 옵션",
    description: "전용 링크, 권한 관리, 워터마크 등 콘텐츠 보안을 철저하게 지원합니다.",
    icon: "Shield",
  },
] as const;

// ── 자막 스타일 ──
export const SUBTITLE_STYLES = [
  { name: "일반", description: "기본 스타일 — 브이로그, 리뷰 등 대부분의 콘텐츠에 추천", tag: "기본" },
  { name: "유머", description: "유머 극대화 — 게임, 먹방, 토크쇼 등 재미 위주 콘텐츠에 최적", tag: "유머" },
  { name: "진지", description: "정숙한 표현 — 정보성, 교양, 다큐멘터리 콘텐츠에 적합", tag: "포멀" },
  { name: "배리어프리", description: "모든 소리 표현 — BGM, 효과음, 의성어까지 포함", tag: "접근성" },
] as const;

// ── 회사 정보 ──
export const COMPANY_INFO = {
  name: "(주)닐리리아",
  ceo: "박철균",
  bizNumber: "481-81-00251",
  address: "경기도 안양시 동안구 시민대로 327번길 11-41, 6층",
  phone: "070-5227-1571",
  hours: "10:00 ~ 19:00",
  emails: {
    translation: "sales@nililia.com",
    partnership: "partnership@nililia.com",
    recruit: "recruit@nililia.com",
  },
} as const;

// ── 사이트 메타데이터 ──
export const SITE_META = {
  title: "컨텐츠플라이 | 영상 번역 전문 플랫폼",
  description: "영상 번역 전문 플랫폼. 전문가 번역부터 AI 번역·더빙까지, 크리에이터와 기업의 글로벌 진출을 지원합니다.",
  url: "https://contentsfly.com",
} as const;
