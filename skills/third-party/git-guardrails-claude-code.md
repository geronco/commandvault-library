# Git guardrails hook (Matt Pocock)

Installs a hook that blocks dangerous git commands before Claude runs them.

- Source: https://github.com/mattpocock/skills
- SKILL.md: https://raw.githubusercontent.com/mattpocock/skills/main/skills/misc/git-guardrails-claude-code/SKILL.md
- Author: Matt Pocock
- License: MIT
- Page: https://commandvault.ai/commands/git-guardrails-hook-matt-pocock-c88922a2

Sets up a PreToolUse hook in Claude Code that blocks git push, reset --hard, clean -f, branch -D and checkout or restore of the whole tree. Claude asks whether to install it for the project or globally, copies the bundled script, merges it into settings.json without overwriting other hooks, offers to adjust the blocked list, and tests that it works.

**Try asking:**
- "Set up git guardrails for this project"
- "Block git push and reset --hard for Claude in all my projects"
- "Add git safety hooks but allow git push"

**Source:** [mattpocock/skills](https://github.com/mattpocock/skills/tree/HEAD/skills/misc/git-guardrails-claude-code) · MIT · by Matt Pocock
