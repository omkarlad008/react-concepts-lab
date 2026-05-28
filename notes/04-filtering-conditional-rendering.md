# 04 — Filtering & Conditional Rendering

## 1. What is filter state?

### Meaning
Filter state stores the currently selected filter option in React state.

### Why we use it
We use filter state when the UI needs to remember which view the user selected.

### Example from our project

```tsx
const [selectedFilter, setSelectedFilter] = useState<TaskFilter>("all");
```

Here:

- `selectedFilter` stores the current filter.
- `setSelectedFilter` updates the selected filter.
- `"all"` is the default filter.

### Interview answer
Filter state is UI state that controls which subset of data should be displayed. In React, we can store the selected filter in `useState` and use it to derive the visible list.

### Common mistake
Creating separate state arrays for all, active, and completed tasks instead of keeping one source of truth.

---

## 2. What is a TypeScript union type?

### Meaning
A union type limits a value to a fixed set of allowed options.

### Why we use it
It makes the code safer because TypeScript can warn us when we use an invalid value.

### Example from our project

```ts
export type TaskFilter = "all" | "active" | "completed";
```

### Interview answer
A TypeScript union type allows a variable to accept only specific values. In this project, `TaskFilter` ensures the selected filter can only be `"all"`, `"active"`, or `"completed"`.

### Common mistake
Using a normal `string` when the value should only support a few valid options.

---

## 3. What is a derived filtered list?

### Meaning
A derived filtered list is a list calculated from existing state.

### Why we use it
We do not need to store filtered tasks separately because they can be calculated from `tasks` and `selectedFilter`.

### Example from our project

```tsx
const filteredTasks = tasks.filter((task) => {
  if (selectedFilter === "active") {
    return !task.isCompleted;
  }

  if (selectedFilter === "completed") {
    return task.isCompleted;
  }

  return true;
});
```

### Interview answer
A derived filtered list is calculated from existing state rather than stored as separate state. This avoids duplicated state and keeps the UI easier to reason about.

### Common mistake
Storing `filteredTasks` in `useState`, then trying to manually keep it in sync with the original `tasks` array.

---

## 4. What is conditional rendering?

### Meaning
Conditional rendering means showing different UI depending on state, props, or data.

### Why we use it
Real applications often need to show different UI for empty, loading, error, success, active, and completed states.

### Example from our project

```tsx
{filteredTasks.length > 0 ? (
  <TaskList
    tasks={filteredTasks}
    onToggleTask={handleToggleTask}
    onDeleteTask={handleDeleteTask}
  />
) : (
  <div className="empty-state">
    <h3>No matching tasks</h3>
    <p>{getEmptyMessage()}</p>
  </div>
)}
```

### Interview answer
Conditional rendering in React means rendering different JSX based on a condition. We can do this using `if` statements, ternary operators, logical `&&`, or early returns.

### Common mistake
Writing too many nested ternary expressions, which makes JSX difficult to read.

---

## 5. What are dynamic CSS classes?

### Meaning
Dynamic CSS classes change depending on state or props.

### Why we use it
They allow the UI to visually reflect the current state.

### Example from our project

```tsx
className={`task-filter-button ${isSelected ? "active" : ""}`}
```

### Interview answer
Dynamic CSS classes allow components to apply different styles based on state or props. In this project, the active filter button gets an additional `active` class when it matches the selected filter.

### Common mistake
Hardcoding styles instead of deriving them from state.

---

## 6. Why keep original state unchanged?

### Meaning
The original `tasks` array remains the source of truth. Filtering only changes what is displayed.

### Why we use it
This prevents data loss and avoids unnecessary state duplication.

### Example from our project

```tsx
const [tasks, setTasks] = useState<Task[]>(initialTasks);
const [selectedFilter, setSelectedFilter] = useState<TaskFilter>("all");
```

The `tasks` state stores all tasks.  
The `selectedFilter` state controls which tasks are shown.

### Interview answer
The original data should remain unchanged when filtering. The UI should derive the visible list from the original data and the selected filter. This keeps state predictable and avoids duplicated data.

### Common mistake
Overwriting the original task list with only filtered tasks.

Incorrect idea:

```tsx
setTasks(tasks.filter((task) => !task.isCompleted));
```

This would permanently remove completed tasks from the main list.

---

## 7. What is parent-owned UI state?

### Meaning
Parent-owned UI state means the parent component stores state that affects multiple child components.

### Why we use it
The selected filter affects both the filter buttons and the task list, so `DashboardPage` owns the filter state.

### Example from our project

```tsx
<TaskFilterControls
  selectedFilter={selectedFilter}
  onFilterChange={setSelectedFilter}
/>
```

### Interview answer
When multiple child components need to use or update the same state, that state should usually live in their nearest common parent. In this project, `DashboardPage` owns the selected filter and passes it to `TaskFilterControls`.

### Common mistake
Keeping the filter state inside `TaskFilterControls`, which would make it harder for `DashboardPage` to know which tasks to display.

---

## Mini Summary

In Step 4, we added task filtering using a `TaskFilter` union type and `selectedFilter` state. We calculated `filteredTasks` from the original `tasks` array instead of storing a separate filtered list. We also used conditional rendering to show either the task list or an empty message, and dynamic CSS classes to highlight the selected filter button.

---

## Interview Practice Questions

1. What is filter state?
2. Why should filtered data usually be derived instead of stored separately?
3. What is a TypeScript union type?
4. How does `.filter()` work in React rendering?
5. What is conditional rendering?
6. What are the different ways to conditionally render JSX?
7. What are dynamic CSS classes?
8. Why should filtering not overwrite the original state?
9. Where should filter state live?
10. What is the difference between source state and derived data?

---

## My Project Example Explanation

In this project, I added filter buttons for all, active, and completed tasks. The selected filter is stored in `selectedFilter` state. The visible task list is calculated using `.filter()` based on the selected filter, while the original `tasks` array remains unchanged. If no tasks match the selected filter, the app shows a helpful empty message. The active filter button is highlighted using a dynamic CSS class.