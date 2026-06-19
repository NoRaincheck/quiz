import { parseQuizBlock } from "./quiz-format.ts";
import type { ContentSegment, FrontMatter, ParsedContent, QuizBlock } from "./types.ts";

const QUIZ_OPEN = /^`{3,}quiz\s*$/;
const FLASHCARD_OPEN = /^`{3,}flashcard\s*$/;
const FENCE_CLOSE = /^`{3,}\s*$/;
const FRONT_MATTER_OPEN = /^---\s*$/;

export function parse(content: string): ParsedContent {
  const lines = content.split("\n");
  const segments: ContentSegment[] = [];
  let markdownBuffer: string[] = [];
  let inQuiz = false;
  let inFlashcard = false;
  let quizLines: string[] = [];
  let frontMatter: FrontMatter = {};
  let inFrontMatter = false;
  let frontMatterLines: string[] = [];
  let contentStartIndex = 0;

  function flushMarkdown() {
    if (markdownBuffer.length > 0) {
      const raw = markdownBuffer.join("\n").trim();
      if (raw) {
        segments.push({ type: "markdown", raw });
      }
      markdownBuffer = [];
    }
  }

  // Parse front matter
  if (lines.length > 0 && FRONT_MATTER_OPEN.test(lines[0].trim())) {
    inFrontMatter = true;
    contentStartIndex = 1;
    for (let i = 1; i < lines.length; i++) {
      const trimmed = lines[i].trim();
      if (FRONT_MATTER_OPEN.test(trimmed)) {
        contentStartIndex = i + 1;
        inFrontMatter = false;
        break;
      }
      frontMatterLines.push(lines[i]);
    }
    if (inFrontMatter) {
      // No closing ---, treat as regular content
      contentStartIndex = 0;
      frontMatterLines = [];
      inFrontMatter = false;
    } else {
      frontMatter = parseFrontMatter(frontMatterLines.join("\n"));
    }
  }

  for (let i = contentStartIndex; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    if (inQuiz || inFlashcard) {
      if (FENCE_CLOSE.test(trimmed)) {
        flushMarkdown();
        const raw = quizLines.join("\n");
        const kind = inFlashcard ? "flashcard" : "quiz";
        const quiz = parseQuizBlock(raw, kind);
        segments.push({ type: "quiz", quiz, raw });
        quizLines = [];
        inQuiz = false;
        inFlashcard = false;
      } else {
        quizLines.push(line);
      }
    } else if (QUIZ_OPEN.test(trimmed)) {
      flushMarkdown();
      inQuiz = true;
    } else if (FLASHCARD_OPEN.test(trimmed)) {
      flushMarkdown();
      inFlashcard = true;
    } else {
      markdownBuffer.push(line);
    }
  }

  flushMarkdown();

  return { frontMatter, segments };
}

function parseFrontMatter(content: string): FrontMatter {
  const result: FrontMatter = {};
  const lines = content.split("\n");

  for (const line of lines) {
    const match = /^(\w+):\s*(.+)$/.exec(line.trim());
    if (match) {
      const key = match[1];
      let value = match[2].trim();

      if (key === "order") {
        const num = parseInt(value, 10);
        if (!isNaN(num)) result.order = num;
      } else if (key === "tags") {
        // Parse array format: [tag1, tag2, tag3] or just tag1, tag2
        const arrayMatch = /^\[(.+)\]$/.exec(value);
        if (arrayMatch) {
          result.tags = arrayMatch[1].split(",").map((t) => t.trim());
        } else {
          result.tags = value.split(",").map((t) => t.trim());
        }
      } else if (key === "title") {
        // Remove quotes if present
        result.title = value.replace(/^["']|["']$/g, "");
      } else if (key === "group") {
        result.group = value.replace(/^["']|["']$/g, "");
      }
    }
  }

  return result;
}

export function extractQuizBlock(content: string): QuizBlock | null {
  const match = content.match(/```(?:quiz|flashcard)\n([\s\S]*?)```/);
  if (!match) return null;
  const kind = match[0].startsWith("```flashcard") ? "flashcard" : "quiz";
  return parseQuizBlock(match[1], kind);
}
