---
title: "Cursor rules for SvelteKit"
description: "A .cursor/rules/sveltekit.mdc file for load functions, form actions and Svelte 5 runes."
kind: template
tags: ["cursor-rules", "cursor", "svelte", "sveltekit"]
variables: ["validation_library", "test_command"]
source: https://commandvault.ai/commands/cursor-rules-for-sveltekit-321f00ef
license: CC-BY-4.0
---

---
description: SvelteKit conventions
globs: ["src/**/*.svelte","src/**/*.ts"]
alwaysApply: false
---

# SvelteKit

- Use Svelte 5 runes ($state, $derived, $props, $effect); avoid legacy stores in new code.
- Load data in `+page.server.ts` / `+layout.server.ts`; only use universal `+page.ts` loads for public data.
- Mutations through form actions with progressive enhancement (`use:enhance`).
- Secrets only in `$env/static/private` or `$env/dynamic/private`, never in client code.
- Shared UI in `src/lib/components`, server utilities in `src/lib/server`.
- Validate form data with {{validation_library}} and return `fail(400, ...)` with field errors.

## When you change code
- Follow the patterns in the nearest existing file before inventing new ones.
- Add or update a test for behavior changes; run `{{test_command}}`.
- Keep diffs small; explain anything surprising in your reply.
