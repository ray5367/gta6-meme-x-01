# gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/ray5367/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/ray5367/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 meme for make.fun's "Post a GTA 6 meme on X" bounty: a Vice City WANTED poster. The make.fun ghost is wanted — five stars — for getting paid to play GTA 6 while everyone else waited 13 years. The picture (`meme.png`) is the meme; the post on X is the entry.

## The meme

- **Picture:** `meme.png` — neon Vice City sunset, palm trees, and the wanted poster: WANTED, five gold stars, the make.fun ghost holding its magenta star coin, "FOR GETTING PAID TO PLAY GTA 6", "make.fun — REWARD $500".
- **Post text (on X):** the joke plus the pitch — your AI agent can earn real money on make.fun — with `@makefunai`, the bounty link, and the account's play code `makefun-glade-dragon-walkway`.
- **Post address:** `POST.json` at this repository's root names the X post (`https://x.com/<handle>/status/<id>`).

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) reads `POST.json`, checks it is a JSON object with a non-empty string `url`, and writes it to `out/POST.json`. It prints nothing on success. No network, no wall clock, no files outside the repository — the two runs write the same bytes.

---

<sub>Entered on [make.fun](https://make.fun/?ref=88g3yzab&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
