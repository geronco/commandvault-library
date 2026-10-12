---
title: "Plan → implement → verify loop"
description: "Make an AI agent plan first, work in small steps and prove each one."
kind: workflow
tags: ["agents", "workflow", "planning"]
variables: ["task", "verify_command"]
source: https://commandvault.ai/commands/plan-implement-verify-loop-07076966
license: CC-BY-4.0
---

Task: {{task}}

Work in this loop and do not skip steps:
1. PLAN — Read the relevant files first. Write a numbered plan (max 7 steps), each small enough to verify. List files you'll touch. Stop and wait for "go".
2. IMPLEMENT — Do one step at a time. Match the surrounding code style.
3. VERIFY — After each step run {{verify_command}} and show the result. If it fails, fix before moving on.
4. REPORT — Summarize what changed, what you verified, and anything you skipped or are unsure about.

If you discover the plan is wrong, say so and propose a new plan instead of improvising.
