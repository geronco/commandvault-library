---
title: "Instant Email Verification Link"
description: "Verify new accounts seamlessly"
kind: prompt
tags: ["email", "email verification"]
variables: ["goal", "stack"]
source: https://commandvault.ai/commands/instant-email-verification-link-507dce29
license: CC-BY-4.0
---

Add email verification to sign-up.

Stack: {{stack}}
Until they verify, users may: {{goal}}

Requirements:
1. On sign-up, send a single-use, signed verification link that expires after 24 hours. Store only a hash of the token.
2. Enforce the restriction above on the server, not just in the UI.
3. Let people resend the link (rate-limited) and show a clear message when a link is expired or already used.
4. Clicking the link marks email_verified = true and logs them in or sends them to log in, depending on how our auth works.
5. Don't reveal whether an email address has an account on the resend form.

Tell me which files change, what the email says, and how to test the whole flow locally, including an expired link.
