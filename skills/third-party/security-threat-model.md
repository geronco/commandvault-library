# Repository threat model (OpenAI)

Produces a threat model for a codebase: trust boundaries, assets, attackers and mitigations.

- Source: https://github.com/openai/skills
- SKILL.md: https://raw.githubusercontent.com/openai/skills/main/skills/.curated/security-threat-model/SKILL.md
- Author: OpenAI
- License: Apache-2.0
- Page: https://commandvault.ai/commands/repository-threat-model-openai-472d6bf4

When you explicitly ask for threat modeling, Claude studies the repository and writes a concise markdown threat model listing trust boundaries, valuable assets, attacker capabilities, abuse paths and mitigations, ranked by risk. It is meant not to fire for general architecture or code review requests. Published in OpenAI's Codex skills catalog but uses the standard SKILL.md format, so it works in Claude Code too.

**Try asking:**
- "Threat model this repository"
- "Enumerate the abuse paths for our file upload service"
- "Do an AppSec threat model of the payments module"

**Source:** [openai/skills](https://github.com/openai/skills/tree/HEAD/skills/.curated/security-threat-model) · Apache-2.0 · by OpenAI
