# 05 — React Router & Multiple Pages

## 1. What is React Router?

### Meaning
React Router is a routing library that lets a React app show different pages based on the browser URL.

### Why we use it
Single-page React apps do not reload the whole page when navigating. React Router lets us move between views like Dashboard, Concepts, Notes, and Settings while staying inside the same app.

### Example from our project

```tsx
<BrowserRouter>
  <AppShell>
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/concepts" element={<ConceptsPage />} />
      <Route path="/notes" element={<NotesPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </AppShell>
</BrowserRouter>
```

### Interview answer
React Router is used to manage client-side navigation in React applications. It maps URL paths to React components, allowing users to move between pages without a full browser refresh.

### Common mistake
Using normal `<a>` tags for internal navigation, which can cause full page reloads.

---

## 2. What is `BrowserRouter`?

### Meaning
`BrowserRouter` enables routing using the browser’s URL/history system.

### Why we use it
It allows clean URLs like `/concepts`, `/notes`, and `/settings`.

### Example from our project

```tsx
<BrowserRouter>
  <AppShell>
    <Routes>
      {/* route definitions */}
    </Routes>
  </AppShell>
</BrowserRouter>
```

### Interview answer
`BrowserRouter` wraps the React app and enables route handling using the browser history API. It allows React Router to update the UI when the URL changes.

### Common mistake
Forgetting to wrap the app in `BrowserRouter`, which causes routing components like `Routes`, `Route`, `Link`, and `NavLink` to fail.

---

## 3. What are `Routes` and `Route`?

### Meaning
`Routes` groups route definitions.  
`Route` maps a URL path to a React component.

### Why we use it
They define which page should render for each URL.

### Example from our project

```tsx
<Routes>
  <Route path="/" element={<DashboardPage />} />
  <Route path="/concepts" element={<ConceptsPage />} />
  <Route path="/notes" element={<NotesPage />} />
</Routes>
```

### Interview answer
`Routes` is a container for route definitions, and each `Route` maps a path to a component. When the URL matches a route path, React Router renders the matching element.

### Common mistake
Writing the component directly instead of passing it through the `element` prop.

Incorrect:

```tsx
<Route path="/concepts" component={ConceptsPage} />
```

Correct:

```tsx
<Route path="/concepts" element={<ConceptsPage />} />
```

---

## 4. What is client-side routing?

### Meaning
Client-side routing means navigation happens inside the React app without requesting a new HTML page from the server for every route.

### Why we use it
It makes navigation feel faster and keeps the app experience smooth.

### Example from our project
Clicking the `Concepts` nav link changes the URL to:

```txt
/concepts
```

React Router then renders:

```tsx
<ConceptsPage />
```

without refreshing the whole page.

### Interview answer
Client-side routing means the browser URL changes, but the React app handles which component to show without a full page reload. This is common in single-page applications.

### Common mistake
Assuming every route is a separate physical HTML file.

---

## 5. What is `NavLink`?

### Meaning
`NavLink` is a React Router component used for navigation links.

### Why we use it
It can detect whether the link matches the current route, which helps us style the active navigation item.

### Example from our project

```tsx
<NavLink
  to="/concepts"
  className={({ isActive }) =>
    isActive ? "nav-link active" : "nav-link"
  }
>
  Concepts
</NavLink>
```

### Interview answer
`NavLink` is used for navigation in React Router. Unlike a normal link, it can tell whether the route is active, making it useful for styling selected menu items.

### Common mistake
Using `Link` when active route styling is needed. `Link` is fine for navigation, but `NavLink` is better for menus.

---

## 6. Why do we use the `end` prop?

### Meaning
The `end` prop tells `NavLink` to match only the exact route.

### Why we use it
Without `end`, the Dashboard link at `/` may appear active for other routes too.

### Example from our project

```tsx
<NavLink
  to="/"
  end
  className={({ isActive }) =>
    isActive ? "nav-link active" : "nav-link"
  }
>
  Dashboard
</NavLink>
```

### Interview answer
The `end` prop ensures the link is active only when the current route exactly matches the link path. It is commonly used for the root route `/`.

### Common mistake
Forgetting `end` on the root route, causing the home/dashboard nav item to stay active on every page.

---

## 7. What is a 404 route?

### Meaning
A 404 route catches URLs that do not match any defined route.

### Why we use it
It gives users a helpful message instead of showing a blank page.

### Example from our project

```tsx
<Route path="*" element={<NotFoundPage />} />
```

### Interview answer
A 404 route handles unmatched URLs. In React Router, we can use `path="*"` to catch all undefined routes and show a Not Found page.

### Common mistake
Not adding a fallback route, which can make invalid URLs confusing for users.

---

## Mini Summary

In Step 5, we added React Router to turn the project into a multi-page React app. We created Dashboard, Concepts, Notes, Settings, and Not Found pages. We used `BrowserRouter`, `Routes`, and `Route` to map URLs to pages. We also used `NavLink` to navigate between pages and highlight the active route.

---

## Interview Practice Questions

1. What is React Router?
2. Why do React apps use client-side routing?
3. What does `BrowserRouter` do?
4. What is the difference between `Routes` and `Route`?
5. What is the `element` prop in a route?
6. What is `NavLink`?
7. What is the difference between `Link` and `NavLink`?
8. Why do we use the `end` prop on the root route?
9. How do you create a 404 page in React Router?
10. What happens when a user refreshes a route like `/concepts`?

---

## My Project Example Explanation

In this project, I added React Router so the app can show multiple pages without refreshing the browser. The root path `/` shows the dashboard, `/concepts` shows a concept tracker, `/notes` shows learning notes, and `/settings` is prepared for a future Context API module. I also added a `NotFoundPage` using `path="*"` for invalid routes. Navigation is handled using `NavLink`, which allows the active page link to be highlighted.