/**
 * ConceptsPage lists the React concepts completed in the project.
 *
 * This page acts as a learning tracker and portfolio summary.
 */
export function ConceptsPage() {
  const concepts = [
    "Components",
    "JSX",
    "Props",
    "Component composition",
    "State",
    "Events",
    "Controlled components",
    "Filtering",
    "Conditional rendering",
    "React Router",
    "URL params",
    "API calls",
    "useEffect",
    "Context API",
    "Provider",
    "useContext",
    "Global UI state",
    "useReducer",
    "Reducer function",
    "Action objects",
    "Dispatch",
    "Pure state updates",
    "Custom hooks",
    "localStorage",
    "Persistent state",
    "Lazy initial state",
    "useMemo",
    "useCallback",
    "React.memo",
    "Referential equality",
    "Vitest",
    "React Testing Library",
    "Unit testing",
    "Component testing",
    "Accessibility basics",
    "Portfolio documentation",
  ];

  return (
    <section className="content-page" aria-labelledby="concepts-heading">
      <div className="page-intro">
        <p className="eyebrow">Concepts</p>
        <h2 id="concepts-heading">React Concepts Covered</h2>
        <p>
          This page tracks the concepts practised in the React Concepts Lab
          project.
        </p>
      </div>

      <div className="concept-list">
        {concepts.map((concept) => (
          <article key={concept} className="concept-card">
            <h3>{concept}</h3>
            <p>Practised through practical coding in this project.</p>
          </article>
        ))}
      </div>
    </section>
  );
}