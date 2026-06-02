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
};

/**
 * DashboardPage displays the task dashboard.
 *
 * The main task state is now managed by useReducer in App.tsx.
 * DashboardPage receives task data and dispatch helper functions through props.
 */
export function DashboardPage({
  tasks,
  onAddTask,
  onToggleTask,
  onDeleteTask,
  onClearCompletedTasks,
}: DashboardPageProps) {
  const [selectedFilter, setSelectedFilter] = useState<TaskFilter>("all");

  const completedTasksCount = tasks.filter((task) => task.isCompleted).length;
  const activeTasksCount = tasks.length - completedTasksCount;

  const hasCompletedTasks = completedTasksCount > 0;

  /**
   * filteredTasks is still derived from tasks + selectedFilter.
   *
   * useReducer changes how tasks are updated,
   * but it does not change how filtered data is calculated.
   */
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
      value: "21",
      description: "React concepts practised across the first nine modules.",
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
      description: "Tasks marked as completed using reducer actions.",
    },
  ];

  return (
    <section className="dashboard-page">
      <div className="page-intro">
        <p className="eyebrow">Module 9</p>
        <h2>useReducer & Task State Refactor</h2>
        <p>
          This step moves task update logic into a reducer so related state
          changes are handled in one predictable place.
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
              Task updates are now handled through reducer actions.
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