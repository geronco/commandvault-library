# Verify before claiming done (Superpowers)

Requires Claude to run real checks and show evidence before saying work is finished.

- Source: https://github.com/obra/superpowers
- SKILL.md: https://raw.githubusercontent.com/obra/superpowers/main/skills/verification-before-completion/SKILL.md
- Author: Jesse Vincent (obra)
- License: MIT
- Page: https://commandvault.ai/commands/verify-before-claiming-done-superpowers-24f62fa7

Triggers whenever Claude is about to say something is fixed, complete or passing, or is about to commit or open a PR. It must first run the relevant verification commands (tests, builds, linters) and read the output, and it may only report success that the output supports. It lists the common shortcuts and rationalizations to avoid. A short, high-impact guard against false 'all done' reports.

**Try asking:**
- "Are we done? Make sure everything actually passes"
- "Confirm the fix works before you commit"
- "Check the build is green before opening the PR"

**Source:** [obra/superpowers](https://github.com/obra/superpowers/tree/HEAD/skills/verification-before-completion) · MIT · by Jesse Vincent (obra)
