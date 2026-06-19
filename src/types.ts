export interface FrontMatter {
  title?: string;
  order?: number;
  tags?: string[];
  group?: string;
}

export interface QuizOption {
  text: string;
  correct: boolean;
  explanation?: string;
}

export interface Question {
  text: string;
  options: QuizOption[];
  type: "multiple-choice" | "checkbox" | "flashcard";
}

export interface QuizBlock {
  questions: Question[];
  kind: "quiz" | "flashcard";
}

export interface ParsedContent {
  frontMatter: FrontMatter;
  segments: ContentSegment[];
}

export type ContentSegment =
  | { type: "markdown"; raw: string }
  | { type: "quiz"; quiz: QuizBlock; raw: string; quizIndex?: number };
