---
title: "Role-Based Access Control"
description: "Limit sensitive features to the right people"
kind: prompt
tags: ["access control", "login", "password protected", "roles"]
variables: ["goal", "stack"]
source: https://commandvault.ai/commands/role-based-access-control-5cccc8f4
license: CC-BY-4.0
---

Add role-based access control.

Stack: {{stack}}
Roles and permissions: {{goal}}

Requirements:
1. Define the roles and permissions above in one place in code, and check permissions (not role names) at each use.
2. Enforce access on the server for every protected page, API route and mutation. Hiding buttons in the UI is not enough.
3. Deny by default: new routes are blocked until they declare the permission they need.
4. Return 403 (not 404 or 500) for authenticated users without permission, and log the denial.
5. Keep roles somewhere the client can't edit (server-side session or database), and make role changes take effect on the next request.

List the files you'll change, then give me a test matrix: each role against each protected action, with the expected result.
