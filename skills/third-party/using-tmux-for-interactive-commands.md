# Interactive CLI via tmux (obra)

Lets Claude drive interactive terminal tools like vim, REPLs and git rebase -i through tmux.

- Source: https://github.com/obra/superpowers-lab
- SKILL.md: https://raw.githubusercontent.com/obra/superpowers-lab/main/skills/using-tmux-for-interactive-commands/SKILL.md
- Author: Jesse Vincent (obra)
- License: MIT
- Page: https://commandvault.ai/commands/interactive-cli-via-tmux-obra-92bdddf1

Interactive programs hang under a normal shell tool because they expect a real terminal. This skill shows Claude how to start them in a detached tmux session, send keystrokes with send-keys, read the screen with capture-pane, and close the session when done. It covers special keys, working directories and common patterns for Python REPLs, vim and interactive git, and ships a small wrapper script.

**Try asking:**
- "Run git rebase -i on the last 4 commits and squash the two fixup commits"
- "Open a Python REPL and check how this library parses the sample date strings"
- "Use vim to edit the config file on the remote box"

**Source:** [obra/superpowers-lab](https://github.com/obra/superpowers-lab/tree/HEAD/skills/using-tmux-for-interactive-commands) · MIT · by Jesse Vincent (obra)
