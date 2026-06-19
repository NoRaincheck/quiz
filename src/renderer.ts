import type { Question, QuizBlock } from "./types.ts";

export function renderQuizBlock(quiz: QuizBlock, index: number): string {
  const questions = quiz.questions.map((q, qi) => renderQuestion(q, qi, index)).join("\n");
  return `<div class="quiz-block" data-quiz-index="${index}">${questions}</div>`;
}

function renderQuestion(question: Question, qIndex: number, quizIndex: number): string {
  const id = `q${quizIndex}-${qIndex}`;
  const isCheckbox = question.type === "checkbox";

  const optionsHtml = question.options.map((opt, oi) => {
    const inputType = isCheckbox ? "checkbox" : "radio";
    const optId = `${id}-opt-${oi}`;
    return `
      <label class="quiz-option" for="${optId}">
        <input type="${inputType}" name="${id}" id="${optId}" value="${oi}" />
        <span class="quiz-option-text"><em>${escapeHtml(opt.text)}</em>${opt.explanation ? ` <span class="quiz-explanation">${escapeHtml(opt.explanation)}</span>` : ""}</span>
      </label>`;
  }).join("\n");

  return `
    <div class="quiz-question" data-question-index="${qIndex}" data-correct='${JSON.stringify(question.options.map((o, i) => o.correct ? i : -1).filter(i => i >= 0))}'>
      <p class="quiz-question-text">${escapeHtml(question.text)}</p>
      <div class="quiz-options">${optionsHtml}</div>
      <button class="quiz-check-btn" type="button">Check Answer</button>
      <div class="quiz-result" aria-live="polite"></div>
    </div>`;
}

export function renderFullPage(title: string, bodyHtml: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(title)}</title>
  <style>${QUIZ_CSS}</style>
</head>
<body>
  <main class="content">
    ${bodyHtml}
  </main>
  <script>${QUIZ_JS}</script>
</body>
</html>`;
}

export interface IndexEntry {
  title: string;
  filename: string;
}

export function renderIndexPage(entries: IndexEntry[]): string {
  const links = entries
    .map((e) => `      <li><a href="${escapeHtml(e.filename)}">${escapeHtml(e.title)}</a></li>`)
    .join("\n");
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Quiz Pages</title>
  <style>${QUIZ_CSS}
    body { display: block; }
    .index-list { list-style: none; padding: 0; }
    .index-list li { margin: 0.5rem 0; }
    .index-list a {
      color: var(--accent);
      text-decoration: none;
      padding: 0.75rem 1rem;
      display: block;
      border: 1px solid var(--border);
      border-radius: 6px;
      transition: background 0.15s;
    }
    .index-list a:hover { background: var(--option-hover); }
  </style>
</head>
<body>
  <main class="content">
    <h1>Quiz Pages</h1>
    <ul class="index-list">
${links}
    </ul>
  </main>
</body>
</html>`;
}

const QUIZ_CSS = `
:root {
  --bg: #1e1e2e;
  --fg: #cdd6f4;
  --border: #45475a;
  --quiz-bg: #313244;
  --quiz-border: #585b70;
  --correct-bg: #a6e3a1;
  --correct-border: #a6e3a1;
  --incorrect-bg: #f38ba8;
  --incorrect-border: #f38ba8;
  --accent: #89b4fa;
  --btn-bg: #89b4fa;
  --btn-fg: #1e1e2e;
  --explanation-fg: #a6adc8;
  --option-hover: #45475a;
  --score-bg: #313244;
  --score-border: #89b4fa;
}

* { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  background: var(--bg);
  color: var(--fg);
  line-height: 1.7;
  padding: 2rem 1rem;
}

.content {
  max-width: 1100px;
  margin: 0 auto;
}

h1, h2, h3, h4, h5, h6 { margin: 1.5rem 0 0.75rem; line-height: 1.3; }
h1 { font-size: 2rem; }
h2 { font-size: 1.5rem; }
h3 { font-size: 1.25rem; }

p { margin: 0.75rem 0; }
code {
  background: var(--quiz-bg);
  padding: 0.15em 0.4em;
  border-radius: 4px;
  font-size: 0.9em;
}
pre {
  background: var(--quiz-bg);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 1rem;
  overflow-x: auto;
}
pre code { background: none; padding: 0; }

ul, ol { margin: 0.75rem 0; padding-left: 1.5rem; }
li { margin: 0.25rem 0; }

blockquote {
  border-left: 4px solid var(--accent);
  margin: 1rem 0;
  padding: 0.5rem 1rem;
  background: var(--quiz-bg);
  border-radius: 0 8px 8px 0;
}

img { max-width: 100%; border-radius: 8px; }
a { color: var(--accent); }

table {
  border-collapse: collapse;
  width: 100%;
  margin: 1rem 0;
}
th, td {
  border: 1px solid var(--border);
  padding: 0.5rem 0.75rem;
  text-align: left;
}
th {
  background: var(--quiz-bg);
  font-weight: 600;
}
tr:nth-child(even) {
  background: var(--quiz-bg);
}

.quiz-block {
  background: var(--quiz-bg);
  border: 1px solid var(--quiz-border);
  border-radius: 12px;
  padding: 1.5rem;
  margin: 1.5rem 0;
}

.quiz-question {
  margin-bottom: 1.5rem;
}

.quiz-question:last-child { margin-bottom: 0; }

.quiz-question-text {
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.quiz-options {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.quiz-option {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.75rem 1rem;
  border: 1px solid var(--border);
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
}

.quiz-option:hover { background: var(--option-hover); }

.quiz-option input[type="radio"],
.quiz-option input[type="checkbox"] {
  margin-right: 0.5rem;
  accent-color: var(--accent);
  width: 1rem;
  height: 1rem;
  align-self: center;
  flex-shrink: 0;
}

.quiz-option {
  flex-direction: row;
  align-items: flex-start;
}

.quiz-option-text {
  flex: 1;
}

.quiz-option-text em {
  font-style: normal;
  font-weight: 500;
}

.quiz-explanation {
  display: none;
  font-size: 0.875rem;
  color: var(--explanation-fg);
  font-style: italic;
}

.quiz-question.revealed .quiz-explanation {
  display: inline;
}

.quiz-option.correct {
  border-color: var(--correct-border);
}

.quiz-option.incorrect {
  border-color: var(--incorrect-border);
}

.quiz-option.selected-correct {
  border-color: var(--correct-border);
  border-width: 2px;
}

.quiz-option.selected-incorrect {
  border-color: var(--incorrect-border);
  border-width: 2px;
}

.quiz-check-btn {
  margin-top: 0.75rem;
  padding: 0.5rem 1.25rem;
  background: var(--btn-bg);
  color: var(--btn-fg);
  border: none;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: opacity 0.15s;
}

.quiz-check-btn:hover { opacity: 0.9; }
.quiz-check-btn:disabled { opacity: 0.5; cursor: default; }

.quiz-result {
  margin-top: 0.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  min-height: 1.4em;
}

.quiz-score {
  background: var(--score-bg);
  border: 1px solid var(--score-border);
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1rem;
  text-align: center;
  font-weight: 600;
}
`;

const QUIZ_JS = `
(function() {
  const questions = document.querySelectorAll('.quiz-question');
  const totalQuestions = questions.length;
  let answered = 0;
  let correct = 0;

  questions.forEach(function(q) {
    const btn = q.querySelector('.quiz-check-btn');
    const result = q.querySelector('.quiz-result');
    const correctIndices = JSON.parse(q.dataset.correct);
    const isCheckbox = q.querySelector('input[type="checkbox"]') !== null;

    btn.addEventListener('click', function() {
      const inputs = q.querySelectorAll('input');
      const selected = [];
      inputs.forEach(function(inp, i) {
        if (inp.checked) selected.push(i);
      });

      if (selected.length === 0) {
        result.textContent = 'Select an answer first.';
        result.style.color = 'var(--explanation-fg)';
        return;
      }

      q.classList.add('revealed');
      inputs.forEach(function(inp) { inp.disabled = true; });
      btn.disabled = true;

      const isCorrect = arraysEqual(selected.sort(), correctIndices.sort());
      if (isCorrect) {
        correct++;
        result.textContent = 'Correct!';
        result.style.color = 'var(--correct-border)';
      } else {
        result.textContent = 'Incorrect. See explanations below.';
        result.style.color = 'var(--incorrect-border)';
      }

      selected.forEach(function(i) {
        const label = inputs[i].closest('.quiz-option');
        label.classList.add(correctIndices.includes(i) ? 'selected-correct' : 'selected-incorrect');
      });
      correctIndices.forEach(function(i) {
        if (!selected.includes(i)) {
          inputs[i].closest('.quiz-option').classList.add('correct');
        }
      });

      answered++;
      if (answered === totalQuestions) {
        const scoreDiv = document.createElement('div');
        scoreDiv.className = 'quiz-score';
        scoreDiv.textContent = 'Score: ' + correct + ' / ' + totalQuestions;
        const lastQ = questions[questions.length - 1];
        lastQ.parentNode.insertBefore(scoreDiv, lastQ.nextSibling);
      }
    });
  });

  function arraysEqual(a, b) {
    if (a.length !== b.length) return false;
    for (var i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
})();
`;

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
