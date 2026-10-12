---
title: "Code review as a senior engineer"
description: "A focused review that finds real bugs instead of nitpicks."
kind: prompt
tags: ["code-review", "agents", "quality"]
variables: ["stack", "diff"]
source: https://commandvault.ai/commands/code-review-as-a-senior-engineer-2c52c2a9
license: CC-BY-4.0
---

Review this diff as a senior engineer on a {{stack}} codebase:

{{diff}}

Report only things worth changing, grouped as:
- Bugs (wrong behavior, crashes, races, security) — include a failing scenario for each.
- Risky (missing tests, unclear error handling, performance traps).
- Simplifications that remove code.

Skip formatting and naming nitpicks unless they hide a bug. For each item give file:line, the problem in one sentence, and the fix. End with "ship / ship after fixes / don't ship".
