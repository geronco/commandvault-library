---
title: "Add a background job safely"
description: "Move slow work out of the request with retries and idempotency."
kind: workflow
tags: ["jobs", "queues", "reliability"]
variables: ["slow_work", "code", "queue_tool"]
source: https://commandvault.ai/commands/add-a-background-job-safely-ffa03721
license: CC-BY-4.0
---

The request handler below does slow work ({{slow_work}}) inline:

{{code}}

Refactor it to a background job using {{queue_tool}}:
1. The handler validates input, enqueues a job with an idempotency key, and returns 202 immediately.
2. The worker is safe to run twice for the same key.
3. Retries use exponential backoff with a max attempt count; failures land in a dead-letter list.
4. Log job id, attempt and duration; never log secrets or full payloads.
5. Show how the UI can poll or subscribe for the result.

Return the new handler, the worker and a short runbook for stuck jobs.
