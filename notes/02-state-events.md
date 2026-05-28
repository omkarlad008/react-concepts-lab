# 02 — State, Events & Interactive UI

## 1. What is state in React?

### Meaning
State is data that belongs to a component and can change over time.

### Why we use it
We use state when the UI needs to update after user interaction, API responses, form input, or any changing data.

### Example from our project

```tsx
const [tasks, setTasks] = useState<Task[]>(initialTasks);
```

Here:

- `tasks` is the current state value.
- `setTasks` is the function used to update the state.
- `initialTasks` is the starting value.

### Interview answer
State in React represents data that can change during the lifetime of a component. When state changes, React re-renders the component so the UI stays in sync with the latest data.

### Common mistake
Trying to change state directly instead of using the state updater function.

Incorrect:

```tsx
tasks.push(newTask);
```

Correct:

```tsx
setTasks([...tasks, newTask]);
```

---

## 2. What is `useState`?

### Meaning
`useState` is a React Hook used to add state to a function component.

### Why we use it
It lets components remember data between renders.

### Example from our project

```tsx
const [tasks, setTasks] = useState<Task[]>(initialTasks);
```

### Interview answer
`useState` is a React Hook that allows function components to store and update local state. It returns the current state value and a setter function. Calling the setter function updates the state and triggers a re-render.

### Common mistake
Expecting the state value to update immediately after calling the setter function.

---

## 3. What are event handlers?

### Meaning
Event handlers are functions that run when the user interacts with the UI.

### Why we use them
They allow the app to respond to clicks, typing, form submissions, and other user actions.

### Example from our project

```tsx
<button
  type="button"
  className="secondary-button"
  onClick={() => onToggle(task.id)}
>
  {task.isCompleted ? "Mark active" : "Mark complete"}
</button>
```

### Interview answer
Event handlers in React are functions passed to JSX event props like `onClick`, `onChange`, or `onSubmit`. They are used to respond to user actions and often update component state.

### Common mistake
Calling the function immediately instead of passing a function reference.

Incorrect:

```tsx
onClick={onToggle(task.id)}
```

Correct:

```tsx
onClick={() => onToggle(task.id)}
```

---

## 4. What are immutable updates?

### Meaning
Immutable updates mean creating new arrays or objects instead of directly changing the existing state.

### Why we use it
React relies on new references to detect that state has changed and the UI should re-render.

### Example from our project

```tsx
setTasks((currentTasks) =>
  currentTasks.map((task) =>
    task.id === taskId
      ? { ...task, isCompleted: !task.isCompleted }
      : task,
  ),
);
```

### Interview answer
In React, state should be treated as immutable. Instead of directly modifying arrays or objects, we create updated copies using methods like `.map()`, `.filter()`, or the spread operator. This helps React detect changes correctly and keeps state updates predictable.

### Common mistake
Mutating the object directly.

Incorrect:

```tsx
task.isCompleted = true;
```

Correct:

```tsx
{ ...task, isCompleted: true }
```

---

## 5. How do we update arrays in state?

### Meaning
When state contains an array, we update it by creating a new array.

### Why we use it
This keeps state updates predictable and avoids mutation bugs.

### Example: Toggle task

```tsx
setTasks((currentTasks) =>
  currentTasks.map((task) =>
    task.id === taskId
      ? { ...task, isCompleted: !task.isCompleted }
      : task,
  ),
);
```

### Example: Delete task

```tsx
setTasks((currentTasks) =>
  currentTasks.filter((task) => task.id !== taskId),
);
```

### Interview answer
When updating arrays in React state, we should avoid mutating the original array. For updates, we commonly use `.map()`. For deleting items, we use `.filter()`. For adding items, we can use the spread operator.

### Common mistake
Using mutating methods like `.push()`, `.splice()`, or directly changing an item inside the array.

---

## 6. What is derived state?

### Meaning
Derived state is data calculated from existing state.

### Why we use it
If a value can be calculated from existing state, we usually do not need to store it separately.

### Example from our project

```tsx
const completedTasksCount = tasks.filter((task) => task.isCompleted).length;

const activeTasksCount = tasks.length - completedTasksCount;
```

### Interview answer
Derived state is a value calculated from existing state or props. It should not usually be stored in a separate `useState`, because that can create duplicate state and bugs if values go out of sync.

### Common mistake
Creating extra state for values that can be calculated.

Avoid:

```tsx
const [completedCount, setCompletedCount] = useState(0);
```

Better:

```tsx
const completedCount = tasks.filter((task) => task.isCompleted).length;
```

---

## 7. What does passing functions as props mean?

### Meaning
A parent component can pass a function to a child component through props.

### Why we use it
This allows a child component to notify the parent when something happens.

### Example from our project

`DashboardPage` passes functions to `TaskList`:

```tsx
<TaskList
  tasks={tasks}
  onToggleTask={handleToggleTask}
  onDeleteTask={handleDeleteTask}
/>
```

`TaskItem` calls the function when the button is clicked:

```tsx
onClick={() => onToggle(task.id)}
```

### Interview answer
Passing functions as props allows child components to communicate user actions back to the parent. The parent owns the state, and the child triggers updates by calling the function it received through props.

### Common mistake
Letting too many deeply nested components pass functions around manually. For larger apps, this may be improved using Context, reducers, or state management libraries.

---

## 8. What is conditional rendering?

### Meaning
Conditional rendering means showing different UI depending on data or state.

### Why we use it
Real apps often need to show different views such as loading, empty, success, error, or completed states.

### Example from our project

```tsx
if (tasks.length === 0) {
  return (
    <div className="empty-state">
      <h3>No tasks left</h3>
      <p>You deleted all tasks. We will add a task form in a later step.</p>
    </div>
  );
}
```

### Interview answer
Conditional rendering in React means rendering different JSX based on conditions. This can be done using `if` statements, ternary operators, logical `&&`, or early returns.

### Common mistake
Making JSX too messy with too many nested ternary conditions.

---

## Mini Summary

In Step 2, we made the app interactive using React state and event handlers. We stored tasks in `useState`, toggled task completion using `.map()`, deleted tasks using `.filter()`, and calculated active/completed task counts from state. We also learned how child components can trigger parent state updates by receiving functions as props.

---

## Interview Practice Questions

1. What is state in React?
2. What is `useState`?
3. What happens when state changes?
4. What are event handlers in React?
5. Why should state not be mutated directly?
6. How do you update an object inside an array in React state?
7. How do you delete an item from an array in React state?
8. What is derived state?
9. Why should derived values usually not be stored in separate state?
10. How can a child component update parent state?
11. What is conditional rendering?
12. What is the difference between props and state?

---

## My Project Example Explanation

In this project, I used `useState` to store a list of learning tasks. Each task can be marked complete or active using a button. The task status changes through an immutable `.map()` update. Tasks can also be deleted using `.filter()`. The completed and active task counts are calculated from the current state, so the dashboard cards update automatically whenever the task list changes.