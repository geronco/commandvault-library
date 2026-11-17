# Git safety (Wayne Sutton)

Stops an agent from destroying uncommitted work with git.

- Source: https://github.com/waynesutton/builder-skills
- SKILL.md: https://raw.githubusercontent.com/waynesutton/builder-skills/main/skills/git-safety/SKILL.md
- Author: Wayne Sutton
- License: Apache-2.0
- Page: https://commandvault.ai/commands/git-safety-wayne-sutton-951d574b

Before any git command Claude checks git status and stops if there are uncommitted or untracked files. Commands such as reset --hard, checkout or restore of files, clean, stash drop, force push and branch -D need explicit approval of the exact command. Requests to "revert" or "undo" are handled as manual edits of the specific lines, and committed changes are undone with git revert.

**Try asking:**
- "Undo my last change to the header component"
- "Clean up this branch before I open a PR"
- "Revert the commit that broke the build"

**Source:** [waynesutton/builder-skills](https://github.com/waynesutton/builder-skills/tree/HEAD/skills/git-safety) · Apache-2.0 · by Wayne Sutton
