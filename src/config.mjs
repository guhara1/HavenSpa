// ==========================================================================
// 간다GO · Site-wide configuration
// 실제 배포 시 BASE 도메인과 Telegram 핸들을 실제 값으로 교체하세요.
// ==========================================================================

export const SITE = {
  name: "간다GO",
  legalName: "간다GO",
  tagline: "경기북부 출장마사지 · 홈타이 지역 안내",
  base: "https://haven-spa.netlify.app",
  phone: "0508-202-4719",
  phoneHref: "tel:0508-202-4719",
  // TODO(배포): 실제 텔레그램 핸들로 교체
  telegram: {
    web: "https://t.me/gandago_web",   // 웹사이트 제작문의
    ad: "https://t.me/gandago_ad",     // 제휴문의
  },
  ogImage: "/assets/img/hero.webp",
  heroImage: "/assets/img/hero.webp",
  // 네이버 웹마스터도구 사이트 소유 확인
  naverVerification: "0b11814a8c152adf36892d9dd4045ee25098539a",
  // 게시된 이용 후기 20건 기준 집계 (화면 표시값과 일치)
  rating: { value: "4.2", count: "20", best: "5", worst: "1" },
};

// 상단 내비게이션 (메뉴명에 "출장마사지" 반복 금지)
export const NAV = [
  { label: "경기북부 홈", href: "/" },
  { label: "일산·고양권", href: "/gyeonggi-north/area/goyang-ilsan/" },
  { label: "남양주·구리권", href: "/gyeonggi-north/area/namyangju-guri/" },
  { label: "의정부·양주권", href: "/gyeonggi-north/area/uijeongbu-yangju/" },
  { label: "파주·운정권", href: "/gyeonggi-north/area/paju-unjeong/" },
  { label: "외곽·관광권", href: "/gyeonggi-north/area/pocheon-dongducheon-gapyeong-yeoncheon/" },
  { label: "이용 장소", href: "/gyeonggi-north/use/" },
  { label: "예약 전 확인", href: "/gyeonggi-north/check/" },
];

// 푸터 링크 그룹
export const FOOTER_LINKS = {
  areas: {
    title: "생활권 안내",
    items: [
      { label: "고양·일산권", href: "/gyeonggi-north/area/goyang-ilsan/" },
      { label: "남양주·구리권", href: "/gyeonggi-north/area/namyangju-guri/" },
      { label: "의정부·양주권", href: "/gyeonggi-north/area/uijeongbu-yangju/" },
      { label: "파주·운정권", href: "/gyeonggi-north/area/paju-unjeong/" },
      { label: "포천·동두천·가평·연천권", href: "/gyeonggi-north/area/pocheon-dongducheon-gapyeong-yeoncheon/" },
    ],
  },
  info: {
    title: "이용 정보",
    items: [
      { label: "요금 안내", href: "/gyeonggi-north/pricing/" },
      { label: "이용 장소", href: "/gyeonggi-north/use/" },
      { label: "이용 후기", href: "/gyeonggi-north/reviews/" },
      { label: "예약 전 확인", href: "/gyeonggi-north/check/" },
      { label: "운영 기준", href: "/gyeonggi-north/operation/" },
      { label: "문의하기", href: "/gyeonggi-north/contact/" },
      { label: "개인정보 처리방침", href: "/gyeonggi-north/check/privacy/" },
      { label: "불법·선정적 서비스 불가 안내", href: "/gyeonggi-north/check/service-policy/" },
    ],
  },
};
