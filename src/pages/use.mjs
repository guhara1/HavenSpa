// 이용 장소 상세페이지 (10개) + 허브
import { topicPage } from "./_topic.mjs";
import { faqBlock, whwBlock } from "../render.mjs";

const HUB = { name: "이용 장소", href: "/gyeonggi-north/use/" };
const home = { name: "경기북부 홈", href: "/" };
const crumbs = (name, path) => [home, HUB, { name, href: path }];

const relCommon = [
  ["예약 전 확인", "/gyeonggi-north/check/"],
  ["요금 안내", "/gyeonggi-north/pricing/"],
  ["운영 기준", "/gyeonggi-north/operation/"],
];

function use(cfg) {
  return topicPage({ ...cfg, crumbs: crumbs(cfg.crumb, cfg.path), includePricing: true, related: cfg.related || relCommon });
}

// 1. 자택 이용
const uHome = use({
  path: "/gyeonggi-north/use/home/", crumb: "자택 이용", eyebrow: "이용 장소 · 자택",
  title: "자택 출장마사지 이용 안내 - 간다GO 경기북부",
  description: "자택 출장마사지 이용 안내. 방문 주소·공동현관·주차 등 확인 사항 안내.",
  h1: "자택 방문 이용 안내", alt: "자택 방문 홈케어 준비 이미지",
  lead: "집에서 편하게 받는 자택 방문은 이동 없이 컨디션을 정리할 수 있습니다. 방문 전 확인 사항을 안내합니다.",
  article: `
    <h2>자택 방문의 장점</h2>
    <p>자택 방문은 이동 없이 익숙한 공간에서 받을 수 있어 이용 전후로 몸에 무리가 적습니다. 야근이 잦거나 이동이 부담스러운 분, 1인 가구, 어르신 등에게 특히 편리합니다. 다만 방문 서비스인 만큼 정확한 주소와 출입 방식 확인이 예약의 시작입니다.</p>
    <h2>방문 전 확인할 것</h2>
    <p>아파트·빌라·단독주택에 따라 확인 항목이 다릅니다. 아파트는 공동현관 출입 방법과 지하주차장 방문 등록, 동·호수를 확인하고, 빌라·단독은 개별 출입 방식과 주차 공간, 야간 조명 여부를 확인합니다. 좁은 골목이나 진입로가 있는 경우 인근 지형 지물을 함께 알려주시면 이동이 정확합니다.</p>
    <h2>준비하면 좋은 것</h2>
    <p>편안하게 누울 수 있는 공간과 콘센트, 수건 정도만 있으면 충분합니다. 필요한 도구는 관리사가 준비해 방문하므로 별도 장비는 필요하지 않습니다. 반려동물이 있는 경우 미리 알려주시면 진행이 원활합니다.</p>
    <h2>운영 기준</h2>
    <p>예약 확인과 연락에 필요한 최소 정보만 확인하며 <a href="/gyeonggi-north/check/privacy/">개인정보 처리방침</a>을 따릅니다. 불법·선정적 서비스는 <a href="/gyeonggi-north/check/service-policy/">제공하지 않습니다</a>. 지역별 안내는 <a href="/">경기북부 홈</a>에서 확인하세요.</p>
  `,
  checklist: ["정확한 방문 주소와 동·호수를 확인했나요?", "공동현관 또는 개별 출입 방식을 확인했나요?", "주차 공간과 진입로를 확인했나요?", "예약 가능 시간을 확인했나요?"],
  related: [["아파트 단지 이용", "/gyeonggi-north/use/apartment/"], ["오피스텔 이용", "/gyeonggi-north/use/officetel/"], ["예약 전 확인", "/gyeonggi-north/check/"], ["요금 안내", "/gyeonggi-north/pricing/"]],
  faqs: [
    { q: "자택 방문 시 준비물이 있나요?", a: "누울 공간과 콘센트, 수건 정도면 충분하며 필요한 도구는 관리사가 준비해 방문합니다." },
    { q: "빌라·단독주택도 가능한가요?", a: "개별 출입 방식과 주차 공간, 야간 조명 여부, 진입로를 함께 확인하면 됩니다." },
  ],
  whw: { who: "자택 방문 예약을 상담하는 간다GO 예약 안내팀입니다.", how: "주거 형태별 출입·주차 기준을 구분해 안내합니다.", why: "방문 서비스는 정확한 주소·출입 확인이 안내의 시작이기 때문입니다." },
});

// 2. 호텔·숙소 이용
const uHotel = use({
  path: "/gyeonggi-north/use/hotel/", crumb: "호텔·숙소 이용", eyebrow: "이용 장소 · 호텔·숙소",
  title: "호텔·숙소 출장마사지 이용 안내 - 간다GO 경기북부",
  description: "호텔·숙소 출장마사지 이용 안내. 체크인·객실 정책·방문객 출입 확인 안내.",
  h1: "호텔·숙소 이용 안내", alt: "호텔 객실 홈케어 준비 이미지",
  lead: "출장·여행·기념일에 머무는 호텔·숙소에서도 이용할 수 있습니다. 숙소 정책 확인이 중요합니다.",
  article: `
    <h2>호텔·숙소 이용 특징</h2>
    <p>호텔·레지던스·모텔 등 숙박 시설에서도 방문 이용이 가능합니다. 출장이나 여행 중, 기념일 등 특별한 날에 이동 없이 받을 수 있어 편리합니다. 다만 숙소마다 방문객 출입 정책이 다르므로 예약 전 확인이 필요합니다.</p>
    <h2>확인해야 할 숙소 정책</h2>
    <p>체크인이 완료되어 객실이 배정된 상태인지, 방문객 출입이 허용되는지, 프런트를 통과해야 하는지 확인합니다. 객실 호수와 층, 엘리베이터 카드키 사용 여부를 함께 알려주시면 이동이 정확합니다. 일부 숙소는 야간 방문객 출입을 제한하므로 예약 가능 시간과 함께 확인하는 것이 좋습니다.</p>
    <h2>지역별 참고</h2>
    <p>일산 킨텍스 인근은 전시·행사 시즌에 체크인이 몰릴 수 있고, 가평·청평·포천의 리조트·펜션은 <a href="/gyeonggi-north/use/pension-private-stay/">펜션·독채 숙소 이용</a> 기준을 함께 확인해야 합니다. 관광지 인접 숙소는 <a href="/gyeonggi-north/use/tour-accommodation/">관광지 인접 숙소 이용</a>을 참고하세요.</p>
    <h2>운영 기준</h2>
    <p>최소 정보만 확인하며 <a href="/gyeonggi-north/check/privacy/">개인정보 처리방침</a>을 따릅니다. 불법·선정적 서비스는 <a href="/gyeonggi-north/check/service-policy/">제공하지 않습니다</a>.</p>
  `,
  checklist: ["체크인 후 객실이 배정되었나요?", "방문객 출입이 허용되는 숙소인가요?", "객실 호수·층·카드키 사용 방식을 확인했나요?", "야간 방문 가능 시간을 확인했나요?"],
  related: [["펜션·독채 숙소 이용", "/gyeonggi-north/use/pension-private-stay/"], ["관광지 인접 숙소", "/gyeonggi-north/use/tour-accommodation/"], ["호텔·숙소 정책", "/gyeonggi-north/check/hotel-policy/"], ["요금 안내", "/gyeonggi-north/pricing/"]],
  faqs: [
    { q: "모든 호텔에서 가능한가요?", a: "숙소마다 방문객 출입 정책이 달라 체크인 상태와 출입 허용 여부를 먼저 확인해야 합니다." },
    { q: "야간에도 숙소 방문이 되나요?", a: "일부 숙소는 야간 방문객 출입을 제한하므로 예약 가능 시간과 함께 확인합니다." },
  ],
  whw: { who: "호텔·숙소 방문 예약을 상담하는 간다GO 예약 안내팀입니다.", how: "숙소 유형별 출입·객실 정책을 구분해 안내합니다.", why: "숙소마다 방문객 정책이 달라 사전 확인이 필요하기 때문입니다." },
});

// 3. 오피스텔 이용
const uOfficetel = use({
  path: "/gyeonggi-north/use/officetel/", crumb: "오피스텔 이용", eyebrow: "이용 장소 · 오피스텔",
  title: "오피스텔 출장마사지 이용 안내 - 간다GO 경기북부",
  description: "오피스텔 출장마사지 이용 안내. 공동현관·엘리베이터·관리 규정 확인 안내.",
  h1: "오피스텔 이용 안내", alt: "오피스텔 홈케어 준비 이미지",
  lead: "일산·의정부·운정 등 오피스텔이 많은 지역에서 자주 이용됩니다. 출입 방식 확인이 핵심입니다.",
  article: `
    <h2>오피스텔 이용 특징</h2>
    <p>오피스텔은 일산·의정부역·운정신도시 등 도심 생활권에 밀집해 있어 방문 이용이 많은 장소입니다. 주거와 상가가 한 건물에 섞인 주상복합이 많아, 일반 아파트와는 다른 출입 방식을 확인해야 합니다.</p>
    <h2>확인해야 할 것</h2>
    <p>공동현관 비밀번호 또는 호출 방식, 방문객 엘리베이터 사용법, 관리실 통과 여부, 방문 가능 시간대를 확인합니다. 일부 오피스텔은 특정 시간 이후 공동현관이 잠기거나 방문객 엘리베이터가 별도로 운영되므로, 심야 이용 시 출입 방식을 미리 확인하는 것이 좋습니다.</p>
    <h2>주차 안내</h2>
    <p>오피스텔은 방문 차량 주차가 제한되거나 유료인 경우가 많습니다. 방문 등록 방법과 주차 가능 여부를 함께 확인하면 이동이 원활합니다. 상권 인접 오피스텔은 방문 시간대에 주차가 혼잡할 수 있습니다.</p>
    <h2>운영 기준</h2>
    <p>최소 정보만 확인하며 <a href="/gyeonggi-north/check/privacy/">개인정보 처리방침</a>을 따릅니다. 불법·선정적 서비스는 <a href="/gyeonggi-north/check/service-policy/">제공하지 않습니다</a>.</p>
  `,
  checklist: ["공동현관 비밀번호 또는 호출 방식을 확인했나요?", "방문객 엘리베이터 사용법을 확인했나요?", "심야 출입 제한이 있는지 확인했나요?", "방문 차량 주차 방법을 확인했나요?"],
  related: [["아파트 단지 이용", "/gyeonggi-north/use/apartment/"], ["역세권 이용", "/gyeonggi-north/use/station-area/"], ["건물 출입 방식", "/gyeonggi-north/check/building-access/"], ["요금 안내", "/gyeonggi-north/pricing/"]],
  faqs: [
    { q: "오피스텔은 무엇을 확인하나요?", a: "공동현관, 방문객 엘리베이터, 관리 규정, 방문 가능 시간대를 확인합니다." },
    { q: "심야에도 이용 가능한가요?", a: "일부 오피스텔은 특정 시간 이후 공동현관이 잠기므로 출입 방식과 예약 가능 시간을 함께 확인합니다." },
  ],
  whw: { who: "오피스텔 방문 예약을 상담하는 간다GO 예약 안내팀입니다.", how: "주상복합 출입·엘리베이터·주차 기준을 구분해 안내합니다.", why: "오피스텔은 아파트와 출입 방식이 달라 확인이 필요하기 때문입니다." },
});

// 4. 아파트 단지 이용
const uApartment = use({
  path: "/gyeonggi-north/use/apartment/", crumb: "아파트 단지 이용", eyebrow: "이용 장소 · 아파트",
  title: "아파트 출장마사지 이용 안내 - 간다GO 경기북부",
  description: "아파트 단지 출장마사지 이용 안내. 공동현관·방문 차량 등록·주차 동선 안내.",
  h1: "아파트 단지 이용 안내", alt: "아파트 단지 홈케어 준비 이미지",
  lead: "대단지가 많은 경기북부 신도시에서 가장 많이 이용되는 장소입니다. 공동현관과 주차 확인이 중요합니다.",
  article: `
    <h2>아파트 단지 이용 특징</h2>
    <p>다산·별내·옥정·운정 등 경기북부 신도시는 대규모 아파트 단지가 많아 방문 이용이 활발합니다. 단지가 넓을수록 같은 단지라도 정문·후문에 따라 진입로와 주차 위치가 크게 달라, 정확한 위치 안내가 이동 시간을 좌우합니다.</p>
    <h2>확인해야 할 것</h2>
    <p>공동현관 출입 방법(비밀번호·호출·카드), 동·호수, 가까운 출입구, 지하주차장 방문 등록 방법을 확인합니다. 최근 신축 단지는 지상 차량 통제가 있어 지하주차장으로만 진입하는 경우가 많으므로 방문 차량 등록 절차를 함께 확인하는 것이 좋습니다.</p>
    <h2>신축 단지 주의</h2>
    <p>입주 초기 단지는 공동현관 인증 방식과 주차 등록 절차가 자주 바뀝니다. 예약 시 최신 출입 방법을 다시 확인하면 대기 없이 방문할 수 있습니다. 자세한 확인은 <a href="/gyeonggi-north/check/apartment-access/">아파트 공동현관 확인</a>을 참고하세요.</p>
    <h2>운영 기준</h2>
    <p>최소 정보만 확인하며 <a href="/gyeonggi-north/check/privacy/">개인정보 처리방침</a>을 따릅니다. 불법·선정적 서비스는 <a href="/gyeonggi-north/check/service-policy/">제공하지 않습니다</a>.</p>
  `,
  checklist: ["공동현관 출입 방법을 확인했나요?", "동·호수와 가까운 출입구를 확인했나요?", "지하주차장 방문 등록 방법을 확인했나요?", "지상 차량 통제 여부를 확인했나요?"],
  related: [["신도시 생활권 이용", "/gyeonggi-north/use/newtown/"], ["아파트 공동현관 확인", "/gyeonggi-north/check/apartment-access/"], ["오피스텔 이용", "/gyeonggi-north/use/officetel/"], ["요금 안내", "/gyeonggi-north/pricing/"]],
  faqs: [
    { q: "대단지는 무엇을 확인하나요?", a: "동·호수, 가까운 출입구, 공동현관 방식, 지하주차장 방문 등록 방법을 확인합니다." },
    { q: "신축 단지는 왜 다시 확인하나요?", a: "입주 초기에는 출입·주차 등록 방식이 자주 바뀌어 예약 시 최신 방법을 확인합니다." },
  ],
  whw: { who: "아파트 단지 방문 예약을 상담하는 간다GO 예약 안내팀입니다.", how: "단지 규모·연식별 출입·주차 기준을 구분해 안내합니다.", why: "대단지는 위치·출입 확인이 이동 시간을 좌우하기 때문입니다." },
});

// 5. 신도시 생활권 이용
const uNewtown = use({
  path: "/gyeonggi-north/use/newtown/", crumb: "신도시 생활권 이용", eyebrow: "이용 장소 · 신도시",
  title: "신도시 출장마사지 이용 안내 - 간다GO 경기북부",
  description: "신도시 출장마사지 이용 안내. 일산·운정·다산·옥정 신도시 출입·주차 안내.",
  h1: "신도시 생활권 이용 안내", alt: "경기북부 신도시 생활권 이미지",
  lead: "경기북부는 산업단지보다 신도시·택지지구 이용이 많습니다. 신도시 특유의 확인 항목을 안내합니다.",
  article: `
    <h2>경기북부는 신도시 이용이 중심입니다</h2>
    <p>일산·운정·다산·별내·옥정·삼송 등 경기북부는 신도시·택지지구가 생활권의 중심입니다. 신도시는 대규모 아파트와 오피스텔, 상권이 함께 조성되어 있어, 단지 규모와 광역교통, 공동현관 방식을 함께 확인하는 것이 중요합니다.</p>
    <h2>신도시 확인 항목</h2>
    <p>넓은 단지에서는 동·호수와 가까운 출입구, 지하주차장 방문 등록이 이동의 핵심입니다. 상권 인접 주상복합은 방문객 엘리베이터가 별도로 운영되기도 합니다. 광역버스·전철 역세권은 방문 시간대 교통 혼잡을 함께 고려하면 좋습니다.</p>
    <h2>주요 신도시</h2>
    <p>고양 <a href="/gyeonggi-north/goyang-si/">일산신도시</a>, 파주 <a href="/gyeonggi-north/paju-si/">운정신도시</a>, 남양주 <a href="/gyeonggi-north/namyangju-si/">다산·별내</a>, 양주 <a href="/gyeonggi-north/yangju-si/">옥정신도시</a>는 각각 생활권 성격이 다릅니다. 도시별 안내에서 세부 기준을 확인하세요.</p>
    <h2>운영 기준</h2>
    <p>최소 정보만 확인하며 <a href="/gyeonggi-north/check/privacy/">개인정보 처리방침</a>을 따릅니다. 불법·선정적 서비스는 <a href="/gyeonggi-north/check/service-policy/">제공하지 않습니다</a>.</p>
  `,
  checklist: ["어느 신도시·단지인지 확인했나요?", "동·호수와 가까운 출입구를 확인했나요?", "지하주차장 방문 등록 방법을 확인했나요?", "역세권 교통 혼잡 시간대를 고려했나요?"],
  related: [["아파트 단지 이용", "/gyeonggi-north/use/apartment/"], ["역세권 이용", "/gyeonggi-north/use/station-area/"], ["고양시", "/gyeonggi-north/goyang-si/"], ["요금 안내", "/gyeonggi-north/pricing/"]],
  faqs: [
    { q: "신도시는 무엇을 확인하나요?", a: "단지 규모, 동·호수, 가까운 출입구, 지하주차장 방문 등록, 광역교통 혼잡 시간대를 확인합니다." },
    { q: "신도시마다 기준이 다른가요?", a: "일산·운정·다산·옥정은 생활권 성격이 달라 도시별 안내에서 세부 기준을 확인합니다." },
  ],
  whw: { who: "신도시 생활권 예약을 상담하는 간다GO 예약 안내팀입니다.", how: "신도시별 단지·교통·출입 기준을 구분해 안내합니다.", why: "경기북부는 신도시 이용이 중심이라 특유의 확인 항목이 있기 때문입니다." },
});

// 6. 펜션·독채 숙소 이용
const uPension = use({
  path: "/gyeonggi-north/use/pension-private-stay/", crumb: "펜션·독채 숙소 이용", eyebrow: "이용 장소 · 펜션·독채",
  title: "펜션·독채 숙소 출장마사지 이용 안내 - 간다GO",
  description: "펜션·독채 숙소 출장마사지 이용 안내. 가평·포천 진입로·주차·야간 출입 안내.",
  h1: "펜션·독채 숙소 이용 안내", alt: "가평 포천 펜션 숙소 외관 이미지",
  lead: "가평·청평·포천 등 관광권의 펜션·독채 숙소는 위치와 진입로 확인이 특히 중요합니다.",
  article: `
    <h2>펜션·독채 숙소 이용 특징</h2>
    <p>가평·청평·설악·포천 외곽의 펜션·독채·풀빌라 숙소는 관광·모임 수요와 함께 방문 이용이 많은 장소입니다. 계곡·산지에 위치한 곳이 많아 도심과 달리 정확한 위치와 진입로 확인이 이동의 핵심입니다.</p>
    <h2>반드시 확인할 것</h2>
    <p>숙소명, 정확한 주소(지번·도로명), 주차 가능 여부, 야간 출입 방식, 진입로 상태를 확인합니다. 같은 펜션 단지 안에서도 동·객실에 따라 진입로가 다르고, 야간에는 조명이 부족해 위치 확인이 어려운 경우가 있어 인근 지형 지물을 함께 알려주시면 좋습니다.</p>
    <h2>외곽 이동 기준</h2>
    <p>외곽·장거리 구간은 이동 시간이 길어 예약 가능 시간이 조정될 수 있습니다. <a href="/gyeonggi-north/check/travel-fee/">외곽 이동비 기준</a>과 <a href="/gyeonggi-north/check/pension-policy/">펜션·독채 숙소 확인</a>을 함께 참고하세요.</p>
    <h2>운영 기준</h2>
    <p>최소 정보만 확인하며 <a href="/gyeonggi-north/check/privacy/">개인정보 처리방침</a>을 따릅니다. 불법·선정적 서비스는 <a href="/gyeonggi-north/check/service-policy/">제공하지 않습니다</a>.</p>
  `,
  checklist: ["숙소명과 정확한 주소를 확인했나요?", "주차 가능 여부와 위치를 확인했나요?", "야간 출입 방식과 진입로를 확인했나요?", "외곽 이동 기준과 예약 가능 시간을 확인했나요?"],
  related: [["관광지 인접 숙소", "/gyeonggi-north/use/tour-accommodation/"], ["펜션·독채 숙소 확인", "/gyeonggi-north/check/pension-policy/"], ["가평군", "/gyeonggi-north/gapyeong-gun/"], ["외곽 이동비 기준", "/gyeonggi-north/check/travel-fee/"]],
  faqs: [
    { q: "펜션도 방문 가능한가요?", a: "정확한 주소, 주차, 야간 출입 방식, 진입로와 외곽 이동 기준을 먼저 확인하면 됩니다." },
    { q: "야간 펜션 이용은 어떤가요?", a: "야간은 조명이 부족해 위치 확인이 중요하며, 외곽·장거리는 예약 가능 시간이 조정될 수 있습니다." },
  ],
  whw: { who: "펜션·독채 숙소 예약을 상담하는 간다GO 예약 안내팀입니다.", how: "관광권 숙소의 위치·진입로·이동 기준을 구분해 안내합니다.", why: "외곽 펜션은 위치와 진입로 확인이 이동의 핵심이기 때문입니다." },
});

// 7. 역세권 이용
const uStation = use({
  path: "/gyeonggi-north/use/station-area/", crumb: "역세권 이용", eyebrow: "이용 장소 · 역세권",
  title: "역세권 출장마사지 이용 안내 - 간다GO 경기북부",
  description: "역세권 출장마사지 이용 안내. 의정부역·구리역·운정역 인근 건물 출입 안내.",
  h1: "역세권 이용 안내", alt: "경기북부 역세권 생활권 이미지",
  lead: "의정부역·구리역·운정역 등 역세권은 상권과 오피스텔이 밀집해 접근이 편리한 생활권입니다.",
  article: `
    <h2>역세권 이용 특징</h2>
    <p>의정부역·구리역·운정역·대화역 등 경기북부 주요 역세권은 상권과 오피스텔, 주상복합이 밀집해 접근이 편리합니다. 다만 상권 인접 건물은 방문 시간대에 사람과 차량이 몰려 출입·주차 확인이 필요합니다.</p>
    <h2>확인해야 할 것</h2>
    <p>건물 공동현관 출입 방식, 방문객 엘리베이터, 저층 상가 통과 동선, 방문 가능 시간대를 확인합니다. 역세권은 주차가 제한되거나 유료인 곳이 많아 방문 차량 주차 방법을 함께 확인하면 좋습니다. 출구별 페이지는 만들지 않으며 방문 주소 기준으로만 안내합니다.</p>
    <h2>지역 참고</h2>
    <p>의정부역·중앙로, 구리역·인창, 운정·야당 등은 생활권 성격이 다릅니다. <a href="/gyeonggi-north/uijeongbu-si/">의정부시</a>, <a href="/gyeonggi-north/guri-si/">구리시</a>, <a href="/gyeonggi-north/paju-si/">파주시</a> 안내에서 세부 기준을 확인하세요.</p>
    <h2>운영 기준</h2>
    <p>최소 정보만 확인하며 <a href="/gyeonggi-north/check/privacy/">개인정보 처리방침</a>을 따릅니다. 불법·선정적 서비스는 <a href="/gyeonggi-north/check/service-policy/">제공하지 않습니다</a>.</p>
  `,
  checklist: ["건물 공동현관 출입 방식을 확인했나요?", "방문객 엘리베이터·상가 동선을 확인했나요?", "방문 차량 주차 방법을 확인했나요?", "방문 시간대 혼잡을 고려했나요?"],
  related: [["오피스텔 이용", "/gyeonggi-north/use/officetel/"], ["의정부시", "/gyeonggi-north/uijeongbu-si/"], ["건물 출입 방식", "/gyeonggi-north/check/building-access/"], ["요금 안내", "/gyeonggi-north/pricing/"]],
  faqs: [
    { q: "역세권은 무엇을 확인하나요?", a: "공동현관 출입 방식, 방문객 엘리베이터, 상가 동선, 주차 방법, 방문 시간대 혼잡을 확인합니다." },
    { q: "출구별로 안내되나요?", a: "출구별 페이지는 만들지 않으며 방문 주소를 기준으로 안내합니다." },
  ],
  whw: { who: "역세권 방문 예약을 상담하는 간다GO 예약 안내팀입니다.", how: "역세권 건물의 출입·주차·혼잡 기준을 구분해 안내합니다.", why: "상권 밀집 역세권은 출입·주차 확인이 필요하기 때문입니다." },
});

// 8. 관광지 인접 숙소 이용
const uTour = use({
  path: "/gyeonggi-north/use/tour-accommodation/", crumb: "관광지 인접 숙소 이용", eyebrow: "이용 장소 · 관광 숙소",
  title: "관광지 인접 숙소 출장마사지 이용 안내 - 간다GO",
  description: "관광지 인접 숙소 출장마사지 이용 안내. 가평·헤이리·청평 숙소 위치 확인 안내.",
  h1: "관광지 인접 숙소 이용 안내", alt: "관광지 인접 숙소 이미지",
  lead: "가평·청평·헤이리 등 관광지 인근 숙소에서도 이용할 수 있습니다. 위치와 진입 방식 확인이 중요합니다.",
  article: `
    <h2>관광지 인접 숙소 이용 특징</h2>
    <p>가평·청평·자라섬, 파주 헤이리·탄현, 포천 관광권 인근의 리조트·펜션·게스트하우스에서도 방문 이용이 가능합니다. 여행·모임 중 이동 없이 컨디션을 정리할 수 있어 편리하지만, 관광지 특성상 성수기 교통 혼잡과 숙소 위치 확인이 중요합니다.</p>
    <h2>확인해야 할 것</h2>
    <p>숙소명과 정확한 주소, 객실·동 위치, 프런트 통과 여부, 주차와 진입로를 확인합니다. 리조트는 <a href="/gyeonggi-north/use/hotel/">호텔·숙소 이용</a>, 독채·펜션은 <a href="/gyeonggi-north/use/pension-private-stay/">펜션·독채 숙소 이용</a> 기준을 함께 확인하면 좋습니다.</p>
    <h2>성수기·야간 참고</h2>
    <p>주말·성수기에는 관광지 진입 도로가 혼잡해 이동 시간이 늘어날 수 있고, 야간에는 외곽 조명이 부족해 위치 확인이 필요합니다. 외곽·장거리는 예약 가능 시간이 조정될 수 있습니다.</p>
    <h2>운영 기준</h2>
    <p>최소 정보만 확인하며 <a href="/gyeonggi-north/check/privacy/">개인정보 처리방침</a>을 따릅니다. 불법·선정적 서비스는 <a href="/gyeonggi-north/check/service-policy/">제공하지 않습니다</a>.</p>
  `,
  checklist: ["숙소명과 정확한 주소를 확인했나요?", "객실·동 위치와 프런트 통과 여부를 확인했나요?", "주차와 진입로를 확인했나요?", "성수기·야간 이동 시간을 고려했나요?"],
  related: [["펜션·독채 숙소 이용", "/gyeonggi-north/use/pension-private-stay/"], ["호텔·숙소 이용", "/gyeonggi-north/use/hotel/"], ["가평군", "/gyeonggi-north/gapyeong-gun/"], ["요금 안내", "/gyeonggi-north/pricing/"]],
  faqs: [
    { q: "관광지 숙소도 가능한가요?", a: "숙소명과 정확한 주소, 위치, 주차, 진입로를 확인하면 됩니다. 리조트·펜션 기준을 함께 참고하세요." },
    { q: "성수기에는 어떤가요?", a: "관광지 진입 혼잡으로 이동 시간이 늘 수 있어 예약 가능 시간을 미리 조율합니다." },
  ],
  whw: { who: "관광 숙소 방문 예약을 상담하는 간다GO 예약 안내팀입니다.", how: "관광권 숙소의 위치·진입·성수기 기준을 구분해 안내합니다.", why: "관광지 인접 숙소는 위치와 혼잡 확인이 중요하기 때문입니다." },
});

// 9. 야간 예약
const uNight = use({
  path: "/gyeonggi-north/use/night/", crumb: "야간 예약", eyebrow: "이용 장소 · 야간",
  title: "야간 출장마사지 예약 안내 - 간다GO 경기북부",
  description: "야간 출장마사지 예약 안내. 심야 공동현관·야간 출입·외곽 이동 기준 안내.",
  h1: "야간 예약 안내", alt: "야간 홈케어 예약 이미지",
  lead: "늦은 시간 퇴근 후나 아이를 재운 뒤 이용하는 야간 예약은 출입 방식 확인이 특히 중요합니다.",
  article: `
    <h2>야간 예약 특징</h2>
    <p>야근 후, 육아 후 등 늦은 시간대 이용 수요가 꾸준합니다. 야간은 몸의 긴장을 풀고 다음 날 컨디션을 정리하기에 좋지만, 건물·숙소의 심야 출입 방식과 외곽 이동 기준을 미리 확인해야 원활합니다.</p>
    <h2>야간에 확인할 것</h2>
    <p>오피스텔·아파트는 특정 시간 이후 공동현관이 잠기거나 방문객 엘리베이터가 제한되는 경우가 있어 심야 출입 방식을 확인합니다. 펜션·독채 숙소는 야간 조명 부족으로 위치 확인이 어려워 진입로와 인근 지형 지물을 함께 알려주시면 좋습니다.</p>
    <h2>외곽·장거리 참고</h2>
    <p>포천·가평·연천 등 외곽·접경 지역은 야간에 예약 가능 시간이 조정될 수 있습니다. <a href="/gyeonggi-north/use/outer-area/">외곽 지역 이용</a>과 <a href="/gyeonggi-north/check/time/">예약 가능 시간</a>을 함께 확인하세요.</p>
    <h2>운영 기준</h2>
    <p>최소 정보만 확인하며 <a href="/gyeonggi-north/check/privacy/">개인정보 처리방침</a>을 따릅니다. 불법·선정적 서비스는 <a href="/gyeonggi-north/check/service-policy/">제공하지 않습니다</a>.</p>
  `,
  checklist: ["건물 심야 공동현관 출입 방식을 확인했나요?", "야간 방문객 엘리베이터 제한을 확인했나요?", "펜션·외곽은 진입로·조명을 확인했나요?", "야간 예약 가능 시간을 확인했나요?"],
  related: [["외곽 지역 이용", "/gyeonggi-north/use/outer-area/"], ["예약 가능 시간", "/gyeonggi-north/check/time/"], ["오피스텔 이용", "/gyeonggi-north/use/officetel/"], ["요금 안내", "/gyeonggi-north/pricing/"]],
  faqs: [
    { q: "야간에도 예약되나요?", a: "지역과 건물 출입 방식에 따라 다르며 심야 출입 방식과 예약 가능 시간을 먼저 확인합니다." },
    { q: "외곽 야간도 가능한가요?", a: "외곽·접경 지역은 야간 예약 가능 시간이 조정될 수 있어 사전 확인이 필요합니다." },
  ],
  whw: { who: "야간 예약을 상담하는 간다GO 예약 안내팀입니다.", how: "심야 출입·외곽 이동 기준을 구분해 안내합니다.", why: "야간은 출입 방식과 이동 기준 확인이 특히 중요하기 때문입니다." },
});

// 10. 외곽 지역 이용
const uOuter = use({
  path: "/gyeonggi-north/use/outer-area/", crumb: "외곽 지역 이용", eyebrow: "이용 장소 · 외곽",
  title: "외곽 지역 출장마사지 이용 안내 - 간다GO 경기북부",
  description: "외곽 지역 출장마사지 이용 안내. 포천·연천·가평 외곽 장거리 이동 기준 안내.",
  h1: "외곽 지역 이용 안내", alt: "경기북부 외곽 지역 이미지",
  lead: "포천·연천·가평·파주 북부 등 외곽·접경 지역은 장거리 이동과 예약 가능 시간 확인이 핵심입니다.",
  article: `
    <h2>외곽 지역 이용 특징</h2>
    <p>포천·연천·가평·동두천 북부, 파주 문산·탄현 등 외곽·접경 지역은 도심과 달리 이동 거리가 길고 대중교통이 제한적입니다. 대부분 차량 이동이 기본이며, 접경 특성상 예약 가능 시간이 지역에 따라 달라질 수 있습니다.</p>
    <h2>외곽에서 확인할 것</h2>
    <p>정확한 상세 주소와 진입로, 주차 공간, 야간 조명 여부를 먼저 확인합니다. 단독·전원주택이나 펜션은 도로명 주소만으로 위치를 찾기 어려운 경우가 있어 인근 지형 지물을 함께 알려주시면 이동이 정확합니다.</p>
    <h2>이동 기준·시간</h2>
    <p>장거리 구간은 이동 시간이 길어 예약 가능 시간이 조정될 수 있습니다. <a href="/gyeonggi-north/check/travel-fee/">외곽 이동비 기준</a>과 <a href="/gyeonggi-north/check/time/">예약 가능 시간</a>을 함께 확인하세요. 접경 지역 세부는 <a href="/gyeonggi-north/yeoncheon-gun/">연천군</a>, <a href="/gyeonggi-north/pocheon-si/">포천시</a> 안내를 참고하세요.</p>
    <h2>운영 기준</h2>
    <p>방문 기준이 명확하지 않은 외곽 지역은 사전 확인 후에만 안내가 가능합니다. <a href="/gyeonggi-north/check/privacy/">개인정보 처리방침</a>을 따르며 불법·선정적 서비스는 <a href="/gyeonggi-north/check/service-policy/">제공하지 않습니다</a>.</p>
  `,
  checklist: ["정확한 상세 주소와 진입로를 확인했나요?", "주차 공간과 야간 조명을 확인했나요?", "외곽 이동 기준과 이동 시간을 확인했나요?", "접경 지역 예약 가능 시간을 확인했나요?"],
  related: [["펜션·독채 숙소 이용", "/gyeonggi-north/use/pension-private-stay/"], ["외곽 이동비 기준", "/gyeonggi-north/check/travel-fee/"], ["포천시", "/gyeonggi-north/pocheon-si/"], ["연천군", "/gyeonggi-north/yeoncheon-gun/"]],
  faqs: [
    { q: "외곽·접경 지역도 가능한가요?", a: "정확한 주소와 진입로, 이동 기준, 예약 가능 시간을 먼저 확인하면 안내가 가능합니다." },
    { q: "외곽은 왜 사전 확인이 필요한가요?", a: "장거리 이동과 접경 특성으로 예약 가능 시간이 달라질 수 있기 때문입니다." },
  ],
  whw: { who: "외곽·접경 지역 예약을 상담하는 간다GO 예약 안내팀입니다.", how: "외곽 주소·진입로·이동 기준을 구분해 안내합니다.", why: "외곽은 장거리 이동과 예약 가능 시간 확인이 핵심이기 때문입니다." },
});

// --- 이용 장소 허브 -----------------------------------------------------
const USE_PAGES = [uHome, uHotel, uOfficetel, uApartment, uNewtown, uPension, uStation, uTour, uNight, uOuter];
const hubCards = [
  ["자택 이용", "/gyeonggi-north/use/home/"], ["호텔·숙소 이용", "/gyeonggi-north/use/hotel/"],
  ["오피스텔 이용", "/gyeonggi-north/use/officetel/"], ["아파트 단지 이용", "/gyeonggi-north/use/apartment/"],
  ["신도시 생활권 이용", "/gyeonggi-north/use/newtown/"], ["펜션·독채 숙소 이용", "/gyeonggi-north/use/pension-private-stay/"],
  ["역세권 이용", "/gyeonggi-north/use/station-area/"], ["관광지 인접 숙소", "/gyeonggi-north/use/tour-accommodation/"],
  ["야간 예약", "/gyeonggi-north/use/night/"], ["외곽 지역 이용", "/gyeonggi-north/use/outer-area/"],
];
const hub = {
  path: "/gyeonggi-north/use/",
  title: "이용 장소 안내｜자택·호텔·오피스텔·펜션 - 간다GO",
  description: "경기북부 출장마사지 이용 장소 안내. 자택·호텔·오피스텔·아파트·펜션 기준.",
  crumbs: [home, HUB],
  body: `
  <section class="section section--tight">
    <div class="wrap">
      <span class="eyebrow">이용 안내 · 이용 장소</span>
      <h1 style="font-size:var(--fs-hero)">이용 장소별 안내</h1>
      <p class="lead" style="max-width:64ch;color:var(--text-muted)">자택·호텔·오피스텔·아파트·신도시·펜션 등 장소마다 확인 항목이 다릅니다. 이용하실 장소를 선택해 세부 기준을 확인하세요.</p>
    </div>
  </section>
  <section class="section section--tight">
    <div class="wrap"><div class="grid grid--3">${hubCards.map(([t, h]) => `<a class="card card--link" href="${h}"><h3 style="font-size:1.05rem">${t}</h3></a>`).join("")}</div></div>
  </section>
  ${faqBlock([
    { q: "장소마다 확인 항목이 다른가요?", a: "네. 오피스텔은 공동현관·엘리베이터, 아파트는 방문 차량 등록, 펜션은 진입로·야간 출입처럼 장소별로 다릅니다." },
    { q: "어디를 먼저 봐야 하나요?", a: "이용하실 장소 유형을 선택하면 해당 확인 기준과 체크리스트를 안내합니다." },
  ])}
  ${whwBlock({ who: "이용 장소별 기준을 정리하는 간다GO 예약 안내팀입니다.", how: "자택·숙소·오피스텔·펜션 등 장소별 확인 항목을 구분해 안내합니다.", why: "장소마다 출입·주차·이동 기준이 달라 미리 확인해야 하기 때문입니다." })}
  `,
};

export default [hub, ...USE_PAGES];
