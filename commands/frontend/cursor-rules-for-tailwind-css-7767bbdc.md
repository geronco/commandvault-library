---
title: "Cursor rules for Tailwind CSS"
description: "A .cursor/rules/tailwind.mdc that keeps utility classes consistent, readable and on-brand."
kind: template
tags: ["cursor-rules", "cursor", "tailwind", "css"]
variables: ["tailwind_config_path", "dark_mode_strategy", "test_command"]
source: https://commandvault.ai/commands/cursor-rules-for-tailwind-css-7767bbdc
license: CC-BY-4.0
---

---
description: Tailwind CSS conventions
globs: ["**/*.tsx","**/*.jsx","**/*.vue","**/*.svelte","**/*.html"]
alwaysApply: false
---

# Tailwind CSS

- Use theme tokens from `{{tailwind_config_path}}` (colors, spacing, radius); no arbitrary values like `text-[#123456]` unless the design requires it.
- Mobile first: base classes for phones, then `sm:`, `md:`, `lg:`.
- Order classes: layout → box → typography → color → state (or rely on the Prettier Tailwind plugin).
- Extract repeated class groups (3+ uses) into a component, not `@apply`.
- Every interactive element gets visible `focus-visible:` styles.
- Dark mode via `{{dark_mode_strategy}}`; check contrast in both themes.

## When you change code
- Follow the patterns in the nearest existing file before inventing new ones.
- Add or update a test for behavior changes; run `{{test_command}}`.
- Keep diffs small; explain anything surprising in your reply.
