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