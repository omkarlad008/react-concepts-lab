import { NavLink } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";

/**
 * AppHeader displays the top section of the application.
 *
 * In Step 8, it reads the current theme from Context.
 * This shows how a component can access global state without props.
 */
export function AppHeader() {
  const { theme } = useTheme();

  return (
    <header className="app-header">
      <div>
        <p className="eyebrow">React Concepts Lab</p>
        <h1>Task & Learning Dashboard</h1>
        <p className="theme-badge">Current theme: {theme}</p>
      </div>

      <nav className="app-nav" aria-label="Main navigation">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/concepts"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Concepts
        </NavLink>

        <NavLink
          to="/notes"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Notes
        </NavLink>

        <NavLink
          to="/api-practice"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          API Practice
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Settings
        </NavLink>
      </nav>
    </header>
  );
}