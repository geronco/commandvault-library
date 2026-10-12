---
title: "Write integration tests for an endpoint"
description: "Cover the happy path, auth and the edge cases that bite in production."
kind: prompt
tags: ["testing", "api", "integration"]
variables: ["test_framework", "endpoint_code"]
source: https://commandvault.ai/commands/write-integration-tests-for-an-endpoint-95976de5
license: CC-BY-4.0
---

Write integration tests for this endpoint using {{test_framework}}:

{{endpoint_code}}

Cover at minimum:
- Success with valid input (assert body and status).
- Missing/invalid auth → 401/403.
- Validation failures for each required field.
- Not found and conflict cases.
- Rate limit or duplicate submission behavior if present.

Use factories for test data, clean up after each test, and don't mock the database unless I say so.
