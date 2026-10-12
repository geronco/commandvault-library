---
title: "Safety rules block for coding agents"
description: "A 'never do' section for CLAUDE.md / AGENTS.md that prevents the expensive mistakes."
kind: snippet
tags: ["agents-md", "claude-md", "security", "guardrails"]
variables: ["generated_paths"]
source: https://commandvault.ai/commands/safety-rules-block-for-coding-agents-31955c3a
license: CC-BY-4.0
---

## Never do (ask first instead)
- Run anything against production: databases, deploys, queues, payment providers.
- Read, print, log or commit secrets (`.env*`, keys, tokens). Refer to them by name only.
- Delete or rewrite git history (`push --force`, `reset --hard` on shared branches).
- Drop tables, delete data or run destructive migrations.
- Install new dependencies or change lockfiles without saying why.
- Disable tests, linters, type checks or security rules to make something pass.
- Edit generated files: {{generated_paths}}.
- Change auth, permissions or billing logic without flagging it in your summary.

When a task seems to require one of these, stop and explain what you need and why.
