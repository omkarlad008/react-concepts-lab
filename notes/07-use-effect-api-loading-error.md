# 07 — useEffect, API Calls, Loading & Error States

## 1. What is `useEffect`?

### Meaning
`useEffect` is a React Hook used to run side effects after a component renders.

### Why we use it
React components should mainly describe UI. When we need to do something outside rendering, such as fetching data, updating the document title, subscribing to events, or setting timers, we use `useEffect`.

### Example from our project

```tsx
useEffect(() => {
  async function fetchUsers() {
    // fetch API data here
  }

  fetchUsers();
}, [reloadKey]);
```

### Interview answer
`useEffect` is used to run side effects in function components. It runs after render and can be controlled using a dependency array. Common use cases include API calls, subscriptions, timers, and syncing with external systems.

### Common mistake
Using `useEffect` for values that can be calculated directly during render.

---

## 2. What is a side effect?

### Meaning
A side effect is any operation that interacts with something outside the normal React render flow.

### Why we use it
Real apps often need to communicate with APIs, browser APIs, storage, timers, or external systems.

### Example from our project

```tsx
const response = await fetch(USERS_API_URL, {
  signal: controller.signal,
});
```

Fetching data from an API is a side effect because it depends on an external system.

### Interview answer
A side effect is work that happens outside the component’s pure rendering logic. Examples include API calls, timers, subscriptions, logging, and interacting with browser APIs.

### Common mistake
Putting side-effect logic directly in the component body, which can cause it to run on every render.

---

## 3. What is the dependency array?

### Meaning
The dependency array controls when `useEffect` runs.

### Why we use it
It prevents effects from running unnecessarily and lets React know which values the effect depends on.

### Example from our project

```tsx
useEffect(() => {
  // fetch users
}, [reloadKey]);
```

This effect runs:

- after the first render
- whenever `reloadKey` changes

### Interview answer
The dependency array tells React when to re-run an effect. If the array is empty, the effect runs once after the first render. If it contains values, the effect runs whenever one of those values changes.

### Common mistake
Forgetting dependencies, which can cause stale values or unexpected behaviour.

---

## 4. What is loading state?

### Meaning
Loading state tracks whether data is currently being fetched.

### Why we use it
It gives users feedback while the app waits for a response.

### Example from our project

```tsx
const [isLoading, setIsLoading] = useState(true);
```

```tsx
{isLoading && (
  <div className="status-panel loading-panel">
    <h4>Loading users...</h4>
    <p>Please wait while the app fetches data.</p>
  </div>
)}
```

### Interview answer
Loading state is used to represent that an async operation is in progress. It helps show feedback to users and prevents confusing blank screens.

### Common mistake
Not showing any loading UI, which makes the app look broken or unresponsive.

---

## 5. What is error state?

### Meaning
Error state stores information about something that went wrong.

### Why we use it
It allows the UI to show a helpful message and recovery option instead of silently failing.

### Example from our project

```tsx
const [error, setError] = useState("");
```

```tsx
if (!response.ok) {
  throw new Error("Failed to fetch users. Please try again.");
}
```

### Interview answer
Error state is used to store and display errors from async operations. A good UI should handle failure states gracefully and provide a way to retry where possible.

### Common mistake
Only testing the successful API case and ignoring failed requests.

---

## 6. What is success state?

### Meaning
Success state is the UI shown when data has loaded correctly.

### Why we use it
It displays the final usable result to the user.

### Example from our project

```tsx
{!isLoading && error.length === 0 && users.length > 0 && (
  <div className="api-user-grid">
    {users.map((user) => (
      <article key={user.id} className="api-user-card">
        <h4>{user.name}</h4>
        <p>@{user.username}</p>
      </article>
    ))}
  </div>
)}
```

### Interview answer
Success state is the UI shown after data is fetched successfully. It usually renders the returned data, such as cards, tables, lists, or detail views.

### Common mistake
Assuming success data always exists without checking for empty arrays or missing values.

---

## 7. What is empty state?

### Meaning
Empty state is shown when an operation succeeds but returns no data.

### Why we use it
It explains that the request worked, but there is nothing to display.

### Example from our project

```tsx
{!isLoading && error.length === 0 && users.length === 0 && (
  <div className="status-panel empty-panel">
    <h4>No users found</h4>
    <p>The request worked, but the API returned an empty list.</p>
  </div>
)}
```

### Interview answer
An empty state handles the case where data loads successfully but the result is empty. It improves user experience by clearly explaining that nothing is available.

### Common mistake
Showing a blank screen when an API returns an empty array.

---

## 8. What is `AbortController`?

### Meaning
`AbortController` is a browser API that can cancel an ongoing fetch request.

### Why we use it
It helps avoid updating state after a component unmounts or after a request is no longer needed.

### Example from our project

```tsx
const controller = new AbortController();

const response = await fetch(USERS_API_URL, {
  signal: controller.signal,
});

return () => {
  controller.abort();
};
```

### Interview answer
`AbortController` can cancel a fetch request. In React, it is useful inside `useEffect` cleanup to avoid updating state after the component unmounts or before a newer request starts.

### Common mistake
Ignoring cleanup for async effects, especially when requests can overlap or components can unmount.

---

## 9. What is effect cleanup?

### Meaning
Effect cleanup is a function returned from `useEffect`.

### Why we use it
It lets us clean up work before the component unmounts or before the effect runs again.

### Example from our project

```tsx
return () => {
  controller.abort();
};
```

### Interview answer
A cleanup function in `useEffect` runs before the component unmounts or before the effect re-runs. It is commonly used to clean up subscriptions, timers, event listeners, or API requests.

### Common mistake
Forgetting to clean up subscriptions, timers, or requests, which can cause memory leaks or unwanted updates.

---

## 10. What is a retry or reload pattern?

### Meaning
A retry or reload pattern allows the user to run the async operation again.

### Why we use it
Network requests can fail, so users should have a way to try again.

### Example from our project

```tsx
const [reloadKey, setReloadKey] = useState(0);

function handleReload() {
  setReloadKey((currentKey) => currentKey + 1);
}
```

```tsx
useEffect(() => {
  // fetch users
}, [reloadKey]);
```

### Interview answer
A retry pattern lets the user trigger an async operation again after failure or on demand. In React, one simple approach is to keep a reload key in state and include it in the effect dependency array.

### Common mistake
Duplicating fetch logic in multiple button handlers instead of reusing one effect or one fetch function.

---

## Mini Summary

In Step 7, we added an API Practice page that fetches users from a fake REST API. We used `useEffect` to run the API call after render, `useState` to manage users, loading, error, and reload state, and `AbortController` to clean up requests. The UI now handles loading, success, empty, and error states.

---

## Interview Practice Questions

1. What is `useEffect`?
2. What is a side effect in React?
3. When does `useEffect` run?
4. What does the dependency array do?
5. What happens if the dependency array is empty?
6. How do you fetch API data in React?
7. Why do we need loading state?
8. Why do we need error state?
9. What is an empty state?
10. What is `AbortController`?
11. What is effect cleanup?
12. How would you implement a retry button for a failed API call?
13. Why should API calls usually not be placed directly in the component body?
14. What is the difference between client state and server/API data?

---

## My Project Example Explanation

In this project, I created an API Practice page that fetches users from JSONPlaceholder. I used `useEffect` to run the fetch request after the component renders. I stored users, loading state, error state, and reload state using `useState`. The page shows a loading panel while the request is running, an error panel if the request fails, an empty panel if no users are returned, and user cards when the request succeeds. I also used `AbortController` in the effect cleanup to cancel the request safely if the component unmounts or the effect runs again.