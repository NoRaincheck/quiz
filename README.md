# Quiz

A static web page and quiz builder for creating quizzes, flash cards etc for revision and learning.

## How this works

Embed quizzes in your markdown file using fenced code blocks with the `quiz` tag:

````markdown
# My Topic

Some instructional content here.

```quiz
What is the answer?

  - [x] The correct answer
    Explanation shown after checking.

  - [ ] A wrong answer
    Why this is wrong.
```
````

## Quiz syntax

- `[x]` marks the correct answer, `[ ]` marks incorrect answers
- Single correct answer → radio buttons. Multiple correct → checkboxes
- Add explanations by indenting text below an option, or using the `←` arrow: `Answer ← explanation`
- Multiple questions can live in one quiz block

See `examples/sample.md` for a full working example.

## Getting started

Requires [Deno](https://deno.com/) v2+.

```sh
deno task build          # build examples/ → dist/
deno task dev            # watch + rebuild on changes
```

Open `dist/sample.html` in a browser to see the result.

## Build options

```sh
deno task build --content docs/ --output out/
```

## Deployment

GitHub Actions deploys to GitHub Pages on push to `main`. See `.github/workflows/deploy.yml`.

Enable in repo Settings → Pages → Source → **GitHub Actions**.

## Project structure

```
src/
  build.ts        — CLI entry point
  parser.ts       — extracts quiz blocks from markdown
  quiz-format.ts  — parses quiz block syntax
  renderer.ts     — generates HTML + CSS + JS
  types.ts        — shared types
examples/
  sample.md       — example content
dist/             — generated output (gitignored)
```
