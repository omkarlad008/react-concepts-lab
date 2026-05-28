import { Link } from "react-router-dom";

/**
 * NotFoundPage is shown when the user visits a route
 * that does not exist in our application.
 */
export function NotFoundPage() {
  return (
    <section className="content-page">
      <div className="empty-state">
        <h2>Page not found</h2>
        <p>The page you are looking for does not exist.</p>

        <Link className="primary-link" to="/">
          Go back to dashboard
        </Link>
      </div>
    </section>
  );
}