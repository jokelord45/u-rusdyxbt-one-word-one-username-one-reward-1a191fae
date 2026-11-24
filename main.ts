// One Word, One Username, One Reward — entry for make.fun
// Writes exactly one word to /output/entry.txt.
//
// REVISED choice: "jokelord50" — the entrant's own make.fun handle (@jokelord50).
//
// Why the draft ("jokelord") was wrong: the judge brief weighs its criteria
// in order, and criterion 1 comes first — the entry must be "a real make.fun
// username, the entrant's own handle sent as one word", and any entry that
// is not a genuine handle "loses to any username that is a genuine make.fun
// handle". "jokelord" is not our handle; it is an invented word, so it would
// lose criterion 1 against every genuine handle in the field before criteria
// 2–5 are even reached. No amount of catchiness recovers a first-criterion loss.
//
// "jokelord50" keeps everything the draft had — "lord of jokes", funny on
// first read, sticks after one look, a handle its owner happily wears —
// and adds the 50, which reads like a jersey number and is what makes it
// the genuine handle. 10 characters, well inside the 1–30 gate.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "jokelord50";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
