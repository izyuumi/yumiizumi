// Smoke checks over `dist/` after `astro build`.
import { readFileSync } from "node:fs";

const read = (path) => readFileSync(new URL(`../dist/${path}`, import.meta.url), "utf8");

const checks = [
  ["index.html", "<h1>Privacy and AI</h1>"],
  ["index.html", 'href="/ja"'],
  ["index.html", "/blog/how-i-think-about-privacy"],
  ["index.html", "/blog/ai-restaurant-reservation"],
  ["index.html", 'localStorage.getItem("theme")'],
  ["index.html", 'data-theme-option="system"'],
  ["ja/index.html", '<html lang="ja">'],
  ["ja/index.html", "プライバシーとAI"],
  ["about/index.html", "japanese national police agency"],
  ["about/index.html", "mailto:mail@yumi.to"],
  ["blog/index.html", "Yumi's Blog"],
  ["blog/how-i-think-about-privacy/index.html", "How I define privacy."],
  // featured post dates follow the page language
  ["index.html", "October 1, 2023"],
  ["ja/index.html", "2023年10月1日"],
  // old homepage fragments keep working
  ["index.html", 'location.replace("/about#"'],
  ["index.html", '<h2 id="writing">'],
  ["about/index.html", 'id="about"'],
  ["about/index.html", 'id="experience"'],
  ["about/index.html", 'id="contact"'],
];

const failures = checks.filter(([file, needle]) => !read(file).includes(needle));
for (const [file, needle] of failures) console.error(`missing in ${file}: ${needle}`);
console.log(`${checks.length - failures.length}/${checks.length} checks passed`);
process.exit(failures.length ? 1 : 0);
