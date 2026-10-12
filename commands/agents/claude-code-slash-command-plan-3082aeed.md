---
title: "Claude Code slash command: /plan"
description: "Save as .claude/commands/plan.md to make Claude investigate and plan before writing any code."
kind: template
tags: ["claude-code", "slash-commands", "planning"]
variables: ["project_notes"]
source: https://commandvault.ai/commands/claude-code-slash-command-plan-3082aeed
license: CC-BY-4.0
---

---
description: Investigate and write a step-by-step plan before coding
argument-hint: <what you want to build or fix>
---

Task: $ARGUMENTS

Do not edit any files yet.
1. Read the relevant code. List the files and functions involved.
2. Explain how it works today in 3–5 sentences.
3. Write a numbered plan (max 7 steps). Each step: what changes, in which file, and how you'll verify it.
4. List risks, open questions and anything you'd need from me.
Wait for my "go" before starting step 1. Project notes: {{project_notes}}
