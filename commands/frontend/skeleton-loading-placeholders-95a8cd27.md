---
title: "Skeleton Loading Placeholders"
description: "Smooth perceived performance"
kind: prompt
tags: ["skeleton blocks", "loading", "placeholders", "loading placeholder"]
variables: ["goal", "stack"]
source: https://commandvault.ai/commands/skeleton-loading-placeholders-95a8cd27
license: CC-BY-4.0
---

Replace blank or spinner states with skeleton placeholders.

Stack: {{stack}}
Start with these screens: {{goal}}

Requirements:
1. Skeletons match the final layout (same size and position), so nothing shifts when data arrives. Aim for zero layout shift.
2. Show them only while data is actually loading; if loading takes under ~150 ms, don't flash them.
3. Use the framework's loading/streaming features where they exist instead of hand-rolled state.
4. Add a subtle shimmer that is disabled when the user prefers reduced motion.
5. Mark loading regions with aria-busy and keep the skeletons hidden from screen readers.

Show me one reusable skeleton component, then apply it to the screens above. Tell me how to see it locally (for example by throttling the network in DevTools).
