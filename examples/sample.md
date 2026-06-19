---
title: "JavaScript Variables"
tags: [javascript, variables, let, const, var]
group: "JavaScript Basics"
---

# Variables in JavaScript

Variables are containers for storing data values. In modern JavaScript, there are three ways to
declare variables.

## `let` and `const`

The `let` keyword declares a block-scoped variable that can be reassigned. The `const` keyword
declares a block-scoped variable that cannot be reassigned after initialization.

```javascript
let count = 0;
count = 1; // OK

const PI = 3.14159;
// PI = 3; // Error: Assignment to constant variable
```

Test your understanding:

```quiz
What is the key difference between `let` and `const`?

  - [x] `let` allows reassignment, `const` does not
    Correct! `const` creates a binding that cannot be reassigned.

  - [ ] `const` is faster than `let`
    Nope — there is no performance difference between them.

  - [ ] Both are exactly the same
    Not quite. `const` prevents reassignment while `let` allows it.
```

## `var` — The Legacy Way

Before ES6, `var` was the only way to declare variables. It is function-scoped rather than
block-scoped, which can lead to surprising behavior.

```javascript
if (true) {
  var legacy = "I leak out!";
}
console.log(legacy); // "I leak out!" — not an error
```

For new code, prefer `let` or `const`. You'll rarely need `var`.

```quiz
Which declaration should you use by default in modern JavaScript?

  - [ ] `var`
    Avoid `var` in modern code — it has confusing scoping rules.

  - [ ] `let`
    Good choice for variables that will be reassigned.

  - [x] `const`
    Best default! Use `const` unless you know you need to reassign.

  - [ ] It doesn't matter
    It does matter. `const` communicates intent and prevents accidental reassignment.
```

## Scope

Scope determines where a variable is accessible. Block scope (introduced by `let` and `const`) means
a variable only exists within the nearest set of curly braces `{}`.

```javascript
function example() {
  if (true) {
    let blockScoped = "only here";
    var functionScoped = "accessible in entire function";
  }
  // blockScoped is not accessible here
  // functionScoped IS accessible here
}
```

```quiz
Select all valid variable declarations (check all that apply):

  - [x] `let name = "Alice";`
  - [x] `const age = 30;`
  - [ ] `const name = "Alice"; name = "Bob";`
    You cannot reassign a `const` variable.
  - [x] `let count;`
    `let` can be declared without initialization and assigned later.
  - [ ] `function = "test";`
    Missing a declaration keyword (`let`, `const`, or `var`).
```

## Summary

- Use `const` by default for values that won't change
- Use `let` when you need to reassign
- Avoid `var` in modern JavaScript
- Remember that `let` and `const` are block-scoped

## Flash Cards

Use flash cards for quick reference and memorization:

```flashcard
What is a closure?
  A function that remembers and can access variables from its outer (enclosing) scope even after the outer function has finished executing.

What is hoisting?
  JavaScript's behavior of moving variable and function declarations to the top of their scope during compilation, making them accessible before they are declared.

What is the difference between == and ===?
  == performs type coercion before comparison, while === compares both value and type without coercion.
```
