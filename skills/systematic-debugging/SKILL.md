---
name: systematic-debugging
description: Debug a failure methodically. Use when the user reports a bug, error, failing test or unexpected behaviour and the cause isn't obvious.
---

# Systematic debugging

Do not edit code until step 4.

1. **Reproduce.** Find the smallest command, test or click path that shows the bug. Record the exact error and where it appears.
2. **Locate.** Read the code on the failing path. List the 2–4 places the bug could come from.
3. **Prove.** For each candidate, add a log, assertion or failing test that confirms or rules it out. Stop when one is proven.
4. **Fix the cause**, not the symptom. Keep the change as small as possible.
5. **Verify.** Re-run the reproduction and the nearby tests. Add a regression test if there isn't one.
6. **Report:** cause (one sentence), fix, evidence it works, and anything else that might share the cause.

If you can't reproduce it, say what you tried and what information would help. Don't guess-fix.
