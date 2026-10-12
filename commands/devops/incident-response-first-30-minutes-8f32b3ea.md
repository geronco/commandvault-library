---
title: "Incident response first 30 minutes"
description: "A calm, ordered playbook for when production is down."
kind: workflow
tags: ["incidents", "on-call", "reliability"]
variables: ["symptom", "start_time"]
source: https://commandvault.ai/commands/incident-response-first-30-minutes-8f32b3ea
license: CC-BY-4.0
---

We have an incident: {{symptom}} started at {{start_time}}.

Guide me through the first 30 minutes:
1. Triage: questions to establish scope (who's affected, since when, what changed).
2. Stabilize: safest mitigations in order (roll back last deploy, disable feature flag, scale up, fail over).
3. Communicate: a status-page update and an internal update I can paste now.
4. Investigate: which dashboards, logs and recent changes to check, in order.
5. Record: what to write down for the postmortem while it's fresh.

Ask me for the information you need step by step instead of guessing.
