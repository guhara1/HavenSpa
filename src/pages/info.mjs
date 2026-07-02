// 이용 정보·정책·문의 페이지
import { pricingBlock, faqBlock, whwBlock } from "../render.mjs";
import { SITE } from "../config.mjs";

const crumbHome = { name: "경기북부 홈", href: "/" };

// --- 요금 안내 -----------------------------------------------------------
const pricing = {
  path: "/gyeonggi-north/pricing/",
  title: "요금 안내｜경기북부 출장마사지 코스별 기준 요금 - 간다GO",
  description: "간다GO 경기북부 출장마사지 요금. 60분 90,000원·90분 150,000원·120분 180,000원.",
  crumbs: [crumbHome, { name: "요금 안내", href: "/gyeonggi-north/pricing/" }],
  includeService: true,
  faqs: [
    { q: "추가 비용이 있나요?", a: "표기된 코스 기준 요금 외 추가 비용 없이 안내합니다. 지역·시간대·이동 거리에 따라 상담 시 최종 확인됩니다." },
    { q: "외곽 지역은 요금이 다른가요?", a: "포천·가평·연천 등 외곽·접경 지역은 이동 거리에 따라 상담 시 이동 기준을 함께 확인합니다." },
    { q: "예약은 어떻게 하나요?", a: "전화예약 0508-202-4719 또는 문의 채널로 방문 주소와 희망 시간을 알려주시면 안내해 드립니다." },
  ],
  body: `
  <section class="section section--tight">
    <div class="wrap">
      <span class="eyebrow">이용 정보 · 요금</span>
      <h1 style="font-size:var(--fs-hero)">코스별 기준 요금 안내</h1>
      <p class="lead" style="max-width:64ch;color:var(--text-muted)">60·90·120분 코스별 기준 요금이며, 추가 비용 없이 있는 그대로 안내해 드립니다. 지역·예약 시간대·이동 거리에 따라 상담 시 최종 확인됩니다.</p>
    </div>
  </section>
  ${pricingBlock()}
  <section class="section section--tight">
    <div class="wrap prose" style="max-width:74ch">
      <h2>요금 기준 안내</h2>
      <p>표기 요금은 경기북부 전 생활권 공통 기준입니다. 자택·호텔·오피스텔·아파트·펜션 등 이용 장소와 관계없이 동일한 코스 기준으로 안내하며, 외곽·접경 지역은 이동 거리에 따라 상담 시 이동 기준을 함께 확인합니다. 상위노출·최저가·1위 같은 표현은 사용하지 않으며, 실제 상담 기준 그대로 안내합니다.</p>
      <p>예약은 전화예약 <a href="${SITE.phoneHref}">${SITE.phone}</a> 또는 문의 채널을 통해 방문 주소와 희망 시간을 알려주시면 됩니다. 생활권별 안내는 <a href="/">경기북부 홈</a>에서 확인할 수 있습니다.</p>
    </div>
  </section>
  ${faqBlock([
    { q: "추가 비용이 있나요?", a: "표기된 코스 기준 요금 외 추가 비용 없이 안내합니다. 지역·시간대·이동 거리에 따라 상담 시 최종 확인됩니다." },
    { q: "외곽 지역은 요금이 다른가요?", a: "포천·가평·연천 등 외곽·접경 지역은 이동 거리에 따라 상담 시 이동 기준을 함께 확인합니다." },
    { q: "예약은 어떻게 하나요?", a: "전화예약 0508-202-4719 또는 문의 채널로 방문 주소와 희망 시간을 알려주시면 안내해 드립니다." },
  ])}
  `,
};

// --- 예약 전 확인 (허브) -------------------------------------------------
const checkItems = [
  ["방문 주소 확인", "정확한 도로명·상세 동·호수를 확인합니다."],
  ["건물 출입 방식", "공동현관·엘리베이터·출입 방식을 확인합니다."],
  ["아파트 공동현관 확인", "공동현관 출입 방법과 방문 시간대를 확인합니다."],
  ["호텔·숙소 정책", "체크인 여부와 객실 정책을 확인합니다."],
  ["펜션·독채 숙소 확인", "주소·주차·야간 출입 가능 여부를 확인합니다."],
  ["외곽 이동 기준", "포천·가평·연천 등 외곽 이동 기준을 확인합니다."],
  ["예약 가능 시간", "지역별 예약 가능 시간대를 확인합니다."],
  ["예약 변경 기준", "변경·취소 기준을 사전에 확인합니다."],
  ["개인정보 처리 기준", "최소 정보만 확인하는 처리 기준을 확인합니다."],
  ["불법·선정적 서비스 불가", "제공하지 않는 서비스 범위를 확인합니다."],
];

const check = {
  path: "/gyeonggi-north/check/",
  title: "예약 전 확인｜경기북부 출장마사지 이용 전 확인사항 - 간다GO",
  description: "경기북부 출장마사지 예약 전 확인. 방문 주소·출입 방식·외곽 이동·예약 시간 안내.",
  crumbs: [crumbHome, { name: "예약 전 확인", href: "/gyeonggi-north/check/" }],
  faqs: [
    { q: "무엇을 먼저 확인해야 하나요?", a: "정확한 방문 주소와 건물 출입 방식, 예약 가능 시간을 먼저 확인합니다. 외곽·접경 지역은 이동 기준을 추가로 확인합니다." },
    { q: "펜션·독채 숙소는 무엇을 확인하나요?", a: "정확한 주소, 주차 가능 여부, 야간 출입 가능 여부, 외곽 이동 기준을 먼저 확인합니다." },
    { q: "개인정보는 어떻게 처리하나요?", a: "예약 확인과 연락에 필요한 최소 정보만 확인하며 개인정보 처리방침에 따라 처리합니다." },
  ],
  body: `
  <section class="section section--tight">
    <div class="wrap">
      <span class="eyebrow">이용 안내 · 예약 전 확인</span>
      <h1 style="font-size:var(--fs-hero)">예약 전 확인해야 할 내용</h1>
      <p class="lead" style="max-width:64ch;color:var(--text-muted)">방문 주소, 건물 출입 방식, 이용 장소, 예약 가능 시간을 미리 확인하면 안내가 더 정확하고 빨라집니다.</p>
    </div>
  </section>
  <section class="section section--tight">
    <div class="wrap">
      <div class="grid grid--2">
        ${checkItems.map(([t, d]) => `<div class="card"><h3 style="font-size:1.05rem">${t}</h3><p>${d}</p></div>`).join("")}
      </div>
    </div>
  </section>
  <section class="section section--tight">
    <div class="wrap prose" style="max-width:74ch">
      <h2>이용 장소별로 확인 항목이 다릅니다</h2>
      <p>자택·아파트는 공동현관과 주차 동선, 오피스텔은 공동현관·엘리베이터·관리 규정, 호텔·숙소는 체크인 여부와 객실 정책, 펜션·독채 숙소는 주차와 야간 출입 가능 여부를 확인합니다. 포천·가평·연천 등 외곽·접경 지역은 예약 가능 시간과 이동 기준이 달라질 수 있어 사전 확인이 필요합니다.</p>
      <p>개인정보는 <a href="/gyeonggi-north/check/privacy/">개인정보 처리방침</a>에 따라 최소 정보만 확인하며, 불법·선정적 서비스는 <a href="/gyeonggi-north/check/service-policy/">불법·선정적 서비스 불가 안내</a>대로 제공하지 않습니다. 생활권별 안내는 <a href="/">경기북부 홈</a>에서 확인할 수 있습니다.</p>
    </div>
  </section>
  ${faqBlock([
    { q: "무엇을 먼저 확인해야 하나요?", a: "정확한 방문 주소와 건물 출입 방식, 예약 가능 시간을 먼저 확인합니다. 외곽·접경 지역은 이동 기준을 추가로 확인합니다." },
    { q: "펜션·독채 숙소는 무엇을 확인하나요?", a: "정확한 주소, 주차 가능 여부, 야간 출입 가능 여부, 외곽 이동 기준을 먼저 확인합니다." },
    { q: "개인정보는 어떻게 처리하나요?", a: "예약 확인과 연락에 필요한 최소 정보만 확인하며 개인정보 처리방침에 따라 처리합니다." },
  ])}
  `,
};

// --- 개인정보 처리방침 ---------------------------------------------------
const privacy = {
  path: "/gyeonggi-north/check/privacy/",
  title: "개인정보 처리방침 - 간다GO 경기북부 출장마사지 안내",
  description: "간다GO 개인정보 처리방침. 예약 확인·연락에 필요한 최소 정보만 수집·이용합니다.",
  crumbs: [crumbHome, { name: "예약 전 확인", href: "/gyeonggi-north/check/" }, { name: "개인정보 처리방침", href: "/gyeonggi-north/check/privacy/" }],
  body: `
  <section class="section section--tight">
    <div class="wrap prose" style="max-width:78ch">
      <span class="eyebrow">정책</span>
      <h1>개인정보 처리방침</h1>
      <p>간다GO(이하 '사이트')는 예약 확인과 연락을 위한 최소한의 정보만 확인하며, 이용자의 개인정보를 중요하게 생각합니다.</p>
      <h2>1. 수집 항목 및 목적</h2>
      <p>예약 상담 과정에서 방문 주소(대략적 생활권), 연락처, 희망 예약 시간 등 예약 확인과 연락에 필요한 최소 정보만 확인합니다. 마케팅·광고 목적의 별도 수집은 하지 않습니다.</p>
      <h2>2. 보유 및 이용 기간</h2>
      <p>예약 상담 목적이 달성되면 관련 정보는 지체 없이 파기하며, 관계 법령에서 정한 경우에 한해 해당 기간 동안만 보관합니다.</p>
      <h2>3. 제3자 제공</h2>
      <p>이용자의 동의 없이 개인정보를 외부에 제공하지 않습니다. 다만 법령에 따른 요청이 있는 경우에는 관련 절차에 따릅니다.</p>
      <h2>4. 이용자의 권리</h2>
      <p>이용자는 언제든 본인 정보의 확인·수정·삭제를 요청할 수 있으며, 요청 시 지체 없이 조치합니다.</p>
      <h2>5. 문의</h2>
      <p>개인정보 관련 문의는 전화예약 <a href="${SITE.phoneHref}">${SITE.phone}</a> 또는 <a href="/gyeonggi-north/contact/">문의하기</a>를 통해 접수할 수 있습니다.</p>
    </div>
  </section>
  `,
};

// --- 불법·선정적 서비스 불가 안내 --------------------------------------
const servicePolicy = {
  path: "/gyeonggi-north/check/service-policy/",
  title: "불법·선정적 서비스 불가 안내 - 간다GO 경기북부",
  description: "간다GO는 불법·선정적 서비스를 제공하거나 안내하지 않습니다. 건전한 관리 기준.",
  crumbs: [crumbHome, { name: "예약 전 확인", href: "/gyeonggi-north/check/" }, { name: "불법·선정적 서비스 불가 안내", href: "/gyeonggi-north/check/service-policy/" }],
  body: `
  <section class="section section--tight">
    <div class="wrap prose" style="max-width:78ch">
      <span class="eyebrow">정책</span>
      <h1>불법·선정적 서비스 불가 안내</h1>
      <p>간다GO는 건전한 관리 기준 안에서만 운영되며, 불법·선정적 서비스를 제공하거나 안내하지 않습니다.</p>
      <h2>제공하지 않는 서비스</h2>
      <ul>
        <li>법령에서 금지하는 일체의 불법 서비스</li>
        <li>선정적·성적 서비스 또는 이를 암시하는 안내</li>
        <li>미성년자 대상 서비스</li>
      </ul>
      <h2>운영 원칙</h2>
      <p>모든 안내와 상담은 코스별 기준 요금과 건전한 관리 범위 안에서 이루어집니다. 위 기준에 반하는 요청은 정중히 거절되며, 사이트 내 어떠한 콘텐츠에도 선정적 표현을 사용하지 않습니다.</p>
      <p>이용 기준은 <a href="/gyeonggi-north/check/">예약 전 확인</a>에서, 요금은 <a href="/gyeonggi-north/pricing/">요금 안내</a>에서 확인할 수 있습니다.</p>
    </div>
  </section>
  `,
};

// --- 운영 기준 -----------------------------------------------------------
const operation = {
  path: "/gyeonggi-north/operation/",
  title: "운영 기준 - 간다GO 경기북부 출장마사지 안내",
  description: "간다GO 운영 기준. 예약 가능 시간·이동 기준·건전한 관리 원칙을 안내합니다.",
  crumbs: [crumbHome, { name: "운영 기준", href: "/gyeonggi-north/operation/" }],
  body: `
  <section class="section section--tight">
    <div class="wrap prose" style="max-width:78ch">
      <span class="eyebrow">운영</span>
      <h1>운영 기준</h1>
      <p>간다GO는 경기북부 생활권을 기준으로 예약을 안내하며, 지역·시간대·이동 거리에 따라 상담 시 최종 기준을 확인합니다.</p>
      <h2>예약 가능 시간</h2>
      <p>예약 가능 시간은 생활권에 따라 다르며, 외곽·접경 지역은 이동 기준에 따라 조정될 수 있습니다. 정확한 시간은 상담 시 안내합니다.</p>
      <h2>이동 기준</h2>
      <p>고양·일산·의정부·남양주·파주 등 도심 생활권과 포천·가평·연천 등 외곽·접경 지역은 이동 기준이 다릅니다. 자세한 내용은 <a href="/gyeonggi-north/check/">예약 전 확인</a>에서 확인할 수 있습니다.</p>
      <h2>건전한 관리 원칙</h2>
      <p>모든 안내는 건전한 관리 기준 안에서 이루어지며, 불법·선정적 서비스는 <a href="/gyeonggi-north/check/service-policy/">불가 안내</a>대로 제공하지 않습니다.</p>
    </div>
  </section>
  `,
};

// --- 문의하기 -----------------------------------------------------------
const contact = {
  path: "/gyeonggi-north/contact/",
  title: "문의하기 - 간다GO 경기북부 출장마사지 예약 안내",
  description: "간다GO 문의. 전화예약 0508-202-4719 또는 텔레그램으로 예약·제휴를 안내합니다.",
  crumbs: [crumbHome, { name: "문의하기", href: "/gyeonggi-north/contact/" }],
  body: `
  <section class="section section--tight">
    <div class="wrap">
      <span class="eyebrow">문의</span>
      <h1 style="font-size:var(--fs-hero)">문의하기</h1>
      <p class="lead" style="max-width:60ch;color:var(--text-muted)">방문 주소와 희망 시간을 알려주시면 생활권 기준으로 안내해 드립니다.</p>
      <div class="grid grid--2" style="margin-top:28px">
        <div class="card">
          <h3>전화예약</h3>
          <p class="footer-phone" style="margin:8px 0"><a href="${SITE.phoneHref}">${SITE.phone}</a></p>
          <p>가장 빠른 예약 방법입니다. 방문 주소와 희망 시간을 알려주세요.</p>
        </div>
        <div class="card">
          <h3>텔레그램 문의</h3>
          <div class="tg-btns" style="margin-top:12px">
            <a class="btn--tg" href="${SITE.telegram.web}" rel="noopener" target="_blank">웹사이트 제작문의</a>
            <a class="btn--tg" href="${SITE.telegram.ad}" rel="noopener" target="_blank">제휴문의</a>
          </div>
          <p style="margin-top:14px">웹사이트 제작·제휴 관련 문의는 텔레그램으로 편하게 연락 주세요.</p>
        </div>
      </div>
    </div>
  </section>
  ${whwBlock({
    who: "경기북부 예약을 직접 상담하는 간다GO 예약 안내팀입니다.",
    how: "전화·텔레그램으로 방문 주소와 시간을 확인해 생활권 기준으로 안내합니다.",
    why: "정확한 확인이 빠르고 정확한 안내로 이어지기 때문입니다.",
  })}
  `,
};

export default [pricing, check, privacy, servicePolicy, operation, contact];
