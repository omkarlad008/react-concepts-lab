import { useState } from "react";
import { DashboardCard } from "../components/dashboard/DashboardCard";
import { TaskFilterControls } from "../components/tasks/TaskFilterControls";
import { TaskForm } from "../components/tasks/TaskForm";
import { TaskList } from "../components/tasks/TaskList";
import type { Task, TaskFilter } from "../types/task";

type DashboardPageProps = {
  tasks: Task[];
  onAddTask: (task: Task) => void;
  onToggleTask: (taskId: string) => void;
  onDeleteTask: (taskId: string) => void;
  onClearCompletedTasks: () => void;
  onResetTasks: () => void;
};

/**
 * DashboardPage displays the task dashboard.
 *
 * Task state is now persisted through the useTasks custom hook in App.tsx.
 */
export function DashboardPage({
  tasks,
  onAddTask,
  onToggleTask,
  onDeleteTask,
  onClearCompletedTasks,
  onResetTasks,
}: DashboardPageProps) {
  const [selectedFilter, setSelectedFilter] = useState<TaskFilter>("all");

  const completedTasksCount = tasks.filter((task) => task.isCompleted).length;
  const activeTasksCount = tasks.length - completedTasksCount;

  const hasCompletedTasks = completedTasksCount > 0;

  const filteredTasks = tasks.filter((task) => {
    if (selectedFilter === "active") {
      return !task.isCompleted;
    }

    if (selectedFilter === "completed") {
      return task.isCompleted;
    }

    return true;
  });

  function getEmptyMessage() {
    if (selectedFilter === "active") {
      return "No active tasks right now. Try adding a new task or marking a completed task as active.";
    }

    if (selectedFilter === "completed") {
      return "No completed tasks yet. Complete a task to see it here.";
    }

    return "No tasks yet. Add your first task using the form above.";
  }

  const dashboardCards = [
    {
      id: "concepts",
      title: "Concepts",
      value: "24",
      description: "React concepts practised across the first ten modules.",
    },
    {
      id: "active-tasks",
      title: "Active Tasks",
      value: String(activeTasksCount),
      description: "Tasks still remaining in the learning dashboard.",
    },
    {
      id: "completed-tasks",
      title: "Completed",
      value: String(completedTasksCount),
      description: "Tasks saved locally after completion.",
    },
  ];

  return (
    <section className="dashboard-page">
      <div className="page-intro">
        <p className="eyebrow">Module 10</p>
        <h2>Custom Hooks & LocalStorage</h2>
        <p>
          This step persists tasks and theme settings in the browser using
          custom hooks and localStorage.
        </p>
      </div>

      <div className="dashboard-grid">
        {dashboardCards.map((card) => (
          <DashboardCard
            key={card.id}
            title={card.title}
            value={card.value}
            description={card.description}
          />
        ))}
      </div>

      <TaskForm onAddTask={onAddTask} />

      <section className="tasks-section">
        <div className="section-heading task-section-header">
          <div>
            <p className="eyebrow">Practice</p>
            <h2>Module Tasks</h2>
            <p className="section-description">
              Tasks now stay saved after refreshing the browser.
            </p>
          </div>

          <div className="task-toolbar">
            <TaskFilterControls
              selectedFilter={selectedFilter}
              onFilterChange={setSelectedFilter}
            />

            <button
              type="button"
              className="secondary-button"
              onClick={onClearCompletedTasks}
              disabled={!hasCompletedTasks}
            >
              Clear completed
            </button>

            <button
              type="button"
              className="danger-button"
              onClick={onResetTasks}
            >
              Reset saved tasks
            </button>
          </div>
        </div>

        {filteredTasks.length > 0 ? (
          <TaskList
            tasks={filteredTasks}
            onToggleTask={onToggleTask}
            onDeleteTask={onDeleteTask}
          />
        ) : (
          <div className="empty-state">
            <h3>No matching tasks</h3>
            <p>{getEmptyMessage()}</p>
          </div>
        )}
      </section>
    </section>
  );
}