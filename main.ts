// The One-Line Laugh — entry program.
// Node 22, standard library only. Writes exactly one fresh one-liner
// (written by hand in this session) to /output/entry.txt.
// Deterministic: constant string, no random, no clock, no network.

import { mkdirSync, writeFileSync } from "node:fs";

// The line: a relatable everyday truth with a surprise twist at the end.
const LINE =
  "I muted my group chat for peace and quiet, and now I check it every five minutes in case they noticed.";

// Output location the grader reads.
const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// Create /output if needed, then write the single line exactly as-is:
// one sentence, one line, no trailing newline added.
mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, LINE, "utf8");
