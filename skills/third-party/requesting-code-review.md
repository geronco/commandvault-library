# Requesting code review (Superpowers)

Sends finished work to a reviewer subagent that checks it against the plan and requirements.

- Source: https://github.com/obra/superpowers
- SKILL.md: https://raw.githubusercontent.com/obra/superpowers/main/skills/requesting-code-review/SKILL.md
- Author: Jesse Vincent (obra)
- License: MIT
- Page: https://commandvault.ai/commands/requesting-code-review-superpowers-5257970b

After a task or major feature, Claude packages the changes with what they were meant to do and dispatches a code-reviewer subagent using the included prompt. The review checks requirements, correctness and code quality, and Claude then fixes important issues before moving on or merging. It explains when a review is required and how to handle feedback you disagree with.

**Try asking:**
- "Get a code review on this branch before we merge"
- "Review what we just built against the spec"
- "Run a reviewer over the last three commits"

**Source:** [obra/superpowers](https://github.com/obra/superpowers/tree/HEAD/skills/requesting-code-review) · MIT · by Jesse Vincent (obra)
