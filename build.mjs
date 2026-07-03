// ==========================================================================
// 간다GO · Static site builder
//   node build.mjs  →  루트에 정적 HTML + sitemap.xml + robots.txt 생성
// ==========================================================================
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { renderPage } from "./src/render.mjs";
import { SITE } from "./src/config.mjs";
import indexPage from "./src/pages/index.mjs";
import areaPages from "./src/pages/areas.mjs";
import infoPages from "./src/pages/info.mjs";
import reviewsPage from "./src/pages/reviews.mjs";
import cityPages from "./src/pages/cities.mjs";
import districtPages from "./src/pages/districts.mjs";
import usePages from "./src/pages/use.mjs";
import checkPages from "./src/pages/check.mjs";
import lifePages from "./src/pages/life.mjs";
import dongPages from "./src/pages/dongs.mjs";
import dongPages2 from "./src/pages/dongs2.mjs";
import dongPages3 from "./src/pages/dongs3.mjs";
import tourPages from "./src/pages/usetour.mjs";
import newtownPages from "./src/pages/newtowns.mjs";
import stationPages from "./src/pages/stations.mjs";

const ROOT = dirname(fileURLToPath(import.meta.url));
const pages = [indexPage, ...areaPages, ...cityPages, ...districtPages, ...lifePages, ...dongPages, ...dongPages2, ...dongPages3, ...tourPages, ...newtownPages, ...stationPages, ...usePages, ...checkPages, ...infoPages, reviewsPage];

function outPath(routePath) {
  if (routePath === "/") return join(ROOT, "index.html");
  return join(ROOT, routePath.replace(/^\//, "").replace(/\/$/, ""), "index.html");
}

// 모든 페이지 색인(사용자 요청). page.noindex를 명시한 경우에만 noindex.
// 참고: 얇은 페이지는 noindex 대신 본문을 보강해 색인 가치를 확보한다.
function visibleLen(body = "") {
  return [...body.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim()].length;
}

let count = 0, indexed = 0, noindexed = 0;
for (const page of pages) {
  page.noindex ? noindexed++ : indexed++;
  const html = renderPage(page);
  const file = outPath(page.path);
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, html, "utf8");
  count++;
  console.log("✔", page.path, "→", file.replace(ROOT + "/", ""));
}

const indexedPages = pages.filter((p) => !p.noindex);
const today = new Date().toISOString().slice(0, 10);
const loc = (p) => SITE.base + (p.path === "/" ? "/" : p.path);
const priority = (p) => (p.path === "/" ? "1.0" : p.path.split("/").length <= 4 ? "0.8" : "0.6");

// ---- sitemap.xml (이미지 포함) -------------------------------------------
const urls = indexedPages
  .map((p) => {
    const img = SITE.base + (p.image || SITE.ogImage);
    return `  <url>\n    <loc>${loc(p)}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${priority(p)}</priority>\n    <image:image>\n      <image:loc>${img}</image:loc>\n    </image:image>\n  </url>`;
  })
  .join("\n");
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${urls}\n</urlset>\n`;
await writeFile(join(ROOT, "sitemap.xml"), sitemap, "utf8");
console.log("✔ sitemap.xml");

// ---- rss.xml (네이버·구글 빠른 수집용 피드) ------------------------------
const esc = (s = "") => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const rssItems = indexedPages
  .slice(0, 200)
  .map((p) => `    <item>\n      <title>${esc(p.title)}</title>\n      <link>${loc(p)}</link>\n      <guid isPermaLink="true">${loc(p)}</guid>\n      <description>${esc(p.description || "")}</description>\n    </item>`)
  .join("\n");
const rss = `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">\n  <channel>\n    <title>${SITE.name} · 경기북부 출장마사지·홈타이 지역 안내</title>\n    <link>${SITE.base}/</link>\n    <atom:link href="${SITE.base}/rss.xml" rel="self" type="application/rss+xml"/>\n    <description>경기북부 생활권·행정동·이용 안내</description>\n    <language>ko-KR</language>\n${rssItems}\n  </channel>\n</rss>\n`;
await writeFile(join(ROOT, "rss.xml"), rss, "utf8");
console.log("✔ rss.xml");

// ---- robots.txt (네이버·구글 전면 허용 + 사이트맵/피드) ------------------
const robots = [
  "User-agent: *",
  "Allow: /",
  "",
  "User-agent: Yeti",       // 네이버 검색로봇
  "Allow: /",
  "",
  "User-agent: Googlebot",
  "Allow: /",
  "",
  `Sitemap: ${SITE.base}/sitemap.xml`,
  `Sitemap: ${SITE.base}/rss.xml`,
  "",
].join("\n");
await writeFile(join(ROOT, "robots.txt"), robots, "utf8");
console.log("✔ robots.txt");

console.log(`\n완료: ${count}개 페이지 생성 (색인 ${indexed} · noindex ${noindexed}).`);
