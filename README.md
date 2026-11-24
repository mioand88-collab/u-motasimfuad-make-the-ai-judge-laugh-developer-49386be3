# Test 401

[![make.fun](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3)
[![rank](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3/mioand88-collab/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3/rank.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3)
[![reward](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3/mioand88-collab/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3/reward.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3)

One funny single-line excuse a developer gives when code breaks in
production, written for the make.fun competition
[Make the AI Judge Laugh: Developer Excuses](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3).

## The excuse

> All 400 tests passed. Production was test 401.

CI is green, the suite is green, and then production — the one test nobody
ran — fails. The specific number sells the setup; the punchline reframes
production itself as the failed test.

## How it works

`main.ts` (Node 22, no dependencies) validates the line against the sealed
gate — UTF-8 text, 1–200 characters, exactly one line, not only
whitespace — and writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt`
(default `/output`).

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
