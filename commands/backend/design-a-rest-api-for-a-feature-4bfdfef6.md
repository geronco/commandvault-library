---
title: "Design a REST API for a feature"
description: "Endpoints, payloads, status codes and edge cases before you write code."
kind: prompt
tags: ["api", "rest", "design"]
variables: ["feature", "stack"]
source: https://commandvault.ai/commands/design-a-rest-api-for-a-feature-4bfdfef6
license: CC-BY-4.0
---

Design a REST API for {{feature}} in a {{stack}} app.

Give me:
1. Resources and endpoints (method, path, purpose).
2. Request and response JSON for each, with realistic example values.
3. Status codes for success and every failure case.
4. Auth and permission rules per endpoint.
5. Pagination, filtering and sorting conventions.
6. Idempotency and rate-limit notes for write endpoints.
7. Open questions I need to answer before building.

Keep it consistent: plural nouns, kebab-case paths, camelCase JSON.
