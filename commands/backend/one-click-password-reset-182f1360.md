---
title: "One-Click Password Reset"
description: "Fast, secure password recovery"
kind: prompt
tags: ["password", "password reset"]
variables: ["goal", "stack"]
source: https://commandvault.ai/commands/one-click-password-reset-182f1360
license: CC-BY-4.0
---

Add a secure "Forgot password" flow.

Stack: {{stack}}
After a successful reset, send people to: {{goal}}

Requirements:
1. The request form always shows the same message, whether or not the email has an account.
2. Send a single-use token that expires in 60 minutes; store only its hash. Rate-limit requests per email and IP.
3. The reset page checks the token, enforces our password rules, and then invalidates the token and every other active session.
4. Email the user that their password was changed, with a way to report it wasn't them.
5. Redirect as described above, with a confirmation message.

List the files you'll change and give me a test plan, including reusing a token, an expired token and two tabs requesting resets.
