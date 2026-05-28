/**
 * Task represents one practice task in our React Concepts Lab.
 *
 * Keeping the type in a separate file makes it reusable across
 * components, data files, and future hooks.
 */
export type Task = {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
};