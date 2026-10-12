---
title: "Claude Code slash command: /fix-issue"
description: "Save as .claude/commands/fix-issue.md: give it a GitHub issue number and it reproduces, fixes and tests."
kind: template
tags: ["claude-code", "slash-commands", "github", "debugging"]
variables: ["test_command"]
source: https://commandvault.ai/commands/claude-code-slash-command-fix-issue-2de5b0f5
license: CC-BY-4.0
---

---
description: Reproduce, fix and test a GitHub issue
argument-hint: <issue number>
allowed-tools: Bash(gh issue view:*), Bash({{test_command}}:*)
---

1. Read the issue: `gh issue view $ARGUMENTS`.
2. Reproduce it: write a failing test that shows the bug. Run it and confirm it fails.
3. Find the root cause. Explain it in two sentences before changing code.
4. Fix it with the smallest reasonable change.
5. Run `{{test_command}}`; the new test and the full suite must pass.
6. Summarize: cause, fix, test added, and anything you're unsure about. Don't push or open a PR unless I ask.
