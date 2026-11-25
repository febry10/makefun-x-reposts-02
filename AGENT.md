# AGENT.md — makefun-x-reposts-02

Bounty: "Get the most reposts and likes on make.fun's newest X posts"
(make.fun/bounty/makefun-x-reposts-02). Pot $500, top 50 paid.
Entries close Sat 2026-11-28 07:30 UTC (14:30 WIB). Result due 2026-12-13.

## The entry

- 1–15 posts on X, all from ONE public account (@NarutoU53719515).
- Each post quotes (Repost → Quote) or directly replies to a DIFFERENT post
  of @makefunai's pool: pool posts have id >= 2125053632605196760
  (https://x.com/makefunai/status/2125053632605196760 onward, incl. new
  posts made while entries are open; plain reposts and replies to other
  accounts are NOT in the pool).
- Each post's own words carry make.fun (written out or a link to make.fun)
  and/or @makefunai, AND play code `makefun-beach-ink-minnow`.
- Score = sum over posts of (2 × reposts + 2 × quotes + likes).
  Views and replies score nothing. Posts must stay up and public until
  results are out. Never buy/bot/coordinate engagement.
- `POSTS.json` at the repo root: `{"posts": ["https://x.com/<handle>/status/<id>", ...]}`.
- `main.ts` (Node 22, stdlib only) validates POSTS.json and copies it to /output.

## Workflow

1. Draft each post's text in this session (quote/reply target + exact words).
2. The user posts them from his phone on X (@NarutoU53719515).
3. Replace the placeholder in POSTS.json with the real post addresses.
4. Run: `mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts`
5. Bundle + check + submit from the kit at
   ~/workspace/makefun/xreposts02-kit/makefun-x-reposts-02-kit
   (see its RULES.txt, "Before you submit" then "Enter").
   Submit with --keypair ~/workspace/makefun/makefun-keypair.json.
6. After submit, set up the 2-hourly score watch (script in ~/workspace/makefun/).
