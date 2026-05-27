/**
 * AppHeader displays the top section of the application.
 *
 * For now, this component is static.
 * Later, we can add navigation, theme toggle, and route links here.
 */
export function AppHeader() {
  return (
    <header className="app-header">
      <div>
        <p className="eyebrow">React Concepts Lab</p>
        <h1>Task & Learning Dashboard</h1>
      </div>

      <p className="header-subtitle">
        Learn React concepts step by step through practical coding.
      </p>
    </header>
  );
}