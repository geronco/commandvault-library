---
title: "Graceful 404 Fallback"
description: "Keep users oriented on bad URLs"
kind: prompt
tags: ["404", "404 fallback"]
variables: ["goal", "stack"]
source: https://commandvault.ai/commands/graceful-404-fallback-e907f8bc
license: CC-BY-4.0
---

Add a graceful 404 experience to my app.

Stack: {{stack}}
Lost visitors should be steered to: {{goal}}

Requirements:
1. Catch every unmatched route (including nested and dynamic segments) and render a branded 404 page that returns a real HTTP 404 status, not a 200.
2. Show a short, human message, a primary button that takes people to {{goal}}, and a search box that searches the site.
3. Log the missing path to our error analytics, but strip query strings, emails, tokens and IDs before sending.
4. Keep the normal header and navigation so the page doesn't feel like a dead end.
5. Make it accessible: one h1, focus moves to the heading on load, the button and search work with the keyboard.

Before changing code, list the files you'll touch. After, give me:
- the exact steps to test it (a URL that should 404, what I should see, and how to confirm the status code in DevTools or with curl -I)
- anything you couldn't verify.
