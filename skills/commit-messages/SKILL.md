---
name: commit-messages
description: Write a Conventional Commits message for the staged changes. Use when the user asks to commit, write a commit message, or describe staged changes.
---

# Commit messages

1. Run `git diff --staged`. If nothing is staged, say so and stop. Don't stage files yourself unless asked.
2. Pick one type: feat, fix, refactor, perf, docs, test, build, ci, chore. Add a scope when one area is touched: `fix(auth): …`.
3. Subject: imperative, under 72 characters, no full stop. Say what changes for the user or the code, not which files.
4. Body (skip for trivial changes): why the change was needed and anything surprising. Wrap at 72 characters.
5. Footer: `BREAKING CHANGE: …` when behaviour changes for callers; `Closes #123` when an issue is referenced.

If the diff mixes unrelated changes, suggest splitting it and list the groups instead of writing one message.

Never invent context you can't see in the diff.
