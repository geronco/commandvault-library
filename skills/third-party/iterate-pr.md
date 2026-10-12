# Iterate on a PR until green (Sentry)

Loops on a pull request, fixing CI failures and review feedback until checks pass.

- Source: https://github.com/getsentry/skills
- SKILL.md: https://raw.githubusercontent.com/getsentry/skills/main/skills/iterate-pr/SKILL.md
- Author: Sentry
- License: Apache-2.0
- Page: https://commandvault.ai/commands/iterate-on-a-pr-until-green-sentry-e5946153

Claude watches a PR's CI checks and review comments, fixes failures and addresses high and medium-priority feedback, pushes, and repeats until CI is green. Bundled scripts fetch check status and review threads. It does not wait for human approval or merge. Requires the GitHub CLI (gh) to be authenticated.

**Try asking:**
- "Get PR #91 to green"
- "Fix the CI failures and review comments on my PR"
- "Keep iterating until all checks pass"

**Source:** [getsentry/skills](https://github.com/getsentry/skills/tree/HEAD/skills/iterate-pr) · Apache-2.0 · by Sentry
