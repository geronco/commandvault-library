# CodeQL scan (Trail of Bits)

Builds a CodeQL database and runs data-flow and taint analysis to find vulnerabilities.

- Source: https://github.com/trailofbits/skills
- SKILL.md: https://raw.githubusercontent.com/trailofbits/skills/main/plugins/static-analysis/skills/codeql/SKILL.md
- Author: Trail of Bits
- License: CC-BY-SA-4.0
- Page: https://commandvault.ai/commands/codeql-scan-trail-of-bits-35df9f85

Guides Claude through a complete CodeQL scan: building the database (including tricky compiled-language builds), choosing query suites, running them and collecting results. It supports Python, JavaScript/TypeScript, Go, Java/Kotlin, C/C++, C#, Ruby and Swift, and can write data extension models for project-specific sources and sinks. Ships workflows, agent prompts and scripts. Requires the CodeQL CLI and jq.

**Try asking:**
- "Run CodeQL on this Go service"
- "Do a taint analysis for SQL injection in this Java app"
- "Build a CodeQL database and run the security-extended suite"

**Source:** [trailofbits/skills](https://github.com/trailofbits/skills/tree/HEAD/plugins/static-analysis/skills/codeql) · CC-BY-SA-4.0 · by Trail of Bits
