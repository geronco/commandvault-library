---
title: "Universal Dark-Mode Toggle"
description: "Persist a user’s light/dark preference across sessions and devices."
kind: prompt
tags: ["dark mode", "dark"]
variables: ["goal", "stack"]
source: https://commandvault.ai/commands/universal-dark-mode-toggle-80b6fd46
license: CC-BY-4.0
---

Add a light/dark theme toggle that remembers each person's choice.

Stack: {{stack}}
Default for new visitors: {{goal}}

Requirements:
1. Three options: Light, Dark and System. Apply the default above until someone chooses.
2. Save the choice in localStorage, and in the user's profile when they're logged in, so it follows them across devices.
3. Apply the theme before first paint (an inline script or server-rendered class), so there's no flash of the wrong theme.
4. Drive colors from CSS variables, and check text contrast meets WCAG AA in both themes.
5. The toggle must be a real button with an accessible name and the current state announced.

List the files you'll change, then give me a test checklist: first visit, switch and reload, log in on a second browser, and system theme changes.
