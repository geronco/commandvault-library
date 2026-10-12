---
title: "Form validation schema with friendly errors"
description: "Generate a Zod schema plus human error messages for any form."
kind: template
tags: ["forms", "validation", "zod"]
variables: ["form_name", "fields"]
source: https://commandvault.ai/commands/form-validation-schema-with-friendly-errors-922d9ec3
license: CC-BY-4.0
---

Create a Zod schema for a {{form_name}} form with these fields:
{{fields}}

For each field:
- Pick the right type and constraints (min/max, email, url, regex).
- Write an error message a non-technical person understands ("Use at least 8 characters", not "String must contain at least 8 character(s)").
- Trim strings and coerce numbers where appropriate.

Also export the inferred TypeScript type and a helper that turns Zod errors into { field: message } for the UI.
