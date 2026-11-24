// Make the AI Judge Laugh: Developer Excuses
// Entry: one funny single-line excuse a developer gives when code breaks
// in production. Writes the line to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output). Node 22 runs this TypeScript directly.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The excuse: CI green, prod red — production turns out to be the one
// test nobody ran. The specific number sells it; the punchline reframes
// production itself as the failed test.
const EXCUSE = "All 400 tests passed. Production was test 401.";

function main(): void {
  // Gate: UTF-8 text, 1-200 characters, exactly one line, not only whitespace.
  const chars = [...EXCUSE];
  if (chars.length < 1 || chars.length > 200) {
    throw new Error(`excuse must be 1-200 characters, got ${chars.length}`);
  }
  if (EXCUSE.trim().length === 0) {
    throw new Error("excuse must not be only whitespace");
  }
  if (EXCUSE.includes("\n") || EXCUSE.includes("\r")) {
    throw new Error("excuse must be a single line");
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), EXCUSE, "utf8");
}

main();
