# Claude Council (Alex G)

Asks several AI models the same question and shows their answers with a synthesis.

- Source: https://github.com/hex/claude-council
- SKILL.md: https://raw.githubusercontent.com/hex/claude-council/main/skills/council-execution/SKILL.md
- Author: Alex G
- License: MIT
- Page: https://commandvault.ai/commands/claude-council-alex-g-751e4705

Part of the claude-council plugin. Claude runs a script that sends one question to the selected providers (Gemini, OpenAI, Grok, Perplexity), shows each answer as returned, and then writes a synthesis of where they agree, where they differ and what it recommends. Results are saved to a cache file in the project. The skill is invoked by the plugin's ask command rather than on its own.

**Try asking:**
- "Ask the council whether we should use SQLite or Postgres for this desktop app"
- "Get Gemini's and OpenAI's take on this caching design"
- "Ask the council to review this error-handling approach"

**Source:** [hex/claude-council](https://github.com/hex/claude-council/tree/HEAD/skills/council-execution) · MIT · by Alex G
