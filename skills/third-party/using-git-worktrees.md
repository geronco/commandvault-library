# Git worktrees for isolation (Superpowers)

Sets up an isolated git worktree with a clean, passing baseline before feature work starts.

- Source: https://github.com/obra/superpowers
- SKILL.md: https://raw.githubusercontent.com/obra/superpowers/main/skills/using-git-worktrees/SKILL.md
- Author: Jesse Vincent (obra)
- License: MIT
- Page: https://commandvault.ai/commands/git-worktrees-for-isolation-superpowers-cee8ccdf

Before starting a feature or running a plan, Claude checks whether it is already in an isolated workspace and, if not, creates a git worktree in a sensible location. It then runs the project's setup (npm, pip, cargo, go and so on) and confirms tests pass so later failures can be traced to new changes. Guidance only; it uses standard git commands.

**Try asking:**
- "Start the new billing feature in its own worktree"
- "Set up an isolated workspace before we run the plan"
- "Create a worktree for this experiment so main stays clean"

**Source:** [obra/superpowers](https://github.com/obra/superpowers/tree/HEAD/skills/using-git-worktrees) · MIT · by Jesse Vincent (obra)
