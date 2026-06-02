# 10 — Custom Hooks & LocalStorage

## 1. What is a custom hook?

### Meaning
A custom hook is a reusable function that uses React Hooks inside it.

### Why we use it
Custom hooks help move reusable stateful logic out of components.

### Example from our project

```tsx
export function useTasks() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks, loadInitialTasks);

  return {
    tasks,
    addTask,
    toggleTask,
    deleteTask,
    clearCompletedTasks,
    resetTasks,
  };
}
```

### Interview answer
A custom hook is a reusable function that starts with `use` and can call other React Hooks. It helps extract and reuse stateful logic between components.

### Common mistake
Creating a normal function that calls Hooks but does not follow the custom hook naming rule.

---

## 2. Why must custom hooks start with `use`?

### Meaning
React expects functions that call Hooks to start with `use`.

### Why we use it
This allows React and linting tools to enforce the Rules of Hooks.

### Example from our project

```tsx
useTasks()
useLocalStorageState()
```

### Interview answer
Custom hooks must start with `use` because React uses this convention to identify functions that call Hooks. It helps ensure Hooks are used correctly.

---

## 3. What is localStorage?

### Meaning
`localStorage` is a browser storage API that saves data in the user’s browser.

### Why we use it
It allows simple data to persist after page refreshes.

### Example from our project

```ts
localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
```

### Interview answer
`localStorage` is browser-based key-value storage. It stores string data and persists after page refreshes, making it useful for simple preferences or small client-side data.

### Common mistake
Trying to store objects directly without converting them to strings.

---

## 4. What is `JSON.stringify`?

### Meaning
`JSON.stringify` converts JavaScript data into a string.

### Why we use it
`localStorage` only stores strings, so arrays and objects must be converted before saving.

### Example from our project

```ts
localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
```

### Interview answer
`JSON.stringify` converts JavaScript values such as objects or arrays into JSON strings so they can be stored or sent over a network.

---

## 5. What is `JSON.parse`?

### Meaning
`JSON.parse` converts a JSON string back into JavaScript data.

### Why we use it
When reading from `localStorage`, saved data must be parsed back into usable JavaScript values.

### Example from our project

```ts
const parsedTasks = JSON.parse(storedTasks) as Task[];
```

### Interview answer
`JSON.parse` converts a JSON string back into JavaScript data. It is commonly used when reading structured data from `localStorage` or API responses.

### Common mistake
Not handling parse errors when stored data is invalid.

---

## 6. What is lazy initial state?

### Meaning
Lazy initial state means passing a function to `useState` or `useReducer` so expensive setup runs only once.

### Why we use it
Reading from `localStorage` should happen during initial setup, not on every render.

### Example from our project

```tsx
const [value, setValue] = useState<T>(() => {
  const storedValue = localStorage.getItem(key);

  if (!storedValue) {
    return initialValue;
  }

  return JSON.parse(storedValue) as T;
});
```

### Interview answer
Lazy initial state lets React run the initializer function only during the first render. It is useful for expensive calculations or reading initial values from storage.

---

## 7. What is persistent state?

### Meaning
Persistent state is state that survives page refreshes or browser sessions.

### Why we use it
Users expect important preferences or local changes to remain after refresh.

### Example from our project
Before Step 10, new tasks disappeared after refresh.

After Step 10:

```txt
Added tasks stay
Deleted tasks stay deleted
Completed tasks stay completed
Theme preference stays saved
```

### Interview answer
Persistent state means storing state outside React memory so it survives refreshes. Common options include `localStorage`, session storage, IndexedDB, cookies, or a backend database.

---

## 8. What is effect-based persistence?

### Meaning
Effect-based persistence means saving state whenever it changes using `useEffect`.

### Why we use it
React state changes first, then the effect syncs the latest value to `localStorage`.

### Example from our project

```tsx
useEffect(() => {
  localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
}, [tasks]);
```

### Interview answer
Effect-based persistence uses `useEffect` to sync React state with an external storage system whenever the state changes.

### Common mistake
Writing to `localStorage` directly inside every event handler instead of centralising persistence logic.

---

## 9. Why separate reusable logic into hooks?

### Meaning
Reusable logic should be moved out of UI components when it becomes repeated or complex.

### Why we use it
It keeps components cleaner and easier to understand.

### Example from our project
`App.tsx` no longer manages reducer and `localStorage` logic directly. It uses:

```tsx
const {
  tasks,
  addTask,
  toggleTask,
  deleteTask,
  clearCompletedTasks,
  resetTasks,
} = useTasks();
```

### Interview answer
Custom hooks separate reusable stateful logic from UI components. This improves readability, reuse, testing, and maintainability.

---

## Mini Summary

In Step 10, we added persistent state using custom hooks and `localStorage`. We created `useLocalStorageState` for reusable persisted state and `useTasks` for task reducer plus persistence logic. Tasks and theme now stay saved after refreshing the browser.

---

## Interview Practice Questions

1. What is a custom hook?
2. Why do custom hooks start with `use`?
3. What is `localStorage`?
4. Why do we need `JSON.stringify`?
5. Why do we need `JSON.parse`?
6. What is lazy initial state?
7. What is persistent state?
8. What is effect-based persistence?
9. Why move task logic into `useTasks`?
10. What kind of data should not be stored in `localStorage`?

---

## My Project Example Explanation

In this project, I created a reusable `useLocalStorageState` hook to persist simple state values such as theme. I also created a `useTasks` hook that combines `useReducer` with `localStorage` persistence. The app now saves tasks whenever they change and loads saved tasks during initial render. This means added, deleted, completed, and cleared tasks stay saved after refresh. The selected theme also stays saved after refresh.