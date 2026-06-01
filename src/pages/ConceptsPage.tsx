/**
 * ConceptsPage lists the React concepts completed so far.
 *
 * This page is static for now.
 * Later, we can turn this into a more interactive learning tracker.
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
  ];

  return (
    <section className="content-page">
      <div className="page-intro">
        <p className="eyebrow">Concepts</p>
        <h2>React Concepts Covered</h2>
        <p>
          This page tracks the concepts we have practised so far in the React
          Concepts Lab project.
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