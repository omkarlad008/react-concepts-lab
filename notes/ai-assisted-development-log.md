# AI-Assisted Development Log

This file records how AI was used during the React Concepts Lab project.

The purpose is to practise professional AI-assisted development without blindly relying on generated code.

---

## Step 1 — Components, JSX, Props & Composition

### What I used AI for
- Planning the first React learning module.
- Structuring the project into layout, dashboard, and page components.
- Understanding how components, props, JSX, `children`, and list rendering work together.
- Generating interview-style notes after implementing the code.

### What I implemented myself
- Created the project locally.
- Added the component files.
- Ran the project locally.
- Checked that the UI loaded correctly.
- Verified that the browser console had no errors.

### What I learned
- A React app should be split into small reusable components.
- Props allow data to move from parent components to child components.
- The `children` prop is useful for layout components.
- JSX looks like HTML but follows JavaScript/React rules.
- Lists can be rendered using `.map()`.
- Each list item should have a stable unique `key`.

### What I should be able to explain in an interview
- What a React component is.
- What JSX is.
- How props work.
- Why props are read-only.
- How component composition improves maintainability.
- Why React needs keys when rendering lists.

### AI usage reflection
AI was used as a mentor and reviewer, not as an autopilot. I still implemented and ran the code locally before documenting and committing the work.

---

## Step 2 — State, Events & Interactive UI

### What I used AI for
- Planning the state and event-handling module.
- Understanding how `useState` updates the UI.
- Learning how to update arrays immutably using `.map()` and `.filter()`.
- Creating interview-style notes for state, events, and derived values.

### What I implemented myself
- Created the task type and initial task data.
- Built `TaskItem` and `TaskList` components.
- Added task state to `DashboardPage`.
- Tested toggle and delete interactions in the browser.
- Checked that completed and active task counts update correctly.

### What I learned
- `useState` stores component data that can change.
- State updates trigger re-renders.
- Event handlers respond to user actions.
- Arrays in state should be updated immutably.
- `.map()` is useful for updating one item.
- `.filter()` is useful for deleting one item.
- Derived values should usually be calculated from state instead of stored separately.
- Child components can call parent functions passed through props.

### What I should be able to explain in an interview
- What state is.
- How `useState` works.
- Why we should not mutate state directly.
- How to update arrays in React state.
- How event handlers work.
- How child components communicate with parent components.
- What derived state is.

### AI usage reflection
AI helped explain the React state update pattern, but I manually implemented and tested the behaviour. I also checked that the UI updates correctly before writing notes and committing the work.

---

## Step 3 — Forms & Controlled Components

### What I used AI for
- Planning the controlled form module.
- Understanding how React controls input values using state.
- Learning how `onChange`, `onSubmit`, and `event.preventDefault()` work.
- Understanding the difference between local form state and parent task state.
- Creating interview-style notes for forms and controlled components.

### What I implemented myself
- Updated the `Task` type to include priority.
- Updated the initial task data.
- Created the `TaskForm` component.
- Added controlled input, textarea, and select fields.
- Added basic title validation.
- Connected the form to `DashboardPage` using the `onAddTask` prop.
- Tested that new tasks appear in the list.
- Tested that form reset, validation, toggle, and delete still work.

### What I learned
- Controlled components use React state as the source of truth.
- `value` shows the current state value.
- `onChange` updates state when the user types or selects a value.
- `onSubmit` handles form submission.
- `event.preventDefault()` stops the browser from refreshing the page.
- Form validation can stop invalid data from being submitted.
- Local state is useful for temporary form values.
- Parent state is useful when multiple child components need shared data.
- State can be lifted up to a common parent component.

### What I should be able to explain in an interview
- What a controlled component is.
- Why controlled forms are useful.
- How form state works in React.
- How to handle input changes.
- How to handle form submission.
- Why `preventDefault()` is used.
- How to add a new object to array state.
- What lifting state up means.

### AI usage reflection
AI helped structure the form module and explain controlled components, but I manually implemented and tested the form behaviour. I checked that validation, task creation, form reset, and existing task actions worked before documenting and committing the step.

---

## Step 4 — Filtering & Conditional Rendering

### What I used AI for
- Planning the filtering and conditional rendering module.
- Understanding how to create a `TaskFilter` union type.
- Learning how to derive a filtered task list from existing state.
- Structuring the filter controls as a reusable component.
- Creating interview-style notes for filtering and conditional rendering.

### What I implemented myself
- Added the `TaskFilter` type.
- Created the `TaskFilterControls` component.
- Added `selectedFilter` state to `DashboardPage`.
- Created the derived `filteredTasks` array.
- Added conditional rendering for empty filter results.
- Added dynamic CSS styling for the selected filter button.
- Tested all, active, and completed filters manually.

### What I learned
- Filter state controls which data is visible.
- Union types make fixed UI options safer in TypeScript.
- Filtered lists should usually be derived from source state.
- The original task list should remain unchanged when filtering.
- Conditional rendering helps show different UI for different states.
- Dynamic CSS classes can visually reflect selected state.
- Parent components should own state that affects multiple child components.

### What I should be able to explain in an interview
- How to implement filtering in React.
- Why filtered data should be derived from original state.
- How TypeScript union types improve safety.
- How conditional rendering works.
- How dynamic classes are applied in JSX.
- Why the original data should not be overwritten during filtering.

### AI usage reflection
AI helped structure the filtering module and explain the difference between source state and derived filtered data. I manually implemented and tested the filter behaviour before documenting and committing the step.

---

## Step 5 — React Router & Multiple Pages

### What I used AI for
- Planning the routing module.
- Understanding how `BrowserRouter`, `Routes`, and `Route` work.
- Creating multiple page components.
- Learning how `NavLink` highlights the active route.
- Creating interview-style notes for React Router.

### What I implemented myself
- Installed or verified `react-router-dom`.
- Wrapped the app with `BrowserRouter`.
- Added route definitions in `App.tsx`.
- Created `ConceptsPage`, `NotesPage`, `SettingsPage`, and `NotFoundPage`.
- Updated `AppHeader` to use `NavLink`.
- Tested navigation between pages.
- Tested the fallback 404 route.

### What I learned
- React Router allows client-side navigation in React apps.
- `BrowserRouter` enables routing through browser URLs.
- `Routes` contains all route definitions.
- `Route` maps a path to a page component.
- `NavLink` is useful for navigation menus because it can detect the active route.
- The `end` prop helps the root `/` link match exactly.
- `path="*"` can be used for a Not Found page.

### What I should be able to explain in an interview
- What React Router is.
- How client-side routing works.
- How to define routes in React Router.
- How to create navigation links.
- How to highlight active navigation links.
- How to create a 404 fallback route.
- Why internal routing should use `Link` or `NavLink` instead of normal anchor tags.

### AI usage reflection
AI helped structure the routing step and explain routing concepts. I manually implemented the pages and tested navigation, route refresh behaviour, active links, and the Not Found route before documenting and committing the work.

---

## Step 6 — URL Params & Task Detail Page

### What I used AI for
- Planning the dynamic route module.
- Understanding how `/tasks/:taskId` works.
- Learning how to read URL parameters using `useParams`.
- Understanding when to use `Link` and when to use `useNavigate`.
- Understanding why task state needed to move from `DashboardPage` into `App`.
- Creating interview-style notes for URL params and dynamic routes.

### What I implemented myself
- Added the `/tasks/:taskId` route.
- Created the `TaskDetailPage` component.
- Updated `TaskItem` to include a `View details` link.
- Moved the main task state from `DashboardPage` into `App`.
- Passed task data and task handlers into routed pages through props.
- Tested valid task detail pages.
- Tested invalid task IDs.
- Tested toggle and delete actions from the detail page.

### What I learned
- Dynamic routes allow one page component to handle many item detail pages.
- `useParams` reads values from the current URL.
- `Link` is used for normal internal navigation.
- `useNavigate` is useful for navigation after an action.
- `.find()` can locate a task by ID.
- Invalid URL params should be handled safely.
- Shared state should live above routed pages that need the same data.

### What I should be able to explain in an interview
- What URL params are.
- How to create a dynamic route.
- How to use `useParams`.
- How to build a route-based detail page.
- How to handle missing or invalid route data.
- Why state was lifted from `DashboardPage` into `App`.
- The difference between `Link`, `NavLink`, and `useNavigate`.

### AI usage reflection
AI helped structure the dynamic routing module and explain state lifting across routed pages. I manually implemented and tested task detail navigation, invalid task handling, toggle behaviour, delete behaviour, and return navigation before documenting and committing the step.

---

## Step 7 — useEffect, API Calls, Loading & Error States

### What I used AI for
- Planning the API practice module.
- Understanding how `useEffect` runs after render.
- Learning how to fetch API data in React.
- Understanding loading, error, success, and empty UI states.
- Learning how `AbortController` can clean up fetch requests.
- Creating interview-style notes for API calls and effects.

### What I implemented myself
- Created the `ApiUser` type.
- Created the `ApiPracticePage` component.
- Added API route `/api-practice`.
- Added navigation link for API Practice.
- Used `useEffect` to fetch user data.
- Added loading, error, empty, and success states.
- Added a reload button.
- Tested the success state using JSONPlaceholder.
- Temporarily tested the error state using a broken API URL.
- Verified that other routes still work.

### What I learned
- `useEffect` is used for side effects such as API calls.
- API calls should handle loading, error, empty, and success states.
- The dependency array controls when the effect runs.
- Changing `reloadKey` can re-trigger the effect.
- `AbortController` can cancel fetch requests during cleanup.
- UI should provide recovery actions such as retry or reload.
- Side effects should not be placed directly in the component body.

### What I should be able to explain in an interview
- What `useEffect` is.
- What side effects are.
- How to fetch data in React.
- How to handle loading and error states.
- How to create a retry or reload button.
- What the dependency array does.
- What effect cleanup is.
- Why `AbortController` can be useful.

### AI usage reflection
AI helped structure the API practice module and explain side effects, dependency arrays, and request cleanup. I manually implemented the API page, tested loading/success/error states, and confirmed existing routes still worked before documenting and committing the step.

---

## Step 8 — Context API & Theme Settings

### What I used AI for
- Planning the Context API module.
- Understanding how `createContext`, Provider, and `useContext` work.
- Learning why theme is suitable global UI state.
- Understanding how to avoid prop drilling.
- Creating interview-style notes for Context API and theme state.

### What I implemented myself
- Created the `ThemeContext`.
- Created the `ThemeProvider`.
- Created the custom `useTheme` hook.
- Wrapped the app with `ThemeProvider`.
- Updated `SettingsPage` to change the global theme.
- Updated `AppHeader` to read the current theme.
- Added CSS variables for light and dark themes.
- Tested theme switching across multiple pages.

### What I learned
- Context can share data across many components without prop drilling.
- Provider supplies Context values to child components.
- `useContext` reads the nearest Context value.
- A custom Context hook makes Context safer and cleaner to use.
- Theme is a good example of global UI state.
- CSS variables make theme switching easier.
- React state can update a DOM attribute that CSS uses for styling.

### What I should be able to explain in an interview
- What Context API is.
- What problem Context solves.
- What prop drilling means.
- How Provider and `useContext` work.
- Why we created a custom `useTheme` hook.
- When Context is useful.
- When Context should not be used.
- How theme switching works using React state and CSS variables.

### AI usage reflection
AI helped structure the Context API module and explain global UI state. I manually implemented the provider, custom hook, settings controls, header badge, and CSS theme variables, then tested theme changes across the app before documenting and committing the step.

---

## Step 9 — useReducer & Task State Refactor

### What I used AI for
- Planning the `useReducer` refactor.
- Understanding when `useReducer` is better than `useState`.
- Learning how reducer functions, action objects, and dispatch work.
- Understanding discriminated union types in TypeScript.
- Creating interview-style notes for reducer-based state management.

### What I implemented myself
- Created the `tasksReducer`.
- Created the `TaskAction` discriminated union type.
- Replaced task `useState` with `useReducer`.
- Updated task handlers to dispatch actions.
- Added the `clear_completed` reducer action.
- Added the Clear completed button to the dashboard.
- Tested add, toggle, delete, filter, detail page, and clear completed behaviour.

### What I learned
- `useReducer` is useful for complex or related state updates.
- A reducer receives current state and an action, then returns next state.
- Actions describe what happened.
- `dispatch` sends actions to the reducer.
- Reducers should be pure and should not mutate existing state.
- Discriminated union types make reducer actions safer in TypeScript.
- Centralising task update logic makes the app easier to maintain.

### What I should be able to explain in an interview
- What `useReducer` is.
- What a reducer function does.
- What an action object is.
- How `dispatch` works.
- Why reducers should be pure.
- When to choose `useReducer` over `useState`.
- How TypeScript discriminated unions help reducer actions.
- How the clear completed action works.

### AI usage reflection
AI helped structure the reducer refactor and explain reducer-based state management. I manually implemented the reducer, updated task handlers to dispatch actions, added the clear completed feature, and tested the existing task, route, API, and theme functionality before documenting and committing the step.

---

## Step 10 — Custom Hooks & LocalStorage

### What I used AI for
- Planning the custom hooks and persistence module.
- Understanding how to create reusable custom hooks.
- Learning how to persist React state with `localStorage`.
- Understanding lazy initial state.
- Learning why `JSON.stringify` and `JSON.parse` are needed.
- Creating interview-style notes for custom hooks and localStorage.

### What I implemented myself
- Created the `useLocalStorageState` hook.
- Created the `useTasks` hook.
- Moved task reducer and persistence logic out of `App.tsx`.
- Persisted task state in `localStorage`.
- Persisted theme preference in `localStorage`.
- Added a reset saved tasks action.
- Tested refresh behaviour for tasks and theme.
- Confirmed existing routes and features still worked.

### What I learned
- Custom hooks extract reusable stateful logic.
- `localStorage` stores string values in the browser.
- Objects and arrays need `JSON.stringify` before saving.
- Saved JSON strings need `JSON.parse` when loading.
- Lazy initial state prevents unnecessary storage reads on every render.
- `useEffect` can sync state changes to localStorage.
- Persistence logic should be centralised instead of duplicated across components.

### What I should be able to explain in an interview
- What custom hooks are.
- Why custom hooks start with `use`.
- How localStorage persistence works.
- Why JSON conversion is needed.
- What lazy initial state means.
- How to sync state to localStorage with `useEffect`.
- Why reusable logic was moved into `useTasks`.
- What data should and should not be stored in localStorage.

### AI usage reflection
AI helped structure the persistence module and explain custom hooks, lazy initial state, and localStorage syncing. I manually implemented the hooks, connected them to tasks and theme, and tested refresh persistence before documenting and committing the step.

---

## Step 11 — Performance Optimisation

### What I used AI for
- Planning the performance optimisation module.
- Understanding when to use `useMemo`, `useCallback`, and `React.memo`.
- Learning how referential equality affects React rendering.
- Understanding why optimisation should not be applied blindly.
- Creating interview-style notes for React performance concepts.

### What I implemented myself
- Added `useMemo` for task stats.
- Added `useMemo` for filtered task lists.
- Added `useMemo` for dashboard card data.
- Added `useMemo` for empty messages.
- Added `useCallback` for task action handlers in `useTasks`.
- Memoised the returned object from `useTasks`.
- Wrapped `DashboardCard` with `React.memo`.
- Wrapped `TaskList` with `React.memo`.
- Wrapped `TaskItem` with `React.memo`.
- Tested dashboard, task detail, API, theme, and persistence behaviour after optimisation.

### What I learned
- `useMemo` memoises calculated values.
- `useCallback` memoises function references.
- `React.memo` can skip child re-renders when props are unchanged.
- Objects, arrays, and functions are compared by reference.
- Stable function references matter when passing callbacks to memoised children.
- Memoisation is useful for derived values, large lists, and expensive calculations.
- Optimisation should be used thoughtfully, not everywhere by default.

### What I should be able to explain in an interview
- What `useMemo` does.
- What `useCallback` does.
- What `React.memo` does.
- What referential equality means.
- Why unnecessary re-renders can happen.
- When memoisation is useful.
- When memoisation is unnecessary.
- How this project optimised task filtering and task components.

### AI usage reflection
AI helped structure the performance optimisation step and explain memoisation concepts. I manually applied `useMemo`, `useCallback`, and `React.memo`, then tested all existing project features to confirm the optimisation did not break functionality.

---

## Step 12 — Testing with Vitest & React Testing Library

### What I used AI for
- Planning the testing module.
- Understanding the difference between Vitest and React Testing Library.
- Learning how to test reducer logic.
- Learning how to test user-facing component behaviour.
- Understanding how to use `MemoryRouter` for route-related components.
- Fixing a test query issue where multiple elements had the same text.
- Creating interview-style notes for automated testing.

### What I implemented myself
- Installed Vitest and React Testing Library packages.
- Added test scripts to `package.json`.
- Configured Vitest with jsdom.
- Created the test setup file.
- Added reducer tests for task state actions.
- Added component tests for task filter controls.
- Added dashboard behaviour tests.
- Ran and fixed the test suite.
- Confirmed all tests pass.
- Confirmed the app still builds successfully.

### What I learned
- Vitest runs the test suite.
- React Testing Library tests React components from the user’s point of view.
- Reducers are good candidates for unit testing because they are pure functions.
- Component tests should focus on visible behaviour.
- `userEvent` simulates user interactions.
- Mock functions can verify callback behaviour.
- `MemoryRouter` provides routing context during tests.
- Queries should be specific when multiple elements have similar text.

### What I should be able to explain in an interview
- What automated testing is.
- What Vitest is used for.
- What React Testing Library is used for.
- How to test reducer logic.
- How to test component behaviour.
- Why testing user behaviour is better than testing implementation details.
- How to use mock functions.
- Why route-based components need router context in tests.

### AI usage reflection
AI helped structure the testing setup and explain testing concepts. I manually installed the packages, added the tests, ran the test suite, fixed the duplicate text query issue, and verified that all tests and the production build passed.

---

## Step 13 — Final Polish, Accessibility Review & Portfolio README

### What I used AI for
- Planning the final polish step.
- Understanding basic accessibility improvements.
- Creating a skip link implementation.
- Structuring a portfolio-ready project summary.
- Creating interview-style notes for accessibility and documentation.

### What I implemented myself
- Added a skip to main content link.
- Added the `main-content` target to the main layout.
- Added visible focus styles.
- Updated the Concepts page with final concepts.
- Created `PROJECT_SUMMARY.md`.
- Added project summary and accessibility notes to the README.
- Tested keyboard focus behaviour.
- Confirmed tests and production build still pass.

### What I learned
- Accessibility improves usability for keyboard and assistive technology users.
- Skip links help keyboard users bypass repeated navigation.
- Visible focus styles are important for keyboard navigation.
- Semantic structure makes pages easier to understand.
- Portfolio documentation helps explain project value clearly.
- A final project summary helps prepare for interviews and GitHub review.

### What I should be able to explain in an interview
- What accessibility means.
- What a skip link is.
- Why visible focus styles matter.
- How semantic HTML improves accessibility.
- What final polish was added to the project.
- How this project demonstrates core React skills.
- How the README and project summary support portfolio presentation.

### AI usage reflection
AI helped organise the final accessibility and portfolio polish step. I manually implemented the skip link, focus styles, project summary, README updates, and final checks before committing the completed project.