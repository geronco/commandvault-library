---
title: "Build an accessible React component"
description: "Get a production-ready component with keyboard support, ARIA and tests."
kind: prompt
tags: ["react", "accessibility", "components"]
variables: ["component", "use_case", "styling"]
source: https://commandvault.ai/commands/build-an-accessible-react-component-592a69d5
license: CC-BY-4.0
---

Build a {{component}} component in React + TypeScript for {{use_case}}.

Requirements:
- Fully keyboard operable (Tab, Shift+Tab, Enter, Space, Escape, arrow keys where it makes sense).
- Correct roles and ARIA attributes; no ARIA where native HTML already works.
- Visible focus styles that pass WCAG 2.2 AA contrast.
- Props are typed, documented with JSDoc, and have sensible defaults.
- No external UI libraries. Styling with {{styling}}.

Return: the component file, a short usage example, and a test file (Testing Library) covering keyboard use and screen-reader labels.
