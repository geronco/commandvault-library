---
title: "Harden authentication flows"
description: "Review sign-up, login and reset flows for common account takeover holes."
kind: prompt
tags: ["auth", "security", "accounts"]
variables: ["app_or_code"]
source: https://commandvault.ai/commands/harden-authentication-flows-e2a1ff85
license: CC-BY-4.0
---

Review the authentication flows in {{app_or_code}} (sign-up, login, password reset, email change, session handling).

Check for:
- User enumeration via different error messages or timings.
- Missing rate limits / lockouts.
- Reset tokens that are guessable, long-lived or reusable.
- Email change without re-authentication or confirmation to the old address.
- Sessions not revoked after password change.
- Missing MFA option for admins.

For each issue: the risk, a realistic attack, and the fix with code.
