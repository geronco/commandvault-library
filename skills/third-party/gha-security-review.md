# GitHub Actions security review (Sentry)

Finds exploitable flaws in GitHub Actions workflows, like pwn requests and script injection.

- Source: https://github.com/getsentry/skills
- SKILL.md: https://raw.githubusercontent.com/getsentry/skills/main/skills/gha-security-review/SKILL.md
- Author: Sentry
- License: Apache-2.0
- Page: https://commandvault.ai/commands/github-actions-security-review-sentry-015d75ff

Reviews .github/workflows for ways an attacker could abuse CI: pull_request_target 'pwn requests', expression injection, credential theft and supply-chain risks. It classifies triggers, checks each vulnerability class, skips known-safe patterns, and only reports findings with a concrete exploit scenario. Reference files describe each class in detail.

**Try asking:**
- "Audit our GitHub Actions workflows for security issues"
- "Is this pull_request_target workflow exploitable?"
- "Check CI security before we open-source the repo"

**Source:** [getsentry/skills](https://github.com/getsentry/skills/tree/HEAD/skills/gha-security-review) · Apache-2.0 · by Sentry
