import type { Task } from "../types/task";

/**
 * initialTasks gives the app some starting data.
 *
 * In Step 3, each task now also has a priority.
 */
export const initialTasks: Task[] = [
  {
    id: "task-1",
    title: "Review components",
    description: "Understand how AppShell, AppHeader, and DashboardCard work.",
    priority: "low",
    isCompleted: true,
  },
  {
    id: "task-2",
    title: "Practise props",
    description:
      "Explain how DashboardCard receives title, value, and description.",
    priority: "medium",
    isCompleted: false,
  },
  {
    id: "task-3",
    title: "Learn state and events",
    description: "Use buttons to update task completion and delete tasks.",
    priority: "high",
    isCompleted: false,
  },
];