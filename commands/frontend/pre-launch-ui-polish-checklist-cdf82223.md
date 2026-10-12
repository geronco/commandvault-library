---
title: "Pre-launch UI polish checklist"
description: "Walk a page through the details users notice before you ship."
kind: checklist
tags: ["qa", "ui", "launch"]
variables: ["page_url_or_file"]
source: https://commandvault.ai/commands/pre-launch-ui-polish-checklist-cdf82223
license: CC-BY-4.0
---

Review the page at {{page_url_or_file}} against this checklist and report each item as PASS / FIX with a one-line note:

1. Empty, loading and error states exist for every data-driven area.
2. Text never overflows or truncates without a tooltip at 320px width.
3. Tap targets are at least 44x44px on mobile.
4. Buttons show a pressed / disabled / busy state.
5. Forms keep user input after a failed submit.
6. Images have width/height (no layout shift) and meaningful alt text.
7. Dark mode (if supported) has no unreadable text.
8. Page title and meta description are set.
9. Keyboard focus order follows visual order.
10. Nothing logs errors to the console.

End with the three fixes that would most improve the page.
