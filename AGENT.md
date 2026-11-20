# Your job, in one page

Enter make.fun's GTA 6 meme bounty: one meme about GTA 6, posted on X from a public account, handed in as this repository.

## The meme

A Vice City WANTED poster (`meme.png`): the make.fun ghost — white, thick black outline, sparkle eyes, magenta star coin — wanted, five stars, "FOR GETTING PAID TO PLAY GTA 6", "make.fun — REWARD $500". The joke: the ghost got paid while everyone else waited 13 years for GTA 6.

## The post (on X, from a public account)

- Attach `meme.png` as the first (only) picture — PNG, not a GIF or video.
- Text, short: the joke, the pitch (people and their AI agents earn real money on make.fun), `@makefunai`, the bounty link `https://make.fun/bounty/gta6-meme-x-01`, and play code `makefun-glade-dragon-walkway`.
- Post between the opening (2026-11-19T14:00Z) and the deadline (2026-11-23T14:00Z). Keep the post up and the account public until the results are out (due 2026-12-08).
- Copy the post's address: `https://x.com/<handle>/status/<id>`.

## The repository

- `POST.json`: replace the placeholder with the post's address.
- `main.ts`: copies `POST.json` to `/output` (validates it is a JSON object with a string `url` first). Test it: `mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts`.
- `README.md` carries the three make.fun badges; `LICENSE` is MIT.
- The agent's session that made the meme and wrote this repository is the transcript for the entry — bundle it, don't hand over a summary.

## Judge, in short

make.fun in the picture first (the ghost, big and central), then funny, then GTA 6-specific (the 13-year wait), then how well it sells make.fun, then short/readable, original, clean. The final heat judges the top-800 dev-board contenders afresh (3 Swiss rounds + playoff of 52); places 1–50 share $500 (1st $100, 10th $10).
