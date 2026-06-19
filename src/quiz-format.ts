import type { Question, QuizBlock, QuizOption } from "./types.ts";

export function parseQuizBlock(content: string, kind: "quiz" | "flashcard" = "quiz"): QuizBlock {
  if (kind === "flashcard") {
    return parseFlashcardBlock(content);
  }
  return parseQuizBlockInternal(content);
}

function parseFlashcardBlock(content: string): QuizBlock {
  const lines = content.split("\n");
  const questions: Question[] = [];
  let currentQuestion: Question | null = null;
  let currentAnswer: string[] = [];

  for (const line of lines) {
    const trimmed = line.trim();
    const isIndented = /^\s{2,}/.test(line);

    if (!trimmed) {
      // Empty line = flush current flashcard
      if (currentQuestion) {
        currentQuestion.options = [{
          text: currentAnswer.join(" ").trim(),
          correct: true,
        }];
        questions.push(currentQuestion);
        currentQuestion = null;
        currentAnswer = [];
      }
      continue;
    }

    if (isIndented) {
      // Indented line = answer text
      currentAnswer.push(trimmed);
      continue;
    }

    // Non-indented line = new question (or flush previous)
    if (currentQuestion) {
      currentQuestion.options = [{
        text: currentAnswer.join(" ").trim(),
        correct: true,
      }];
      questions.push(currentQuestion);
      currentAnswer = [];
    }
    currentQuestion = { text: trimmed, options: [], type: "flashcard" };
  }

  // Flush last flashcard
  if (currentQuestion) {
    currentQuestion.options = [{
      text: currentAnswer.join(" ").trim(),
      correct: true,
    }];
    questions.push(currentQuestion);
  }

  return { questions, kind: "flashcard" };
}

function parseQuizBlockInternal(content: string): QuizBlock {
  const lines = content.split("\n");
  const questions: Question[] = [];
  let currentQuestion: Question | null = null;
  let currentOption: QuizOption | null = null;

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed === "---") continue;

    const checkboxMatch = /^-\s*\[([ x])\]\s*(.+)$/.exec(trimmed);
    const choiceMatch = /^-\s+(.+)$/.exec(trimmed);
    const isIndented = /^\s{2,}/.test(line);

    // Checkbox option
    if (checkboxMatch) {
      if (!currentQuestion) {
        currentQuestion = { text: "", options: [], type: "checkbox" };
      }
      if (currentOption) {
        currentQuestion.options.push(currentOption);
      }

      const mark = checkboxMatch[1];
      const rawText = checkboxMatch[2].trim();
      const { text, explanation } = splitExplanation(rawText);
      currentOption = { text, correct: mark === "x", explanation };
      continue;
    }

    // Choice option (starts with "- " but not "- [")
    if (choiceMatch && !checkboxMatch) {
      if (!currentQuestion) {
        currentQuestion = { text: "", options: [], type: "multiple-choice" };
      }
      if (currentOption) {
        currentQuestion.options.push(currentOption);
      }

      const rawText = choiceMatch[1].trim();
      const { text, explanation } = splitExplanation(rawText);
      currentOption = { text, correct: false, explanation };
      continue;
    }

    // Indented continuation — could be explanation for current option
    if (isIndented && currentOption) {
      if (currentOption.explanation) {
        currentOption.explanation += " " + trimmed;
      } else {
        currentOption.explanation = trimmed;
      }
      continue;
    }

    // Non-indented, non-option line = question text
    if (currentQuestion && currentOption) {
      // Flush the current question
      currentQuestion.options.push(currentOption);
      currentOption = null;
      questions.push(currentQuestion);
      currentQuestion = null;
    }

    if (!currentQuestion) {
      currentQuestion = { text: trimmed, options: [], type: "multiple-choice" };
    } else {
      currentQuestion.text += " " + trimmed;
    }
  }

  // Flush remaining
  if (currentQuestion) {
    if (currentOption) {
      currentQuestion.options.push(currentOption);
    }
    questions.push(currentQuestion);
  }

  // Detect type: multiple correct = checkbox, single correct = radio
  for (const q of questions) {
    const correctCount = q.options.filter(o => o.correct).length;
    q.type = correctCount > 1 ? "checkbox" : "multiple-choice";
  }

  return { questions, kind: "quiz" };
}

function splitExplanation(raw: string): { text: string; explanation?: string } {
  const arrowIdx = raw.indexOf("\u2190");
  if (arrowIdx !== -1) {
    const text = raw.substring(0, arrowIdx).trim();
    const explanation = raw.substring(arrowIdx + 1).trim();
    return { text, explanation: explanation || undefined };
  }
  return { text: raw };
}
