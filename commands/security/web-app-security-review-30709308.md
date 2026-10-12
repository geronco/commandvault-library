---
title: "Web app security review"
description: "Check an app against the issues attackers try first."
kind: checklist
tags: ["owasp", "security", "review"]
variables: ["app_or_code"]
source: https://commandvault.ai/commands/web-app-security-review-30709308
license: CC-BY-4.0
---

Review {{app_or_code}} against this list. For each, answer PASS / FAIL / N/A with evidence:

1. Every API route checks authentication AND authorization (not just "logged in").
2. User input is validated server-side with an allowlist schema.
3. Queries are parameterized; no string-built SQL.
4. Output is escaped; no dangerouslySetInnerHTML with user data.
5. Secrets are server-only and never shipped to the browser bundle.
6. Cookies are HttpOnly, Secure, SameSite.
7. Rate limits on login, signup, password reset and write endpoints.
8. File uploads check type, size and are re-encoded or scanned.
9. Error messages don't leak stack traces or internal ids.
10. Dependencies have no known critical vulnerabilities.

Finish with the top 3 risks ranked by impact.
