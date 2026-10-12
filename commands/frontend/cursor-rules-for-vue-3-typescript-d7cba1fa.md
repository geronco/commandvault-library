---
title: "Cursor rules for Vue 3 + TypeScript"
description: "A .cursor/rules/vue.mdc file for Composition API, typed props and Pinia stores."
kind: template
tags: ["cursor-rules", "cursor", "vue", "typescript"]
variables: ["styling_approach", "test_command"]
source: https://commandvault.ai/commands/cursor-rules-for-vue-3-typescript-d7cba1fa
license: CC-BY-4.0
---

---
description: Vue 3 + TypeScript conventions
globs: ["src/**/*.vue","src/**/*.ts"]
alwaysApply: false
---

# Vue 3

- `<script setup lang="ts">` in every component; no Options API in new code.
- Type props with `defineProps<{ ... }>()` and emits with `defineEmits<{ ... }>()`.
- Shared state in Pinia stores under `src/stores`; components don't talk to the API directly.
- Composables (`useSomething`) in `src/composables` for reusable logic.
- Use `computed` for derived values, not watchers.
- Keep templates simple: move logic over two conditions into computed properties.
- Styling: {{styling_approach}}; scoped styles by default.

## When you change code
- Follow the patterns in the nearest existing file before inventing new ones.
- Add or update a test for behavior changes; run `{{test_command}}`.
- Keep diffs small; explain anything surprising in your reply.
