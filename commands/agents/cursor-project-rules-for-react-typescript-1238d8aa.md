---
title: "Cursor project rules for React + TypeScript"
description: "A .cursor/rules/*.mdc file that keeps Cursor's agent consistent with your React codebase."
kind: template
tags: ["cursor-rules", "cursor", "react", "typescript"]
variables: ["project_name", "Component", "data_layer", "styling_approach", "tokens_path", "test_folder", "lint_command"]
source: https://commandvault.ai/commands/cursor-project-rules-for-react-typescript-1238d8aa
license: CC-BY-4.0
---

---
description: React + TypeScript conventions for {{project_name}}
globs: ["src/**/*.tsx", "src/**/*.ts"]
alwaysApply: false
---

# React + TypeScript rules

## Components
- Function components only. Props typed with an exported `type {{Component}}Props`.
- One component per file; file name matches the component.
- Keep components under ~150 lines; extract hooks for logic.

## State and data
- Local state first; lift only when two siblings need it.
- Data fetching through {{data_layer}}; never call fetch directly in components.
- No `any`. Use `unknown` and narrow.

## Styling
- {{styling_approach}} only. No inline style objects except for dynamic values.
- Use design tokens from `{{tokens_path}}`; never hard-code colors.

## Accessibility
- Every interactive element is a real button/link/input with a label.
- Images need meaningful alt text or alt="" when decorative.

## When you change code
- Update or add a test in `{{test_folder}}` for the behavior you changed.
- Run `{{lint_command}}` and fix what you introduced.
