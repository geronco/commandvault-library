---
name: accessibility-check
description: Check and fix accessibility issues in UI code. Use when building or reviewing pages, forms or components, or when the user asks about a11y or WCAG.
---

# Accessibility check

Go through the component and fix what fails:

- **Semantics:** real buttons and links (not clickable divs), one h1, headings in order, lists as lists, landmarks (header, nav, main).
- **Names:** every input has a label; icon-only buttons have aria-label; images have alt (empty alt for decorative).
- **Keyboard:** everything works with Tab/Shift+Tab/Enter/Space/Escape; focus is visible; dialogs trap and return focus.
- **Contrast:** text at least 4.5:1 (3:1 for large text and UI parts) in both light and dark themes.
- **Motion:** respect prefers-reduced-motion.
- **Forms:** errors are announced (aria-live or aria-describedby) and say how to fix them.
- **Targets:** at least 24×24 px.

Report each issue with the fix you made. If a tool like axe or Lighthouse is available, run it and include the result.
