/**
 * ApiUser represents one user returned from the API.
 *
 * We only type the fields we actually use in the UI.
 * Real API responses may contain more fields, but our component
 * does not need to know about everything.
 */
export type ApiUser = {
  id: number;
  name: string;
  username: string;
  email: string;
  website: string;
};