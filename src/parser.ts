import { parseQuizBlock } from "./quiz-format.ts";
import type { ContentSegment, ParsedContent, QuizBlock } from "./types.ts";

const QUIZ_OPEN = /^```quiz\s*$/;
const FENCE_CLOSE = /^```\s*$/;

export function parse(content: string): ParsedContent {
  const lines = content.split("\n");
  const segments: ContentSegment[] = [];
  let markdownBuffer: string[] = [];
  let inQuiz = false;
  let quizLines: string[] = [];

  function flushMarkdown() {
    if (markdownBuffer.length > 0) {
      const raw = markdownBuffer.join("\n").trim();
      if (raw) {
        segments.push({ type: "markdown", raw });
      }
      markdownBuffer = [];
    }
  }

  for (const line of lines) {
    const trimmed = line.trim();
    if (inQuiz) {
      if (FENCE_CLOSE.test(trimmed)) {
        flushMarkdown();
        const raw = quizLines.join("\n");
        const quiz = parseQuizBlock(raw);
        segments.push({ type: "quiz", quiz, raw });
        quizLines = [];
        inQuiz = false;
      } else {
        quizLines.push(line);
      }
    } else if (QUIZ_OPEN.test(trimmed)) {
      flushMarkdown();
      inQuiz = true;
    } else {
      markdownBuffer.push(line);
    }
  }

  flushMarkdown();

  return { segments };
}

export function extractQuizBlock(content: string): QuizBlock | null {
  const match = content.match(/```quiz\n([\s\S]*?)```/);
  if (!match) return null;
  return parseQuizBlock(match[1]);
}
