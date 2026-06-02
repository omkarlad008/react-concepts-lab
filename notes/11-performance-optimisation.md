# 11 — Performance Optimisation

## 1. What is performance optimisation in React?

### Meaning
Performance optimisation means improving how efficiently React calculates, renders, and updates the UI.

### Why we use it
As apps grow, unnecessary calculations and re-renders can make the UI slower. Optimisation helps keep the app responsive.

### Interview answer
React performance optimisation is about avoiding unnecessary work, such as recalculating expensive values or re-rendering components when their props have not changed.

### Common mistake
Optimising too early before there is any real performance issue.

---

## 2. What is `useMemo`?

### Meaning
`useMemo` memoises a calculated value.

### Why we use it
It prevents recalculating a derived value unless its dependencies change.

### Example from our project

```tsx
const filteredTasks = useMemo(() => {
  return tasks.filter((task) => {
    if (selectedFilter === "active") {
      return !task.isCompleted;
    }

    if (selectedFilter === "completed") {
      return task.isCompleted;
    }

    return true;
  });
}, [tasks, selectedFilter]);
```

### Interview answer
`useMemo` caches the result of a calculation and only recalculates it when its dependencies change. It is useful for expensive calculations or derived values passed to memoised child components.

### Common mistake
Using `useMemo` for very cheap calculations everywhere, which can make code more complex without real benefit.

---

## 3. What is `useCallback`?

### Meaning
`useCallback` memoises a function reference.

### Why we use it
It helps keep function props stable between renders.

### Example from our project

```tsx
const toggleTask = useCallback((taskId: string) => {
  dispatch({
    type: "toggle_task",
    payload: {
      taskId,
    },
  });
}, []);
```

### Interview answer
`useCallback` returns a memoised function. It is useful when passing callbacks to memoised child components, because it prevents new function references from being created unnecessarily.

### Common mistake
Thinking `useCallback` automatically makes code faster. It is only useful in certain cases.

---

## 4. What is `React.memo`?

### Meaning
`React.memo` memoises a component.

### Why we use it
It can prevent a component from re-rendering when its props have not changed.

### Example from our project

```tsx
export const TaskItem = memo(function TaskItem({
  task,
  onToggle,
  onDelete,
}: TaskItemProps) {
  return (
    <article className="task-item">
      {/* JSX */}
    </article>
  );
});
```

### Interview answer
`React.memo` is a higher-order component that skips re-rendering a component if its props are the same as the previous render.

### Common mistake
Wrapping every component in `React.memo`. It should be used when props are stable and unnecessary re-renders are a real concern.

---

## 5. What is referential equality?

### Meaning
Referential equality means two values are considered equal only if they reference the same object or function in memory.

### Why we use it
React memoisation often depends on whether references stay the same.

### Example

```tsx
const firstArray = [];
const secondArray = [];

firstArray === secondArray; // false
```

Even though both arrays are empty, they are different references.

### Interview answer
Referential equality means objects, arrays, and functions are compared by reference, not by content. This matters in React because new object or function references can cause memoised components to re-render.

### Common mistake
Creating new arrays, objects, or functions inside render and expecting memoised children to treat them as unchanged.

---

## 6. What are unnecessary re-renders?

### Meaning
An unnecessary re-render happens when a component renders again even though its visible output has not changed.

### Why we avoid them
Too many unnecessary renders can slow down larger apps.

### Example from our project
`TaskItem` is wrapped with `React.memo`, so unchanged task items can avoid re-rendering when possible.

### Interview answer
Unnecessary re-renders are renders that do not change the final UI. They are not always harmful, but in large lists or expensive components, reducing them can improve performance.

---

## 7. What are memoised derived values?

### Meaning
Memoised derived values are calculated values cached with `useMemo`.

### Why we use them
They avoid recalculating values that depend on the same unchanged inputs.

### Example from our project

```tsx
const taskStats = useMemo(() => {
  const completedTasksCount = tasks.filter((task) => task.isCompleted).length;
  const activeTasksCount = tasks.length - completedTasksCount;

  return {
    completedTasksCount,
    activeTasksCount,
    hasCompletedTasks: completedTasksCount > 0,
  };
}, [tasks]);
```

### Interview answer
Memoised derived values are values calculated from state or props and cached with `useMemo`. They recalculate only when dependencies change.

---

## 8. What are stable function references?

### Meaning
A stable function reference means the same function reference is reused between renders.

### Why we use it
Stable function references help memoised child components avoid unnecessary renders.

### Example from our project

```tsx
const deleteTask = useCallback((taskId: string) => {
  dispatch({
    type: "delete_task",
    payload: {
      taskId,
    },
  });
}, []);
```

### Interview answer
Stable function references are useful when passing callbacks to memoised components. `useCallback` helps preserve the same function reference unless dependencies change.

---

## 9. When should optimisation be used?

### Good use cases

- Expensive calculations
- Large lists
- Components that render often
- Memoised child components receiving callbacks
- Derived arrays or objects passed as props

### When not to use it

- Very small/simple components
- Cheap calculations
- When code becomes harder to understand
- Before measuring or noticing a problem

### Interview answer
Optimisation should be used when it solves a real issue or prevents likely unnecessary work in a growing app. It should not be applied blindly because memoisation also adds complexity.

---

## Mini Summary

In Step 11, we added practical React performance optimisation. We used `useMemo` to memoise derived task stats, filtered tasks, empty messages, and dashboard card data. We used `useCallback` to stabilise task action handlers in the `useTasks` hook. We also used `React.memo` for `DashboardCard`, `TaskList`, and `TaskItem` to reduce unnecessary re-renders when props are unchanged.

---

## Interview Practice Questions

1. What is React performance optimisation?
2. What is `useMemo`?
3. What is `useCallback`?
4. What is `React.memo`?
5. What is referential equality?
6. Why do new object or function references matter in React?
7. What are unnecessary re-renders?
8. When should you use `useMemo`?
9. When should you use `useCallback`?
10. When should you avoid optimisation?
11. How did we optimise filtered tasks in this project?
12. Why did we memoise task handlers in `useTasks`?

---

## My Project Example Explanation

In this project, I optimised the task dashboard using memoisation. I used `useMemo` to calculate task stats, filtered tasks, empty messages, and dashboard cards only when their dependencies change. I used `useCallback` in the `useTasks` hook so task handlers keep stable references. I also wrapped `DashboardCard`, `TaskList`, and `TaskItem` with `React.memo` so they can skip unnecessary re-renders when their props remain unchanged.