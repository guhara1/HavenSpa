// ==========================================================================
// 간다GO · Render helpers (static HTML + JSON-LD schema)
// ==========================================================================
import { SITE, NAV, FOOTER_LINKS } from "./config.mjs";

const esc = (s = "") =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const abs = (path) => (path.startsWith("http") ? path : SITE.base + path);

// ---- Pricing block (메인~모든 지역페이지 공통 요금표) ---------------------
export const PRICING = [
  { name: "60분 코스", price: "90,000", dur: "60분", desc: "기본 컨디션·릴랙스 케어" },
  { name: "90분 코스", price: "150,000", dur: "90분", desc: "아로마 포함 추천 구성", featured: true, badge: "추천" },
  { name: "120분 코스", price: "180,000", dur: "120분", desc: "전신 집중 프리미엄 케어" },
];

export function pricingBlock() {
  const cards = PRICING.map((p) => `
      <div class="price-card${p.featured ? " price-card--featured" : ""}">
        ${p.badge ? `<span class="price-card__badge">${p.badge}</span>` : ""}
        <div class="price-card__name">${p.name}</div>
        <div class="price-card__price">${p.price}<span>원</span></div>
        <div class="price-card__dur">${p.dur}</div>
        <div class="price-card__desc">${p.desc}</div>
        <a class="btn ${p.featured ? "btn--primary" : "btn--ghost"} btn--block" href="${SITE.telegram.web}" rel="noopener" target="_blank">예약 문의</a>
      </div>`).join("");
  return `
  <section class="section" id="pricing">
    <div class="wrap">
      <div class="sec-head center">
        <h2>이용 코스와 요금 살펴보기</h2>
        <p>60·90·120분 코스별 기준 요금이며, 추가 비용 없이 있는 그대로 안내해 드립니다.</p>
      </div>
      <div class="pricing">${cards}
      </div>
      <p class="center muted" style="margin-top:26px;font-size:.9rem">
        지역·예약 시간대·이동 거리에 따라 상담 시 최종 확인됩니다.
        <a href="/gyeonggi-north/pricing/" style="color:var(--brand-300);font-weight:700">상세 요금 안내 보기 →</a>
      </p>
    </div>
  </section>`;
}

// ---- FAQ block -----------------------------------------------------------
export function faqBlock(faqs = []) {
  if (!faqs.length) return "";
  const items = faqs.map((f) => `
        <details>
          <summary>${esc(f.q)}</summary>
          <p>${esc(f.a)}</p>
        </details>`).join("");
  return `
  <section class="section section--tight">
    <div class="wrap">
      <div class="sec-head center"><h2>자주 묻는 질문</h2></div>
      <div class="faq" style="max-width:820px;margin-inline:auto">${items}
      </div>
    </div>
  </section>`;
}

// ---- Who / How / Why block ----------------------------------------------
export function whwBlock(whw) {
  if (!whw) return "";
  return `
  <section class="section section--tight">
    <div class="wrap">
      <div class="whw">
        <div class="whw__item"><h4>Who · 누가</h4><p>${esc(whw.who)}</p></div>
        <div class="whw__item"><h4>How · 어떻게</h4><p>${esc(whw.how)}</p></div>
        <div class="whw__item"><h4>Why · 왜</h4><p>${esc(whw.why)}</p></div>
      </div>
    </div>
  </section>`;
}

// ---- Breadcrumb ----------------------------------------------------------
function breadcrumbHtml(crumbs = []) {
  if (!crumbs.length) return "";
  const parts = crumbs.map((c, i) =>
    i === crumbs.length - 1
      ? `<span aria-current="page">${esc(c.name)}</span>`
      : `<a href="${c.href}">${esc(c.name)}</a><span>›</span>`
  ).join("");
  return `<nav class="wrap breadcrumb" aria-label="breadcrumb">${parts}</nav>`;
}

// ---- Header --------------------------------------------------------------
function headerHtml(currentPath) {
  const links = NAV.map((n) => {
    const cur = n.href === currentPath ? ' aria-current="page"' : "";
    return `<a href="${n.href}"${cur}>${n.label}</a>`;
  }).join("");
  return `
  <header class="site-header">
    <div class="wrap site-header__inner">
      <a class="brand" href="/"><span class="brand__mark">G</span>간다GO</a>
      <button class="nav-toggle" aria-expanded="false" aria-label="메뉴 열기">메뉴</button>
      <nav class="nav" aria-label="주요 메뉴">${links}</nav>
      <a class="btn btn--primary header-cta" href="${SITE.phoneHref}">전화예약 ${SITE.phone}</a>
    </div>
  </header>`;
}

// ---- Footer (오렌지 텔레그램 제작문의·제휴문의 버튼) ----------------------
const TG_ICON = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.9 4.3 18.7 19.6c-.24 1.06-.87 1.32-1.76.82l-4.86-3.58-2.35 2.26c-.26.26-.48.48-.98.48l.35-4.95 9.02-8.15c.39-.35-.08-.54-.61-.19L6.36 13.4l-4.8-1.5c-1.04-.33-1.06-1.04.22-1.54l18.77-7.24c.87-.32 1.63.2 1.35 1.18z"/></svg>`;

function footerHtml() {
  const col = (g) => `
        <div class="footer-col">
          <h4>${g.title}</h4>
          <ul>${g.items.map((i) => `<li><a href="${i.href}">${i.label}</a></li>`).join("")}</ul>
        </div>`;
  return `
  <footer class="site-footer">
    <div class="wrap">
      <div class="footer-grid">
        <div class="footer-biz">
          <a class="brand" href="/" style="margin-bottom:14px"><span class="brand__mark">G</span>간다GO</a>
          <p><strong>상호</strong> · 간다GO</p>
          <p><strong>전화예약</strong> · <a href="${SITE.phoneHref}" style="color:var(--brand-300);font-weight:700">${SITE.phone}</a></p>
          <p class="muted" style="max-width:34ch">경기북부 주요 생활권과 자택·호텔·오피스텔·펜션 이용 전 확인사항을 안내합니다.</p>
          <div class="tg-btns">
            <a class="btn--tg" href="${SITE.telegram.web}" rel="noopener" target="_blank">${TG_ICON} 웹사이트 제작문의</a>
            <a class="btn--tg" href="${SITE.telegram.ad}" rel="noopener" target="_blank">${TG_ICON} 제휴문의</a>
          </div>
        </div>
        ${col(FOOTER_LINKS.areas)}
        ${col(FOOTER_LINKS.info)}
      </div>
      <div class="footer-contact" style="margin-top:36px">
        <div class="footer-phone">전화예약 <a href="${SITE.phoneHref}">${SITE.phone}</a></div>
      </div>
      <div class="footer-legal">
        <span>© <span id="yr">2026</span> 간다GO. 경기북부 출장마사지·홈타이 지역 안내.</span>
        <span>
          <a href="/gyeonggi-north/check/privacy/">개인정보 처리방침</a> ·
          <a href="/gyeonggi-north/check/service-policy/">불법·선정적 서비스 불가 안내</a>
        </span>
      </div>
    </div>
  </footer>`;
}

// ---- JSON-LD schema ------------------------------------------------------
function schemaJson(page) {
  const graph = [];
  const orgId = SITE.base + "/#organization";
  const webUrl = abs(page.path === "/" ? "/" : page.path);

  // Organization (모든 페이지). LocalBusiness 미사용 (오프라인 매장 없음).
  graph.push({
    "@type": "Organization",
    "@id": orgId,
    name: SITE.name,
    url: SITE.base + "/",
    telephone: SITE.phone,
    description: "경기북부 출장마사지·홈타이 생활권 및 이용 전 확인사항 안내",
    areaServed: "경기북부",
    logo: { "@type": "ImageObject", url: abs(SITE.ogImage) },
  });

  // WebPage
  graph.push({
    "@type": "WebPage",
    "@id": webUrl + "#webpage",
    url: webUrl,
    name: page.title,
    description: page.description,
    isPartOf: { "@id": orgId },
    inLanguage: "ko-KR",
    primaryImageOfPage: { "@type": "ImageObject", url: abs(page.image || SITE.ogImage) },
  });

  // BreadcrumbList
  if (page.crumbs?.length) {
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: page.crumbs.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.name,
        item: abs(c.href || page.path),
      })),
    });
  }

  // FAQPage (본문에 실제로 보이는 FAQ만)
  if (page.faqs?.length) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: page.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }

  // Service (요금 코스) — 신중 사용
  if (page.includeService) {
    graph.push({
      "@type": "Service",
      name: "간다GO 경기북부 출장마사지·홈타이",
      serviceType: "출장마사지",
      areaServed: "경기북부",
      provider: { "@id": orgId },
      offers: PRICING.map((p) => ({
        "@type": "Offer",
        name: p.name,
        price: p.price.replace(/,/g, ""),
        priceCurrency: "KRW",
      })),
    });
  }

  return JSON.stringify({ "@context": "https://schema.org", "@graph": graph });
}

// ---- Full page shell -----------------------------------------------------
export function renderPage(page) {
  const desc = page.description || "";
  if ([...desc].length > 80) {
    console.warn(`⚠ description > 80자 (${[...desc].length}) : ${page.path}`);
  }
  const canonical = abs(page.path === "/" ? "/" : page.path);
  const ogImg = abs(page.image || SITE.ogImage);
  const noindex = page.noindex ? `\n  <meta name="robots" content="noindex,follow">` : "";

  return `<!doctype html>
<html lang="ko">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(page.title)}</title>
  <meta name="description" content="${esc(desc)}">
  <link rel="canonical" href="${canonical}">${noindex}
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="간다GO">
  <meta property="og:title" content="${esc(page.title)}">
  <meta property="og:description" content="${esc(desc)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${ogImg}">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin>
  <link rel="stylesheet" as="style" crossorigin
    href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css">
  <link rel="stylesheet" href="/assets/css/tokens.css">
  <link rel="stylesheet" href="/assets/css/site.css">
  <script type="application/ld+json">${schemaJson(page)}</script>
</head>
<body>
${headerHtml(page.path)}
${breadcrumbHtml(page.crumbs)}
<main id="main">
${page.body}
</main>
${footerHtml()}
<script src="/assets/js/site.js" defer></script>
<script>document.getElementById('yr')&&(document.getElementById('yr').textContent=new Date().getFullYear());</script>
</body>
</html>`;
}

export { esc, abs };
