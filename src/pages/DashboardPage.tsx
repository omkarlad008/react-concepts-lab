import { useState } from "react";
import { DashboardCard } from "../components/dashboard/DashboardCard";
import { TaskFilterControls } from "../components/tasks/TaskFilterControls";
import { TaskForm } from "../components/tasks/TaskForm";
import { TaskList } from "../components/tasks/TaskList";
import { initialTasks } from "../data/initialTasks";
import type { Task, TaskFilter } from "../types/task";

/**
 * DashboardPage owns the main task state.
 *
 * In Step 4, we add selectedFilter state to control which tasks
 * are visible without changing the original tasks array.
 */
export function DashboardPage() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [selectedFilter, setSelectedFilter] = useState<TaskFilter>("all");

  const completedTasksCount = tasks.filter((task) => task.isCompleted).length;
  const activeTasksCount = tasks.length - completedTasksCount;

  /**
   * filteredTasks is a derived array.
   *
   * We do not store this in another useState because it can be calculated
   * from existing state: tasks + selectedFilter.
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

  function handleAddTask(newTask: Task) {
    setTasks((currentTasks) => [newTask, ...currentTasks]);
  }

  function handleToggleTask(taskId: string) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId
          ? { ...task, isCompleted: !task.isCompleted }
          : task,
      ),
    );
  }

  function handleDeleteTask(taskId: string) {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== taskId),
    );
  }

  /**
   * This helper keeps the JSX cleaner.
   *
   * It returns a different empty message depending on the selected filter.
   */
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
      value: "15",
      description: "React concepts practised across the first four modules.",
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
      description: "Tasks marked as completed using React state.",
    },
  ];

  return (
    <section className="dashboard-page">
      <div className="page-intro">
        <p className="eyebrow">Module 4</p>
        <h2>Filtering & Conditional Rendering</h2>
        <p>
          This step adds filter state so we can show all, active, or completed
          tasks without changing the original task list.
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

      <TaskForm onAddTask={handleAddTask} />

      <section className="tasks-section">
        <div className="section-heading task-section-header">
          <div>
            <p className="eyebrow">Practice</p>
            <h2>Module Tasks</h2>
            <p className="section-description">
              Filter your tasks by current progress.
            </p>
          </div>

          <TaskFilterControls
            selectedFilter={selectedFilter}
            onFilterChange={setSelectedFilter}
          />
        </div>

        {filteredTasks.length > 0 ? (
          <TaskList
            tasks={filteredTasks}
            onToggleTask={handleToggleTask}
            onDeleteTask={handleDeleteTask}
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