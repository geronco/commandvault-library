# Incident commander (Alireza Rezvani)

Runs a production outage: severity, timeline and the post-incident review.

- Source: https://github.com/alirezarezvani/claude-skills
- SKILL.md: https://raw.githubusercontent.com/alirezarezvani/claude-skills/main/engineering-team/skills/incident-commander/SKILL.md
- Author: Alireza Rezvani
- License: MIT
- Page: https://commandvault.ai/commands/incident-commander-alireza-rezvani-a3a29f24

Covers availability incidents such as outages, degradations and failed deploys, and points security incidents to a separate skill. Three Python scripts classify severity on a SEV1 to SEV4 scale, rebuild a timeline from timestamped events across sources, and draft a post-incident review using 5 Whys, fishbone or timeline analysis. It also includes communication templates for stakeholder updates and a runbook format.

**Try asking:**
- "We have elevated 500s on checkout since 14:05. Help me classify and run this incident"
- "Build a timeline from these log excerpts and Slack messages"
- "Draft the post-incident review for yesterday's database failover"

**Source:** [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills/tree/HEAD/engineering-team/skills/incident-commander) · MIT · by Alireza Rezvani
