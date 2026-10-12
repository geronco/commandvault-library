# CommandVault library

Community-voted AI commands from [commandvault.ai](https://commandvault.ai): prompts, `CLAUDE.md` / `AGENTS.md` templates, Cursor rules, Claude Code slash commands and subagents, Agent Skills and MCP servers. Every item has fill-in `{{blanks}}` and links back to its page, where you can vote, comment and fill the blanks in the browser.

This repo is synced automatically every day from the site. To suggest a change, comment on the item's page on commandvault.ai (pull requests to the generated files are overwritten by the next sync).

## Use it from your AI tool

**MCP server (no key needed):**

```bash
claude mcp add --transport http commandvault https://commandvault.ai/api/mcp
```

Setup for Cursor, VS Code, Codex, Claude Desktop and Gemini CLI: [commandvault.ai/mcp](https://commandvault.ai/mcp).

**Claude Code plugin** (MCP server + a lookup skill + `/vault` command):

```bash
/plugin marketplace add geronco/commandvault-library
/plugin install commandvault@commandvault
```

## Layout

| Folder | What's in it |
|---|---|
| `commands/<community>/` | Prompts, templates and checklists as Markdown with front matter |
| `skills/<name>/SKILL.md` | Agent Skills, ready to copy into `.claude/skills/` |
| `mcp-servers/<name>.json` | MCP server configs (`mcpServers` format) |
| `data/commands.json`, `data/commands.csv` | Everything in one file, for datasets and scripts |

## License

Content: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Credit "CommandVault (commandvault.ai)" with a link. Code (scripts, workflow, plugin): MIT.

<!-- index:start -->
_Synced from [commandvault.ai](https://commandvault.ai) on 2026-10-12: 95 items._

## Context files and templates (CLAUDE.md, AGENTS.md, Cursor rules) (40)

| | Description |
|---|---|
| [AGENTS.md for a monorepo](commands/agents/agents-md-for-a-monorepo-e4aa4b99.md) · [web](https://commandvault.ai/commands/agents-md-for-a-monorepo-e4aa4b99) | One root AGENTS.md plus per-package overrides so Codex, Cursor, Jules and other agents work the same way everywhere. |
| [Blameless postmortem write-up](commands/devops/blameless-postmortem-write-up-681657b8.md) · [web](https://commandvault.ai/commands/blameless-postmortem-write-up-681657b8) | Turn incident notes into a postmortem the team will actually read. |
| [Claude Code custom slash command: /review](commands/agents/claude-code-custom-slash-command-review-db7a5205.md) · [web](https://commandvault.ai/commands/claude-code-custom-slash-command-review-db7a5205) | Save as .claude/commands/review.md to get a one-word, consistent code review in Claude Code. |
| [Claude Code hooks: format on save and block dangerous commands](commands/agents/claude-code-hooks-format-on-save-and-block-dangerous-commands-610b844d.md) · [web](https://commandvault.ai/commands/claude-code-hooks-format-on-save-and-block-dangerous-commands-610b844d) | A .claude/settings.json with hooks that auto-format edited files and stop risky shell commands. |
| [Claude Code slash command: /commit](commands/agents/claude-code-slash-command-commit-584b2474.md) · [web](https://commandvault.ai/commands/claude-code-slash-command-commit-584b2474) | Save as .claude/commands/commit.md for clean, conventional commit messages from your staged changes. |
| [Claude Code slash command: /fix-issue](commands/agents/claude-code-slash-command-fix-issue-2de5b0f5.md) · [web](https://commandvault.ai/commands/claude-code-slash-command-fix-issue-2de5b0f5) | Save as .claude/commands/fix-issue.md: give it a GitHub issue number and it reproduces, fixes and tests. |
| [Claude Code slash command: /plan](commands/agents/claude-code-slash-command-plan-3082aeed.md) · [web](https://commandvault.ai/commands/claude-code-slash-command-plan-3082aeed) | Save as .claude/commands/plan.md to make Claude investigate and plan before writing any code. |
| [Claude Code subagent: code reviewer](commands/agents/claude-code-subagent-code-reviewer-03274b7f.md) · [web](https://commandvault.ai/commands/claude-code-subagent-code-reviewer-03274b7f) | A .claude/agents/code-reviewer.md that reviews changes for bugs, risk and simplicity. |
| [Claude Code subagent: database migration checker](commands/agents/claude-code-subagent-database-migration-checker-ff16bd58.md) · [web](https://commandvault.ai/commands/claude-code-subagent-database-migration-checker-ff16bd58) | A .claude/agents/migration-checker.md that reviews migrations for locks, data loss and rollback. |
| [Claude Code subagent: debugger](commands/agents/claude-code-subagent-debugger-4afa4d06.md) · [web](https://commandvault.ai/commands/claude-code-subagent-debugger-4afa4d06) | A .claude/agents/debugger.md that finds root causes instead of patching symptoms. |
| [Claude Code subagent: docs writer](commands/agents/claude-code-subagent-docs-writer-54a75804.md) · [web](https://commandvault.ai/commands/claude-code-subagent-docs-writer-54a75804) | A .claude/agents/docs-writer.md that keeps README and docs in sync with the code. |
| [Claude Code subagent: refactorer](commands/agents/claude-code-subagent-refactorer-3a6be62c.md) · [web](https://commandvault.ai/commands/claude-code-subagent-refactorer-3a6be62c) | A .claude/agents/refactorer.md that simplifies code without changing behavior. |
| [Claude Code subagent: security auditor](commands/agents/claude-code-subagent-security-auditor-b97dec0f.md) · [web](https://commandvault.ai/commands/claude-code-subagent-security-auditor-b97dec0f) | A .claude/agents/security-auditor.md that checks changes for the vulnerabilities attackers try first. |
| [Claude Code subagent: test writer](commands/agents/claude-code-subagent-test-writer-dd7b50c1.md) · [web](https://commandvault.ai/commands/claude-code-subagent-test-writer-dd7b50c1) | A .claude/agents/test-writer.md subagent that writes focused tests in your project's style. |
| [CLAUDE.md template for a Django project](commands/agents/claude-md-template-for-a-django-project-a6598bdb.md) · [web](https://commandvault.ai/commands/claude-md-template-for-a-django-project-a6598bdb) | Give Claude Code your Django project's commands, app layout and rules in one file. |
| [CLAUDE.md template for a Go service](commands/agents/claude-md-template-for-a-go-service-a256d8da.md) · [web](https://commandvault.ai/commands/claude-md-template-for-a-go-service-a256d8da) | Tell Claude Code how your Go service is built, tested and structured. |
| [CLAUDE.md template for a Laravel app](commands/agents/claude-md-template-for-a-laravel-app-22d119b4.md) · [web](https://commandvault.ai/commands/claude-md-template-for-a-laravel-app-22d119b4) | Project memory for Claude Code in Laravel: Artisan commands, structure and conventions. |
| [CLAUDE.md template for a Next.js + Supabase app](commands/agents/claude-md-template-for-a-next-js-supabase-app-9261f33c.md) · [web](https://commandvault.ai/commands/claude-md-template-for-a-next-js-supabase-app-9261f33c) | A ready-to-edit CLAUDE.md that tells Claude Code how your Next.js app is built, tested and deployed. |
| [CLAUDE.md template for a Python FastAPI service](commands/agents/claude-md-template-for-a-python-fastapi-service-6a36a740.md) · [web](https://commandvault.ai/commands/claude-md-template-for-a-python-fastapi-service-6a36a740) | Project memory for Claude Code on a Python API: commands, layout, testing and the rules that keep it safe. |
| [CLAUDE.md template for a Ruby on Rails app](commands/agents/claude-md-template-for-a-ruby-on-rails-app-dadb0ceb.md) · [web](https://commandvault.ai/commands/claude-md-template-for-a-ruby-on-rails-app-dadb0ceb) | Project memory for Claude Code in a Rails codebase: commands, structure and Rails-specific rules. |
| [Cursor project rules for React + TypeScript](commands/agents/cursor-project-rules-for-react-typescript-1238d8aa.md) · [web](https://commandvault.ai/commands/cursor-project-rules-for-react-typescript-1238d8aa) | A .cursor/rules/*.mdc file that keeps Cursor's agent consistent with your React codebase. |
| [Cursor rules for Go](commands/backend/cursor-rules-for-go-0021fab7.md) · [web](https://commandvault.ai/commands/cursor-rules-for-go-0021fab7) | A .cursor/rules/go.mdc for idiomatic errors, contexts, interfaces and tests. |
| [Cursor rules for Next.js App Router](commands/frontend/cursor-rules-for-next-js-app-router-63d6701b.md) · [web](https://commandvault.ai/commands/cursor-rules-for-next-js-app-router-63d6701b) | A .cursor/rules/nextjs.mdc file for server components, data fetching, routing and caching done right. |
| [Cursor rules for Prisma](commands/backend/cursor-rules-for-prisma-4276d69f.md) · [web](https://commandvault.ai/commands/cursor-rules-for-prisma-4276d69f) | A .cursor/rules/prisma.mdc for schema changes, migrations and efficient queries. |
| [Cursor rules for Python projects](commands/backend/cursor-rules-for-python-projects-aae1afcd.md) · [web](https://commandvault.ai/commands/cursor-rules-for-python-projects-aae1afcd) | A .cursor/rules/python.mdc for typed, tested, well-structured Python. |
| [Cursor rules for Supabase](commands/backend/cursor-rules-for-supabase-d4b5ec46.md) · [web](https://commandvault.ai/commands/cursor-rules-for-supabase-d4b5ec46) | A .cursor/rules/supabase.mdc covering row-level security, migrations, auth and safe client usage. |
| [Cursor rules for SvelteKit](commands/frontend/cursor-rules-for-sveltekit-321f00ef.md) · [web](https://commandvault.ai/commands/cursor-rules-for-sveltekit-321f00ef) | A .cursor/rules/sveltekit.mdc file for load functions, form actions and Svelte 5 runes. |
| [Cursor rules for Tailwind CSS](commands/frontend/cursor-rules-for-tailwind-css-7767bbdc.md) · [web](https://commandvault.ai/commands/cursor-rules-for-tailwind-css-7767bbdc) | A .cursor/rules/tailwind.mdc that keeps utility classes consistent, readable and on-brand. |
| [Cursor rules for Vue 3 + TypeScript](commands/frontend/cursor-rules-for-vue-3-typescript-d7cba1fa.md) · [web](https://commandvault.ai/commands/cursor-rules-for-vue-3-typescript-d7cba1fa) | A .cursor/rules/vue.mdc file for Composition API, typed props and Pinia stores. |
| [Form validation schema with friendly errors](commands/frontend/form-validation-schema-with-friendly-errors-922d9ec3.md) · [web](https://commandvault.ai/commands/form-validation-schema-with-friendly-errors-922d9ec3) | Generate a Zod schema plus human error messages for any form. |
| [GitHub Actions CI for a Node app](commands/devops/github-actions-ci-for-a-node-app-f6830a4e.md) · [web](https://commandvault.ai/commands/github-actions-ci-for-a-node-app-f6830a4e) | Lint, typecheck, test and build on every pull request, with caching. |
| [GitHub Copilot custom instructions file](commands/agents/github-copilot-custom-instructions-file-5a9bdedb.md) · [web](https://commandvault.ai/commands/github-copilot-custom-instructions-file-5a9bdedb) | A .github/copilot-instructions.md that makes Copilot chat and agent mode follow your repo's rules. |
| [KPI dashboard spec](commands/data/kpi-dashboard-spec-83c7b4d5.md) · [web](https://commandvault.ai/commands/kpi-dashboard-spec-83c7b4d5) | Define metrics precisely before anyone builds a chart. |
| [Make flashcards from my notes](commands/learning/make-flashcards-from-my-notes-b50fd58d.md) · [web](https://commandvault.ai/commands/make-flashcards-from-my-notes-b50fd58d) | Turn notes into spaced-repetition cards that test understanding. |
| [Meeting notes to action items](commands/productivity/meeting-notes-to-action-items-6460abec.md) · [web](https://commandvault.ai/commands/meeting-notes-to-action-items-6460abec) | Turn messy notes or a transcript into decisions and owners. |
| [Plain-English privacy policy draft](commands/security/plain-english-privacy-policy-draft-fa6e798d.md) · [web](https://commandvault.ai/commands/plain-english-privacy-policy-draft-fa6e798d) | A readable first draft to review with a lawyer. |
| [Project context pack for coding agents](commands/agents/project-context-pack-for-coding-agents-7fe49393.md) · [web](https://commandvault.ai/commands/project-context-pack-for-coding-agents-7fe49393) | A reusable AGENTS.md that stops your AI agent from guessing. |
| [README that people actually read](commands/writing/readme-that-people-actually-read-d16d647e.md) · [web](https://commandvault.ai/commands/readme-that-people-actually-read-d16d647e) | A clear README for any project in the right order. |
| [SEO blog post brief](commands/marketing/seo-blog-post-brief-dec823ff.md) · [web](https://commandvault.ai/commands/seo-blog-post-brief-dec823ff) | Everything a writer needs to rank for one keyword. |
| [Write a reusable AI skill file](commands/agents/write-a-reusable-ai-skill-file-8b9711c7.md) · [web](https://commandvault.ai/commands/write-a-reusable-ai-skill-file-8b9711c7) | Package a repeatable task into instructions an agent can load on demand. |

## Prompts, workflows and checklists (55)

| | Description |
|---|---|
| [30-day learning plan for any skill](commands/learning/30-day-learning-plan-for-any-skill-e533dd8c.md) · [web](https://commandvault.ai/commands/30-day-learning-plan-for-any-skill-e533dd8c) | A realistic daily plan with projects and checkpoints. |
| [Add a background job safely](commands/backend/add-a-background-job-safely-ffa03721.md) · [web](https://commandvault.ai/commands/add-a-background-job-safely-ffa03721) | Move slow work out of the request with retries and idempotency. |
| [Autosave Form Drafts](commands/frontend/autosave-form-drafts-13cb65f4.md) · [web](https://commandvault.ai/commands/autosave-form-drafts-13cb65f4) | Prevent data loss on long forms |
| [Break a big project into a plan](commands/productivity/break-a-big-project-into-a-plan-a686a13c.md) · [web](https://commandvault.ai/commands/break-a-big-project-into-a-plan-a686a13c) | From a vague goal to milestones, tasks and a first step for today. |
| [Build an accessible React component](commands/frontend/build-an-accessible-react-component-592a69d5.md) · [web](https://commandvault.ai/commands/build-an-accessible-react-component-592a69d5) | Get a production-ready component with keyboard support, ARIA and tests. |
| [Code review as a senior engineer](commands/agents/code-review-as-a-senior-engineer-2c52c2a9.md) · [web](https://commandvault.ai/commands/code-review-as-a-senior-engineer-2c52c2a9) | A focused review that finds real bugs instead of nitpicks. |
| [Cold email that gets replies](commands/marketing/cold-email-that-gets-replies-b9351e2e.md) · [web](https://commandvault.ai/commands/cold-email-that-gets-replies-b9351e2e) | Short, specific outreach with follow-ups. |
| [Convert a design screenshot into clean HTML/CSS](commands/frontend/convert-a-design-screenshot-into-clean-html-css-6e824cb6.md) · [web](https://commandvault.ai/commands/convert-a-design-screenshot-into-clean-html-css-6e824cb6) | Turn a mockup into semantic, responsive markup without a framework. |
| [Convert CLAUDE.md into AGENTS.md, GEMINI.md and Cursor rules](commands/agents/convert-claude-md-into-agents-md-gemini-md-and-cursor-rules-9a820aa4.md) · [web](https://commandvault.ai/commands/convert-claude-md-into-agents-md-gemini-md-and-cursor-rules-9a820aa4) | Write your project rules once and get the file every major coding agent reads. |
| [Database migration safety review](commands/backend/database-migration-safety-review-abd8f75a.md) · [web](https://commandvault.ai/commands/database-migration-safety-review-abd8f75a) | Catch locking, data loss and rollback problems before running a migration. |
| [Debounced Live Search](commands/frontend/debounced-live-search-a8ec2c2f.md) · [web](https://commandvault.ai/commands/debounced-live-search-a8ec2c2f) | Reduce server load while users type |
| [Decision matrix for a tough choice](commands/productivity/decision-matrix-for-a-tough-choice-af0713bb.md) · [web](https://commandvault.ai/commands/decision-matrix-for-a-tough-choice-af0713bb) | Compare options against weighted criteria and surface what really matters. |
| [Definition of done block for agent context files](commands/agents/definition-of-done-block-for-agent-context-files-41e7512b.md) · [web](https://commandvault.ai/commands/definition-of-done-block-for-agent-context-files-41e7512b) | Paste into CLAUDE.md or AGENTS.md so agents stop declaring victory before the work is verified. |
| [Design a REST API for a feature](commands/backend/design-a-rest-api-for-a-feature-4bfdfef6.md) · [web](https://commandvault.ai/commands/design-a-rest-api-for-a-feature-4bfdfef6) | Endpoints, payloads, status codes and edge cases before you write code. |
| [Edit for clarity without changing my voice](commands/writing/edit-for-clarity-without-changing-my-voice-9bc9086d.md) · [web](https://commandvault.ai/commands/edit-for-clarity-without-changing-my-voice-9bc9086d) | Tighter sentences, same personality. |
| [Explain a technical topic to non-technical readers](commands/writing/explain-a-technical-topic-to-non-technical-readers-de7ca3e8.md) · [web](https://commandvault.ai/commands/explain-a-technical-topic-to-non-technical-readers-de7ca3e8) | Clear explanations with analogies and no jargon. |
| [Explore a new dataset](commands/data/explore-a-new-dataset-6a1638a0.md) · [web](https://commandvault.ai/commands/explore-a-new-dataset-6a1638a0) | A first-hour analysis plan for any CSV or table. |
| [Find and fix React re-render problems](commands/frontend/find-and-fix-react-re-render-problems-89688638.md) · [web](https://commandvault.ai/commands/find-and-fix-react-re-render-problems-89688638) | Diagnose why a component tree is slow and get concrete fixes. |
| [Find leaked secrets and rotate them](commands/security/find-leaked-secrets-and-rotate-them-ab675ad1.md) · [web](https://commandvault.ai/commands/find-leaked-secrets-and-rotate-them-ab675ad1) | Locate exposed keys in a repo and plan a safe rotation. |
| [Generate an AGENTS.md from an existing codebase](commands/agents/generate-an-agents-md-from-an-existing-codebase-0a21e41d.md) · [web](https://commandvault.ai/commands/generate-an-agents-md-from-an-existing-codebase-0a21e41d) | Have your coding agent read the repo and write an accurate AGENTS.md instead of guessing. |
| [Graceful 404 Fallback](commands/frontend/graceful-404-fallback-e907f8bc.md) · [web](https://commandvault.ai/commands/graceful-404-fallback-e907f8bc) | Keep users oriented on bad URLs |
| [Harden authentication flows](commands/security/harden-authentication-flows-e2a1ff85.md) · [web](https://commandvault.ai/commands/harden-authentication-flows-e2a1ff85) | Review sign-up, login and reset flows for common account takeover holes. |
| [Incident response first 30 minutes](commands/devops/incident-response-first-30-minutes-8f32b3ea.md) · [web](https://commandvault.ai/commands/incident-response-first-30-minutes-8f32b3ea) | A calm, ordered playbook for when production is down. |
| [Instant Email Verification Link](commands/backend/instant-email-verification-link-507dce29.md) · [web](https://commandvault.ai/commands/instant-email-verification-link-507dce29) | Verify new accounts seamlessly |
| [Landing page copy that converts](commands/marketing/landing-page-copy-that-converts-69950bfb.md) · [web](https://commandvault.ai/commands/landing-page-copy-that-converts-69950bfb) | Headline, sections and CTA written for one specific audience. |
| [Local Business Directory System](commands/backend/local-business-directory-system-d4d6d361.md) · [web](https://commandvault.ai/commands/local-business-directory-system-d4d6d361) | A full template including initial command and knowledge base to build a local business directory service that you can apply to your local community and start helping small businesses while making a profit. |
| [Model a Postgres schema with row-level security](commands/backend/model-a-postgres-schema-with-row-level-security-4c536980.md) · [web](https://commandvault.ai/commands/model-a-postgres-schema-with-row-level-security-4c536980) | Tables, indexes and RLS policies for a multi-user feature. |
| [One-Click Password Reset](commands/backend/one-click-password-reset-182f1360.md) · [web](https://commandvault.ai/commands/one-click-password-reset-182f1360) | Fast, secure password recovery |
| [Outline a long-form article](commands/writing/outline-a-long-form-article-11c9e7cf.md) · [web](https://commandvault.ai/commands/outline-a-long-form-article-11c9e7cf) | Structure, argument and hooks before you write a word. |
| [Plan → implement → verify loop](commands/agents/plan-implement-verify-loop-07076966.md) · [web](https://commandvault.ai/commands/plan-implement-verify-loop-07076966) | Make an AI agent plan first, work in small steps and prove each one. |
| [Practice interview with feedback](commands/learning/practice-interview-with-feedback-b20154da.md) · [web](https://commandvault.ai/commands/practice-interview-with-feedback-b20154da) | Mock interview for any role, one question at a time. |
| [Pre-launch UI polish checklist](commands/frontend/pre-launch-ui-polish-checklist-cdf82223.md) · [web](https://commandvault.ai/commands/pre-launch-ui-polish-checklist-cdf82223) | Walk a page through the details users notice before you ship. |
| [Product launch plan](commands/marketing/product-launch-plan-b423e1f5.md) · [web](https://commandvault.ai/commands/product-launch-plan-b423e1f5) | Two weeks of launch tasks across channels, day by day. |
| [Repurpose one piece into a week of posts](commands/marketing/repurpose-one-piece-into-a-week-of-posts-a052b671.md) · [web](https://commandvault.ai/commands/repurpose-one-piece-into-a-week-of-posts-a052b671) | Turn an article, video or talk into social content for each platform. |
| [Role-Based Access Control](commands/backend/role-based-access-control-5cccc8f4.md) · [web](https://commandvault.ai/commands/role-based-access-control-5cccc8f4) | Limit sensitive features to the right people |
| [Safety rules block for coding agents](commands/agents/safety-rules-block-for-coding-agents-31955c3a.md) · [web](https://commandvault.ai/commands/safety-rules-block-for-coding-agents-31955c3a) | A 'never do' section for CLAUDE.md / AGENTS.md that prevents the expensive mistakes. |
| [Sanity-check an A/B test result](commands/data/sanity-check-an-a-b-test-result-c249284a.md) · [web](https://commandvault.ai/commands/sanity-check-an-a-b-test-result-c249284a) | Decide whether an experiment result is real before you ship it. |
| [Scroll-to-Top on Every Navigation](commands/frontend/scroll-to-top-on-every-navigation-e66fb364.md) · [web](https://commandvault.ai/commands/scroll-to-top-on-every-navigation-e66fb364) | This commands ensures that when a user lands on any page of an application, the user gets taken to the very top of that page, and not the position the user was on the previous page. |
| [Set up Claude Code in an existing repo](commands/agents/set-up-claude-code-in-an-existing-repo-faaec9e5.md) · [web](https://commandvault.ai/commands/set-up-claude-code-in-an-existing-repo-faaec9e5) | A first-session prompt that has Claude Code explore your repo and create CLAUDE.md, commands and settings. |
| [Set up structured logging and alerts](commands/devops/set-up-structured-logging-and-alerts-c5ff1587.md) · [web](https://commandvault.ai/commands/set-up-structured-logging-and-alerts-c5ff1587) | Logs you can search and alerts that only fire when it matters. |
| [Skeleton Loading Placeholders](commands/frontend/skeleton-loading-placeholders-95a8cd27.md) · [web](https://commandvault.ai/commands/skeleton-loading-placeholders-95a8cd27) | Smooth perceived performance |
| [Spreadsheet formula helper](commands/data/spreadsheet-formula-helper-6c5eaab3.md) · [web](https://commandvault.ai/commands/spreadsheet-formula-helper-6c5eaab3) | Get the exact Excel / Google Sheets formula with an explanation. |
| [Summarize a paper or long article](commands/learning/summarize-a-paper-or-long-article-71816494.md) · [web](https://commandvault.ai/commands/summarize-a-paper-or-long-article-71816494) | Key ideas, evidence and limitations in five minutes. |
| [Teach me with the Feynman technique](commands/learning/teach-me-with-the-feynman-technique-b8f97557.md) · [web](https://commandvault.ai/commands/teach-me-with-the-feynman-technique-b8f97557) | Learn a concept by explaining it simply and finding the gaps. |
| [Threat model a new feature](commands/security/threat-model-a-new-feature-e077b2c4.md) · [web](https://commandvault.ai/commands/threat-model-a-new-feature-e077b2c4) | STRIDE-style review that ends with concrete mitigations. |
| [Turn a vague request into a precise prompt](commands/agents/turn-a-vague-request-into-a-precise-prompt-68b67569.md) · [web](https://commandvault.ai/commands/turn-a-vague-request-into-a-precise-prompt-68b67569) | Rewrite any rough ask into a prompt with role, context, constraints and output format. |
| [Universal Dark-Mode Toggle](commands/frontend/universal-dark-mode-toggle-80b6fd46.md) · [web](https://commandvault.ai/commands/universal-dark-mode-toggle-80b6fd46) | Persist a user’s light/dark preference across sessions and devices. |
| [Update CLAUDE.md after a coding session](commands/agents/update-claude-md-after-a-coding-session-a460fb4e.md) · [web](https://commandvault.ai/commands/update-claude-md-after-a-coding-session-a460fb4e) | End-of-session prompt that turns what the agent learned into permanent project memory. |
| [Web app security review](commands/security/web-app-security-review-30709308.md) · [web](https://commandvault.ai/commands/web-app-security-review-30709308) | Check an app against the issues attackers try first. |
| [Weekly review and planning](commands/productivity/weekly-review-and-planning-dd2b9a68.md) · [web](https://commandvault.ai/commands/weekly-review-and-planning-dd2b9a68) | A 30-minute ritual to close the week and plan the next one. |
| [Write a hard email diplomatically](commands/productivity/write-a-hard-email-diplomatically-1b06c9ad.md) · [web](https://commandvault.ai/commands/write-a-hard-email-diplomatically-1b06c9ad) | Say no, push back or deliver bad news without burning bridges. |
| [Write a minimal production Dockerfile](commands/devops/write-a-minimal-production-dockerfile-39803cfc.md) · [web](https://commandvault.ai/commands/write-a-minimal-production-dockerfile-39803cfc) | Small, cached, non-root images for any app. |
| [Write a SQL query from a plain question](commands/data/write-a-sql-query-from-a-plain-question-5f579205.md) · [web](https://commandvault.ai/commands/write-a-sql-query-from-a-plain-question-5f579205) | Describe your tables and ask in English; get correct, readable SQL. |
| [Write integration tests for an endpoint](commands/backend/write-integration-tests-for-an-endpoint-95976de5.md) · [web](https://commandvault.ai/commands/write-integration-tests-for-an-endpoint-95976de5) | Cover the happy path, auth and the edge cases that bite in production. |
| [Write release notes users care about](commands/writing/write-release-notes-users-care-about-deb42144.md) · [web](https://commandvault.ai/commands/write-release-notes-users-care-about-deb42144) | Turn a changelog or commit list into readable release notes. |
