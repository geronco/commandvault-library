# Semgrep security scan (Trail of Bits)

Runs a planned, approved Semgrep scan of a codebase and merges results into SARIF.

- Source: https://github.com/trailofbits/skills
- SKILL.md: https://raw.githubusercontent.com/trailofbits/skills/main/plugins/static-analysis/skills/semgrep/SKILL.md
- Author: Trail of Bits
- License: CC-BY-SA-4.0
- Page: https://commandvault.ai/commands/semgrep-security-scan-trail-of-bits-4a0f9cca

Claude detects the languages in a repo, picks suitable Semgrep rulesets and shows you the scan plan for approval before running anything. Bundled scripts run the rulesets in batches and merge the output into SARIF. You can choose full coverage or only medium-to-high-confidence security findings, and Semgrep Pro cross-file analysis is used if available. Requires the Semgrep CLI; metrics are turned off.

**Try asking:**
- "Scan this repo for security vulnerabilities with Semgrep"
- "Run only high-confidence Semgrep security rules"
- "Do a static analysis pass before our audit"

**Source:** [trailofbits/skills](https://github.com/trailofbits/skills/tree/HEAD/plugins/static-analysis/skills/semgrep) · CC-BY-SA-4.0 · by Trail of Bits
