import type { Task } from "../types/task";

/**
 * initialTasks gives the app some starting data.
 *
 * In a real app, this data may come from an API or database.
 * For now, static data helps us practise React state updates.
 */
export const initialTasks: Task[] = [
  {
    id: "task-1",
    title: "Review components",
    description: "Understand how AppShell, AppHeader, and DashboardCard work.",
    isCompleted: true,
  },
  {
    id: "task-2",
    title: "Practise props",
    description: "Explain how DashboardCard receives title, value, and description.",
    isCompleted: false,
  },
  {
    id: "task-3",
    title: "Learn state and events",
    description: "Use buttons to update task completion and delete tasks.",
    isCompleted: false,
  },
];