# Agent readiness audit (John Renaldi)

Scores how ready a codebase is for AI coding agents and what to improve.

- Source: https://github.com/jrenaldi79/harness-engineering
- SKILL.md: https://raw.githubusercontent.com/jrenaldi79/harness-engineering/main/skills/readiness/SKILL.md
- Author: John Renaldi
- License: MIT
- Page: https://commandvault.ai/commands/agent-readiness-audit-john-renaldi-33472665

Claude detects the stack and any monorepo layout, then runs three subagents in parallel to check eight areas: style and validation, testing, git hooks, documentation, agent configuration, code quality, dev environment and agentic workflow. It assigns a readiness level from 1 (Bare) upward and saves a readiness-report.md, comparing against a previous report when one exists. Requires the harness-engineering plugin's setup skill as reference material.

**Try asking:**
- "How ready is this repo for AI agents?"
- "Run a readiness report and tell me the top three fixes"
- "Re-run the readiness audit and compare it with last month's report"

**Source:** [jrenaldi79/harness-engineering](https://github.com/jrenaldi79/harness-engineering/tree/HEAD/skills/readiness) · MIT · by John Renaldi
