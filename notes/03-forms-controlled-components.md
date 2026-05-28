# 03 — Forms & Controlled Components

## 1. What is a controlled component?

### Meaning
A controlled component is a form input whose value is controlled by React state.

### Why we use it
Controlled components make form data predictable because React always knows the current input value.

### Example from our project

```tsx
<input
  type="text"
  value={formData.title}
  onChange={handleTitleChange}
/>
```

Here:

- `value={formData.title}` means the input value comes from React state.
- `onChange={handleTitleChange}` updates the state when the user types.

### Interview answer
A controlled component is a form element where React state controls the input value. The input displays the state value, and every user change updates state through an event handler.

### Common mistake
Adding `value` without `onChange`. This makes the input read-only.

---

## 2. What is form state?

### Meaning
Form state is the React state used to store input values while the user fills out a form.

### Why we use it
It allows us to validate, submit, reset, and control form values.

### Example from our project

```tsx
const [formData, setFormData] = useState<TaskFormState>({
  title: "",
  description: "",
  priority: "medium",
});
```

### Interview answer
Form state stores the current values of form fields inside React state. This allows the component to control input values, validate them, and use them during submission.

### Common mistake
Creating separate state variables for every field when a single object would be cleaner for related fields.

---

## 3. What is `onChange`?

### Meaning
`onChange` is a React event handler that runs when the value of an input changes.

### Why we use it
It allows us to update React state whenever the user types or selects a value.

### Example from our project

```tsx
function handleTitleChange(event: React.ChangeEvent<HTMLInputElement>) {
  setFormData((currentFormData) => ({
    ...currentFormData,
    title: event.target.value,
  }));
}
```

### Interview answer
`onChange` is used to listen for changes in form fields. In controlled components, it updates React state so the UI and state stay in sync.

### Common mistake
Forgetting to preserve the other form fields when updating one field.

Incorrect:

```tsx
setFormData({
  title: event.target.value,
});
```

Correct:

```tsx
setFormData((currentFormData) => ({
  ...currentFormData,
  title: event.target.value,
}));
```

---

## 4. What is `onSubmit`?

### Meaning
`onSubmit` is a form event handler that runs when the form is submitted.

### Why we use it
It lets React handle form submission instead of allowing the browser to refresh the page.

### Example from our project

```tsx
<form className="task-form" onSubmit={handleSubmit}>
```

```tsx
function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();

  // validation and task creation logic
}
```

### Interview answer
`onSubmit` is used to handle form submission in React. It usually calls `event.preventDefault()` to stop the browser’s default page refresh, then runs validation and submission logic.

### Common mistake
Using only button `onClick` for form submission instead of handling the form’s `onSubmit`.

---

## 5. Why do we use `event.preventDefault()`?

### Meaning
`event.preventDefault()` stops the browser’s default form submission behaviour.

### Why we use it
By default, submitting an HTML form reloads the page. In React apps, we usually want to handle the submit in JavaScript without refreshing.

### Example from our project

```tsx
function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();
}
```

### Interview answer
`event.preventDefault()` is used in React form submission to prevent the browser from reloading the page. This allows React to validate the form and update state without losing the current application state.

### Common mistake
Forgetting `preventDefault()`, causing the app to refresh and lose state after form submission.

---

## 6. What is form validation?

### Meaning
Form validation means checking user input before accepting or submitting it.

### Why we use it
It prevents invalid, empty, or incomplete data from being added to the app.

### Example from our project

```tsx
const trimmedTitle = formData.title.trim();

if (trimmedTitle.length === 0) {
  setError("Task title is required.");
  return;
}
```

### Interview answer
Form validation ensures that user input meets required rules before submission. Validation can be done on the client side for immediate feedback and on the server side for security and data integrity.

### Common mistake
Only validating on the frontend in real production apps. Backend validation is also required.

---

## 7. How do we add a new item to array state?

### Meaning
When adding an item to an array in React state, we create a new array instead of mutating the existing one.

### Why we use it
This keeps state updates immutable and predictable.

### Example from our project

```tsx
function handleAddTask(newTask: Task) {
  setTasks((currentTasks) => [newTask, ...currentTasks]);
}
```

### Interview answer
To add an item to array state in React, we create a new array using the spread operator. For example, `[newTask, ...currentTasks]` adds the new item at the beginning without mutating the original array.

### Common mistake
Using `.push()` directly on the state array.

Incorrect:

```tsx
tasks.push(newTask);
setTasks(tasks);
```

Correct:

```tsx
setTasks((currentTasks) => [newTask, ...currentTasks]);
```

---

## 8. What is local state vs parent state?

### Meaning
Local state belongs to one component. Parent state is stored in a parent component and shared with child components through props.

### Why we use it
We keep state in the component that needs to own or coordinate the data.

### Example from our project

`TaskForm` owns temporary form state:

```tsx
const [formData, setFormData] = useState<TaskFormState>({
  title: "",
  description: "",
  priority: "medium",
});
```

`DashboardPage` owns the main task list:

```tsx
const [tasks, setTasks] = useState<Task[]>(initialTasks);
```

`TaskForm` sends the completed new task to the parent:

```tsx
onAddTask(newTask);
```

### Interview answer
Local state is used when data only matters inside one component. If multiple components need the same data or one component needs to update another, the state should usually be lifted to their nearest common parent.

### Common mistake
Keeping important shared state too deep inside a child component, making it difficult for other components to access or update.

---

## 9. What is lifting state up?

### Meaning
Lifting state up means moving state to a common parent component so multiple child components can share or update it.

### Why we use it
It helps keep related components in sync.

### Example from our project

`DashboardPage` owns the `tasks` state because both `TaskForm` and `TaskList` need to interact with tasks:

- `TaskForm` adds a new task.
- `TaskList` displays tasks.
- `TaskItem` toggles and deletes tasks.

### Interview answer
Lifting state up means moving state to the closest common parent component so it can be shared between child components. This is useful when one child needs to update data that another child displays.

### Common mistake
Duplicating the same state in multiple components instead of keeping one source of truth.

---

## Mini Summary

In Step 3, we added a controlled task form. The input, textarea, and select values are controlled by React state. When the form is submitted, React prevents the browser refresh, validates the title, creates a new task, sends it to the parent component, and resets the form. We also learned the difference between temporary local form state and parent-owned task list state.

---

## Interview Practice Questions

1. What is a controlled component?
2. Why do we use controlled components in React?
3. What is form state?
4. How does `onChange` work?
5. What is `onSubmit` used for?
6. Why do we use `event.preventDefault()`?
7. How do you validate a form in React?
8. How do you add a new item to an array in React state?
9. What is the difference between local state and parent state?
10. What does lifting state up mean?
11. Why should we avoid duplicating state?
12. How would you reset a form after submission?

---

## My Project Example Explanation

In this project, I created a controlled `TaskForm` component. The form stores title, description, and priority in local state. When the user types, `onChange` updates the form state. When the form is submitted, `preventDefault()` stops the page refresh, validation checks that the title is not empty, and the new task is sent to `DashboardPage` using the `onAddTask` prop. `DashboardPage` then adds the task to the main task array using an immutable update.