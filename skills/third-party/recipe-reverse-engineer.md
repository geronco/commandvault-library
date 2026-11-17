# Docs from existing code (shinpr)

Generates PRDs and design docs from an existing codebase, with verification and review steps.

- Source: https://github.com/shinpr/claude-code-workflows
- SKILL.md: https://raw.githubusercontent.com/shinpr/claude-code-workflows/main/skills/recipe-reverse-engineer/SKILL.md
- Author: shinpr
- License: MIT
- Page: https://commandvault.ai/commands/docs-from-existing-code-shinpr-657d0bb4

Claude confirms the target path, depth and reference architecture, then works unit by unit: discovering scope, having agents write a PRD, verifying it against the code and reviewing it, and optionally doing the same for backend and frontend design docs. Review findings are resolved before moving on. Manual use only; it relies on agents from the dev-workflows plugin.

**Try asking:**
- "/recipe-reverse-engineer src/billing"
- "/recipe-reverse-engineer the whole repo, PRD only"
- "/recipe-reverse-engineer src/api with design docs and human review"

**Source:** [shinpr/claude-code-workflows](https://github.com/shinpr/claude-code-workflows/tree/HEAD/skills/recipe-reverse-engineer) · MIT · by shinpr
