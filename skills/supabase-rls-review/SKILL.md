---
name: supabase-rls-review
description: Review Supabase row-level security. Use when the user adds or changes tables, policies, views or database functions in a Supabase project, or asks for a security check.
---

# Supabase RLS review

For each table in the change (or every table in `public` when asked for a full review):

1. **RLS enabled?** `alter table … enable row level security` must be in the same migration that creates the table.
2. **Policies match intent.** Select/insert/update/delete each considered. `using` limits rows you can see; `with check` limits rows you can write. Updates usually need both.
3. **Ownership via auth.uid()**, written as `(select auth.uid())` for performance. Never trust a user_id sent by the client.
4. **No `using (true)` on private data.** Public read is fine for public content only.
5. **Views:** use `security_invoker = true` so RLS applies.
6. **Functions:** `security definer` functions must set `search_path = ''`, check the caller themselves, and have execute revoked from `anon`/`authenticated` unless intended.
7. **Service role key** only on the server, never in client bundles or logs.

Report findings as: table → problem → exact SQL fix. Run the Supabase security advisors if available.
