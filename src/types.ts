export interface QuizOption {
  text: string;
  correct: boolean;
  explanation?: string;
}

export interface Question {
  text: string;
  options: QuizOption[];
  type: "multiple-choice" | "checkbox";
}

export interface QuizBlock {
  questions: Question[];
}

export interface ParsedContent {
  segments: ContentSegment[];
}

export type ContentSegment =
  | { type: "markdown"; raw: string }
  | { type: "quiz"; quiz: QuizBlock; raw: string; quizIndex?: number };
