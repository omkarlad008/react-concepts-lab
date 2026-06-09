# 12 — Testing with Vitest & React Testing Library

## 1. What is automated testing?

### Meaning
Automated testing means writing code that checks whether your application behaves correctly.

### Why we use it
Tests help catch bugs earlier and give confidence when changing or refactoring code.

### Example from our project

```ts
it("clears completed tasks", () => {
  const result = tasksReducer(sampleTasks, {
    type: "clear_completed",
  });

  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("task-1");
});
```

### Interview answer
Automated testing helps verify that application logic and user behaviour work as expected. It is useful for preventing regressions when code changes.

### Common mistake
Only testing happy paths and ignoring edge cases.

---

## 2. What is Vitest?

### Meaning
Vitest is a JavaScript/TypeScript testing framework designed to work well with Vite projects.

### Why we use it
It is fast, modern, and integrates naturally with Vite-based React apps.

### Example from our project

```ts
import { describe, expect, it } from "vitest";
```

### Interview answer
Vitest is a testing framework used to write and run unit and component tests in Vite projects. It provides functions like `describe`, `it`, and `expect`.

### Common mistake
Confusing Vitest with React Testing Library. Vitest runs the tests; React Testing Library helps test React components.

---

## 3. What is React Testing Library?

### Meaning
React Testing Library is a library for testing React components from the user’s point of view.

### Why we use it
It encourages testing behaviour instead of implementation details.

### Example from our project

```tsx
expect(screen.getByRole("button", { name: /active/i })).toBeInTheDocument();
```

### Interview answer
React Testing Library helps test React components by querying the DOM in ways similar to how users interact with the page, such as by text, role, label, or button name.

### Common mistake
Testing internal component state instead of visible behaviour.

---

## 4. What is a unit test?

### Meaning
A unit test checks a small isolated piece of logic.

### Why we use it
It helps verify pure functions and business logic.

### Example from our project

```ts
const result = tasksReducer(sampleTasks, {
  type: "delete_task",
  payload: {
    taskId: "task-1",
  },
});

expect(result).toHaveLength(1);
```

### Interview answer
A unit test checks a small piece of logic in isolation, such as a utility function or reducer. Unit tests are usually fast and focused.

---

## 5. What is a component test?

### Meaning
A component test checks how a React component renders and behaves.

### Why we use it
It verifies that users can see and interact with the UI correctly.

### Example from our project

```tsx
await user.click(screen.getByRole("button", { name: /^active$/i }));

expect(screen.getByText("Active task")).toBeInTheDocument();
expect(screen.queryByText("Completed task")).not.toBeInTheDocument();
```

### Interview answer
A component test renders a React component and checks user-visible behaviour, such as text appearing, buttons working, forms submitting, or filtered content updating.

---

## 6. What is `screen`?

### Meaning
`screen` is used to query the rendered DOM in React Testing Library.

### Why we use it
It gives access to elements the user would see on the page.

### Example from our project

```tsx
screen.getByText("Active task");
```

### Interview answer
`screen` provides query methods for finding elements in the rendered output. It is commonly used with queries like `getByRole`, `getByText`, and `queryByText`.

---

## 7. What is `userEvent`?

### Meaning
`userEvent` simulates realistic user interactions.

### Why we use it
It is better than directly calling event handlers because it tests behaviour closer to how a user interacts with the app.

### Example from our project

```tsx
const user = userEvent.setup();

await user.click(screen.getByRole("button", { name: /^active$/i }));
```

### Interview answer
`userEvent` simulates user actions such as clicking, typing, selecting, and tabbing. It is useful because it tests components through realistic interactions.

---

## 8. What is a mock function?

### Meaning
A mock function is a fake function used in tests to check whether something was called.

### Why we use it
It lets us verify that components call callback props correctly.

### Example from our project

```tsx
const handleFilterChange = vi.fn();

expect(handleFilterChange).toHaveBeenCalledWith("active");
```

### Interview answer
A mock function is used to replace a real function during testing. It can track how many times it was called and what arguments it received.

---

## 9. Why use `MemoryRouter` in tests?

### Meaning
`MemoryRouter` provides routing context during tests without using the real browser URL.

### Why we use it
Some components use `Link` or React Router features, so tests need a router wrapper.

### Example from our project

```tsx
render(
  <MemoryRouter>
    <DashboardPage />
  </MemoryRouter>,
);
```

### Interview answer
`MemoryRouter` is useful for testing React Router components because it provides routing context in memory instead of depending on the browser’s address bar.

---

## 10. Why query by role?

### Meaning
Querying by role finds elements based on accessible roles such as button, heading, link, or textbox.

### Why we use it
It matches how assistive technologies understand the page and encourages accessible UI.

### Example from our project

```tsx
screen.getByRole("button", { name: /clear completed/i });
```

### Interview answer
Querying by role is recommended because it reflects accessible user interactions. It helps ensure elements are properly exposed to users and assistive technologies.

---

## Mini Summary

In Step 12, we added automated testing using Vitest and React Testing Library. We tested reducer logic, filter controls, and dashboard behaviour. The tests check meaningful behaviour such as adding, toggling, deleting, clearing completed tasks, rendering filter buttons, changing filters, and confirming dashboard filtering works correctly.

---

## Interview Practice Questions

1. What is automated testing?
2. What is Vitest?
3. What is React Testing Library?
4. What is the difference between a unit test and a component test?
5. What is `screen` used for?
6. What is `userEvent` used for?
7. What is a mock function?
8. Why do we use `MemoryRouter` in component tests?
9. Why is querying by role recommended?
10. What does it mean to test behaviour instead of implementation details?
11. Why should reducers be easy to unit test?
12. What did we test in this project?

---

## My Project Example Explanation

In this project, I added automated tests using Vitest and React Testing Library. I wrote reducer tests for task actions such as add, toggle, delete, and clear completed. I also tested the `TaskFilterControls` component to confirm it renders filter buttons, highlights the selected filter, and calls the filter change handler. Finally, I tested `DashboardPage` behaviour to confirm active and completed filters work correctly and the clear completed callback is triggered.