---
title: "Debounced Live Search"
description: "Reduce server load while users type"
kind: prompt
tags: ["server load"]
variables: ["goal", "stack"]
source: https://commandvault.ai/commands/debounced-live-search-a8ec2c2f
license: CC-BY-4.0
---

Add live search that updates as people type without overloading the server.

Stack: {{stack}}
Search covers: {{goal}}

Requirements:
1. Debounce input by about 300 ms and send one request with the final query.
2. Cancel in-flight requests when a newer query starts, so older results never overwrite newer ones.
3. Skip requests for queries shorter than 2 characters; trim whitespace.
4. Show loading, empty ("No results for …") and error states, and keep the previous results visible while the next ones load.
5. Make results keyboard-navigable (arrow keys, Enter, Escape) and announce the result count to screen readers.
6. Reflect the query in the URL so searches can be shared and the back button works.

Explain how to verify it: what the network tab should show while typing quickly, and the edge cases you tested.
