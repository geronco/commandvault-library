---
title: "Set up structured logging and alerts"
description: "Logs you can search and alerts that only fire when it matters."
kind: prompt
tags: ["logging", "monitoring", "alerts"]
variables: ["stack"]
source: https://commandvault.ai/commands/set-up-structured-logging-and-alerts-c5ff1587
license: CC-BY-4.0
---

Set up structured logging and alerting for a {{stack}} service.

1. A logger setup that outputs JSON with timestamp, level, request id, user id (hashed) and duration.
2. Rules for what to log at each level, and what never to log (tokens, passwords, full card numbers, raw PII).
3. Middleware that attaches a request id and logs one line per request.
4. Five alerts worth having for this service, each with a threshold, window and why it matters.
5. How to avoid alert fatigue: grouping, severity and who gets paged.

Show code for the logger and middleware.
