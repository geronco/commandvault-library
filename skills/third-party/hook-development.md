# Claude Code hook development (Anthropic)

How to write Claude Code hooks that validate, block or automate tool use.

- Source: https://github.com/anthropics/claude-plugins-official
- SKILL.md: https://raw.githubusercontent.com/anthropics/claude-plugins-official/main/plugins/plugin-dev/skills/hook-development/SKILL.md
- Author: Anthropic
- License: Apache-2.0
- Page: https://commandvault.ai/commands/claude-code-hook-development-anthropic-0dac2d77

A detailed guide to Claude Code hooks: every event type (PreToolUse, PostToolUse, Stop, SessionStart, UserPromptSubmit and others), config formats, input and output JSON, matchers, environment variables and prompt-based hooks. It includes security advice, example hooks and validation scripts. Useful for blocking dangerous commands or automating checks.

**Try asking:**
- "Add a hook that blocks rm -rf in this project"
- "Run prettier automatically after every file edit"
- "Write a Stop hook that makes Claude run tests before finishing"

**Source:** [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official/tree/HEAD/plugins/plugin-dev/skills/hook-development) · Apache-2.0 · by Anthropic
