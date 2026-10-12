---
title: "Write a reusable AI skill file"
description: "Package a repeatable task into instructions an agent can load on demand."
kind: template
tags: ["skills", "agents", "automation"]
variables: ["task_description", "skill_name"]
source: https://commandvault.ai/commands/write-a-reusable-ai-skill-file-8b9711c7
license: CC-BY-4.0
---

Create a SKILL.md for this repeatable task: {{task_description}}

Format:
---
name: {{skill_name}}
description: One sentence saying exactly when to use this skill.
---

Then:
1. Inputs the agent needs and where to find them.
2. Step-by-step procedure with exact commands or tool calls.
3. Checks that prove the task is done correctly.
4. Common mistakes and how to avoid them.
5. Example of a finished result.

Keep instructions imperative and specific. No filler.
