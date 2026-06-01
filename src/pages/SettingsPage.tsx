import { useTheme } from "../context/ThemeContext";

/**
 * SettingsPage allows the user to update global app settings.
 *
 * In Step 8, this page updates the global theme using Context API.
 */
export function SettingsPage() {
  const { theme, setTheme, toggleTheme } = useTheme();

  return (
    <section className="content-page">
      <div className="page-intro">
        <p className="eyebrow">Module 8</p>
        <h2>Context API & Theme Settings</h2>
        <p>
          This page uses React Context to update global theme state without
          passing props through every component.
        </p>
      </div>

      <section className="settings-panel">
        <div>
          <h3>Theme preference</h3>
          <p>
            Current theme: <strong>{theme}</strong>
          </p>
        </div>

        <div className="theme-options" aria-label="Theme options">
          <button
            type="button"
            className={`theme-option ${theme === "light" ? "active" : ""}`}
            onClick={() => setTheme("light")}
          >
            Light
          </button>

          <button
            type="button"
            className={`theme-option ${theme === "dark" ? "active" : ""}`}
            onClick={() => setTheme("dark")}
          >
            Dark
          </button>

          <button
            type="button"
            className="secondary-button"
            onClick={toggleTheme}
          >
            Toggle theme
          </button>
        </div>
      </section>

      <section className="info-panel">
        <h3>Why Context here?</h3>
        <p>
          Theme is global UI state. The Settings page updates it, the Header
          reads it, and the whole app responds through CSS variables. Without
          Context, we would need to pass theme props through many components.
        </p>
      </section>
    </section>
  );
}