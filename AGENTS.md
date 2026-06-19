# AGENTS.md

## Project Overview

A static quiz builder that converts markdown files with embedded quiz blocks into self-contained
HTML pages. Built with Deno.

## Commands

- `deno task build` — build `examples/` → `dist/`
- `deno task build --content docs/ --output out/` — custom source/output dirs
- `deno task dev` — watch + rebuild on changes

## Architecture

````
src/
  build.ts        — CLI entry point, orchestrates parsing → rendering → output
  parser.ts       — extracts ```quiz fenced blocks from markdown, delegates to quiz-format
  quiz-format.ts  — parses quiz block content into Question[] structures
  renderer.ts     — generates HTML with inline CSS + JS for quiz interactivity
  types.ts        — shared TypeScript types
````

## Front Matter

Markdown files can include YAML front matter at the top:

```yaml
---
title: "Custom Page Title"
order: 1
tags: [options, calls, beginners]
group: "Options Trading"
---
```

- `title` — overrides the title extracted from the first `#` heading
- `order` — numeric ordering for index page (lower = earlier, items without order sort last)
- `tags` — array of tags for categorization
- `group` — group name for organizing related content

## Quiz Syntax

Inside `` ```quiz `` fences in any markdown file:

```markdown
Question text goes here

- [x] Correct answer Explanation shown after checking.

- [ ] Wrong answer Why it's wrong.
```

- `[x]` = correct option, `[ ]` = incorrect option
- 1 correct → radio buttons (single select), 2+ correct → checkboxes (multi select)
- Indented lines after an option become the explanation
- Explanations can also use `←` separator: `Answer text ← explanation here`

## Flash Card Syntax

Inside `` ```flashcard `` fences:

```markdown
Question 1? Answer to question 1.

Question 2? Answer to question 2.
```

- Each flash card is separated by a blank line
- First non-indented line is the question
- Indented lines are the answer (shown on reveal)
- Click "Reveal Answer" to show the answer

## Key Decisions

- **No runtime dependencies** — only `@deno/gfm` (markdown), `@std/fs`, `@std/path`
- **Self-contained output** — CSS + JS inlined into each HTML file, no server needed
- **No loreline dependency** — uses a simpler custom quiz format (loreline is an interactive fiction
  engine, too heavy for quizzes)
- **Dark/light mode** via `prefers-color-scheme` media query
- **Score tracking** is session-only (client-side JS), no persistence

## Testing Changes

After modifying any source file, run `deno task build` and open `dist/sample.html` in a browser to
verify:

1. Markdown renders correctly (headings, code blocks, lists)
2. Quiz questions appear with correct options
3. Radio vs checkbox input types match expected behavior
4. Check button reveals correct/incorrect styling and explanations
5. Score appears after answering all questions
6. Flash cards display question and "Reveal Answer" button
7. Revealing a flash card shows the answer
