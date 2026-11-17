# GitHub Actions templates (Seth Hobson)

Ready-made GitHub Actions workflows for testing, Docker builds, deploys and matrix runs.

- Source: https://github.com/wshobson/agents
- SKILL.md: https://raw.githubusercontent.com/wshobson/agents/main/plugins/cicd-automation/skills/github-actions-templates/SKILL.md
- Author: Seth Hobson
- License: MIT
- Page: https://commandvault.ai/commands/github-actions-templates-seth-hobson-b52d1da7

Provides workflow patterns Claude can adapt: a test workflow, building and pushing a Docker image, deploying to Kubernetes, and matrix builds across versions. It also covers reusable workflows, security scanning and deployments gated by environment approvals, plus a short list of practices such as pinning action versions, caching dependencies and setting minimal permissions.

**Try asking:**
- "Set up a GitHub Actions workflow that runs tests on Node 20 and 22 for every PR"
- "Add a workflow that builds our Docker image and pushes it to GHCR on tags"
- "Create a reusable test workflow other repos in the org can call"

**Source:** [wshobson/agents](https://github.com/wshobson/agents/tree/HEAD/plugins/cicd-automation/skills/github-actions-templates) · MIT · by Seth Hobson
