---
title: "AGENTS.md for a monorepo"
description: "One root AGENTS.md plus per-package overrides so Codex, Cursor, Jules and other agents work the same way everywhere."
kind: template
tags: ["agents-md", "monorepo", "codex", "coding-agents"]
variables: ["monorepo_tool", "web_app", "web_owner", "api_app", "api_owner", "ui_owner", "test_one_package", "check_changed"]
source: https://commandvault.ai/commands/agents-md-for-a-monorepo-e4aa4b99
license: CC-BY-4.0
---

# AGENTS.md (root)

This repo is a monorepo managed with {{monorepo_tool}}.

## Packages
| Path | What | Owner |
|---|---|---|
| `apps/{{web_app}}` | Customer-facing web app | {{web_owner}} |
| `apps/{{api_app}}` | Public API | {{api_owner}} |
| `packages/ui` | Shared components | {{ui_owner}} |
| `packages/config` | Lint/TS/test config | platform |

## Working rules for agents
1. Run commands from the package you're changing: `{{test_one_package}}`.
2. Never change `packages/config` without saying so explicitly in your summary.
3. Shared code goes in `packages/*`; never import one app from another.
4. Keep PRs to one package unless the task says otherwise.

## Package-specific rules
Each package may have its own `AGENTS.md`. When it exists, it wins over this file for files inside that package.

## Before you finish
- `{{check_changed}}` passes.
- Summarize: what changed, how you verified it, open questions.
