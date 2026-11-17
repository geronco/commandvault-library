# Second opinion from Codex (peterkrueck)

Asks OpenAI's Codex CLI to independently check a plan, bug or design.

- Source: https://github.com/peterkrueck/Claude-Code-Development-Kit
- SKILL.md: https://raw.githubusercontent.com/peterkrueck/Claude-Code-Development-Kit/main/skills/second-opinion/SKILL.md
- Author: peterkrueck
- License: MIT
- Page: https://commandvault.ai/commands/second-opinion-from-codex-peterkrueck-aa45925b

Claude writes a focused question with its current thinking, runs the Codex CLI locally in non-interactive mode, and presents Codex's answer, optionally going back and forth for a few turns. Codex can read the project files itself. The skill is meant for architecture tradeoffs, stuck debugging and tricky review cases, not routine tasks, since each call takes time and uses ChatGPT plan quota. Requires the Codex CLI.

**Try asking:**
- "Get a second opinion from Codex on this migration plan"
- "We've been stuck on this race condition for an hour. Ask Codex"
- "Cross-check my reasoning on this caching tradeoff"

**Source:** [peterkrueck/Claude-Code-Development-Kit](https://github.com/peterkrueck/Claude-Code-Development-Kit/tree/HEAD/skills/second-opinion) · MIT · by peterkrueck
