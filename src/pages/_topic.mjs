// 주제형 페이지 공통 빌더 (이용 장소 / 예약 전 확인 세부)
// 지역명 복붙 도어웨이가 아니라 장소·상황별로 실제 다른 내용을 담는다.
import { pricingBlock, faqBlock, whwBlock, heroMedia } from "../render.mjs";

const relCard = (t, h) => `<a class="card card--link" href="${h}"><h3 style="font-size:1.05rem">${t}</h3></a>`;

export function topicPage(cfg) {
  const checklistHtml = cfg.checklist
    ? `<section class="section section--tight"><div class="wrap"><div class="sec-head center"><h2>${cfg.checklistTitle || "확인 체크리스트"}</h2></div><ul class="checklist" style="max-width:780px;margin-inline:auto">${cfg.checklist.map((c) => `<li>${c}</li>`).join("")}</ul></div></section>`
    : "";
  const relatedHtml = cfg.related
    ? `<section class="section section--tight"><div class="wrap"><div class="sec-head center"><h2>함께 확인하면 좋은 안내</h2></div><div class="grid grid--4">${cfg.related.map(([t, h]) => relCard(t, h)).join("")}</div></div></section>`
    : "";

  const body = `
  <section class="hero">
    <div class="wrap hero__grid hero__grid--split">
      <div>
        <span class="eyebrow">${cfg.eyebrow}</span>
        <h1 style="font-size:var(--fs-hero);max-width:24ch">${cfg.h1}</h1>
        <p class="lead" style="max-width:70ch;color:var(--text-muted)">${cfg.lead}</p>
        <div class="hero__cta" style="margin-top:18px">
          <a class="btn btn--primary btn--lg" href="tel:0508-202-4719">전화예약 0508-202-4719</a>
          <a class="btn btn--ghost btn--lg" href="/gyeonggi-north/check/">예약 전 확인</a>
        </div>
      </div>
      ${heroMedia(cfg.alt || `${cfg.crumb} 안내 이미지`)}
    </div>
  </section>

  <section class="section section--tight">
    <div class="wrap prose" style="max-width:80ch">${cfg.article}${cfg.extra || ""}</div>
  </section>

  ${checklistHtml}
  ${cfg.includePricing ? pricingBlock() : ""}
  ${relatedHtml}
  ${faqBlock(cfg.faqs)}
  ${whwBlock(cfg.whw)}
  `;

  return {
    path: cfg.path,
    title: cfg.title,
    description: cfg.description,
    crumbs: cfg.crumbs,
    includeService: !!cfg.includePricing,
    faqs: cfg.faqs,
    noindex: cfg.noindex,
    body,
  };
}
