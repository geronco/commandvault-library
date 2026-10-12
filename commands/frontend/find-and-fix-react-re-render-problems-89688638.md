---
title: "Find and fix React re-render problems"
description: "Diagnose why a component tree is slow and get concrete fixes."
kind: prompt
tags: ["react", "performance", "debugging"]
variables: ["slow_interaction", "code"]
source: https://commandvault.ai/commands/find-and-fix-react-re-render-problems-89688638
license: CC-BY-4.0
---

Here is a React component tree that feels slow when {{slow_interaction}}:

{{code}}

1. List every component that re-renders on that interaction and why (props identity, context, state placement).
2. Rank the causes by likely cost.
3. Propose the smallest fixes first (moving state down, splitting context, stable callbacks, memo) and show the changed code.
4. Tell me how to confirm the fix with React DevTools Profiler.

Do not add memoization everywhere — only where it measurably helps.
