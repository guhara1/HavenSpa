// 5대 북부 생활권 페이지
import { pricingBlock, faqBlock, whwBlock, heroMedia } from "../render.mjs";
import { zoneCard } from "./cities.mjs";
import { LIFE_LINKS } from "./life.mjs";

const checklist = [
  "방문 주소와 상세 동·호수를 확인했나요?",
  "가까운 역·터미널 또는 신도시 생활권을 확인했나요?",
  "공동현관·엘리베이터·건물 출입 방식을 확인했나요?",
  "예약 가능 시간과 외곽 이동 기준을 확인했나요?",
  "불법·선정적 서비스 불가 안내를 확인했나요?",
];

const relCard = (t, h) => `<a class="card card--link" href="${h}"><h3 style="font-size:1.05rem">${t}</h3></a>`;

function areaPage(cfg) {
  const body = `
  <section class="hero">
    <div class="wrap hero__grid hero__grid--split">
      <div>
        <span class="eyebrow">${cfg.eyebrow}</span>
        <h1 style="font-size:var(--fs-hero);max-width:22ch">${cfg.h1}</h1>
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
    <div class="wrap prose" style="max-width:80ch">
      ${cfg.article}${cfg.venues || ""}
    </div>
  </section>

  <section class="section section--tight">
    <div class="wrap">
      <div class="sec-head center"><h2>${cfg.h1.split("·")[0].trim()} 대표 생활권</h2></div>
      <div class="grid grid--3">${cfg.zones.map((z) => zoneCard(z, LIFE_LINKS, cfg.dongs, cfg.subAreas)).join("")}</div>
    </div>
  </section>

  ${cfg.subAreas ? `<section class="section section--tight">
    <div class="wrap">
      <div class="sec-head center"><h2>도시·구 바로가기</h2><p>도시·행정구를 선택하면 상세 안내 페이지로 이동합니다.</p></div>
      <div class="grid grid--3">${cfg.subAreas.map(([t, h]) => `<a class="card card--link" href="${h}"><h3 style="font-size:1.05rem">${t}</h3></a>`).join("")}</div>
    </div>
  </section>` : ""}

  ${cfg.dongs ? `<section class="section section--tight">
    <div class="wrap">
      <div class="sec-head center"><h2>행정동·읍면 바로가기</h2><p>동·읍·면 이름을 누르면 해당 개별 안내 페이지로 이동합니다.</p></div>
      <div class="chiprow" style="justify-content:center;max-width:940px;margin-inline:auto">${cfg.dongs.map(([t, h]) => `<a class="chip" href="${h}">${t}</a>`).join("")}</div>
    </div>
  </section>` : ""}

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
    crumbs: [{ name: "경기북부 홈", href: "/" }, { name: cfg.crumb, href: cfg.path }],
    includeService: true,
    faqs: cfg.faqs,
    body,
  };
}

// --- 8-1. 고양·일산권 ---------------------------------------------------
const goyang = areaPage({
  path: "/gyeonggi-north/area/goyang-ilsan/",
  crumb: "고양·일산권",
  eyebrow: "경기북부 · 고양·일산권",
  subAreas: [
    ["고양시", "/gyeonggi-north/goyang-si/"], ["일산동구", "/gyeonggi-north/goyang-si/ilsandong-gu/"],
    ["일산서구", "/gyeonggi-north/goyang-si/ilsanseo-gu/"], ["덕양구", "/gyeonggi-north/goyang-si/deogyang-gu/"],
  ],
  dongs: [
    ["마두동", "/gyeonggi-north/goyang-si/madu-dong/"], ["백석동", "/gyeonggi-north/goyang-si/baekseok-dong/"], ["장항동", "/gyeonggi-north/goyang-si/janghang-dong/"], ["정발산동", "/gyeonggi-north/goyang-si/jeongbalsan-dong/"],
    ["주엽동", "/gyeonggi-north/goyang-si/juyeop-dong/"], ["대화동", "/gyeonggi-north/goyang-si/daehwa-dong/"], ["탄현동", "/gyeonggi-north/goyang-si/tanhyeon-dong/"],
    ["화정동", "/gyeonggi-north/goyang-si/hwajeong-dong/"], ["행신동", "/gyeonggi-north/goyang-si/haengsin-dong/"], ["삼송동", "/gyeonggi-north/goyang-si/samsong-dong/"], ["원흥동", "/gyeonggi-north/goyang-si/wonheung-dong/"],
    ["지축동", "/gyeonggi-north/goyang-si/jichuk-dong/"], ["향동동", "/gyeonggi-north/goyang-si/hyangdong-dong/"],
  ],
  title: "고양 출장마사지｜일산·화정·삼송 생활권 안내 - 간다GO",
  description: "고양·일산 출장마사지·홈타이. 일산·마두·화정·삼송 생활권과 오피스텔 이용 안내.",
  h1: "고양 출장마사지 · 일산·화정·삼송 생활권 안내",
  lead: "고양시는 경기북부에서 가장 도시형 수요가 강한 지역입니다. 일산의 오피스텔·상권과 덕양구의 서울 접경 신도시를 나누어 안내합니다.",
  article: `
    <h2>지역 개요</h2>
    <p>고양시는 일산동구·일산서구·덕양구 3개 구로 이루어진 인구 100만 규모의 도시입니다. 일산 신도시의 오피스텔·상권, 킨텍스 주변 숙소, 화정·행신의 주거지, 삼송·원흥·지축·향동의 서울 접경 택지지구가 한 도시 안에 공존합니다. 그래서 같은 고양이라도 방문 주소가 일산인지 덕양구인지에 따라 이용 기준이 달라집니다.</p>
    <h2>상위 행정구역 설명</h2>
    <p>일산동구는 마두·백석·정발산·장항, 일산서구는 주엽·대화·탄현, 덕양구는 화정·행신·삼송·원흥·지축·향동을 포함합니다. 일산권은 호수공원·상권 중심의 도시형 생활권이고, 덕양구는 서울 은평·삼송 접경의 신도시·광역교통 생활권입니다.</p>
    <h2>생활권 설명</h2>
    <p>일산호수공원·정발산 생활권은 상권과 오피스텔이 밀집해 방문 시 공동현관과 방문 시간대 확인이 중요합니다. 주엽·대화는 킨텍스 인접 숙소와 아파트 단지가 함께 있고, 화정·행신은 역세권 주거지, 삼송·원흥·지축·향동은 비교적 최근 조성된 택지지구로 공동현관·주차 확인이 필요합니다.</p>
    <h2>가까운 역·터미널·인접 지역</h2>
    <p>3호선 대화·주엽·정발산·마두·백석·화정·삼송·원흥·지축역과 경의중앙선 행신역, 고양종합터미널이 주요 거점입니다. 서울 은평·상암과 가까워 서울 접경 생활권 성격도 함께 확인하는 것이 좋습니다. 행정 정보는 <a href="https://www.goyang.go.kr/" rel="noopener" target="_blank">고양특례시청</a> 자료를 참고할 수 있습니다.</p>
    <h2>이용 장소별 기준</h2>
    <p>오피스텔은 공동현관 비밀번호, 엘리베이터, 방문 가능 시간대를 먼저 확인해야 합니다. 호텔·숙소는 체크인 여부와 객실 정책을, 아파트 단지는 공동현관과 주차 동선을 확인합니다. 일산권은 도시형 숙소·오피스텔 이용이 많고, 덕양구는 신도시 아파트·택지 주거지 이용이 많은 점이 다릅니다.</p>
    <h2>예약 전 확인사항</h2>
    <p>정확한 방문 주소, 건물 출입 방식, 예약 가능 시간, 변경 기준을 사전에 확인합니다. 자세한 항목은 <a href="/gyeonggi-north/check/">예약 전 확인</a> 페이지에서 정리해 두었습니다.</p>
    <h2>운영 기준·개인정보·불법 서비스 불가</h2>
    <p>예약 확인과 연락에 필요한 최소 정보만 확인하며 <a href="/gyeonggi-north/check/privacy/">개인정보 처리방침</a>에 따라 처리합니다. 불법·선정적 서비스는 제공하거나 안내하지 않으며, 자세한 내용은 <a href="/gyeonggi-north/check/service-policy/">불법·선정적 서비스 불가 안내</a>에서 확인할 수 있습니다.</p>
  `,
  zones: [
    { t: "일산호수공원·정발산", d: "상권·오피스텔 밀집 도시형 생활권" },
    { t: "마두·백석", d: "아파트 단지와 역세권 주거지" },
    { t: "주엽·대화", d: "킨텍스 인접 숙소·아파트권" },
    { t: "화정·행신", d: "역세권 주거지 생활권" },
    { t: "삼송·원흥", d: "서울 접경 신규 택지지구" },
    { t: "지축·향동", d: "은평 접경 신도시 생활권" },
  ],
  related: [
    ["고양시 상세", "/gyeonggi-north/goyang-si/"],
    ["파주시 상세", "/gyeonggi-north/paju-si/"],
    ["요금 안내", "/gyeonggi-north/pricing/"],
    ["예약 전 확인", "/gyeonggi-north/check/"],
  ],
  faqs: [
    { q: "일산과 덕양구는 이용 기준이 다른가요?", a: "네. 일산은 오피스텔·상권·숙소 중심이고, 덕양구는 삼송·원흥·지축·향동처럼 서울 접경 신도시 기준이 중요합니다." },
    { q: "오피스텔은 무엇을 확인해야 하나요?", a: "공동현관, 엘리베이터, 관리 규정, 방문 가능 시간대를 확인해야 합니다." },
    { q: "요금은 어떻게 되나요?", a: "60분 90,000원, 90분 150,000원, 120분 180,000원 기준이며 추가 비용 없이 안내합니다." },
  ],
  whw: {
    who: "고양·일산 생활권을 직접 상담하는 간다GO 예약 안내팀이 작성했습니다.",
    how: "일산동구·서구·덕양구를 오피스텔·상권·신도시 기준으로 구분해 안내합니다.",
    why: "같은 고양이라도 방문 주소에 따라 이용 기준이 다르기 때문입니다.",
  },
});

// --- 8-2. 남양주·구리권 -------------------------------------------------
const namyangju = areaPage({
  path: "/gyeonggi-north/area/namyangju-guri/",
  crumb: "남양주·구리권",
  eyebrow: "경기북부 · 남양주·구리권",
  subAreas: [["남양주시", "/gyeonggi-north/namyangju-si/"], ["구리시", "/gyeonggi-north/guri-si/"]],
  dongs: [
    ["다산동", "/gyeonggi-north/namyangju-si/dasan-dong/"], ["별내동", "/gyeonggi-north/namyangju-si/byeollae-dong/"], ["도농동", "/gyeonggi-north/namyangju-si/donong-dong/"], ["평내동", "/gyeonggi-north/namyangju-si/pyeongnae-dong/"], ["호평동", "/gyeonggi-north/namyangju-si/hopyeong-dong/"],
    ["진접읍", "/gyeonggi-north/namyangju-si/jinjeop-eup/"], ["오남읍", "/gyeonggi-north/namyangju-si/onam-eup/"], ["화도읍", "/gyeonggi-north/namyangju-si/hwado-eup/"], ["와부읍", "/gyeonggi-north/namyangju-si/wabu-eup/"], ["퇴계원읍", "/gyeonggi-north/namyangju-si/toegyewon-eup/"],
    ["인창동", "/gyeonggi-north/guri-si/inchang-dong/"], ["수택동", "/gyeonggi-north/guri-si/sutaek-dong/"], ["교문동", "/gyeonggi-north/guri-si/gyomun-dong/"], ["갈매동", "/gyeonggi-north/guri-si/galmae-dong/"],
  ],
  title: "남양주 출장마사지｜다산·별내·평내호평 이용 기준 - 간다GO",
  description: "남양주·구리 출장마사지·홈타이. 다산·별내·화도·마석 신도시와 외곽 이동 안내.",
  h1: "남양주 출장마사지 · 다산·별내·평내호평 이용 기준",
  lead: "남양주·구리권은 서울 동북부 접경 신도시와 외곽 읍면 이동 기준이 함께 작용합니다. 다산·별내는 신도시, 화도·마석은 외곽 기준으로 나눕니다.",
  article: `
    <h2>지역 개요</h2>
    <p>남양주시는 다산·별내 같은 신도시와 진접·오남·화도·마석 같은 외곽 읍면이 함께 있는 넓은 도시입니다. 구리시는 서울 중랑·강동과 맞닿은 소형 도시로 접경 성격이 강합니다. 두 지역 모두 서울 출퇴근권 수요가 크지만, 신도시와 외곽 읍면은 이동 거리와 예약 가능 시간이 다르게 적용됩니다.</p>
    <h2>상위 행정구역 설명</h2>
    <p>남양주는 다산동·별내동·평내동·호평동·도농동과 진접읍·오남읍·화도읍·와부읍·퇴계원읍으로 구성되고, 구리는 인창·수택·교문·갈매 생활권이 중심입니다. 신도시 지역은 아파트·오피스텔 밀집, 외곽 읍면은 단독·전원주택과 차량 이동 기준이 중요합니다.</p>
    <h2>생활권 설명</h2>
    <p>다산·도농은 지하철·광역버스가 연결된 신도시 생활권, 별내·갈매는 서울 접경 아파트권입니다. 평내호평은 경춘선 역세권 주거지, 진접·오남·화도·마석은 외곽으로 갈수록 이동 거리 확인이 중요해집니다.</p>
    <h2>가까운 역·터미널·인접 지역</h2>
    <p>경춘선 평내호평·마석역, 경의중앙선 도농역, 8호선 별내·다산 연장 구간, 구리역이 주요 거점입니다. 서울 강동·중랑과 인접해 접경 생활권 확인이 함께 필요합니다. 행정 정보는 <a href="https://www.nyj.go.kr/" rel="noopener" target="_blank">남양주시청</a>을 참고할 수 있습니다.</p>
    <h2>이용 장소별 기준</h2>
    <p>다산·별내 신도시는 아파트 공동현관과 주차 동선을, 오피스텔은 방문 시간대와 관리 규정을 확인합니다. 화도·마석 등 외곽 읍면은 정확한 주소와 야간 이동 가능 여부, 외곽 이동 기준을 먼저 확인해야 합니다.</p>
    <h2>예약 전 확인사항</h2>
    <p>신도시와 외곽은 확인 항목이 다릅니다. <a href="/gyeonggi-north/check/">예약 전 확인</a>에서 공통 항목을, 외곽은 이동 기준을 추가로 확인하세요.</p>
    <h2>운영 기준·개인정보·불법 서비스 불가</h2>
    <p>최소한의 예약 정보만 확인하며 <a href="/gyeonggi-north/check/privacy/">개인정보 처리방침</a>을 따릅니다. 불법·선정적 서비스는 안내하지 않습니다(<a href="/gyeonggi-north/check/service-policy/">불가 안내</a>).</p>
    <h2>남양주·구리권 이용 장소 참고</h2>
    <p>이 권역은 신도시 아파트, 오피스텔, 외곽 단독·전원주택이 고루 섞여 있어 방문 장소에 따라 확인 항목이 달라집니다. 다산·별내의 <a href="/gyeonggi-north/use/apartment/">아파트 단지</a>는 방문 차량 등록과 지하주차장 진입 방식을, 구리역 인근 <a href="/gyeonggi-north/use/officetel/">오피스텔</a>은 공동현관과 방문객 엘리베이터를 확인합니다. 화도·마석 등 외곽은 <a href="/gyeonggi-north/use/outer-area/">외곽 지역 이용</a> 기준에 따라 진입로와 예약 가능 시간을 먼저 확인하는 것이 좋습니다. 도시별 세부 안내는 <a href="/gyeonggi-north/namyangju-si/">남양주시</a>·<a href="/gyeonggi-north/guri-si/">구리시</a>에서 확인할 수 있습니다.</p>
  `,
  zones: [
    { t: "다산·도농", d: "지하철·광역버스 연결 신도시" },
    { t: "별내·갈매", d: "서울 접경 아파트 생활권" },
    { t: "평내호평", d: "경춘선 역세권 주거지" },
    { t: "진접·오남", d: "외곽 읍면 이동 기준 지역" },
    { t: "화도·마석", d: "외곽·야간 이동 확인 지역" },
    { t: "구리역·인창", d: "서울 접경 소형 도시 중심" },
  ],
  related: [
    ["남양주시 상세", "/gyeonggi-north/namyangju-si/"],
    ["구리시 상세", "/gyeonggi-north/guri-si/"],
    ["외곽 이동 기준", "/gyeonggi-north/check/"],
    ["요금 안내", "/gyeonggi-north/pricing/"],
  ],
  faqs: [
    { q: "남양주 외곽 읍면도 방문 가능한가요?", a: "진접, 오남, 화도, 마석 등은 이동 거리와 예약 가능 시간 확인이 필요하며, 정확한 주소를 먼저 확인합니다." },
    { q: "다산·별내는 무엇을 확인하나요?", a: "신도시 아파트 공동현관, 주차 동선, 방문 가능 시간대를 확인합니다." },
    { q: "구리도 안내되나요?", a: "구리역·인창·수택·갈매 등 서울 접경 생활권을 안내하며, 방문 주소 기준으로 확인합니다." },
  ],
  whw: {
    who: "남양주·구리 생활권을 상담하는 간다GO 예약 안내팀이 작성했습니다.",
    how: "신도시와 외곽 읍면을 이동 기준으로 구분해 안내합니다.",
    why: "같은 남양주라도 신도시와 외곽은 확인 항목이 다르기 때문입니다.",
  },
});

// --- 8-3. 의정부·양주권 -------------------------------------------------
const uijeongbu = areaPage({
  path: "/gyeonggi-north/area/uijeongbu-yangju/",
  crumb: "의정부·양주권",
  eyebrow: "경기북부 · 의정부·양주권",
  subAreas: [["의정부시", "/gyeonggi-north/uijeongbu-si/"], ["양주시", "/gyeonggi-north/yangju-si/"]],
  dongs: [
    ["의정부동", "/gyeonggi-north/uijeongbu-si/uijeongbu-dong/"], ["민락동", "/gyeonggi-north/uijeongbu-si/minrak-dong/"], ["금오동", "/gyeonggi-north/uijeongbu-si/geumo-dong/"], ["신곡동", "/gyeonggi-north/uijeongbu-si/singok-dong/"],
    ["가능동", "/gyeonggi-north/uijeongbu-si/ganeung-dong/"], ["호원동", "/gyeonggi-north/uijeongbu-si/howon-dong/"], ["녹양동", "/gyeonggi-north/uijeongbu-si/nogyang-dong/"], ["장암동", "/gyeonggi-north/uijeongbu-si/jangam-dong/"],
    ["옥정동", "/gyeonggi-north/yangju-si/okjeong-dong/"], ["고읍동", "/gyeonggi-north/yangju-si/goeup-dong/"], ["덕정동", "/gyeonggi-north/yangju-si/deokjeong-dong/"], ["회천동", "/gyeonggi-north/yangju-si/hoecheon-dong/"],
    ["백석읍", "/gyeonggi-north/yangju-si/baekseok-eup/"], ["광적면", "/gyeonggi-north/yangju-si/gwangjeok-myeon/"], ["장흥면", "/gyeonggi-north/yangju-si/jangheung-myeon/"],
  ],
  title: "의정부 출장마사지｜의정부역·민락·옥정 안내 - 간다GO",
  description: "의정부·양주 출장마사지·홈타이. 의정부역·민락·금오·옥정·덕정 생활권 안내.",
  h1: "의정부 출장마사지 · 의정부역·민락·금오 예약 전 확인",
  lead: "의정부·양주권은 경기북부 교통·행정 중심과 옥정·회천·덕정 신도시 확장성이 함께 있는 권역입니다.",
  article: `
    <h2>지역 개요</h2>
    <p>의정부시는 경기북부의 교통·행정 중심 도시로 의정부역 상권과 오피스텔, 민락·금오 주거지가 발달해 있습니다. 양주시는 옥정·회천·덕정 신도시가 빠르게 확장 중이며, 외곽으로 갈수록 차량 이동 기준이 중요합니다. 같은 권역이라도 의정부는 역세권·상권, 양주는 신도시·외곽 성격이 강합니다.</p>
    <h2>상위 행정구역 설명</h2>
    <p>의정부는 의정부동·민락동·금오동·신곡동·가능동·호원동·녹양동·장암동으로, 양주는 옥정동·고읍동·덕정동·회천동·백석읍·광적면·장흥면으로 구성됩니다. 의정부는 도심 밀집형, 양주는 신도시와 외곽 읍면이 섞여 있습니다.</p>
    <h2>생활권 설명</h2>
    <p>의정부역·중앙로는 상권·오피스텔 중심, 민락·고산은 택지지구 아파트권, 금오·신곡은 주거지, 회룡·가능은 역세권입니다. 양주 옥정은 대규모 신도시, 덕정·회천은 확장 주거지로 차량 이동 기준이 함께 필요합니다.</p>
    <h2>가까운 역·터미널·인접 지역</h2>
    <p>1호선 의정부·회룡·가능·양주·덕정역, 의정부경전철, 의정부시외버스터미널이 주요 거점입니다. 서울 도봉·노원과 인접해 접경 생활권도 함께 확인합니다. 행정 정보는 <a href="https://www.ui4u.go.kr/" rel="noopener" target="_blank">의정부시청</a>을 참고할 수 있습니다.</p>
    <h2>이용 장소별 기준</h2>
    <p>의정부역 인근 오피스텔은 공동현관·방문 시간대 확인이 중요하고, 민락·옥정 아파트 단지는 공동현관과 주차 동선을 확인합니다. 양주 외곽 읍면은 정확한 주소와 차량 이동 기준을 반드시 확인해야 합니다.</p>
    <h2>예약 전 확인사항</h2>
    <p>역세권·신도시·외곽은 확인 항목이 다릅니다. <a href="/gyeonggi-north/check/">예약 전 확인</a>에서 공통 항목과 공동현관 확인을 참고하세요.</p>
    <h2>운영 기준·개인정보·불법 서비스 불가</h2>
    <p>최소 정보만 확인하며 <a href="/gyeonggi-north/check/privacy/">개인정보 처리방침</a>을 따릅니다. 불법·선정적 서비스는 안내하지 않습니다(<a href="/gyeonggi-north/check/service-policy/">불가 안내</a>).</p>
    <h2>의정부·양주권 이용 장소 참고</h2>
    <p>의정부는 역세권 상권의 <a href="/gyeonggi-north/use/officetel/">오피스텔</a> 비중이 높아 공동현관 인증과 방문객 엘리베이터, 심야 출입 방식을 확인하는 것이 중요합니다. 민락·옥정의 <a href="/gyeonggi-north/use/apartment/">아파트 단지</a>는 지하주차장 방문 등록과 지상 차량 통제 여부를 함께 확인합니다. 양주 백석·광적·장흥 등 외곽은 <a href="/gyeonggi-north/use/outer-area/">외곽 지역 이용</a> 기준에 따라 차량 이동과 예약 가능 시간을 조율합니다. 도시별 세부 안내는 <a href="/gyeonggi-north/uijeongbu-si/">의정부시</a>·<a href="/gyeonggi-north/yangju-si/">양주시</a>에서 확인할 수 있습니다.</p>
  `,
  zones: [
    { t: "의정부역·중앙로", d: "상권·오피스텔 밀집 중심" },
    { t: "민락·고산", d: "택지지구 아파트 생활권" },
    { t: "금오·신곡", d: "주거지 중심 생활권" },
    { t: "회룡·가능", d: "1호선 역세권 생활권" },
    { t: "양주 옥정", d: "대규모 신도시 이용 기준" },
    { t: "덕정·회천", d: "확장 주거지·차량 이동권" },
  ],
  related: [
    ["의정부시 상세", "/gyeonggi-north/uijeongbu-si/"],
    ["양주시 상세", "/gyeonggi-north/yangju-si/"],
    ["예약 전 확인", "/gyeonggi-north/check/"],
    ["요금 안내", "/gyeonggi-north/pricing/"],
  ],
  faqs: [
    { q: "의정부와 양주는 이용 기준이 다른가요?", a: "의정부는 역세권·상권·오피스텔 중심, 양주는 옥정·덕정 신도시와 외곽 차량 이동 기준 중심으로 다릅니다." },
    { q: "양주 외곽도 방문 가능한가요?", a: "덕정, 백석, 광적, 장흥 등은 차량 이동 기준과 예약 가능 시간을 먼저 확인합니다." },
    { q: "아파트 공동현관은 어떻게 확인하나요?", a: "공동현관 출입 방식과 방문 가능 시간대를 예약 시 함께 확인합니다." },
  ],
  whw: {
    who: "의정부·양주 생활권을 상담하는 간다GO 예약 안내팀이 작성했습니다.",
    how: "의정부 역세권과 양주 신도시·외곽을 구분해 이동 기준을 안내합니다.",
    why: "교통 중심 도시와 신도시 확장권은 확인 항목이 다르기 때문입니다.",
  },
});

// --- 8-4. 파주·운정권 ---------------------------------------------------
const paju = areaPage({
  path: "/gyeonggi-north/area/paju-unjeong/",
  crumb: "파주·운정권",
  eyebrow: "경기북부 · 파주·운정권",
  subAreas: [["파주시", "/gyeonggi-north/paju-si/"]],
  dongs: [
    ["운정동", "/gyeonggi-north/paju-si/unjeong-dong/"], ["야당동", "/gyeonggi-north/paju-si/yadang-dong/"], ["와동동", "/gyeonggi-north/paju-si/wadong-dong/"], ["동패동", "/gyeonggi-north/paju-si/dongpae-dong/"],
    ["금촌동", "/gyeonggi-north/paju-si/geumchon-dong/"], ["문산읍", "/gyeonggi-north/paju-si/munsan-eup/"], ["교하동", "/gyeonggi-north/paju-si/gyoha-dong/"], ["탄현면", "/gyeonggi-north/paju-si/tanhyeon-myeon/"], ["조리읍", "/gyeonggi-north/paju-si/jori-eup/"],
  ],
  title: "파주 출장마사지｜운정·야당·금촌 생활권 안내 - 간다GO",
  description: "파주·운정 출장마사지·홈타이. 운정신도시·야당·문산·탄현 이용 기준 안내.",
  h1: "파주 출장마사지 · 운정·야당·금촌 생활권 안내",
  lead: "파주·운정권은 운정신도시와 경의중앙선, 자유로 이동, 출판단지·헤이리 관광지, 접경지역 이동 기준이 함께 필요한 권역입니다.",
  article: `
    <h2>지역 개요</h2>
    <p>파주시는 운정신도시의 오피스텔·아파트 밀집권과 문산·탄현·교하의 외곽·접경·관광 생활권이 함께 있는 넓은 도시입니다. 운정은 최근 조성된 신도시로 도시형 수요가 크고, 문산·탄현은 접경지역과 헤이리·출판단지 관광권 성격이 강합니다.</p>
    <h2>상위 행정구역 설명</h2>
    <p>운정동·야당동·와동동·동패동·교하동은 신도시 생활권, 금촌동은 파주시청 인근 도심, 문산읍·탄현면·조리읍은 외곽·접경·관광 생활권입니다. 신도시와 외곽은 이동 거리와 예약 가능 시간이 다르게 적용됩니다.</p>
    <h2>생활권 설명</h2>
    <p>운정신도시는 아파트·오피스텔·상권이 밀집해 공동현관과 방문 시간대 확인이 중요합니다. 야당·와동은 역세권 주거지, 금촌은 파주시청 인근 도심, 문산·탄현은 자유로·접경 이동과 관광 숙소 기준이 함께 필요합니다.</p>
    <h2>가까운 역·터미널·인접 지역</h2>
    <p>경의중앙선 운정·야당·금촌·문산역, GTX-A 운정 구간, 자유로 이동 동선이 주요 거점입니다. 헤이리·출판단지·탄현 관광권과 접경지역이 인접해 이동 기준 확인이 중요합니다. 행정 정보는 <a href="https://www.paju.go.kr/" rel="noopener" target="_blank">파주시청</a>을 참고할 수 있습니다.</p>
    <h2>이용 장소별 기준</h2>
    <p>운정 오피스텔은 공동현관·엘리베이터·방문 시간대를, 아파트 단지는 공동현관·주차 동선을 확인합니다. 문산·탄현 등 접경·관광권은 정확한 주소, 야간 이동 가능 여부, 외곽 이동 기준을 먼저 확인해야 합니다.</p>
    <h2>예약 전 확인사항</h2>
    <p>신도시와 접경·관광권은 확인 항목이 다릅니다. <a href="/gyeonggi-north/check/">예약 전 확인</a>에서 공통 항목을, 관광 숙소는 출입 방식을 추가로 확인하세요.</p>
    <h2>운영 기준·개인정보·불법 서비스 불가</h2>
    <p>최소 정보만 확인하며 <a href="/gyeonggi-north/check/privacy/">개인정보 처리방침</a>을 따릅니다. 불법·선정적 서비스는 안내하지 않습니다(<a href="/gyeonggi-north/check/service-policy/">불가 안내</a>).</p>
    <h2>파주·운정권 이용 장소 참고</h2>
    <p>운정신도시는 최근 지어진 <a href="/gyeonggi-north/use/apartment/">아파트 단지</a>와 <a href="/gyeonggi-north/use/officetel/">오피스텔</a>이 많아 공동현관 인증 방식과 방문 차량 등록 절차가 단지·건물마다 다릅니다. 예약 시 최신 출입 방법을 확인하면 대기 없이 방문할 수 있습니다. 문산·탄현·교하 등 접경·관광권은 <a href="/gyeonggi-north/use/outer-area/">외곽 지역 이용</a>과 <a href="/gyeonggi-north/use/pension-private-stay/">펜션·독채 숙소 이용</a> 기준을 함께 확인해 진입로와 예약 가능 시간을 조율합니다. 도시 세부 안내는 <a href="/gyeonggi-north/paju-si/">파주시</a>에서 확인할 수 있습니다.</p>
  `,
  zones: [
    { t: "운정신도시", d: "아파트·오피스텔·상권 밀집" },
    { t: "야당·와동", d: "경의중앙선 역세권 주거지" },
    { t: "금촌·파주시청", d: "파주 도심 생활권" },
    { t: "문산·파주북부", d: "접경·외곽 이동 기준 지역" },
    { t: "교하·동패", d: "신도시 인접 주거지" },
    { t: "탄현·헤이리", d: "관광·출판단지 인접권" },
  ],
  related: [
    ["파주시 상세", "/gyeonggi-north/paju-si/"],
    ["고양시 상세", "/gyeonggi-north/goyang-si/"],
    ["예약 전 확인", "/gyeonggi-north/check/"],
    ["요금 안내", "/gyeonggi-north/pricing/"],
  ],
  faqs: [
    { q: "운정과 문산은 이용 기준이 다른가요?", a: "운정은 신도시·오피스텔 중심, 문산·탄현은 접경·관광·외곽 기준 중심으로 다릅니다." },
    { q: "파주 문산 등 접경 지역도 가능한가요?", a: "접경·외곽 지역은 예약 가능 시간과 이동 기준이 달라질 수 있어 사전 확인이 필요합니다." },
    { q: "헤이리·탄현 관광 숙소도 되나요?", a: "관광 숙소는 정확한 주소와 출입 방식, 야간 이동 가능 여부를 먼저 확인합니다." },
  ],
  whw: {
    who: "파주·운정 생활권을 상담하는 간다GO 예약 안내팀이 작성했습니다.",
    how: "운정신도시와 문산·탄현 접경·관광권을 구분해 이동 기준을 안내합니다.",
    why: "신도시와 접경·관광권은 확인 항목이 다르기 때문입니다.",
  },
});

// --- 8-5. 포천·동두천·가평·연천권 --------------------------------------
const outer = areaPage({
  path: "/gyeonggi-north/area/pocheon-dongducheon-gapyeong-yeoncheon/",
  crumb: "포천·동두천·가평·연천권",
  eyebrow: "경기북부 · 외곽·관광권",
  subAreas: [
    ["포천시", "/gyeonggi-north/pocheon-si/"], ["동두천시", "/gyeonggi-north/dongducheon-si/"],
    ["가평군", "/gyeonggi-north/gapyeong-gun/"], ["연천군", "/gyeonggi-north/yeoncheon-gun/"],
  ],
  dongs: [
    ["소흘읍", "/gyeonggi-north/pocheon-si/soheul-eup/"], ["포천동", "/gyeonggi-north/pocheon-si/pocheon-dong/"], ["선단동", "/gyeonggi-north/pocheon-si/seondan-dong/"], ["일동면", "/gyeonggi-north/pocheon-si/ildong-myeon/"],
    ["지행동", "/gyeonggi-north/dongducheon-si/jihaeng-dong/"], ["생연동", "/gyeonggi-north/dongducheon-si/saengyeon-dong/"], ["보산동", "/gyeonggi-north/dongducheon-si/bosan-dong/"], ["중앙동", "/gyeonggi-north/dongducheon-si/jungang-dong/"],
    ["가평읍", "/gyeonggi-north/gapyeong-gun/gapyeong-eup/"], ["청평면", "/gyeonggi-north/gapyeong-gun/cheongpyeong-myeon/"], ["설악면", "/gyeonggi-north/gapyeong-gun/seorak-myeon/"], ["조종면", "/gyeonggi-north/gapyeong-gun/jojong-myeon/"],
    ["전곡읍", "/gyeonggi-north/yeoncheon-gun/jeongok-eup/"], ["연천읍", "/gyeonggi-north/yeoncheon-gun/yeoncheon-eup/"], ["청산면", "/gyeonggi-north/yeoncheon-gun/cheongsan-myeon/"], ["백학면", "/gyeonggi-north/yeoncheon-gun/baekhak-myeon/"],
  ],
  title: "포천·가평 출장마사지｜펜션·외곽 이동 기준 - 간다GO",
  description: "포천·동두천·가평·연천 출장마사지. 펜션·리조트·접경 외곽 이동 기준 안내.",
  h1: "포천·동두천·가평·연천 외곽·관광권 이용 기준",
  lead: "이 권역은 외곽·관광·군부대 인접·펜션 숙소·장거리 이동 기준이 핵심입니다. 실제 검색 수요가 있는 생활권부터 안내합니다.",
  article: `
    <h2>지역 개요</h2>
    <p>포천·동두천·가평·연천은 경기북부 외곽 권역으로, 펜션·리조트 관광 숙소와 군부대 인접·접경지역, 장거리 차량 이동이 특징입니다. 도심 밀집 지역보다 숙소 위치와 예약 가능 시간, 외곽 이동 기준 확인이 더 중요합니다.</p>
    <h2>상위 행정구역 설명</h2>
    <p>포천은 포천동·소흘읍·송우리·선단동·일동면, 동두천은 지행·생연·보산, 가평은 가평읍·청평·설악·조종·북면, 연천은 전곡·연천읍·청산·백학으로 구성됩니다. 가평·청평은 관광 숙소, 동두천은 1호선 북부 생활권, 연천은 접경 외곽 성격이 강합니다.</p>
    <h2>생활권 설명</h2>
    <p>포천 송우리·소흘은 도심 생활권, 외곽은 펜션·전원 숙소가 많습니다. 동두천 지행·생연은 1호선 역세권 주거지, 가평읍·청평은 펜션·리조트 관광권, 연천 전곡은 접경 외곽 도심입니다.</p>
    <h2>가까운 역·터미널·인접 지역</h2>
    <p>1호선 동두천중앙·지행·소요산역, 경춘선 가평·청평역, 연천 전곡역과 각 시외버스터미널이 거점입니다. 관광지·펜션이 산재해 정확한 숙소 위치 확인이 중요합니다. 행정 정보는 <a href="https://www.gp.go.kr/" rel="noopener" target="_blank">가평군청</a> 등을 참고할 수 있습니다.</p>
    <h2>이용 장소별 기준</h2>
    <p>펜션·독채 숙소는 정확한 주소, 주차 가능 여부, 야간 출입 가능 여부, 외곽 이동 기준을 먼저 확인해야 합니다. 리조트·관광 숙소는 객실 정책과 체크인 상태를, 동두천 주거지는 공동현관·주차 동선을 확인합니다.</p>
    <h2>예약 전 확인사항</h2>
    <p>외곽·접경 지역은 예약 가능 시간과 이동 기준이 달라질 수 있습니다. <a href="/gyeonggi-north/check/">예약 전 확인</a>에서 외곽 이동 기준을 먼저 확인하세요.</p>
    <h2>운영 기준·개인정보·불법 서비스 불가</h2>
    <p>최소 정보만 확인하며 <a href="/gyeonggi-north/check/privacy/">개인정보 처리방침</a>을 따릅니다. 불법·선정적 서비스는 안내하지 않습니다(<a href="/gyeonggi-north/check/service-policy/">불가 안내</a>).</p>
    <h2>외곽·관광권 이용 장소 참고</h2>
    <p>이 권역은 도심 주거지보다 <a href="/gyeonggi-north/use/pension-private-stay/">펜션·독채 숙소</a>와 <a href="/gyeonggi-north/use/tour-accommodation/">관광지 인접 숙소</a> 이용이 많습니다. 가평·청평·설악·포천 외곽의 숙소는 같은 단지 안에서도 진입로와 주차 위치가 달라 숙소명·정확한 주소·야간 출입 방식을 먼저 확인해야 합니다. 동두천 지행·생연의 <a href="/gyeonggi-north/use/apartment/">아파트 단지</a>는 공동현관과 주차 동선을 확인합니다. 장거리 구간은 <a href="/gyeonggi-north/check/travel-fee/">외곽 이동 기준</a>에 따라 예약 가능 시간을 조율하며, 도시별 세부 안내는 <a href="/gyeonggi-north/pocheon-si/">포천시</a>·<a href="/gyeonggi-north/gapyeong-gun/">가평군</a>에서 확인할 수 있습니다.</p>
  `,
  zones: [
    { t: "포천 송우리·소흘", d: "포천 도심 생활권" },
    { t: "포천 외곽 숙소", d: "펜션·전원 숙소 이용권" },
    { t: "동두천 지행·생연", d: "1호선 북부 역세권" },
    { t: "가평읍·청평", d: "펜션·리조트 관광권" },
    { t: "설악·조종", d: "가평 외곽 관광 숙소권" },
    { t: "연천 전곡", d: "접경 외곽 도심 생활권" },
  ],
  related: [
    ["포천시 상세", "/gyeonggi-north/pocheon-si/"],
    ["동두천시 상세", "/gyeonggi-north/dongducheon-si/"],
    ["가평군 상세", "/gyeonggi-north/gapyeong-gun/"],
    ["연천군 상세", "/gyeonggi-north/yeoncheon-gun/"],
  ],
  faqs: [
    { q: "가평이나 포천 펜션도 가능한가요?", a: "펜션·독채 숙소는 정확한 주소, 주차 가능 여부, 야간 출입 가능 여부, 외곽 이동 기준을 먼저 확인해야 합니다." },
    { q: "연천처럼 접경 지역도 가능한가요?", a: "접경·외곽 지역은 예약 가능 시간과 이동 기준이 달라질 수 있어 사전 확인이 필요합니다." },
    { q: "동두천은 어떤 기준인가요?", a: "지행·생연 등 1호선 북부 주거지 중심으로 공동현관·주차 동선을 확인합니다." },
  ],
  whw: {
    who: "외곽·관광권을 상담하는 간다GO 예약 안내팀이 작성했습니다.",
    how: "펜션·리조트·접경 외곽을 숙소 위치와 이동 기준으로 구분해 안내합니다.",
    why: "외곽·관광권은 도심과 달리 숙소 위치와 예약 가능 시간 확인이 핵심이기 때문입니다.",
  },
});

export default [goyang, namyangju, uijeongbu, paju, outer];
