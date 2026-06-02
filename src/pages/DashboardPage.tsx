import { useMemo, useState } from "react";
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
 * In Step 11, expensive or repeated derived values are wrapped in useMemo.
 * This is useful when derived values depend on state and do not need to be
 * recalculated on every unrelated render.
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

  /**
   * taskStats is derived from tasks.
   *
   * useMemo ensures this calculation only re-runs when tasks changes.
   */
  const taskStats = useMemo(() => {
    const completedTasksCount = tasks.filter((task) => task.isCompleted).length;
    const activeTasksCount = tasks.length - completedTasksCount;

    return {
      completedTasksCount,
      activeTasksCount,
      hasCompletedTasks: completedTasksCount > 0,
    };
  }, [tasks]);

  /**
   * filteredTasks is also derived from tasks and selectedFilter.
   *
   * It only recalculates when tasks or selectedFilter changes.
   */
  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      if (selectedFilter === "active") {
        return !task.isCompleted;
      }

      if (selectedFilter === "completed") {
        return task.isCompleted;
      }

      return true;
    });
  }, [tasks, selectedFilter]);

  const emptyMessage = useMemo(() => {
    if (selectedFilter === "active") {
      return "No active tasks right now. Try adding a new task or marking a completed task as active.";
    }

    if (selectedFilter === "completed") {
      return "No completed tasks yet. Complete a task to see it here.";
    }

    return "No tasks yet. Add your first task using the form above.";
  }, [selectedFilter]);

  const dashboardCards = useMemo(
    () => [
      {
        id: "concepts",
        title: "Concepts",
        value: "27",
        description: "React concepts practised across the first eleven modules.",
      },
      {
        id: "active-tasks",
        title: "Active Tasks",
        value: String(taskStats.activeTasksCount),
        description: "Tasks still remaining in the learning dashboard.",
      },
      {
        id: "completed-tasks",
        title: "Completed",
        value: String(taskStats.completedTasksCount),
        description: "Tasks saved locally after completion.",
      },
    ],
    [taskStats.activeTasksCount, taskStats.completedTasksCount],
  );

  return (
    <section className="dashboard-page">
      <div className="page-intro">
        <p className="eyebrow">Module 11</p>
        <h2>Performance Optimisation</h2>
        <p>
          This step uses memoisation to avoid unnecessary recalculations and
          reduce unnecessary child component renders.
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
              Derived task data is now memoised with <code>useMemo</code>.
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
              disabled={!taskStats.hasCompletedTasks}
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
            <p>{emptyMessage}</p>
          </div>
        )}
      </section>
    </section>
  );
}