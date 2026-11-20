// gta6-meme-x-01 entry (Node 22, standard library only).
//
// The entry is the X post itself: this program's only job is to carry
// POST.json — the address of the posted meme — from the repository root
// to /output/POST.json, where the gate reads it. The house then reads the
// post from X (its first picture and its text) and hands that to the judge.
// Nothing this program writes about the post is judged.
//
// The meme: a GTA "WANTED" poster starring make.fun's ghost mascot, wanted
// for getting paid to play GTA 6. The picture (meme.png, in this repo) was
// made by the agent in the session that wrote this file; the post goes out
// from a public X account with make.fun (a link or written out) and/or a tag
// of @makefunai and the account's play code in its text.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
//
// No network, no wall clock, no files outside the repository: the two runs
// of an entry write the same bytes.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

function loadPostFile(): { url: string } {
  const raw = readFileSync(join(BOT_DIR, 'POST.json'), 'utf8');
  const parsed: unknown = JSON.parse(raw);
  if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
    throw new Error('POST.json must be a JSON object');
  }
  const url = (parsed as Record<string, unknown>).url;
  if (typeof url !== 'string' || url.length === 0) {
    throw new Error('POST.json must carry a non-empty string "url"');
  }
  return { url };
}

try {
  const post = loadPostFile();
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(join(OUTPUT_DIR, 'POST.json'), JSON.stringify(post) + '\n', 'utf8');
} catch (err) {
  console.error(`POST.json could not be carried to ${OUTPUT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

