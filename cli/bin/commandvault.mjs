#!/usr/bin/env node
// commandvault: install entries from commandvault.ai into your AI coding tool.
// No dependencies. Everything it writes or runs is shown first and needs a yes.
import { existsSync, mkdirSync, readFileSync, writeFileSync, appendFileSync } from "node:fs";
import { homedir } from "node:os";
import { dirname, join, resolve, relative, isAbsolute } from "node:path";
import { createInterface } from "node:readline/promises";
import { spawnSync } from "node:child_process";

const SITE = (process.env.COMMANDVAULT_URL || "https://commandvault.ai").replace(/\/$/, "");
const TOOLS = {
  claude: "Claude Code",
  codex: "Codex",
  cursor: "Cursor",
  copilot: "GitHub Copilot",
  gemini: "Gemini CLI",
  grok: "Grok",
  windsurf: "Windsurf",
};
// Files that suggest which tool a project uses, checked in order.
const MARKERS = [
  ["claude", [".claude", "CLAUDE.md"]],
  ["cursor", [".cursor", ".cursorrules"]],
  ["copilot", [".github/copilot-instructions.md", ".github/prompts", ".vscode/mcp.json"]],
  ["gemini", [".gemini", "GEMINI.md"]],
  ["codex", [".codex", ".agents"]],
  ["grok", [".grok"]],
  ["windsurf", [".devin", ".windsurf"]],
];

const color = (code) => (text) => (process.stdout.isTTY ? `\x1b[${code}m${text}\x1b[0m` : text);
const bold = color(1), dim = color(2), green = color(32), yellow = color(33), red = color(31);
const interactive = process.stdin.isTTY && process.stdout.isTTY;
let rl;
const ask = async (question) => {
  rl ??= createInterface({ input: process.stdin, output: process.stdout });
  return (await rl.question(question)).trim();
};
const yes = async (question, assume) => (assume ? true : interactive ? /^y(es)?$/i.test(await ask(`${question} ${dim("[y/N]")} `)) : false);
const fail = (message) => {
  console.error(red(message));
  rl?.close();
  process.exit(1);
};

function parseArgs(argv) {
  const out = { _: [], set: {} };
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === "--tool" || arg === "-t") out.tool = argv[++i];
    else if (arg.startsWith("--tool=")) out.tool = arg.slice(7);
    else if (arg === "--global" || arg === "-g") out.global = true;
    else if (arg === "--yes" || arg === "-y") out.yes = true;
    else if (arg === "--print") out.print = true;
    else if (arg === "--kind") out.kind = argv[++i];
    else if (arg === "--set") {
      const [key, ...rest] = (argv[++i] ?? "").split("=");
      if (key) out.set[key] = rest.join("=");
    } else if (arg === "--help" || arg === "-h") out.help = true;
    else if (arg === "--version" || arg === "-v") out.version = true;
    else out._.push(arg);
  }
  return out;
}

const HELP = `${bold("commandvault")} — install entries from commandvault.ai into your AI coding tool

  ${bold("npx commandvault add")} <slug or URL>   install an entry
  ${bold("npx commandvault search")} <words>      find entries

Options for add:
  --tool <${Object.keys(TOOLS).join("|")}>   which tool (detected from the project if left out)
  --global              install for your user, not just this project
  --set key=value       fill a blank without being asked (repeatable)
  --yes                 no questions; writes files but never runs commands
  --print               only print the filled-in text
`;

async function api(path, body) {
  const response = await fetch(`${SITE}${path}`, {
    method: body ? "POST" : "GET",
    headers: { "content-type": "application/json", accept: "application/json, text/event-stream", "user-agent": "commandvault-cli/0.1.0" },
    body: body ? JSON.stringify(body) : undefined,
  }).catch(() => fail(`Couldn't reach ${SITE}. Check your connection.`));
  const data = await response.json().catch(() => ({}));
  if (!response.ok) fail(data.error || `${SITE} answered ${response.status}.`);
  return data;
}

function detectTools() {
  return MARKERS.filter(([, files]) => files.some((file) => existsSync(file))).map(([id]) => id);
}

async function pickTool(requested) {
  if (requested) {
    if (!TOOLS[requested]) fail(`Unknown tool "${requested}". Use one of: ${Object.keys(TOOLS).join(", ")}.`);
    return requested;
  }
  const found = detectTools();
  if (found.length === 1) return found[0];
  if (!interactive) fail("Couldn't tell which AI tool this project uses. Pass --tool, e.g. --tool claude.");
  const ids = Object.keys(TOOLS);
  console.log(found.length ? `This project has files for ${found.map((id) => TOOLS[id]).join(" and ")}.` : "Which AI tool should this go into?");
  ids.forEach((id, index) => console.log(`  ${index + 1}. ${TOOLS[id]}${found.includes(id) ? dim(" (found here)") : ""}`));
  const answer = await ask(`Tool ${dim(`[1-${ids.length}]`)} `);
  const chosen = ids[Number(answer) - 1] ?? ids.find((id) => id === answer.toLowerCase());
  if (!chosen) fail("No tool picked.");
  return chosen;
}

/** ~ → home; refuse anything that escapes the project or home folder. */
function target(path) {
  if (path.startsWith("~/")) return join(homedir(), path.slice(2));
  const full = resolve(path);
  const rel = relative(process.cwd(), full);
  if (isAbsolute(path) || rel.startsWith("..")) fail(`Refusing to write outside this project: ${path}`);
  return full;
}

const placeholder = (key) => `YOUR_${key.toUpperCase().replace(/[^A-Z0-9]+/g, "_")}`;
function fillSecrets(text, secrets) {
  return Object.entries(secrets).reduce((out, [key, value]) => (value ? out.split(placeholder(key)).join(value) : out), text);
}

function applyFile(file, secrets) {
  const path = target(file.path);
  mkdirSync(dirname(path), { recursive: true });
  if (file.mode === "merge-json") {
    let config = {};
    if (existsSync(path)) {
      try {
        config = JSON.parse(readFileSync(path, "utf8") || "{}");
      } catch {
        return `${yellow("skipped")} ${file.path} isn't valid JSON; add the server by hand.`;
      }
    }
    config[file.key] = { ...(config[file.key] ?? {}), [file.name]: JSON.parse(fillSecrets(JSON.stringify(file.value), secrets)) };
    writeFileSync(path, JSON.stringify(config, null, 2) + "\n");
    return `${green("updated")} ${file.path} (${file.key}.${file.name})`;
  }
  if (file.mode === "append") {
    if (existsSync(path) && readFileSync(path, "utf8").includes(file.marker)) return `${yellow("skipped")} ${file.path} already has ${file.marker}`;
    appendFileSync(path, `${existsSync(path) ? "\n" : ""}${fillSecrets(file.content, secrets)}\n`);
    return `${green("updated")} ${file.path}`;
  }
  writeFileSync(path, fillSecrets(file.content, secrets));
  return `${green("wrote")} ${file.path}`;
}

async function add(args) {
  const slug = args._[1];
  if (!slug) fail("Usage: npx commandvault add <slug or URL>");
  const id = slug.replace(/^https?:\/\/[^/]+\/commands\//, "").replace(/[/?#].*$/, "");
  const tool = args.print ? args.tool || "claude" : await pickTool(args.tool);
  const scope = args.global ? "user" : "project";

  let plan = await api(`/api/install/${encodeURIComponent(id)}?tool=${tool}&scope=${scope}`);
  console.log(`\n${bold(plan.title)}\n${dim(plan.url)}\n`);
  if (!plan.tools.includes(tool)) fail(`${TOOLS[tool]} isn't supported for this entry. Try --tool ${plan.tools[0]}.`);

  // Blanks: --set first, then ask (Enter keeps the default).
  const values = { ...args.set };
  for (const variable of plan.variables) {
    if (values[variable.key] !== undefined || !interactive || args.yes) continue;
    const hint = variable.description ? dim(` (${variable.description})`) : "";
    const answer = await ask(`${variable.label}${hint}${variable.default ? dim(` [${variable.default}]`) : ""}: `);
    if (answer) values[variable.key] = answer;
  }
  if (Object.keys(values).length) plan = await api(`/api/install/${encodeURIComponent(id)}`, { tool, scope, values });
  const missing = plan.variables.filter((variable) => variable.required && !variable.filled);
  if (missing.length) console.log(yellow(`Left as {{blanks}}: ${missing.map((variable) => variable.key).join(", ")}`));

  if (args.print || (plan.print && !plan.files.length && !plan.commands.length)) {
    console.log(plan.print ?? plan.files.map((file) => `# ${file.path}\n${file.content ?? JSON.stringify(file.value, null, 2)}`).join("\n\n"));
    if (plan.run) console.log(`\n${dim(plan.run)}`);
    return;
  }

  // Secrets are filled here and never sent anywhere.
  const secrets = {};
  for (const secret of plan.secrets) {
    if (!interactive || args.yes) continue;
    const answer = await ask(`${secret.key}${secret.description ? dim(` (${secret.description})`) : ""} ${dim("— stays on this computer; Enter to fill in later")}: `);
    if (answer) secrets[secret.key] = answer;
  }

  console.log(`\nFor ${bold(TOOLS[tool])}${scope === "user" ? " (your user folder)" : " (this project)"}:`);
  for (const file of plan.files) {
    const exists = existsSync(target(file.path));
    const verb = file.mode === "write" ? (exists ? red("overwrite") : "create") : "update";
    console.log(`  ${verb} ${file.path}`);
  }
  for (const command of plan.commands) console.log(`  run    ${command.text}`);
  if (plan.print) console.log(`  show   the text to paste`);
  for (const note of plan.notes) console.log(dim(`  ${note}`));

  if (plan.files.length && (await yes("\nWrite these files?", args.yes))) {
    for (const file of plan.files) {
      if (file.mode === "write" && existsSync(target(file.path)) && !(await yes(`${file.path} exists. Overwrite?`, false))) {
        console.log(`${yellow("kept")} ${file.path}`);
        continue;
      }
      console.log(applyFile(file, secrets));
    }
  } else if (plan.files.length) console.log("No files written.");

  for (const command of plan.commands) {
    const text = fillSecrets(command.text, secrets);
    if (!args.yes && (await yes(`\nRun: ${bold(text)}?`, false))) {
      const result = spawnSync(text, { shell: true, stdio: "inherit" });
      if (result.status !== 0) console.log(red(`It exited with code ${result.status}.`));
    } else console.log(`${dim("To do it yourself:")} ${text}`);
  }
  if (plan.print) console.log(`\n${plan.print}`);
  if (plan.run) console.log(`\n${green("Next:")} ${plan.run}`);
}

async function search(args) {
  const query = args._.slice(1).join(" ");
  if (!query) fail('Usage: npx commandvault search "CLAUDE.md for Django"');
  const data = await api("/api/mcp", { jsonrpc: "2.0", id: 1, method: "tools/call", params: { name: "search_commands", arguments: { query, ...(args.kind ? { kind: args.kind } : {}) } } });
  console.log(data.result?.content?.[0]?.text ?? "Nothing found.");
  console.log(dim("\nInstall one with: npx commandvault add <slug>"));
}

const args = parseArgs(process.argv.slice(2));
if (args.version) console.log("0.1.0");
else if (args.help || !args._[0]) console.log(HELP);
else if (args._[0] === "add" || args._[0] === "install") await add(args);
else if (args._[0] === "search" || args._[0] === "find") await search(args);
else fail(`Unknown command "${args._[0]}".\n\n${HELP}`);
rl?.close();
