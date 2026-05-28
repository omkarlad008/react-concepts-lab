/**
 * TaskPriority limits priority to only three valid values.
 *
 * This is better than using a normal string because TypeScript
 * can warn us if we use an invalid priority value.
 */
export type TaskPriority = "low" | "medium" | "high";

/**
 * TaskFilter limits the task filter to only three valid options.
 *
 * We will use this type to control which tasks are visible:
 * all tasks, only active tasks, or only completed tasks.
 */
export type TaskFilter = "all" | "active" | "completed";

/**
 * Task represents one practice task in our React Concepts Lab.
 *
 * This type is reused by data files and task components.
 */
export type Task = {
  id: string;
  title: string;
  description: string;
  priority: TaskPriority;
  isCompleted: boolean;
};