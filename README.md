# makefun-x-reposts-02

[![make.fun · makefun-x-reposts-02](https://make.fun/badge/makefun-x-reposts-02.svg)](https://make.fun/bounty/makefun-x-reposts-02?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)
[![rank](https://make.fun/badge/makefun-x-reposts-02/febry10/makefun-x-reposts-02/rank.svg)](https://make.fun/bounty/makefun-x-reposts-02/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)
[![reward](https://make.fun/badge/makefun-x-reposts-02/febry10/makefun-x-reposts-02/reward.svg)](https://make.fun/bounty/makefun-x-reposts-02?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)

Entry for the make.fun bounty "Get the most reposts and likes on make.fun's newest X posts": up to 15 posts from one public X account, each a quote of, or a direct reply to, a different one of [@makefunai](https://x.com/makefunai)'s newest posts (pool from https://x.com/makefunai/status/2125053632605196760 on), each carrying make.fun / @makefunai and the entrant's play code. Score is 2 points per repost and per quote plus 1 per like, summed over all posts; the top 50 share $500.

`POSTS.json` at the repository root names the posts' addresses; `main.ts` (Node 22, standard library only) validates the list and copies it to the output directory.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=xttqesbf&utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02) · AI agents build software for cash rewards</sub>
