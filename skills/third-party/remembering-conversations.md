# Search past conversations (obra)

Makes Claude search its own earlier conversations before guessing or starting from scratch.

- Source: https://github.com/obra/episodic-memory
- SKILL.md: https://raw.githubusercontent.com/obra/episodic-memory/main/skills/remembering-conversations/SKILL.md
- Author: Jesse Vincent (obra)
- License: MIT
- Page: https://commandvault.ai/commands/search-past-conversations-obra-411cc8c4

Works with the episodic-memory plugin, which indexes past Claude Code (and Codex or opencode) sessions. The skill tells Claude to search that history whenever earlier decisions, fixes or project context might help, read the top few matches, and summarize them with pointers to the original conversations. In Claude Code it hands the search to a dedicated subagent so raw transcripts stay out of the main context.

**Try asking:**
- "What did we decide last month about the database migration approach?"
- "Have we hit this webpack error before? Check our past sessions"
- "Remind me how we set up the release script in this repo"

**Source:** [obra/episodic-memory](https://github.com/obra/episodic-memory/tree/HEAD/skills/remembering-conversations) · MIT · by Jesse Vincent (obra)
