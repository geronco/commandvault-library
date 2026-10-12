# Deploy to Vercel (Vercel)

Deploys the current project to Vercel and returns a preview or production URL.

- Source: https://github.com/vercel-labs/agent-skills
- SKILL.md: https://raw.githubusercontent.com/vercel-labs/agent-skills/main/skills/deploy-to-vercel/SKILL.md
- Author: Vercel
- License: MIT
- Page: https://commandvault.ai/commands/deploy-to-vercel-vercel-4593d0b6

Handles requests like 'deploy my app' by first checking the project's state: git remote, whether it is linked to a Vercel project, and whether the CLI is installed and logged in. It then picks a method, such as the Vercel CLI or a no-auth flow that returns a preview URL plus a link to claim the deployment. It includes notes for running in different agent environments. Uses the Vercel CLI (npm i -g vercel) when available.

**Try asking:**
- "Deploy this app and give me the link"
- "Create a preview deployment of this branch"
- "Push this site live on Vercel"

**Source:** [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills/tree/HEAD/skills/deploy-to-vercel) · MIT · by Vercel
