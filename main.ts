// makefun-x-reposts-02 — entry program.
//
// Copies POSTS.json (the list of this entrant's X posts for the bounty
// "Get the most reposts and likes on make.fun's newest X posts") from the
// repository into the output directory, after checking its shape.
//
// Standard library only: no network, no clock, no randomness. Two runs
// always write identical bytes.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

function fail(message: string): never {
  console.error(`x-reposts-02: ${message}`);
  process.exit(1);
}

const here = dirname(fileURLToPath(import.meta.url));
const botDir = process.env.MAKEFUN_BOT_DIR ?? here;
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const sourcePath = join(botDir, "POSTS.json");
const targetPath = join(outDir, "POSTS.json");

let raw: string;
try {
  raw = readFileSync(sourcePath, "utf8");
} catch {
  fail(`POSTS.json is missing (${sourcePath})`);
}

let parsed: unknown;
try {
  parsed = JSON.parse(raw);
} catch {
  fail("POSTS.json is not valid JSON");
}

if (
  typeof parsed !== "object" ||
  parsed === null ||
  !Array.isArray((parsed as { posts?: unknown }).posts)
) {
  fail('POSTS.json must be an object shaped {"posts": [...]}');
}
const posts = (parsed as { posts: unknown[] }).posts;
if (posts.length < 1 || posts.length > 15) {
  fail(`POSTS.json names ${posts.length} posts, expected 1 to 15`);
}
for (const entry of posts) {
  // A post's address as X shows it: /<handle>/status/<id>, the id digits
  // only; a query or fragment after it is read past.
  if (
    typeof entry !== "string" ||
    !/^https:\/\/(www\.|mobile\.)?(x|twitter)\.com\/[A-Za-z0-9_]+\/status\/\d+([/?#].*)?$/.test(entry)
  ) {
    fail(`not an X post address: ${String(entry)}`);
  }
}

mkdirSync(outDir, { recursive: true });
writeFileSync(targetPath, `${JSON.stringify({ posts }, null, 2)}\n`, "utf8");
console.log(`x-reposts-02: wrote ${posts.length} post(s) to ${targetPath}`);
