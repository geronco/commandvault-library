# Diagnose with verified evidence (shinpr)

Runs an investigate, verify and solve loop with separate subagents to find a root cause.

- Source: https://github.com/shinpr/claude-code-workflows
- SKILL.md: https://raw.githubusercontent.com/shinpr/claude-code-workflows/main/skills/recipe-diagnose/SKILL.md
- Author: shinpr
- License: MIT
- Page: https://commandvault.ai/commands/diagnose-with-verified-evidence-shinpr-ad6ab6ec

Claude acts as an orchestrator: it first records the reported symptom and scope, then has an investigator agent gather evidence, a verifier agent check it, and a solver agent propose fixes. The final report lists the failure points, how they were verified, a recommended fix with steps, alternatives and remaining risks, or says which evidence is missing. Manual use only; it depends on agents shipped in the dev-workflows plugin.

**Try asking:**
- "/recipe-diagnose login sometimes returns 500 after deploys"
- "/recipe-diagnose the nightly export job produces duplicate rows"
- "/recipe-diagnose memory keeps growing in the worker process"

**Source:** [shinpr/claude-code-workflows](https://github.com/shinpr/claude-code-workflows/tree/HEAD/skills/recipe-diagnose) · MIT · by shinpr
