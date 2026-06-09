# 13 — Final Polish, Accessibility Review & Portfolio README

## 1. What is accessibility?

### Meaning
Accessibility means making an application usable by as many people as possible, including users who rely on keyboards, screen readers, or other assistive technologies.

### Why we use it
Accessible apps are easier to use, more inclusive, and often better structured.

### Example from our project

```tsx
<a className="skip-link" href="#main-content">
  Skip to main content
</a>
```

### Interview answer
Accessibility in frontend development means building interfaces that users with different abilities can use effectively. This includes semantic HTML, keyboard support, visible focus states, labels, and screen-reader-friendly structure.

---

## 2. What is a skip link?

### Meaning
A skip link lets keyboard users jump directly to the main page content.

### Why we use it
Without a skip link, keyboard users may need to tab through the full navigation on every page.

### Example from our project

```tsx
<a className="skip-link" href="#main-content">
  Skip to main content
</a>

<main id="main-content" className="app-main">
  {children}
</main>
```

### Interview answer
A skip link is an accessibility feature that allows keyboard users to bypass repeated navigation and move directly to the main content area.

---

## 3. What are visible focus styles?

### Meaning
Visible focus styles show which element is currently focused when navigating with keyboard.

### Why we use it
Keyboard users need to know where they are on the page.

### Example from our project

```css
button:focus-visible,
a:focus-visible,
input:focus-visible,
select:focus-visible,
textarea:focus-visible {
  outline: 3px solid var(--color-primary);
  outline-offset: 3px;
}
```

### Interview answer
Visible focus styles help keyboard users understand which interactive element is currently selected. They are important for accessibility and usability.

---

## 4. What is semantic HTML?

### Meaning
Semantic HTML means using HTML elements according to their meaning.

### Why we use it
It improves accessibility, readability, and structure.

### Example from our project

```tsx
<header>
<nav>
<main>
<section>
<article>
<form>
```

### Interview answer
Semantic HTML uses meaningful elements like `header`, `main`, `nav`, `section`, and `article` instead of relying only on generic `div` elements. This helps browsers, screen readers, and developers understand the page structure.

---

## 5. Why is portfolio documentation important?

### Meaning
Portfolio documentation explains what the project does, what technologies it uses, and what concepts it demonstrates.

### Why we use it
Recruiters and interviewers may quickly scan GitHub projects, so clear documentation helps them understand the value of the work.

### Example from our project

```txt
README.md
PROJECT_SUMMARY.md
notes/
```

### Interview answer
Good project documentation helps explain the purpose, features, tech stack, learning outcomes, setup instructions, and testing approach. It makes the project easier to review and discuss in interviews.

---

## Mini Summary

In Step 13, we polished the project for portfolio use. We added a skip link, improved focus styles, updated the concept tracker, created a project summary file, and added accessibility notes to the README. These changes make the project easier to present, review, and discuss in interviews.

---

## Interview Practice Questions

1. What is accessibility?
2. What is a skip link?
3. Why are visible focus styles important?
4. What is semantic HTML?
5. Why should forms have labels?
6. Why is keyboard navigation important?
7. What accessibility improvements did we add?
8. Why is project documentation useful for a portfolio?
9. What should a good README include?
10. How would you explain this project in an interview?

---

## My Project Example Explanation

In this project, I added final accessibility and portfolio polish. I added a skip link so keyboard users can jump directly to the main content. I also added visible focus styles for buttons, links, inputs, selects, and textareas. I updated the Concepts page and created a `PROJECT_SUMMARY.md` file to clearly explain the project features, tech stack, concepts practised, testing, and portfolio value.