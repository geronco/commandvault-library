---
title: "Convert a design screenshot into clean HTML/CSS"
description: "Turn a mockup into semantic, responsive markup without a framework."
kind: prompt
tags: ["html", "css", "responsive"]
variables: ["screen_name", "breakpoints"]
source: https://commandvault.ai/commands/convert-a-design-screenshot-into-clean-html-css-6e824cb6
license: CC-BY-4.0
---

I'm attaching a screenshot of {{screen_name}}. Recreate it as semantic HTML and modern CSS.

Rules:
- Mobile first; breakpoints at {{breakpoints}}.
- Use CSS custom properties for colors, spacing and radius; put them in :root.
- Flexbox/grid only, no absolute positioning for layout.
- Use real elements (nav, main, section, button, label) — no div soup.
- Where the screenshot is ambiguous, pick the simplest option and list your assumptions at the end.

Output one HTML file with a <style> block.
