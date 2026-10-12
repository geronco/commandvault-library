# Web interface guidelines review (Vercel)

Audits UI code against Vercel's web interface guidelines and reports issues by file and line.

- Source: https://github.com/vercel-labs/agent-skills
- SKILL.md: https://raw.githubusercontent.com/vercel-labs/agent-skills/main/skills/web-design-guidelines/SKILL.md
- Author: Vercel
- License: MIT
- Page: https://commandvault.ai/commands/web-interface-guidelines-review-vercel-e7a3d677

When asked to review UI, accessibility or UX, Claude downloads the latest version of Vercel's Web Interface Guidelines and checks the files you name against every rule. Findings come back in a terse file:line format. The skill is small because the rules are fetched at run time, so it needs web access.

**Try asking:**
- "Review my UI in src/components against best practices"
- "Check this form for accessibility and UX issues"
- "Audit the design of the checkout page"

**Source:** [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills/tree/HEAD/skills/web-design-guidelines) · MIT · by Vercel
