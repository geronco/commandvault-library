---
name: nextjs-app-router
description: Follow current Next.js App Router conventions. Use when creating or editing routes, layouts, data fetching, caching or metadata in a Next.js app with an app/ directory.
---

# Next.js App Router

- Components are **server components by default**. Add "use client" only for state, effects, event handlers or browser APIs, and keep client components small and low in the tree.
- Fetch data in server components or route handlers, not in `useEffect`.
- `params` and `searchParams` are **Promises** in recent versions: `const { slug } = await params`. Check the installed version's docs in node_modules/next/dist/docs when unsure.
- Mutations: server actions or route handlers; validate input (e.g. zod) and check auth first.
- Caching is explicit: decide per route whether it's static, revalidated or dynamic, and invalidate with tags after writes.
- Metadata via `export const metadata` or `generateMetadata`; one canonical URL per page.
- Images with next/image, fonts with next/font, links with next/link.
- Never import server-only modules (DB clients, secrets) into client components.

Before finishing: run lint, type check and build, and load the page to check the console.
