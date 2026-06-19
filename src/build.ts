import { parse } from "./parser.ts";
import {
  renderFullPage,
  renderIndexPage,
  renderQuizBlock,
  type IndexEntry,
} from "./renderer.ts";
import { render } from "@deno/gfm";
import { ensureDir } from "@std/fs";
import { basename, join, relative, resolve } from "@std/path";

const args = Deno.args;
let contentDir = "examples";
let outputDir = "dist";

for (let i = 0; i < args.length; i++) {
  if (args[i] === "--content" && args[i + 1]) {
    contentDir = args[++i];
  } else if (args[i] === "--output" && args[i + 1]) {
    outputDir = args[++i];
  } else if (!args[i].startsWith("-")) {
    contentDir = args[i];
  }
}

const absContentDir = resolve(contentDir);
const absOutputDir = resolve(outputDir);

await ensureDir(absOutputDir);

const entries: Deno.DirEntry[] = [];
for await (const entry of Deno.readDir(absContentDir)) {
  if (entry.isFile && entry.name.endsWith(".md")) {
    entries.push(entry);
  }
}

if (entries.length === 0) {
  console.log(`No .md files found in ${contentDir}`);
  Deno.exit(0);
}

const indexEntries: IndexEntry[] = [];

for (const entry of entries) {
  const inputPath = join(absContentDir, entry.name);
  const raw = await Deno.readTextFile(inputPath);
  const parsed = parse(raw);

  const title = extractTitle(parsed.segments) || basename(entry.name, ".md");

  let bodyHtml = "";
  for (const segment of parsed.segments) {
    if (segment.type === "markdown") {
      bodyHtml += render(segment.raw);
    } else if (segment.type === "quiz") {
      bodyHtml += renderQuizBlock(segment.quiz, segment.quizIndex ?? 0);
    }
  }

  // Assign quiz indices
  let quizIdx = 0;
  for (const segment of parsed.segments) {
    if (segment.type === "quiz") {
      segment.quizIndex = quizIdx++;
    }
  }

  // Re-render with correct indices
  bodyHtml = "";
  for (const segment of parsed.segments) {
    if (segment.type === "markdown") {
      bodyHtml += render(segment.raw);
    } else if (segment.type === "quiz") {
      bodyHtml += renderQuizBlock(segment.quiz, segment.quizIndex!);
    }
  }

  const html = renderFullPage(title, bodyHtml);
  const outName = basename(entry.name, ".md") + ".html";
  const outPath = join(absOutputDir, outName);
  await Deno.writeTextFile(outPath, html);

  const relIn = relative(Deno.cwd(), inputPath);
  const relOut = relative(Deno.cwd(), outPath);
  console.log(`${relIn} → ${relOut}`);

  indexEntries.push({ title, filename: outName });
}

indexEntries.sort((a, b) => a.title.localeCompare(b.title));
const indexHtml = renderIndexPage(indexEntries);
await Deno.writeTextFile(join(absOutputDir, "index.html"), indexHtml);
console.log(`index.html (with ${indexEntries.length} pages)`);

function extractTitle(segments: { type: string; raw?: string }[]): string | null {
  for (const seg of segments) {
    if (seg.type === "markdown" && seg.raw) {
      const match = seg.raw.match(/^#\s+(.+)$/m);
      if (match) return match[1];
    }
  }
  return null;
}
