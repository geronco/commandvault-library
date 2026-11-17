# Specialist code review (Phil Haack)

Runs security, performance, correctness and other specialist review agents on a diff or PR.

- Source: https://github.com/haacked/review-code
- SKILL.md: https://raw.githubusercontent.com/haacked/review-code/main/skills/review-code/SKILL.md
- Author: Phil Haack
- License: MIT
- Page: https://commandvault.ai/commands/specialist-code-review-phil-haack-1fb3c019

Reviews local changes, a commit, a branch, a git range or a PR URL. A correctness reviewer always runs, and others (security, performance, maintainability, testing, compatibility, infrastructure config, frontend) are added unless ruled out. Options can post a draft GitHub review with inline comments, apply fixes, re-review only what changed, or get a second pass from the Copilot or Codex CLI. A learn mode studies review outcomes to tune later reviews. Uses bundled scripts, and gh for PR features.

**Try asking:**
- "/review-code"
- "/review-code security"
- "/review-code https://github.com/org/repo/pull/123 --draft"

**Source:** [haacked/review-code](https://github.com/haacked/review-code/tree/HEAD/skills/review-code) · MIT · by Phil Haack
