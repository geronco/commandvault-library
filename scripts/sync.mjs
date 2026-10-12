#!/usr/bin/env node
// Mirrors CommandVault's curated library into this repo.
//   node scripts/sync.mjs            (uses https://commandvault.ai/api/export)
//   EXPORT_URL=http://localhost:3000/api/export node scripts/sync.mjs
// Writes: commands/<community>/<slug>.md, skills/<name>/SKILL.md,
// mcp-servers/<name>.json, data/commands.json, data/commands.csv, README.md.
import { mkdirSync, rmSync, writeFileSync, existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";

const EXPORT_URL = process.env.EXPORT_URL || "https://commandvault.ai/api/export";
const ROOT = new URL("..", import.meta.url).pathname;

const response = await fetch(EXPORT_URL, { headers: { "User-Agent": "commandvault-library-sync" } });
if (!response.ok) throw new Error(`Export failed: ${response.status}`);
const data = await response.json();
const items = data.items.filter((item) => /^[a-z0-9-]+$/.test(item.slug));

// Generated folders are rebuilt from scratch so removed items disappear.
for (const dir of ["commands", "skills", "mcp-servers", "data"]) rmSync(join(ROOT, dir), { recursive: true, force: true });

const write = (path, text) => {
  mkdirSync(dirname(join(ROOT, path)), { recursive: true });
  writeFileSync(join(ROOT, path), text);
};
const yaml = (value) => JSON.stringify(value ?? "");
const safe = (value) => String(value).toLowerCase().replace(/[^a-z0-9-]+/g, "-").replace(/^-|-$/g, "") || "item";

const rows = [];
for (const item of items) {
  let path;
  if (item.kind === "skill") {
    const name = safe(item.install?.name || item.slug);
    path = `skills/${name}/SKILL.md`;
    write(path, item.body.trim() + "\n");
    for (const file of item.install?.files ?? []) {
      if (/^(?!\/)(?!.*\.\.)[\w./-]+$/.test(file.path)) write(`skills/${name}/${file.path}`, file.content);
    }
  } else if (item.kind === "mcp_server" && item.install) {
    const name = safe(item.install.name || item.slug);
    path = `mcp-servers/${name}.json`;
    const server = item.install.transport === "http"
      ? { type: "http", url: item.install.url, ...(item.install.headers?.length ? { headers: Object.fromEntries(item.install.headers.map((h) => [h.key, `YOUR_${h.key.toUpperCase().replace(/[^A-Z0-9]+/g, "_")}`])) } : {}) }
      : { command: item.install.command, args: item.install.args ?? [], ...(item.install.env?.length ? { env: Object.fromEntries(item.install.env.map((e) => [e.key, `YOUR_${e.key}`])) } : {}) };
    write(path, JSON.stringify({ name: item.title, description: item.summary, homepage: item.install.homepage || item.url, repository: item.install.repository || undefined, mcpServers: { [name]: server } }, null, 2) + "\n");
  } else {
    path = `commands/${safe(item.community || "general")}/${item.slug}.md`;
    write(path, [
      "---",
      `title: ${yaml(item.title)}`,
      item.summary ? `description: ${yaml(item.summary)}` : null,
      `kind: ${item.kind}`,
      item.tags?.length ? `tags: [${item.tags.map(yaml).join(", ")}]` : null,
      item.variables?.length ? `variables: [${item.variables.map((v) => yaml(v.key)).join(", ")}]` : null,
      `source: ${item.url}`,
      `license: CC-BY-4.0`,
      "---",
      "",
      item.body.trim(),
      "",
    ].filter((line) => line !== null).join("\n"));
  }
  rows.push({ ...item, path });
}

write("data/commands.json", JSON.stringify({ license: data.license, attribution: data.attribution, count: items.length, items }, null, 2) + "\n");
const csv = (v) => { const t = v == null ? "" : Array.isArray(v) ? v.join(";") : String(v); return /[",\n\r]/.test(t) ? `"${t.replace(/"/g, '""')}"` : t; };
const cols = ["slug", "title", "summary", "kind", "community", "tags", "body", "url"];
write("data/commands.csv", [cols.join(","), ...items.map((i) => cols.map((c) => csv(i[c])).join(","))].join("\n") + "\n");

// README: header (hand-written, kept) + generated index.
const readmePath = join(ROOT, "README.md");
const marker = "<!-- index:start -->";
const head = existsSync(readmePath) ? readFileSync(readmePath, "utf8").split(marker)[0] : "# CommandVault library\n\n";
const section = (title, list) => list.length ? `\n## ${title} (${list.length})\n\n| | Description |\n|---|---|\n${list.map((r) => `| [${r.title.replace(/\|/g, "\\|")}](${r.path}) · [web](${r.url}) | ${(r.summary ?? "").replace(/\|/g, "\\|").replace(/\n/g, " ")} |`).join("\n")}\n` : "";
const byKind = (kinds) => rows.filter((r) => kinds.includes(r.kind)).sort((a, b) => (b.score - a.score) || a.title.localeCompare(b.title));
writeFileSync(readmePath, `${head}${marker}\n_Synced from [commandvault.ai](https://commandvault.ai) on ${new Date().toISOString().slice(0, 10)}: ${items.length} items._\n` +
  section("Agent Skills", byKind(["skill"])) +
  section("MCP servers", byKind(["mcp_server"])) +
  section("Context files and templates (CLAUDE.md, AGENTS.md, Cursor rules)", byKind(["template"])) +
  section("Prompts, workflows and checklists", byKind(["prompt", "workflow", "checklist", "snippet"])));

console.log(`Synced ${items.length} items from ${EXPORT_URL}`);
