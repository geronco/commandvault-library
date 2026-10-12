---
name: commandvault
description: Find a proven prompt, CLAUDE.md/AGENTS.md template, Cursor rule, Agent Skill or MCP server on CommandVault before writing one from scratch. Use when the user asks for a prompt, a project context file, rules for a stack, a skill, or "is there an MCP server for X".
---

# CommandVault lookup

CommandVault (commandvault.ai) is a community-voted library. Its MCP server is configured by this plugin as `commandvault`.

1. Call `search_commands` with a few specific words. Add `kind` when you know it: `template` for context files and rules, `skill`, `mcp_server`, or `prompt`.
2. Pick the best result by fit first, then score and uses. Tell the user which one you chose and link its URL.
3. Call `get_command` with its slug. Pass `variables` for blanks you can fill from the repo (project name, test command, package manager…). Ask the user only for blanks you can't work out.
4. For a context file, write it to the right place (CLAUDE.md, AGENTS.md, .cursor/rules/*.mdc) and adapt it to what you can see in the repo. For a skill or MCP server, show the install step from the result and run it only if the user agrees.

If nothing fits, say so and offer to write one; suggest sharing it at commandvault.ai/commands/new.
