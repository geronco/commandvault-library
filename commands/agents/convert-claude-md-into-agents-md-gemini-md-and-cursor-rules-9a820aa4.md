---
title: "Convert CLAUDE.md into AGENTS.md, GEMINI.md and Cursor rules"
description: "Write your project rules once and get the file every major coding agent reads."
kind: prompt
tags: ["claude-md", "agents-md", "cursor-rules", "gemini"]
variables: ["claude_md", "globs"]
source: https://commandvault.ai/commands/convert-claude-md-into-agents-md-gemini-md-and-cursor-rules-9a820aa4
license: CC-BY-4.0
---

Here is my CLAUDE.md:

{{claude_md}}

Produce equivalent context files for other coding agents, keeping the same facts and rules:
1. **AGENTS.md** (Codex, Jules, Cursor, many others): plain Markdown, same sections.
2. **GEMINI.md** (Gemini CLI): same content; mention Gemini-specific commands only if I listed any.
3. **.cursor/rules/project.mdc** (Cursor): add front matter with description, globs "{{globs}}" and alwaysApply: true.
4. **.github/copilot-instructions.md** (GitHub Copilot).

Rules:
- Don't invent commands or conventions that aren't in my file.
- Remove Claude-specific wording (like slash commands) where another tool can't use it.
- Show each file in its own code block with its path as the heading.
