# commandvault

Install anything from [commandvault.ai](https://commandvault.ai) into your AI coding tool.

```bash
npx commandvault add claude-code-slash-command-plan-…   # slug or page URL
npx commandvault search "CLAUDE.md for Django"
```

It detects your tool (Claude Code, Codex, Cursor, Copilot, Gemini CLI, Grok, Windsurf) from the project, asks for the entry's blanks, shows every file it will write and command it will run, and asks before doing anything. API keys you type stay on your machine.

Options: `--tool <id>`, `--global` (your user folder instead of this project), `--set key=value`, `--yes` (no questions; never runs commands), `--print` (just print the filled-in text).

MIT licensed.
