---
title: "Write a minimal production Dockerfile"
description: "Small, cached, non-root images for any app."
kind: prompt
tags: ["docker", "containers", "security"]
variables: ["language", "start_command", "port"]
source: https://commandvault.ai/commands/write-a-minimal-production-dockerfile-39803cfc
license: CC-BY-4.0
---

Write a production Dockerfile for a {{language}} app whose start command is {{start_command}}.

Requirements:
- Multi-stage build; final image based on a slim or distroless base.
- Dependency install layer cached separately from source.
- Runs as a non-root user.
- Only production dependencies in the final image.
- HEALTHCHECK if the app exposes HTTP on {{port}}.
- A matching .dockerignore.

Explain the expected final image size and how to verify it.
