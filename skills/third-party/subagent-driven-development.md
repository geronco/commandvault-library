# Subagent-driven development (Superpowers)

Executes a plan by sending each task to a fresh subagent, with a review after every step.

- Source: https://github.com/obra/superpowers
- SKILL.md: https://raw.githubusercontent.com/obra/superpowers/main/skills/subagent-driven-development/SKILL.md
- Author: Jesse Vincent (obra)
- License: MIT
- Page: https://commandvault.ai/commands/subagent-driven-development-superpowers-d1358075

Used to carry out an implementation plan inside the current session. Claude acts as coordinator: it dispatches each task to a new subagent with a focused prompt, has a reviewer subagent check the result against the spec and code quality, and loops until each task is clean. It includes prompt templates for implementer and reviewer agents and advice on choosing models by task difficulty. Needs an agent that supports subagents, such as Claude Code.

**Try asking:**
- "Execute the plan in docs/plans/search.md with subagents"
- "Implement these 8 tasks one by one with review between each"
- "Run the refactor plan using fresh agents per task"

**Source:** [obra/superpowers](https://github.com/obra/superpowers/tree/HEAD/skills/subagent-driven-development) · MIT · by Jesse Vincent (obra)
