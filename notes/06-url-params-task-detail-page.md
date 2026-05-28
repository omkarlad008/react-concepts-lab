# 06 — URL Params & Task Detail Page

## 1. What are URL params?

### Meaning
URL params are dynamic values inside a route path.

### Why we use it
They allow one route pattern to show different data based on the URL.

### Example from our project

```tsx
<Route
  path="/tasks/:taskId"
  element={
    <TaskDetailPage
      tasks={tasks}
      onToggleTask={handleToggleTask}
      onDeleteTask={handleDeleteTask}
    />
  }
/>
```

Here, `:taskId` is dynamic.

Example URLs:

```txt
/tasks/task-1
/tasks/task-2
/tasks/task-3
```

### Interview answer
URL params are dynamic parts of a route. They allow a single route component to render different content based on values from the URL, such as an ID.

### Common mistake
Creating separate routes for each item instead of using one dynamic route.

Incorrect idea:

```tsx
<Route path="/tasks/task-1" element={<TaskOne />} />
<Route path="/tasks/task-2" element={<TaskTwo />} />
```

Better:

```tsx
<Route path="/tasks/:taskId" element={<TaskDetailPage />} />
```

---

## 2. What is `useParams`?

### Meaning
`useParams` is a React Router hook used to read dynamic values from the URL.

### Why we use it
It allows a page component to know which item should be displayed.

### Example from our project

```tsx
const { taskId } = useParams<{ taskId: string }>();
```

### Interview answer
`useParams` is a React Router hook that returns the dynamic route parameters from the current URL. For example, if the route is `/tasks/:taskId`, `useParams` can read the `taskId` value.

### Common mistake
Forgetting that URL params may be `undefined`, so code should handle missing or invalid params safely.

---

## 3. What is a dynamic route?

### Meaning
A dynamic route is a route that includes a variable part.

### Why we use it
It lets one page component handle many similar pages.

### Example from our project

```tsx
<Route path="/tasks/:taskId" element={<TaskDetailPage />} />
```

This route can match:

```txt
/tasks/task-1
/tasks/task-2
/tasks/task-999
```

### Interview answer
A dynamic route is a route pattern that includes variables. It is commonly used for detail pages such as products, users, posts, or tasks.

### Common mistake
Not handling the case where the requested item does not exist.

---

## 4. How do we find data by ID?

### Meaning
After reading the ID from the URL, we find the matching item in the data array.

### Why we use it
The URL tells us which task the user wants to view.

### Example from our project

```tsx
const task = tasks.find((currentTask) => currentTask.id === taskId);
```

### Interview answer
After reading an ID from the URL, we can use `.find()` to locate the matching item in an array. If no item is found, the UI should show a safe fallback such as a Not Found message.

### Common mistake
Assuming the item always exists and trying to render properties from `undefined`.

Incorrect:

```tsx
<h2>{task.title}</h2>
```

If `task` is undefined, this crashes.

Correct:

```tsx
if (!task) {
  return <p>Task not found</p>;
}
```

---

## 5. What is `Link`?

### Meaning
`Link` is a React Router component used for internal navigation.

### Why we use it
It changes the route without refreshing the whole page.

### Example from our project

```tsx
<Link className="secondary-button link-button" to={`/tasks/${task.id}`}>
  View details
</Link>
```

### Interview answer
`Link` is used for internal navigation in React Router. It updates the URL and renders the matching route without doing a full browser reload.

### Common mistake
Using a normal `<a href="">` for internal app navigation, which can trigger a full page refresh.

---

## 6. What is `useNavigate`?

### Meaning
`useNavigate` is a React Router hook used for programmatic navigation.

### Why we use it
Sometimes navigation should happen after an action, such as deleting a task or submitting a form.

### Example from our project

```tsx
const navigate = useNavigate();

function handleDeleteAndReturn() {
  onDeleteTask(task.id);
  navigate("/");
}
```

### Interview answer
`useNavigate` is used to navigate programmatically in React Router. It is useful when navigation should happen after logic runs, such as after deleting, saving, or submitting data.

### Common mistake
Using `useNavigate` for normal links where a simple `Link` would be clearer.

---

## 7. What is lifting state above routed pages?

### Meaning
Lifting state above routed pages means moving shared state to a component that sits above multiple routes.

### Why we use it
Both `DashboardPage` and `TaskDetailPage` need access to the same task list, so the state should live in `App`.

### Example from our project

```tsx
function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <DashboardPage
            tasks={tasks}
            onAddTask={handleAddTask}
            onToggleTask={handleToggleTask}
            onDeleteTask={handleDeleteTask}
          />
        }
      />

      <Route
        path="/tasks/:taskId"
        element={
          <TaskDetailPage
            tasks={tasks}
            onToggleTask={handleToggleTask}
            onDeleteTask={handleDeleteTask}
          />
        }
      />
    </Routes>
  );
}
```

### Interview answer
When multiple routed pages need the same state, the state should be lifted to their nearest common parent. In this project, `App` owns the task state because both the dashboard and task detail page need to read or update tasks.

### Common mistake
Keeping separate task state inside each page, which causes the pages to become out of sync.

---

## 8. What is route-based UI?

### Meaning
Route-based UI means the page content is determined by the current URL.

### Why we use it
It allows users to bookmark, refresh, and share specific pages.

### Example from our project

```txt
/tasks/task-1
```

This URL directly opens the detail page for `task-1`.

### Interview answer
Route-based UI means the URL controls which component or view is shown. This is important for navigation, bookmarking, browser history, and shareable pages.

### Common mistake
Showing detail views only through temporary state, which can break when the user refreshes the page.

---

## Mini Summary

In Step 6, we added a dynamic task detail page using the route `/tasks/:taskId`. Each task now has a `View details` link that opens a route-based detail page. We used `useParams` to read the task ID from the URL, `.find()` to locate the matching task, and `useNavigate` to return to the dashboard after deleting a task. We also lifted task state from `DashboardPage` into `App` so both routed pages can use the same task data.

---

## Interview Practice Questions

1. What are URL params?
2. What is a dynamic route?
3. What does `useParams` do?
4. How do you create a detail page using React Router?
5. How do you find an item based on a URL param?
6. How should you handle an invalid URL param?
7. What is the difference between `Link` and `useNavigate`?
8. When should state be lifted above routed pages?
9. Why should internal navigation use `Link` instead of `<a>`?
10. Why are route-based detail pages useful?

---

## My Project Example Explanation

In this project, I added a dynamic task detail route using `/tasks/:taskId`. Each task has a `View details` link that navigates to its detail page. The detail page reads the task ID from the URL using `useParams`, finds the matching task from the shared task state, and shows its title, description, status, priority, and ID. I also used `useNavigate` to send the user back to the dashboard after deleting a task. To make this work across routes, I lifted the main task state into `App`.