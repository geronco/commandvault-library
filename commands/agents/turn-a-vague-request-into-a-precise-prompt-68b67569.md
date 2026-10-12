---
title: "Turn a vague request into a precise prompt"
description: "Rewrite any rough ask into a prompt with role, context, constraints and output format."
kind: prompt
tags: ["prompt-engineering", "meta"]
variables: ["rough_request"]
source: https://commandvault.ai/commands/turn-a-vague-request-into-a-precise-prompt-68b67569
license: CC-BY-4.0
---

Rewrite my rough request into a strong prompt for an AI model.

My rough request: {{rough_request}}

The rewritten prompt must include:
- Context: who it's for and why.
- The exact task, broken into steps if needed.
- Constraints (length, tone, things to avoid).
- Output format (headings, table, JSON schema...).
- One short example of a good answer if it helps.

Then list up to 3 questions whose answers would make the prompt better. Output the prompt in a code block.
