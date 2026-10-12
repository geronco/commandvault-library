---
title: "Debounced Live Search"
description: "Reduce server load while users type"
kind: prompt
tags: ["server load"]
variables: ["goal"]
source: https://commandvault.ai/commands/debounced-live-search-a8ec2c2f
license: CC-BY-4.0
---

Wrap the global search input in a 300 ms debounce; ignore keystrokes during that window and fire one API request with the final query string
