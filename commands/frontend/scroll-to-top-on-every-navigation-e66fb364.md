---
title: "Scroll-to-Top on Every Navigation"
description: "This commands ensures that when a user lands on any page of an application, the user gets taken to the very top of that page, and not the position the user was on the previous page."
kind: prompt
tags: ["top of the page", "page position", "fixed page position"]
variables: ["goal", "stack"]
source: https://commandvault.ai/commands/scroll-to-top-on-every-navigation-e66fb364
license: CC-BY-4.0
---

Make every navigation in my app start at the top of the new page.

Stack: {{stack}}
Exceptions that must keep or restore scroll position: {{goal}}

Requirements:
1. On each route change, scroll to (0, 0) before or as the new page paints, so there's no visible jump.
2. Respect the exceptions above. Browser back/forward should restore the previous position unless I said otherwise, and links to #anchors should scroll to the anchor.
3. Handle scrollable containers too, not just window, if the layout scrolls inside a main element.
4. Move keyboard focus to the new page's main heading so screen-reader users know the page changed.
5. Use the framework's built-in mechanism if it has one before writing custom code, and explain why.

Tell me how to test it: three navigation scenarios to click through and what should happen in each.
