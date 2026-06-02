# 09 — useReducer & Task State Refactor

## 1. What is `useReducer`?

### Meaning
`useReducer` is a React Hook used to manage state with a reducer function.

### Why we use it
It is useful when state updates become more complex or when multiple actions update the same state.

### Example from our project

```tsx
const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
```

### Interview answer
`useReducer` is a React Hook for managing state using a reducer function. Instead of directly calling a setter like `setTasks`, components dispatch actions, and the reducer decides how the state should change.

### Common mistake
Using `useReducer` for very simple state where `useState` would be easier.

---

## 2. What is a reducer function?

### Meaning
A reducer function receives the current state and an action, then returns the next state.

### Why we use it
It keeps related state update logic in one predictable place.

### Example from our project

```ts
export function tasksReducer(tasks: Task[], action: TaskAction): Task[] {
  switch (action.type) {
    case "add_task": {
      return [action.payload, ...tasks];
    }

    case "toggle_task": {
      return tasks.map((task) =>
        task.id === action.payload.taskId
          ? { ...task, isCompleted: !task.isCompleted }
          : task,
      );
    }

    default: {
      return tasks;
    }
  }
}
```

### Interview answer
A reducer is a pure function that takes the current state and an action, then returns the next state. It should not mutate the existing state directly.

### Common mistake
Mutating the existing state inside the reducer.

Incorrect:

```ts
tasks.push(newTask);
return tasks;
```

Correct:

```ts
return [newTask, ...tasks];
```

---

## 3. What is an action object?

### Meaning
An action object describes what state update should happen.

### Why we use it
It makes state changes explicit and easier to understand.

### Example from our project

```ts
dispatch({
  type: "toggle_task",
  payload: {
    taskId,
  },
});
```

### Interview answer
An action is an object that describes a state change. It usually has a `type` field and may include a `payload` containing extra data needed for the update.

### Common mistake
Using unclear action names like `"update"` instead of specific names like `"toggle_task"` or `"delete_task"`.

---

## 4. What is `dispatch`?

### Meaning
`dispatch` is the function used to send actions to the reducer.

### Why we use it
Components do not directly update reducer state. They dispatch actions.

### Example from our project

```tsx
function handleDeleteTask(taskId: string) {
  dispatch({
    type: "delete_task",
    payload: {
      taskId,
    },
  });
}
```

### Interview answer
`dispatch` sends an action to the reducer. React then calls the reducer with the current state and the action, and the reducer returns the next state.

### Common mistake
Trying to directly call the reducer from the component instead of using `dispatch`.

---

## 5. What is a discriminated union type?

### Meaning
A discriminated union is a TypeScript union where each option has a shared field that identifies the shape of the object.

### Why we use it
It helps TypeScript understand which payload belongs to which action type.

### Example from our project

```ts
export type TaskAction =
  | {
      type: "add_task";
      payload: Task;
    }
  | {
      type: "toggle_task";
      payload: {
        taskId: string;
      };
    }
  | {
      type: "clear_completed";
    };
```

### Interview answer
A discriminated union is a TypeScript pattern where each union member has a common field, usually `type`, that identifies which object shape is being used. It is useful for reducer actions because TypeScript can infer the correct payload based on the action type.

### Common mistake
Using `type: string` and `payload: any`, which removes TypeScript safety.

---

## 6. What is a pure function?

### Meaning
A pure function returns the same output for the same input and does not cause side effects.

### Why we use it
Reducers should be predictable and safe.

### Example from our project

```ts
case "clear_completed": {
  return tasks.filter((task) => !task.isCompleted);
}
```

This is pure because it returns a new array and does not modify the original array.

### Interview answer
A pure function does not mutate its inputs and does not perform side effects. Reducers should be pure because they calculate the next state from the current state and an action.

### Common mistake
Calling APIs, changing localStorage, or mutating arrays inside a reducer.

---

## 7. Why centralise state update logic?

### Meaning
Centralising state update logic means keeping all related updates in one place.

### Why we use it
It makes the code easier to maintain as the app grows.

### Example from our project
All task updates now live inside:

```txt
src/reducers/tasksReducer.ts
```

Instead of spreading task update logic across many components.

### Interview answer
Centralising state logic makes updates easier to understand, test, and maintain. When using `useReducer`, all state transitions are handled in one reducer instead of being scattered across multiple event handlers.

### Common mistake
Using a reducer but still keeping complex update logic in components.

---

## 8. When is `useReducer` better than `useState`?

### Meaning
`useReducer` is better when state logic has multiple related actions or complex update rules.

### Why we use it
It gives structure to state changes.

### Example from our project
Task state has several related actions:

```txt
add_task
toggle_task
delete_task
clear_completed
```

### Interview answer
`useReducer` is useful when state updates are complex, when there are multiple related actions, or when the next state depends on the previous state. `useState` is usually better for simple independent values.

### Common mistake
Thinking `useReducer` is always better than `useState`. It is not; it depends on complexity.

---

## 9. What changed in our app flow?

### Before Step 9

```txt
User clicks button
↓
Handler calls setTasks
↓
State updates
↓
UI re-renders
```

### After Step 9

```txt
User clicks button
↓
Handler dispatches action
↓
Reducer receives current state + action
↓
Reducer returns next state
↓
UI re-renders
```

### Interview answer
After refactoring to `useReducer`, components describe what happened by dispatching actions. The reducer contains the logic for how the state changes.

---

## Mini Summary

In Step 9, we refactored task state from `useState` to `useReducer`. We created a `tasksReducer` function and a `TaskAction` discriminated union type. Task updates now happen through dispatched actions such as `add_task`, `toggle_task`, `delete_task`, and `clear_completed`. This makes task state management more structured and predictable.

---

## Interview Practice Questions

1. What is `useReducer`?
2. What is a reducer function?
3. What is an action object?
4. What does `dispatch` do?
5. What is a discriminated union type?
6. Why should reducers be pure?
7. What should you avoid doing inside a reducer?
8. When is `useReducer` better than `useState`?
9. What are the advantages of centralising state update logic?
10. How did we implement clear completed tasks?

---

## My Project Example Explanation

In this project, I refactored task state management from `useState` to `useReducer`. I created a `tasksReducer` that handles actions for adding, toggling, deleting, and clearing completed tasks. Components now dispatch action objects instead of directly updating task state. This keeps all task update logic in one file and makes the app easier to maintain as more task-related features are added.