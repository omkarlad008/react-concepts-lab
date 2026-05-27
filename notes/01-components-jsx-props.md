# 01 — Components, JSX, Props & Composition

## 1. What is a React component?

### Meaning
A React component is a reusable piece of UI. It is usually written as a JavaScript or TypeScript function that returns JSX.

### Why we use it
Components help us break a large UI into smaller, reusable, easier-to-maintain parts.

### Example from our project
In this step, we created:

- `AppHeader`
- `AppShell`
- `DashboardPage`
- `DashboardCard`

Each component has one clear responsibility.

### Interview answer
A React component is a reusable building block of the UI. In modern React, components are commonly written as functions that return JSX. Components help separate UI into smaller pieces, making the code easier to reuse, test, and maintain.

### Common mistake
Putting too much UI and logic inside one large component instead of breaking it into smaller components.

---

## 2. What is JSX?

### Meaning
JSX is a syntax that lets us write HTML-like code inside JavaScript or TypeScript.

### Why we use it
JSX makes React UI code easier to read because the structure looks similar to HTML while still allowing JavaScript expressions.

### Example from our project

```tsx
return (
  <header className="app-header">
    <h1>Task & Learning Dashboard</h1>
  </header>
);
```

### Interview answer
JSX is a syntax extension used in React to describe UI structure. It looks like HTML, but it is converted into JavaScript by the build tool. JSX also allows JavaScript expressions inside curly braces.

### Common mistake
Thinking JSX is exactly the same as HTML. For example, in JSX we use `className` instead of `class`.

---

## 3. What are props?

### Meaning
Props are values passed from a parent component to a child component.

### Why we use it
Props make components reusable and dynamic.

### Example from our project

`DashboardPage` passes data into `DashboardCard`:

```tsx
<DashboardCard
  title={card.title}
  value={card.value}
  description={card.description}
/>
```

`DashboardCard` receives those props:

```tsx
type DashboardCardProps = {
  title: string;
  value: string;
  description: string;
};
```

### Interview answer
Props are read-only inputs passed from a parent component to a child component. They allow components to receive dynamic data and render different UI while reusing the same component structure.

### Common mistake
Trying to directly modify props inside the child component. Props should be treated as read-only.

---

## 4. What is component composition?

### Meaning
Component composition means building larger UI by combining smaller components.

### Why we use it
It keeps the app modular and avoids repeating UI code.

### Example from our project

`App` uses `AppShell`, and `AppShell` renders `DashboardPage` using the `children` prop:

```tsx
function App() {
  return (
    <AppShell>
      <DashboardPage />
    </AppShell>
  );
}
```

### Interview answer
Component composition is the practice of combining smaller components to build larger UI sections. Instead of creating one large component, we compose the app from smaller, focused components.

### Common mistake
Overusing props when `children` would be simpler for layout components.

---

## 5. What is the children prop?

### Meaning
`children` is a special React prop that represents content placed between a component’s opening and closing tags.

### Why we use it
It is useful for layout components and reusable wrapper components.

### Example from our project

```tsx
<AppShell>
  <DashboardPage />
</AppShell>
```

Inside `AppShell`:

```tsx
export function AppShell({ children }: AppShellProps) {
  return (
    <div className="app-shell">
      <AppHeader />
      <main className="app-main">{children}</main>
    </div>
  );
}
```

### Interview answer
The `children` prop allows a component to receive and render nested content. It is commonly used for layout components, cards, modals, and reusable wrappers.

### Common mistake
Forgetting to type `children` in TypeScript when creating wrapper components.

---

## 6. What is list rendering?

### Meaning
List rendering means displaying multiple UI elements by looping over an array of data.

### Why we use it
Most real applications display repeated data such as tasks, products, users, messages, or cards.

### Example from our project

```tsx
{dashboardCards.map((card) => (
  <DashboardCard
    key={card.id}
    title={card.title}
    value={card.value}
    description={card.description}
  />
))}
```

### Interview answer
In React, lists are usually rendered using JavaScript’s `.map()` method. Each item should have a unique `key` prop so React can efficiently track changes in the list.

### Common mistake
Using the array index as the key when the list can change, be reordered, or have items added/removed.

---

## 7. What is the key prop?

### Meaning
The `key` prop is a unique identifier React uses when rendering lists.

### Why we use it
It helps React understand which items changed, were added, or were removed.

### Example from our project

```tsx
key={card.id}
```

### Interview answer
The `key` prop helps React efficiently update lists by identifying each item uniquely. A stable unique key, such as an id, is better than using an array index.

### Common mistake
Using random values like `Math.random()` as keys, because they change every render and hurt performance.

---

## Mini Summary

In Step 1, we learned that React apps are built from small reusable components. We created a layout component, a header component, a dashboard page, and a reusable dashboard card. We passed data using props and rendered multiple cards using `.map()`.

---

## Interview Practice Questions

1. What is a React component?
2. What is JSX?
3. What are props?
4. Why are props read-only?
5. What is component composition?
6. What is the `children` prop?
7. Why do we use `.map()` in React?
8. Why is the `key` prop important?
9. Why should we avoid using array index as a key?
10. How would you decide when to create a reusable component?

---

## My Project Example Explanation

In this project, I created a simple dashboard using reusable React components. `AppShell` handles the common layout, `AppHeader` displays the top header, `DashboardPage` prepares the dashboard data, and `DashboardCard` receives props to render each card. This helped me practise JSX, props, component composition, and list rendering.