# Update AI context docs (peterkrueck)

Keeps a project's AI-facing docs and CLAUDE.md in sync after architectural changes.

- Source: https://github.com/peterkrueck/Claude-Code-Development-Kit
- SKILL.md: https://raw.githubusercontent.com/peterkrueck/Claude-Code-Development-Kit/main/skills/update-docs/SKILL.md
- Author: peterkrueck
- License: MIT
- Page: https://commandvault.ai/commands/update-ai-context-docs-peterkrueck-f92af14c

After a change that adds new architecture, Claude updates four docs under docs/ai-context (spec, project structure, progress, deployment) and CLAUDE.md, or creates them if missing. The rules favor deleting lines, describe only the current state, and skip anything an agent can learn from the code or git history. It also says when not to run, such as after bug fixes, small refactors or styling changes.

**Try asking:**
- "Update the docs for the new queue worker we just added"
- "/update-docs"
- "Set up the ai-context docs for this project"

**Source:** [peterkrueck/Claude-Code-Development-Kit](https://github.com/peterkrueck/Claude-Code-Development-Kit/tree/HEAD/skills/update-docs) · MIT · by peterkrueck
