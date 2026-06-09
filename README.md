# React Concepts Lab

React Concepts Lab is a learning-focused React project built to practise core React concepts step by step through practical coding.

## Purpose

The goal of this project is to learn React deeply by implementing one concept at a time, writing notes, and committing each completed step to GitHub.

## Tech Stack

- React
- TypeScript
- Vite
- React Router
- CSS
- Fetch API
- Browser localStorage
- Vitest
- React Testing Library
- Git and GitHub

## Concepts Covered

- Components
- JSX
- Props
- Component composition
- `children` prop
- List rendering
- `key` prop
- State
-
- `useState`
- Event handlers
- Immutable updates
- Updating arrays in state
- Passing functions as props
- Derived state
- Conditional rendering
-
- Controlled components
- Form state
- `onChange`
- `onSubmit`
- `event.preventDefault()`
- Form validation
- Adding items to array state
- Local state vs parent state
- Lifting state up
-
- TypeScript union types
- Filter state
- Derived filtered lists
- Dynamic CSS classes
- Empty state rendering
-
- React Router
- `BrowserRouter`
- `Routes`
- `Route`
- `NavLink`
- `Link`
- Client-side routing
- 404 route
-
- `useParams`
- `useNavigate`
- Dynamic routes
- URL params
- Route-based detail pages
- 
- `useEffect`
- Side effects
- Fetch API
- Loading state
- Error state
- Success state
- Empty API state
- Effect cleanup
- `AbortController`
- Retry/reload pattern
-
- Context API
- `createContext`
- Provider
- `useContext`
- Custom Context hook
- Global UI state
- Prop drilling
- Theme state
- CSS variables
-
- `useReducer`
- Reducer function
- Action objects
- Dispatch
- Discriminated union types
- Pure state updates
- Centralised state logic
-
- Custom hooks
- `localStorage`
- Lazy initial state
- `JSON.stringify`
- `JSON.parse`
- Persistent state
- Effect-based persistence
-
- `useMemo`
- `useCallback`
- `React.memo`
- Referential equality
- Stable function references
- Unnecessary re-renders
- Memoised derived values
-
- Vitest
- React Testing Library
- Unit testing
- Component testing
- Mock functions
- User interaction testing
- Testing accessible roles

More concepts will be added step by step.

## Persistence

The app stores the following values in browser `localStorage`:

- Tasks
- Theme preference

This means task changes and theme settings stay saved after refreshing the browser.

## How to Run

```bash
npm install
npm run dev
```

Then open:

```txt
http://localhost:5173
```

## Available Routes

- `/` — Dashboard
- `/concepts` — React concepts covered
- `/notes` — Learning notes overview
- `/api-practice` — API calls and loading/error state practice
- `/settings` — Context API and theme settings
- `/tasks/:taskId` — Dynamic task detail page
- `*` — Not Found page

## Testing

This project uses **Vitest** and **React Testing Library** for automated testing.

Run all tests:

```bash
npm test
```

Run tests in watch mode:

```bash
npm run test:watch
```

Current test coverage includes:

- Task reducer logic
- Task filter controls
- Dashboard filtering behaviour
- Clear completed callback behaviour

Test files included:

```txt
src/reducers/tasksReducer.test.ts
src/components/tasks/TaskFilterControls.test.tsx
src/pages/DashboardPage.test.tsx
```

The tests focus on meaningful behaviour instead of internal implementation details.

## Learning Workflow

For each concept:

1. Understand the goal
2. Implement the code
3. Run and test locally
4. Write concept notes
5. Commit and push to GitHub
6. Move to the next concept

## AI-Assisted Development

AI is used as a mentor, reviewer, and debugging assistant. The project is not built blindly with AI. Every accepted suggestion must be understood and explainable.

## Project Summary

React Concepts Lab is a practical React + TypeScript learning project built to revise and demonstrate core React concepts through a working task and learning dashboard.

The project includes task management, routing, dynamic task detail pages, API calls, global theme settings, localStorage persistence, reducer-based state management, performance optimisation, and automated tests.

A detailed project summary is available in [`PROJECT_SUMMARY.md`](./PROJECT_SUMMARY.md).

## Accessibility Notes

Basic accessibility improvements include:

- Semantic page structure
- Main navigation with accessible labels
- Keyboard-accessible buttons and links
- Visible focus styles
- Skip to main content link
- Form labels for inputs
- Accessible role-based testing queries