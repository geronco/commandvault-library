---
title: "Cursor rules for Next.js App Router"
description: "A .cursor/rules/nextjs.mdc file for server components, data fetching, routing and caching done right."
kind: template
tags: ["cursor-rules", "cursor", "nextjs", "react"]
variables: ["validation_library", "test_command"]
source: https://commandvault.ai/commands/cursor-rules-for-next-js-app-router-63d6701b
license: CC-BY-4.0
---

---
description: Next.js App Router conventions
globs: ["app/**/*.tsx","app/**/*.ts","src/app/**"]
alwaysApply: false
---

# Next.js App Router

- Server Components by default. Add "use client" only for state, effects, browser APIs or event handlers, and keep client components small and at the leaves.
- Fetch data in Server Components or route handlers, never with useEffect for initial data.
- `params` and `searchParams` are async: `const { slug } = await params`.
- Use `generateMetadata` for titles/descriptions on every page; set `alternates.canonical`.
- Mutations: Server Actions or route handlers in `app/api`; validate input with {{validation_library}}.
- Images via next/image with width/height; fonts via next/font.
- Use `loading.tsx`, `error.tsx` and `not-found.tsx` instead of ad-hoc spinners and checks.
- Never import server-only modules (database clients, secrets) into client components.

## When you change code
- Follow the patterns in the nearest existing file before inventing new ones.
- Add or update a test for behavior changes; run `{{test_command}}`.
- Keep diffs small; explain anything surprising in your reply.
