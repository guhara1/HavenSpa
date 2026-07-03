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

// ---- sitemap.xml ---------------------------------------------------------
const urls = pages
  .filter((p) => !p.noindex)
  .map((p) => {
    const loc = SITE.base + (p.path === "/" ? "/" : p.path);
    return `  <url>\n    <loc>${loc}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${p.path === "/" ? "1.0" : "0.7"}</priority>\n  </url>`;
  })
  .join("\n");
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
await writeFile(join(ROOT, "sitemap.xml"), sitemap, "utf8");
console.log("✔ sitemap.xml");

// ---- robots.txt ----------------------------------------------------------
const robots = `User-agent: *\nAllow: /\n\nSitemap: ${SITE.base}/sitemap.xml\n`;
await writeFile(join(ROOT, "robots.txt"), robots, "utf8");
console.log("✔ robots.txt");

console.log(`\n완료: ${count}개 페이지 생성 (색인 ${indexed} · noindex ${noindexed}).`);
