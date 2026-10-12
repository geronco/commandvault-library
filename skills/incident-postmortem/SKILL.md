---
name: incident-postmortem
description: Write a blameless incident postmortem. Use when the user shares notes, logs or a timeline from an outage or incident and wants a write-up.
---

# Incident postmortem

Sections:
1. **Summary:** what happened, impact (who, how many, how long), current status. Three sentences.
2. **Timeline** (UTC): detection, key decisions, mitigation, resolution.
3. **Root cause:** the technical cause and the conditions that let it happen. Ask "why" until you reach something fixable in process or design.
4. **What went well / what didn't:** detection, response, communication.
5. **Action items:** each with owner, due date and type (prevent / detect / mitigate). Specific and checkable.

Blameless: describe actions and systems, not people's failings. Mark anything you're inferring as an assumption and list open questions.
