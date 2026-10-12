# Find bugs in your branch (Sentry)

Reviews the changes on your branch for bugs, security holes and quality issues.

- Source: https://github.com/getsentry/skills
- SKILL.md: https://raw.githubusercontent.com/getsentry/skills/main/skills/find-bugs/SKILL.md
- Author: Sentry
- License: Apache-2.0
- Page: https://commandvault.ai/commands/find-bugs-in-your-branch-sentry-996dc68d

Claude gathers the full diff of the current branch, maps the attack surface, then goes through a security and correctness checklist for every changed file. It verifies each suspected issue before reporting and does a final self-check, then returns findings in a consistent format. Short and practical; uses git only.

**Try asking:**
- "Find bugs in my branch before I open a PR"
- "Do a security review of the changes on this branch"
- "Audit what I changed today"

**Source:** [getsentry/skills](https://github.com/getsentry/skills/tree/HEAD/skills/find-bugs) · Apache-2.0 · by Sentry
