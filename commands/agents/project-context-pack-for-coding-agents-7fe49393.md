---
title: "Project context pack for coding agents"
description: "A reusable AGENTS.md that stops your AI agent from guessing."
kind: template
tags: ["agents", "context", "claude", "cursor"]
variables: ["project_description", "stack"]
source: https://commandvault.ai/commands/project-context-pack-for-coding-agents-7fe49393
license: CC-BY-4.0
---

Write an AGENTS.md for my project so coding agents work the way my team does.

Project: {{project_description}}
Stack: {{stack}}

Include sections:
- What this app is and who uses it (3 lines).
- How to run, test, lint and build (exact commands).
- Folder map: where things live and where new code goes.
- Conventions: naming, error handling, data fetching, styling.
- Never do: list of dangerous or banned actions (e.g. editing generated files, touching prod data).
- Definition of done for a change.

Keep it under 120 lines. Prefer concrete rules over advice.
