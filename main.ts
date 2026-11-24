// one-liner-marathon: writes a single one-line comedy joke to /output/entry.txt.
// Node 22, node: stdlib only, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I bought a standing desk to fix my posture; now I slouch vertically, and my chiropractor calls it progress.";

// Count Unicode code points (not UTF-16 units, not bytes).
const codePoints = [...JOKE].length;

// Gate: 1-280 code points, one line, not only white space.
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`joke must be 1-280 code points, got ${codePoints}`);
}
if (JOKE.includes("\n") || JOKE.includes("\r")) {
  throw new Error("joke must be a single line");
}
if (JOKE.trim().length === 0) {
  throw new Error("joke must not be only white space");
}

// Write exactly the joke, no trailing newline: one line, smallest byte size.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");

console.log(`wrote /output/entry.txt (${codePoints} code points)`);
