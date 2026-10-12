# Wrangler CLI (Cloudflare)

Run and troubleshoot Wrangler for local dev, previews, deploys and resources.

- Source: https://github.com/cloudflare/skills
- SKILL.md: https://raw.githubusercontent.com/cloudflare/skills/main/skills/wrangler/SKILL.md
- Author: Cloudflare
- License: Apache-2.0
- Page: https://commandvault.ai/commands/wrangler-cli-cloudflare-e4007610

For projects that already have a wrangler config file, Claude inspects the setup, fetches the docs it needs, and uses Wrangler for local development, preview deployments, production deploys and managing resources such as KV, R2 and D1. It ends with a validation step. It requires a project-local Wrangler at a recent version and points new projects to the cf CLI instead.

**Try asking:**
- "Run this Worker locally and fix the binding error"
- "Deploy a preview of this Worker"
- "Create a D1 database and bind it to my Worker"

**Source:** [cloudflare/skills](https://github.com/cloudflare/skills/tree/HEAD/skills/wrangler) · Apache-2.0 · by Cloudflare
