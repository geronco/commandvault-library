---
title: "Blameless postmortem write-up"
description: "Turn incident notes into a postmortem the team will actually read."
kind: template
tags: ["postmortem", "incidents", "writing"]
variables: ["incident_notes"]
source: https://commandvault.ai/commands/blameless-postmortem-write-up-681657b8
license: CC-BY-4.0
---

Write a blameless postmortem from these notes:

{{incident_notes}}

Sections:
- Summary (3 sentences: what broke, impact, duration).
- Timeline (UTC, key events only).
- Root cause and contributing factors (systems and processes, not people).
- What went well / what was hard.
- Action items: owner, due date, and whether each prevents, detects, or mitigates.

Plain language. No blame, no hedging.
