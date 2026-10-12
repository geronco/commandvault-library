---
name: pr-description
description: Write a pull request title and description for the current branch. Use when the user asks to open a PR, describe a branch, or prepare changes for review.
---

# Pull request description

Gather: `git log --oneline main..HEAD` and `git diff main...HEAD --stat` (use the repo's default branch).

Write:
- **Title:** what the PR does, under 70 characters.
- **Why:** one or two sentences on the problem.
- **What changed:** short bullets grouped by area. Mention migrations, new env vars and config changes explicitly.
- **How to test:** numbered steps a reviewer can follow, with URLs or commands.
- **Risks:** what could break and how to roll back. Write "None known" only if you checked.
- **Screenshots:** a placeholder line if UI changed.

Keep it skimmable. Don't paste the diff. Flag anything you couldn't verify.
