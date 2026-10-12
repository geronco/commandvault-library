---
title: "Claude Code slash command: /commit"
description: "Save as .claude/commands/commit.md for clean, conventional commit messages from your staged changes."
kind: template
tags: ["claude-code", "slash-commands", "git"]
variables: ["commit_style"]
source: https://commandvault.ai/commands/claude-code-slash-command-commit-584b2474
license: CC-BY-4.0
---

---
description: Write a commit message for the staged changes and commit
argument-hint: [optional context]
allowed-tools: Bash(git diff:*), Bash(git status:*), Bash(git commit:*)
---

1. Run `git status` and `git diff --staged`. If nothing is staged, stop and tell me.
2. Write a commit message:
   - First line: {{commit_style}} format, imperative, under 72 characters (e.g. "fix: handle empty cart on checkout").
   - Blank line, then 1–3 short bullets on why, not what.
   - Extra context from me: $ARGUMENTS
3. Show me the message, then commit with it.
Never use --no-verify and never amend existing commits.
