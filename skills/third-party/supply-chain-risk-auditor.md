# Supply-chain risk audit (Trail of Bits)

Audits your dependency tree for advisories, abandoned packages and risky install scripts.

- Source: https://github.com/trailofbits/skills
- SKILL.md: https://raw.githubusercontent.com/trailofbits/skills/main/plugins/supply-chain-risk-auditor/skills/supply-chain-risk-auditor/SKILL.md
- Author: Trail of Bits
- License: CC-BY-SA-4.0
- Page: https://commandvault.ai/commands/supply-chain-risk-audit-trail-of-bits-15964de0

Claude reviews a project's dependencies, including the full lockfile tree, for known advisories matched to the exact versions, archived or abandoned upstream projects, npm packages controlled by very few publishers, and packages that run scripts at install time. Bundled scripts do the measuring so the numbers are reproducible, and the skill explains how to read the resulting report.

**Try asking:**
- "Audit our npm dependencies for supply-chain risk"
- "Which of our packages are abandoned or have install scripts?"
- "Review the lockfile before we start this engagement"

**Source:** [trailofbits/skills](https://github.com/trailofbits/skills/tree/HEAD/plugins/supply-chain-risk-auditor/skills/supply-chain-risk-auditor) · CC-BY-SA-4.0 · by Trail of Bits
