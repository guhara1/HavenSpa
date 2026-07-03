// 도시·군 상세페이지 (10개)
// 도어웨이 방지: 각 도시 고유의 구·행정동 구성, 실제 노선·역세권, 이동 기준,
// 숙소 형태, FAQ를 다르게 작성. 상위 생활권 페이지보다 세분화된 altitude 유지.
import { pricingBlock, faqBlock, whwBlock, heroMedia } from "../render.mjs";

const checklist = [
  "방문 주소와 상세 동·호수를 확인했나요?",
  "가까운 역·터미널 또는 신도시 생활권을 확인했나요?",
  "공동현관·엘리베이터·건물 출입 방식을 확인했나요?",
  "예약 가능 시간과 이동 기준을 확인했나요?",
  "불법·선정적 서비스 불가 안내를 확인했나요?",
];

const relCard = (t, h) => `<a class="card card--link" href="${h}"><h3 style="font-size:1.05rem">${t}</h3></a>`;
const chip = (t) => `<span class="chip" style="cursor:default">${t}</span>`;

export function cityPage(cfg) {
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
      ${heroMedia(`${cfg.crumb} 프리미엄 스파룸 분위기 이미지`)}
    </div>
  </section>

  <section class="section section--tight">
    <div class="wrap prose" style="max-width:80ch">${cfg.article}${cfg.venues || ""}</div>
  </section>

  <section class="section section--tight">
    <div class="wrap">
      <div class="sec-head center"><h2>${cfg.crumb} 대표 생활권</h2></div>
      <div class="grid grid--3">${cfg.zones.map((z) => `<div class="card"><h3 style="font-size:1.05rem">${z.t}</h3><p>${z.d}</p></div>`).join("")}</div>
    </div>
  </section>

  ${cfg.subAreas ? `<section class="section section--tight">
    <div class="wrap">
      <div class="sec-head center"><h2>${cfg.subAreasTitle || "구·생활권 바로가기"}</h2><p>지역을 선택하면 해당 안내 페이지로 이동합니다.</p></div>
      <div class="grid grid--3">${cfg.subAreas.map(([t, h]) => `<a class="card card--link" href="${h}"><h3 style="font-size:1.05rem">${t}</h3></a>`).join("")}</div>
    </div>
  </section>` : ""}

  ${cfg.dongs ? `<section class="section section--tight">
    <div class="wrap">
      <div class="sec-head center"><h2>행정동·읍면 바로가기</h2><p>동·읍·면 이름을 누르면 해당 생활권 안내로 이동합니다.</p></div>
      <div class="chiprow" style="justify-content:center;max-width:900px;margin-inline:auto">${cfg.dongs.map(([t, h]) => `<a class="chip" href="${h}">${t}</a>`).join("")}</div>
    </div>
  </section>` : ""}

  <section class="section section--tight">
    <div class="wrap">
      <div class="sec-head center"><h2>가까운 역·터미널</h2><p>출구별·노선별 페이지는 만들지 않으며, 이동 기준 확인용 거점만 안내합니다.</p></div>
      <div class="chiprow" style="justify-content:center;max-width:820px;margin-inline:auto">${cfg.stations.map(chip).join("")}</div>
    </div>
  </section>

  ${pricingBlock()}

  <section class="section section--tight">
    <div class="wrap">
      <div class="sec-head center"><h2>예약 전 확인해야 할 내용</h2></div>
      <ul class="checklist" style="max-width:780px;margin-inline:auto">${checklist.map((c) => `<li>${c}</li>`).join("")}</ul>
    </div>
  </section>

  <section class="section section--tight">
    <div class="wrap">
      <div class="sec-head center"><h2>함께 확인하면 좋은 안내</h2></div>
      <div class="grid grid--4">${cfg.related.map(([t, h]) => relCard(t, h)).join("")}</div>
    </div>
  </section>

  ${faqBlock(cfg.faqs)}
  ${whwBlock(cfg.whw)}
  `;

  return {
    path: cfg.path,
    title: cfg.title,
    description: cfg.description,
    crumbs: [{ name: "경기북부 홈", href: "/" }, { name: cfg.parent.name, href: cfg.parent.href }, { name: cfg.crumb, href: cfg.path }],
    includeService: true,
    faqs: cfg.faqs,
    noindex: cfg.noindex,
    body,
  };
}

// 생활권(life) URL 맵 — 행정동 버튼이 연결될 실제 페이지
export const L = {
  ilsanLake: "/gyeonggi-north/life/ilsan-lake-park/", maduBaekseok: "/gyeonggi-north/life/madu-baekseok/",
  juyeopDaehwa: "/gyeonggi-north/life/juyeop-daehwa/", hwajeongHaengsin: "/gyeonggi-north/life/hwajeong-haengsin/",
  samsongWonheung: "/gyeonggi-north/life/samsong-wonheung/", jichukHyangdong: "/gyeonggi-north/life/jichuk-hyangdong/",
  dasanDonong: "/gyeonggi-north/life/dasan-donong/", byeollaeGalmae: "/gyeonggi-north/life/byeollae-galmae/",
  pyeongnaeHopyeong: "/gyeonggi-north/life/pyeongnae-hopyeong/", jinjeopOnam: "/gyeonggi-north/life/jinjeop-onam/",
  hwadoMaseok: "/gyeonggi-north/life/hwado-maseok/", uijeongbuCentral: "/gyeonggi-north/life/uijeongbu-station-central/",
  minrakGosan: "/gyeonggi-north/life/minrak-gosan/", geumoSingok: "/gyeonggi-north/life/geumo-singok/",
  hoeryongGaneung: "/gyeonggi-north/life/hoeryong-ganeung/", okjeong: "/gyeonggi-north/life/okjeong/",
  deokjeongHoecheon: "/gyeonggi-north/life/deokjeong-hoecheon/", unjeong: "/gyeonggi-north/life/unjeong-newtown/",
  yadangWadong: "/gyeonggi-north/life/yadang-wadong/", geumchon: "/gyeonggi-north/life/geumchon-paju-cityhall/",
  munsan: "/gyeonggi-north/life/munsan-north-paju/", songuriSoheul: "/gyeonggi-north/life/songuri-soheul/",
  jihaengSaengyeon: "/gyeonggi-north/life/jihaeng-saengyeon/", gapyeongCheongpyeong: "/gyeonggi-north/life/gapyeong-cheongpyeong/",
  jeongok: "/gyeonggi-north/life/jeongok-yeoncheon/",
};

const AREA = {
  goyang: { name: "고양·일산권", href: "/gyeonggi-north/area/goyang-ilsan/" },
  ny: { name: "남양주·구리권", href: "/gyeonggi-north/area/namyangju-guri/" },
  uj: { name: "의정부·양주권", href: "/gyeonggi-north/area/uijeongbu-yangju/" },
  paju: { name: "파주·운정권", href: "/gyeonggi-north/area/paju-unjeong/" },
  outer: { name: "외곽·관광권", href: "/gyeonggi-north/area/pocheon-dongducheon-gapyeong-yeoncheon/" },
};

// ===== 1. 고양시 =========================================================
const goyang = cityPage({
  path: "/gyeonggi-north/goyang-si/", crumb: "고양시", parent: AREA.goyang,
  eyebrow: "도시·군 안내 · 고양시",
  subAreasTitle: "고양시 3개 구 바로가기",
  subAreas: [
    ["일산동구", "/gyeonggi-north/goyang-si/ilsandong-gu/"],
    ["일산서구", "/gyeonggi-north/goyang-si/ilsanseo-gu/"],
    ["덕양구", "/gyeonggi-north/goyang-si/deogyang-gu/"],
  ],
  dongs: [
    ["마두동", "/gyeonggi-north/goyang-si/madu-dong/"], ["백석동", "/gyeonggi-north/goyang-si/baekseok-dong/"],
    ["장항동", "/gyeonggi-north/goyang-si/janghang-dong/"], ["정발산동", "/gyeonggi-north/goyang-si/jeongbalsan-dong/"],
    ["주엽동", "/gyeonggi-north/goyang-si/juyeop-dong/"], ["대화동", "/gyeonggi-north/goyang-si/daehwa-dong/"], ["탄현동", "/gyeonggi-north/goyang-si/tanhyeon-dong/"],
    ["화정동", "/gyeonggi-north/goyang-si/hwajeong-dong/"], ["행신동", "/gyeonggi-north/goyang-si/haengsin-dong/"],
    ["삼송동", "/gyeonggi-north/goyang-si/samsong-dong/"], ["원흥동", "/gyeonggi-north/goyang-si/wonheung-dong/"],
    ["지축동", "/gyeonggi-north/goyang-si/jichuk-dong/"], ["향동동", "/gyeonggi-north/goyang-si/hyangdong-dong/"],
  ],
  title: "고양시 출장마사지｜일산동구·서구·덕양구 안내 - 간다GO",
  description: "고양시 출장마사지·홈타이. 일산동구·일산서구·덕양구 3개 구 생활권 안내.",
  h1: "고양시 출장마사지 · 일산동구·서구·덕양구 안내",
  lead: "인구 100만 특례시 고양은 세 개 구의 성격이 뚜렷이 다릅니다. 구별로 나눠 이용 기준을 안내합니다.",
  article: `
    <h2>고양시는 세 개 구의 성격이 다릅니다</h2>
    <p>고양특례시는 일산동구·일산서구·덕양구로 나뉘며 인구 약 100만의 대도시입니다. 같은 고양이라도 일산의 신도시 상권, 킨텍스·방송영상밸리 업무권, 덕양구의 서울 접경 택지지구가 확연히 다른 성격을 가집니다. 그래서 방문 주소가 어느 구·어느 동인지에 따라 공동현관 방식과 방문 가능 시간대가 달라집니다.</p>
    <h2>일산동구 — 호수공원·상권 중심</h2>
    <p>마두·백석·정발산·장항·풍동을 포함하며, 일산호수공원과 라페스타·웨스턴돔 상권, 오피스텔이 밀집한 도시형 생활권입니다. 오피스텔 방문 시 공동현관 비밀번호와 엘리베이터, 관리 규정을 먼저 확인하는 것이 좋습니다.</p>
    <h2>일산서구 — 킨텍스·주엽·대화</h2>
    <p>주엽·대화·탄현·일산동을 포함하며 킨텍스와 원마운트, 대형 아파트 단지가 특징입니다. 전시·행사 기간에는 인근 호텔·숙소 이용 수요가 늘어, 체크인 여부와 객실 정책을 사전에 확인하면 안내가 빨라집니다.</p>
    <h2>덕양구 — 서울 접경 택지지구</h2>
    <p>화정·행신·삼송·원흥·지축·향동을 포함합니다. 삼송·원흥·지축·향동은 비교적 최근 조성된 택지지구로 서울 은평·상암과 맞닿아 있어, 아파트 공동현관과 주차 동선 확인이 중요합니다.</p>
    <h2>교통·이동 기준</h2>
    <p>3호선 대화~지축 구간, 경의중앙선 행신·능곡, GTX-A 대곡, 서해선이 지나며 고양종합터미널이 있습니다. 노선·출구별 페이지는 만들지 않으며, 방문 주소 기준 이동 거리와 예약 가능 시간만 확인합니다. 행정 정보는 <a href="https://www.goyang.go.kr/" rel="noopener" target="_blank">고양특례시청</a>을 참고할 수 있습니다.</p>
    <h2>예약 전 확인·운영 기준</h2>
    <p>정확한 방문 주소와 건물 출입 방식, 예약 가능 시간을 사전에 확인합니다. 개인정보는 <a href="/gyeonggi-north/check/privacy/">개인정보 처리방침</a>에 따라 최소 정보만 확인하며, 불법·선정적 서비스는 <a href="/gyeonggi-north/check/service-policy/">불가 안내</a>대로 제공하지 않습니다. 더 넓은 생활권 개요는 <a href="/gyeonggi-north/area/goyang-ilsan/">고양·일산권</a>에서 확인할 수 있습니다.</p>
  `,
  venues: `
    <h2>고양시 이용 장소별 확인 기준</h2>
    <p>고양은 오피스텔 비중이 높은 편이라, 라페스타·웨스턴돔 인근이나 백석·마두의 오피스텔을 방문할 때는 공동현관 비밀번호와 방문객 엘리베이터 사용 방식, 심야 관리 규정을 미리 확인하는 것이 좋습니다. 킨텍스·원마운트 인근 호텔·레지던스는 전시·행사 기간에 체크인 시간이 몰릴 수 있어 객실 정책과 프런트 통과 여부를 함께 확인하면 방문이 매끄럽습니다.</p>
    <p>덕양구 삼송·원흥·지축·향동의 신축 아파트 단지는 지상 차량 통제와 지하주차장 방문 등록이 필요한 곳이 많아, 동·호수와 함께 방문 차량 등록 방법을 확인해 두면 좋습니다. 화정·행신의 기존 주거지는 공동현관 호출 방식과 주차 여유가 단지마다 달라 예약 시 함께 안내드립니다.</p>
  `,
  zones: [
    { t: "일산동구", d: "호수공원·라페스타 상권, 오피스텔 밀집" },
    { t: "일산서구", d: "킨텍스·주엽·대화 아파트권" },
    { t: "덕양구", d: "삼송·원흥·지축·향동 서울 접경 택지" },
    { t: "화정·행신", d: "역세권 주거지 생활권" },
    { t: "마두·백석", d: "역세권 아파트·상권" },
    { t: "탄현", d: "일산 북부 주거지" },
  ],
  stations: ["대화역", "주엽역", "정발산역", "마두역", "백석역", "화정역", "행신역", "삼송역", "원흥역", "지축역", "고양종합터미널"],
  related: [["고양·일산권", "/gyeonggi-north/area/goyang-ilsan/"], ["파주시", "/gyeonggi-north/paju-si/"], ["오피스텔 이용", "/gyeonggi-north/check/"], ["요금 안내", "/gyeonggi-north/pricing/"]],
  faqs: [
    { q: "일산과 덕양구는 이용 기준이 다른가요?", a: "일산은 오피스텔·상권·숙소 중심, 덕양구는 삼송·원흥·지축·향동처럼 서울 접경 택지지구 기준이 중요해 확인 항목이 다릅니다." },
    { q: "킨텍스 인근 호텔도 가능한가요?", a: "체크인 여부와 객실 정책을 먼저 확인하면 안내가 빠릅니다. 행사 기간에는 예약이 몰릴 수 있습니다." },
    { q: "요금은 어떻게 되나요?", a: "60분 90,000원, 90분 150,000원, 120분 180,000원 기준이며 추가 비용 없이 안내합니다." },
  ],
  whw: {
    who: "고양시 3개 구 생활권을 상담하는 간다GO 예약 안내팀이 작성했습니다.",
    how: "일산동구·서구·덕양구를 상권·킨텍스·택지지구 기준으로 구분해 안내합니다.",
    why: "100만 대도시 고양은 구별 성격이 달라 확인 항목이 다르기 때문입니다.",
  },
});

// ===== 2. 남양주시 =======================================================
const namyangju = cityPage({
  path: "/gyeonggi-north/namyangju-si/", crumb: "남양주시", parent: AREA.ny,
  eyebrow: "도시·군 안내 · 남양주시",
  subAreasTitle: "남양주 생활권 바로가기",
  subAreas: [
    ["다산·도농", L.dasanDonong], ["별내·갈매", L.byeollaeGalmae], ["평내호평", L.pyeongnaeHopyeong],
    ["진접·오남", L.jinjeopOnam], ["화도·마석", L.hwadoMaseok],
  ],
  dongs: [
    ["다산동", "/gyeonggi-north/namyangju-si/dasan-dong/"], ["도농동", "/gyeonggi-north/namyangju-si/donong-dong/"],
    ["별내동", "/gyeonggi-north/namyangju-si/byeollae-dong/"], ["평내동", "/gyeonggi-north/namyangju-si/pyeongnae-dong/"],
    ["호평동", "/gyeonggi-north/namyangju-si/hopyeong-dong/"], ["진접읍", "/gyeonggi-north/namyangju-si/jinjeop-eup/"],
    ["오남읍", "/gyeonggi-north/namyangju-si/onam-eup/"], ["화도읍", "/gyeonggi-north/namyangju-si/hwado-eup/"],
    ["와부읍", "/gyeonggi-north/namyangju-si/wabu-eup/"], ["퇴계원읍", "/gyeonggi-north/namyangju-si/toegyewon-eup/"],
  ],
  title: "남양주시 출장마사지｜다산·별내·화도 이용 기준 - 간다GO",
  description: "남양주시 출장마사지·홈타이. 다산·별내 신도시와 진접·화도 외곽 이동 안내.",
  h1: "남양주시 출장마사지 · 다산·별내·외곽 읍면 이용 기준",
  lead: "남양주는 신도시와 외곽 읍면이 함께 있는 넓은 도시입니다. 신도시와 외곽을 이동 기준으로 나눠 안내합니다.",
  article: `
    <h2>남양주는 넓고, 신도시와 외곽이 함께 있습니다</h2>
    <p>남양주시는 면적이 넓고 인구가 빠르게 늘어난 도시로, 다산·별내 같은 신도시와 진접·오남·화도·마석 같은 외곽 읍면이 함께 있습니다. 신도시는 아파트·오피스텔 밀집형, 외곽 읍면은 단독·전원주택과 차량 이동 기준이 중요해 확인 항목이 뚜렷이 다릅니다.</p>
    <h2>다산·별내 — 신도시 생활권</h2>
    <p>다산동·별내동은 지하철과 광역버스가 연결된 신도시로 아파트 공동현관, 주차 동선, 방문 가능 시간대 확인이 중심입니다. 도농·평내호평은 경춘선·경의중앙선 역세권 주거지입니다.</p>
    <h2>진접·오남·화도·마석 — 외곽 이동권</h2>
    <p>진접읍·오남읍·화도읍·와부읍은 외곽으로 갈수록 이동 거리가 길어져 정확한 주소와 야간 이동 가능 여부, 외곽 이동 기준을 먼저 확인해야 합니다. 마석은 경춘선 종점 방향의 외곽 생활권입니다.</p>
    <h2>교통·이동 기준</h2>
    <p>경춘선(평내호평·마석), 경의중앙선(도농), 8호선 별내선 연장 구간이 지나며 서울 강동·중랑과 인접합니다. 왕숙 신도시 개발이 진행 중이라 향후 생활권이 넓어질 수 있습니다. 행정 정보는 <a href="https://www.nyj.go.kr/" rel="noopener" target="_blank">남양주시청</a>을 참고할 수 있습니다.</p>
    <h2>예약 전 확인·운영 기준</h2>
    <p>신도시와 외곽은 확인 항목이 다릅니다. 공통 항목은 <a href="/gyeonggi-north/check/">예약 전 확인</a>에서, 외곽은 이동 기준을 추가로 확인하세요. 개인정보는 <a href="/gyeonggi-north/check/privacy/">처리방침</a>에 따르며 불법·선정적 서비스는 <a href="/gyeonggi-north/check/service-policy/">제공하지 않습니다</a>. 넓은 개요는 <a href="/gyeonggi-north/area/namyangju-guri/">남양주·구리권</a>을 참고하세요.</p>
  `,
  venues: `
    <h2>남양주시 이용 장소별 확인 기준</h2>
    <p>다산·별내 신도시의 대단지 아파트는 방문 차량 사전 등록과 지하주차장 진입 방식이 단지마다 달라, 예약 시 동·호수와 방문 등록 방법을 함께 확인하면 좋습니다. 별내·다산의 오피스텔·주상복합은 공동현관과 저층 상가 통과 동선, 방문 가능 시간대를 미리 확인하는 것이 편리합니다.</p>
    <p>화도·마석·진접·오남 등 외곽 읍면은 단독·전원주택이나 소규모 빌라가 많아 도로명 주소만으로는 진입로를 찾기 어려운 경우가 있습니다. 정확한 상세 주소와 야간 조명·주차 공간, 인근 지형 지물을 함께 알려주시면 이동 안내가 정확해집니다.</p>
  `,
  zones: [
    { t: "다산·도농", d: "지하철·광역버스 연결 신도시" },
    { t: "별내", d: "서울 접경 아파트 신도시" },
    { t: "평내호평", d: "경춘선 역세권 주거지" },
    { t: "진접·오남", d: "외곽 읍면 이동 기준 지역" },
    { t: "화도·마석", d: "외곽·야간 이동 확인 지역" },
    { t: "와부·조안", d: "한강변 외곽 생활권" },
  ],
  stations: ["평내호평역", "마석역", "도농역", "별내역(별내선)", "다산역", "퇴계원역", "남양주(금곡) 터미널"],
  related: [["남양주·구리권", "/gyeonggi-north/area/namyangju-guri/"], ["구리시", "/gyeonggi-north/guri-si/"], ["외곽 이동 기준", "/gyeonggi-north/check/"], ["요금 안내", "/gyeonggi-north/pricing/"]],
  faqs: [
    { q: "남양주 외곽 읍면도 방문 가능한가요?", a: "진접·오남·화도·마석 등은 이동 거리와 예약 가능 시간을 먼저 확인하며, 정확한 주소가 필요합니다." },
    { q: "다산·별내는 무엇을 확인하나요?", a: "신도시 아파트 공동현관, 주차 동선, 방문 가능 시간대를 확인합니다." },
    { q: "요금은 지역마다 다른가요?", a: "코스 기준 요금은 동일하며, 외곽은 이동 거리에 따라 상담 시 이동 기준을 확인합니다." },
  ],
  whw: {
    who: "남양주 신도시·외곽 생활권을 상담하는 간다GO 예약 안내팀이 작성했습니다.",
    how: "다산·별내 신도시와 진접·화도 외곽을 이동 기준으로 구분해 안내합니다.",
    why: "넓은 남양주는 신도시와 외곽의 확인 항목이 다르기 때문입니다.",
  },
});

// ===== 3. 파주시 =========================================================
const paju = cityPage({
  path: "/gyeonggi-north/paju-si/", crumb: "파주시", parent: AREA.paju,
  eyebrow: "도시·군 안내 · 파주시",
  subAreasTitle: "파주 생활권 바로가기",
  subAreas: [
    ["운정신도시", L.unjeong], ["야당·와동", L.yadangWadong], ["금촌·파주시청", L.geumchon], ["문산·파주북부", L.munsan],
  ],
  dongs: [
    ["운정동", "/gyeonggi-north/paju-si/unjeong-dong/"], ["동패동", "/gyeonggi-north/paju-si/dongpae-dong/"], ["교하동", "/gyeonggi-north/paju-si/gyoha-dong/"],
    ["야당동", "/gyeonggi-north/paju-si/yadang-dong/"], ["와동동", "/gyeonggi-north/paju-si/wadong-dong/"],
    ["금촌동", "/gyeonggi-north/paju-si/geumchon-dong/"], ["문산읍", "/gyeonggi-north/paju-si/munsan-eup/"], ["탄현면", "/gyeonggi-north/paju-si/tanhyeon-myeon/"], ["조리읍", "/gyeonggi-north/paju-si/jori-eup/"],
  ],
  title: "파주시 출장마사지｜운정신도시·금촌·문산 안내 - 간다GO",
  description: "파주시 출장마사지·홈타이. 운정신도시와 금촌·문산·탄현 접경권 이용 안내.",
  h1: "파주시 출장마사지 · 운정신도시·금촌·문산 안내",
  lead: "파주는 운정신도시의 도시형 수요와 문산·탄현의 접경·관광권이 함께 있는 넓은 도시입니다.",
  article: `
    <h2>파주는 신도시와 접경·관광권이 함께 있습니다</h2>
    <p>파주시는 운정신도시의 아파트·오피스텔 밀집권과 금촌 도심, 문산·탄현·교하의 외곽·접경·관광 생활권이 공존하는 넓은 도시입니다. 운정은 최근 조성된 신도시로 도시형 수요가 크고, 문산·탄현은 출판단지·헤이리 관광권과 접경지역 성격이 강합니다.</p>
    <h2>운정신도시 — 도시형 생활권</h2>
    <p>운정동·야당동·와동동·동패동·교하동을 포함하며 아파트·오피스텔·상권이 밀집합니다. 오피스텔은 공동현관·엘리베이터·방문 시간대를, 아파트 단지는 공동현관과 주차 동선을 확인합니다.</p>
    <h2>금촌·문산·탄현 — 도심과 접경·관광권</h2>
    <p>금촌동은 파주시청 인근 도심, 문산읍은 경의중앙선 북부 종착권, 탄현면은 헤이리·출판단지 관광권입니다. 접경·관광권은 정확한 주소, 야간 이동 가능 여부, 외곽 이동 기준을 먼저 확인해야 합니다.</p>
    <h2>교통·이동 기준</h2>
    <p>경의중앙선(운정·야당·금촌·문산), GTX-A 운정, 자유로 이동 동선이 주요 거점입니다. DMZ·접경지역과 인접해 예약 가능 시간이 지역에 따라 달라질 수 있습니다. 행정 정보는 <a href="https://www.paju.go.kr/" rel="noopener" target="_blank">파주시청</a>을 참고할 수 있습니다.</p>
    <h2>예약 전 확인·운영 기준</h2>
    <p>신도시와 접경·관광권은 확인 항목이 다릅니다. 공통 항목은 <a href="/gyeonggi-north/check/">예약 전 확인</a>에서 확인하세요. 개인정보는 <a href="/gyeonggi-north/check/privacy/">처리방침</a>을 따르며 불법·선정적 서비스는 <a href="/gyeonggi-north/check/service-policy/">제공하지 않습니다</a>. 넓은 개요는 <a href="/gyeonggi-north/area/paju-unjeong/">파주·운정권</a>을 참고하세요.</p>
  `,
  venues: `
    <h2>파주시 이용 장소별 확인 기준</h2>
    <p>운정신도시의 오피스텔·주상복합은 최근 지어진 곳이 많아 공동현관 인증 방식이 카드·비밀번호·호출 등으로 다양합니다. 방문 전 출입 방식과 방문객 엘리베이터 사용법, 지하주차장 등록 여부를 확인하면 대기 없이 방문할 수 있습니다. 야당·와동의 아파트 단지는 지상 차량 통제가 있는 곳이 있어 방문 차량 등록을 함께 확인합니다.</p>
    <p>문산·탄현·교하의 외곽·관광권은 펜션·전원주택·게스트하우스 형태가 섞여 있어 숙소명과 정확한 주소, 진입로, 야간 출입 가능 여부를 먼저 확인해야 합니다. 자유로를 이용하는 장거리 이동이 포함되면 예약 가능 시간이 조정될 수 있습니다.</p>
  `,
  zones: [
    { t: "운정신도시", d: "아파트·오피스텔·상권 밀집" },
    { t: "야당·와동", d: "경의중앙선 역세권 주거지" },
    { t: "금촌·파주시청", d: "파주 도심 생활권" },
    { t: "문산·파주북부", d: "접경·외곽 이동 기준 지역" },
    { t: "교하·동패", d: "신도시 인접 주거지" },
    { t: "탄현·헤이리", d: "출판단지·관광 인접권" },
  ],
  stations: ["운정역", "야당역", "금촌역", "문산역", "GTX-A 운정", "파주(문산) 터미널"],
  related: [["파주·운정권", "/gyeonggi-north/area/paju-unjeong/"], ["고양시", "/gyeonggi-north/goyang-si/"], ["예약 전 확인", "/gyeonggi-north/check/"], ["요금 안내", "/gyeonggi-north/pricing/"]],
  faqs: [
    { q: "운정과 문산은 이용 기준이 다른가요?", a: "운정은 신도시·오피스텔 중심, 문산·탄현은 접경·관광·외곽 기준 중심으로 확인 항목이 다릅니다." },
    { q: "문산 등 접경 지역도 가능한가요?", a: "접경·외곽 지역은 예약 가능 시간과 이동 기준이 달라질 수 있어 사전 확인이 필요합니다." },
    { q: "헤이리·탄현 관광 숙소도 되나요?", a: "관광 숙소는 정확한 주소와 출입 방식, 야간 이동 가능 여부를 먼저 확인합니다." },
  ],
  whw: {
    who: "파주 신도시·접경권을 상담하는 간다GO 예약 안내팀이 작성했습니다.",
    how: "운정신도시와 문산·탄현 접경·관광권을 구분해 이동 기준을 안내합니다.",
    why: "신도시와 접경·관광권은 확인 항목이 다르기 때문입니다.",
  },
});

// ===== 4. 의정부시 =======================================================
const uijeongbu = cityPage({
  path: "/gyeonggi-north/uijeongbu-si/", crumb: "의정부시", parent: AREA.uj,
  eyebrow: "도시·군 안내 · 의정부시",
  subAreasTitle: "의정부 생활권 바로가기",
  subAreas: [
    ["의정부역·중앙로", L.uijeongbuCentral], ["민락·고산", L.minrakGosan], ["금오·신곡", L.geumoSingok], ["회룡·가능", L.hoeryongGaneung],
  ],
  dongs: [
    ["의정부동", "/gyeonggi-north/uijeongbu-si/uijeongbu-dong/"], ["민락동", "/gyeonggi-north/uijeongbu-si/minrak-dong/"], ["금오동", "/gyeonggi-north/uijeongbu-si/geumo-dong/"], ["신곡동", "/gyeonggi-north/uijeongbu-si/singok-dong/"],
    ["가능동", "/gyeonggi-north/uijeongbu-si/ganeung-dong/"], ["호원동", "/gyeonggi-north/uijeongbu-si/howon-dong/"], ["녹양동", "/gyeonggi-north/uijeongbu-si/nogyang-dong/"], ["장암동", "/gyeonggi-north/uijeongbu-si/jangam-dong/"],
  ],
  title: "의정부시 출장마사지｜의정부역·민락·금오 안내 - 간다GO",
  description: "의정부시 출장마사지·홈타이. 의정부역 상권과 민락·금오·회룡 생활권 안내.",
  h1: "의정부시 출장마사지 · 의정부역·민락·금오 생활권",
  lead: "의정부는 경기북부의 행정·교통 중심 도시입니다. 역세권 상권과 택지지구 주거지를 나눠 안내합니다.",
  article: `
    <h2>의정부는 경기북부 교통·행정 중심입니다</h2>
    <p>의정부시는 경기북부의 행정·교통 중심 도시로, 의정부역 일대의 상권과 오피스텔, 민락·금오·신곡의 주거지가 발달해 있습니다. 도심 밀집형 도시라 오피스텔·상가 방문 시 공동현관과 방문 가능 시간대 확인이 특히 중요합니다.</p>
    <h2>의정부역·중앙로 — 상권 중심</h2>
    <p>의정부동·중앙로 일대는 상권과 오피스텔이 밀집한 도심 생활권입니다. 공동현관 비밀번호, 엘리베이터, 관리 규정을 먼저 확인하면 안내가 빨라집니다.</p>
    <h2>민락·금오·신곡·회룡 — 주거지 생활권</h2>
    <p>민락동·고산동은 택지지구 아파트권, 금오동·신곡동은 주거지, 회룡·가능은 1호선 역세권입니다. 아파트 단지는 공동현관과 주차 동선을 확인합니다.</p>
    <h2>교통·이동 기준</h2>
    <p>1호선(의정부·회룡·가능), 의정부경전철, 의정부시외버스터미널이 거점이며 서울 도봉·노원과 인접합니다. GTX-C 정차 계획이 있어 향후 접근성이 넓어질 수 있습니다. 행정 정보는 <a href="https://www.ui4u.go.kr/" rel="noopener" target="_blank">의정부시청</a>을 참고할 수 있습니다.</p>
    <h2>예약 전 확인·운영 기준</h2>
    <p>역세권 오피스텔과 택지지구 아파트는 확인 항목이 다릅니다. 공통 항목은 <a href="/gyeonggi-north/check/">예약 전 확인</a>에서 확인하세요. 개인정보는 <a href="/gyeonggi-north/check/privacy/">처리방침</a>을 따르며 불법·선정적 서비스는 <a href="/gyeonggi-north/check/service-policy/">제공하지 않습니다</a>. 넓은 개요는 <a href="/gyeonggi-north/area/uijeongbu-yangju/">의정부·양주권</a>을 참고하세요.</p>
  `,
  venues: `
    <h2>의정부시 이용 장소별 확인 기준</h2>
    <p>의정부역·중앙로 일대는 오피스텔과 상가 밀집도가 높아, 저층 상가를 지나 올라가는 동선이나 방문객 엘리베이터 제한이 있는 건물이 있습니다. 공동현관 출입 방식과 심야 관리 규정, 방문 가능 시간대를 먼저 확인하면 방문이 매끄럽습니다. 회룡·가능 역세권 주거지는 단지별 주차 여유가 달라 예약 시 함께 안내드립니다.</p>
    <p>민락·고산 택지지구의 신축 아파트는 지하주차장 방문 등록과 지상 차량 통제가 함께 적용되는 곳이 많습니다. 동·호수와 방문 차량 등록 방법, 공동현관 호출 방식을 확인해 두면 좋습니다. 금오·신곡의 기존 주거지는 도로 폭과 주차 사정이 구역마다 달라 상세 주소가 중요합니다.</p>
  `,
  zones: [
    { t: "의정부역·중앙로", d: "상권·오피스텔 밀집 중심" },
    { t: "민락·고산", d: "택지지구 아파트 생활권" },
    { t: "금오·신곡", d: "주거지 중심 생활권" },
    { t: "회룡·가능", d: "1호선 역세권 생활권" },
    { t: "호원·장암", d: "서울 접경 주거지" },
    { t: "녹양", d: "북부 주거 생활권" },
  ],
  stations: ["의정부역", "회룡역", "가능역", "의정부경전철", "의정부시외버스터미널"],
  related: [["의정부·양주권", "/gyeonggi-north/area/uijeongbu-yangju/"], ["양주시", "/gyeonggi-north/yangju-si/"], ["예약 전 확인", "/gyeonggi-north/check/"], ["요금 안내", "/gyeonggi-north/pricing/"]],
  faqs: [
    { q: "의정부역 인근 오피스텔도 가능한가요?", a: "공동현관·엘리베이터·방문 가능 시간대를 먼저 확인하면 안내가 빠릅니다." },
    { q: "민락지구는 무엇을 확인하나요?", a: "아파트 공동현관과 주차 동선, 방문 가능 시간대를 확인합니다." },
    { q: "예약 가능 시간은 어떻게 되나요?", a: "생활권에 따라 다르며 상담 시 안내합니다. 자세한 내용은 예약 전 확인 페이지를 참고하세요." },
  ],
  whw: {
    who: "의정부 역세권·주거지 생활권을 상담하는 간다GO 예약 안내팀이 작성했습니다.",
    how: "의정부역 상권과 민락·금오 주거지를 구분해 이동 기준을 안내합니다.",
    why: "도심 밀집 도시라 역세권과 주거지의 확인 항목이 다르기 때문입니다.",
  },
});

// ===== 5. 양주시 =========================================================
const yangju = cityPage({
  path: "/gyeonggi-north/yangju-si/", crumb: "양주시", parent: AREA.uj,
  eyebrow: "도시·군 안내 · 양주시",
  subAreasTitle: "양주 생활권 바로가기",
  subAreas: [["양주 옥정", L.okjeong], ["덕정·회천", L.deokjeongHoecheon]],
  dongs: [
    ["옥정동", "/gyeonggi-north/yangju-si/okjeong-dong/"], ["고읍동", "/gyeonggi-north/yangju-si/goeup-dong/"], ["덕정동", "/gyeonggi-north/yangju-si/deokjeong-dong/"], ["회천동", "/gyeonggi-north/yangju-si/hoecheon-dong/"],
    ["백석읍", "/gyeonggi-north/yangju-si/baekseok-eup/"], ["광적면", "/gyeonggi-north/yangju-si/gwangjeok-myeon/"], ["장흥면", "/gyeonggi-north/yangju-si/jangheung-myeon/"],
  ],
  title: "양주시 출장마사지｜옥정·회천·덕정 신도시 안내 - 간다GO",
  description: "양주시 출장마사지·홈타이. 옥정·회천 신도시와 덕정·외곽 차량 이동 안내.",
  h1: "양주시 출장마사지 · 옥정·회천·덕정 신도시 안내",
  lead: "양주는 옥정·회천 신도시가 빠르게 확장하는 도시입니다. 신도시와 외곽 차량 이동을 나눠 안내합니다.",
  article: `
    <h2>양주는 신도시가 확장 중인 도시입니다</h2>
    <p>양주시는 옥정·회천 신도시가 빠르게 조성되며 인구가 늘어난 도시입니다. 옥정신도시의 대규모 아파트 단지와 덕정·백석·광적·장흥의 외곽 지역이 함께 있어, 신도시는 공동현관·주차 중심, 외곽은 차량 이동 기준 중심으로 확인 항목이 다릅니다.</p>
    <h2>옥정·회천 — 신도시 생활권</h2>
    <p>옥정동·회천동·고읍동은 대규모 아파트 단지가 밀집한 신도시입니다. 단지가 넓어 동·호수와 공동현관, 주차 동선을 정확히 확인하는 것이 중요합니다.</p>
    <h2>덕정·백석·외곽 — 차량 이동권</h2>
    <p>덕정동은 1호선 역세권 주거지이며, 백석읍·광적면·장흥면은 외곽 지역으로 정확한 주소와 차량 이동 기준, 예약 가능 시간을 먼저 확인해야 합니다.</p>
    <h2>교통·이동 기준</h2>
    <p>1호선(덕정·양주·회정), 7호선 옥정 연장 구간이 지나며 외곽은 차량 이동이 기본입니다. 노선·출구별 페이지는 만들지 않고 방문 주소 기준 이동 거리만 확인합니다. 행정 정보는 <a href="https://www.yangju.go.kr/" rel="noopener" target="_blank">양주시청</a>을 참고할 수 있습니다.</p>
    <h2>예약 전 확인·운영 기준</h2>
    <p>신도시와 외곽은 확인 항목이 다릅니다. 공통 항목은 <a href="/gyeonggi-north/check/">예약 전 확인</a>에서 확인하세요. 개인정보는 <a href="/gyeonggi-north/check/privacy/">처리방침</a>을 따르며 불법·선정적 서비스는 <a href="/gyeonggi-north/check/service-policy/">제공하지 않습니다</a>. 넓은 개요는 <a href="/gyeonggi-north/area/uijeongbu-yangju/">의정부·양주권</a>을 참고하세요.</p>
  `,
  venues: `
    <h2>양주시 이용 장소별 확인 기준</h2>
    <p>옥정신도시는 단지 규모가 커서 같은 아파트라도 정문·후문·동별 진입로가 크게 다릅니다. 방문 시 동·호수와 가까운 출입구, 방문 차량 등록 방법을 함께 알려주시면 이동이 정확해집니다. 신축 단지는 지하주차장 방문 등록과 공동현관 인증이 필요한 곳이 많아 출입 방식을 미리 확인합니다.</p>
    <p>덕정 역세권 주거지는 단지·빌라가 섞여 있어 주차 사정이 구역마다 다르고, 백석·광적·장흥 등 외곽은 차량 이동이 기본입니다. 외곽은 상세 주소와 진입로, 야간 조명 여부를 함께 확인하고 예약 가능 시간을 미리 조율하는 것이 좋습니다. 옥정·회천 방향으로 광역철도 연장이 논의되며 신축 단지가 계속 들어서고 있어, 입주 초기 단지는 공동현관·주차 등록 방식이 자주 바뀌므로 예약 시 최신 출입 방법을 확인해 드립니다.</p>
  `,
  zones: [
    { t: "옥정신도시", d: "대규모 아파트 단지 신도시" },
    { t: "회천·고읍", d: "확장 주거지 생활권" },
    { t: "덕정", d: "1호선 역세권 주거지" },
    { t: "백석·광적", d: "외곽 차량 이동권" },
    { t: "장흥", d: "관광·외곽 생활권" },
    { t: "양주역 일대", d: "1호선 주거 생활권" },
  ],
  stations: ["덕정역", "양주역", "회정역", "7호선 옥정(연장)", "양주 터미널"],
  related: [["의정부·양주권", "/gyeonggi-north/area/uijeongbu-yangju/"], ["의정부시", "/gyeonggi-north/uijeongbu-si/"], ["아파트 공동현관 확인", "/gyeonggi-north/check/"], ["요금 안내", "/gyeonggi-north/pricing/"]],
  faqs: [
    { q: "옥정신도시는 무엇을 확인하나요?", a: "단지가 넓어 동·호수, 공동현관, 주차 동선을 정확히 확인하는 것이 중요합니다." },
    { q: "양주 외곽도 방문 가능한가요?", a: "백석·광적·장흥 등은 차량 이동 기준과 예약 가능 시간을 먼저 확인합니다." },
    { q: "요금은 어떻게 되나요?", a: "코스 기준 요금은 동일하며 외곽은 이동 거리에 따라 상담 시 확인합니다." },
  ],
  whw: {
    who: "양주 신도시·외곽 생활권을 상담하는 간다GO 예약 안내팀이 작성했습니다.",
    how: "옥정·회천 신도시와 덕정·외곽 차량 이동권을 구분해 안내합니다.",
    why: "확장 중인 신도시와 외곽은 확인 항목이 다르기 때문입니다.",
  },
});

// ===== 6. 구리시 =========================================================
const guri = cityPage({
  path: "/gyeonggi-north/guri-si/", crumb: "구리시", parent: AREA.ny,
  eyebrow: "도시·군 안내 · 구리시",
  dongs: [
    ["인창동", "/gyeonggi-north/guri-si/inchang-dong/"], ["수택동", "/gyeonggi-north/guri-si/sutaek-dong/"],
    ["교문동", "/gyeonggi-north/guri-si/gyomun-dong/"], ["갈매동", "/gyeonggi-north/guri-si/galmae-dong/"],
  ],
  title: "구리시 출장마사지｜구리역·인창·수택·갈매 안내 - 간다GO",
  description: "구리시 출장마사지·홈타이. 서울 접경 소형 도시 구리역·인창·갈매 안내.",
  h1: "구리시 출장마사지 · 구리역·인창·수택·갈매 안내",
  lead: "구리는 서울과 맞닿은 소형 도시로 이동이 편리합니다. 역세권과 주거지를 나눠 안내합니다.",
  article: `
    <h2>구리는 서울 접경의 콤팩트한 도시입니다</h2>
    <p>구리시는 면적이 작고 서울 중랑·강동과 바로 맞닿아 있어 이동이 편리한 도시입니다. 구리역 상권과 인창·수택의 주거지, 갈매지구 택지가 주요 생활권이며, 도시가 콤팩트해 생활권 간 이동 거리가 짧은 편입니다.</p>
    <h2>구리역·인창 — 상권·주거 중심</h2>
    <p>인창동·구리역 일대는 돌다리 상권과 아파트, 오피스텔이 함께 있는 중심 생활권입니다. 오피스텔은 공동현관·방문 시간대를, 아파트는 공동현관과 주차 동선을 확인합니다.</p>
    <h2>수택·교문·갈매 — 주거 생활권</h2>
    <p>수택동·교문동은 한강변과 가까운 주거지이며, 갈매동은 서울 접경 택지지구로 비교적 최근 조성되었습니다. 갈매지구는 공동현관과 주차 동선 확인이 중요합니다.</p>
    <h2>교통·이동 기준</h2>
    <p>경의중앙선 구리역, 8호선 별내선 연장이 지나며 서울 강동·중랑과 인접해 접근성이 좋습니다. 도시가 작아 방문 주소만 정확하면 안내가 빠른 편입니다. 행정 정보는 <a href="https://www.guri.go.kr/" rel="noopener" target="_blank">구리시청</a>을 참고할 수 있습니다.</p>
    <h2>예약 전 확인·운영 기준</h2>
    <p>정확한 방문 주소와 건물 출입 방식, 예약 가능 시간을 확인합니다. 개인정보는 <a href="/gyeonggi-north/check/privacy/">처리방침</a>을 따르며 불법·선정적 서비스는 <a href="/gyeonggi-north/check/service-policy/">제공하지 않습니다</a>. 넓은 개요는 <a href="/gyeonggi-north/area/namyangju-guri/">남양주·구리권</a>을 참고하세요.</p>
  `,
  venues: `
    <h2>구리시 이용 장소별 확인 기준</h2>
    <p>구리역·인창 일대는 돌다리 상권과 함께 오피스텔·주상복합이 모여 있어, 상가 통과 동선과 공동현관 인증 방식을 미리 확인하면 방문이 매끄럽습니다. 도시가 콤팩트해 이동 시간은 짧은 편이지만, 상권 인접 건물은 방문 시간대 주차가 혼잡할 수 있어 주차 방법을 함께 확인합니다.</p>
    <p>수택·교문의 주거지는 한강변과 가까운 아파트·빌라가 섞여 있고, 갈매지구는 비교적 최근 조성된 택지라 지하주차장 방문 등록과 공동현관 호출 방식을 확인하는 것이 좋습니다. 동·호수와 방문 차량 등록 방법을 함께 알려주시면 안내가 빠릅니다. 8호선 별내선 개통으로 서울 접근성이 좋아진 만큼 인창·갈매 신축 주거지 이용 문의도 늘고 있어, 신축 단지의 출입 방식은 예약 시 다시 한번 확인해 드립니다.</p>
  `,
  zones: [
    { t: "구리역·인창", d: "돌다리 상권·아파트·오피스텔" },
    { t: "수택", d: "한강 인접 주거지" },
    { t: "교문", d: "주거 생활권" },
    { t: "갈매", d: "서울 접경 택지지구" },
    { t: "토평", d: "한강변 주거 생활권" },
    { t: "인창2", d: "역세권 인접 주거지" },
  ],
  stations: ["구리역", "8호선 별내선(구리)", "구리 시외버스 정류장"],
  related: [["남양주·구리권", "/gyeonggi-north/area/namyangju-guri/"], ["남양주시", "/gyeonggi-north/namyangju-si/"], ["예약 전 확인", "/gyeonggi-north/check/"], ["요금 안내", "/gyeonggi-north/pricing/"]],
  faqs: [
    { q: "구리는 이동이 편한가요?", a: "면적이 작고 서울과 맞닿아 있어 방문 주소만 정확하면 안내가 빠른 편입니다." },
    { q: "갈매지구도 방문 가능한가요?", a: "갈매지구는 공동현관과 주차 동선, 방문 가능 시간대를 확인합니다." },
    { q: "요금은 어떻게 되나요?", a: "60분 90,000원, 90분 150,000원, 120분 180,000원 기준이며 추가 비용 없이 안내합니다." },
  ],
  whw: {
    who: "구리 역세권·주거지 생활권을 상담하는 간다GO 예약 안내팀이 작성했습니다.",
    how: "구리역 상권과 인창·수택·갈매 주거지를 구분해 안내합니다.",
    why: "서울 접경 소형 도시라 생활권 특성을 짚어야 안내가 정확하기 때문입니다.",
  },
});

// ===== 7. 포천시 =========================================================
const pocheon = cityPage({
  path: "/gyeonggi-north/pocheon-si/", crumb: "포천시", parent: AREA.outer,
  eyebrow: "도시·군 안내 · 포천시",
  subAreasTitle: "포천 생활권 바로가기",
  subAreas: [["포천 송우리·소흘", L.songuriSoheul]],
  dongs: [["소흘읍", L.songuriSoheul], ["송우리", L.songuriSoheul], ["선단동", L.songuriSoheul], ["포천동", L.songuriSoheul]],
  title: "포천시 출장마사지｜송우리·소흘·외곽 숙소 안내 - 간다GO",
  description: "포천시 출장마사지·홈타이. 송우리·소흘 도심과 외곽 펜션·숙소 이동 안내.",
  h1: "포천시 출장마사지 · 송우리·소흘·외곽 이동 기준",
  lead: "포천은 면적이 넓고 외곽 숙소·펜션이 많은 도시입니다. 도심과 외곽 이동 기준을 나눠 안내합니다.",
  article: `
    <h2>포천은 넓은 면적에 외곽 숙소가 많습니다</h2>
    <p>포천시는 경기북부에서 면적이 넓은 편으로, 송우리·소흘의 도심 생활권과 외곽의 펜션·전원 숙소가 함께 있습니다. 철도 접근성이 제한적이라 대부분 차량 이동이 기본이며, 외곽 숙소는 정확한 위치와 예약 가능 시간 확인이 핵심입니다.</p>
    <h2>송우리·소흘·포천동 — 도심 생활권</h2>
    <p>소흘읍 송우리와 포천동·선단동은 상권과 주거지가 모인 도심 생활권입니다. 아파트·주거지는 공동현관과 주차 동선을 확인합니다.</p>
    <h2>외곽·관광 숙소 — 이동 기준 중심</h2>
    <p>일동·이동·영북 방향의 외곽은 아트밸리·허브아일랜드 등 관광지와 펜션이 많습니다. 펜션·독채 숙소는 정확한 주소, 주차 가능 여부, 야간 출입 가능 여부, 외곽 이동 기준을 먼저 확인해야 합니다.</p>
    <h2>교통·이동 기준</h2>
    <p>43번 국도와 포천시외버스터미널이 주요 거점이며 7호선 포천 연장이 추진 중입니다. 외곽은 이동 거리가 길어 예약 가능 시간이 조정될 수 있습니다. 행정 정보는 <a href="https://www.pocheon.go.kr/" rel="noopener" target="_blank">포천시청</a>을 참고할 수 있습니다.</p>
    <h2>예약 전 확인·운영 기준</h2>
    <p>외곽·펜션은 정확한 위치와 이동 기준 확인이 우선입니다. <a href="/gyeonggi-north/check/">예약 전 확인</a>에서 외곽 이동 기준을 확인하세요. 개인정보는 <a href="/gyeonggi-north/check/privacy/">처리방침</a>을 따르며 불법·선정적 서비스는 <a href="/gyeonggi-north/check/service-policy/">제공하지 않습니다</a>. 넓은 개요는 <a href="/gyeonggi-north/area/pocheon-dongducheon-gapyeong-yeoncheon/">외곽·관광권</a>을 참고하세요.</p>
  `,
  venues: `
    <h2>포천시 이용 장소별 확인 기준</h2>
    <p>송우리·소흘·포천동 도심의 아파트·주거지는 공동현관 호출 방식과 주차 여유를 확인하면 방문이 원활합니다. 도심은 차량 이동이 비교적 수월하지만, 상권 인접 구역은 방문 시간대에 따라 주차가 혼잡할 수 있어 사전에 주차 방법을 조율합니다.</p>
    <p>일동·이동·영북 방향의 외곽 펜션·전원 숙소는 계곡·산지에 위치한 곳이 많아 도로명 주소만으로 진입로를 찾기 어려운 경우가 있습니다. 숙소명, 정확한 주소, 주차 가능 여부, 야간 출입 방식과 진입로를 함께 알려주시면 이동 안내가 정확해지고, 장거리 구간은 예약 가능 시간을 미리 조율합니다.</p>
  `,
  zones: [
    { t: "송우리·소흘", d: "포천 도심 상권·주거지" },
    { t: "포천동·선단", d: "도심 생활권" },
    { t: "일동·이동", d: "외곽 관광·펜션권" },
    { t: "영북·관인", d: "외곽 장거리 이동권" },
    { t: "신북", d: "외곽 숙소 이용권" },
    { t: "관광 숙소", d: "펜션·리조트 이동 기준 지역" },
  ],
  stations: ["포천시외버스터미널", "송우리 정류장", "43번 국도 거점", "7호선 포천(연장 예정)"],
  related: [["외곽·관광권", "/gyeonggi-north/area/pocheon-dongducheon-gapyeong-yeoncheon/"], ["동두천시", "/gyeonggi-north/dongducheon-si/"], ["예약 전 확인", "/gyeonggi-north/check/"], ["요금 안내", "/gyeonggi-north/pricing/"]],
  faqs: [
    { q: "포천 외곽 펜션도 가능한가요?", a: "펜션·독채 숙소는 정확한 주소, 주차, 야간 출입 가능 여부, 외곽 이동 기준을 먼저 확인해야 합니다." },
    { q: "포천은 이동 시간이 오래 걸리나요?", a: "면적이 넓어 외곽은 이동 거리가 길 수 있어 예약 가능 시간이 조정될 수 있습니다." },
    { q: "도심과 외곽은 확인이 다른가요?", a: "송우리·소흘 도심은 공동현관·주차, 외곽은 위치와 이동 기준 확인이 우선입니다." },
  ],
  whw: {
    who: "포천 도심·외곽 생활권을 상담하는 간다GO 예약 안내팀이 작성했습니다.",
    how: "송우리·소흘 도심과 외곽 펜션·관광 숙소를 이동 기준으로 구분해 안내합니다.",
    why: "면적이 넓고 외곽 숙소가 많아 위치·이동 기준 확인이 핵심이기 때문입니다.",
  },
});

// ===== 8. 동두천시 =======================================================
const dongducheon = cityPage({
  path: "/gyeonggi-north/dongducheon-si/", crumb: "동두천시", parent: AREA.outer,
  eyebrow: "도시·군 안내 · 동두천시",
  subAreasTitle: "동두천 생활권 바로가기",
  subAreas: [["동두천 지행·생연", L.jihaengSaengyeon]],
  dongs: [["지행동", L.jihaengSaengyeon], ["생연동", L.jihaengSaengyeon], ["보산동", L.jihaengSaengyeon], ["중앙동", L.jihaengSaengyeon]],
  title: "동두천시 출장마사지｜지행·생연·보산 생활권 안내 - 간다GO",
  description: "동두천시 출장마사지·홈타이. 1호선 북부 지행·생연·보산 주거 생활권 안내.",
  h1: "동두천시 출장마사지 · 지행·생연·보산 생활권 안내",
  lead: "동두천은 1호선 북부권 소도시입니다. 지행·생연 주거 상권을 중심으로 안내합니다.",
  article: `
    <h2>동두천은 1호선 북부권 소도시입니다</h2>
    <p>동두천시는 수도권 1호선 북부 종착권에 위치한 소도시로, 지행·생연의 주거·상권과 보산·중앙의 생활권이 중심입니다. 과거 미군기지가 있던 지역이 순차 반환되며 생활권이 정비되고 있어, 주거지 공동현관과 방문 가능 시간대 확인이 기본입니다.</p>
    <h2>지행·생연 — 주거·상권 중심</h2>
    <p>지행동·생연동은 아파트와 상권이 모인 중심 생활권으로 1호선 지행역·동두천중앙역과 가깝습니다. 아파트·오피스텔은 공동현관과 주차 동선, 방문 시간대를 확인합니다.</p>
    <h2>보산·중앙·소요산 — 생활·외곽권</h2>
    <p>보산동·중앙동은 상권 인접 생활권, 소요산 방향은 외곽 관광권입니다. 외곽으로 갈수록 이동 거리와 예약 가능 시간을 확인하는 것이 좋습니다.</p>
    <h2>교통·이동 기준</h2>
    <p>1호선(동두천중앙·지행·소요산)과 동두천터미널이 주요 거점입니다. 서울에서 1호선으로 연결되지만 북부 종착권이라 이동 시간을 고려하는 것이 좋습니다. 행정 정보는 <a href="https://www.ddc.go.kr/" rel="noopener" target="_blank">동두천시청</a>을 참고할 수 있습니다.</p>
    <h2>예약 전 확인·운영 기준</h2>
    <p>주거지와 외곽은 확인 항목이 다릅니다. <a href="/gyeonggi-north/check/">예약 전 확인</a>에서 공통 항목을 확인하세요. 개인정보는 <a href="/gyeonggi-north/check/privacy/">처리방침</a>을 따르며 불법·선정적 서비스는 <a href="/gyeonggi-north/check/service-policy/">제공하지 않습니다</a>. 넓은 개요는 <a href="/gyeonggi-north/area/pocheon-dongducheon-gapyeong-yeoncheon/">외곽·관광권</a>을 참고하세요.</p>
  `,
  venues: `
    <h2>동두천시 이용 장소별 확인 기준</h2>
    <p>지행·생연의 아파트 단지는 1호선 역과 가까워 방문이 수월한 편이지만, 단지별로 지상 차량 통제나 지하주차장 방문 등록 여부가 다릅니다. 동·호수와 방문 차량 등록 방법, 공동현관 호출 방식을 함께 확인하면 대기 없이 방문할 수 있습니다.</p>
    <p>보산·중앙의 상권 인접 생활권은 저층 상가를 지나는 동선이나 방문 가능 시간대 제한이 있는 건물이 있어 출입 방식을 미리 확인합니다. 소요산 방향 외곽은 이동 거리가 늘어나므로 상세 주소와 예약 가능 시간을 함께 조율하는 것이 좋습니다. 반환된 미군기지 부지가 순차적으로 정비되면서 생활권이 조금씩 바뀌고 있어, 신규 주거지나 정비 구역은 진입로와 주차 상황을 예약 시 다시 확인하는 것이 안전합니다.</p>
  `,
  zones: [
    { t: "지행", d: "1호선 역세권 주거·상권" },
    { t: "생연", d: "중심 주거 생활권" },
    { t: "보산", d: "상권 인접 생활권" },
    { t: "중앙", d: "동두천 도심 생활권" },
    { t: "소요산", d: "외곽 관광 인접권" },
    { t: "송내", d: "주거 생활권" },
  ],
  stations: ["동두천중앙역", "지행역", "소요산역", "동두천터미널"],
  related: [["외곽·관광권", "/gyeonggi-north/area/pocheon-dongducheon-gapyeong-yeoncheon/"], ["포천시", "/gyeonggi-north/pocheon-si/"], ["예약 전 확인", "/gyeonggi-north/check/"], ["요금 안내", "/gyeonggi-north/pricing/"]],
  faqs: [
    { q: "동두천은 어디를 중심으로 안내하나요?", a: "지행·생연 등 1호선 북부 주거·상권을 중심으로 공동현관·주차 동선을 확인해 안내합니다." },
    { q: "소요산 방향 외곽도 가능한가요?", a: "외곽은 이동 거리와 예약 가능 시간을 먼저 확인합니다." },
    { q: "요금은 어떻게 되나요?", a: "코스 기준 요금은 동일하며 외곽은 이동 거리에 따라 상담 시 확인합니다." },
  ],
  whw: {
    who: "동두천 주거·외곽 생활권을 상담하는 간다GO 예약 안내팀이 작성했습니다.",
    how: "지행·생연 주거 상권과 소요산 방향 외곽을 구분해 안내합니다.",
    why: "1호선 북부권 소도시라 주거지와 외곽의 확인 항목이 다르기 때문입니다.",
  },
});

// ===== 9. 가평군 =========================================================
const gapyeong = cityPage({
  path: "/gyeonggi-north/gapyeong-gun/", crumb: "가평군", parent: AREA.outer,
  eyebrow: "도시·군 안내 · 가평군",
  subAreasTitle: "가평 생활권 바로가기",
  subAreas: [["가평읍·청평", L.gapyeongCheongpyeong]],
  dongs: [["가평읍", L.gapyeongCheongpyeong], ["청평면", L.gapyeongCheongpyeong], ["설악면", L.gapyeongCheongpyeong], ["조종면", L.gapyeongCheongpyeong]],
  title: "가평군 출장마사지｜가평읍·청평 펜션 숙소 안내 - 간다GO",
  description: "가평군 출장마사지·홈타이. 가평읍·청평 관광 펜션·리조트 숙소 이동 안내.",
  h1: "가평군 출장마사지 · 펜션·리조트 숙소 예약 전 확인",
  lead: "가평은 펜션·리조트 관광 숙소가 많은 지역입니다. 숙소 위치와 야간·외곽 이동 기준을 안내합니다.",
  article: `
    <h2>가평은 관광 펜션·리조트 숙소 중심입니다</h2>
    <p>가평군은 청평호·자라섬 등 관광지가 많아 펜션·리조트·독채 숙소 이용 수요가 큰 지역입니다. 도심 생활권보다 숙소 위치와 야간·외곽 이동 기준 확인이 훨씬 중요하며, 계곡·산지에 위치한 숙소가 많아 정확한 주소와 진입로 확인이 필요합니다.</p>
    <h2>가평읍·청평 — 생활·관광 거점</h2>
    <p>가평읍과 청평면은 경춘선 역과 상권이 있는 거점으로 숙소 이동의 기준점이 됩니다. 청평은 리조트·펜션 밀집권으로 예약 시 숙소명과 정확한 주소를 함께 확인합니다.</p>
    <h2>설악·조종·북면 — 외곽 숙소권</h2>
    <p>설악면·조종면·북면은 계곡·산지 펜션이 많은 외곽 숙소권입니다. 독채 숙소는 주차 가능 여부, 야간 출입 가능 여부, 진입로와 외곽 이동 기준을 먼저 확인해야 합니다.</p>
    <h2>교통·이동 기준</h2>
    <p>경춘선(가평·청평)과 가평·청평 터미널이 주요 거점이며 외곽 숙소는 대부분 차량 이동이 기본입니다. 야간·외곽은 예약 가능 시간이 조정될 수 있습니다. 행정 정보는 <a href="https://www.gp.go.kr/" rel="noopener" target="_blank">가평군청</a>을 참고할 수 있습니다.</p>
    <h2>예약 전 확인·운영 기준</h2>
    <p>펜션·독채 숙소는 위치와 출입 방식 확인이 우선입니다. <a href="/gyeonggi-north/check/">예약 전 확인</a>에서 확인하세요. 개인정보는 <a href="/gyeonggi-north/check/privacy/">처리방침</a>을 따르며 불법·선정적 서비스는 <a href="/gyeonggi-north/check/service-policy/">제공하지 않습니다</a>. 넓은 개요는 <a href="/gyeonggi-north/area/pocheon-dongducheon-gapyeong-yeoncheon/">외곽·관광권</a>을 참고하세요.</p>
  `,
  venues: `
    <h2>가평군 이용 장소별 확인 기준</h2>
    <p>청평·설악의 펜션·리조트는 같은 단지 안에서도 동·객실에 따라 진입로와 주차 위치가 크게 다릅니다. 숙소명과 객실 번호, 정확한 주소, 프런트 통과 여부를 함께 확인하면 이동이 정확해집니다. 리조트는 체크인 상태와 객실 정책을 미리 확인하는 것이 좋습니다.</p>
    <p>설악·조종·북면의 계곡·산지 독채 숙소는 좁은 진입로와 야간 조명 부족으로 위치 확인이 어려운 경우가 있습니다. 주차 가능 여부, 야간 출입 방식, 인근 지형 지물을 함께 알려주시면 안내가 원활하며, 장거리·야간 구간은 예약 가능 시간을 사전에 조율합니다.</p>
  `,
  zones: [
    { t: "가평읍", d: "경춘선 역·상권 거점" },
    { t: "청평", d: "리조트·펜션 밀집권" },
    { t: "설악", d: "계곡·산지 펜션권" },
    { t: "조종", d: "외곽 숙소 이용권" },
    { t: "북면", d: "외곽 장거리 이동권" },
    { t: "독채 숙소", d: "진입로·야간 출입 확인 지역" },
  ],
  stations: ["가평역", "청평역", "가평 터미널", "청평 터미널"],
  related: [["외곽·관광권", "/gyeonggi-north/area/pocheon-dongducheon-gapyeong-yeoncheon/"], ["연천군", "/gyeonggi-north/yeoncheon-gun/"], ["펜션·독채 숙소 확인", "/gyeonggi-north/check/"], ["요금 안내", "/gyeonggi-north/pricing/"]],
  faqs: [
    { q: "가평 펜션도 방문 가능한가요?", a: "펜션·독채 숙소는 정확한 주소, 주차, 야간 출입 가능 여부, 진입로와 외곽 이동 기준을 먼저 확인해야 합니다." },
    { q: "청평 리조트도 되나요?", a: "숙소명과 정확한 주소, 객실 정책을 함께 확인하면 안내가 빠릅니다." },
    { q: "야간 예약도 가능한가요?", a: "야간·외곽은 이동 기준에 따라 예약 가능 시간이 조정될 수 있어 사전 확인이 필요합니다." },
  ],
  whw: {
    who: "가평 관광 숙소권을 상담하는 간다GO 예약 안내팀이 작성했습니다.",
    how: "가평읍·청평 거점과 설악·조종 외곽 펜션을 위치·이동 기준으로 구분해 안내합니다.",
    why: "펜션·리조트 숙소가 많아 위치와 진입로 확인이 핵심이기 때문입니다.",
  },
});

// ===== 10. 연천군 ========================================================
const yeoncheon = cityPage({
  path: "/gyeonggi-north/yeoncheon-gun/", crumb: "연천군", parent: AREA.outer,
  eyebrow: "도시·군 안내 · 연천군",
  subAreasTitle: "연천 생활권 바로가기",
  subAreas: [["연천 전곡", L.jeongok]],
  dongs: [["전곡읍", L.jeongok], ["연천읍", L.jeongok], ["청산면", L.jeongok], ["백학면", L.jeongok]],
  title: "연천군 출장마사지｜전곡·연천읍 접경 외곽 안내 - 간다GO",
  description: "연천군 출장마사지·홈타이. 전곡·연천읍 접경 외곽 장거리 이동 기준 안내.",
  h1: "연천군 출장마사지 · 전곡·연천읍 접경 외곽 이동 기준",
  lead: "연천은 경기 최북단 접경 지역입니다. 장거리 이동과 예약 가능 시간 확인이 특히 중요합니다.",
  article: `
    <h2>연천은 경기 최북단 접경 지역입니다</h2>
    <p>연천군은 경기도 최북단에 위치한 접경 지역으로 인구가 적고 생활권이 전곡·연천읍에 집중되어 있습니다. 서울·수도권 도심에서 거리가 멀어 장거리 이동이 기본이며, 접경 특성상 예약 가능 시간이 제한될 수 있어 사전 확인이 특히 중요합니다.</p>
    <h2>전곡·연천읍 — 생활 거점</h2>
    <p>전곡읍은 연천의 중심 상권·주거 거점으로 경원선 전곡역과 터미널이 있습니다. 연천읍은 군청 소재지로 행정 중심입니다. 주거지는 공동현관과 방문 가능 시간대를 확인합니다.</p>
    <h2>청산·백학 등 외곽 — 장거리 이동권</h2>
    <p>청산면·백학면 등 외곽은 이동 거리가 길고 접경에 가까워, 정확한 주소와 예약 가능 시간, 외곽 이동 기준을 반드시 먼저 확인해야 합니다.</p>
    <h2>교통·이동 기준</h2>
    <p>경원선 전곡역과 전곡 시외버스터미널이 주요 거점이며 대부분 차량 이동이 기본입니다. 접경·외곽은 방문 기준이 불명확한 경우 안내가 제한될 수 있습니다. 행정 정보는 <a href="https://www.yeoncheon.go.kr/" rel="noopener" target="_blank">연천군청</a>을 참고할 수 있습니다.</p>
    <h2>예약 전 확인·운영 기준</h2>
    <p>접경·외곽은 예약 가능 시간과 이동 기준을 먼저 확인해야 합니다. <a href="/gyeonggi-north/check/">예약 전 확인</a>에서 외곽 이동 기준을 확인하세요. 개인정보는 <a href="/gyeonggi-north/check/privacy/">처리방침</a>을 따르며 불법·선정적 서비스는 <a href="/gyeonggi-north/check/service-policy/">제공하지 않습니다</a>. 넓은 개요는 <a href="/gyeonggi-north/area/pocheon-dongducheon-gapyeong-yeoncheon/">외곽·관광권</a>을 참고하세요.</p>
  `,
  venues: `
    <h2>연천군 이용 장소별 확인 기준</h2>
    <p>전곡·연천읍의 주거지는 아파트보다 단독·빌라 비중이 높아 공동현관보다는 개별 출입 방식과 주차 공간을 확인하는 경우가 많습니다. 상세 주소와 방문 가능 시간대, 야간 조명 여부를 함께 알려주시면 이동 안내가 정확해집니다.</p>
    <p>청산·백학·신서·군남 등 외곽은 이동 거리가 길고 접경에 가까워 예약 가능 시간이 제한될 수 있습니다. 방문 기준이 명확하지 않은 외곽 지역은 사전 확인 후에만 안내가 가능하며, 정확한 상세 주소와 진입로를 함께 확인하는 것이 중요합니다. 전곡 선사 유적지·한탄강 관광지 인근 숙소를 이용하는 경우에도 숙소명과 정확한 주소, 야간 출입 방식을 먼저 확인해야 이동 안내가 정확해집니다.</p>
  `,
  zones: [
    { t: "전곡", d: "연천 중심 상권·주거 거점" },
    { t: "연천읍", d: "군청 소재 행정 중심" },
    { t: "청산", d: "외곽 장거리 이동권" },
    { t: "백학", d: "접경 인접 외곽권" },
    { t: "신서", d: "외곽 생활권" },
    { t: "군남", d: "외곽 이동 기준 지역" },
  ],
  stations: ["전곡역(경원선)", "연천 전곡터미널"],
  related: [["외곽·관광권", "/gyeonggi-north/area/pocheon-dongducheon-gapyeong-yeoncheon/"], ["가평군", "/gyeonggi-north/gapyeong-gun/"], ["예약 전 확인", "/gyeonggi-north/check/"], ["요금 안내", "/gyeonggi-north/pricing/"]],
  faqs: [
    { q: "연천도 방문 가능한가요?", a: "전곡·연천읍 등 생활 거점을 중심으로 안내하며, 접경·외곽은 예약 가능 시간과 이동 기준을 먼저 확인합니다." },
    { q: "외곽·접경 지역은 왜 사전 확인이 필요한가요?", a: "장거리 이동과 접경 특성으로 예약 가능 시간이 달라질 수 있어 정확한 주소 확인이 필요합니다." },
    { q: "요금은 어떻게 되나요?", a: "코스 기준 요금은 동일하며 외곽은 이동 거리에 따라 상담 시 확인합니다." },
  ],
  whw: {
    who: "연천 접경·외곽 생활권을 상담하는 간다GO 예약 안내팀이 작성했습니다.",
    how: "전곡·연천읍 거점과 청산·백학 외곽을 이동 기준으로 구분해 안내합니다.",
    why: "최북단 접경 지역이라 장거리 이동과 예약 가능 시간 확인이 핵심이기 때문입니다.",
  },
});

export default [goyang, namyangju, paju, uijeongbu, yangju, guri, pocheon, dongducheon, gapyeong, yeoncheon];
