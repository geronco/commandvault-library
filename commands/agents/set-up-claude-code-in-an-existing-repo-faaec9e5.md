---
title: "Set up Claude Code in an existing repo"
description: "A first-session prompt that has Claude Code explore your repo and create CLAUDE.md, commands and settings."
kind: prompt
tags: ["claude-code", "onboarding", "setup"]
variables: ["safe_commands"]
source: https://commandvault.ai/commands/set-up-claude-code-in-an-existing-repo-faaec9e5
license: CC-BY-4.0
---

This is our first session in this repo. Set yourself up properly before any feature work.

1. Explore: read the README, package/build files, CI config and the main folders. Run the test command once to see the current state.
2. Create `CLAUDE.md` with: project summary, exact commands, where things live, conventions, never-do list, definition of done. Only include what you verified.
3. Suggest 3 slash commands in `.claude/commands/` that would save time in this repo (e.g. /test-file, /review) and write them.
4. Suggest `.claude/settings.json` permissions: which commands are safe to always allow ({{safe_commands}}) and which should always ask.
5. Report: what you created, what you couldn't verify, and the 3 biggest risks you noticed in the codebase.
