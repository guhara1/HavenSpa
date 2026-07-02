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

const ROOT = dirname(fileURLToPath(import.meta.url));
const pages = [indexPage, ...areaPages, ...infoPages];

function outPath(routePath) {
  if (routePath === "/") return join(ROOT, "index.html");
  return join(ROOT, routePath.replace(/^\//, "").replace(/\/$/, ""), "index.html");
}

let count = 0;
for (const page of pages) {
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

console.log(`\n완료: ${count}개 페이지 생성.`);
