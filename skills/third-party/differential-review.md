# Security diff review (Trail of Bits)

Security-focused review of a PR or diff, with blast radius, history and test coverage checks.

- Source: https://github.com/trailofbits/skills
- SKILL.md: https://raw.githubusercontent.com/trailofbits/skills/main/plugins/differential-review/skills/differential-review/SKILL.md
- Author: Trail of Bits
- License: CC-BY-SA-4.0
- Page: https://commandvault.ai/commands/security-diff-review-trail-of-bits-b06ba141

When reviewing a PR, commit or diff, Claude checks the changes for security problems with an attacker's mindset. It uses git blame to see why code changed, counts callers to estimate blast radius, checks for re-introduced past bugs and finds changed code with no test coverage, then writes a markdown report. Depth adapts to the size of the codebase. Includes methodology, pattern and reporting guides.

**Try asking:**
- "Do a security review of PR #482"
- "Could this diff reintroduce the auth bypass we fixed last year?"
- "What else could this change break?"

**Source:** [trailofbits/skills](https://github.com/trailofbits/skills/tree/HEAD/plugins/differential-review/skills/differential-review) · CC-BY-SA-4.0 · by Trail of Bits
