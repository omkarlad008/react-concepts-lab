import { useState } from "react";
import { DashboardCard } from "../components/dashboard/DashboardCard";
import { TaskList } from "../components/tasks/TaskList";
import { initialTasks } from "../data/initialTasks";
import type { Task } from "../types/task";

/**
 * DashboardPage is a page-level component.
 *
 * In Step 1, this page only displayed static dashboard cards.
 * In Step 2, we are adding state so the page can respond to user actions.
 */
export function DashboardPage() {
  /**
   * useState stores data that can change while the user interacts with the app.
   *
   * tasks is the current state value.
   * setTasks is the function we use to update that state.
   */
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  /**
   * completedTasksCount is derived from the current tasks state.
   *
   * We do not need another useState for this because it can be calculated
   * from existing state during render.
   */
  const completedTasksCount = tasks.filter((task) => task.isCompleted).length;

  const activeTasksCount = tasks.length - completedTasksCount;

  /**
   * handleToggleTask updates one task by changing its isCompleted value.
   *
   * Important:
   * We do not mutate the existing task directly.
   * Instead, we create a new array using .map().
   */
  function handleToggleTask(taskId: string) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId
          ? { ...task, isCompleted: !task.isCompleted }
          : task,
      ),
    );
  }

  /**
   * handleDeleteTask removes one task from the state.
   *
   * Important:
   * .filter() creates a new array, which keeps the update immutable.
   */
  function handleDeleteTask(taskId: string) {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== taskId),
    );
  }

  /**
   * dashboardCards uses values calculated from state.
   *
   * When tasks changes, React re-renders this component and these values update.
   */
  const dashboardCards = [
    {
      id: "concepts",
      title: "Concepts",
      value: "8",
      description: "React concepts practised across the first two modules.",
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
        <p className="eyebrow">Module 2</p>
        <h2>State, Events & Interactive UI</h2>
        <p>
          This step adds interactivity. We can now update the UI by changing
          React state when the user clicks a button.
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