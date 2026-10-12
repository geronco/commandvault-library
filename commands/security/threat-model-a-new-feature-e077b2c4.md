---
title: "Threat model a new feature"
description: "STRIDE-style review that ends with concrete mitigations."
kind: prompt
tags: ["threat-modeling", "security", "design"]
variables: ["feature_description", "data_types", "roles"]
source: https://commandvault.ai/commands/threat-model-a-new-feature-e077b2c4
license: CC-BY-4.0
---

Threat model this feature before we build it:

Feature: {{feature_description}}
Data involved: {{data_types}}
Users and roles: {{roles}}

1. Draw the data flow in text (actors → components → data stores).
2. For each step, list threats using STRIDE (spoofing, tampering, repudiation, info disclosure, DoS, elevation).
3. Rate each threat Low/Medium/High by likelihood and impact.
4. Give a concrete mitigation for every Medium and High.
5. List the security tests we should add.
