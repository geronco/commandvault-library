---
title: "Claude Code custom slash command: /review"
description: "Save as .claude/commands/review.md to get a one-word, consistent code review in Claude Code."
kind: template
tags: ["claude-code", "slash-commands", "code-review"]
variables: ["project_checks"]
source: https://commandvault.ai/commands/claude-code-custom-slash-command-review-db7a5205
license: CC-BY-4.0
---

---
description: Review the current changes like a senior engineer
argument-hint: [optional focus, e.g. security or performance]
---

Review the uncommitted changes in this repository (run `git diff` and `git diff --staged`).

Focus: $ARGUMENTS (if empty, review everything).

Report only what's worth changing, grouped as:
1. **Bugs**: wrong behavior, crashes, races, security problems. Give file:line and a concrete failing scenario.
2. **Risky**: missing tests, unclear error handling, performance traps.
3. **Simplify**: code that can be removed or merged.

Skip style nitpicks unless they hide a bug. End with: ship / ship after fixes / don't ship.
Project-specific checks: {{project_checks}}
