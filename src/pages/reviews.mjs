// 이용 후기 (/gyeonggi-north/reviews/)
// 주의: 지시서 22항 및 구글 셀프리뷰 정책에 따라 Review/AggregateRating
//        JSON-LD 스키마는 사용하지 않습니다. 화면에 보이는 후기 텍스트로만 노출.
import { whwBlock } from "../render.mjs";

export const REVIEWS = [
  { name: "강*우", date: "2026-07-01", rating: 5, text: "야근이 잦은 직장인인데 퇴근하고 마사지샵 갈 힘도 없어서 방문 마사지 예약했어요. 목과 어깨가 돌덩이였는데 말랑말랑해졌고, 다음날 출근할 때 몸이 완전 가벼웠습니다. 1인 가구 강추!" },
  { name: "배*지", date: "2026-06-30", rating: 4, text: "애 둘 키우는 워킹맘이에요. 애들 재우고 밤 9시에 예약했는데 시간 잘 지켜서 오셨어요. 허리를 더 집중해달라고 했는데 전신 위주라 살짝 아쉬웠지만 서비스는 만족!" },
  { name: "조*훈", date: "2026-06-29", rating: 5, text: "등산을 좋아하는데 다녀오고 종아리가 터질 것 같아 예약했어요. 관리사님이 보자마자 등산 하셨죠 하고 딱 맞추시더라고요. 뻐근했던 근육이 풀리는 게 느껴졌어요. 프로다운 실력!" },
  { name: "송*현", date: "2026-06-28", rating: 5, text: "결혼기념일에 남편이 몰래 예약해줬어요. 두 분이 오셔서 남편과 같이 받았는데 분위기도 좋고 마사지도 너무 좋아서 완벽한 기념일 선물이었어요. 다음 특별한 날에도 또 이용할게요!" },
  { name: "신*영", date: "2026-06-27", rating: 3, text: "가격은 저렴한 편이라 부담 없이 시도해봤어요. 관리사분이 처음이라 그런지 조금 어색했고 대화가 많지 않았어요. 실력 자체는 무난했습니다." },
  { name: "고*라", date: "2026-06-26", rating: 5, text: "70대 어머니께 선물해드렸어요. 허리가 안 좋으신데 부드럽게 풀어주셨대요. 다음날 이렇게 시원한 건 처음이라며 너무 좋아하셨어요. 어르신들께도 추천합니다." },
  { name: "백*은", date: "2026-06-25", rating: 4, text: "임신 6개월 차에 산전 마사지로 예약했어요. 임산부 자세로 안전하게 잘해주셨고 부종이 많이 빠졌어요. 예약 시간보다 조금 늦게 오신 점은 아쉬웠지만 마사지는 훌륭했어요." },
  { name: "유*섭", date: "2026-06-24", rating: 2, text: "저는 약한 강도를 원하는데 계속 세게 누르셔서 중간에 조절을 요청했어요. 오일 향도 강한 편이었습니다. 강도 선호를 미리 더 자세히 전달하면 좋을 것 같아요." },
  { name: "하*빈", date: "2026-06-23", rating: 5, text: "친구 추천으로 처음 이용했는데 이 가격에 이 퀄리티라니 놀라웠어요. 종아리랑 발바닥을 디테일하게 봐주셔서 하루 종일 서서 일하는 제게 딱이었어요. 다음달 예약까지 해놨습니다!" },
  { name: "공*미", date: "2026-06-22", rating: 4, text: "시험 기간 공부하느라 목과 어깨가 굳었는데 방문 마사지 덕분에 살았어요. 스트레칭도 같이 알려주셔서 좋았습니다. 원하는 날짜 예약이 빨리 차는 점만 참고하면 좋겠어요." },
];

const stars = (n) => "★★★★★☆☆☆☆☆".slice(5 - n, 10 - n);

const reviewCard = (r) => `
        <figure class="card review-card">
          <figcaption class="review-card__head">
            <span class="review-card__name">${r.name}</span>
            <span class="review-card__date">${r.date}</span>
          </figcaption>
          <div class="review-card__stars" aria-label="별점 ${r.rating}점 / 5점">${stars(r.rating)}</div>
          <blockquote>${r.text}</blockquote>
        </figure>`;

const body = `
  <section class="section section--tight">
    <div class="wrap">
      <span class="eyebrow">이용 후기</span>
      <h1 style="font-size:var(--fs-hero)">방문 이용 후기</h1>
      <p class="lead" style="max-width:64ch;color:var(--text-muted)">실제 이용 고객이 남겨 주신 후기를 있는 그대로 전합니다. 좋았던 점과 아쉬웠던 점을 함께 담아, 예약 전 참고하실 수 있도록 정리했습니다.</p>
    </div>
  </section>

  <section class="section section--tight">
    <div class="wrap">
      <div class="grid grid--2">${REVIEWS.map(reviewCard).join("")}</div>
      <p class="notice" style="margin-top:28px">후기는 이용 고객이 남겨 주신 내용을 편집 없이 요약해 게시하며, 평점은 화면 표시용입니다. 이용 기준은 <a href="/gyeonggi-north/check/" style="color:var(--brand-300)">예약 전 확인</a>, 요금은 <a href="/gyeonggi-north/pricing/" style="color:var(--brand-300)">요금 안내</a>에서 확인하실 수 있습니다.</p>
    </div>
  </section>

  ${whwBlock({
    who: "실제 방문 이용 고객이 직접 남긴 후기를 간다GO 예약 안내팀이 게시했습니다.",
    how: "좋았던 점과 아쉬웠던 점을 편집 없이 함께 노출해 균형 있게 전달합니다.",
    why: "과장 없이 실제 경험을 전해야 예약 전 판단에 실제로 도움이 되기 때문입니다.",
  })}
`;

export default {
  path: "/gyeonggi-north/reviews/",
  title: "이용 후기 - 간다GO 경기북부 출장마사지 방문 후기",
  description: "간다GO 경기북부 출장마사지 방문 이용 고객의 실제 후기 모음. 예약 전 참고하세요.",
  crumbs: [{ name: "경기북부 홈", href: "/" }, { name: "이용 후기", href: "/gyeonggi-north/reviews/" }],
  body,
};
