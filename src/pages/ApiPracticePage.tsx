import { useEffect, useState } from "react";
import type { ApiUser } from "../types/api";

/**
 * API endpoint used for learning useEffect and fetch.
 *
 * JSONPlaceholder is a fake online REST API commonly used
 * for frontend practice and prototypes.
 */
const USERS_API_URL = "https://jsonplaceholder.typicode.com/users";

/**
 * ApiPracticePage demonstrates how to fetch data in React.
 *
 * This page covers:
 * - useEffect
 * - loading state
 * - error state
 * - success state
 * - request cleanup
 */
export function ApiPracticePage() {
  const [users, setUsers] = useState<ApiUser[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  /**
   * reloadKey is used to manually trigger the effect again.
   *
   * When reloadKey changes, useEffect runs again because it is included
   * in the dependency array.
   */
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    /**
     * AbortController lets us cancel the request if the component unmounts
     * before the fetch finishes.
     */
    const controller = new AbortController();

    async function fetchUsers() {
      try {
        setIsLoading(true);
        setError("");

        const response = await fetch(USERS_API_URL, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Failed to fetch users. Please try again.");
        }

        const data: ApiUser[] = await response.json();

        setUsers(data);
      } catch (caughtError) {
        /**
         * If the request was cancelled, we do not show an error.
         * Cancellation is expected during cleanup.
         */
        if (caughtError instanceof DOMException && caughtError.name === "AbortError") {
          return;
        }

        setError(
          caughtError instanceof Error
            ? caughtError.message
            : "Something went wrong while fetching users.",
        );
      } finally {
        /**
         * Avoid setting loading to false if the request was cancelled.
         */
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    fetchUsers();

    /**
     * Cleanup runs before the effect runs again or before the component unmounts.
     */
    return () => {
      controller.abort();
    };
  }, [reloadKey]);

  function handleReload() {
    setReloadKey((currentKey) => currentKey + 1);
  }

  return (
    <section className="content-page">
      <div className="page-intro">
        <p className="eyebrow">Module 7</p>
        <h2>API Calls, Loading & Error States</h2>
        <p>
          This page fetches user data after the component renders. It shows how
          React handles side effects using <code>useEffect</code>.
        </p>
      </div>

      <section className="api-panel">
        <div className="api-panel-header">
          <div>
            <h3>Users from API</h3>
            <p>
              Data is fetched from a fake REST API to practise real-world UI
              states.
            </p>
          </div>

          <button
            type="button"
            className="primary-button"
            onClick={handleReload}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Reload users"}
          </button>
        </div>

        {isLoading && (
          <div className="status-panel loading-panel">
            <h4>Loading users...</h4>
            <p>Please wait while the app fetches data.</p>
          </div>
        )}

        {!isLoading && error.length > 0 && (
          <div className="status-panel error-panel">
            <h4>Could not load users</h4>
            <p>{error}</p>

            <button
              type="button"
              className="secondary-button"
              onClick={handleReload}
            >
              Try again
            </button>
          </div>
        )}

        {!isLoading && error.length === 0 && users.length === 0 && (
          <div className="status-panel empty-panel">
            <h4>No users found</h4>
            <p>The request worked, but the API returned an empty list.</p>
          </div>
        )}

        {!isLoading && error.length === 0 && users.length > 0 && (
          <div className="api-user-grid">
            {users.map((user) => (
              <article key={user.id} className="api-user-card">
                <h4>{user.name}</h4>
                <p>@{user.username}</p>

                <dl>
                  <div>
                    <dt>Email</dt>
                    <dd>{user.email}</dd>
                  </div>

                  <div>
                    <dt>Website</dt>
                    <dd>{user.website}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        )}
      </section>
    </section>
  );
}