# 간다GO · 경기북부 출장마사지·홈타이 지역 안내

경기북부(일산·고양·의정부·남양주·파주·양주·구리·포천·동두천·가평·연천) 생활권 기준으로
방문 가능 지역과 이용 전 확인사항을 안내하는 정적 SEO 사이트입니다.

## 구조

- `src/config.mjs` — 상호/전화/텔레그램/내비/푸터 등 사이트 전역 설정
- `src/render.mjs` — 공통 레이아웃 + JSON-LD 스키마 렌더러
- `src/pages/*.mjs` — 페이지별 콘텐츠 정의
- `assets/css/tokens.css` — **프리미엄 팔레트 디자인 토큰**
- `assets/css/site.css` — 컴포넌트 + 오버레이
- `build.mjs` — 정적 HTML + `sitemap.xml` + `robots.txt` 생성

## 빌드

```bash
node build.mjs
```

## 배포 전 교체 필요 (TODO)

`src/config.mjs`에서 아래 값을 실제 값으로 교체하세요.

- `SITE.base` — 실제 도메인 (예: `https://gandago.co.kr`)
- `SITE.telegram.web` — 웹사이트 제작문의 텔레그램 핸들
- `SITE.telegram.ad` — 제휴문의 텔레그램 핸들
- `assets/img/og-cover.svg` — 필요 시 실제 JPG/PNG OG 이미지로 교체

교체 후 `node build.mjs`를 다시 실행합니다.

## SEO 원칙 (구글 정책 준수)

- **E-E-A-T / Who·How·Why 블록**을 모든 주요 페이지에 포함
- **스키마**: WebPage / BreadcrumbList / Organization / FAQPage / Service만 사용.
  실제 오프라인 매장이 없으므로 **LocalBusiness·Review·AggregateRating 미사용**
- 본문에 실제로 보이는 FAQ만 FAQPage로 마크업
- 메타 디스크립션 **80자 이내** (빌드 시 자동 검증)
- 도어웨이·키워드 스터핑 방지: 지역명만 바꾼 복붙 없이 생활권·이동 기준을 다르게 작성
- `og:image` + schema `ImageObject`로 선호 썸네일 지정
- 상위노출 보장/최저가/1위/VIP 등 표현 미사용
- 요금표(60/90/120분)를 메인~모든 지역 페이지에 공통 노출

## 향후 확장 (로드맵)

1차-A 이후: 도시·군 상세, 고양 3개 구, 핵심 생활권 25개, 역세권·터미널,
신도시·택지지구, 관광·펜션 이용 페이지를 동일한 `src/pages` 패턴으로 추가.
본문 2,000자 미만 페이지는 `noindex: true`로 표시(빌드가 sitemap에서 자동 제외).
