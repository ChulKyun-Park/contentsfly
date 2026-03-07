// ── GNB 메뉴 구조 ──
export const NAV_MENU = [
  {
    label: "휴먼터치",
    href: "/plan",
    children: [
      { label: "파트너십 제휴", href: "/plan/partnership" },
      { label: "구독형 서비스", href: "/plan/subscription" },
      { label: "단건 주문", href: "/plan/single" },
    ],
  },
  { label: "AI서비스", href: "/ai" },
  { label: "가격", href: "/pricing" },
  { label: "비즈니스", href: "/business" },
  { label: "소식", href: "/news" },
] as const;

// ── 통계 수치 ──
export const STATS = [
  { value: "1,300+", label: "누적 고객" },
  { value: "100M+", label: "작업 건수" },
  { value: "10+", label: "지원 언어" },
  { value: "24h", label: "평균 납품" },
] as const;

// ── 서비스 플랜 (4 tier) ──
export const PLANS = [
  {
    title: "구독형 서비스",
    description: "정기적으로 번역이 필요한 크리에이터를 위한 스마트한 선택. 카톡 승인 한번으로 자동 주문됩니다.",
    features: ["전담 매니저 배정", "맞춤 위키사전 관리", "월 정기 결제 할인", "우선순위 작업 처리"],
    href: "/plan/subscription",
    highlight: true,
    price: "3,900",
    priceUnit: "원/분~",
    badge: "최대 36% 할인",
    category: "휴먼터치",
  },
  {
    title: "단건 주문",
    description: "1회성 프로젝트도 환영합니다. 즉시 가격을 확인하고 빠르게 시작하세요.",
    features: ["즉시 가격 확인", "빠른 납품", "간편한 주문", "피드백 반영"],
    href: "/plan/single",
    highlight: false,
    price: "6,000",
    priceUnit: "원/분",
    badge: "",
    category: "휴먼터치",
  },
  {
    title: "AI서비스",
    description: "AI 기반 번역·더빙으로 빠르게 다국어 콘텐츠를 제작하세요. 10개 이상 언어를 즉시 지원합니다.",
    features: ["AI 자동 번역", "AI 더빙 지원", "즉시 처리", "합리적 가격"],
    href: "/ai",
    highlight: false,
    price: "1,000",
    priceUnit: "원/분",
    badge: "NEW",
    category: "AI",
  },
  {
    title: "비즈니스",
    description: "콘텐츠 기업에 최적화된 특별 혜택. 전담 매니저가 맞춤형 품질을 지원합니다.",
    features: ["전담 매니저", "후불 결제", "대량 할인", "맞춤 가이드"],
    href: "/business",
    highlight: false,
    price: "별도 문의",
    priceUnit: "",
    badge: "",
    category: "Enterprise",
  },
] as const;

// ── 가격 정보 ──
export const PRICING = {
  subscription: { price: "3,900", unit: "원/분~", label: "구독형 서비스" },
  single: { price: "6,000", unit: "원/분", label: "단건 주문" },
  ai: { price: "1,000", unit: "원/분", label: "AI서비스" },
  business: { price: "별도 문의", unit: "", label: "비즈니스" },
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
    description: "동종 업계 대비 합리적인 가격으로 최고 품질의 번역을 제공합니다. 구독 시 최대 36% 추가 할인.",
    icon: "BadgeDollarSign",
  },
  {
    title: "휴먼터치 현지화",
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
    description: "NDA 체결, 전용 링크, 권한 관리, 워터마크 등 콘텐츠 보안을 철저하게 지원합니다.",
    icon: "Shield",
  },
] as const;

// ── 콘텐츠 ROI 지표 ──
export const ROI_METRICS = [
  { value: "+550%", label: "해외 시청자 도달" },
  { value: "1.5~3x", label: "비즈니스 기회 확장" },
  { value: "+70%", label: "광고 수익률 증가" },
  { value: "88%", label: "재구매율" },
] as const;

// ── 크리에이터 성과 데이터 ──
export const CREATOR_RESULTS = [
  {
    name: "먹방 크리에이터 A",
    category: "먹방",
    beforeSubs: "20만",
    afterSubs: "575만",
    growthRate: "+2,775%",
    languages: 7,
    maxViews: "3,057만",
    period: "24개월",
    image: "/images/placeholder/creator-growth-1.png",
  },
  {
    name: "동물 크리에이터 B",
    category: "동물",
    beforeSubs: "50만",
    afterSubs: "320만",
    growthRate: "+540%",
    languages: 5,
    maxViews: "6,900만",
    period: "18개월",
    image: "/images/placeholder/creator-growth-2.png",
  },
  {
    name: "게임 크리에이터 C",
    category: "게임",
    beforeSubs: "30만",
    afterSubs: "180만",
    growthRate: "+500%",
    languages: 8,
    maxViews: "2,100만",
    period: "12개월",
    image: "/images/placeholder/creator-growth-3.png",
  },
] as const;

// ── 가격 상세 특징 ──
export const PRICING_FEATURES = {
  subscription: [
    "전담 매니저 배정",
    "맞춤 위키사전 관리",
    "카톡 승인 자동 주문",
    "우선순위 작업 처리",
    "월 정기 결제 (최대 36% 할인)",
    "납품 후 2회 무상 수정",
  ],
  single: [
    "회원가입 후 즉시 이용",
    "영상 길이 기반 가격 산정",
    "한·영 기준 24시간 내 납품",
    "납품 후 1회 무상 수정",
    "SRT/VTT 파일 제공",
    "자막 스타일 4종 선택",
  ],
  ai: [
    "140+ 언어쌍 지원",
    "AI 자동 번역·더빙",
    "업로드 후 즉시 처리",
    "24/7 셀프서비스",
    "전문가 후편집(MTPE) 옵션",
    "합리적 가격 (1,000원/분)",
  ],
  business: [
    "전담 매니저 + SLA 보장",
    "NDA 체결 · 보안 옵션",
    "후불 정산 지원",
    "대시보드 리포트",
    "다국어 동시 번역",
    "맞춤 워크플로우",
  ],
} as const;

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

// ── 자주 묻는 질문 ──
export const FAQ_ITEMS = [
  {
    question: "번역 납품까지 얼마나 걸리나요?",
    answer: "한·영 번역 기준, 영상 1편(10분 내외)은 평균 24시간 내 납품됩니다. 긴급 요청 시 당일 납품도 가능하며, 분량이 많은 프로젝트는 별도 일정을 안내드립니다.",
  },
  {
    question: "어떤 언어를 지원하나요?",
    answer: "영어, 일본어, 중국어(간/번체), 스페인어, 포르투갈어, 베트남어, 태국어, 인도네시아어, 프랑스어, 독일어 등 10개 이상의 언어를 지원합니다. 추가 언어는 문의해 주세요.",
  },
  {
    question: "위키사전은 무엇인가요?",
    answer: "크리에이터마다 사용하는 고유 표현, 별명, 고유명사, 톤앤매너를 정리한 전용 사전입니다. 구독형 서비스 고객에게 제공되며, 번역 일관성과 품질을 높여줍니다.",
  },
  {
    question: "수정 요청은 가능한가요?",
    answer: "네, 납품 후 1회 무상 수정을 제공합니다. 시청자 피드백을 반영한 수정도 위키사전에 업데이트하여 다음 번역 품질을 지속적으로 개선합니다.",
  },
  {
    question: "기업 대량 주문 할인이 있나요?",
    answer: "구독형 서비스를 이용하시면 최대 36%까지 할인이 적용됩니다. 대량 주문이나 장기 계약은 별도 견적을 안내드리니 비즈니스 문의를 이용해 주세요.",
  },
  {
    question: "AI 번역·더빙 서비스는 무엇인가요?",
    answer: "AI 기반 자동 번역과 음성 더빙 기능으로, 빠르게 다국어 콘텐츠를 제작할 수 있습니다. 전문가 번역과 결합하여 비용은 줄이고 품질은 유지하는 하이브리드 방식도 지원합니다.",
  },
] as const;

// ── 사이트 메타데이터 ──
export const SITE_META = {
  title: "컨텐츠플라이 | 영상 번역 전문 플랫폼",
  description: "영상 번역 전문 플랫폼. 전문가 번역부터 AI 번역·더빙까지, 크리에이터와 기업의 글로벌 진출을 지원합니다.",
  url: "https://contentsfly.com",
} as const;
