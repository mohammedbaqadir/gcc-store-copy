import { readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";

const ROOT = resolve(import.meta.dir, "..");

const INLINE_TOKEN = /`([A-Za-z0-9_.\-\/]+)`/g;
const MD_LINK = /\[[^\]]*\]\(([^)\s]+)\)/g;
const FILE_EXT = /\.(md|json|ts|js|mjs|cjs|txt|ya?ml)$/i;

const FILE_BUDGETS: Record<string, number> = {
  "SKILL.md": 120,
  "STYLE.md": 140,
  "QA.md": 100,
  "products/types/ready-product.md": 40,
  "products/types/made-to-order.md": 40,
  "products/types/food.md": 40,
  "products/types/digital-product.md": 40,
  "products/types/digital-card.md": 40,
  "products/types/booking.md": 40,
};

const TASK_BUDGET = 500;
const BYTE_BUDGETS: Record<string, number> = {
  "SKILL.md": 6000,
  "STYLE.md": 5000,
  "QA.md": 5000,
  "products/types/ready-product.md": 2500,
  "products/types/made-to-order.md": 2500,
  "products/types/food.md": 2500,
  "products/types/digital-product.md": 2500,
  "products/types/digital-card.md": 2500,
  "products/types/booking.md": 2500,
};
const TASK_BYTE_BUDGET = 18000;
const ADVISORY_BUDGETS: Record<string, number> = {
  "VOCABULARY.md": 400,
};

const REF_EXEMPT = new Set(["CHANGELOG.md"]);

interface Finding {
  file: string;
  line: number;
  token: string;
  reason: string;
}

function walk(dir: string, match: (name: string) => boolean): string[] {
  const out: string[] = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === ".git" || entry.name === "node_modules") continue;
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full, match));
    else if (match(entry.name)) out.push(full);
  }
  return out;
}

function exists(path: string): boolean {
  try {
    statSync(path);
    return true;
  } catch {
    return false;
  }
}

function hideFencedBlocks(text: string): string[] {
  const lines = text.split(/\r?\n/);
  let inFence = false;
  return lines.map((line) => {
    if (/^\s*(```|~~~)/.test(line)) {
      inFence = !inFence;
      return "";
    }
    return inFence ? "" : line;
  });
}

function isPathToken(token: string): boolean {
  return token.endsWith("/") || FILE_EXT.test(token);
}

function isSkippableToken(token: string): boolean {
  if (token.startsWith("~") || token.startsWith("/") || token.startsWith("..")) return true;
  if (token.startsWith(".") && !token.startsWith("./")) return true;
  return false;
}

function resolveToken(fromFile: string, token: string): string | null {
  const candidates: string[] = [];
  if (token.startsWith("./")) {
    candidates.push(resolve(dirname(fromFile), token));
  } else {
    candidates.push(resolve(dirname(fromFile), token), resolve(ROOT, token));
  }
  for (const candidate of candidates) {
    if (exists(candidate)) return candidate;
  }
  return null;
}

function relative(file: string): string {
  return file.slice(ROOT.length + 1).replaceAll("\\", "/");
}

function lineCount(path: string): number {
  const text = readFileSync(path, "utf8");
  return text.split(/\r?\n/).length;
}

const findings: Finding[] = [];
const budgetFailures: string[] = [];
const advisories: string[] = [];

for (const file of walk(ROOT, (name) => name.toLowerCase().endsWith(".md"))) {
  if (REF_EXEMPT.has(relative(file))) continue;
  const lines = hideFencedBlocks(readFileSync(file, "utf8"));

  lines.forEach((line, index) => {
    const lineNumber = index + 1;

    for (const match of line.matchAll(INLINE_TOKEN)) {
      const token = match[1];
      if (isSkippableToken(token) || !isPathToken(token)) continue;
      if (!resolveToken(file, token)) {
        findings.push({
          file: relative(file),
          line: lineNumber,
          token,
          reason: token.endsWith("/") ? "directory not found" : "file not found",
        });
      }
    }

    for (const match of line.matchAll(MD_LINK)) {
      let target = match[1];
      if (/^(https?:|mailto:|#)/.test(target)) continue;
      target = target.split("#")[0];
      if (!target) continue;
      if (!resolveToken(file, target)) {
        findings.push({
          file: relative(file),
          line: lineNumber,
          token: target,
          reason: "link target not found",
        });
      }
    }
  });
}

for (const [path, budget] of Object.entries(FILE_BUDGETS)) {
  const full = resolve(ROOT, path);
  if (!exists(full)) continue;
  const count = lineCount(full);
  if (count > budget) budgetFailures.push(`${path}: ${count} lines (budget ${budget})`);
}

for (const [path, budget] of Object.entries(BYTE_BUDGETS)) {
  const full = resolve(ROOT, path);
  if (!exists(full)) continue;
  const size = statSync(full).size;
  if (size > budget) budgetFailures.push(`${path}: ${size} bytes (budget ${budget})`);
}

const taskFiles = ["SKILL.md", "STYLE.md", "QA.md"];
let taskTotal = 0;
let taskBytes = 0;
for (const path of taskFiles) {
  const full = resolve(ROOT, path);
  if (exists(full)) {
    taskTotal += lineCount(full);
    taskBytes += statSync(full).size;
  }
}
const typeCards = walk(resolve(ROOT, "products/types"), (name) => name.endsWith(".md"));
if (typeCards.length > 0) {
  taskTotal += Math.max(...typeCards.map(lineCount));
  taskBytes += Math.max(...typeCards.map((card) => statSync(card).size));
}
if (taskTotal > TASK_BUDGET) {
  budgetFailures.push(`per-task reading path: ${taskTotal} lines (budget ${TASK_BUDGET})`);
}
if (taskBytes > TASK_BYTE_BUDGET) {
  budgetFailures.push(`per-task reading path: ${taskBytes} bytes (budget ${TASK_BYTE_BUDGET})`);
}

for (const [path, budget] of Object.entries(ADVISORY_BUDGETS)) {
  const full = resolve(ROOT, path);
  if (!exists(full)) continue;
  const count = lineCount(full);
  if (count > budget) advisories.push(`${path}: ${count} lines (advisory ${budget})`);
}

let failed = false;

if (findings.length > 0) {
  failed = true;
  for (const finding of findings) {
    console.log(`${finding.file}:${finding.line}  ${finding.token}  (${finding.reason})`);
  }
  console.log(`\ncheck: ${findings.length} broken reference(s).`);
}

if (budgetFailures.length > 0) {
  failed = true;
  for (const failure of budgetFailures) console.log(`budget exceeded: ${failure}`);
}

for (const advisory of advisories) {
  console.log(`advisory: ${advisory}`);
}

if (failed) process.exit(1);

console.log(`check: OK — references resolve; per-task reading path ${taskTotal} lines.`);
