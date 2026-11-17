# Spec miner (Jeffallan)

Extracts a written specification from an undocumented or legacy codebase.

- Source: https://github.com/Jeffallan/claude-skills
- SKILL.md: https://raw.githubusercontent.com/Jeffallan/claude-skills/main/skills/spec-miner/SKILL.md
- Author: Jeffallan
- License: MIT
- Page: https://commandvault.ai/commands/spec-miner-jeffallan-bf5b1df0

Claude explores a codebase with read-only search tools, follows data flows and request paths, and writes the observed behavior as requirements in EARS format ("When X, the system shall Y"). It keeps observed facts separate from inferences and marks areas that need clarification. References cover the analysis process, EARS syntax, a specification template and a checklist.

**Try asking:**
- "Reverse engineer the billing module and write down what it actually does"
- "We inherited this API with no docs. Produce a spec of its endpoints and rules"
- "Map the order lifecycle in this codebase as EARS requirements"

**Source:** [Jeffallan/claude-skills](https://github.com/Jeffallan/claude-skills/tree/HEAD/skills/spec-miner) · MIT · by Jeffallan
