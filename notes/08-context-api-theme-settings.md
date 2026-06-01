# 08 — Context API & Theme Settings

## 1. What is Context API?

### Meaning
Context API is a React feature that allows data to be shared across multiple components without manually passing props through every level.

### Why we use it
We use Context when some state or data is needed by many parts of the app, such as theme, authenticated user, language, or app settings.

### Example from our project

```tsx
const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);
```

### Interview answer
Context API allows React components to share data globally within a part of the component tree. It helps avoid prop drilling when many components need access to the same data.

### Common mistake
Using Context for every piece of state, even when normal props or local state would be simpler.

---

## 2. What is prop drilling?

### Meaning
Prop drilling means passing props through multiple components just to reach a deeply nested child.

### Why we avoid it
It makes code harder to maintain because intermediate components receive props they do not actually use.

### Example from our project
Without Context, we might need to pass `theme` from `App` to `AppShell`, then to `AppHeader`, and also to `SettingsPage`.

With Context, `AppHeader` and `SettingsPage` can directly use:

```tsx
const { theme } = useTheme();
```

### Interview answer
Prop drilling happens when data is passed through many component levels only so a deeply nested component can use it. Context helps avoid this by making shared data available to components that need it.

### Common mistake
Calling every prop-passing situation prop drilling. Passing props one or two levels is usually fine.

---

## 3. What is `createContext`?

### Meaning
`createContext` creates a Context object.

### Why we use it
It gives React a shared place to store and provide data to components.

### Example from our project

```tsx
const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);
```

### Interview answer
`createContext` creates a Context object that can be used with a Provider and consumed by components using `useContext`.

### Common mistake
Giving Context a fake default value and accidentally hiding bugs when a component is used outside the Provider.

---

## 4. What is a Provider?

### Meaning
A Provider is the component that supplies Context data to its children.

### Why we use it
Components inside the Provider can access the shared Context value.

### Example from our project

```tsx
return (
  <ThemeContext.Provider value={value}>
    {children}
  </ThemeContext.Provider>
);
```

### Interview answer
A Provider makes Context data available to all components inside it. The Provider receives a `value` prop, and any descendant component can read that value using `useContext`.

### Common mistake
Using a Context-consuming component outside the Provider.

---

## 5. What is `useContext`?

### Meaning
`useContext` is a React Hook used to read Context data.

### Why we use it
It allows components to access shared data without receiving it through props.

### Example from our project

```tsx
const context = useContext(ThemeContext);
```

### Interview answer
`useContext` reads the current value from a React Context. It is commonly used for global app data such as theme, user information, language, or settings.

### Common mistake
Using `useContext` as a full replacement for state management in large apps without considering performance or structure.

---

## 6. Why create a custom Context hook?

### Meaning
A custom Context hook wraps `useContext` in a reusable function.

### Why we use it
It makes Context easier and safer to use across the app.

### Example from our project

```tsx
export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider.");
  }

  return context;
}
```

### Interview answer
A custom Context hook improves code readability and can protect against using Context outside its Provider. Instead of importing the Context directly everywhere, components use a clean hook like `useTheme()`.

### Common mistake
Exporting the raw Context and using `useContext` everywhere, which can repeat error-handling logic.

---

## 7. What is global UI state?

### Meaning
Global UI state is UI-related data needed by multiple parts of the app.

### Why we use it
Some UI preferences affect the whole application, not just one component.

### Example from our project

```tsx
const [theme, setTheme] = useState<Theme>("light");
```

The theme is used by:

- `SettingsPage`
- `AppHeader`
- global CSS styles

### Interview answer
Global UI state is app-wide presentation state, such as theme, sidebar visibility, language, or layout settings. Context can be a good choice when this state is needed by many components.

### Common mistake
Putting temporary local form state into global Context unnecessarily.

---

## 8. How does theme state work?

### Meaning
Theme state stores whether the app is currently using light or dark mode.

### Why we use it
It lets the user change the visual appearance of the whole app.

### Example from our project

```tsx
type Theme = "light" | "dark";
const [theme, setTheme] = useState<Theme>("light");
```

```tsx
function toggleTheme() {
  setTheme((currentTheme) =>
    currentTheme === "light" ? "dark" : "light",
  );
}
```

### Interview answer
Theme state stores the current visual mode of the app. Components can update the theme through Context, and the app can apply the theme globally using CSS classes, attributes, or variables.

### Common mistake
Hardcoding theme styles in many components instead of using shared CSS variables or tokens.

---

## 9. What are CSS variables?

### Meaning
CSS variables are reusable values defined in CSS.

### Why we use them
They make theme styling easier because the same variable names can have different values for light and dark themes.

### Example from our project

```css
:root[data-theme="light"] {
  --color-app-bg: #f5f7fb;
  --color-surface: #ffffff;
}

:root[data-theme="dark"] {
  --color-app-bg: #020617;
  --color-surface: #0f172a;
}
```

Then components use:

```css
body {
  background: var(--color-app-bg);
}
```

### Interview answer
CSS variables allow us to define reusable design values such as colours, spacing, or shadows. For theming, we can change variable values based on a theme attribute and let the whole UI update automatically.

### Common mistake
Duplicating separate light and dark styles for every component instead of using shared variables.

---

## 10. How does React state connect to CSS theme?

### Meaning
React controls the current theme, then updates an HTML attribute that CSS can read.

### Why we use it
This keeps theme logic in React and visual styling in CSS.

### Example from our project

```tsx
useEffect(() => {
  document.documentElement.setAttribute("data-theme", theme);
}, [theme]);
```

### Interview answer
React can store the selected theme in state, then apply that state to the DOM using an attribute or class. CSS can then use that attribute to apply the correct theme variables.

### Common mistake
Mixing too much styling logic inside React components instead of letting CSS handle visual changes.

---

## Mini Summary

In Step 8, we added global theme state using React Context API. We created a `ThemeProvider`, a `ThemeContext`, and a custom `useTheme` hook. The Settings page can now change the theme, and the Header can read the current theme without prop drilling. We also used CSS variables and the `data-theme` attribute to apply light and dark styling across the app.

---

## Interview Practice Questions

1. What is Context API?
2. What problem does Context solve?
3. What is prop drilling?
4. What is `createContext`?
5. What is a Provider?
6. What does `useContext` do?
7. Why create a custom Context hook?
8. What type of state should go into Context?
9. What type of state should stay local?
10. How did we implement theme switching?
11. What are CSS variables?
12. How can React state control CSS theme styles?
13. What are the disadvantages of overusing Context?

---

## My Project Example Explanation

In this project, I created a `ThemeContext` to manage global light and dark theme state. The `ThemeProvider` stores the current theme and exposes `theme`, `setTheme`, and `toggleTheme`. Components use the custom `useTheme` hook to access the theme. `SettingsPage` updates the theme, while `AppHeader` reads and displays the current theme. A `useEffect` updates the `data-theme` attribute on the HTML element, and CSS variables apply the correct colours across the app.