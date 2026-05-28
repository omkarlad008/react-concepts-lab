/**
 * NotesPage shows the learning notes created after each module.
 *
 * For now, this page lists the note files manually.
 * Later, we could connect this to real markdown rendering.
 */
export function NotesPage() {
  const notes = [
    "01 — Components, JSX, Props & Composition",
    "02 — State, Events & Interactive UI",
    "03 — Forms & Controlled Components",
    "04 — Filtering & Conditional Rendering",
  ];

  return (
    <section className="content-page">
      <div className="page-intro">
        <p className="eyebrow">Notes</p>
        <h2>Learning Notes</h2>
        <p>
          These notes turn each coding step into interview-ready explanations.
        </p>
      </div>

      <div className="notes-list">
        {notes.map((note) => (
          <article key={note} className="note-card">
            <h3>{note}</h3>
            <p>Available in the project&apos;s notes folder.</p>
          </article>
        ))}
      </div>
    </section>
  );
}