---
title: "Sanity-check an A/B test result"
description: "Decide whether an experiment result is real before you ship it."
kind: prompt
tags: ["ab-testing", "statistics", "experiments"]
variables: ["control_visitors", "control_conversions", "variant_visitors", "variant_conversions", "duration"]
source: https://commandvault.ai/commands/sanity-check-an-a-b-test-result-c249284a
license: CC-BY-4.0
---

A/B test results:
- Control: {{control_visitors}} visitors, {{control_conversions}} conversions
- Variant: {{variant_visitors}} visitors, {{variant_conversions}} conversions
- Ran for {{duration}}

1. Compute conversion rates, absolute and relative lift, and a 95% confidence interval for the difference.
2. Is it statistically significant? Was the sample large enough for the effect size?
3. Check for common traps: peeking, novelty effect, uneven traffic split, weekday effects.
4. Recommendation: ship, keep running (how long), or stop — with reasoning a non-statistician understands.
