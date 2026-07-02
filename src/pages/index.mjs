// 경기북부 메인 (/)
import { pricingBlock, faqBlock, whwBlock, heroMedia } from "../render.mjs";
import { REVIEWS } from "./reviews.mjs";

const areaCards = [
  { t: "고양·일산권", d: "일산·마두·백석·화정·삼송·지축. 오피스텔·호텔·상권 중심 도시형 생활권입니다.", h: "/gyeonggi-north/area/goyang-ilsan/" },
  { t: "남양주·구리권", d: "다산·별내·평내호평·화도·마석. 신도시와 외곽 읍면 이동 기준을 함께 안내합니다.", h: "/gyeonggi-north/area/namyangju-guri/" },
  { t: "의정부·양주권", d: "의정부역·민락·금오·옥정·덕정. 교통 중심 도시와 신도시 확장권을 나눕니다.", h: "/gyeonggi-north/area/uijeongbu-yangju/" },
  { t: "파주·운정권", d: "운정·야당·금촌·문산·탄현. 신도시와 접경·관광 외곽 기준을 구분합니다.", h: "/gyeonggi-north/area/paju-unjeong/" },
  { t: "포천·동두천·가평·연천권", d: "펜션·리조트·군부대 인접·접경 외곽. 장거리 이동과 예약 가능 시간 확인이 핵심입니다.", h: "/gyeonggi-north/area/pocheon-dongducheon-gapyeong-yeoncheon/" },
];

const cityCards = [
  ["고양시", "/gyeonggi-north/goyang-si/"],
  ["남양주시", "/gyeonggi-north/namyangju-si/"],
  ["파주시", "/gyeonggi-north/paju-si/"],
  ["의정부시", "/gyeonggi-north/uijeongbu-si/"],
  ["양주시", "/gyeonggi-north/yangju-si/"],
  ["구리시", "/gyeonggi-north/guri-si/"],
  ["포천시", "/gyeonggi-north/pocheon-si/"],
  ["동두천시", "/gyeonggi-north/dongducheon-si/"],
  ["가평군", "/gyeonggi-north/gapyeong-gun/"],
  ["연천군", "/gyeonggi-north/yeoncheon-gun/"],
];

const lifeZones = [
  ["일산 호수공원·정발산", "/gyeonggi-north/life/ilsan-lake-park/"],
  ["마두·백석", "/gyeonggi-north/life/madu-baekseok/"],
  ["주엽·대화", "/gyeonggi-north/life/juyeop-daehwa/"],
  ["화정·행신", "/gyeonggi-north/life/hwajeong-haengsin/"],
  ["삼송·원흥", "/gyeonggi-north/life/samsong-wonheung/"],
  ["지축·향동", "/gyeonggi-north/life/jichuk-hyangdong/"],
  ["다산·도농", "/gyeonggi-north/life/dasan-donong/"],
  ["별내·갈매", "/gyeonggi-north/life/byeollae-galmae/"],
  ["평내호평", "/gyeonggi-north/life/pyeongnae-hopyeong/"],
  ["진접·오남", "/gyeonggi-north/life/jinjeop-onam/"],
  ["화도·마석", "/gyeonggi-north/life/hwado-maseok/"],
  ["의정부역·중앙로", "/gyeonggi-north/life/uijeongbu-station-central/"],
  ["민락·고산", "/gyeonggi-north/life/minrak-gosan/"],
  ["금오·신곡", "/gyeonggi-north/life/geumo-singok/"],
  ["회룡·가능", "/gyeonggi-north/life/hoeryong-ganeung/"],
  ["양주 옥정", "/gyeonggi-north/life/okjeong/"],
  ["덕정·회천", "/gyeonggi-north/life/deokjeong-hoecheon/"],
  ["운정신도시", "/gyeonggi-north/life/unjeong-newtown/"],
  ["야당·와동", "/gyeonggi-north/life/yadang-wadong/"],
  ["금촌·파주시청", "/gyeonggi-north/life/geumchon-paju-cityhall/"],
  ["문산·파주북부", "/gyeonggi-north/life/munsan-north-paju/"],
  ["포천 송우리·소흘", "/gyeonggi-north/life/songuri-soheul/"],
  ["동두천 지행·생연", "/gyeonggi-north/life/jihaeng-saengyeon/"],
  ["가평읍·청평", "/gyeonggi-north/life/gapyeong-cheongpyeong/"],
  ["연천 전곡", "/gyeonggi-north/life/jeongok-yeoncheon/"],
];

const newtowns = ["일산신도시", "운정신도시", "다산신도시", "별내신도시", "양주 옥정신도시", "의정부 민락", "고양 삼송", "고양 지축", "구리 갈매"];
const tours = ["가평 펜션 숙소", "청평 리조트", "포천 외곽 숙소", "파주 헤이리·탄현", "연천 접경 지역", "북부 독채 숙소"];

const checklist = [
  "방문 주소를 정확히 확인했나요?",
  "경기북부 어느 생활권인지 확인했나요?",
  "가까운 역·터미널·신도시를 확인했나요?",
  "호텔·숙소 이용 가능 여부를 확인했나요?",
  "펜션·독채 숙소 출입 방식을 확인했나요?",
  "공동현관 또는 건물 출입 방식이 있나요?",
  "외곽 지역 이동 기준을 확인했나요?",
  "예약 가능 시간과 변경 기준을 확인했나요?",
  "개인정보 처리 기준을 확인했나요?",
  "불법·선정적 서비스 불가 안내를 확인했나요?",
];

const faqs = [
  { q: "경기북부 전 지역 방문이 가능한가요?", a: "실제 방문 주소, 가까운 생활권, 예약 가능 시간, 이동 기준을 확인한 뒤 안내합니다. 외곽·접경 지역은 예약 가능 시간이 달라질 수 있습니다." },
  { q: "일산과 고양 덕양구는 이용 기준이 다른가요?", a: "네. 일산은 오피스텔·상권·숙소 중심이고, 덕양구는 삼송·원흥·지축·향동처럼 서울 접경 신도시 기준이 중요합니다." },
  { q: "가평이나 포천 펜션도 가능한가요?", a: "펜션·독채 숙소는 정확한 주소, 주차 가능 여부, 야간 출입 가능 여부, 외곽 이동 기준을 먼저 확인해야 합니다." },
  { q: "요금은 어떻게 되나요?", a: "60분 90,000원, 90분 150,000원, 120분 180,000원 기준이며 추가 비용 없이 안내합니다. 지역·시간대·이동 거리에 따라 상담 시 최종 확인됩니다." },
  { q: "불법·선정적 서비스도 가능한가요?", a: "불법·선정적 서비스는 제공하거나 안내하지 않습니다. 건전한 관리 기준 안에서만 운영합니다." },
];

const card = (t, d, h) => `<a class="card card--link" href="${h}"><h3>${t}</h3><p>${d}</p></a>`;
const miniCard = (t, h) => `<a class="card card--link" href="${h}"><h3 style="font-size:1.05rem">${t}</h3></a>`;

const body = `
  <section class="hero">
    <div class="wrap hero__grid hero__grid--split">
      <div>
        <span class="eyebrow">경기북부 · 생활권 안내</span>
        <h1>경기북부 출장마사지<br>생활권별 방문 가능 지역 안내</h1>
        <p class="lead">일산, 고양, 의정부, 남양주, 파주, 양주, 구리, 포천, 동두천, 가평, 연천 등 경기북부 주요 생활권과 자택·호텔·오피스텔·펜션 이용 전 확인사항을 안내합니다.</p>
        <div class="hero__cta">
          <a class="btn btn--primary btn--lg" href="tel:0508-202-4719">전화예약 0508-202-4719</a>
          <a class="btn btn--ghost btn--lg" href="/gyeonggi-north/check/">예약 전 확인</a>
        </div>
        <div class="chiprow">
          ${areaCards.map((a) => `<a class="chip" href="${a.h}">${a.t} 보기</a>`).join("")}
        </div>
      </div>
      ${heroMedia("시티 나이트뷰가 보이는 프리미엄 스파룸 분위기 이미지")}
    </div>
  </section>

  <section class="section">
    <div class="wrap prose" style="max-width:80ch">
      <h2>경기북부는 도시명보다 생활권과 이동 기준 확인이 먼저입니다</h2>
      <p>경기북부는 서울 접경 신도시와 접경·관광 외곽 지역이 함께 있는 권역입니다. 고양 일산, 남양주 다산, 파주 운정, 의정부 민락, 양주 옥정은 신도시·주거지 기준이 중요하고, 포천·가평·연천은 외곽 이동과 숙소 위치 확인이 더 중요합니다. 이 사이트는 시·군, 생활권, 역세권, 숙소 형태, 예약 전 확인사항을 함께 안내해, 방문 주소가 어느 생활권에 속하는지 빠르게 확인할 수 있도록 돕습니다.</p>
      <p>경기 지역 행정구역과 생활권 정보는 <a href="https://www.gg.go.kr/" rel="noopener" target="_blank">경기도청</a> 등 공식 자료를 함께 참고하시면 방문 주소와 인접 생활권을 더 정확히 확인하실 수 있습니다.</p>
    </div>
  </section>

  <section class="section section--tight">
    <div class="wrap">
      <div class="sec-head center"><h2>경기북부 5대 생활권 안내</h2><p>도시명 반복이 아니라 생활권·이동 기준으로 나눕니다.</p></div>
      <div class="grid grid--3">${areaCards.map((a) => card(a.t, a.d, a.h)).join("")}</div>
    </div>
  </section>

  <section class="section section--tight">
    <div class="wrap">
      <div class="sec-head center"><h2>경기북부 핵심 도시 안내</h2></div>
      <div class="grid grid--4">${cityCards.map(([t, h]) => miniCard(t, h)).join("")}</div>
    </div>
  </section>

  <section class="section section--tight">
    <div class="wrap">
      <div class="sec-head center"><h2>핵심 생활권 바로가기</h2><p>동 단위 생활권별로 방문 가능 지역과 이용 기준을 확인하세요.</p></div>
      <div class="chiprow" style="justify-content:center">${lifeZones.map(([t, h]) => `<a class="chip" href="${h}">${t}</a>`).join("")}</div>
    </div>
  </section>

  <section class="section section--tight">
    <div class="wrap">
      <div class="sec-head center"><h2>신도시·택지지구 생활권</h2><p>산업단지보다 신도시·택지지구 이용 기준이 중요합니다.</p></div>
      <div class="grid grid--3">${newtowns.map((t) => miniCard(t, "/gyeonggi-north/check/")).join("")}</div>
    </div>
  </section>

  <section class="section section--tight">
    <div class="wrap">
      <div class="sec-head center"><h2>관광·펜션·외곽 이동권</h2><p>경기북부만의 차별화 카테고리입니다.</p></div>
      <div class="grid grid--3">${tours.map((t) => miniCard(t, "/gyeonggi-north/area/pocheon-dongducheon-gapyeong-yeoncheon/")).join("")}</div>
    </div>
  </section>

  ${pricingBlock()}

  <section class="section section--tight">
    <div class="wrap">
      <div class="sec-head center"><h2>이용 후기</h2><p>실제 이용 고객이 남겨 주신 후기를 있는 그대로 전합니다.</p></div>
      <div class="grid grid--3">
        ${REVIEWS.slice(0, 3).map((r) => `
        <figure class="card review-card">
          <figcaption class="review-card__head"><span class="review-card__name">${r.name}</span><span class="review-card__date">${r.date}</span></figcaption>
          <div class="review-card__stars" aria-label="별점 ${r.rating}점 / 5점">${"★★★★★☆☆☆☆☆".slice(5 - r.rating, 10 - r.rating)}</div>
          <blockquote>${r.text}</blockquote>
        </figure>`).join("")}
      </div>
      <p class="center" style="margin-top:24px"><a class="btn btn--ghost" href="/gyeonggi-north/reviews/">이용 후기 전체 보기</a></p>
    </div>
  </section>

  <section class="section section--tight">
    <div class="wrap">
      <div class="sec-head center"><h2>예약 전 확인해야 할 내용</h2></div>
      <ul class="checklist" style="max-width:820px;margin-inline:auto">
        ${checklist.map((c) => `<li>${c}</li>`).join("")}
      </ul>
      <p class="center" style="margin-top:24px"><a class="btn btn--ghost" href="/gyeonggi-north/check/">예약 전 확인 자세히 보기</a></p>
    </div>
  </section>

  ${faqBlock(faqs)}

  ${whwBlock({
    who: "경기북부 생활권과 이용 기준을 직접 정리·상담하는 간다GO 예약 안내팀이 작성했습니다.",
    how: "실제 방문·상담 데이터를 바탕으로 시·군, 신도시, 역세권, 숙소 형태별 이동 기준을 구분해 안내합니다.",
    why: "지역명만 반복하는 페이지가 아니라, 방문 전 필요한 확인사항을 실제로 도움 되도록 제공하기 위함입니다.",
  })}
`;

export default {
  path: "/",
  title: "경기북부 출장마사지｜일산·의정부·남양주·파주·양주 홈타이 지역 안내",
  description: "간다GO 경기북부 출장마사지·홈타이. 일산·의정부·남양주·파주 생활권과 이용 전 확인 안내.",
  crumbs: [{ name: "경기북부 홈", href: "/" }],
  includeService: true,
  faqs,
  body,
};
