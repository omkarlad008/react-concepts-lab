import { useState } from "react";
import { DashboardCard } from "../components/dashboard/DashboardCard";
import { TaskForm } from "../components/tasks/TaskForm";
import { TaskList } from "../components/tasks/TaskList";
import { initialTasks } from "../data/initialTasks";
import type { Task } from "../types/task";

/**
 * DashboardPage is a page-level component.
 *
 * It owns the task list state and passes data/functions
 * down to child components through props.
 */
export function DashboardPage() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const completedTasksCount = tasks.filter((task) => task.isCompleted).length;
  const activeTasksCount = tasks.length - completedTasksCount;

  /**
   * handleAddTask receives a new task from TaskForm.
   *
   * We add the new task by creating a new array.
   * This keeps the update immutable.
   */
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

  const dashboardCards = [
    {
      id: "concepts",
      title: "Concepts",
      value: "12",
      description: "React concepts practised across the first three modules.",
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
        <p className="eyebrow">Module 3</p>
        <h2>Forms & Controlled Components</h2>
        <p>
          This step adds a form. The input values are controlled by React state,
          and submitting the form adds a new task to the dashboard.
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
        <div className="section-heading">
          <div>
            <p className="eyebrow">Practice</p>
            <h2>Module Tasks</h2>
          </div>

          <p>
            {completedTasksCount} of {tasks.length} completed
          </p>
        </div>

        <TaskList
          tasks={tasks}
          onToggleTask={handleToggleTask}
          onDeleteTask={handleDeleteTask}
        />
      </section>
    </section>
  );
}