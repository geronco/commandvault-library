# Planning with files (Ahmad Othman Ammar Adi)

Keeps a task plan, findings and progress log on disk so long agent tasks survive context loss.

- Source: https://github.com/OthmanAdi/planning-with-files
- SKILL.md: https://raw.githubusercontent.com/OthmanAdi/planning-with-files/master/skills/planning-with-files/SKILL.md
- Author: Ahmad Othman Ammar Adi
- License: MIT
- Page: https://commandvault.ai/commands/planning-with-files-ahmad-othman-ammar-adi-1262ece8

For multi-step work, Claude creates task_plan.md, findings.md and progress.md in the project and keeps them updated as it goes, with rules such as writing the plan first, logging every error and not repeating failed attempts. Hooks re-inject the plan into context and help recover after a context reset. Scripts and templates are included, and the skill states it has no network upload path.

**Try asking:**
- "Plan and carry out the migration from Jest to Vitest, keeping a plan file as you go"
- "Research our three logging vendors and record findings to disk"
- "Pick up where we left off on the refactor using the plan files"

**Source:** [OthmanAdi/planning-with-files](https://github.com/OthmanAdi/planning-with-files/tree/HEAD/skills/planning-with-files) · MIT · by Ahmad Othman Ammar Adi
